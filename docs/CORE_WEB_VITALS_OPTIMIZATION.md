# Core Web Vitals Optimization Guide

**Status:** Active  
**Last Updated:** 2026  
**Priority:** High

## Overview

Core Web Vitals are a set of metrics that Google uses to measure user experience on websites. Optimizing these metrics is crucial for SEO rankings and user satisfaction.

## Core Web Vitals Metrics

### 1. LCP (Largest Contentful Paint)

**Target:** < 2.5 seconds

**What it measures:** Time for the largest content element to be rendered

**Optimization Strategies:**
- Optimize images (WebP, AVIF formats)
- Use Next.js Image component
- Implement lazy loading
- Optimize server response time
- Use CDN for static assets
- Minimize render-blocking resources
- Preload critical resources

### 2. INP (Interaction to Next Paint)

**Target:** < 200 milliseconds

**What it measures:** Responsiveness to user interactions

**Optimization Strategies:**
- Minimize JavaScript execution time
- Use code splitting
- Optimize event handlers
- Defer non-critical JavaScript
- Use Web Workers for heavy computations
- Optimize third-party scripts
- Reduce main thread blocking

### 3. CLS (Cumulative Layout Shift)

**Target:** < 0.1

**What it measures:** Visual stability of the page

**Optimization Strategies:**
- Set dimensions for images and videos
- Reserve space for ads and embeds
- Avoid inserting content above existing content
- Use font-display: swap
- Preload fonts
- Set explicit sizes for dynamic content

## Current Implementation

### Image Optimization

**Status:** ✅ Implemented

- Next.js Image component used
- WebP and AVIF formats configured
- Responsive images with device sizes
- Lazy loading enabled

**File:** `next.config.ts`

### Font Optimization

**Status:** ✅ Implemented

- Next.js font optimization (Inter, JetBrains Mono)
- font-display: swap configured
- Preload enabled for Inter font

**File:** `app/layout.tsx`

### Code Splitting

**Status:** ✅ Implemented

- Next.js automatic code splitting
- Dynamic imports for components
- Route-based code splitting

## Monitoring Setup

### Google Search Console

1. Go to Google Search Console
2. Navigate to "Core Web Vitals" report
3. Monitor LCP, INP, and CLS metrics
4. Fix issues reported

### PageSpeed Insights

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your URL
3. Test both mobile and desktop
4. Review Core Web Vitals scores
5. Implement suggested optimizations

### Real User Monitoring (RUM)

**Recommended Tools:**
- Google Analytics 4 (Core Web Vitals report)
- Vercel Analytics (if using Vercel)
- Custom RUM solution

## Optimization Checklist

### LCP Optimization

- [ ] Optimize images (WebP, AVIF)
- [ ] Use Next.js Image component
- [ ] Implement lazy loading
- [ ] Optimize server response time
- [ ] Use CDN for static assets
- [ ] Minimize render-blocking CSS
- [ ] Preload critical resources
- [ ] Optimize fonts

### INP Optimization

- [ ] Minimize JavaScript execution
- [ ] Use code splitting
- [ ] Optimize event handlers
- [ ] Defer non-critical JavaScript
- [ ] Optimize third-party scripts
- [ ] Reduce main thread blocking
- [ ] Use Web Workers if needed

### CLS Optimization

- [ ] Set image dimensions
- [ ] Set video dimensions
- [ ] Reserve space for ads
- [ ] Avoid inserting content above existing
- [ ] Use font-display: swap
- [ ] Set explicit sizes for dynamic content
- [ ] Test layout stability

## Performance Budget

### Recommended Budgets

**LCP:** < 2.5s (target: < 1.8s)
**INP:** < 200ms (target: < 100ms)
**CLS:** < 0.1 (target: 0.0)

### Resource Limits

- **JavaScript:** < 200KB (initial load)
- **CSS:** < 50KB (initial load)
- **Images:** Optimized, WebP/AVIF
- **Fonts:** Preloaded, subset if possible

## Testing

### Tools

1. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Tests both mobile and desktop
   - Provides Core Web Vitals scores

2. **Chrome DevTools**
   - Lighthouse tab
   - Performance tab
   - Network tab

3. **Web Vitals Extension**
   - Chrome extension
   - Real-time Core Web Vitals monitoring

### Testing Schedule

- **Weekly:** Test homepage and top 5 calculator pages
- **Monthly:** Test all calculator pages
- **After changes:** Test affected pages

## Best Practices

1. **Monitor Regularly:** Check Core Web Vitals weekly
2. **Fix Issues Immediately:** Address problems as they arise
3. **Test Before Deploy:** Test performance before production
4. **Optimize Continuously:** Regular optimization improvements
5. **Track Trends:** Monitor performance over time

## Troubleshooting

### High LCP

**Common Causes:**
- Large images
- Slow server response
- Render-blocking resources
- Slow network

**Solutions:**
- Optimize images
- Use CDN
- Minimize server response time
- Preload critical resources

### High INP

**Common Causes:**
- Heavy JavaScript
- Long event handlers
- Third-party scripts
- Main thread blocking

**Solutions:**
- Optimize JavaScript
- Defer non-critical scripts
- Use code splitting
- Optimize event handlers

### High CLS

**Common Causes:**
- Images without dimensions
- Ads without reserved space
- Dynamic content insertion
- Font loading

**Solutions:**
- Set image dimensions
- Reserve ad space
- Avoid content shifts
- Optimize font loading

## Checklist

- [ ] Core Web Vitals monitoring set up
- [ ] LCP optimized (< 2.5s)
- [ ] INP optimized (< 200ms)
- [ ] CLS optimized (< 0.1)
- [ ] Performance budget defined
- [ ] Testing schedule established
- [ ] Issues tracked and fixed
- [ ] Regular monitoring in place

