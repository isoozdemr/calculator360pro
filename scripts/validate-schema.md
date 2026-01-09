# Schema Validation Checklist

Bu doküman, tüm calculator sayfalarının schema markup'larını validate etmek için kullanılır.

## Validation Adımları

### 1. Google Rich Results Test

Her calculator sayfası için aşağıdaki URL'leri test edin:

**Test URL Format:**
```
https://calculator360pro.com/calculators/{category}/{slug}
```

**Calculator Listesi:**
- [ ] `/calculators/math/percentage-calculator`
- [ ] `/calculators/health/bmi-calculator`
- [ ] `/calculators/date-time/age-calculator`
- [ ] `/calculators/math/scientific-calculator`
- [ ] `/calculators/education/gpa-calculator`
- [ ] `/calculators/finance/mortgage-calculator`
- [ ] `/calculators/finance/compound-interest-calculator`
- [ ] `/calculators/finance/loan-calculator`
- [ ] `/calculators/finance/tax-calculator`
- [ ] `/calculators/finance/salary-calculator`

**Test URL:** https://search.google.com/test/rich-results

### 2. Schema.org Validator

Her schema türü için Schema.org validator kullanın:

**Test URL:** https://validator.schema.org/

**Test Edilecek Schemas:**
- [ ] WebApplication schema
- [ ] FAQPage schema
- [ ] BreadcrumbList schema
- [ ] Organization schema
- [ ] WebSite schema

### 3. Validation Checklist

Her calculator için kontrol edin:

#### WebApplication Schema
- [ ] @context mevcut
- [ ] @type = "WebApplication"
- [ ] name mevcut ve doğru
- [ ] description mevcut ve doğru
- [ ] url mevcut ve doğru
- [ ] applicationCategory = "UtilityApplication"
- [ ] operatingSystem = "Web"
- [ ] offers.price = "0"
- [ ] offers.priceCurrency = "USD"

#### FAQPage Schema
- [ ] @context mevcut
- [ ] @type = "FAQPage"
- [ ] mainEntity array mevcut
- [ ] Her FAQ için Question ve Answer mevcut
- [ ] Minimum 3 FAQ (Google requirement)
- [ ] Maximum 10 FAQ (Google limit)

#### BreadcrumbList Schema
- [ ] @context mevcut
- [ ] @type = "BreadcrumbList"
- [ ] itemListElement array mevcut
- [ ] Her item için position, name, item mevcut
- [ ] Home > Calculators > Category > Calculator sırası doğru

#### Organization Schema
- [ ] @context mevcut
- [ ] @type = "Organization"
- [ ] name = "Calculator360Pro"
- [ ] url mevcut ve doğru
- [ ] logo URL mevcut (eğer logo varsa)

#### WebSite Schema
- [ ] @context mevcut
- [ ] @type = "WebSite"
- [ ] name = "Calculator360Pro"
- [ ] url mevcut ve doğru
- [ ] SearchAction mevcut (eğer search varsa)

### 4. Content Matching Check

- [ ] Schema description = Meta description
- [ ] FAQ schema questions = Visible FAQ questions
- [ ] Breadcrumb schema = Visible breadcrumb navigation
- [ ] Schema URL = Actual page URL

### 5. Common Errors to Check

- [ ] Duplicate schemas (aynı schema iki kez eklenmiş)
- [ ] Missing required properties
- [ ] Invalid URL format
- [ ] Missing @context
- [ ] Invalid JSON structure
- [ ] Schema content mismatch with visible content

## Validation Sonuçları

### Başarılı Validasyon
✅ Tüm schemas geçerli
✅ Hiç hata yok
✅ Content matching doğru

### Hatalar Varsa
❌ Hata listesini not edin
❌ Hataları düzeltin
❌ Tekrar test edin

## Otomatik Validation (Gelecek)

Gelecekte otomatik validation script'i eklenecek:
- CI/CD pipeline'a entegre edilecek
- Her deploy öncesi validation yapılacak
- Hata varsa build fail olacak

## Notlar

- Production'da test ederken gerçek URL'leri kullanın
- Local development'ta localhost URL'leri kullanabilirsiniz
- Schema değişikliklerinden sonra mutlaka validation yapın
- Google Rich Results Test sonuçlarını kaydedin

