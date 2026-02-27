# Tool ve Blog Sayfası Kuralları (Google & AdSense Uyumu)

**Amaç:** Yeni tool ve blog sayfalarında Google SEO ile AdSense politikalarına katı uyum. Bu kriterlere uymayan sayfa **tamamlanmamış** kabul edilir; PR/merge öncesi kontrol zorunludur.

---

## 1. Google / AdSense Kuralları

- **İçerik:** Orijinal, ince veya duplicate içerik yok. Kullanıcı odaklı; reklam odaklı değil.
- **Reklam sayısı:** Masaüstü sayfa başına en fazla 3, mobilde en fazla 2 reklam.
- **Yerleşim:** Reklamlar hesaplama alanının **içinde** olmamalı. "Advertisement" etiketi kullanılmalı; reklam ile içerik net ayrılmalı.
- **UX:** Reklamlar hesaplamayı engellememeli; pop-up veya interstitial yok; lazy load ile hızlı yükleme.
- **Referans:** `docs/strategy/07-adsense-monetization.md`

---

## 2. SEO Zorunlulukları

| Öğe | Kural |
|-----|--------|
| **Title** | 50–60 karakter; **primary keyword başta**; benzersiz. |
| **Meta description** | 150–160 karakter; primary keyword; aksiyon odaklı. Kısa açıklama CTR’yi düşürür; bu aralık zorunludur. |
| **Keywords** | En az 6–8 (primary, secondary, long-tail, LSI); yüksek hacim araştırılmış. |
| **İçerik uzunluğu** | Tool ve kategori sayfaları: **minimum 2000 kelime**. Blog: proje standardı (örn. 1500+). |
| **FAQ** | 3–5 madde; schema ile birebir uyumlu. |
| **Canonical & hreflang** | Mutlak canonical URL; TR sayfası varsa alternates (en, tr, x-default). |
| **Open Graph** | title, description, locale (en_US / tr_TR), type: website. |

**Referans:** `docs/strategy/05-google-seo-master-plan.md`

**GSC / CTR:** GSC’de görünen sorgular için title veya description’da o sorguya yakın ifadeler kullanılmalı. Eski yıl aramaları (örn. 2022 vergi) için keywords veya içerikte kısa atıf eklenebilir.

---

## 3. Schema (Rich Results)

Tool sayfalarında **minimum set:**

- **WebApplication / SoftwareApplication:** name, description, url, applicationCategory, offers (price 0), operatingSystem. Finance: `about: FinancialProduct`. Health: ayrıca MedicalWebPage.
- **FAQPage:** 3–5 soru-cevap; sayfadaki metinle aynı.
- **HowTo:** Adım adım kullanım; name, description, steps (name + text), url.
- **BreadcrumbList:** Ana sayfa → Kategori → Tool adı.

Yayına almadan önce **Google Rich Results Test** ile doğrulanmalı.

---

## 4. Sayfa Yapısı (Tool Sayfaları)

Her tool sayfasında bulunması gereken bölümler:

1. **Breadcrumb** (görsel + schema)
2. **H1** (primary keyword içeren, tek)
3. **Kısa açıklama** (H1 altında 1–2 cümle)
4. **Reklam:** Above-the-fold (en fazla 1), Below-content (en fazla 1)
5. **Hesap aracı** (çalışır, doğru formül)
6. **Disclaimer** (finance/health için): `CalculatorDisclaimer` (locale: en/tr)
7. **Engagement:** StarRating, CalculationHistory (EN); TR’de benzeri tercih edilir
8. **Uzun içerik:** Min 2000 kelime; H2/H3; formül; örnekler; ipuçları; internal link
9. **FAQ:** 3–5 madde (schema ile aynı metin)
10. **İlgili hesaplar:** En az 2–3, link + kısa açıklama
11. **CTA:** Diğer araçlara veya rehberlere yönlendirme

---

## 5. Tamamlanmış Sayfa Kriteri

Aşağıdakilerin **hepsi** karşılanmadan sayfa tamamlanmış sayılmaz:

- [ ] Meta: Title 50–60, description 150–160, keywords, canonical, hreflang, Open Graph
- [ ] Schema: WebApplication/SoftwareApplication, FAQPage, HowTo, BreadcrumbList (finance/health ek kuralları dahil)
- [ ] İçerik: Minimum 2000 kelime (tool/kategori) veya blog standardı
- [ ] FAQ: 3–5 madde, schema ile uyumlu
- [ ] İlgili hesaplar / internal link
- [ ] Disclaimer (finans/sağlık tool’larında)
- [ ] AdSense: Reklam sayısı (3/2), yerleşim, hesaplama alanı dışında
- [ ] Schema Rich Results Test ile doğrulandı

---

## 6. Referans Dosyalar

- AdSense: `docs/strategy/07-adsense-monetization.md`
- SEO: `docs/strategy/05-google-seo-master-plan.md`
- Tool checklist: `docs/CHECKLIST_NEW_CALCULATOR.md`
- Blog checklist: `docs/CHECKLIST_NEW_BLOG.md`
