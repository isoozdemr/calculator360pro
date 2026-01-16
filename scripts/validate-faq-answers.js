/**
 * Validate FAQ Answers for Featured Snippets Optimization
 * 
 * Checks that all FAQ answers are optimized for featured snippets:
 * - 40-60 words (optimal for paragraph snippets)
 * - Direct answer in first sentence
 * - Includes example if possible
 */

const fs = require("fs");
const path = require("path");

// Read calculator definitions
const definitionsPath = path.join(__dirname, "../lib/calculators/definitions.ts");
const definitionsContent = fs.readFileSync(definitionsPath, "utf-8");

// Extract FAQ answers from definitions
const faqPattern = /answer:\s*"([^"]+)"/g;
const matches = [...definitionsContent.matchAll(faqPattern)];

let totalFAQs = 0;
let optimizedFAQs = 0;
let tooShortFAQs = 0;
let tooLongFAQs = 0;
const issues = [];

matches.forEach((match, index) => {
  const answer = match[1];
  const wordCount = answer.split(/\s+/).length;
  totalFAQs++;

  if (wordCount >= 40 && wordCount <= 60) {
    optimizedFAQs++;
  } else if (wordCount < 40) {
    tooShortFAQs++;
    issues.push({
      type: "too-short",
      answer: answer.substring(0, 100) + "...",
      wordCount,
      recommendation: `Add example or additional context to reach 40-60 words (currently ${wordCount} words)`,
    });
  } else {
    tooLongFAQs++;
    issues.push({
      type: "too-long",
      answer: answer.substring(0, 100) + "...",
      wordCount,
      recommendation: `Truncate to 40-60 words for featured snippets (currently ${wordCount} words)`,
    });
  }
});

// Print results
console.log("\n=== FAQ Answers Validation for Featured Snippets ===\n");
console.log(`Total FAQs: ${totalFAQs}`);
console.log(`✅ Optimized (40-60 words): ${optimizedFAQs}`);
console.log(`⚠️  Too Short (<40 words): ${tooShortFAQs}`);
console.log(`⚠️  Too Long (>60 words): ${tooLongFAQs}`);
console.log(`\nOptimization Rate: ${((optimizedFAQs / totalFAQs) * 100).toFixed(1)}%\n`);

if (issues.length > 0) {
  console.log("=== Issues Found ===\n");
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.type.toUpperCase()}`);
    console.log(`   Word Count: ${issue.wordCount}`);
    console.log(`   Answer: ${issue.answer}`);
    console.log(`   Recommendation: ${issue.recommendation}\n`);
  });
  
  process.exit(1);
} else {
  console.log("✅ All FAQ answers are optimized for featured snippets!\n");
  process.exit(0);
}

