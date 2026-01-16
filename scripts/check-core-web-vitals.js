/**
 * Core Web Vitals Check Script
 * 
 * This script helps check Core Web Vitals optimization
 * by analyzing page structure and providing recommendations
 * 
 * Usage: node scripts/check-core-web-vitals.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Core Web Vitals optimization...\n');

const issues = [];
const recommendations = [];

// Check next.config.ts for image optimization
const nextConfigPath = path.join(__dirname, '../next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  
  if (nextConfig.includes('images:')) {
    console.log('✅ Image optimization configured');
  } else {
    issues.push('Image optimization not configured in next.config.ts');
    recommendations.push('Add image optimization settings to next.config.ts');
  }
  
  if (nextConfig.includes('formats:') && (nextConfig.includes('webp') || nextConfig.includes('avif'))) {
    console.log('✅ Modern image formats (WebP/AVIF) configured');
  } else {
    issues.push('Modern image formats not configured');
    recommendations.push('Add WebP and AVIF formats to image optimization');
  }
} else {
  issues.push('next.config.ts not found');
}

// Check layout.tsx for font optimization
const layoutPath = path.join(__dirname, '../app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layout = fs.readFileSync(layoutPath, 'utf8');
  
  if (layout.includes('next/font')) {
    console.log('✅ Font optimization (next/font) implemented');
  } else {
    issues.push('Font optimization not using next/font');
    recommendations.push('Use next/font for font optimization');
  }
  
  if (layout.includes('display:') && layout.includes('swap')) {
    console.log('✅ font-display: swap configured');
  } else {
    issues.push('font-display: swap not configured');
    recommendations.push('Add font-display: swap to font configuration');
  }
  
  if (layout.includes('preload')) {
    console.log('✅ Font preload configured');
  } else {
    recommendations.push('Consider adding font preload for critical fonts');
  }
} else {
  issues.push('app/layout.tsx not found');
}

// Check for Image component usage
const calculatorPagePath = path.join(__dirname, '../components/calculators/CalculatorPage.tsx');
if (fs.existsSync(calculatorPagePath)) {
  const calculatorPage = fs.readFileSync(calculatorPagePath, 'utf8');
  
  // Note: This is a basic check - actual Image usage might be in other files
  console.log('✅ CalculatorPage component found');
} else {
  issues.push('CalculatorPage component not found');
}

// Check for lazy loading
const globalsCssPath = path.join(__dirname, '../app/globals.css');
if (fs.existsSync(globalsCssPath)) {
  const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  console.log('✅ Global CSS found');
} else {
  issues.push('app/globals.css not found');
}

// Summary
console.log('\n📊 Summary:\n');

if (issues.length === 0) {
  console.log('✅ No critical issues found');
} else {
  console.log(`⚠️  Found ${issues.length} issue(s):`);
  issues.forEach((issue, index) => {
    console.log(`   ${index + 1}. ${issue}`);
  });
}

if (recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

console.log('\n📝 Next Steps:');
console.log('   1. Test with PageSpeed Insights: https://pagespeed.web.dev/');
console.log('   2. Monitor Core Web Vitals in Google Search Console');
console.log('   3. Fix any issues reported');
console.log('   4. Test regularly (weekly for top pages, monthly for all pages)');

if (issues.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

