# Performance Testing Guide

Complete guide for testing and optimizing Core Web Vitals and overall page performance.

## Overview

This guide covers:
- How to use Google PageSpeed Insights
- Core Web Vitals testing
- Performance optimization workflow
- Monitoring and tracking
- Best practices

## Google PageSpeed Insights

### What is it?

Google PageSpeed Insights is a free tool that analyzes the performance of web pages on both mobile and desktop devices. It provides:
- Performance score (0-100)
- Core Web Vitals metrics
- Optimization recommendations
- Field data (real user metrics)

**URL:** https://pagespeed.web.dev/

### How to Use

1. **Enter URL:**
   - Paste the full URL of your calculator page
   - Or use the generated test URLs from `npm run generate:pagespeed-test-urls`

2. **Select Strategy:**
   - **Mobile:** Tests mobile performance (default, more important)
   - **Desktop:** Tests desktop performance

3. **Click "Analyze"**

4. **Review Results:**
   - **Performance Score:** 0-100 (target: 90+)
   - **Core Web Vitals:** LCP, INP, CLS
   - **Other Metrics:** FCP, TTI, Speed Index
   - **Opportunities:** Optimization suggestions
   - **Diagnostics:** Additional information

### Understanding Results

#### Performance Score
- **90-100:** Good (Green)
- **50-89:** Needs Improvement (Orange)
- **0-49:** Poor (Red)

#### Core Web Vitals

**LCP (Largest Contentful Paint):**
- Measures loading performance
- **Good:** < 2.5s
- **Needs Improvement:** 2.5-4s
- **Poor:** > 4s

**INP (Interaction to Next Paint):**
- Measures interactivity
- **Good:** < 200ms
- **Needs Improvement:** 200-500ms
- **Poor:** > 500ms

**CLS (Cumulative Layout Shift):**
- Measures visual stability
- **Good:** < 0.1
- **Needs Improvement:** 0.1-0.25
- **Poor:** > 0.25

#### Other Metrics

**FCP (First Contentful Paint):**
- Time until first content appears
- **Target:** < 1.8s

**TTI (Time to Interactive):**
- Time until page is fully interactive
- **Target:** < 3.8s

**Speed Index:**
- How quickly content is visually displayed
- **Target:** < 3.4s

**TBT (Total Blocking Time):**
- Total time page is blocked from responding
- **Target:** < 200ms

## Testing Workflow

### Step 1: Run Validation Scripts

Before testing with PageSpeed Insights, run local validation:

```bash
# Check Core Web Vitals optimization
npm run check:web-vitals

# Generate test URLs
npm run generate:pagespeed-test-urls
```

### Step 2: Test with PageSpeed Insights

1. Open Google PageSpeed Insights: https://pagespeed.web.dev/
2. For each calculator:
   - Enter the calculator page URL
   - Select Mobile strategy (more important)
   - Click "Analyze"
   - Review results
   - Repeat for Desktop strategy
   - Note scores and issues

### Step 3: Fix Issues

1. **Prioritize Core Web Vitals:**
   - Fix LCP issues first (most important)
   - Fix CLS issues second
   - Fix INP issues third

2. **Fix Critical Issues:**
   - Address "Opportunities" with high impact
   - Fix "Diagnostics" issues
   - Optimize based on recommendations

3. **Re-test:**
   - Re-run PageSpeed Insights
   - Verify improvements
   - Continue optimizing

### Step 4: Document Results

Update the test checklist:
- Mark calculators as ✅ (passed) or ❌ (failed)
- Note performance scores
- Document issues and solutions
- Track improvements over time

## Core Web Vitals Testing

### LCP (Largest Contentful Paint)

**What it measures:**
- Loading performance
- Time until largest content element is rendered

**How to test:**
1. Use PageSpeed Insights
2. Check "Largest Contentful Paint" metric
3. Identify the LCP element
4. Optimize that element

**Common issues:**
- Large unoptimized images
- Slow server response time
- Render-blocking resources

**Solutions:**
- Optimize images (WebP/AVIF)
- Use next/image component
- Improve server response time
- Preload critical resources

### INP (Interaction to Next Paint)

**What it measures:**
- Interactivity
- Time from user interaction to visual response

**How to test:**
1. Use PageSpeed Insights
2. Check "Interaction to Next Paint" metric
3. Test actual interactions on page
4. Monitor JavaScript execution

**Common issues:**
- Long JavaScript tasks
- Large JavaScript bundles
- Inefficient event handlers

**Solutions:**
- Code splitting
- Lazy load JavaScript
- Optimize event handlers
- Use Web Workers

### CLS (Cumulative Layout Shift)

**What it measures:**
- Visual stability
- Unexpected layout shifts during page load

**How to test:**
1. Use PageSpeed Insights
2. Check "Cumulative Layout Shift" metric
3. Use Chrome DevTools Layout Shift visualization
4. Test page loading

**Common issues:**
- Images without dimensions
- Ads/embeds without dimensions
- Web fonts causing shifts
- Dynamic content insertion

**Solutions:**
- Set width/height on images
- Reserve space for ads
- Use font-display: swap
- Avoid inserting content above existing

## Other Testing Tools

### Lighthouse (Chrome DevTools)

**How to use:**
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories (Performance, Accessibility, etc.)
4. Select device (Mobile/Desktop)
5. Click "Analyze page load"

**Benefits:**
- Detailed performance analysis
- Local testing
- Multiple test runs
- Performance budgets

### WebPageTest

**URL:** https://www.webpagetest.org/

**Features:**
- Multiple test locations
- Custom test configurations
- Video of page load
- Detailed waterfall charts
- Comparison testing

### Chrome DevTools Performance

**How to use:**
1. Open Chrome DevTools (F12)
2. Go to "Performance" tab
3. Click record
4. Interact with page
5. Stop recording
6. Analyze timeline

**Benefits:**
- Detailed timeline
- JavaScript execution analysis
- Layout/paint events
- Memory usage

## Performance Optimization Workflow

### 1. Baseline Measurement

- Test current performance
- Document all metrics
- Identify issues
- Set performance budgets

### 2. Prioritize Issues

- Core Web Vitals first
- High-impact issues second
- Low-impact issues last
- User experience focus

### 3. Implement Fixes

- Fix one issue at a time
- Test after each fix
- Document changes
- Measure impact

### 4. Verify Improvements

- Re-test with PageSpeed Insights
- Compare before/after
- Verify Core Web Vitals
- Check overall score

### 5. Monitor Continuously

- Regular testing schedule
- Track metrics over time
- Monitor for regressions
- Update optimization strategy

## Best Practices

### 1. Mobile-First Approach

- Test mobile first (more important)
- Optimize for mobile performance
- Ensure mobile Core Web Vitals are good
- Then optimize desktop

### 2. Test Realistic Conditions

- Test on actual devices
- Test on slow networks
- Test with real user conditions
- Don't just test on fast connections

### 3. Regular Testing

- Weekly for top pages
- Monthly for all pages
- After major changes
- Before releases

### 4. Track Trends

- Monitor metrics over time
- Identify performance regressions
- Track improvement progress
- Set performance goals

### 5. Focus on User Experience

- Prioritize Core Web Vitals
- Optimize for real users
- Balance performance and features
- Test actual user interactions

## Common Performance Issues

### Issue: Slow LCP

**Symptoms:**
- LCP > 2.5s
- Large images loading slowly
- Slow server response

**Solutions:**
1. Optimize largest content element
2. Use next/image component
3. Implement image lazy loading
4. Improve server response time
5. Use CDN

### Issue: High CLS

**Symptoms:**
- CLS > 0.1
- Page elements shifting
- Layout instability

**Solutions:**
1. Set dimensions on images
2. Reserve space for ads
3. Use font-display: swap
4. Avoid dynamic content insertion
5. Test layout stability

### Issue: Slow INP

**Symptoms:**
- INP > 200ms
- Slow interactions
- Delayed responses

**Solutions:**
1. Code splitting
2. Optimize JavaScript
3. Minimize main thread blocking
4. Optimize event handlers
5. Use Web Workers

### Issue: Low Performance Score

**Symptoms:**
- Score < 90
- Multiple optimization opportunities
- Various performance issues

**Solutions:**
1. Fix Core Web Vitals first
2. Address high-impact opportunities
3. Optimize images and JavaScript
4. Improve server performance
5. Implement caching

## Monitoring & Tracking

### Google Search Console

- Monitor Core Web Vitals
- Track field data (real users)
- Identify performance issues
- Compare lab vs field data

### Real User Monitoring (RUM)

- Track actual user performance
- Monitor Core Web Vitals in production
- Identify performance issues
- Measure user experience

### Performance Budgets

- Set performance budgets
- Enforce in CI/CD
- Track budget violations
- Update budgets regularly

## Troubleshooting

### Performance Score Not Improving

**Possible Causes:**
1. Issues not actually fixed
2. Testing on different conditions
3. Caching issues
4. Server-side issues

**Solutions:**
1. Verify fixes are deployed
2. Clear cache and re-test
3. Test multiple times
4. Check server performance

### Core Web Vitals Fluctuating

**Possible Causes:**
1. Network conditions
2. Server load
3. Third-party scripts
4. A/B testing

**Solutions:**
1. Test multiple times
2. Average results
3. Monitor over time
4. Check for external factors

## Resources

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

## Support

For issues or questions:
1. Check this guide first
2. Review PageSpeed Insights recommendations
3. Test with multiple tools
4. Check Next.js performance docs
5. Review Core Web Vitals documentation

## Last Updated

${new Date().toISOString().split('T')[0]}

