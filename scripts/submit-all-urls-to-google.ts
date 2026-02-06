/**
 * Submit All URLs to Google Indexing API (bulk endpoint)
 *
 * Calls POST /api/google-indexing/bulk with type: "all" so the server
 * submits all indexable URLs to Google Indexing API with proper batching
 * and rate limiting (Google allows up to 200/day).
 *
 * Usage:
 *   npm run submit:urls
 *   npx tsx scripts/submit-all-urls-to-google.ts
 *
 * Environment:
 *   - GOOGLE_INDEXING_API_SECRET: must match server env (for x-api-key)
 *   - NEXT_PUBLIC_SITE_URL: site base URL (default https://calculator360pro.com)
 *
 * Server must have: GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL, GOOGLE_INDEXING_PRIVATE_KEY
 */

import { getAllIndexableUrls } from "../lib/indexing/get-all-urls";
import { SITE_URL } from "../lib/constants";

const API_URL = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL || "https://calculator360pro.com";
const API_SECRET = process.env.GOOGLE_INDEXING_API_SECRET || "calculator360pro-indexing-api-secret-2026-1769963462239";

async function submitAllUrlsViaBulk(): Promise<{
  success: boolean;
  totalUrls: number;
  successful: number;
  failed: number;
  message: string;
  errors?: Array<{ url: string; error: string }>;
}> {
  const response = await fetch(`${API_URL}/api/google-indexing/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_SECRET,
    },
    body: JSON.stringify({ type: "all" }),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      totalUrls: 0,
      successful: 0,
      failed: 0,
      message: data.error || data.message || `HTTP ${response.status}`,
      errors: data.errors,
    };
  }

  return {
    success: data.success ?? false,
    totalUrls: data.totalUrls ?? 0,
    successful: data.successful ?? 0,
    failed: data.failed ?? 0,
    message: data.message ?? "",
    errors: data.errors,
  };
}

async function main() {
  console.log("🚀 Google Indexing API - Submit All URLs (bulk)\n");
  console.log("=".repeat(60));

  try {
    const urls = getAllIndexableUrls();
    console.log(`\n📋 Indexable URLs: ${urls.length}`);
    console.log(`   Target: ${API_URL}/api/google-indexing/bulk`);
    console.log(`\n📤 Sending single bulk request (type: all)...\n`);

    const result = await submitAllUrlsViaBulk();

    console.log("=".repeat(60));
    console.log("📊 RESULT");
    console.log("=".repeat(60));
    console.log(result.message);
    console.log(`   Total: ${result.totalUrls} | ✅ ${result.successful} | ❌ ${result.failed}`);

    if (result.errors && result.errors.length > 0) {
      console.log(`\n⚠️  Errors (${result.errors.length}):`);
      result.errors.slice(0, 10).forEach((err) => {
        console.log(`   - ${err.url}: ${err.error.substring(0, 80)}`);
      });
      if (result.errors.length > 10) {
        console.log(`   ... and ${result.errors.length - 10} more`);
      }
    }

    if (result.successful > 0) {
      console.log(`\n✅ Submitted ${result.successful} URLs to Google Indexing API.`);
    }

    process.exit(result.failed > 0 ? 1 : 0);
  } catch (error) {
    console.error("\n❌ Fatal error:", error);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});

export { submitAllUrlsViaBulk };
