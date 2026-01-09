# Pre-Launch Checklist - Calculator360Pro

**Tarih:** 2024  
**Durum:** Canlıya çıkmadan önce kontrol listesi

## 🔴 KRİTİK EKSİKLER (Mutlaka yapılmalı)

### 1. Open Graph & Twitter Card Images
- [x] **Open Graph image oluştur** (`public/og-image.png`) ✅
- [x] **Twitter card image oluştur** (OG image kullanılıyor) ✅
- [ ] Calculator sayfaları için dinamik OG images (opsiyonel ama önerilir)
- [x] Root layout'ta OG image meta tag'leri kontrol et ✅

**Durum:** ✅ Tamamlandı - OG image PNG formatında mevcut

### 2. Logo Dosyası
- [x] **Logo dosyası oluştur** (`public/logo.svg`) ✅
- [x] Organization schema'da logo URL'i doğru mu kontrol et ✅
- [x] Favicon mevcut ✅ (`app/favicon.ico` ve `app/icon.svg`)

**Durum:** ✅ Tamamlandı - Logo SVG formatında mevcut

### 3. Environment Variables
- [x] **`.env.example` dosyası oluştur** ✅
- [x] Tüm environment variable'ları dokümante et ✅
- [ ] Production için `.env` dosyası hazır mı kontrol et

**Durum:** ✅ Tamamlandı - `.env.example` dosyası mevcut

**Gerekli Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://calculator360pro.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_SLOT_ABOVE_FOLD=1234567890
NEXT_PUBLIC_ADSENSE_SLOT_BELOW_CONTENT=1234567891
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=1234567892
```

### 4. Google Search Console Verification
- [x] **Google Search Console verification meta tag ekle** ✅
- [x] `app/layout.tsx` içinde `verification.google` field'ı doldur ✅

**Durum:** ✅ Tamamlandı - Meta tag field eklendi, değer environment variable'dan gelecek

### 5. Organization Schema - Contact Point
- [x] **Organization schema'ya contactPoint ekle** ✅
- [x] Email adresi ekle (contact@calculator360pro.com) ✅
- [x] Contact type belirle (Customer Service) ✅

**Durum:** ✅ Tamamlandı - Contact point eklendi

## 🟡 ÖNEMLİ İYİLEŞTİRMELER (Yapılması önerilir)

### 6. Search Functionality
- [x] **Search sayfası oluştur** (`app/search/page.tsx`) ✅
- [x] WebSite schema'da SearchAction var ve sayfa mevcut ✅
- [ ] Navigation'a search input ekle (opsiyonel)

**Durum:** ✅ Tamamlandı - Search sayfası oluşturuldu

### 7. Open Graph Images - Calculator Sayfaları
- [ ] Her calculator için dinamik OG image oluştur (opsiyonel)
- [x] Veya genel bir OG image kullan ✅

**Durum:** ✅ Genel OG image kullanılıyor (dinamik opsiyonel)

### 8. Analytics & AdSense Setup
- [ ] Google Analytics ID doğru mu kontrol et
- [ ] AdSense client ID doğru mu kontrol et
- [ ] AdSense slot ID'leri doğru mu kontrol et
- [ ] Test modunda çalışıyor mu kontrol et

**Durum:** ⚠️ Kod var ama environment variable'lar kontrol edilmeli

### 9. Sitemap Kontrolü
- [x] Sitemap tüm sayfaları içeriyor mu kontrol et ✅
- [x] Category sayfaları sitemap'te var mı kontrol et ✅
- [x] Blog sayfaları sitemap'te var mı kontrol et ✅
- [x] Search sayfası sitemap'te var mı kontrol et ✅
- [x] Last modified tarihleri doğru mu kontrol et ✅

**Durum:** ✅ Sitemap mevcut ve güncel - Tüm sayfalar dahil, lastModified tarihleri doğru (blog post'lar için post.date kullanılıyor, diğerleri için new Date())

### 10. Robots.txt Kontrolü
- [x] Robots.txt doğru mu kontrol et ✅
- [x] Sitemap URL'i doğru mu kontrol et ✅
- [x] Disallow kuralları doğru mu kontrol et ✅

**Durum:** ✅ Robots.txt mevcut ve doğru - `/api/` ve `/admin/` disallow edilmiş, sitemap URL doğru

## 🟢 İYİ DURUMDA OLANLAR

### ✅ Schema Markup
- WebApplication schema ✅
- FAQPage schema ✅
- BreadcrumbList schema ✅
- Organization schema ✅ (contact point eksik)
- WebSite schema ✅ (SearchAction var ama sayfa yok)

### ✅ Meta Tags
- Root layout meta tags ✅
- Calculator sayfaları meta tags ✅
- Open Graph tags ✅ (images eksik)
- Twitter card tags ✅ (images eksik)
- Canonical URLs ✅

### ✅ İçerikler
- Tüm calculator'larda 2000+ karakter içerik var ✅
- FAQ'lar mevcut ✅
- About, Privacy, Terms sayfaları mevcut ✅

### ✅ Navigation & Links
- Navigation component ✅
- Footer component ✅
- Internal links çalışıyor ✅
- Breadcrumbs çalışıyor ✅

### ✅ Error Handling
- 404 sayfası mevcut ✅
- Not found handling ✅

### ✅ SEO Optimizations
- Canonical URLs ✅
- Meta descriptions ✅
- Keywords ✅
- Structured data ✅

## 📋 YAPILACAKLAR LİSTESİ (Öncelik Sırasına Göre)

### Öncelik 1 (Kritik - Canlıya çıkmadan önce)
1. [x] Logo dosyası oluştur ve ekle ✅
2. [x] Open Graph image oluştur ve ekle ✅
3. [x] Twitter card image oluştur ve ekle ✅ (OG image kullanılıyor)
4. [x] `.env.example` dosyası oluştur ✅
5. [x] Google Search Console verification ekle ✅ (Field eklendi, değer environment variable'dan gelecek)
6. [x] Organization schema'ya contactPoint ekle ✅

### Öncelik 2 (Önemli - İlk hafta içinde)
7. [x] Search sayfası oluştur veya SearchAction'ı kaldır ✅
8. [ ] Environment variables production'da doğru mu kontrol et
9. [ ] Analytics ve AdSense test et

### Öncelik 3 (İyileştirme - İlk ay içinde)
10. [ ] Calculator sayfaları için dinamik OG images (opsiyonel)
11. [ ] Navigation'a search input ekle (opsiyonel)
12. [x] Blog sayfalarını sitemap'e ekle (eğer blog varsa) ✅

## 🔍 TEST EDİLMESİ GEREKENLER

### Schema Validation
- [ ] Google Rich Results Test ile tüm calculator sayfalarını test et
- [ ] Schema.org Validator ile tüm schema türlerini test et
- [ ] Breadcrumb schema doğru mu kontrol et

### SEO Validation
- [ ] Google Search Console'a site ekle
- [ ] Sitemap'i Google Search Console'a gönder
- [ ] Meta tags doğru mu kontrol et
- [ ] Canonical URLs doğru mu kontrol et

### Functionality Tests
- [ ] Tüm calculator'lar çalışıyor mu test et
- [ ] Form validations çalışıyor mu test et
- [ ] Navigation linkleri çalışıyor mu test et
- [ ] 404 sayfası çalışıyor mu test et
- [x] Dark mode devre dışı bırakıldı (light mode only) ✅

### Performance Tests
- [ ] Lighthouse score kontrol et
- [ ] Core Web Vitals kontrol et
- [x] CLS sorunları var mı kontrol et ✅ (Düzeltildi)
- [ ] LCP optimizasyonu kontrol et
- [ ] INP optimizasyonu kontrol et
- [x] Mobil yatay scroll sorunu düzeltildi ✅ (overflow-x hidden eklendi)
- [x] Navigation dropdown responsive yapıldı ✅ (1-5 columns based on screen size)

## 📝 NOTLAR

- AdSense şu anda gizli (temporarily hidden) - canlıya çıkmadan önce açılacak
- Blog sayfaları mevcut ama içerik kontrolü yapılmalı
- Tüm calculator'lar 2000+ karakter içeriğe sahip ✅
- Form validation'lar çalışıyor ✅
- CLS sorunları düzeltildi ✅
- Dark mode devre dışı bırakıldı - site her zaman light mode'da görünecek ✅
- Mobil yatay scroll sorunu düzeltildi (html/body overflow-x hidden) ✅
- Navigation dropdown responsive yapıldı (mobil: 1 col, tablet: 2-3 col, desktop: 5 col) ✅

## 🚀 CANLIYA ÇIKMADAN ÖNCE SON KONTROL

- [ ] Tüm kritik eksikler tamamlandı mı?
- [ ] Environment variables production'da ayarlandı mı?
- [ ] Google Analytics çalışıyor mu?
- [ ] AdSense hazır mı? (şu anda gizli)
- [ ] Tüm sayfalar test edildi mi?
- [ ] Schema validation yapıldı mı?
- [ ] SEO optimizasyonları tamamlandı mı?
- [ ] Performance testleri yapıldı mı?

