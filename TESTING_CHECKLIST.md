# Testing & Quality Assurance Checklist

Bu doküman, Calculator360Pro'nun launch öncesi test ve kalite kontrol sürecini detaylandırır.

## 🎯 Test Kategorileri

### 1. Performance Testing

#### Lighthouse Audit
- [ ] Homepage Lighthouse score (target: 90+)
- [ ] Calculator pages Lighthouse score (target: 90+)
- [ ] Category pages Lighthouse score (target: 90+)

**Test URL:** Chrome DevTools > Lighthouse

**Metrikler:**
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 95+

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 1.8s
- [ ] CLS (Cumulative Layout Shift): 0.0
- [ ] INP (Interaction to Next Paint): < 200ms
- [ ] FCP (First Contentful Paint): < 1.0s
- [ ] TTI (Time to Interactive): < 3.0s

**Test URL:** https://pagespeed.web.dev/

#### Bundle Size
- [ ] Initial JS bundle: < 100KB (gzipped)
- [ ] Total JS: < 200KB (gzipped)
- [ ] Total CSS: < 50KB (gzipped)
- [ ] Total page size: < 500KB

**Test:** `npm run build` ve bundle analyzer

### 2. Functionality Testing

#### Calculator Functionality
Her calculator için test edin:

**Percentage Calculator:**
- [ ] Basic percentage calculation
- [ ] Percentage increase calculation
- [ ] Percentage decrease calculation
- [ ] Error handling (invalid inputs)
- [ ] Reset functionality

**BMI Calculator:**
- [ ] Metric calculation
- [ ] Imperial calculation
- [ ] BMI category display
- [ ] Input validation
- [ ] Reset functionality

**Age Calculator:**
- [ ] Age calculation (years, months, days)
- [ ] Date validation
- [ ] Future date handling
- [ ] Leap year handling

**Scientific Calculator:**
- [ ] Basic operations
- [ ] Trigonometric functions
- [ ] Logarithmic functions
- [ ] Exponential functions
- [ ] Error handling

**GPA Calculator:**
- [ ] 4.0 scale calculation
- [ ] Weighted GPA calculation
- [ ] Multiple courses
- [ ] Grade validation

**Mortgage Calculator:**
- [ ] Monthly payment calculation
- [ ] Total interest calculation
- [ ] Amortization schedule
- [ ] Input validation

**Compound Interest Calculator:**
- [ ] Compound interest calculation
- [ ] Different compounding frequencies
- [ ] Future value calculation
- [ ] Input validation

**Loan Calculator:**
- [ ] Loan payment calculation
- [ ] Total interest calculation
- [ ] Different loan types
- [ ] Input validation

**Tax Calculator:**
- [ ] Tax bracket calculation
- [ ] Effective tax rate
- [ ] Marginal tax rate
- [ ] Input validation

**Salary Calculator:**
- [ ] Take-home pay calculation
- [ ] Tax deductions
- [ ] Hourly to annual conversion
- [ ] Input validation

#### Navigation
- [ ] Homepage navigation works
- [ ] Category pages navigation works
- [ ] Calculator pages navigation works
- [ ] Breadcrumb navigation works
- [ ] Footer links work
- [ ] Mobile menu works

#### Internal Linking
- [ ] Related calculators links work
- [ ] Category links work
- [ ] Homepage links work
- [ ] All links are valid (no 404s)

### 3. Responsive Design Testing

#### Mobile Devices
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)

**Test Edilecekler:**
- [ ] Layout doesn't break
- [ ] Text is readable
- [ ] Buttons are tappable (44x44px minimum)
- [ ] Calculator inputs work
- [ ] Navigation works
- [ ] Images scale properly

#### Desktop
- [ ] 1280px (laptop)
- [ ] 1920px (desktop)
- [ ] 2560px (large desktop)

**Test Edilecekler:**
- [ ] Layout is optimal
- [ ] Calculator is centered
- [ ] Sidebar works (if applicable)
- [ ] Hover states work

### 4. Browser Compatibility

#### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile Browsers
- [ ] Chrome Mobile
- [ ] Safari Mobile
- [ ] Firefox Mobile
- [ ] Samsung Internet

**Test Edilecekler:**
- [ ] All features work
- [ ] No console errors
- [ ] Styling is consistent
- [ ] Performance is acceptable

### 5. Accessibility Testing

#### WCAG 2.1 AA Compliance
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] Alt text for images
- [ ] Form labels associated
- [ ] Error messages accessible
- [ ] Color contrast 4.5:1 minimum
- [ ] Text resizable up to 200%
- [ ] Headings properly structured
- [ ] Language declared in HTML

#### Testing Tools
- [ ] WAVE (Web Accessibility Evaluation Tool)
- [ ] axe DevTools
- [ ] Lighthouse Accessibility audit
- [ ] Keyboard-only navigation test
- [ ] Screen reader test (NVDA/JAWS)

### 6. SEO Testing

#### Technical SEO
- [ ] All pages have unique title tags
- [ ] All pages have meta descriptions
- [ ] All pages have canonical URLs
- [ ] Sitemap.xml is accessible
- [ ] robots.txt is correct
- [ ] Schema markup is valid
- [ ] Hreflang tags (if applicable)
- [ ] Open Graph tags
- [ ] Twitter Card tags

#### Content SEO
- [ ] Each calculator has 300+ words
- [ ] Each calculator has 3+ FAQs
- [ ] Keywords used naturally
- [ ] Internal linking structure
- [ ] Related calculators section

**Test URL:** Google Search Console

### 7. Internationalization Testing

#### Language Switching
- [ ] English (en) works
- [ ] UK English (en-GB) works
- [ ] German (de) - if translated
- [ ] French (fr) - if translated
- [ ] Spanish (es) - if translated
- [ ] Italian (it) - if translated
- [ ] Dutch (nl) - if translated

#### Localization
- [ ] Number formats correct
- [ ] Date formats correct
- [ ] Currency formats correct
- [ ] Calculator terminology translated

### 8. Security Testing

#### Security Headers
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: origin-when-cross-origin
- [ ] HTTPS enforced

#### Input Validation
- [ ] XSS protection
- [ ] SQL injection protection (if applicable)
- [ ] CSRF protection (if applicable)
- [ ] Input sanitization

### 9. Analytics & Tracking

#### Google Analytics
- [ ] GA4 tracking code installed
- [ ] Page views tracked
- [ ] Events tracked (if applicable)
- [ ] No duplicate tracking

#### AdSense (if applicable)
- [ ] AdSense code installed
- [ ] Ads display correctly
- [ ] No policy violations
- [ ] Ad placement is UX-safe

### 10. Error Handling

#### Error Scenarios
- [ ] 404 page works
- [ ] Invalid calculator slug handling
- [ ] Invalid input handling
- [ ] Network error handling
- [ ] JavaScript error handling

## 📊 Test Sonuçları

### Test Durumu
- [ ] Tüm testler geçti
- [ ] Kritik hatalar düzeltildi
- [ ] Orta öncelikli hatalar düzeltildi
- [ ] Düşük öncelikli hatalar not edildi

### Launch Onayı
- [ ] Performance hedefleri karşılandı
- [ ] Tüm calculator'lar çalışıyor
- [ ] Responsive design doğru
- [ ] Browser compatibility OK
- [ ] Accessibility compliance OK
- [ ] SEO optimization OK
- [ ] Security OK
- [ ] Analytics tracking OK

## 🔄 Sürekli Test

### Pre-Deploy Checklist
- [ ] Lighthouse audit
- [ ] Schema validation
- [ ] Critical calculator tests
- [ ] Mobile responsiveness check

### Post-Deploy Checklist
- [ ] Production site works
- [ ] Analytics tracking
- [ ] Error monitoring
- [ ] Performance monitoring

## 📝 Notlar

- Test sonuçlarını dokümante edin
- Hataları issue tracker'a ekleyin
- Düzenli test schedule oluşturun
- Automated testing ekleyin (gelecek)

