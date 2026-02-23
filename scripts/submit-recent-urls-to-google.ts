/**
 * Submit only recently added page URLs to Google Indexing API (bulk endpoint).
 *
 * Calls POST /api/google-indexing/bulk with type: "recent" so the server
 * submits only the URLs from getRecentlyAddedPageUrls() (e.g. /guides).
 *
 * Usage:
 *   npx tsx scripts/submit-recent-urls-to-google.ts
 *   NEXT_PUBLIC_SITE_URL=https://calculator360pro.com npx tsx scripts/submit-recent-urls-to-google.ts
 *
 * Environment:
 *   - GOOGLE_INDEXING_API_SECRET: must match server env (for x-api-key)
 *   - NEXT_PUBLIC_SITE_URL: site base URL (default https://calculator360pro.com)
 *
 * Server must have: GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL, GOOGLE_INDEXING_PRIVATE_KEY
 */

import { getRecentlyAddedPageUrls } from "../lib/indexing/get-all-urls";
import { SITE_URL } from "../lib/constants";

const API_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || SITE_URL || "https://calculator360pro.com";
const API_SECRET = process.env.GOOGLE_INDEXING_API_SECRET || "calculator360pro-indexing-api-secret-2026-1769963462239";

async function submitRecentUrlsViaBulk(): Promise<{
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
    body: JSON.stringify({ type: "recent" }),
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
  const recentUrls = getRecentlyAddedPageUrls();
  console.log("🚀 Google Indexing API - Submit recent page URLs only\n");
  console.log("=".repeat(60));
  console.log(`\n📋 Recent page URLs to submit: ${recentUrls.length}`);
  recentUrls.forEach((u) => console.log(`   - ${u}`));
  console.log(`\n   Target: ${API_URL}/api/google-indexing/bulk (type: recent)\n`);

  try {
    const result = await submitRecentUrlsViaBulk();

    console.log("=".repeat(60));
    console.log("📊 RESULT");
    console.log("=".repeat(60));
    console.log(result.message);
    console.log(`   Total: ${result.totalUrls} | ✅ ${result.successful} | ❌ ${result.failed}`);

    if (result.errors && result.errors.length > 0) {
      console.log(`\n⚠️  Errors (${result.errors.length}):`);
      result.errors.forEach((err) => {
        console.log(`   - ${err.url}: ${err.error.substring(0, 80)}`);
      });
    }

    if (result.successful > 0) {
      console.log(`\n✅ Submitted ${result.successful} recent URL(s) to Google Indexing API.`);
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

export { submitRecentUrlsViaBulk };
