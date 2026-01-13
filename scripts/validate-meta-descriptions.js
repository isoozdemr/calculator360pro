/**
 * Meta Description Validation Script
 * 
 * Validates that all calculator meta descriptions are 150-160 characters
 * 
 * Usage: node scripts/validate-meta-descriptions.js
 */

const fs = require('fs');
const path = require('path');

// Read definitions file
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');

// Extract meta description entries
const metaMatches = definitionsFile.matchAll(/metaDescription:\s*"([^"]+)"/g);

const results = [];
let totalCalculators = 0;
let validCalculators = 0;
let shortCalculators = 0;
let longCalculators = 0;

console.log('🔍 Validating calculator meta descriptions...\n');

// We need to match calculator IDs with their meta descriptions
// Extract all calculator definitions
const calculatorMatches = definitionsFile.matchAll(/"([a-z-]+-calculator)":\s*\{[\s\S]*?metaDescription:\s*"([^"]+)"/g);

for (const match of calculatorMatches) {
  const calculatorId = match[1];
  const metaDescription = match[2];
  
  const length = metaDescription.length;
  totalCalculators++;
  
  let status = '✅';
  let issue = '';
  
  if (length < 150) {
    shortCalculators++;
    status = '⚠️';
    issue = `Too short (${length} chars, minimum 150)`;
  } else if (length > 160) {
    longCalculators++;
    status = '⚠️';
    issue = `Too long (${length} chars, maximum 160)`;
  } else {
    validCalculators++;
    issue = 'Valid';
  }
  
  results.push({
    id: calculatorId,
    metaDescription,
    length,
    status,
    issue,
    isValid: length >= 150 && length <= 160,
  });
}

// Sort by length
results.sort((a, b) => a.length - b.length);

// Display results
console.log('📊 Meta Description Validation Results:\n');
console.log('─'.repeat(80));
console.log(`${'Calculator'.padEnd(35)} | Length | Status | Issue`);
console.log('─'.repeat(80));

results.forEach(result => {
  const name = result.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const lengthStr = result.length.toString().padStart(6);
  const statusStr = result.status;
  const issueStr = result.issue;
  console.log(`${name.padEnd(35)} | ${lengthStr} | ${statusStr.padEnd(6)} | ${issueStr}`);
});

console.log('─'.repeat(80));
console.log(`\n📈 Summary:`);
console.log(`   Total Calculators: ${totalCalculators}`);
console.log(`   ✅ Valid (150-160 chars): ${validCalculators}`);
console.log(`   ⚠️  Too Short (<150 chars): ${shortCalculators}`);
console.log(`   ⚠️  Too Long (>160 chars): ${longCalculators}`);

if (shortCalculators > 0 || longCalculators > 0) {
  console.log(`\n⚠️  WARNING: ${shortCalculators + longCalculators} calculator(s) have invalid meta description length!`);
  console.log(`   Please optimize meta descriptions to be 150-160 characters.\n`);
  
  // Show recommendations
  if (shortCalculators > 0) {
    console.log('📝 Recommendations for short descriptions:');
    results
      .filter(r => r.length < 150)
      .forEach(r => {
        const needed = 150 - r.length;
        console.log(`   - ${r.id}: Add ${needed} more characters`);
      });
    console.log('');
  }
  
  if (longCalculators > 0) {
    console.log('📝 Recommendations for long descriptions:');
    results
      .filter(r => r.length > 160)
      .forEach(r => {
        const excess = r.length - 160;
        console.log(`   - ${r.id}: Remove ${excess} characters`);
      });
    console.log('');
  }
  
  process.exit(1);
} else {
  console.log(`\n✅ All meta descriptions are within the optimal 150-160 character range!\n`);
  process.exit(0);
}

