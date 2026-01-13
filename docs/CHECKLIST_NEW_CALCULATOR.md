# Yeni Calculator Ekleme Kontrol Listesi

## ⚠️ ZORUNLU GEREKSİNİMLER

### 1. Calculator Definition (`lib/calculators/definitions.ts`)
- [ ] Calculator definition eklendi
- [ ] Category KEY (camelCase) kullanıldı (slug değil)
- [ ] Slug kebab-case formatında
- [ ] **Keywords Array:**
  - [ ] Primary keyword (exact match calculator name) eklendi
  - [ ] Secondary keywords (variations) eklendi (min 3-5)
  - [ ] Long-tail keywords eklendi (min 2-3)
  - [ ] Semantic keywords (LSI terms) eklendi (min 2-3)
  - [ ] Toplam minimum 6-8 keyword
  - [ ] Keywords high-volume (10K+ monthly search volume) araştırıldı
- [ ] **Meta Description:**
  - [ ] 150-160 karakter aralığında
  - [ ] Primary keyword içeriyor
  - [ ] Compelling ve action-oriented
  - [ ] Unique (diğer calculator'larla aynı değil)
- [ ] **FAQs:**
  - [ ] Minimum 3-5 FAQ eklendi
  - [ ] FAQ'lar question keywords içeriyor
  - [ ] FAQ'lar comprehensive ve helpful
- [ ] **Related Calculators:**
  - [ ] Minimum 2-3 related calculator eklendi
  - [ ] Related calculator'lar mantıklı ve relevant

### 2. Calculator Component (`components/calculators/[Name]Calculator.tsx`)
- [ ] Component oluşturuldu
- [ ] Component calculator'ın özel formülünü kullanıyor
- [ ] Formül güncel ve doğru (industry standard)
- [ ] Input validation doğru aralıklarda
- [ ] Component `CalculatorPage.tsx`'de register edildi

### 3. Content (`lib/calculators/content.ts`)
- [ ] **Minimum 2000+ kelime** unique content eklendi
- [ ] Content deep ve comprehensive
- [ ] Content 100% unique (plagiarism check yapıldı)
- [ ] Content high-volume keywords içeriyor
- [ ] Content semantic keywords içeriyor
- [ ] Content E-E-A-T signals gösteriyor
- [ ] Content AdSense compliant
- [ ] Content competitor'lardan daha derin

### 4. Schema Markup (Otomatik - Kontrol)
- [ ] WebApplication schema generate ediliyor (otomatik)
- [ ] FAQPage schema generate ediliyor (FAQs varsa, otomatik)
- [ ] BreadcrumbList schema generate ediliyor (otomatik)
- [ ] Schema Google Rich Results Test'te validate edildi
- [ ] Schema visible content ile eşleşiyor

### 5. Meta Tags (Kısmen Otomatik - İyileştirme Gerekli)
- [ ] **Title Tag:**
  - [ ] Primary keyword başta yer alıyor
  - [ ] 50-60 karakter aralığında
  - [ ] Unique ve compelling
  - [ ] ⚠️ ŞU AN: `${calculator.name} - Free Online Calculator` formatı kullanılıyor
  - [ ] ⚠️ İYİLEŞTİRME: Primary keyword'ü başa almak daha iyi olur
- [ ] **Meta Description:**
  - [ ] `calculator.metaDescription` kullanılıyor (otomatik)
  - [ ] 150-160 karakter kontrolü yapıldı
  - [ ] Primary keyword içeriyor
- [ ] **Keywords:**
  - [ ] `calculator.keywords.join(", ")` kullanılıyor (otomatik)
  - [ ] High-volume keywords araştırıldı
- [ ] **Open Graph Tags:**
  - [ ] Otomatik generate ediliyor
  - [ ] Title, description, image doğru

### 6. SEO Optimizasyonu
- [ ] Primary keyword title'da
- [ ] Primary keyword meta description'da
- [ ] Primary keyword content'te doğal olarak kullanıldı
- [ ] Secondary keywords content'te kullanıldı
- [ ] Long-tail keywords content'te kullanıldı
- [ ] Semantic keywords content'te kullanıldı
- [ ] H2, H3 başlıkları keyword-optimized
- [ ] Internal linking yapıldı (related calculators)

### 7. Content Quality
- [ ] Content 2000+ kelime
- [ ] Content unique (0% duplicate)
- [ ] Content deeper than competitors
- [ ] Content provides genuine value
- [ ] Content demonstrates expertise
- [ ] Content includes examples
- [ ] Content includes tips/best practices
- [ ] Content includes common mistakes

## ⚠️ TESPİT EDİLEN EKSİKLİKLER

### 1. Title Tag Optimizasyonu
**Mevcut Durum:**
```typescript
title: `${calculator.name} - Free Online Calculator`
```

**Sorun:**
- Primary keyword her zaman başta değil
- Bazı calculator'lar için çok uzun olabilir (60+ karakter)
- Generic format, SEO için optimize değil

**Öneri:**
- Primary keyword'ü başa almak
- 50-60 karakter kontrolü eklemek
- Calculator'a özel title formatı

### 2. Meta Description Kontrolü
**Mevcut Durum:**
- Meta description'lar var ama 150-160 karakter kontrolü yok
- Bazı meta description'lar çok kısa veya uzun olabilir

**Öneri:**
- Meta description validation eklemek
- Otomatik truncate/expand mekanizması

### 3. Keywords Research
**Mevcut Durum:**
- Keywords var ama high-volume keywords kontrolü yok
- Semantic keywords eksik olabilir

**Öneri:**
- Keywords research checklist eklemek
- Minimum keyword sayısı belirlemek

### 4. Content Length Validation
**Mevcut Durum:**
- Content var ama 2000+ kelime kontrolü yok

**Öneri:**
- Content length validation eklemek
- Otomatik uyarı sistemi

## ÖNERİLEN İYİLEŞTİRMELER

### 1. Title Tag Optimizasyonu
```typescript
// Önerilen format:
title: `${primaryKeyword} - Free Online Calculator | Calculator360Pro`
// veya
title: `Free ${calculator.name} - ${secondaryKeyword} | Calculator360Pro`
```

### 2. Meta Description Validation
```typescript
// Validation eklenmeli:
if (metaDescription.length < 150 || metaDescription.length > 160) {
  console.warn(`Meta description for ${calculator.id} is not optimal length`);
}
```

### 3. Keywords Research Checklist
- [ ] Primary keyword: 10K+ monthly search volume
- [ ] Secondary keywords: 5K+ monthly search volume
- [ ] Long-tail keywords: 1K+ monthly search volume
- [ ] Semantic keywords araştırıldı

### 4. Content Quality Checklist
- [ ] Word count: 2000+ (otomatik kontrol)
- [ ] Plagiarism check: 0% duplicate
- [ ] Readability score: Good
- [ ] Keyword density: Natural (2-3%)

