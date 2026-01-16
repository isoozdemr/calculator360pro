/**
 * Generate PageSpeed Insights Test URLs Script
 * 
 * Generates test URLs for Google PageSpeed Insights for all calculators
 * Creates a checklist and direct test links for mobile and desktop
 * 
 * Usage: node scripts/generate-pagespeed-test-urls.js
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

console.log('🔗 Generating PageSpeed Insights test URLs...\n');

const testUrls = [];
const pagespeedBase = 'https://pagespeed.web.dev/analysis?url=';

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
  
  if (category && slug && name) {
    const categorySlug = categoryMappings[category]?.slug || category;
    const pageUrl = `${SITE_URL}/calculators/${categorySlug}/${slug}`;
    
    // Generate test URLs for mobile and desktop
    const mobileTestUrl = `${pagespeedBase}${encodeURIComponent(pageUrl)}&strategy=mobile`;
    const desktopTestUrl = `${pagespeedBase}${encodeURIComponent(pageUrl)}&strategy=desktop`;
    
    testUrls.push({
      id: calculatorId,
      name,
      category,
      categorySlug,
      slug,
      pageUrl,
      mobileTestUrl,
      desktopTestUrl,
    });
  }
}

// Generate output
console.log('📋 PageSpeed Insights Test URLs Generated:\n');
console.log('─'.repeat(120));
console.log(`${'Calculator'.padEnd(30)} | Category | URL | Mobile | Desktop`);
console.log('─'.repeat(120));

testUrls.forEach((item, index) => {
  const name = item.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const categoryStr = (item.category || 'N/A').padEnd(15);
  const urlShort = item.pageUrl.length > 35 ? item.pageUrl.substring(0, 32) + '...' : item.pageUrl;
  const mobileLink = '[Test]';
  const desktopLink = '[Test]';
  
  console.log(`${name.padEnd(30)} | ${categoryStr} | ${urlShort.padEnd(35)} | ${mobileLink.padEnd(6)} | ${desktopLink}`);
});

console.log('─'.repeat(120));
console.log(`\n📊 Summary:`);
console.log(`   Total Calculators: ${testUrls.length}`);
console.log(`   Test Strategy: Mobile & Desktop`);
console.log(`   Test Tool: Google PageSpeed Insights`);

// Generate markdown checklist
const checklistPath = path.join(__dirname, '../docs/PAGESPEED_TEST_CHECKLIST.md');
const checklistContent = `# PageSpeed Insights Test Checklist

## Google PageSpeed Insights

**Test Tool:** https://pagespeed.web.dev/

**Total Calculators:** ${testUrls.length}

**Test Strategy:** Mobile & Desktop (both required)

## Core Web Vitals Targets

### Mobile Targets
- **LCP (Largest Contentful Paint):** < 2.5s (Good)
- **INP (Interaction to Next Paint):** < 200ms (Good)
- **CLS (Cumulative Layout Shift):** < 0.1 (Good)
- **FCP (First Contentful Paint):** < 1.8s (Good)
- **TTI (Time to Interactive):** < 3.8s (Good)
- **Performance Score:** 90+ (Good)

### Desktop Targets
- **LCP (Largest Contentful Paint):** < 2.5s (Good)
- **INP (Interaction to Next Paint):** < 200ms (Good)
- **CLS (Cumulative Layout Shift):** < 0.1 (Good)
- **FCP (First Contentful Paint):** < 1.8s (Good)
- **TTI (Time to Interactive):** < 3.8s (Good)
- **Performance Score:** 90+ (Good)

## Test URLs

| # | Calculator | Category | Page URL | Mobile Test | Desktop Test | Mobile Score | Desktop Score | Status |
|---|------------|----------|----------|-------------|--------------|--------------|---------------|--------|
${testUrls.map((item, index) => {
  const mobileLink = `[Test](${item.mobileTestUrl})`;
  const desktopLink = `[Test](${item.desktopTestUrl})`;
  return `| ${index + 1} | ${item.name} | ${item.category} | ${item.pageUrl} | ${mobileLink} | ${desktopLink} | ⬜ | ⬜ | ⬜ |
`;
}).join('')}

## Performance Metrics to Track

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint)
- [ ] INP (Interaction to Next Paint)
- [ ] CLS (Cumulative Layout Shift)
- [ ] FCP (First Contentful Paint)
- [ ] TTI (Time to Interactive)

### Additional Metrics
- [ ] Performance Score
- [ ] Accessibility Score
- [ ] Best Practices Score
- [ ] SEO Score
- [ ] Total Blocking Time (TBT)
- [ ] Speed Index
- [ ] Total Page Size
- [ ] JavaScript Bundle Size
- [ ] CSS Bundle Size

## Common Performance Issues

### Issue: Slow LCP
**Possible Causes:**
- Large images not optimized
- Slow server response time
- Render-blocking resources
- Large JavaScript bundles

**Solutions:**
1. Optimize images (WebP/AVIF formats)
2. Use next/image component
3. Implement image lazy loading
4. Optimize server response time
5. Use CDN for static assets

### Issue: High CLS
**Possible Causes:**
- Images without dimensions
- Ads or embeds without dimensions
- Web fonts causing layout shift
- Dynamically injected content

**Solutions:**
1. Set width and height on images
2. Reserve space for ads/embeds
3. Use font-display: swap
4. Preload critical fonts
5. Avoid inserting content above existing content

### Issue: Slow INP
**Possible Causes:**
- Long JavaScript tasks
- Large JavaScript bundles
- Inefficient event handlers
- Main thread blocking

**Solutions:**
1. Code splitting
2. Lazy load non-critical JavaScript
3. Optimize event handlers
4. Use Web Workers for heavy tasks
5. Minimize JavaScript execution time

### Issue: Large Bundle Size
**Possible Causes:**
- Unused dependencies
- No code splitting
- Large third-party libraries
- No tree shaking

**Solutions:**
1. Remove unused dependencies
2. Implement code splitting
3. Use dynamic imports
4. Replace large libraries with lighter alternatives
5. Enable tree shaking

## Testing Workflow

1. **Run validation script:**
   \`\`\`bash
   npm run check:web-vitals
   \`\`\`

2. **For each calculator:**
   - Click mobile test link
   - Review Core Web Vitals metrics
   - Check performance score
   - Note any issues
   - Click desktop test link
   - Repeat for desktop
   - Update scores in checklist

3. **Fix issues:**
   - Prioritize Core Web Vitals issues
   - Fix mobile issues first (mobile-first approach)
   - Re-test after fixes
   - Update checklist

4. **Monitor regularly:**
   - Test top 10 calculators weekly
   - Test all calculators monthly
   - Track performance trends
   - Monitor Google Search Console

## Performance Optimization Checklist

### Images
- [ ] All images use next/image component
- [ ] Images optimized (WebP/AVIF formats)
- [ ] Images have width and height attributes
- [ ] Lazy loading enabled for below-fold images
- [ ] Image sizes optimized

### JavaScript
- [ ] Code splitting implemented
- [ ] Dynamic imports used where appropriate
- [ ] Bundle size < 200KB (gzipped)
- [ ] Unused code removed
- [ ] Tree shaking enabled

### CSS
- [ ] Critical CSS inlined
- [ ] Non-critical CSS lazy loaded
- [ ] CSS minified
- [ ] Unused CSS removed
- [ ] CSS bundle size < 50KB

### Fonts
- [ ] next/font used for font optimization
- [ ] font-display: swap configured
- [ ] Font preloading for critical fonts
- [ ] Font subsetting enabled
- [ ] Self-hosted fonts

### Caching
- [ ] Static assets cached
- [ ] CDN configured
- [ ] Cache headers set correctly
- [ ] Service worker (if applicable)

## Notes

- Test URLs are generated for production site (${SITE_URL})
- For local testing, replace \`${SITE_URL}\` with your local URL
- Mobile testing is more critical (mobile-first indexing)
- Performance scores may vary between tests
- Test multiple times for accurate results
- Focus on Core Web Vitals first, then overall score

## Last Updated

${new Date().toISOString().split('T')[0]}

`;

fs.writeFileSync(checklistPath, checklistContent, 'utf8');
console.log(`\n✅ Generated test checklist: ${checklistPath}`);

// Generate JSON file for programmatic access
const jsonPath = path.join(__dirname, '../docs/pagespeed-test-urls.json');
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
    mobileTestUrl: item.mobileTestUrl,
    desktopTestUrl: item.desktopTestUrl,
  })),
};

fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
console.log(`✅ Generated JSON file: ${jsonPath}`);

// Generate quick test links file
const quickLinksPath = path.join(__dirname, '../docs/PAGESPEED_QUICK_TEST_LINKS.md');
const quickLinksContent = `# PageSpeed Insights Quick Test Links

Quick access to Google PageSpeed Insights for all calculators.

## Test All Calculators

### Mobile Tests
${testUrls.map((item, index) => {
  return `${index + 1}. [${item.name} (Mobile)](${item.mobileTestUrl})`;
}).join('\n')}

### Desktop Tests
${testUrls.map((item, index) => {
  return `${index + 1}. [${item.name} (Desktop)](${item.desktopTestUrl})`;
}).join('\n')}

## Test by Category

${Object.entries(
  testUrls.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {})
).map(([category, items]) => {
  return `### ${category}\n#### Mobile\n${items.map(item => `- [${item.name}](${item.mobileTestUrl})`).join('\n')}\n#### Desktop\n${items.map(item => `- [${item.name}](${item.desktopTestUrl})`).join('\n')}`;
}).join('\n\n')}

## Notes

- Click any link to test that calculator's performance
- Test results show Core Web Vitals and performance score
- Mobile testing is more critical (mobile-first indexing)
- Fix issues first, then optimize further
- Re-test after making changes

`;

fs.writeFileSync(quickLinksPath, quickLinksContent, 'utf8');
console.log(`✅ Generated quick links file: ${quickLinksPath}`);

console.log(`\n✅ All PageSpeed Insights test URL files generated successfully!\n`);

