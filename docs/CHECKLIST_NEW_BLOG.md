# Yeni Blog Yazısı Ekleme Kontrol Listesi

**Amaç:** Blog sayfalarında Google SEO ve AdSense uyumu. Tam kural seti: `docs/tool-and-blog-page-rules.md`.

## ⚠️ ZORUNLU GEREKSİNİMLER

### 1. Meta ve SEO
- [ ] **Title:** 50–60 karakter; primary keyword başta; unique
- [ ] **Meta description:** 150–160 karakter; primary keyword; aksiyon odaklı
- [ ] **Keywords:** Yüksek hacim araştırılmış; içerikte doğal kullanım
- [ ] **Canonical** ve **hreflang** (EN/TR çift sayfa varsa) tanımlı
- [ ] **Open Graph:** title, description, locale, type: article

### 2. Schema
- [ ] **Article** schema (generateArticleSchema) kullanıldı
- [ ] **BreadcrumbList** (blog için) kullanıldı
- [ ] **FAQPage** (varsa 3–5 FAQ) schema ile sayfa metni birebir uyumlu
- [ ] Google Rich Results Test ile doğrulandı

### 3. İçerik
- [ ] **Minimum kelime:** Proje standardı (örn. 1500+ kelime)
- [ ] İçerik orijinal; duplicate/ince içerik yok
- [ ] H2/H3 yapısı; internal link (ilgili hesaplar, ilgili blog yazıları)
- [ ] E-E-A-T sinyalleri; kullanıcı değeri öncelikli

### 4. AdSense Uyumu
- [ ] Reklam sayısı: masaüstü max 3, mobil max 2
- [ ] Reklam içerik alanında; "Advertisement" etiketi; reklam ile içerik ayrı
- [ ] İçerik kullanıcı odaklı (reklam odaklı değil)

### 5. Sayfa Tamamlandı
- [ ] Tüm meta ve schema maddeleri karşılandı
- [ ] Minimum kelime sayısı sağlandı
- [ ] Internal link (related calculators / related posts) eklendi
- [ ] AdSense kurallarına uyuldu
- [ ] `docs/tool-and-blog-page-rules.md` ile son kontrol yapıldı

## Referans

- Tam kurallar: `docs/tool-and-blog-page-rules.md`
- AdSense: `docs/strategy/07-adsense-monetization.md`
- SEO: `docs/strategy/05-google-seo-master-plan.md`
