/**
 * Schema Validation Script
 * 
 * Validates that all calculator schema markups are correctly generated
 * Checks JSON-LD format, required fields, and URL structure
 * 
 * Usage: node scripts/validate-schema.js
 */

const fs = require('fs');
const path = require('path');

// Read definitions file to get all calculators
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');

// Extract all calculator IDs
const calculatorMatches = definitionsFile.matchAll(/"([a-z-]+-calculator)":\s*\{/g);
const calculatorIds = Array.from(calculatorMatches, match => match[1]);

console.log('🔍 Validating calculator schema markups...\n');

const results = [];
let totalCalculators = 0;
let validCalculators = 0;
let invalidCalculators = 0;

// Read constants to get SITE_URL
const constantsPath = path.join(__dirname, '../lib/constants.ts');
const constantsFile = fs.readFileSync(constantsPath, 'utf8');
const siteUrlMatch = constantsFile.match(/SITE_URL\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL\s*\|\|\s*"([^"]+)"/);
const SITE_URL = siteUrlMatch ? siteUrlMatch[1] : 'https://calculator360pro.com';

// Read schema file to validate structure
const schemaPath = path.join(__dirname, '../lib/seo/schema.ts');
const schemaFile = fs.readFileSync(schemaPath, 'utf8');

// Check if schema functions exist
const hasCalculatorSchema = schemaFile.includes('generateCalculatorSchema');
const hasFAQSchema = schemaFile.includes('generateFAQSchema');
const hasBreadcrumbSchema = schemaFile.includes('generateBreadcrumbSchema');

if (!hasCalculatorSchema || !hasFAQSchema || !hasBreadcrumbSchema) {
  console.error('❌ ERROR: Required schema functions not found in lib/seo/schema.ts');
  process.exit(1);
}

// Validate each calculator
for (const calculatorId of calculatorIds) {
  totalCalculators++;
  
  // Extract calculator definition
  const calcRegex = new RegExp(`"${calculatorId}":\\s*\\{([\\s\\S]*?)\\},`, 'g');
  const calcMatch = calcRegex.exec(definitionsFile);
  
  if (!calcMatch) {
    results.push({
      id: calculatorId,
      status: '❌',
      issues: ['Calculator definition not found'],
    });
    invalidCalculators++;
    continue;
  }
  
  const calcDefinition = calcMatch[1];
  
  // Extract category
  const categoryMatch = calcDefinition.match(/category:\s*"([^"]+)"/);
  const category = categoryMatch ? categoryMatch[1] : null;
  
  // Extract slug
  const slugMatch = calcDefinition.match(/slug:\s*"([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : null;
  
  // Extract name
  const nameMatch = calcDefinition.match(/name:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : null;
  
  // Extract description
  const descMatch = calcDefinition.match(/description:\s*"([^"]+)"/);
  const description = descMatch ? descMatch[1] : null;
  
  // Extract FAQs
  const faqsMatch = calcDefinition.match(/faqs:\s*\[([\s\S]*?)\]/);
  const hasFAQs = faqsMatch && faqsMatch[1].trim().length > 0;
  
  const issues = [];
  
  // Validate required fields
  if (!category) issues.push('Missing category');
  if (!slug) issues.push('Missing slug');
  if (!name) issues.push('Missing name');
  if (!description) issues.push('Missing description');
  
  // Validate URL structure (should use slug, not category key)
  if (category && slug) {
    // Check if category is camelCase (key) - this is correct for internal use
    // URL should use slug version (date-time, not dateTime)
    const expectedUrl = `${SITE_URL}/calculators/[category-slug]/${slug}`;
    
    // Check if schema.ts uses getCategorySlugByKey
    if (!schemaFile.includes('getCategorySlugByKey')) {
      issues.push('Schema generation may not use getCategorySlugByKey helper');
    }
  }
  
  // Validate schema structure
  if (!hasCalculatorSchema) {
    issues.push('Calculator schema function missing');
  }
  
  if (hasFAQs && !hasFAQSchema) {
    issues.push('FAQ schema function missing (calculator has FAQs)');
  }
  
  if (!hasBreadcrumbSchema) {
    issues.push('Breadcrumb schema function missing');
  }
  
  // Validate FAQ schema structure (if FAQs exist)
  if (hasFAQs && hasFAQSchema) {
    const faqsContent = faqsMatch[1];
    // Check if FAQs have question and answer
    const questionMatches = (faqsContent.match(/question:\s*"([^"]+)"/g) || []).length;
    const answerMatches = (faqsContent.match(/answer:\s*"([^"]+)"/g) || []).length;
    
    if (questionMatches === 0 || answerMatches === 0) {
      issues.push('FAQs missing question or answer fields');
    } else if (questionMatches !== answerMatches) {
      issues.push('FAQ question/answer count mismatch');
    }
    
    // Validate FAQ answer length (40-60 words for featured snippets)
    const answerMatches2 = faqsContent.matchAll(/answer:\s*"([^"]+)"/g);
    for (const answerMatch of answerMatches2) {
      const answer = answerMatch[1];
      const wordCount = answer.split(/\s+/).length;
      if (wordCount < 40 || wordCount > 60) {
        issues.push(`FAQ answer not optimized for featured snippets (${wordCount} words, target: 40-60)`);
        break; // Only report once per calculator
      }
    }
  }
  
  // Validate Calculator schema required fields
  if (hasCalculatorSchema) {
    // Check if schema includes required WebApplication fields
    if (!schemaFile.includes('"@type": "WebApplication"')) {
      issues.push('Calculator schema missing WebApplication type');
    }
    if (!schemaFile.includes('"applicationCategory"')) {
      issues.push('Calculator schema missing applicationCategory');
    }
    if (!schemaFile.includes('"offers"')) {
      issues.push('Calculator schema missing offers');
    }
  }
  
  // Validate Breadcrumb schema structure
  if (hasBreadcrumbSchema) {
    if (!schemaFile.includes('"@type": "BreadcrumbList"')) {
      issues.push('Breadcrumb schema missing BreadcrumbList type');
    }
    if (!schemaFile.includes('"itemListElement"')) {
      issues.push('Breadcrumb schema missing itemListElement');
    }
    // Check if breadcrumb uses getCategorySlugByKey
    if (!schemaFile.includes('getCategorySlugByKey')) {
      issues.push('Breadcrumb schema may not use getCategorySlugByKey helper');
    }
  }
  
  const isValid = issues.length === 0;
  
  if (isValid) {
    validCalculators++;
  } else {
    invalidCalculators++;
  }
  
  results.push({
    id: calculatorId,
    name: name || calculatorId,
    category,
    slug,
    hasFAQs,
    status: isValid ? '✅' : '⚠️',
    issues,
    isValid,
  });
}

// Display results
console.log('📊 Schema Validation Results:\n');
console.log('─'.repeat(80));
console.log(`${'Calculator'.padEnd(35)} | Category | Slug | FAQs | Status | Issues`);
console.log('─'.repeat(80));

results.forEach(result => {
  const name = result.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const categoryStr = (result.category || 'N/A').padEnd(15);
  const slugStr = (result.slug || 'N/A').padEnd(20);
  const faqsStr = result.hasFAQs ? 'Yes' : 'No';
  const statusStr = result.status.padEnd(6);
  const issuesStr = result.issues.length > 0 ? result.issues.join(', ') : 'None';
  
  console.log(`${name.padEnd(35)} | ${categoryStr} | ${slugStr} | ${faqsStr.padEnd(4)} | ${statusStr} | ${issuesStr}`);
});

console.log('─'.repeat(80));
console.log(`\n📈 Summary:`);
console.log(`   Total Calculators: ${totalCalculators}`);
console.log(`   ✅ Valid: ${validCalculators}`);
console.log(`   ⚠️  Invalid: ${invalidCalculators}`);

if (invalidCalculators > 0) {
  console.log(`\n⚠️  WARNING: ${invalidCalculators} calculator(s) have schema validation issues!`);
  console.log(`   Please review and fix the issues listed above.\n`);
  
  // Show recommendations
  console.log('📝 Recommendations:');
  console.log('   1. Ensure all calculators have: category, slug, name, description');
  console.log('   2. Verify schema.ts uses getCategorySlugByKey for URL generation');
  console.log('   3. Check that calculators with FAQs have FAQ schema');
  console.log('   4. Validate schema markup using Google Rich Results Test:');
  console.log('      https://search.google.com/test/rich-results\n');
  
  process.exit(1);
} else {
  console.log(`\n✅ All calculators have valid schema structure!`);
  console.log(`\n📝 Next Steps:`);
  console.log(`   1. Test schema markup using Google Rich Results Test:`);
  console.log(`      https://search.google.com/test/rich-results`);
  console.log(`   2. Validate each calculator page URL`);
  console.log(`   3. Check that schema content matches visible page content\n`);
  process.exit(0);
}

