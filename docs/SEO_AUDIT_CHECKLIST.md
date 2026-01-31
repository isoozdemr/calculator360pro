# SEO Denetim Checklist ve Eksiklik Takibi

**Son Güncelleme:** Ocak 2026  
**Durum:** Aktif İzleme

---

## 1. Teknik SEO ✅

### 1.1 Sitemap
- [x] sitemap.xml mevcut ve çalışıyor
- [x] Tüm İngilizce sayfalar dahil
- [x] Tüm Türkçe sayfalar dahil
- [x] Blog yazıları dahil
- [x] Kategori sayfaları dahil
- [ ] XML sitemap sıkıştırması (büyüdükçe gerekli)

### 1.2 Robots.txt
- [x] robots.txt mevcut
- [x] Sitemap referansı var
- [x] API ve admin dizinleri engellenmiş
- [ ] Türkçe sayfalar için özel kurallar (gerekirse)

### 1.3 hreflang Implementasyonu
- [x] Root layout'ta hreflang tags
- [x] Her İngilizce sayfa için Türkçe alternate
- [x] Her Türkçe sayfa için İngilizce alternate
- [x] x-default tanımlı
- [ ] Tüm blog yazıları için hreflang (eklenecek)

### 1.4 Canonical URLs
- [x] Her sayfa için canonical URL
- [x] Türkçe sayfalar kendi canonical'larına sahip
- [ ] Duplicate content kontrolü

---

## 2. Schema Markup ✅

### 2.1 Global Schema
- [x] Organization schema
- [x] WebSite schema (SearchAction dahil)
- [x] Social media sameAs linkleri

### 2.2 Calculator Schema
- [x] WebApplication schema
- [x] FAQPage schema
- [x] BreadcrumbList schema
- [x] HowTo schema
- [x] Türkçe calculator schema fonksiyonları

### 2.3 Blog Schema
- [x] Article schema
- [x] BreadcrumbList schema
- [ ] Türkçe blog Article schema (eklenecek)

### 2.4 Eksik Schema'lar
- [ ] Product schema (premium feature için)
- [ ] Review/AggregateRating schema (kullanıcı puanlaması için)
- [ ] VideoObject schema (video içerik eklenirse)

---

## 3. On-Page SEO

### 3.1 Meta Tags
- [x] Title tag optimize (60 karakter)
- [x] Meta description optimize (155 karakter)
- [x] Keywords meta tag
- [x] OpenGraph tags
- [x] Twitter Card tags

### 3.2 Başlık Yapısı
- [x] Her sayfada tek H1
- [x] Hiyerarşik H2-H6 kullanımı
- [x] Anahtar kelime dahil başlıklar

### 3.3 İçerik Kalitesi
- [x] Minimum 1500 kelime SEO içerik
- [x] Güncel 2026 verileri
- [x] Kaynak referansları
- [x] FAQ bölümü

### 3.4 İç Linkleme
- [x] İlgili calculator linkleri
- [x] Kategori navigasyonu
- [x] Breadcrumb navigasyon
- [ ] Blog-Calculator çapraz linkleme güçlendirmesi

---

## 4. Çoklu Dil SEO

### 4.1 Türkçe Sayfalar
- [x] /tr ana sayfa
- [x] /tr/hesap-makineleri index
- [x] 6 adet Türkçe calculator sayfası
- [x] Kategori sayfaları (finans, egitim)
- [ ] Türkçe blog sayfaları (eklenecek)
- [ ] Türkçe about sayfası (eklenecek)

### 4.2 Dil Sinyalleri
- [x] lang="tr" HTML attribute
- [x] inLanguage schema property
- [x] Türkçe meta descriptions
- [x] Türkçe anahtar kelimeler

### 4.3 Yerel SEO
- [x] Türkiye'ye özel veriler (GİB, SGK referansları)
- [x] TRY para birimi schema'da
- [ ] Yerel iş kaydı (Google Business Profile - isteğe bağlı)

---

## 5. Performans SEO ⚠️

### 5.1 Core Web Vitals
- [x] Font preloading
- [x] DNS prefetch
- [x] Preconnect to third-party
- [ ] LCP optimizasyonu (izlenmeli)
- [ ] INP optimizasyonu (izlenmeli)
- [ ] CLS optimizasyonu (izlenmeli)

### 5.2 Sayfa Hızı
- [x] Next.js 16 Turbopack
- [x] Lazy loading (AdSense)
- [x] Static generation
- [ ] Image optimization (WebP format)
- [ ] Critical CSS extraction

---

## 6. Off-Page SEO ⚠️

### 6.1 Backlink Profili
- [ ] Guest posting başlatılmadı
- [ ] Resource link building başlatılmadı
- [ ] Broken link building başlatılmadı
- [ ] Directory submissions yapılmadı

### 6.2 Sosyal Medya
- [x] Twitter profil linki eklendi
- [x] Facebook profil linki eklendi
- [x] LinkedIn profil linki eklendi
- [x] Pinterest profil linki eklendi
- [x] YouTube profil linki eklendi
- [ ] Profiller oluşturulmadı (manuel gerekli)

### 6.3 E-E-A-T Sinyalleri
- [x] About sayfası
- [x] Privacy Policy
- [x] Terms of Service
- [ ] Yazar biyografileri güçlendirmesi
- [ ] Dış kaynak referansları artırılmalı

---

## 7. Mobil SEO ✅

### 7.1 Responsive Tasarım
- [x] Mobile-first CSS
- [x] Touch-friendly arayüz
- [x] Viewport meta tag

### 7.2 Mobil Performans
- [x] Lazy loading
- [x] Optimized fonts
- [ ] AMP (şu an gerekli değil)

---

## 8. İçerik SEO

### 8.1 Mevcut İçerik
- [x] 26 İngilizce calculator
- [x] 6 Türkçe calculator
- [x] 18 blog yazısı
- [ ] Türkçe blog yazıları (0 - eklenecek)

### 8.2 İçerik Boşlukları
- [ ] ABD vergi hesaplayıcı (2026 verileri)
- [ ] ABD maaş hesaplayıcı (federal/state)
- [ ] ABD emeklilik hesaplayıcı (401k, Social Security)
- [ ] Türkçe blog içerikleri

### 8.3 Güncel Tutma
- [x] 2026 Türkiye verileri güncel
- [ ] 2026 ABD verileri eklenmeli
- [ ] İçerik tazelik tarihleri tüm sayfalarda

---

## 9. Kritik Eksiklikler ve Öncelikler

### Yüksek Öncelik 🔴
1. **ABD 2026 Veri Dosyası** - lib/data/usa-2026-data.ts oluşturulmalı
2. **Türkçe Blog Yazıları** - En az 5 yazı eklenmeli
3. **Backlink Kampanyası** - Guest posting başlatılmalı

### Orta Öncelik 🟡
4. **Review Schema** - Kullanıcı puanlaması için
5. **Türkçe About Sayfası** - /tr/hakkimizda
6. **İç Linkleme Güçlendirmesi** - Blog ↔ Calculator

### Düşük Öncelik 🟢
7. **Video İçerik** - YouTube entegrasyonu
8. **Infographics** - Görsel içerik
9. **Podcast/Audio** - Ses içerik

---

## 10. İzleme Metrikleri

### Google Search Console
- Toplam tıklama
- Toplam gösterim
- Ortalama CTR
- Ortalama konum
- İndekslenen sayfa sayısı
- Hata sayısı

### Google Analytics
- Organik trafik
- Bounce rate
- Ortalama oturum süresi
- Sayfa/oturum
- Dönüşüm oranı (AdSense)

### Core Web Vitals
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

---

## 11. Aylık SEO Görevleri

### Her Ay
- [ ] Google Search Console hata kontrolü
- [ ] Core Web Vitals kontrolü
- [ ] Yeni içerik ekleme (2 calculator + 2 blog)
- [ ] Backlink izleme

### Her 3 Ay
- [ ] Kapsamlı SEO denetimi
- [ ] Keyword araştırması güncelleme
- [ ] Rekabet analizi
- [ ] İçerik güncelliği kontrolü

### Her 6 Ay
- [ ] Site yapısı gözden geçirme
- [ ] Performans optimizasyonu
- [ ] Strateji revizyonu

---

## 12. Hızlı Referans: Sayfa Türü Checklist

### Yeni Calculator Eklerken
```
[ ] İngilizce sayfa oluştur
[ ] Türkçe sayfa oluştur
[ ] Her iki sayfada hreflang
[ ] WebApplication schema
[ ] FAQPage schema
[ ] BreadcrumbList schema
[ ] HowTo schema (uygunsa)
[ ] Sitemap güncelle
[ ] İç linkler ekle
[ ] Build test et
```

### Yeni Blog Yazısı Eklerken
```
[ ] İngilizce yazı oluştur
[ ] Türkçe yazı oluştur
[ ] Article schema
[ ] BreadcrumbList schema
[ ] Calculator sayfalarına link ver
[ ] Etiketler ekle
[ ] OG image hazırla
[ ] Sitemap güncelle
```

---

**Not:** Bu doküman düzenli olarak güncellenmeli ve tamamlanan maddeler işaretlenmelidir.
