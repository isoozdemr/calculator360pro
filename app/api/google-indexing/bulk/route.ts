import { NextRequest, NextResponse } from "next/server";
import { getAllIndexableUrls, getNewContentUrls } from "@/lib/indexing/get-all-urls";
import { SITE_URL } from "@/lib/constants";
import { google } from "googleapis";

// Import the notifyGoogle function logic
async function getAccessToken(): Promise<string> {
  const serviceAccountEmail = process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY;

  if (!serviceAccountEmail || !privateKey) {
    throw new Error(
      "Google Indexing API credentials not configured. " +
      "Set GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY environment variables."
    );
  }

  // Fix private key formatting for Vercel environment variables
  privateKey = privateKey.trim();
  if ((privateKey.startsWith('"') && privateKey.endsWith('"')) || 
      (privateKey.startsWith("'") && privateKey.endsWith("'"))) {
    privateKey = privateKey.slice(1, -1).trim();
  }
  
  privateKey = privateKey.replace(/\\\\n/g, "\n");
  privateKey = privateKey.replace(/\\n/g, "\n");
  privateKey = privateKey.trim();
  
  if (!privateKey.startsWith("-----BEGIN PRIVATE KEY-----")) {
    throw new Error("Invalid private key format: must start with -----BEGIN PRIVATE KEY-----");
  }
  
  if (!privateKey.includes("-----END PRIVATE KEY-----")) {
    throw new Error("Invalid private key format: must contain -----END PRIVATE KEY-----");
  }
  
  const endMarker = "-----END PRIVATE KEY-----";
  const endIndex = privateKey.indexOf(endMarker);
  if (endIndex === -1) {
    throw new Error("Invalid private key format: END PRIVATE KEY marker not found");
  }
  
  privateKey = privateKey.substring(0, endIndex + endMarker.length);
  
  if (!privateKey.includes("\n")) {
    throw new Error("Invalid private key format: no newlines found. Key should be multiline.");
  }

  try {
    if (privateKey.length < 1500) {
      throw new Error(`Private key seems too short: ${privateKey.length} characters. Expected 1600+ characters.`);
    }
    
    const jwtClient = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    await jwtClient.authorize();

    if (!jwtClient.credentials.access_token) {
      throw new Error("Failed to obtain access token from Google");
    }

    return jwtClient.credentials.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw new Error(
      `Failed to authenticate with Google: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

async function notifyGoogle(url: string, type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"): Promise<{ success: boolean; error?: string }> {
  try {
    const accessToken = await getAccessToken();
    
    const absoluteUrl = url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
    
    const payload = {
      url: absoluteUrl,
      type,
    };

    const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Google Indexing API error for ${absoluteUrl}:`, response.status, errorText);
      return {
        success: false,
        error: `HTTP ${response.status}: ${errorText}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Google Indexing API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Bulk Google Indexing API Endpoint
 * 
 * This endpoint allows you to submit all URLs or new URLs to Google Indexing API
 * 
 * Usage:
 * POST /api/google-indexing/bulk
 * Body: { "type": "all" | "new", "days": 7 }
 * 
 * Headers:
 *   x-api-key: your-secret-key
 */

interface BulkIndexingRequest {
  type?: "all" | "new";
  days?: number; // For "new" type, how many days back to check
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key in headers
    const authHeader = request.headers.get("x-api-key");
    const expectedKey = process.env.GOOGLE_INDEXING_API_SECRET || "your-secret-key";
    
    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body: BulkIndexingRequest = await request.json();
    const type = body.type || "all";
    const days = body.days || 7;

    // Get URLs based on type
    let urls: string[] = [];
    if (type === "new") {
      urls = getNewContentUrls(days);
    } else {
      urls = getAllIndexableUrls();
    }

    if (urls.length === 0) {
      return NextResponse.json({
        success: true,
        message: `No URLs found for type: ${type}`,
        urls: [],
        successful: 0,
        failed: 0,
      });
    }

    // Process URLs in batches (Google allows up to 200 URLs per day)
    const BATCH_SIZE = 10;
    const results = {
      successful: 0,
      failed: 0,
      errors: [] as Array<{ url: string; error: string }>,
    };
    
    // Process URLs in batches
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      
      // Process batch in parallel
      const batchResults = await Promise.allSettled(
        batch.map(url => notifyGoogle(url, "URL_UPDATED"))
      );

      batchResults.forEach((result, index) => {
        if (result.status === "fulfilled" && result.value.success) {
          results.successful++;
        } else {
          results.failed++;
          results.errors.push({
            url: batch[index],
            error: result.status === "fulfilled" 
              ? (result.value.error || "Unknown error")
              : (result.reason instanceof Error ? result.reason.message : "Unknown error"),
          });
        }
      });

      // Small delay between batches to avoid rate limiting
      if (i + BATCH_SIZE < urls.length) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    return NextResponse.json({
      success: results.successful > 0,
      message: `Processed ${urls.length} URLs: ${results.successful} successful, ${results.failed} failed`,
      type,
      totalUrls: urls.length,
      successful: results.successful,
      failed: results.failed,
      errors: results.errors.length > 0 ? results.errors : undefined,
    });

  } catch (error) {
    console.error("Bulk indexing error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint to get information about bulk indexing
 */
export async function GET() {
  const allUrls = getAllIndexableUrls();
  const newUrls = getNewContentUrls(7);

  return NextResponse.json({
    service: "Google Indexing API - Bulk Submission",
    status: "configured",
    stats: {
      totalIndexableUrls: allUrls.length,
      newUrlsLast7Days: newUrls.length,
    },
    usage: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "your-secret-key",
      },
      body: {
        type: "all", // or "new"
        days: 7, // For "new" type, how many days back to check
      },
    },
    note: "This endpoint processes URLs in batches to avoid rate limits. Google allows up to 200 URLs per day.",
  });
}
