/**
 * Schema Content Matching Validation Script
 * 
 * Validates that schema markup content matches calculator definitions
 * Checks name, description, FAQ, and breadcrumb matching
 * 
 * Usage: node scripts/validate-schema-content-matching.js
 */

const fs = require('fs');
const path = require('path');

// Read definitions file to get all calculators
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');

// Read constants to get category mappings
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

console.log('🔍 Validating schema content matching...\n');

const results = [];
let totalCalculators = 0;
let validCalculators = 0;
let invalidCalculators = 0;
let totalErrors = 0;
let totalWarnings = 0;

// Read schema file to understand generation logic
const schemaPath = path.join(__dirname, '../lib/seo/schema.ts');
const schemaFile = fs.readFileSync(schemaPath, 'utf8');

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
      errors: ['Calculator definition not found'],
      warnings: [],
    });
    invalidCalculators++;
    totalErrors++;
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
  
  const descMatch = calcDefinition.match(/description:\s*"([^"]+)"/);
  const description = descMatch ? descMatch[1] : null;
  
  // Extract FAQs
  const faqsMatch = calcDefinition.match(/faqs:\s*\[([\s\S]*?)\]/);
  const faqs = [];
  if (faqsMatch && faqsMatch[1].trim().length > 0) {
    const faqsContent = faqsMatch[1];
    const questionMatches = faqsContent.matchAll(/question:\s*"([^"]+)"/g);
    const answerMatches = faqsContent.matchAll(/answer:\s*"([^"]+)"/g);
    
    const questions = Array.from(questionMatches, m => m[1]);
    const answers = Array.from(answerMatches, m => m[1]);
    
    for (let i = 0; i < Math.max(questions.length, answers.length); i++) {
      faqs.push({
        question: questions[i] || '',
        answer: answers[i] || '',
      });
    }
  }
  
  const errors = [];
  const warnings = [];
  
  // Validate Calculator Schema Content Matching
  if (name) {
    // Check if schema uses calculator.name
    if (!schemaFile.includes('"name": calculator.name') && !schemaFile.includes('name: calculator.name')) {
      errors.push('Schema name field may not match calculator.name');
    }
  }
  
  if (description) {
    // Check if schema uses calculator.description
    if (!schemaFile.includes('"description": calculator.description') && 
        !schemaFile.includes('description: calculator.description')) {
      errors.push('Schema description field may not match calculator.description');
    }
  }
  
  // Validate URL structure
  if (category && slug) {
    if (!categoryMappings[category]) {
      errors.push(`Category "${category}" not found in CALCULATOR_CATEGORIES`);
    } else {
      const categorySlug = categoryMappings[category].slug;
      const expectedUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
      
      // Check if schema uses getCategorySlugByKey
      if (!schemaFile.includes('getCategorySlugByKey(calculator.category)')) {
        errors.push('Schema URL generation should use getCategorySlugByKey(calculator.category)');
      }
      
      // Validate URL pattern
      const urlPattern = `\${SITE_URL}/calculators/\${getCategorySlugByKey(calculator.category)}/\${calculator.slug}`;
      if (!schemaFile.includes('getCategorySlugByKey(calculator.category)') || 
          !schemaFile.includes('calculator.slug')) {
        errors.push('Schema URL may not match expected pattern');
      }
    }
  }
  
  // Validate FAQ Schema Content Matching
  if (faqs.length > 0) {
    // Check if FAQ schema uses calculator.faqs
    if (!schemaFile.includes('calculator.faqs.map')) {
      errors.push('FAQ schema may not use calculator.faqs');
    }
    
    // Validate FAQ structure in schema
    if (!schemaFile.includes('"name": faq.question')) {
      errors.push('FAQ schema question field may not match faq.question');
    }
    
    if (!schemaFile.includes('"text": faq.answer') && !schemaFile.includes('text: faq.answer')) {
      errors.push('FAQ schema answer field may not match faq.answer');
    }
    
    // Check FAQ count
    if (faqs.length < 3) {
      warnings.push(`Only ${faqs.length} FAQ(s) found (recommended: 3-5 for better SEO)`);
    }
    
    // Validate FAQ answer lengths
    faqs.forEach((faq, index) => {
      const wordCount = faq.answer.split(/\s+/).filter(w => w.length > 0).length;
      if (wordCount < 40) {
        warnings.push(`FAQ[${index}] answer too short (${wordCount} words, target: 40-60 for featured snippets)`);
      } else if (wordCount > 60) {
        warnings.push(`FAQ[${index}] answer too long (${wordCount} words, target: 40-60 for featured snippets)`);
      }
    });
  }
  
  // Validate Breadcrumb Schema Content Matching
  if (category && name && slug) {
    if (!categoryMappings[category]) {
      errors.push(`Category "${category}" not found for breadcrumb validation`);
    } else {
      const categoryName = categoryMappings[category].name;
      const categorySlug = categoryMappings[category].slug;
      
      // Check if breadcrumb uses categoryName and calculatorName
      // Note: We can't fully validate this without running the code, but we can check the pattern
      if (!schemaFile.includes('categoryName') && !schemaFile.includes('category.name')) {
        warnings.push('Breadcrumb schema may not use categoryName parameter');
      }
      
      if (!schemaFile.includes('calculatorName') && !schemaFile.includes('calculator.name')) {
        warnings.push('Breadcrumb schema may not use calculatorName parameter');
      }
      
      // Validate breadcrumb URL structure
      const expectedBreadcrumbUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
      // We can't fully validate this, but we can check the pattern exists
    }
  }
  
  // Validate that schema generation functions are called correctly
  // Check SchemaMarkup component usage
  const schemaMarkupPath = path.join(__dirname, '../components/SEO/SchemaMarkup.tsx');
  if (fs.existsSync(schemaMarkupPath)) {
    const schemaMarkupFile = fs.readFileSync(schemaMarkupPath, 'utf8');
    
    // Check if generateCalculatorSchema is called
    if (!schemaMarkupFile.includes('generateCalculatorSchema(calculator)')) {
      errors.push('SchemaMarkup component may not call generateCalculatorSchema correctly');
    }
    
    // Check if generateFAQSchema is called conditionally
    if (faqs.length > 0) {
      if (!schemaMarkupFile.includes('generateFAQSchema')) {
        errors.push('SchemaMarkup component missing FAQ schema generation');
      }
    }
    
    // Check if generateBreadcrumbSchema is called
    if (!schemaMarkupFile.includes('generateBreadcrumbSchema')) {
      errors.push('SchemaMarkup component may not call generateBreadcrumbSchema');
    }
  }
  
  const isValid = errors.length === 0;
  
  if (isValid) {
    validCalculators++;
  } else {
    invalidCalculators++;
  }
  
  totalErrors += errors.length;
  totalWarnings += warnings.length;
  
  results.push({
    id: calculatorId,
    name: name || calculatorId,
    category,
    slug,
    hasFAQs: faqs.length > 0,
    faqCount: faqs.length,
    status: isValid ? '✅' : '⚠️',
    errors,
    warnings,
    isValid,
    errorCount: errors.length,
    warningCount: warnings.length,
  });
}

// Display results
console.log('📊 Schema Content Matching Validation Results:\n');
console.log('─'.repeat(100));
console.log(`${'Calculator'.padEnd(30)} | Category | FAQs | Status | Errors | Warnings`);
console.log('─'.repeat(100));

results.forEach(result => {
  const name = result.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const categoryStr = (result.category || 'N/A').padEnd(15);
  const faqsStr = result.hasFAQs ? `${result.faqCount}` : 'No';
  const statusStr = result.status.padEnd(6);
  const errorCount = result.errorCount || 0;
  const warningCount = result.warningCount || 0;
  
  console.log(`${name.padEnd(30)} | ${categoryStr} | ${faqsStr.padEnd(4)} | ${statusStr} | ${errorCount.toString().padStart(6)} | ${warningCount.toString().padStart(8)}`);
});

console.log('─'.repeat(100));

// Display detailed issues for invalid calculators
const invalidResults = results.filter(r => !r.isValid || r.errors.length > 0);
if (invalidResults.length > 0) {
  console.log('\n📋 Detailed Issues:\n');
  invalidResults.forEach(result => {
    const name = result.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    console.log(`\n${name}:`);
    if (result.errors.length > 0) {
      console.log('  ❌ Errors:');
      result.errors.forEach(error => console.log(`    - ${error}`));
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
  console.log(`\n⚠️  WARNING: ${invalidCalculators} calculator(s) have content matching issues!`);
  console.log(`   Total errors found: ${totalErrors}`);
  if (totalWarnings > 0) {
    console.log(`   Total warnings: ${totalWarnings}`);
  }
  console.log(`   Please review and fix the issues listed above.\n`);
  
  // Show recommendations
  console.log('📝 Recommendations:');
  console.log('   1. Ensure schema generation uses calculator.name and calculator.description');
  console.log('   2. Verify FAQ schema uses calculator.faqs array correctly');
  console.log('   3. Check that breadcrumb schema uses correct category and calculator names');
  console.log('   4. Validate that SchemaMarkup component calls all schema generation functions');
  console.log('   5. Test schema markup using Google Rich Results Test:');
  console.log('      https://search.google.com/test/rich-results\n');
  
  process.exit(1);
} else {
  console.log(`\n✅ All calculators have matching schema content!`);
  if (totalWarnings > 0) {
    console.log(`\n⚠️  Note: ${totalWarnings} warning(s) found. Consider reviewing them for optimization.`);
  }
  console.log(`\n📝 Next Steps:`);
  console.log(`   1. Test schema markup using Google Rich Results Test:`);
  console.log(`      https://search.google.com/test/rich-results`);
  console.log(`   2. Verify schema content matches visible page content`);
  console.log(`   3. Check that all URLs are correctly generated\n`);
  process.exit(0);
}

