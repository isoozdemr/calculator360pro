# Performance Audit Checklist - Hemen Yapılması Gerekenler

**Tarih:** Ocak 2026  
**Öncelik:** Yüksek - SEO sıralaması için kritik

## Hızlı Performans Kontrol Listesi

### 1. Lighthouse Testi (Her Hafta Yapılmalı)

**Test URL'leri:**
1. https://calculator360pro.com (Ana sayfa)
2. https://calculator360pro.com/calculators/finance/mortgage-calculator
3. https://calculator360pro.com/calculators/health/bmi-calculator
4. https://calculator360pro.com/calculators/math/percentage-calculator

**Nasıl Test Edilir:**
1. Chrome DevTools aç (F12)
2. "Lighthouse" sekmesine git
3. "Mobile" ve "Desktop" için ayrı ayrı test yap
4. "Performance", "Accessibility", "Best Practices", "SEO" seç
5. "Analyze page load" tıkla

**Hedef Skorlar:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 2. PageSpeed Insights Testi

**URL:** https://pagespeed.web.dev/

**Test Edilecek Sayfalar:**
- [ ] Ana sayfa
- [ ] En popüler 5 calculator sayfası
- [ ] Blog ana sayfası
- [ ] About sayfası

### 3. Core Web Vitals Hedefleri

| Metrik | Hedef | İyi | İyileştirme Gerekli |
|--------|-------|-----|---------------------|
| LCP (Largest Contentful Paint) | < 2.5s | < 1.8s | > 2.5s |
| INP (Interaction to Next Paint) | < 200ms | < 100ms | > 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 | 0 | > 0.1 |

## Optimizasyon Kontrol Listesi

### LCP İyileştirmeleri

- [x] Next.js Image component kullanımı
- [x] WebP/AVIF format desteği
- [x] Lazy loading aktif
- [x] Font preload aktif
- [ ] CDN kullanımı (Vercel/Cloudflare)
- [ ] Server response time < 200ms

### INP İyileştirmeleri

- [x] Code splitting aktif (Next.js automatic)
- [x] Dynamic imports kullanımı
- [ ] Third-party script'lerin lazy load'u (AdSense, Analytics)
- [ ] Event handler optimizasyonu

### CLS İyileştirmeleri

- [x] Font display: swap kullanımı
- [x] Image dimensions tanımlı
- [ ] Ad container'lar için sabit alan
- [ ] Skeleton loader'lar eklenmeli

## Mevcut Next.js Optimizasyonları

Aşağıdaki optimizasyonlar `next.config.ts` dosyasında aktif:

```typescript
// Aktif Optimizasyonlar
- compress: true (gzip sıkıştırma)
- poweredByHeader: false (güvenlik)
- Image formats: WebP, AVIF
- Cache headers tanımlı
- DNS prefetch aktif
```

## Ek Optimizasyon Önerileri

### 1. Bundle Analyzer Çalıştır

```bash
# Bundle boyutlarını analiz et
ANALYZE=true npm run build
```

### 2. Kullanılmayan JavaScript'i Kaldır

```bash
# unused-exports paketi ile analiz
npx depcheck
```

### 3. Critical CSS Çıkar

Inline critical CSS ile above-the-fold içeriği hızlandır.

### 4. Service Worker Ekle (PWA)

Progressive Web App desteği ile offline erişim ve hızlı yükleme.

## Google Search Console'da Kontrol

1. **Core Web Vitals raporu** kontrol et
2. **Mobile Usability** sorunlarını düzelt
3. **Coverage** hatalarını incele
4. **Page Experience** skorunu takip et

## Haftalık Performans Rutini

### Pazartesi
- [ ] Lighthouse mobil testi (ana sayfa)
- [ ] PageSpeed Insights kontrolü

### Çarşamba
- [ ] GSC Core Web Vitals raporu
- [ ] Hata varsa düzelt

### Cuma
- [ ] En popüler 3 sayfa için performans testi
- [ ] Haftalık rapor oluştur

## Sorun Giderme

### LCP > 2.5s ise:
1. Hero image'ı optimize et (< 100KB)
2. Preload critical resources ekle
3. Server response time kontrol et
4. Third-party script'leri geciktir

### INP > 200ms ise:
1. JavaScript bundle boyutunu küçült
2. Event listener'ları optimize et
3. Heavy computation'ları Web Worker'a taşı
4. React re-render'ları minimize et

### CLS > 0.1 ise:
1. Image/video boyutlarını belirt
2. Font flash'ı önle (font-display: swap)
3. Dynamic content için placeholder ekle
4. Ad slot'ları için sabit boyut ayarla

## Useful CLI Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Analyze bundle
ANALYZE=true npm run build

# Lint check
npm run lint

# Type check
npm run type-check
```

## Resources

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals Report](https://search.google.com/search-console/core-web-vitals)
- [Chrome DevTools Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
