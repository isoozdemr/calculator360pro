/**
 * Submit All URLs to Google Indexing API
 * 
 * This script submits all indexable URLs from the site to Google Indexing API
 * for faster indexing. It processes URLs in batches to avoid rate limits.
 * 
 * Usage:
 *   npm run submit-urls
 *   or
 *   npx tsx scripts/submit-all-urls-to-google.ts
 * 
 * Environment Variables Required:
 *   - GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL
 *   - GOOGLE_INDEXING_PRIVATE_KEY
 *   - GOOGLE_INDEXING_API_SECRET
 *   - NEXT_PUBLIC_SITE_URL (optional, defaults to https://calculator360pro.com)
 */

import { getAllIndexableUrls } from "../lib/indexing/get-all-urls";
import { SITE_URL } from "../lib/constants";

const API_URL = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL || "https://calculator360pro.com";
const API_SECRET = process.env.GOOGLE_INDEXING_API_SECRET || "calculator360pro-indexing-api-secret-2026-1769963462239";

// Batch size - Google allows up to 200 URLs per day, so we'll process in smaller batches
const BATCH_SIZE = 10;
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds between batches

async function submitUrlsToGoogle(urls: string[]): Promise<{ successful: number; failed: number; errors: Array<{ url: string; error: string }> }> {
  const results = {
    successful: 0,
    failed: 0,
    errors: [] as Array<{ url: string; error: string }>,
  };

  console.log(`\n📤 Submitting ${urls.length} URLs to Google Indexing API...\n`);

  // Process URLs in batches
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(urls.length / BATCH_SIZE);

    console.log(`📦 Processing batch ${batchNumber}/${totalBatches} (${batch.length} URLs)...`);

    try {
      const response = await fetch(`${API_URL}/api/google-indexing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_SECRET,
        },
        body: JSON.stringify({
          urls: batch,
          type: "URL_UPDATED",
        }),
      });

      const data = await response.json();

      if (data.success) {
        results.successful += data.successful || 0;
        results.failed += data.failed || 0;
        if (data.errors) {
          results.errors.push(...data.errors);
        }
        console.log(`   ✅ Batch ${batchNumber}: ${data.successful}/${batch.length} successful`);
      } else {
        results.failed += batch.length;
        batch.forEach((url) => {
          results.errors.push({
            url,
            error: data.error || data.message || "Unknown error",
          });
        });
        console.log(`   ❌ Batch ${batchNumber}: Failed - ${data.error || data.message}`);
      }
    } catch (error) {
      results.failed += batch.length;
      batch.forEach((url) => {
        results.errors.push({
          url,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      });
      console.log(`   ❌ Batch ${batchNumber}: Error - ${error instanceof Error ? error.message : "Unknown error"}`);
    }

    // Delay between batches to avoid rate limiting
    if (i + BATCH_SIZE < urls.length) {
      console.log(`   ⏳ Waiting ${DELAY_BETWEEN_BATCHES}ms before next batch...\n`);
      await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
    }
  }

  return results;
}

async function main() {
  console.log("🚀 Google Indexing API - Submit All URLs\n");
  console.log("=" .repeat(60));

  try {
    // Get all indexable URLs
    const urls = getAllIndexableUrls();
    console.log(`\n📋 Found ${urls.length} indexable URLs:`);
    console.log(`   - Homepages: 2`);
    console.log(`   - Calculator pages: ${urls.filter((u) => u.includes("/calculators/") || u.includes("/hesap-makineleri/")).length}`);
    console.log(`   - Blog posts: ${urls.filter((u) => u.includes("/blog/")).length}`);
    console.log(`   - Category pages: ${urls.filter((u) => u.match(/\/calculators\/[^/]+$/) || u.match(/\/hesap-makineleri\/[^/]+$/)).length}`);
    console.log(`   - Static pages: ${urls.filter((u) => !u.includes("/calculators/") && !u.includes("/blog/") && !u.includes("/hesap-makineleri/")).length}`);

    // Submit URLs
    const results = await submitUrlsToGoogle(urls);

    // Print summary
    console.log("\n" + "=".repeat(60));
    console.log("📊 SUMMARY");
    console.log("=".repeat(60));
    console.log(`✅ Successful: ${results.successful}/${urls.length}`);
    console.log(`❌ Failed: ${results.failed}/${urls.length}`);

    if (results.errors.length > 0) {
      console.log(`\n⚠️  Errors (${results.errors.length}):`);
      results.errors.slice(0, 10).forEach((err) => {
        console.log(`   - ${err.url}: ${err.error.substring(0, 100)}`);
      });
      if (results.errors.length > 10) {
        console.log(`   ... and ${results.errors.length - 10} more errors`);
      }
    }

    if (results.successful > 0) {
      console.log(`\n✅ Successfully submitted ${results.successful} URLs to Google Indexing API!`);
      console.log("   Google will process these URLs within a few hours.");
    }

    if (results.failed > 0) {
      console.log(`\n⚠️  ${results.failed} URLs failed to submit. Check errors above.`);
      process.exit(1);
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error("\n❌ Fatal error:", error);
    process.exit(1);
  }
}

// Run if executed directly
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

export { submitUrlsToGoogle };
