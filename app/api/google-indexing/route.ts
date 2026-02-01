import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";
import { google } from "googleapis";

/**
 * Google Indexing API v3 Integration
 * 
 * This endpoint allows you to notify Google about new or updated pages
 * for faster indexing. This requires OAuth 2.0 setup in Google Cloud Console.
 * 
 * IMPORTANT: This requires manual OAuth 2.0 setup:
 * 1. Go to Google Cloud Console
 * 2. Enable Google Indexing API
 * 3. Create OAuth 2.0 credentials (Service Account)
 * 4. Download JSON key file
 * 5. Set GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY env vars
 * 
 * Usage:
 * POST /api/google-indexing
 * Body: { "urls": ["/calculators/finance/salary-calculator"] }
 * 
 * Or for a single URL:
 * Body: { "url": "/calculators/finance/salary-calculator" }
 */

interface GoogleIndexingRequest {
  url?: string;
  urls?: string[];
  type?: "URL_UPDATED" | "URL_DELETED";
}

interface GoogleIndexingPayload {
  url: string;
  type: "URL_UPDATED" | "URL_DELETED";
}

// Google Indexing API endpoint
const GOOGLE_INDEXING_API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";

/**
 * Get OAuth 2.0 access token using service account
 * This requires googleapis package: npm install googleapis
 */
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
  // Replace escaped newlines with actual newlines
  privateKey = privateKey.replace(/\\n/g, "\n");
  
  // Remove any surrounding quotes if present
  privateKey = privateKey.replace(/^["']|["']$/g, "");
  
  // Ensure proper formatting
  if (!privateKey.includes("BEGIN PRIVATE KEY")) {
    throw new Error("Invalid private key format: missing BEGIN PRIVATE KEY");
  }

  try {
    // Create JWT client for service account authentication
    // JWT constructor signature: new JWT(options) where options can include email, key, scopes
    const jwtClient = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/indexing"], // Required scope for Indexing API
    });

    // Authorize and get access token
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

/**
 * Notify Google about URL updates
 */
async function notifyGoogle(url: string, type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"): Promise<{ success: boolean; error?: string }> {
  try {
    const accessToken = await getAccessToken();
    
    // Ensure URL is absolute
    const absoluteUrl = url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
    
    const payload: GoogleIndexingPayload = {
      url: absoluteUrl,
      type,
    };

    const response = await fetch(GOOGLE_INDEXING_API_URL, {
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

export async function POST(request: NextRequest) {
  try {
    // Check for API key in headers (simple auth)
    const authHeader = request.headers.get("x-api-key");
    const expectedKey = process.env.GOOGLE_INDEXING_API_SECRET || "your-secret-key";
    
    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body: GoogleIndexingRequest = await request.json();
    
    // Collect URLs to submit
    let urlsToSubmit: string[] = [];
    
    if (body.url) {
      urlsToSubmit.push(body.url);
    }
    
    if (body.urls && Array.isArray(body.urls)) {
      urlsToSubmit = [...urlsToSubmit, ...body.urls];
    }
    
    if (urlsToSubmit.length === 0) {
      return NextResponse.json(
        { error: "No URLs provided. Use 'url' or 'urls' field." },
        { status: 400 }
      );
    }

    const type = body.type || "URL_UPDATED";
    const results = await Promise.allSettled(
      urlsToSubmit.map(url => notifyGoogle(url, type))
    );

    const successful = results
      .filter(r => r.status === "fulfilled" && r.value.success === true)
      .map(r => (r.status === "fulfilled" ? r.value : null));
    
    const failed = results
      .filter(r => r.status === "fulfilled" && r.value.success === false)
      .map((r, index) => ({
        url: urlsToSubmit[index],
        error: r.status === "fulfilled" ? r.value.error : "Unknown error",
      }));

    const successCount = successful.length;

    return NextResponse.json({
      success: successCount > 0,
      message: `Notified Google about ${successCount}/${urlsToSubmit.length} URL(s)`,
      urls: urlsToSubmit,
      successful: successful.length,
      failed: failed.length,
      errors: failed.length > 0 ? failed : undefined,
    });
    
  } catch (error) {
    console.error("Google Indexing API error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
        note: "Google Indexing API requires OAuth 2.0 setup. See code comments for setup instructions.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint to verify the API is working
 */
export async function GET() {
  return NextResponse.json({
    service: "Google Indexing API",
    status: "configured",
    note: "This API requires OAuth 2.0 setup in Google Cloud Console. See code comments for instructions.",
    setupRequired: [
      "1. Enable Google Indexing API in Google Cloud Console",
      "2. Create OAuth 2.0 Service Account credentials",
      "3. Download JSON key file",
      "4. Set GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY environment variables",
      "5. Install googleapis package: npm install googleapis",
      "6. Uncomment OAuth code in app/api/google-indexing/route.ts",
    ],
    usage: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "your-secret-key",
      },
      body: {
        url: "/path/to/page",
        // OR
        urls: ["/path/to/page1", "/path/to/page2"],
        type: "URL_UPDATED" // or "URL_DELETED"
      },
    },
  });
}
