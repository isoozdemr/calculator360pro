/**
 * Content Length Validation Script
 * 
 * Validates that all calculator content has minimum 2000 words
 * 
 * Usage: node scripts/validate-content-length.js
 */

const fs = require('fs');
const path = require('path');

// Read content file
const contentPath = path.join(__dirname, '../lib/calculators/content.ts');
const contentFile = fs.readFileSync(contentPath, 'utf8');

// Extract content entries
const contentMatches = contentFile.matchAll(/"([a-z-]+-calculator)":\s*`([\s\S]*?)`,/g);

const results = [];
let totalCalculators = 0;
let validCalculators = 0;
let invalidCalculators = 0;

console.log('🔍 Validating calculator content length...\n');

for (const match of contentMatches) {
  const calculatorId = match[1];
  const content = match[2];
  
  // Remove HTML tags for word count
  const textContent = content.replace(/<[^>]*>/g, ' ');
  
  // Count words (split by whitespace and filter empty strings)
  const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  totalCalculators++;
  const isValid = wordCount >= 2000;
  
  if (isValid) {
    validCalculators++;
  } else {
    invalidCalculators++;
  }
  
  results.push({
    id: calculatorId,
    wordCount,
    isValid,
    status: isValid ? '✅' : '⚠️',
  });
}

// Sort by word count
results.sort((a, b) => a.wordCount - b.wordCount);

// Display results
console.log('📊 Content Length Validation Results:\n');
console.log('─'.repeat(60));
console.log(`${'Calculator'.padEnd(35)} | Words  | Status`);
console.log('─'.repeat(60));

results.forEach(result => {
  const name = result.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const wordCountStr = result.wordCount.toString().padStart(6);
  const statusStr = result.isValid ? '✅ Valid' : '⚠️ Short';
  console.log(`${name.padEnd(35)} | ${wordCountStr} | ${statusStr}`);
});

console.log('─'.repeat(60));
console.log(`\n📈 Summary:`);
console.log(`   Total Calculators: ${totalCalculators}`);
console.log(`   ✅ Valid (≥2000 words): ${validCalculators}`);
console.log(`   ⚠️  Invalid (<2000 words): ${invalidCalculators}`);

if (invalidCalculators > 0) {
  console.log(`\n⚠️  WARNING: ${invalidCalculators} calculator(s) have less than 2000 words!`);
  console.log(`   Please expand content to meet the minimum requirement.\n`);
  process.exit(1);
} else {
  console.log(`\n✅ All calculators meet the minimum 2000 words requirement!\n`);
  process.exit(0);
}

