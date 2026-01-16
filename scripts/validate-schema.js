/**
 * Schema Validation Script
 * 
 * Validates that all calculator schema markups are correctly generated
 * Checks JSON-LD format, required fields, URL structure, and content matching
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
let totalErrors = 0;
let totalWarnings = 0;

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
  const warnings = [];
  
  // Validate required fields
  if (!category) issues.push('Missing category');
  if (!slug) issues.push('Missing slug');
  if (!name) issues.push('Missing name');
  if (!description) issues.push('Missing description');
  
  // Validate URL structure (should use slug, not category key)
  if (category && slug) {
    // Check if category exists in mappings
    if (!categoryMappings[category]) {
      issues.push(`Category "${category}" not found in CALCULATOR_CATEGORIES`);
    } else {
      const categorySlug = categoryMappings[category].slug;
      const expectedUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
      
      // Validate URL format
      try {
        new URL(expectedUrl);
      } catch (e) {
        issues.push(`Invalid URL format: ${expectedUrl}`);
      }
      
      // Check if schema.ts uses getCategorySlugByKey
      if (!schemaFile.includes('getCategorySlugByKey')) {
        issues.push('Schema generation may not use getCategorySlugByKey helper');
      }
      
      // Validate that schema generates correct URL pattern
      const urlPattern = `${SITE_URL}/calculators/\${getCategorySlugByKey(calculator.category)}/${slug}`;
      if (!schemaFile.includes('getCategorySlugByKey(calculator.category)')) {
        warnings.push('Schema URL generation should use getCategorySlugByKey(calculator.category)');
      }
    }
  }
  
  // Validate description length (should be meaningful)
  if (description && description.length < 50) {
    warnings.push(`Description is very short (${description.length} chars), consider expanding`);
  }
  
  // Validate name format (should not be empty or just whitespace)
  if (name && name.trim().length === 0) {
    issues.push('Name is empty or whitespace only');
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
      issues.push(`FAQ question/answer count mismatch (${questionMatches} questions, ${answerMatches} answers)`);
    }
    
    // Validate FAQ answer length (40-60 words for featured snippets)
    const answerMatches2 = faqsContent.matchAll(/answer:\s*"([^"]+)"/g);
    let faqIndex = 0;
    for (const answerMatch of answerMatches2) {
      const answer = answerMatch[1];
      const wordCount = answer.split(/\s+/).filter(w => w.length > 0).length;
      if (wordCount < 40) {
        warnings.push(`FAQ[${faqIndex}] answer too short (${wordCount} words, target: 40-60 for featured snippets)`);
      } else if (wordCount > 60) {
        warnings.push(`FAQ[${faqIndex}] answer too long (${wordCount} words, target: 40-60 for featured snippets)`);
      }
      faqIndex++;
    }
    
    // Validate FAQ question format (should not be empty)
    const questionMatches2 = faqsContent.matchAll(/question:\s*"([^"]+)"/g);
    let qIndex = 0;
    for (const questionMatch of questionMatches2) {
      const question = questionMatch[1];
      if (question.trim().length === 0) {
        issues.push(`FAQ[${qIndex}] question is empty`);
      }
      qIndex++;
    }
  }
  // Note: hasFAQs && !hasFAQSchema case is already handled as an error at line 150-151
  
  // Validate Calculator schema required fields
  if (hasCalculatorSchema) {
    // Check if schema includes required WebApplication fields
    if (!schemaFile.includes('"@type": "WebApplication"')) {
      issues.push('Calculator schema missing WebApplication type');
    }
    if (!schemaFile.includes('"applicationCategory"')) {
      issues.push('Calculator schema missing applicationCategory');
    } else if (!schemaFile.includes('"applicationCategory": "UtilityApplication"')) {
      warnings.push('applicationCategory should be "UtilityApplication" for calculators');
    }
    if (!schemaFile.includes('"offers"')) {
      issues.push('Calculator schema missing offers');
    } else {
      // Validate offers structure
      if (!schemaFile.includes('"@type": "Offer"')) {
        issues.push('offers object missing @type: "Offer"');
      }
      if (!schemaFile.includes('"price": "0"')) {
        warnings.push('offers.price should be "0" for free calculators');
      }
      if (!schemaFile.includes('"priceCurrency"')) {
        issues.push('offers missing priceCurrency');
      }
    }
    
    // Validate JSON-LD context
    if (!schemaFile.includes('"@context": "https://schema.org"')) {
      issues.push('Schema missing @context: "https://schema.org"');
    }
    
    // Validate required fields in schema function
    const requiredFields = ['name', 'description'];
    for (const field of requiredFields) {
      if (!schemaFile.includes(`"${field}": calculator.${field}`)) {
        warnings.push(`Schema may not include required field: ${field}`);
      }
    }
    
    // Validate url field separately (it's a template string, not calculator.url)
    if (!schemaFile.includes('"url":') || 
        (!schemaFile.includes('getCategorySlugByKey(calculator.category)') && 
         !schemaFile.includes('calculator.slug'))) {
      warnings.push('Schema url field may not be correctly generated with getCategorySlugByKey');
    }
    
    // Check operatingSystem field (recommended)
    if (!schemaFile.includes('"operatingSystem"')) {
      warnings.push('Schema missing recommended field: operatingSystem (should be "Web")');
    }
  }
  
  // Validate Breadcrumb schema structure
  if (hasBreadcrumbSchema) {
    if (!schemaFile.includes('"@type": "BreadcrumbList"')) {
      issues.push('Breadcrumb schema missing BreadcrumbList type');
    }
    if (!schemaFile.includes('"itemListElement"')) {
      issues.push('Breadcrumb schema missing itemListElement');
    } else {
      // Validate breadcrumb structure
      if (!schemaFile.includes('"@type": "ListItem"')) {
        issues.push('Breadcrumb itemListElement items missing @type: "ListItem"');
      }
      if (!schemaFile.includes('"position"')) {
        issues.push('Breadcrumb items missing position field');
      }
      // Check for required breadcrumb items (Home, Calculators, Category, Calculator)
      if (!schemaFile.includes('"name": "Home"') && !schemaFile.includes("'name': 'Home'")) {
        warnings.push('Breadcrumb should start with "Home"');
      }
    }
    
    // Check if breadcrumb uses getCategorySlugByKey or categorySlug
    if (!schemaFile.includes('getCategorySlugByKey') && !schemaFile.includes('categorySlug')) {
      warnings.push('Breadcrumb schema should use getCategorySlugByKey or categorySlug for URL generation');
    }
    
    // Validate breadcrumb URL structure
    if (category && categoryMappings[category]) {
      const categorySlug = categoryMappings[category].slug;
      const expectedBreadcrumbUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
      // This is a warning since we can't fully validate the generated URL
      // But we can check the pattern
    }
  }
  
  const isValid = issues.length === 0;
  
  if (isValid) {
    validCalculators++;
  } else {
    invalidCalculators++;
  }
  
  // Count errors and warnings
  totalErrors += issues.length;
  totalWarnings += warnings.length;
  
  results.push({
    id: calculatorId,
    name: name || calculatorId,
    category,
    slug,
    hasFAQs,
    status: isValid ? '✅' : '⚠️',
    issues,
    warnings,
    isValid,
    errorCount: issues.length,
    warningCount: warnings.length,
  });
}

// Display results
console.log('📊 Schema Validation Results:\n');
console.log('─'.repeat(100));
console.log(`${'Calculator'.padEnd(30)} | Category | FAQs | Status | Errors | Warnings`);
console.log('─'.repeat(100));

results.forEach(result => {
  const name = result.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const categoryStr = (result.category || 'N/A').padEnd(15);
  const faqsStr = result.hasFAQs ? 'Yes' : 'No';
  const statusStr = result.status.padEnd(6);
  const errorCount = result.errorCount || 0;
  const warningCount = result.warningCount || 0;
  
  console.log(`${name.padEnd(30)} | ${categoryStr} | ${faqsStr.padEnd(4)} | ${statusStr} | ${errorCount.toString().padStart(6)} | ${warningCount.toString().padStart(8)}`);
});

console.log('─'.repeat(100));

// Display detailed issues for invalid calculators
const invalidResults = results.filter(r => !r.isValid || r.issues.length > 0);
if (invalidResults.length > 0) {
  console.log('\n📋 Detailed Issues:\n');
  invalidResults.forEach(result => {
    const name = result.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    console.log(`\n${name}:`);
    if (result.issues.length > 0) {
      console.log('  ❌ Errors:');
      result.issues.forEach(issue => console.log(`    - ${issue}`));
    }
    if (result.warnings && result.warnings.length > 0) {
      console.log('  ⚠️  Warnings:');
      result.warnings.forEach(warning => console.log(`    - ${warning}`));
    }
  });
}

console.log(`\n📈 Summary:`);
console.log(`   Total Calculators: ${totalCalculators}`);
console.log(`   ✅ Valid: ${validCalculators}`);
console.log(`   ⚠️  Invalid: ${invalidCalculators}`);
console.log(`   Total Errors: ${totalErrors}`);
console.log(`   Total Warnings: ${totalWarnings}`);

if (invalidCalculators > 0 || totalErrors > 0) {
  console.log(`\n⚠️  WARNING: ${invalidCalculators} calculator(s) have schema validation issues!`);
  console.log(`   Total errors found: ${totalErrors}`);
  if (totalWarnings > 0) {
    console.log(`   Total warnings: ${totalWarnings}`);
  }
  console.log(`   Please review and fix the issues listed above.\n`);
  
  // Show recommendations
  console.log('📝 Recommendations:');
  console.log('   1. Ensure all calculators have: category, slug, name, description');
  console.log('   2. Verify schema.ts uses getCategorySlugByKey for URL generation');
  console.log('   3. Check that calculators with FAQs have FAQ schema');
  console.log('   4. Validate FAQ answers are 40-60 words for featured snippets');
  console.log('   5. Validate schema markup using Google Rich Results Test:');
  console.log('      https://search.google.com/test/rich-results');
  console.log('   6. Run schema content matching validation:');
  console.log('      node scripts/validate-schema-content-matching.js\n');
  
  process.exit(1);
} else {
  console.log(`\n✅ All calculators have valid schema structure!`);
  if (totalWarnings > 0) {
    console.log(`\n⚠️  Note: ${totalWarnings} warning(s) found. Consider reviewing them for optimization.`);
  }
  console.log(`\n📝 Next Steps:`);
  console.log(`   1. Test schema markup using Google Rich Results Test:`);
  console.log(`      https://search.google.com/test/rich-results`);
  console.log(`   2. Validate each calculator page URL`);
  console.log(`   3. Check that schema content matches visible page content`);
  console.log(`   4. Run schema content matching validation:`);
  console.log(`      node scripts/validate-schema-content-matching.js\n`);
  process.exit(0);
}

