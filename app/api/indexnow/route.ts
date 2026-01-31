import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

/**
 * IndexNow API Endpoint
 * 
 * IndexNow is a protocol that allows websites to notify search engines
 * about content changes for immediate indexing.
 * 
 * Supported search engines:
 * - Microsoft Bing
 * - Yandex
 * - Seznam.cz
 * - Naver
 * 
 * Note: Google does NOT support IndexNow as of 2026, but they have their own
 * Indexing API for certain site types. For Google, continue using:
 * 1. Google Search Console URL Inspection tool
 * 2. Sitemap submission
 * 
 * Usage:
 * POST /api/indexnow
 * Body: { "urls": ["/calculators/finance/salary-calculator", "/tr/hesap-makineleri/finans/maas-hesap-makinesi"] }
 * 
 * Or for a single URL:
 * Body: { "url": "/calculators/finance/salary-calculator" }
 */

// IndexNow API key - this should match the key file at /indexnow-key.txt
// Generate a unique key at: https://www.indexnow.org/
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "calculator360pro-indexnow-key-2026";

// IndexNow endpoints for different search engines
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

interface IndexNowRequest {
  url?: string;
  urls?: string[];
}

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key in headers (simple auth)
    const authHeader = request.headers.get("x-api-key");
    const expectedKey = process.env.INDEXNOW_API_SECRET || "your-secret-key";
    
    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body: IndexNowRequest = await request.json();
    
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
    
    // Limit to 10,000 URLs per request (IndexNow limit)
    if (urlsToSubmit.length > 10000) {
      return NextResponse.json(
        { error: "Maximum 10,000 URLs per request" },
        { status: 400 }
      );
    }
    
    // Convert relative URLs to absolute URLs
    const absoluteUrls = urlsToSubmit.map(url => {
      if (url.startsWith("http")) {
        return url;
      }
      return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
    });
    
    // Prepare IndexNow payload
    const payload: IndexNowPayload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: absoluteUrls,
    };
    
    // Submit to all IndexNow endpoints
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        
        return {
          endpoint,
          status: response.status,
          ok: response.ok,
        };
      })
    );
    
    // Process results
    const submissionResults = results.map((result, index) => {
      if (result.status === "fulfilled") {
        return result.value;
      }
      return {
        endpoint: INDEXNOW_ENDPOINTS[index],
        status: 0,
        ok: false,
        error: result.reason?.message || "Unknown error",
      };
    });
    
    const successCount = submissionResults.filter(r => r.ok).length;
    
    return NextResponse.json({
      success: successCount > 0,
      message: `Submitted ${absoluteUrls.length} URL(s) to ${successCount}/${INDEXNOW_ENDPOINTS.length} search engines`,
      urls: absoluteUrls,
      results: submissionResults,
    });
    
  } catch (error) {
    console.error("IndexNow API error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
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
    service: "IndexNow API",
    status: "active",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    supportedEngines: ["Bing", "Yandex", "Seznam", "Naver"],
    note: "Google does not support IndexNow. Use Google Search Console for Google indexing.",
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
      },
    },
  });
}
