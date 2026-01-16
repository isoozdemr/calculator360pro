/**
 * Content Freshness Check Script
 * 
 * Checks content freshness and identifies content that needs review
 * 
 * Usage: node scripts/check-content-freshness.js
 */

const fs = require("fs");
const path = require("path");

// Read content tracking file
const trackingPath = path.join(__dirname, "../lib/content-tracking.ts");
const trackingContent = fs.readFileSync(trackingPath, "utf-8");

// Extract content updates
const updatePattern = /"([^"]+)":\s*\{[\s\S]*?lastUpdated:\s*"([^"]+)",[\s\S]*?nextReview:\s*"([^"]+)"/g;
const matches = [...trackingContent.matchAll(updatePattern)];

const today = new Date();
const contentNeedingReview = [];
const upToDate = [];

console.log("\n=== Content Freshness Check ===\n");

matches.forEach((match) => {
  const url = match[1];
  const lastUpdated = new Date(match[2]);
  const nextReview = new Date(match[3]);
  
  const daysSinceUpdate = Math.floor((today - lastUpdated) / (1000 * 60 * 60 * 24));
  const daysUntilReview = Math.floor((nextReview - today) / (1000 * 60 * 60 * 24));
  
  if (today >= nextReview) {
    contentNeedingReview.push({
      url,
      lastUpdated: match[2],
      nextReview: match[3],
      daysSinceUpdate,
      daysOverdue: Math.abs(daysUntilReview),
    });
  } else {
    upToDate.push({
      url,
      lastUpdated: match[2],
      nextReview: match[3],
      daysSinceUpdate,
      daysUntilReview,
    });
  }
});

// Display results
if (contentNeedingReview.length > 0) {
  console.log(`⚠️  Content Needing Review: ${contentNeedingReview.length}\n`);
  console.log("─".repeat(80));
  console.log(`${"URL".padEnd(50)} | Last Updated | Days Overdue`);
  console.log("─".repeat(80));
  
  contentNeedingReview.forEach((item) => {
    const url = item.url.substring(0, 48);
    const lastUpdated = item.lastUpdated;
    const daysOverdue = item.daysOverdue.toString().padStart(12);
    console.log(`${url.padEnd(50)} | ${lastUpdated} | ${daysOverdue} days`);
  });
  
  console.log("─".repeat(80));
  console.log("\n📝 Action Required:");
  console.log("   Review and update the content listed above.");
  console.log("   Update lastUpdated and nextReview dates in lib/content-tracking.ts\n");
} else {
  console.log("✅ All tracked content is up to date!\n");
}

if (upToDate.length > 0) {
  console.log(`✅ Up to Date: ${upToDate.length} pages\n`);
}

console.log(`\n📊 Summary:`);
console.log(`   Total Tracked: ${matches.length}`);
console.log(`   Needs Review: ${contentNeedingReview.length}`);
console.log(`   Up to Date: ${upToDate.length}\n`);

if (contentNeedingReview.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

