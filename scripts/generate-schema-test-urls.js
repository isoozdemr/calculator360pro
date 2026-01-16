/**
 * Generate Schema Test URLs Script
 * 
 * Generates test URLs for Google Rich Results Test for all calculators
 * Creates a checklist and direct test links
 * 
 * Usage: node scripts/generate-schema-test-urls.js
 */

const fs = require('fs');
const path = require('path');

// Read definitions file to get all calculators
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');

// Read constants to get SITE_URL and category mappings
const constantsPath = path.join(__dirname, '../lib/constants.ts');
const constantsFile = fs.readFileSync(constantsPath, 'utf8');
const siteUrlMatch = constantsFile.match(/SITE_URL\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL\s*\|\|\s*"([^"]+)"/);
const SITE_URL = siteUrlMatch ? siteUrlMatch[1] : 'https://calculator360pro.com';

// Extract category slug mappings
const categoryMappings = {};
const categoryMatches = constantsFile.matchAll(/(\w+):\s*\{\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g);
for (const match of categoryMatches) {
  categoryMappings[match[1]] = { name: match[2], slug: match[3] };
}

// Extract all calculator IDs
const calculatorMatches = definitionsFile.matchAll(/"([a-z-]+-calculator)":\s*\{/g);
const calculatorIds = Array.from(calculatorMatches, match => match[1]);

console.log('🔗 Generating schema test URLs...\n');

const testUrls = [];
const googleRichResultsTestBase = 'https://search.google.com/test/rich-results?url=';

// Process each calculator
for (const calculatorId of calculatorIds) {
  // Extract calculator definition
  const calcRegex = new RegExp(`"${calculatorId}":\\s*\\{([\\s\\S]*?)\\},`, 'g');
  const calcMatch = calcRegex.exec(definitionsFile);
  
  if (!calcMatch) {
    continue;
  }
  
  const calcDefinition = calcMatch[1];
  
  // Extract calculator fields
  const categoryMatch = calcDefinition.match(/category:\s*"([^"]+)"/);
  const category = categoryMatch ? categoryMatch[1] : null;
  
  const slugMatch = calcDefinition.match(/slug:\s*"([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : null;
  
  const nameMatch = calcDefinition.match(/name:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : null;
  
  // Extract FAQs
  const faqsMatch = calcDefinition.match(/faqs:\s*\[([\s\S]*?)\]/);
  const hasFAQs = faqsMatch && faqsMatch[1].trim().length > 0;
  
  if (category && slug && name) {
    const categorySlug = categoryMappings[category]?.slug || category;
    const pageUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
    const testUrl = `${googleRichResultsTestBase}${encodeURIComponent(pageUrl)}`;
    
    testUrls.push({
      id: calculatorId,
      name,
      category,
      categorySlug,
      slug,
      pageUrl,
      testUrl,
      hasFAQs,
    });
  }
}

// Generate output
console.log('📋 Schema Test URLs Generated:\n');
console.log('─'.repeat(100));
console.log(`${'Calculator'.padEnd(35)} | Category | URL | FAQs`);
console.log('─'.repeat(100));

testUrls.forEach((item, index) => {
  const name = item.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const categoryStr = (item.category || 'N/A').padEnd(15);
  const faqsStr = item.hasFAQs ? 'Yes' : 'No';
  const urlShort = item.pageUrl.length > 40 ? item.pageUrl.substring(0, 37) + '...' : item.pageUrl;
  
  console.log(`${name.padEnd(35)} | ${categoryStr} | ${urlShort.padEnd(40)} | ${faqsStr}`);
});

console.log('─'.repeat(100));
console.log(`\n📊 Summary:`);
console.log(`   Total Calculators: ${testUrls.length}`);
console.log(`   Calculators with FAQs: ${testUrls.filter(u => u.hasFAQs).length}`);
console.log(`   Calculators without FAQs: ${testUrls.filter(u => !u.hasFAQs).length}`);

// Generate markdown checklist
const checklistPath = path.join(__dirname, '../docs/SCHEMA_TEST_CHECKLIST.md');
const checklistContent = `# Schema Validation Test Checklist

## Google Rich Results Test

**Test Tool:** https://search.google.com/test/rich-results

**Total Calculators:** ${testUrls.length}

## Test URLs

| # | Calculator | Category | Page URL | Test Link | FAQs | Status |
|---|------------|----------|----------|-----------|------|--------|
${testUrls.map((item, index) => {
  const testLink = `[Test](${item.testUrl})`;
  const faqsStr = item.hasFAQs ? 'Yes' : 'No';
  return `| ${index + 1} | ${item.name} | ${item.category} | ${item.pageUrl} | ${testLink} | ${faqsStr} | ⬜ |
`;
}).join('')}

## Schema Types to Validate

For each calculator, validate the following schema types:

### 1. WebApplication Schema
- [ ] \`@context\` is "https://schema.org"
- [ ] \`@type\` is "WebApplication"
- [ ] \`name\` matches calculator name
- [ ] \`description\` matches calculator description
- [ ] \`url\` is correct and accessible
- [ ] \`applicationCategory\` is "UtilityApplication"
- [ ] \`operatingSystem\` is "Web"
- [ ] \`offers\` object is present with:
  - [ ] \`@type\` is "Offer"
  - [ ] \`price\` is "0"
  - [ ] \`priceCurrency\` is "USD"

### 2. FAQPage Schema (if FAQs exist)
- [ ] \`@context\` is "https://schema.org"
- [ ] \`@type\` is "FAQPage"
- [ ] \`mainEntity\` is an array
- [ ] Each FAQ item has:
  - [ ] \`@type\` is "Question"
  - [ ] \`name\` matches FAQ question
  - [ ] \`acceptedAnswer\` object with:
    - [ ] \`@type\` is "Answer"
    - [ ] \`text\` matches FAQ answer
    - [ ] Answer is 40-60 words (for featured snippets)

### 3. BreadcrumbList Schema
- [ ] \`@context\` is "https://schema.org"
- [ ] \`@type\` is "BreadcrumbList"
- [ ] \`itemListElement\` is an array with 4 items:
  - [ ] Position 1: Home (URL: ${SITE_URL})
  - [ ] Position 2: Calculators (URL: ${SITE_URL}/calculators)
  - [ ] Position 3: Category name (URL: ${SITE_URL}/calculators/[category-slug])
  - [ ] Position 4: Calculator name (URL: ${SITE_URL}/calculators/[category-slug]/[calculator-slug])
- [ ] Each item has:
  - [ ] \`@type\` is "ListItem"
  - [ ] \`position\` is correct (1, 2, 3, 4)
  - [ ] \`name\` is correct
  - [ ] \`item\` is a valid URL

## Common Issues and Solutions

### Issue: "Missing required field"
**Solution:** Check that all required fields are present in the schema generation function.

### Issue: "Invalid URL"
**Solution:** Verify that \`getCategorySlugByKey\` is used correctly for URL generation.

### Issue: "Schema content doesn't match page content"
**Solution:** Ensure schema fields match the calculator definition exactly.

### Issue: "FAQ answer too short/long"
**Solution:** Optimize FAQ answers to be 40-60 words for featured snippets.

## Testing Workflow

1. Run validation scripts:
   \`\`\`bash
   npm run validate:schema
   npm run validate:schema-content
   \`\`\`

2. For each calculator:
   - Click the test link in the table above
   - Verify all schema types are detected
   - Check for any errors or warnings
   - Update status in the checklist

3. Fix any issues found:
   - Update schema generation functions if needed
   - Fix calculator definitions if content doesn't match
   - Re-run validation scripts

4. Document results:
   - Mark status as ✅ (passed) or ❌ (failed)
   - Note any issues in the comments
   - Update this checklist

## Notes

- Test URLs are generated for production site (${SITE_URL})
- For local testing, replace \`${SITE_URL}\` with your local URL
- Some schema types may not show rich results immediately (Google needs to crawl)
- Focus on fixing errors first, then optimize warnings

## Last Updated

${new Date().toISOString().split('T')[0]}

`;

fs.writeFileSync(checklistPath, checklistContent, 'utf8');
console.log(`\n✅ Generated test checklist: ${checklistPath}`);

// Generate JSON file for programmatic access
const jsonPath = path.join(__dirname, '../docs/schema-test-urls.json');
const jsonContent = {
  generatedAt: new Date().toISOString(),
  siteUrl: SITE_URL,
  totalCalculators: testUrls.length,
  calculators: testUrls.map(item => ({
    id: item.id,
    name: item.name,
    category: item.category,
    categorySlug: item.categorySlug,
    slug: item.slug,
    pageUrl: item.pageUrl,
    testUrl: item.testUrl,
    hasFAQs: item.hasFAQs,
  })),
};

fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
console.log(`✅ Generated JSON file: ${jsonPath}`);

// Generate quick test links file
const quickLinksPath = path.join(__dirname, '../docs/SCHEMA_QUICK_TEST_LINKS.md');
const quickLinksContent = `# Schema Quick Test Links

Quick access to Google Rich Results Test for all calculators.

## Test All Calculators

${testUrls.map((item, index) => {
  return `${index + 1}. [${item.name}](${item.testUrl})`;
}).join('\n')}

## Test by Category

${Object.entries(
  testUrls.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {})
).map(([category, items]) => {
  return `### ${category}\n${items.map(item => `- [${item.name}](${item.testUrl})`).join('\n')}`;
}).join('\n\n')}

## Notes

- Click any link to test that calculator's schema markup
- Test results show detected schema types and any errors
- Fix errors first, then optimize warnings
- Re-test after making changes

`;

fs.writeFileSync(quickLinksPath, quickLinksContent, 'utf8');
console.log(`✅ Generated quick links file: ${quickLinksPath}`);

console.log(`\n✅ All test URL files generated successfully!\n`);

