/**
 * Keywords Density Analysis Script
 * 
 * Analyzes keyword density in calculator content to ensure optimal SEO
 * Checks primary keywords, secondary keywords, and semantic keywords
 * 
 * Usage: node scripts/analyze-keywords-density.js [calculator-id]
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing keywords density...\n');

// Read calculator definitions
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');

// Read calculator content
const contentPath = path.join(__dirname, '../lib/calculators/content.ts');
const contentFile = fs.readFileSync(contentPath, 'utf8');

// Extract calculator IDs
const calculatorIds = [];
const calculatorMatches = definitionsFile.matchAll(/"([a-z-]+-calculator)":\s*\{/g);
for (const match of calculatorMatches) {
  calculatorIds.push(match[1]);
}

// Get calculator ID from command line or analyze all
const targetCalculator = process.argv[2];

const calculatorsToAnalyze = targetCalculator 
  ? [targetCalculator]
  : calculatorIds;

const results = [];

for (const calculatorId of calculatorsToAnalyze) {
  // Extract calculator definition - find the calculator block
  const calculatorStartRegex = new RegExp(`"${calculatorId}":\\s*\\{`, 's');
  const calculatorStartMatch = definitionsFile.match(calculatorStartRegex);
  
  if (!calculatorStartMatch) {
    console.log(`⚠️  Calculator "${calculatorId}" not found in definitions`);
    continue;
  }
  
  const startIndex = calculatorStartMatch.index;
  let braceCount = 0;
  let inCalculator = false;
  let calculatorBlock = '';
  
  // Extract the complete calculator block
  for (let i = startIndex; i < definitionsFile.length; i++) {
    const char = definitionsFile[i];
    if (char === '{') {
      braceCount++;
      inCalculator = true;
    }
    if (inCalculator) {
      calculatorBlock += char;
    }
    if (char === '}') {
      braceCount--;
      if (braceCount === 0 && inCalculator) {
        break;
      }
    }
  }
  
  // Extract keywords from the block
  const keywordsMatch = calculatorBlock.match(/keywords:\s*\[([^\]]+)\]/s);
  if (!keywordsMatch) {
    console.log(`⚠️  No keywords found for "${calculatorId}"`);
    continue;
  }
  
  const keywordsStr = keywordsMatch[1];
  const keywords = keywordsStr
    .split(',')
    .map(k => k.trim().replace(/"/g, '').replace(/'/g, ''))
    .filter(k => k.length > 0);
  
  if (keywords.length === 0) {
    console.log(`⚠️  No keywords found for "${calculatorId}"`);
    continue;
  }
  
  const primaryKeyword = keywords[0];
  const secondaryKeywords = keywords.slice(1);
  
  // Extract content
  const contentRegex = new RegExp(`"${calculatorId}":\\s*\`([^\`]+)\``, 's');
  const contentMatch = contentFile.match(contentRegex);
  
  if (!contentMatch) {
    console.log(`⚠️  Content not found for "${calculatorId}"`);
    continue;
  }
  
  const content = contentMatch[1];
  
  // Remove HTML tags for word count
  const textContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textContent.split(/\s+/).filter(w => w.length > 0);
  const totalWords = words.length;
  
  // Count keyword occurrences (case-insensitive)
  const keywordCounts = {};
  const keywordDensities = {};
  
  // Count primary keyword
  const primaryRegex = new RegExp(`\\b${primaryKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
  const primaryMatches = textContent.match(primaryRegex);
  keywordCounts[primaryKeyword] = primaryMatches ? primaryMatches.length : 0;
  keywordDensities[primaryKeyword] = totalWords > 0 ? (keywordCounts[primaryKeyword] / totalWords * 100).toFixed(2) : 0;
  
  // Count secondary keywords
  for (const keyword of secondaryKeywords) {
    const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = textContent.match(keywordRegex);
    keywordCounts[keyword] = matches ? matches.length : 0;
    keywordDensities[keyword] = totalWords > 0 ? (keywordCounts[keyword] / totalWords * 100).toFixed(2) : 0;
  }
  
  // Check keyword placement
  const firstParagraph = textContent.substring(0, 500);
  const hasPrimaryInFirstParagraph = firstParagraph.toLowerCase().includes(primaryKeyword.toLowerCase());
  
  // Check H2/H3 headings
  const headingMatches = content.matchAll(/<h[23][^>]*>([^<]+)<\/h[23]>/gi);
  const headings = Array.from(headingMatches).map(m => m[1]);
  const headingsWithKeywords = headings.filter(h => 
    keywords.some(k => h.toLowerCase().includes(k.toLowerCase()))
  );
  
  // Check FAQ section (multiple possible formats)
  const faqPatterns = [
    /<h3>Frequently Asked Questions[^<]*<\/h3>[\s\S]*/i,
    /<h3>Frequently Asked Questions About[^<]*<\/h3>[\s\S]*/i,
    /<h3>FAQ[^<]*<\/h3>[\s\S]*/i,
  ];
  let faqSection = null;
  for (const pattern of faqPatterns) {
    const match = content.match(pattern);
    if (match) {
      faqSection = match;
      break;
    }
  }
  const hasKeywordsInFAQs = faqSection ? keywords.some(k => faqSection[0].toLowerCase().includes(k.toLowerCase())) : false;
  
  // Recommendations
  const recommendations = [];
  
  // Primary keyword density check (target: 1-2%)
  const primaryDensity = parseFloat(keywordDensities[primaryKeyword]);
  if (primaryDensity < 1) {
    recommendations.push(`Primary keyword "${primaryKeyword}" density is ${primaryDensity}% (target: 1-2%). Consider adding more natural mentions.`);
  } else if (primaryDensity > 2.5) {
    recommendations.push(`Primary keyword "${primaryKeyword}" density is ${primaryDensity}% (target: 1-2%). May be over-optimized.`);
  }
  
  // Secondary keywords check
  for (const keyword of secondaryKeywords.slice(0, 3)) { // Check top 3 secondary keywords
    const density = parseFloat(keywordDensities[keyword]);
    if (density < 0.3 && density > 0) {
      recommendations.push(`Secondary keyword "${keyword}" has low density (${density}%). Consider natural integration.`);
    }
  }
  
  // First paragraph check
  if (!hasPrimaryInFirstParagraph) {
    recommendations.push(`Primary keyword "${primaryKeyword}" not found in first paragraph. Consider adding it naturally.`);
  }
  
  // Headings check
  const headingKeywordRatio = headings.length > 0 ? (headingsWithKeywords.length / headings.length * 100).toFixed(1) : 0;
  if (parseFloat(headingKeywordRatio) < 30 && headings.length > 0) {
    recommendations.push(`Only ${headingKeywordRatio}% of headings contain keywords. Consider adding keywords to more headings.`);
  }
  
  // FAQ check
  if (!hasKeywordsInFAQs && faqSection) {
    recommendations.push(`Keywords not found in FAQ section. Consider adding question-based keywords.`);
  }
  
  results.push({
    id: calculatorId,
    primaryKeyword,
    totalWords,
    keywordCounts,
    keywordDensities,
    hasPrimaryInFirstParagraph,
    headingKeywordRatio,
    hasKeywordsInFAQs,
    recommendations,
  });
}

// Display results
if (results.length === 0) {
  console.log('No calculators found to analyze.');
  process.exit(0);
}

console.log('📊 Keywords Density Analysis Results:\n');
console.log('─'.repeat(100));

for (const result of results) {
  const name = result.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  console.log(`\n${name} (${result.totalWords} words)`);
  console.log(`Primary Keyword: "${result.primaryKeyword}"`);
  console.log(`  Density: ${result.keywordDensities[result.primaryKeyword]}% (Target: 1-2%)`);
  console.log(`  Count: ${result.keywordCounts[result.primaryKeyword]}`);
  console.log(`  In first paragraph: ${result.hasPrimaryInFirstParagraph ? '✅' : '❌'}`);
  console.log(`  Headings with keywords: ${result.headingKeywordRatio}%`);
  console.log(`  Keywords in FAQs: ${result.hasKeywordsInFAQs ? '✅' : '❌'}`);
  
  if (result.recommendations.length > 0) {
    console.log(`\n  Recommendations:`);
    result.recommendations.forEach(rec => console.log(`    - ${rec}`));
  }
  
  console.log('─'.repeat(100));
}

// Summary
console.log(`\n📈 Summary:`);
console.log(`   Analyzed: ${results.length} calculator(s)`);
console.log(`   Total words analyzed: ${results.reduce((sum, r) => sum + r.totalWords, 0)}`);

const primaryKeywordIssues = results.filter(r => {
  const density = parseFloat(r.keywordDensities[r.primaryKeyword]);
  return density < 1 || density > 2.5;
}).length;

if (primaryKeywordIssues > 0) {
  console.log(`   ⚠️  Primary keyword density issues: ${primaryKeywordIssues}`);
}

console.log(`\n📝 Next Steps:`);
console.log(`   1. Review keyword density recommendations`);
console.log(`   2. Add semantic keywords (LSI terms) naturally`);
console.log(`   3. Ensure primary keyword in first paragraph`);
console.log(`   4. Add keywords to headings where appropriate`);
console.log(`   5. Include keywords in FAQ section`);

