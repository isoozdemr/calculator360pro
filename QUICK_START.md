# Quick Start Guide - Calculator360Pro

## 🚀 Projeyi Çalıştırma

### 1. Development Server Başlatma

```bash
npm run dev
```

Proje şu adreste çalışacak: **http://localhost:3000**

### 2. Environment Variables (Opsiyonel)

Eğer Google Analytics veya AdSense kullanacaksanız:

1. `.env.local` dosyası oluşturun:
```bash
cp .env.example .env.local
```

2. Gerçek değerleri ekleyin:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## 📍 Mevcut Sayfalar

### Ana Sayfalar
- **/** - Anasayfa (tüm calculator'ları listeler)
- **/calculators** - Tüm calculator'lar
- **/calculators/{category}** - Kategori sayfaları
  - `/calculators/finance`
  - `/calculators/health`
  - `/calculators/education`
  - `/calculators/math`
  - `/calculators/date-time`

### Calculator Sayfaları (11 adet)

#### Finance Calculators
- `/calculators/finance/mortgage-calculator`
- `/calculators/finance/compound-interest-calculator`
- `/calculators/finance/loan-calculator`
- `/calculators/finance/tax-calculator`
- `/calculators/finance/salary-calculator`

#### Health Calculators
- `/calculators/health/bmi-calculator`
- `/calculators/health/body-fat-calculator` ✨ YENİ

#### Education Calculators
- `/calculators/education/gpa-calculator`

#### Math Calculators
- `/calculators/math/percentage-calculator`
- `/calculators/math/scientific-calculator`

#### Date & Time Calculators
- `/calculators/date-time/age-calculator`

### Diğer Sayfalar
- **/about** - Hakkımızda
- **/blog** - Blog listesi
- **/blog/{slug}** - Blog yazıları
- **/privacy-policy** - Gizlilik Politikası
- **/terms-of-service** - Kullanım Şartları

## 🎨 Tasarım Özellikleri

- ✅ Modern, temiz tasarım
- ✅ Dark mode desteği
- ✅ Responsive (mobile-first)
- ✅ CLS prevention
- ✅ Accessibility (WCAG 2.1 AA)

## 🔍 Test Edilecekler

### 1. Anasayfa
- [ ] Tüm kategoriler görünüyor mu?
- [ ] Calculator'lar listeleniyor mu?
- [ ] Linkler çalışıyor mu?

### 2. Calculator Sayfaları
- [ ] Her calculator çalışıyor mu?
- [ ] Hesaplamalar doğru mu?
- [ ] Reset butonu çalışıyor mu?
- [ ] Responsive tasarım doğru mu?

### 3. Navigation
- [ ] Menü linkleri çalışıyor mu?
- [ ] Breadcrumb navigation doğru mu?
- [ ] Footer linkleri çalışıyor mu?

### 4. SEO
- [ ] Meta tags doğru mu?
- [ ] Schema markup var mı?
- [ ] Sitemap erişilebilir mi? (`/sitemap.xml`)

## 🐛 Bilinen Sorunlar

Şu anda bilinen bir sorun yok. Eğer bir hata görürseniz lütfen bildirin.

## 📝 Notlar

- Proje Next.js 16 App Router kullanıyor
- i18n desteği var (şu anda sadece en ve en-GB aktif)
- Tüm calculator'lar client-side rendering kullanıyor
- Schema markup tüm calculator sayfalarında mevcut

## 🎯 Sonraki Adımlar

1. ✅ Proje çalışır durumda
2. ⏳ Priority 1 calculator'ları ekleme
3. ⏳ SEO optimizasyonu
4. ⏳ Performance testing
5. ⏳ Translation dosyaları

---

**Son Güncelleme:** 2024

