# Google Search Console - Hemen Yapılması Gerekenler

**Tarih:** Ocak 2026  
**Öncelik:** KRİTİK - Trafik için ilk adım

## Hemen Yapılması Gereken Aksiyonlar

### 1. Google Search Console'a Giriş Yap
- URL: https://search.google.com/search-console
- Site: https://calculator360pro.com

### 2. Verification Kontrolü
Eğer site henüz verify edilmediyse:

1. "Settings" > "Ownership verification" bölümüne git
2. HTML tag verification seç
3. Verilen kodu kopyala (örnek: `abc123xyz`)
4. `.env.local` dosyasına ekle:
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz
```
5. Deploy et ve "Verify" butonuna tıkla

### 3. Sitemap Submit Et (KRİTİK)
1. Sol menüden "Sitemaps" seç
2. Sitemap URL gir: `sitemap.xml`
3. "Submit" butonuna tıkla
4. Status "Success" olana kadar bekle (24-48 saat)

### 4. Coverage Raporunu Kontrol Et
1. Sol menüden "Coverage" seç
2. Şu metrikleri kontrol et:
   - **Valid pages**: Tüm calculator'lar indexlenmiş mi?
   - **Excluded pages**: Neden exclude edilmiş?
   - **Errors**: Hata varsa hemen düzelt
   - **Warnings**: İncele ve gerekirse düzelt

### 5. Manual Actions Kontrolü (ÖNEMLİ)
1. Sol menüden "Manual actions" seç
2. "No issues detected" yazmalı
3. Eğer issue varsa HEMEN düzelt

### 6. Core Web Vitals Kontrolü
1. Sol menüden "Core Web Vitals" seç
2. Mobile ve Desktop için kontrol et:
   - **LCP**: < 2.5s olmalı
   - **FID/INP**: < 100ms olmalı  
   - **CLS**: < 0.1 olmalı

### 7. URL Inspection ile Test Et
En önemli sayfaları test et:
1. Ana sayfa: `https://calculator360pro.com`
2. Mortgage Calculator: `https://calculator360pro.com/calculators/finance/mortgage-calculator`
3. BMI Calculator: `https://calculator360pro.com/calculators/health/bmi-calculator`
4. Percentage Calculator: `https://calculator360pro.com/calculators/math/percentage-calculator`

Her biri için:
- "URL Inspection" aracına URL'yi gir
- "Request Indexing" butonuna tıkla
- Rich results'ı kontrol et

## Haftalık Kontrol Listesi

- [ ] Coverage raporunu kontrol et
- [ ] Yeni eklenen sayfalar için indexing request yap
- [ ] Performance metriklerini incele (clicks, impressions, CTR, position)
- [ ] Top queries listesini analiz et
- [ ] Mobile usability issues kontrol et

## Aylık Kontrol Listesi

- [ ] Backlink growth'u kontrol et (Links raporu)
- [ ] CTR düşük olan sayfaların meta description'larını güncelle
- [ ] Position düşük olan sayfaların içeriğini güçlendir
- [ ] Core Web Vitals trendlerini incele

## "Doğru standart etikete sahip alternatif sayfa" (49 sayfa)

Bu durum **hata değildir**. Google, hreflang/canonical sayesinde bu URL'leri "doğru alternatif" olarak tanıyor ve aynı sorgu için çift içerik göstermemek amacıyla, seçilen dil/bölgeye göre **tek bir sürümü** (EN veya TR) sonuçlarda gösteriyor. Örneğin:

- Türkçe aramalarda TR sayfaları (örn. `/tr/rehberler`) gösterilir; EN sürümü bu listede "alternatif" görünebilir.
- İngilizce aramalarda EN sayfaları gösterilir; TR sürümü "alternatif" görünebilir.

**Yapılacak:** Ek aksiyon gerekmez. Canonical ve hreflang ([MetaTags.tsx](components/SEO/MetaTags.tsx), TR sayfa metadata, [sitemap-to-xml.ts](lib/sitemap-to-xml.ts)) tutarlı olduğu sürece bu sayı normaldir. GSC "Uluslararası Hedefleme" raporunda tutarsızlık görürseniz canonical/hreflang değerlerini kontrol edin.

## 404 ve Yönlendirmeli Sayfalar (GSC Plan)

### 404 – Bulunamadı (1 URL)
1. GSC → **Sayfa indeksleme** → **Bulunamadı (404)** listesinden 404 veren URL’yi kopyala.
2. Bu URL `lib/sitemap-entries.ts` veya `lib/indexing/get-all-urls.ts` içinde geçiyorsa kaldır; sitemap’te olmamalı.
3. İsteniyorsa yönlendirme ekle: `.env.local` içinde `GSC_REDIRECT_404_SOURCE` ve `GSC_REDIRECT_404_DEST` tanımla (örnek: `.env.example`).

### Yönlendirmeli sayfa (3 URL)
1. GSC → **Sayfa indeksleme** → **Yönlendirmeli sayfa** listesinden 3 kaynak ve hedef URL’yi al.
2. `.env.local` içinde `GSC_REDIRECT_1_SOURCE`/`GSC_REDIRECT_1_DEST`, `GSC_REDIRECT_2_*`, `GSC_REDIRECT_3_*` olarak gir (bkz. `.env.example`).
3. Sitemap’te yalnızca hedef (canonical) URL’lerin yer alması gerekir; kaynak URL’ler `next.config.ts` redirect’leri ile hedefe yönlendirilir.

### Canonical ve hreflang doğrulama
- **Sayfa meta:** `components/SEO/MetaTags.tsx` (EN calculator/blog) ve TR sayfa `metadata` / `generateMetadata`: her sayfada `alternates.canonical` ve `alternates.languages` (en, tr, x-default) tutarlı.
- **Sitemap:** `lib/sitemap-to-xml.ts` sitemap XML’inde her URL için `xhtml:link` ile hreflang (en, tr, x-default) üretiyor; `lib/sitemap-entries.ts` alternates ile besliyor.
- GSC **Uluslararası Hedefleme** raporu ile karşılaştır; tutarsızlık varsa ilgili sayfa metadata veya sitemap alternates güncellenecek.

### Tarandı – dizine eklenmemiş (6 URL)
1. GSC → **Sayfa indeksleme** → **Tarandı – şu anda dizine eklenmiş değil** (ve gerekiyorsa **Keşfedildi – dizine eklenmemiş**) listesinden URL’leri al.
2. Her URL için: içerik 2000+ kelime ve benzersiz mi? Canonical doğru mu? (FAQPage yinelenmesi giderildi; sayfada yalnızca JSON-LD FAQPage kaldı.)
3. Gerekirse: içerik derinleştir (H2/H3, örnek, “nasıl yapılır”), ilgili blog/rehberden o sayfaya internal link ekle (“Hemen hesapla” / “Şu aracı kullan” CTA).

## Sorun Giderme

### Sayfalar Indexlenmiyor
1. `robots.txt` kontrol et: https://calculator360pro.com/robots.txt
2. Meta robots tag kontrol et (index: true olmalı)
3. Sitemap'te sayfa var mı kontrol et
4. Manuel olarak indexing request yap
5. 48-72 saat bekle

### GSC 5 sorgu + snippet (title 50–60, meta 150–160)
Hedef sorgular: **kalori hesap makinesi**, **calculating your bmi**, **student loans monthly payment calculator**, **percentage made easy**, **2022 gelir vergisi hesaplama**. İlgili sayfalarda title 50–60 karakter, meta description 150–160 karakter; bu ifadelere yakın geçiş title/description ve (uygunsa) FAQ’te kullanıldı. Eksik kalan sayfa varsa tamamlanacak.

### Meta 150–160 ve rakip/CTR revizyonu
- **Tüm sayfalarda** meta description 150–160 karakter; kısa açıklama CTR'yi düşürür (kural: `docs/tool-and-blog-page-rules.md`).
- Yeni sayfa eklemeden önce mevcut TR/EN sayfa meta denetimi: title 50–60, description 150–160, keywords 6–8+.
- Rakip odaklı iyileştirme: GSC "Sorgular" ve rakip SERP'e göre title/description'da tıklanmayı artıran ifadeler ("Ücretsiz", "2026", "Anında", "Hemen hesapla") eklenebilir; keyword stuffing yapılmaz.
- Image sitemap: XML'e giren tüm metinler `escapeXml` ile escape edilmeli (`&` → `&amp;` vb.); aksi halde "xmlParseEntityRef: no name" hatası oluşur.

### CTR Düşük (< %2)
1. Title tag'i optimize et (primary keyword başta)
2. Meta description'ı güncelle (call-to-action ekle)
3. Featured snippet formatına uy

### Position Düşük (> 20)
1. İçerik kalitesini artır (2000+ kelime)
2. Internal linking güçlendir
3. Backlink kazan
4. Schema markup kontrol et

---

**Not:** Bu checklist'i tamamladıktan sonra GSC_ACTION_CHECKLIST.md dosyasındaki işaretleri güncelleyin.
