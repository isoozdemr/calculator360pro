# İçerik Oluşturma Standartları ve SEO Rehberi

**Son Güncelleme:** Ocak 2026  
**Versiyon:** 2.0

Bu doküman, Calculator360Pro'ya eklenecek tüm yeni içerikler (calculator ve blog sayfaları) için standartları ve SEO kurallarını belirler.

---

## 1. Çoklu Dil Stratejisi

### 1.1 Her Yeni Sayfa İçin Zorunluluk

Yeni eklenen her calculator ve blog sayfası için **hem İngilizce hem Türkçe** versiyonlar oluşturulmalıdır.

```
/calculators/finance/new-calculator          # İngilizce
/tr/hesap-makineleri/finans/yeni-hesap-makinesi  # Türkçe
```

### 1.2 İçerik Yaklaşımları

#### A) Ülkeye Özel İçerik (Country-Specific)
Ülkelere göre farklı düzenlemeler gerektiren konular:

| Konu | İngilizce (ABD) | Türkçe (TR) |
|------|-----------------|-------------|
| Vergi Dilimleri | 10%, 12%, 22%, 24%, 32%, 35%, 37% | 15%, 20%, 27%, 35%, 40% |
| Asgari Ücret | $7.25/saat federal | 26.005,50 TL brüt |
| Emeklilik | 401(k), Social Security | SGK, BES, EYT |
| Kredi Vergileri | Yok | KKDF %15, BSMV %5 |
| Sağlık Sigortası | Özel sigorta odaklı | SGK zorunlu |
| Not Sistemi | A-F (4.0 GPA) | AA-FF (YÖK 4.0) |

#### B) Hibrit İçerik (Universal + Local)
Evrensel formüllerle birlikte yerel örnekler:

- **BMI Hesaplama:** Formül aynı, örnekler yerel birimlerle
- **Yüzde Hesaplama:** Evrensel, örnekler para birimiyle
- **Kalori Hesaplama:** Formül aynı, yiyecek örnekleri yerel
- **Yaş Hesaplama:** Evrensel
- **Tarih Hesaplama:** Evrensel (resmi tatiller yerel)

#### C) Tam Yerel İçerik (Full Localization)
İçeriğin tamamen yeniden yazılması gereken konular:

- Vergi hesaplama (her ülkenin kendi sistemi)
- Maaş hesaplama (kesinti oranları farklı)
- Emeklilik hesaplama (sistemler tamamen farklı)
- Kredi hesaplama (vergiler farklı)

---

## 2. Meta Tag Standartları

### 2.1 Title Tag Kuralları

**Format:** `[Ana Anahtar Kelime] [Yıl] | [Açıklayıcı] - Calculator360Pro`

**İngilizce Örnekler:**
```
Tax Calculator 2026 | Federal Income Tax Estimator - Calculator360Pro
Mortgage Calculator | Home Loan Payment Calculator - Calculator360Pro
BMI Calculator | Body Mass Index for Adults - Calculator360Pro
```

**Türkçe Örnekler:**
```
Vergi Hesaplama 2026 | Gelir Vergisi Hesap Makinesi - Calculator360Pro
Konut Kredisi Hesaplama | Mortgage Hesap Makinesi - Calculator360Pro
BMI Hesaplama | Vücut Kitle İndeksi Hesap Makinesi - Calculator360Pro
```

**Kurallar:**
- Maksimum 60 karakter
- Ana anahtar kelime başta
- Yıl güncel olmalı (2026)
- Marka adı sonda

### 2.2 Meta Description Kuralları

**Format:** `[Ne yapıyor] [Özellikler/Faydalar] [CTA]`

**İngilizce Örnek:**
```
Calculate your 2026 federal income tax with our free tax calculator. 
Includes all tax brackets, deductions, and effective tax rate. 
Get instant results!
```

**Türkçe Örnek:**
```
2026 güncel vergi dilimleri ile gelir verginizi hesaplayın. 
Kademeli vergi sistemi, efektif oran ve detaylı döküm. 
Ücretsiz ve anında sonuç!
```

**Kurallar:**
- 150-160 karakter
- Yılı içermeli
- Eylem çağrısı (CTA) içermeli
- Benzersiz olmalı (her sayfa için farklı)

### 2.3 Keywords Seçimi

**İngilizce Anahtar Kelime Stratejisi:**
```typescript
keywords: [
  // Primary (ana)
  "tax calculator 2026",
  "income tax calculator",
  
  // Secondary (ikincil)
  "federal tax calculator",
  "tax bracket calculator",
  
  // Long-tail (uzun kuyruk)
  "how to calculate income tax",
  "free tax calculator online",
  
  // Intent-based (niyet bazlı)
  "estimate my tax refund",
  "calculate taxes owed",
]
```

**Türkçe Anahtar Kelime Stratejisi:**
```typescript
keywords: [
  // Primary (ana)
  "vergi hesaplama 2026",
  "gelir vergisi hesaplama",
  
  // Secondary (ikincil)
  "vergi dilimi hesaplama",
  "vergi matrahı hesaplama",
  
  // Long-tail (uzun kuyruk)
  "gelir vergisi nasıl hesaplanır",
  "ücretsiz vergi hesap makinesi",
  
  // Intent-based (niyet bazlı)
  "ne kadar vergi öderim",
  "vergi iadesi hesaplama",
]
```

---

## 3. İçerik Yapısı Standartları

### 3.1 Calculator Sayfası Yapısı

```
1. Breadcrumb (sayfa yolu)
2. H1 Başlık (tek, ana anahtar kelime içermeli)
3. Kısa açıklama (1-2 cümle)
4. Güncelleme bilgisi (tarih + kaynak)
5. Hesap Makinesi Arayüzü
6. SEO İçerik Bölümü
   - H2: [Konu] Nedir?
   - H2: Nasıl Hesaplanır?
   - H2: [Yıl] Güncel Oranlar/Değerler
   - H2: Sıkça Sorulan Sorular
   - H2: İpuçları ve Öneriler
7. İlgili Hesap Makineleri
```

### 3.2 SEO İçerik Gereksinimleri

| Özellik | Minimum | Önerilen |
|---------|---------|----------|
| Kelime sayısı | 1500 | 2000+ |
| H2 başlık sayısı | 4 | 6+ |
| H3 başlık sayısı | 3 | 8+ |
| Dahili linkler | 3 | 5+ |
| Liste öğeleri | 2 | 5+ |
| Görsel/tablo | 1 | 3+ |
| FAQ | 3 | 5+ |

### 3.3 Blog Yazısı Yapısı

```
1. Breadcrumb
2. Kategori etiketi
3. H1 Başlık (60 karakter altı)
4. Meta bilgiler (yazar, tarih, okuma süresi)
5. Giriş paragrafı (hook)
6. İçerik bölümleri
   - H2 ve H3 başlıklar
   - Listeler ve tablolar
   - Dahili linkler (calculator sayfalarına)
7. Sonuç/Özet
8. İlgili yazılar
9. Etiketler
```

---

## 4. Güncel Veri Kullanımı (2026)

### 4.1 Zorunlu Güncel Veriler

Her finansal calculator'da şunlar güncel olmalı:

**ABD (İngilizce):**
- Federal vergi dilimleri
- Standard deduction ($14,600 single, $29,200 married)
- 401(k) katkı limitleri ($23,000 / $30,500 catch-up)
- Social Security wage base
- Medicare surtax thresholds

**Türkiye (Türkçe):**
- Gelir vergisi dilimleri
- Asgari ücret (brüt/net)
- SGK prim oranları
- AGI oranları
- KKDF/BSMV oranları
- Emeklilik yaş tablosu

### 4.2 Veri Güncelleme Takvimi

| Dönem | Güncelleme |
|-------|------------|
| Ocak | Yeni yıl vergi dilimleri, asgari ücret |
| Nisan | ABD vergi sezonu güncellemeleri |
| Temmuz | 6 aylık faiz oranları kontrolü |
| Ekim | Yıl sonu hazırlıkları |
| Aralık | Gelecek yıl projeksiyonları |

### 4.3 Veri Dosyası Yapısı

**Türkiye verileri:** `lib/data/turkey-2026-data.ts`
**ABD verileri:** `lib/data/usa-2026-data.ts` (oluşturulmalı)

---

## 5. URL Mapping ve hreflang Sistemi

### 5.1 Merkezi URL Mapping (ZORUNLU)

**Her yeni sayfa için önce `lib/seo/url-mappings.ts` dosyasını güncelleyin:**

```typescript
// lib/seo/url-mappings.ts
export const URL_MAPPINGS: Record<string, string> = {
  // ... mevcut mappingler ...
  
  // YENİ SAYFA:
  "/calculators/finance/new-calculator": "/tr/hesap-makineleri/finans/yeni-hesap-makinesi",
};
```

Bu güncelleme şunları otomatik yapar:
- ✅ Sitemap'e hreflang eklenir
- ✅ LanguageSwitcher doğru çalışır
- ✅ LanguageBanner doğru URL'ye yönlendirir

### 5.2 Her Sayfa İçin hreflang Zorunlu

```typescript
alternates: {
  canonical: "https://calculator360pro.com/calculators/finance/tax-calculator",
  languages: {
    "en": "https://calculator360pro.com/calculators/finance/tax-calculator",
    "tr": "https://calculator360pro.com/tr/hesap-makineleri/finans/vergi-hesap-makinesi",
    "x-default": "https://calculator360pro.com/calculators/finance/tax-calculator",
  },
},
```

### 5.3 URL Yapısı Eşleştirme

| İngilizce | Türkçe |
|-----------|--------|
| /calculators | /tr/hesap-makineleri |
| /finance | /finans |
| /health | /saglik |
| /education | /egitim |
| /math | /matematik |
| /date-time | /tarih-zaman |
| /blog | /tr/blog |

### 5.4 Yardımcı Fonksiyonlar

```typescript
import { getAlternateUrl, getHreflangLinks } from "@/lib/seo/url-mappings";

// Sayfa metadata'sında kullanım:
const hreflang = getHreflangLinks(enPath, trPath);
```

---

## 6. Schema Markup Standartları

### 6.1 Calculator Sayfaları İçin

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "...",
  "description": "...",
  "url": "...",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "inLanguage": "tr",
  "dateModified": "2026-01-01",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "TRY"
  }
}
```

### 6.2 FAQPage Schema

Her calculator için minimum 3 FAQ:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### 6.3 HowTo Schema

"Nasıl Kullanılır" bölümü için:

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "...",
  "step": [...]
}
```

---

## 7. Görsel ve Medya Standartları

### 7.1 OG Image

- Her sayfa için benzersiz OG image
- Boyut: 1200x630 px
- Format: PNG veya WebP
- Türkçe sayfalar için Türkçe metin

### 7.2 Tablolar ve Grafikler

- Vergi dilimleri tablosu
- Ödeme planı tablosu
- Karşılaştırma grafikleri
- Alt text zorunlu

---

## 8. İç Linkleme Stratejisi

### 8.1 Her Sayfada Minimum

- 2 ilgili calculator linki
- 1 ilgili blog yazısı linki
- 1 kategori sayfası linki

### 8.2 Anchor Text Kuralları

**İyi:**
```html
<a href="/calculators/finance/mortgage-calculator">konut kredisi hesaplama</a>
```

**Kötü:**
```html
<a href="/calculators/finance/mortgage-calculator">buraya tıklayın</a>
```

---

## 9. Performans Gereksinimleri

### 9.1 Core Web Vitals Hedefleri

| Metrik | Hedef |
|--------|-------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

### 9.2 Sayfa Boyutu

- JavaScript: < 200KB (gzipped)
- CSS: < 50KB
- Toplam sayfa: < 500KB

---

## 10. Kalite Kontrol Checklist

### Yeni Calculator Eklerken:

- [ ] **URL Mapping** - `lib/seo/url-mappings.ts` güncellendi
- [ ] İngilizce versiyon oluşturuldu
- [ ] Türkçe versiyon oluşturuldu
- [ ] Meta title 60 karakter altı
- [ ] Meta description 150-160 karakter
- [ ] hreflang alternates eklendi (ÇİFT YÖNLÜ)
- [ ] x-default eklendi
- [ ] Schema markup eklendi (WebApplication, FAQ, HowTo)
- [ ] SEO içerik minimum 1500 kelime (TR için 2000+)
- [ ] Güncel 2026 verileri kullanıldı
- [ ] Veri kaynakları belirtildi
- [ ] Güncelleme tarihi eklendi
- [ ] İlgili calculatorlar linklendi (min 3)
- [ ] Build test edildi
- [ ] IndexNow ile Bing/Yandex'e bildirildi (opsiyonel)

### Yeni Blog Yazısı Eklerken:

- [ ] İngilizce versiyon oluşturuldu
- [ ] Türkçe versiyon oluşturuldu
- [ ] Meta title optimize edildi
- [ ] Meta description unique
- [ ] hreflang alternates eklendi
- [ ] Article schema eklendi
- [ ] Breadcrumb schema eklendi
- [ ] Calculator sayfalarına link verildi
- [ ] Etiketler eklendi
- [ ] Sitemap güncellendi

---

## 11. IndexNow ile Hızlı İndexleme

### 11.1 IndexNow Nedir?

IndexNow, arama motorlarına (Bing, Yandex) yeni içerik bildirimi yapan bir protokoldür. Google desteklemez ama Bing trafiği için önemlidir.

### 11.2 Kullanım

Yeni sayfa ekledikten sonra:

```bash
# API endpoint'e POST isteği
curl -X POST https://calculator360pro.com/api/indexnow \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_SECRET_KEY" \
  -d '{
    "urls": [
      "/calculators/finance/new-calculator",
      "/tr/hesap-makineleri/finans/yeni-hesap-makinesi"
    ]
  }'
```

### 11.3 Otomatik Bildirim

Build pipeline'a entegre edilebilir:
- Deploy sonrası otomatik IndexNow bildirimi
- Sitemap diff ile yeni URL'leri tespit

### 11.4 Google İçin

Google IndexNow desteklemez. Google için:
1. Google Search Console'da URL Inspection kullanın
2. Sitemap'i manuel olarak yeniden gönderin
3. Fetch as Google kullanın

---

## 12. Dosya İsimlendirme Kuralları

### İngilizce:
```
app/calculators/[category]/[slug]/page.tsx
components/calculators/NewCalculator.tsx
lib/data/usa-2026-data.ts
```

### Türkçe:
```
app/tr/hesap-makineleri/[kategori]/[slug]/page.tsx
components/calculators/tr/TurkeyNewCalculator.tsx
lib/data/turkey-2026-data.ts
```

---

## 13. Örnek Şablon: Yeni Calculator

### İngilizce Sayfa Şablonu

```typescript
// app/calculators/finance/new-calculator/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Calculator 2026 | Free Online Tool - Calculator360Pro",
  description: "Calculate [what] with our free [name] calculator. 2026 updated rates, instant results, and detailed breakdown.",
  keywords: ["new calculator", "calculate [x]", "2026 [x] calculator"],
  alternates: {
    canonical: "https://calculator360pro.com/calculators/finance/new-calculator",
    languages: {
      "en": "https://calculator360pro.com/calculators/finance/new-calculator",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/finans/yeni-hesap-makinesi",
    },
  },
};
```

### Türkçe Sayfa Şablonu

```typescript
// app/tr/hesap-makineleri/finans/yeni-hesap-makinesi/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeni Hesaplama 2026 | Ücretsiz Hesap Makinesi - Calculator360Pro",
  description: "[Ne] hesaplayın. 2026 güncel oranları, anında sonuç ve detaylı döküm. Ücretsiz!",
  keywords: ["yeni hesaplama", "[x] hesaplama", "2026 [x] hesap makinesi"],
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/finans/yeni-hesap-makinesi",
    languages: {
      "en": "https://calculator360pro.com/calculators/finance/new-calculator",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/finans/yeni-hesap-makinesi",
    },
  },
};
```

---

## Revizyon Geçmişi

| Tarih | Versiyon | Değişiklik |
|-------|----------|------------|
| Ocak 2026 | 3.0 | Merkezi URL mapping sistemi, IndexNow entegrasyonu, geliştirilmiş checklist |
| Ocak 2026 | 2.0 | Türkçe içerik standartları, hibrit yaklaşım, 2026 güncel veriler |
| Aralık 2025 | 1.0 | İlk versiyon |
