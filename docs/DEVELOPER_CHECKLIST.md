# 🚀 Developer Checklist: Yeni İçerik Ekleme Rehberi

**Son Güncelleme:** Ocak 2026  
**Versiyon:** 3.0

Bu doküman, Calculator360Pro'ya yeni calculator veya blog eklerken **mutlaka** takip edilmesi gereken adımları içerir.

---

## ⚠️ OLMAZSA OLMAZLAR

Yeni içerik eklemeden önce bu listeyi tamamlayın. Eksik adım = SEO kaybı!

---

## 📋 ADIM 1: URL Mapping Güncelleme

**Dosya:** `lib/seo/url-mappings.ts`

Her yeni sayfa için URL mapping ekleyin:

```typescript
export const URL_MAPPINGS: Record<string, string> = {
  // ... mevcut mappingler ...
  
  // YENİ EKLENDİ:
  "/calculators/finance/new-calculator": "/tr/hesap-makineleri/finans/yeni-hesap-makinesi",
};
```

✅ **Neden önemli?**
- Sitemap hreflang otomatik oluşur
- LanguageSwitcher doğru çalışır
- Google dil ilişkisini anlar

---

## 📋 ADIM 2: İngilizce Sayfa Oluşturma

**Konum:** `app/calculators/[category]/[slug]/page.tsx`

### Metadata Şablonu:

```typescript
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calculator Name 2026 | Description - Calculator360Pro",
  description: "Calculate X with our free calculator. 2026 updated rates. Instant results! (150-160 karakter)",
  keywords: [
    "primary keyword 2026",
    "secondary keyword",
    "long-tail keyword phrase",
    // Minimum 8 keyword
  ],
  alternates: {
    canonical: `${SITE_URL}/calculators/category/slug`,
    languages: {
      "en": `${SITE_URL}/calculators/category/slug`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/kategori/slug`,
      "x-default": `${SITE_URL}/calculators/category/slug`,
    },
  },
  openGraph: {
    title: "Calculator Name 2026",
    description: "Short description for social media",
    url: `${SITE_URL}/calculators/category/slug`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: "Calculator360Pro",
  },
};
```

### Sayfa Yapısı:

```tsx
export default function CalculatorPage() {
  return (
    <main>
      {/* 1. Schema Markup - JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{...}} />
      
      {/* 2. Breadcrumb */}
      <Breadcrumb items={[...]} />
      
      {/* 3. Hero Section */}
      <h1>Primary Keyword 2026</h1>
      <p>Kısa açıklama + güncelleme tarihi</p>
      
      {/* 4. Calculator Component */}
      <CalculatorComponent />
      
      {/* 5. SEO Content (min 1500 kelime) */}
      <section>
        <h2>What is X?</h2>
        <h2>How to Calculate X?</h2>
        <h2>2026 Rates/Values</h2>
        <h2>Tips and Recommendations</h2>
      </section>
      
      {/* 6. FAQ Section (min 5 soru) */}
      <FAQSection faqs={[...]} />
      
      {/* 7. Related Calculators (min 3 link) */}
      <RelatedCalculators items={[...]} />
    </main>
  );
}
```

---

## 📋 ADIM 3: Türkçe Sayfa Oluşturma

**Konum:** `app/tr/hesap-makineleri/[kategori]/[slug]/page.tsx`

### Metadata Şablonu:

```typescript
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hesap Makinesi Adı 2026 | Açıklama - Calculator360Pro",
  description: "X hesaplayın. 2026 güncel oranlar. Ücretsiz ve anında sonuç! (150-160 karakter)",
  keywords: [
    "ana anahtar kelime 2026",
    "ikincil anahtar kelime",
    "uzun kuyruk anahtar kelime",
    // Minimum 8 keyword
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/kategori/slug`,
    languages: {
      "en": `${SITE_URL}/calculators/category/slug`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/kategori/slug`,
      "x-default": `${SITE_URL}/calculators/category/slug`,
    },
  },
  openGraph: {
    title: "Hesap Makinesi 2026",
    description: "Sosyal medya için kısa açıklama",
    url: `${SITE_URL}/tr/hesap-makineleri/kategori/slug`,
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    siteName: "Calculator360Pro",
  },
};
```

### ⚠️ Türkçe İçerik Kuralları:

| İçerik Tipi | Yaklaşım |
|-------------|----------|
| **Vergi, Maaş, Emeklilik, Kredi** | TAM YEREL - Türkiye mevzuatı |
| **BMI, Kalori, Yaş** | HİBRİT - Evrensel formül + Türkçe örnekler |
| **Yüzde, Matematik** | ÇEVİRİ - Doğrudan çeviri yeterli |

---

## 📋 ADIM 4: Schema Markup Ekleme

Her calculator için 3 schema zorunlu:

### 1. WebApplication Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculator Name",
  "description": "...",
  "url": "...",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "inLanguage": "en",
  "dateModified": "2026-01-01"
}
```

### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer text" }
    }
  ]
}
```

### 3. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." }
  ]
}
```

---

## 📋 ADIM 5: Component Oluşturma

### İngilizce Component
**Konum:** `components/calculators/NewCalculator.tsx`

### Türkçe Component
**Konum:** `components/calculators/tr/TurkeyNewCalculator.tsx`

Eğer Türkiye'ye özel hesaplama gerekiyorsa ayrı component oluşturun.

---

## 📋 ADIM 6: Veri Dosyası (Gerekirse)

Güncel veriler için:

**ABD:** `lib/data/usa-2026-data.ts`
**Türkiye:** `lib/data/turkey-2026-data.ts`

```typescript
// Örnek yapı
export const DATA_VERSION = {
  version: "2026.1",
  lastUpdated: "2026-01-15",
  source: "Official Source Name",
};

export const RATES_2026 = {
  // ...
};
```

---

## 📋 ADIM 7: Build & Test

```bash
# Build kontrolü
npm run build

# Lint kontrolü
npm run lint

# Lokal test
npm run dev
```

**Test edilmesi gerekenler:**
- [ ] Sayfa 404 vermiyor
- [ ] LanguageSwitcher doğru URL'ye yönlendiriyor
- [ ] LanguageBanner görünüyor (Türkçe tarayıcıda)
- [ ] Calculator düzgün çalışıyor
- [ ] Schema Markup geçerli (schema.org validator)
- [ ] Mobile responsive

---

## 📋 ADIM 8: IndexNow Bildirimi (Opsiyonel)

Yeni sayfaları hızlı indexlemek için:

```bash
# curl ile
curl -X POST https://calculator360pro.com/api/indexnow \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_SECRET_KEY" \
  -d '{"urls": ["/calculators/finance/new-calculator", "/tr/hesap-makineleri/finans/yeni-hesap-makinesi"]}'
```

**Not:** Bu Bing/Yandex için çalışır. Google için Search Console kullanın.

---

## ✅ FINAL CHECKLIST

Yayınlamadan önce tüm kutucukları işaretleyin:

### URL & Routing
- [ ] URL mapping eklendi (`lib/seo/url-mappings.ts`)
- [ ] İngilizce sayfa oluşturuldu
- [ ] Türkçe sayfa oluşturuldu
- [ ] Her iki sayfa test edildi

### SEO Metadata
- [ ] Title < 60 karakter
- [ ] Description 150-160 karakter
- [ ] Keywords minimum 8 adet
- [ ] Canonical URL doğru
- [ ] hreflang iki yönlü (EN↔TR)
- [ ] x-default eklendi

### Schema Markup
- [ ] WebApplication schema
- [ ] FAQPage schema (min 5 FAQ)
- [ ] BreadcrumbList schema

### İçerik
- [ ] H1 tek ve keyword içeriyor
- [ ] SEO içerik min 1500 kelime (TR için 2000+)
- [ ] 2026 güncel veriler
- [ ] Veri kaynağı belirtilmiş
- [ ] Güncelleme tarihi var
- [ ] İç linkler (min 3)
- [ ] İlgili calculatorlar (min 3)

### Teknik
- [ ] Build başarılı
- [ ] Lint hatasız
- [ ] Mobile test OK
- [ ] Schema validator OK

---

## 🔗 İlgili Dokümanlar

- [İçerik Oluşturma Standartları](./CONTENT_CREATION_STANDARDS.md)
- [SEO Audit Checklist](./SEO_AUDIT_CHECKLIST.md)
- [Türkçe İçerik Stratejisi](./TURKISH_CONTENT_STRATEGY.md)
- [Yüksek Trafikli İçerik Planı](./HIGH_TRAFFIC_CONTENT_ROADMAP.md)

---

## Revizyon Geçmişi

| Tarih | Versiyon | Değişiklik |
|-------|----------|------------|
| Ocak 2026 | 3.0 | URL mappings, IndexNow, final checklist |
| Aralık 2025 | 2.0 | Türkçe içerik kuralları |
| Kasım 2025 | 1.0 | İlk versiyon |
