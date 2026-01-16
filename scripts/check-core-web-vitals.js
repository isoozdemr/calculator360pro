/**
 * Core Web Vitals Check Script
 * 
 * Comprehensive Core Web Vitals optimization checker
 * Analyzes page structure, configuration, and provides recommendations
 * 
 * Usage: node scripts/check-core-web-vitals.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Core Web Vitals optimization...\n');

// Core Web Vitals Targets
const TARGETS = {
  LCP: 2.5, // Largest Contentful Paint (seconds) - Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
  INP: 200, // Interaction to Next Paint (milliseconds) - Good: < 200ms, Needs Improvement: 200-500ms, Poor: > 500ms
  CLS: 0.1, // Cumulative Layout Shift (score) - Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
  FCP: 1.8, // First Contentful Paint (seconds) - Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
  TTI: 3.8, // Time to Interactive (seconds) - Good: < 3.8s, Needs Improvement: 3.8-7.3s, Poor: > 7.3s
};

const issues = [];
const warnings = [];
const recommendations = [];
const calculatorResults = [];

// Read calculator definitions for URL generation
const definitionsPath = path.join(__dirname, '../lib/calculators/definitions.ts');
let calculatorCount = 0;
if (fs.existsSync(definitionsPath)) {
  const definitionsFile = fs.readFileSync(definitionsPath, 'utf8');
  const calculatorMatches = definitionsFile.matchAll(/"([a-z-]+-calculator)":\s*\{/g);
  calculatorCount = Array.from(calculatorMatches).length;
}

// Read constants for SITE_URL
const constantsPath = path.join(__dirname, '../lib/constants.ts');
let SITE_URL = 'https://calculator360pro.com';
if (fs.existsSync(constantsPath)) {
  const constantsFile = fs.readFileSync(constantsPath, 'utf8');
  const siteUrlMatch = constantsFile.match(/SITE_URL\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL\s*\|\|\s*"([^"]+)"/);
  if (siteUrlMatch) {
    SITE_URL = siteUrlMatch[1];
  }
}

// Check next.config.ts for image optimization
const nextConfigPath = path.join(__dirname, '../next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  
  if (nextConfig.includes('images:')) {
    console.log('✅ Image optimization configured');
  } else {
    warnings.push('Image optimization not configured in next.config.ts');
    recommendations.push('Add image optimization settings to next.config.ts');
  }
  
  if (nextConfig.includes('formats:') && (nextConfig.includes('webp') || nextConfig.includes('avif'))) {
    console.log('✅ Modern image formats (WebP/AVIF) configured');
  } else {
    warnings.push('Modern image formats not configured');
    recommendations.push('Add WebP and AVIF formats to image optimization');
  }
  
  // Check for compression
  if (nextConfig.includes('compress:') || nextConfig.includes('compression')) {
    console.log('✅ Compression configured');
  } else {
    recommendations.push('Consider enabling compression in next.config.ts');
  }
  
  // Check for output optimization
  if (nextConfig.includes('output:') && nextConfig.includes('standalone')) {
    console.log('✅ Standalone output configured (good for production)');
  }
} else {
  warnings.push('next.config.ts not found');
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

// Check for lazy loading and dynamic imports
const appDir = path.join(__dirname, '../app');
const componentsDir = path.join(__dirname, '../components');

// Check for dynamic imports
let hasDynamicImports = false;
function checkForDynamicImports(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      checkForDynamicImports(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('dynamic(') || content.includes('next/dynamic')) {
        hasDynamicImports = true;
        return;
      }
    }
  }
}

checkForDynamicImports(appDir);
checkForDynamicImports(componentsDir);

if (hasDynamicImports) {
  console.log('✅ Dynamic imports detected (good for code splitting)');
} else {
  recommendations.push('Consider using dynamic imports for code splitting');
}

// Check for Image component usage (Next.js optimized images)
let hasImageComponent = false;
function checkForImageComponent(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      checkForImageComponent(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('next/image') || content.includes('from "next/image"')) {
        hasImageComponent = true;
        return;
      }
    }
  }
}

checkForImageComponent(appDir);
checkForImageComponent(componentsDir);

if (hasImageComponent) {
  console.log('✅ Next.js Image component usage detected');
} else {
  recommendations.push('Use next/image component for optimized images');
}

// Check for lazy loading in CSS
const globalsCssPath = path.join(__dirname, '../app/globals.css');
if (fs.existsSync(globalsCssPath)) {
  const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  console.log('✅ Global CSS found');
  
  // Check for critical CSS optimization
  if (globalsCss.length > 50000) {
    warnings.push('Global CSS file is large (>50KB), consider splitting');
    recommendations.push('Split CSS into critical and non-critical styles');
  }
} else {
  warnings.push('app/globals.css not found');
}

// Check package.json for performance-related dependencies
const packageJsonPath = path.join(__dirname, '../package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Check bundle analyzer
  if (packageJson.dependencies && packageJson.dependencies['@next/bundle-analyzer']) {
    console.log('✅ Bundle analyzer configured');
  } else {
    recommendations.push('Consider adding @next/bundle-analyzer for bundle size analysis');
  }
}

// Core Web Vitals Checklist
console.log('\n📊 Core Web Vitals Targets:\n');
console.log(`   LCP (Largest Contentful Paint): < ${TARGETS.LCP}s (Good)`);
console.log(`   INP (Interaction to Next Paint): < ${TARGETS.INP}ms (Good)`);
console.log(`   CLS (Cumulative Layout Shift): < ${TARGETS.CLS} (Good)`);
console.log(`   FCP (First Contentful Paint): < ${TARGETS.FCP}s (Good)`);
console.log(`   TTI (Time to Interactive): < ${TARGETS.TTI}s (Good)`);

// Summary
console.log('\n📊 Summary:\n');

if (issues.length === 0 && warnings.length === 0) {
  console.log('✅ No issues found');
} else {
  if (issues.length > 0) {
    console.log(`❌ Found ${issues.length} critical issue(s):`);
    issues.forEach((issue, index) => {
      console.log(`   ${index + 1}. ${issue}`);
    });
  }
  
  if (warnings.length > 0) {
    console.log(`\n⚠️  Found ${warnings.length} warning(s):`);
    warnings.forEach((warning, index) => {
      console.log(`   ${index + 1}. ${warning}`);
    });
  }
}

if (recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

// Calculator Performance Info
if (calculatorCount > 0) {
  console.log(`\n📈 Calculator Pages: ${calculatorCount} pages to test`);
  console.log(`   Test URL pattern: ${SITE_URL}/calculators/[category]/[slug]`);
}

console.log('\n📝 Next Steps:');
console.log('   1. Test with Google PageSpeed Insights: https://pagespeed.web.dev/');
console.log('   2. Run: npm run generate:pagespeed-test-urls (to generate test URLs)');
console.log('   3. Monitor Core Web Vitals in Google Search Console');
console.log('   4. Fix any critical issues reported');
console.log('   5. Test regularly (weekly for top pages, monthly for all pages)');
console.log('   6. Use Lighthouse in Chrome DevTools for detailed analysis');

// Performance Optimization Checklist
console.log('\n✅ Performance Optimization Checklist:');
console.log('   [ ] Image optimization (WebP/AVIF formats)');
console.log('   [ ] Font optimization (next/font with display: swap)');
console.log('   [ ] Code splitting (dynamic imports)');
console.log('   [ ] Lazy loading (images, components)');
console.log('   [ ] Bundle size optimization');
console.log('   [ ] Caching strategy');
console.log('   [ ] CDN configuration');
console.log('   [ ] Compression enabled');

if (issues.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

