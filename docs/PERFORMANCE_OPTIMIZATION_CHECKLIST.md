# Performance Optimization Checklist

Complete checklist for optimizing Core Web Vitals and overall page performance.

## Core Web Vitals Targets

### LCP (Largest Contentful Paint)
- **Target:** < 2.5s (Good)
- **Needs Improvement:** 2.5-4s
- **Poor:** > 4s

**Optimization Checklist:**
- [ ] Optimize images (WebP/AVIF formats)
- [ ] Use next/image component
- [ ] Implement image lazy loading
- [ ] Optimize server response time
- [ ] Use CDN for static assets
- [ ] Preload critical resources
- [ ] Minimize render-blocking resources
- [ ] Optimize CSS delivery
- [ ] Reduce server response time
- [ ] Use efficient caching strategies

### INP (Interaction to Next Paint)
- **Target:** < 200ms (Good)
- **Needs Improvement:** 200-500ms
- **Poor:** > 500ms

**Optimization Checklist:**
- [ ] Code splitting implemented
- [ ] Dynamic imports for non-critical code
- [ ] Optimize JavaScript execution
- [ ] Minimize main thread blocking
- [ ] Optimize event handlers
- [ ] Use Web Workers for heavy tasks
- [ ] Reduce JavaScript bundle size
- [ ] Remove unused JavaScript
- [ ] Defer non-critical JavaScript
- [ ] Optimize third-party scripts

### CLS (Cumulative Layout Shift)
- **Target:** < 0.1 (Good)
- **Needs Improvement:** 0.1-0.25
- **Poor:** > 0.25

**Optimization Checklist:**
- [ ] Set width and height on images
- [ ] Reserve space for ads/embeds
- [ ] Use font-display: swap
- [ ] Preload critical fonts
- [ ] Avoid inserting content above existing content
- [ ] Use CSS aspect-ratio for responsive images
- [ ] Avoid dynamic content insertion
- [ ] Set dimensions for videos/iframes
- [ ] Avoid animations that cause layout shift
- [ ] Test layout stability

## Image Optimization

### Next.js Image Component
- [ ] All images use next/image component
- [ ] Images have width and height attributes
- [ ] Images use appropriate sizes attribute
- [ ] Images use priority prop for above-fold images
- [ ] Images use loading="lazy" for below-fold images

### Image Formats
- [ ] WebP format enabled
- [ ] AVIF format enabled (if supported)
- [ ] Fallback to original format
- [ ] Image quality optimized (80-90%)
- [ ] Image compression enabled

### Image Sizing
- [ ] Images sized appropriately
- [ ] Responsive images configured
- [ ] srcset for different screen sizes
- [ ] No oversized images
- [ ] Images optimized for target size

### Image Loading
- [ ] Lazy loading for below-fold images
- [ ] Eager loading for above-fold images
- [ ] Preload for critical images
- [ ] Image placeholders used
- [ ] Blur placeholder for better UX

## JavaScript Optimization

### Code Splitting
- [ ] Route-based code splitting
- [ ] Component-based code splitting
- [ ] Dynamic imports used
- [ ] Lazy loading for non-critical components
- [ ] Separate vendor bundles

### Bundle Size
- [ ] Initial bundle < 100KB (gzipped)
- [ ] Total JavaScript < 200KB (gzipped)
- [ ] Bundle analyzer used
- [ ] Unused code removed
- [ ] Tree shaking enabled

### JavaScript Execution
- [ ] Minimize JavaScript execution time
- [ ] Defer non-critical JavaScript
- [ ] Async loading for third-party scripts
- [ ] Remove unused dependencies
- [ ] Optimize third-party libraries

### Modern JavaScript
- [ ] ES modules used
- [ ] Modern syntax (if supported)
- [ ] Polyfills only where needed
- [ ] Transpilation optimized
- [ ] Source maps for production (optional)

## CSS Optimization

### Critical CSS
- [ ] Critical CSS inlined
- [ ] Non-critical CSS lazy loaded
- [ ] Above-fold CSS optimized
- [ ] CSS blocking minimized
- [ ] CSS delivery optimized

### CSS Size
- [ ] CSS minified
- [ ] Unused CSS removed
- [ ] CSS bundle size < 50KB
- [ ] CSS split by route
- [ ] CSS purging enabled

### CSS Performance
- [ ] Efficient selectors
- [ ] Avoid expensive properties
- [ ] Use CSS transforms for animations
- [ ] Minimize repaints/reflows
- [ ] Use will-change sparingly

## Font Optimization

### Next.js Font Optimization
- [ ] next/font used
- [ ] Fonts self-hosted
- [ ] Font subsetting enabled
- [ ] Font preloading configured
- [ ] Font display strategy set

### Font Loading
- [ ] font-display: swap configured
- [ ] Preload critical fonts
- [ ] Fallback fonts specified
- [ ] Font loading optimized
- [ ] Font FOUT/FOIT minimized

### Font Size
- [ ] Font files optimized
- [ ] Only required font weights
- [ ] Font subsetting for languages
- [ ] WOFF2 format used
- [ ] Font files compressed

## Caching Strategy

### Static Assets
- [ ] Static assets cached
- [ ] Cache headers configured
- [ ] Long cache for immutable assets
- [ ] Versioned asset URLs
- [ ] CDN configured

### Browser Caching
- [ ] Cache-Control headers set
- [ ] ETag headers configured
- [ ] Last-Modified headers set
- [ ] Cache invalidation strategy
- [ ] Service worker (if applicable)

### Server Caching
- [ ] Server-side caching enabled
- [ ] API response caching
- [ ] Database query caching
- [ ] Page caching strategy
- [ ] Cache warming (if applicable)

## Network Optimization

### Compression
- [ ] Gzip compression enabled
- [ ] Brotli compression enabled
- [ ] Text assets compressed
- [ ] JSON responses compressed
- [ ] HTML compressed

### HTTP/2
- [ ] HTTP/2 enabled
- [ ] Server push (if applicable)
- [ ] Multiplexing utilized
- [ ] Header compression
- [ ] Connection reuse

### CDN
- [ ] CDN configured
- [ ] Static assets on CDN
- [ ] Edge caching enabled
- [ ] Geographic distribution
- [ ] CDN performance optimized

## Third-Party Scripts

### Optimization
- [ ] Third-party scripts minimized
- [ ] Async/defer loading
- [ ] Lazy load non-critical scripts
- [ ] Remove unused third-party scripts
- [ ] Optimize ad scripts

### Monitoring
- [ ] Third-party script impact measured
- [ ] Script loading optimized
- [ ] Script execution optimized
- [ ] Script blocking minimized
- [ ] Alternative solutions considered

## Server Performance

### Response Time
- [ ] Server response time < 200ms
- [ ] Database queries optimized
- [ ] API endpoints optimized
- [ ] Caching implemented
- [ ] Server resources optimized

### Server Configuration
- [ ] Server properly configured
- [ ] Compression enabled
- [ ] Keep-alive connections
- [ ] Connection pooling
- [ ] Resource limits set

## Monitoring & Testing

### Testing Tools
- [ ] Google PageSpeed Insights
- [ ] Lighthouse (Chrome DevTools)
- [ ] WebPageTest
- [ ] Chrome DevTools Performance
- [ ] Real User Monitoring (RUM)

### Metrics Tracking
- [ ] Core Web Vitals tracked
- [ ] Performance metrics logged
- [ ] Error tracking enabled
- [ ] User experience monitored
- [ ] Performance budgets set

### Regular Testing
- [ ] Weekly testing for top pages
- [ ] Monthly testing for all pages
- [ ] Performance regression testing
- [ ] A/B testing for optimizations
- [ ] Continuous monitoring

## Common Performance Issues & Solutions

### Issue: Slow LCP
**Solutions:**
1. Optimize largest content element (usually image)
2. Improve server response time
3. Eliminate render-blocking resources
4. Preload critical resources
5. Use CDN for static assets

### Issue: High CLS
**Solutions:**
1. Set dimensions on images and videos
2. Reserve space for ads/embeds
3. Use font-display: swap
4. Avoid inserting content above existing content
5. Test layout stability

### Issue: Slow INP
**Solutions:**
1. Code splitting and lazy loading
2. Optimize JavaScript execution
3. Minimize main thread blocking
4. Optimize event handlers
5. Use Web Workers for heavy tasks

### Issue: Large Bundle Size
**Solutions:**
1. Remove unused dependencies
2. Implement code splitting
3. Use dynamic imports
4. Replace large libraries
5. Enable tree shaking

### Issue: Render-Blocking Resources
**Solutions:**
1. Inline critical CSS
2. Defer non-critical CSS
3. Minimize JavaScript blocking
4. Use async/defer for scripts
5. Optimize font loading

## Performance Budgets

### Recommended Budgets
- **Initial JavaScript:** < 100KB (gzipped)
- **Total JavaScript:** < 200KB (gzipped)
- **CSS:** < 50KB (gzipped)
- **Images:** Optimize per image
- **Total Page Size:** < 500KB (initial load)
- **LCP:** < 2.5s
- **INP:** < 200ms
- **CLS:** < 0.1

### Monitoring
- [ ] Performance budgets defined
- [ ] Budgets enforced in CI/CD
- [ ] Budget violations tracked
- [ ] Budgets reviewed regularly
- [ ] Budgets updated as needed

## Next Steps

1. **Run validation:**
   \`\`\`bash
   npm run check:web-vitals
   \`\`\`

2. **Generate test URLs:**
   \`\`\`bash
   npm run generate:pagespeed-test-urls
   \`\`\`

3. **Test with PageSpeed Insights:**
   - Use generated test URLs
   - Test mobile and desktop
   - Review Core Web Vitals
   - Fix critical issues first

4. **Monitor regularly:**
   - Google Search Console
   - Real User Monitoring
   - Performance metrics
   - User feedback

## Resources

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

## Last Updated

${new Date().toISOString().split('T')[0]}

