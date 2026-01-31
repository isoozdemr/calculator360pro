# Türkçe İçerik Stratejisi ve i18n Rehberi

**Son Güncelleme:** Ocak 2026  
**Durum:** ✅ Faz 1 Tamamlandı

---

## Mevcut Durum (Güncel)

### ✅ Tamamlanan İşler

1. **Merkezi Veri Dosyası**
   - `lib/data/turkey-2026-data.ts` oluşturuldu
   - 2026 vergi dilimleri, SGK oranları, asgari ücret dahil
   - Tüm hesap fonksiyonları hazır

2. **Türkçe Calculator Sayfaları**
   - `/tr/hesap-makineleri/finans/vergi-hesap-makinesi`
   - `/tr/hesap-makineleri/finans/maas-hesap-makinesi`
   - `/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi`
   - `/tr/hesap-makineleri/finans/kredi-hesap-makinesi`
   - `/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi`
   - `/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi`

3. **SEO Altyapısı**
   - hreflang alternates eklendi
   - Schema markup (WebApplication, FAQ, Breadcrumb)
   - Türkçe meta tags ve keywords
   - Sitemap güncellemesi

### ⏳ Bekleyen İşler

- [ ] Türkçe blog yazıları
- [ ] Türkçe about sayfası (/tr/hakkimizda)
- [ ] Ek Türkçe hesap makineleri (BMI, yüzde, kalori vb.)

---

## İçerik Yaklaşımı: Hibrit Model

### Ülkeye Özel İçerik (Full Localization)

Bu kategorilerde içerik tamamen yerel olmalı:

| Konu | Türkiye'ye Özel | Örnekler |
|------|-----------------|----------|
| Vergi | ✅ | 2026 gelir vergisi dilimleri (15-40%) |
| Maaş | ✅ | SGK, AGİ, damga vergisi kesintileri |
| Kredi | ✅ | KKDF %15, BSMV %5 |
| Emeklilik | ✅ | SGK emeklilik yaşı, EYT, BES |
| Not Sistemi | ✅ | YÖK 4'lük sistem (AA-FF) |

### Hibrit İçerik

Bu kategorilerde formül evrensel, örnekler yerel:

| Konu | Evrensel Formül | Yerel Örnekler |
|------|-----------------|----------------|
| BMI | ✅ | Türkçe açıklamalar, metrik sistem |
| Yüzde | ✅ | TL bazlı örnekler |
| Kalori | ✅ | Türk mutfağı örnekleri |
| Yaş | ✅ | Türkiye resmi tatilleri |

---

## Veri Güncelliği Standartları

### 2026 Güncel Veriler (turkey-2026-data.ts)

| Veri | Değer | Kaynak |
|------|-------|--------|
| Asgari Ücret (Brüt) | 26.005,50 TL | csgb.gov.tr |
| Asgari Ücret (Net) | 22.104,67 TL | csgb.gov.tr |
| SGK İşçi | %14 | sgk.gov.tr |
| SGK İşveren | %20.5 | sgk.gov.tr |
| İşsizlik İşçi | %1 | sgk.gov.tr |
| İşsizlik İşveren | %2 | sgk.gov.tr |
| KKDF (Tüketici) | %15 | tcmb.gov.tr |
| BSMV | %5 | tcmb.gov.tr |
| BES Devlet Katkısı | %25 | egm.gov.tr |

### Vergi Dilimleri 2026

| Matrah Aralığı | Oran |
|----------------|------|
| 0 - 158.000 TL | %15 |
| 158.001 - 350.000 TL | %20 |
| 350.001 - 900.000 TL | %27 |
| 900.001 - 4.700.000 TL | %35 |
| 4.700.001 TL üzeri | %40 |

---

## Türkçe Anahtar Kelimeler

### Yüksek Hacimli (High Volume)

```
vergi hesaplama - 40,000+ aylık
maaş hesaplama - 35,000+ aylık
kredi hesaplama - 30,000+ aylık
konut kredisi hesaplama - 25,000+ aylık
not ortalaması hesaplama - 20,000+ aylık
emeklilik hesaplama - 15,000+ aylık
bmi hesaplama - 15,000+ aylık
kalori hesaplama - 12,000+ aylık
```

### Uzun Kuyruk (Long Tail)

```
2026 vergi dilimleri
brütten nete maaş hesaplama
sgk emeklilik yaşı hesaplama
konut kredisi aylık taksit hesaplama
üniversite not ortalaması hesaplama
gelir vergisi nasıl hesaplanır
asgari ücret net 2026
```

---

## Türkçe Sayfa Şablonu

### Meta Tags

```typescript
export const metadata: Metadata = {
  title: "[Konu] Hesaplama 2026 | [Açıklama] - Calculator360Pro",
  description: "2026 güncel [veriler] ile [ne] hesaplayın. [Özellik 1], [özellik 2] dahil. Ücretsiz ve anında sonuç!",
  keywords: [
    "[ana anahtar kelime]",
    "[ikincil anahtar kelime]",
    "2026 [konu]",
    "[konu] nasıl hesaplanır",
    "ücretsiz [konu] hesap makinesi",
  ],
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/[kategori]/[slug]",
    languages: {
      "en": "https://calculator360pro.com/calculators/[category]/[slug]",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/[kategori]/[slug]",
    },
  },
};
```

### İçerik Yapısı

```
1. Breadcrumb navigasyon
2. H1: [Konu] Hesaplama 2026
3. Kısa açıklama (1-2 cümle)
4. Güncelleme kutusu (tarih + kaynak)
5. Hesap makinesi bileşeni
6. SEO içerik:
   - H2: [Konu] Nedir?
   - H2: Nasıl Hesaplanır?
   - H2: 2026 Güncel Oranlar/Değerler
   - H2: Sıkça Sorulan Sorular
7. İlgili hesap makineleri
```

---

## Dosya Yapısı

```
lib/
  data/
    turkey-2026-data.ts      ✅ Tamamlandı
    usa-2026-data.ts         ✅ Tamamlandı

components/
  calculators/
    tr/
      TurkeyTaxCalculator.tsx        ✅
      TurkeySalaryCalculator.tsx     ✅
      TurkeyMortgageCalculator.tsx   ✅
      TurkeyLoanCalculator.tsx       ✅
      TurkeyGPACalculator.tsx        ✅
      TurkeyRetirementCalculator.tsx ✅
      index.ts                       ✅

app/
  tr/
    page.tsx                               ✅
    hesap-makineleri/
      page.tsx                             ✅
      finans/
        page.tsx                           ✅
        vergi-hesap-makinesi/page.tsx      ✅
        maas-hesap-makinesi/page.tsx       ✅
        konut-kredisi-hesap-makinesi/page.tsx  ✅
        kredi-hesap-makinesi/page.tsx      ✅
        emeklilik-hesap-makinesi/page.tsx  ✅
      egitim/
        page.tsx                           ✅
        not-ortalamasi-hesap-makinesi/page.tsx ✅
```

---

## Güncelleme Takvimi

| Dönem | Güncelleme İçeriği |
|-------|-------------------|
| Ocak | Yeni yıl vergi dilimleri, asgari ücret |
| Temmuz | 6 aylık kontrol, faiz oranları |
| Ekim | Bütçe değişiklikleri |
| Aralık | Yıl sonu kapanış, gelecek yıl hazırlığı |

### Güncelleme Komutu

```bash
# Veri dosyasını güncelle, build test et
npm run build

# Verileri doğrula
npm run validate:content
```

---

## Sonraki Adımlar (Faz 2)

### Öncelik 1: Türkçe Blog

1. "2026 Vergi Dilimleri ve Hesaplama Rehberi"
2. "Brütten Nete Maaş Hesaplama: SGK, AGİ, Vergi"
3. "Konut Kredisi Alırken Dikkat Edilecekler 2026"
4. "EYT Nedir? Kimler Faydalanabilir?"
5. "BES Devlet Katkısı Nasıl Hesaplanır?"

### Öncelik 2: Ek Hesap Makineleri

- `/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`
- `/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`
- `/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`
- `/tr/hesap-makineleri/tarih-zaman/yas-hesap-makinesi`

### Öncelik 3: Ek Sayfalar

- `/tr/hakkimizda` - About sayfası
- `/tr/gizlilik-politikasi` - Privacy Policy
- `/tr/kullanim-kosullari` - Terms of Service

---

## Kalite Kontrol

### Yeni Türkçe İçerik Checklist

```
[ ] İçerik özgün (çeviri değil)
[ ] 2026 güncel verileri kullanılıyor
[ ] Kaynak referansları eklendi
[ ] "Son Güncelleme" bilgisi var
[ ] hreflang alternates doğru
[ ] Schema markup eklendi
[ ] Meta title 60 karakter altı
[ ] Meta description 155 karakter
[ ] Anahtar kelimeler dahil
[ ] İç linkler eklendi
[ ] Sitemap güncellendi
[ ] Build test edildi
```

---

## Notlar

1. **Özgün İçerik:** Türkçe içerik İngilizce'nin çevirisi olmamalı
2. **Yerel Örnekler:** TL, Türkiye yasaları, yerel referanslar
3. **Teknik Terimler:** Hem Türkçe hem İngilizce (BMI - Vücut Kitle İndeksi)
4. **Güncellik:** Her sayfada "Son Güncelleme" ve kaynak bilgisi

---

**İletişim:** SEO ve içerik soruları için docs klasöründeki ilgili dokümanlara bakın.
