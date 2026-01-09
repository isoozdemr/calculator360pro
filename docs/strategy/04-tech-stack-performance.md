# Tech Stack & Performance

**Status:** Active  
**Last Updated:** 2024  
**Priority:** Critical

## Executive Summary

Tech stack seçimi ve performans optimizasyonu, Calculator360Pro'nun SEO başarısı, hızlı sayfa yükleme süreleri ve ölçeklenebilir mimari için kritik öneme sahiptir. Bu doküman, framework seçimi, SSR/SSG stratejisi, caching ve Core Web Vitals optimizasyonlarını detaylandırır.

## Framework Decision

### Selected: Next.js 16 (App Router)

**Reasoning:**

1. **SEO Dominance:**
   - Server-Side Rendering (SSR) support
   - Static Site Generation (SSG) for calculators
   - Built-in metadata API
   - Automatic sitemap generation

2. **Performance:**
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Built-in performance monitoring

3. **Developer Experience:**
   - TypeScript support
   - Hot reload
   - Excellent documentation
   - Large ecosystem

4. **Scalability:**
   - App Router for better routing
   - API routes for future features
   - Middleware support
   - Edge runtime support

### Alternative Considered: Remix

**Why Not:**
- Smaller ecosystem
- Less SEO-focused features
- Steeper learning curve
- Less community support

## SSR / SSG / Hybrid Strategy

### Static Site Generation (SSG) - Primary

**Use Cases:**
- Calculator pages (most pages)
- Category pages
- Homepage
- Static content pages

**Implementation:**
```typescript
export async function generateStaticParams() {
  const calculators = getAllCalculators();
  return calculators.map(calc => ({
    category: calc.category,
    slug: calc.slug,
  }));
}
```

**Benefits:**
- Fastest page load times
- Better SEO (pre-rendered HTML)
- Lower server costs
- CDN cacheable

**Limitations:**
- Requires rebuild for content changes
- No real-time data

### Server-Side Rendering (SSR) - Selective

**Use Cases:**
- Blog posts (if dynamic)
- User-specific pages (future)
- Analytics dashboards (future)

**Implementation:**
```typescript
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
```

**Benefits:**
- Real-time data
- Dynamic content
- User personalization

**Limitations:**
- Slower than SSG
- Higher server costs
- More complex caching

### Hybrid Approach

**Strategy:**
- **SSG for calculators:** 95% of pages
- **SSR for dynamic:** 5% of pages
- **ISR (Incremental Static Regeneration):** For frequently updated content

**ISR Example:**
```typescript
export const revalidate = 3600; // Revalidate every hour
```

## Caching Strategy

### Static Asset Caching

**Images:**
- Cache-Control: `public, max-age=31536000, immutable`
- CDN caching
- WebP/AVIF formats

**Fonts:**
- Cache-Control: `public, max-age=31536000, immutable`
- Preload critical fonts
- Self-hosted fonts

**JavaScript/CSS:**
- Cache-Control: `public, max-age=31536000, immutable`
- Content-based hashing
- CDN caching

### Page Caching

**Static Pages (SSG):**
- CDN cache: Forever (until rebuild)
- Browser cache: 1 hour
- Revalidation: On deploy

**Dynamic Pages (SSR):**
- CDN cache: 5 minutes
- Browser cache: No cache
- Revalidation: On-demand

### API Caching

**Calculator Data:**
- Static data: No API calls needed
- Dynamic data: Cache for 1 hour
- CDN edge caching

## Code Splitting

### Route-Based Splitting

**Automatic:**
- Next.js automatically splits by route
- Each calculator page = separate bundle
- Category pages = separate bundle

**Manual Optimization:**
```typescript
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // If not needed for SEO
});
```

### Component Splitting

**Calculator Components:**
- Each calculator = separate component
- Lazy load if not above fold
- Preload on hover (future)

**Third-Party Libraries:**
- Lazy load analytics
- Lazy load ads
- Lazy load non-critical libraries

### Bundle Size Targets

- Initial bundle: < 100KB (gzipped)
- Calculator page: < 50KB (gzipped)
- Total page size: < 200KB (gzipped)

## Lazy Loading Rules

### Images

**Above Fold:**
- Load immediately
- Use priority prop
- Preload critical images

**Below Fold:**
- Lazy load
- Use loading="lazy"
- Placeholder images

**Implementation:**
```typescript
<Image
  src={imageSrc}
  alt={alt}
  loading="lazy" // or "eager" for above fold
  priority={isAboveFold}
/>
```

### JavaScript

**Critical:**
- Calculator logic
- Core UI components
- Navigation

**Non-Critical:**
- Analytics (lazy load)
- Ads (lazy load)
- Social widgets (lazy load)
- Third-party scripts (lazy load)

### Third-Party Scripts

**Analytics:**
- Load after page interactive
- Use `strategy="lazyOnload"`

**Ads:**
- Load after calculator renders
- Use `strategy="lazyOnload"`
- Reserve space to prevent CLS

**Social Widgets:**
- Load on scroll into view
- Or on user interaction

## Core Web Vitals Targets

### Largest Contentful Paint (LCP) < 1.8s

**Target:** < 1.8s (Good)

**Optimization Strategies:**

1. **Image Optimization:**
   - Use Next.js Image component
   - WebP/AVIF formats
   - Proper sizing
   - Preload LCP image

2. **Font Optimization:**
   - Preload critical fonts
   - Use `font-display: swap`
   - Subset fonts
   - Self-host fonts

3. **Server Response:**
   - Fast server response (< 200ms)
   - CDN edge locations
   - Static generation (SSG)

4. **Resource Hints:**
   - Preconnect to external domains
   - DNS prefetch
   - Preload critical resources

**Implementation:**
```typescript
// Preload critical resources
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

### Cumulative Layout Shift (CLS) = 0

**Target:** 0.0 (Perfect)

**Prevention Rules:**

1. **Image Dimensions:**
   - Always specify width/height
   - Use aspect-ratio CSS
   - Reserve space before load

2. **Ad Placements:**
   - Reserve space for ads
   - Use aspect-ratio containers
   - Don't shift on ad load

3. **Dynamic Content:**
   - Reserve space for results
   - Use skeleton loaders
   - Set min-height

4. **Fonts:**
   - Use font-display: swap
   - System font fallback
   - Preload critical fonts

**Implementation:**
```css
.calculator-result {
  min-height: 3rem; /* Prevents CLS */
  aspect-ratio: 16/9; /* For images */
}
```

### Interaction to Next Paint (INP) < 200ms

**Target:** < 200ms (Good)

**Optimization Strategies:**

1. **JavaScript Optimization:**
   - Minimize main thread work
   - Code splitting
   - Lazy loading
   - Debounce/throttle events

2. **Event Handlers:**
   - Efficient event handlers
   - Avoid long tasks
   - Use requestIdleCallback
   - Web Workers for heavy computation

3. **Input Handling:**
   - Debounce input events
   - Optimize calculator logic
   - Use efficient algorithms

**Implementation:**
```typescript
// Debounce calculator input
const debouncedCalculate = useMemo(
  () => debounce(calculate, 300),
  [calculate]
);
```

## Performance Monitoring

### Tools

1. **Lighthouse:**
   - CI/CD integration
   - Performance budgets
   - Regular audits

2. **Web Vitals:**
   - Real User Monitoring (RUM)
   - Core Web Vitals tracking
   - Performance API

3. **Next.js Analytics:**
   - Built-in performance monitoring
   - Real-time metrics
   - Performance insights

### Performance Budgets

**Page Load:**
- LCP: < 1.8s
- FCP: < 1.0s
- TTI: < 3.0s

**Bundle Size:**
- Initial JS: < 100KB
- Total JS: < 200KB
- Total CSS: < 50KB

**Network:**
- Total page size: < 500KB
- Images: < 200KB total
- Fonts: < 100KB total

## Build Optimization

### Next.js Config

```typescript
const nextConfig = {
  // Compression
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};
```

### Build Process

1. **Type Checking:**
   - TypeScript strict mode
   - Pre-build type checking

2. **Linting:**
   - ESLint on build
   - Fix auto-fixable issues

3. **Optimization:**
   - Tree shaking
   - Minification
   - Compression

## Action Items

### Immediate

- [ ] Configure Next.js for optimal performance
- [ ] Set up image optimization
- [ ] Implement code splitting
- [ ] Set up performance monitoring

### Short-term

- [ ] Optimize font loading
- [ ] Implement lazy loading
- [ ] Set up CDN caching
- [ ] Create performance budgets

### Medium-term

- [ ] Implement ISR for dynamic content
- [ ] Optimize third-party scripts
- [ ] Set up RUM monitoring
- [ ] Performance testing automation

## Risk Assessment

### High Risk

1. **Performance Regression**
   - Risk: Slow page loads, poor SEO
   - Mitigation: Performance budgets, CI/CD checks

2. **CLS Issues**
   - Risk: Poor Core Web Vitals
   - Mitigation: Strict CLS prevention, testing

### Medium Risk

1. **Bundle Size Growth**
   - Risk: Slow initial load
   - Mitigation: Code splitting, bundle analysis

2. **Third-Party Script Impact**
   - Risk: Performance degradation
   - Mitigation: Lazy loading, monitoring

## Success Metrics

- Lighthouse Performance: 95+ (target)
- LCP: < 1.8s (target)
- CLS: 0.0 (target)
- INP: < 200ms (target)
- Bundle Size: < 200KB (target)

