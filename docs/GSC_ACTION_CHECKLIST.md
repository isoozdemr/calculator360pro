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

## Sorun Giderme

### Sayfalar Indexlenmiyor
1. `robots.txt` kontrol et: https://calculator360pro.com/robots.txt
2. Meta robots tag kontrol et (index: true olmalı)
3. Sitemap'te sayfa var mı kontrol et
4. Manuel olarak indexing request yap
5. 48-72 saat bekle

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
