# OG Image PNG Conversion

OG image dosyasını SVG'den PNG'ye çevirmek için aşağıdaki yöntemlerden birini kullanabilirsiniz:

## Yöntem 1: Node.js Script (Önerilen)

1. Sharp paketini yükleyin:
```bash
npm install sharp --save-dev
```

2. Script'i çalıştırın:
```bash
node scripts/convert-svg-to-png.js
```

Bu script `public/og-image.svg` dosyasını `public/og-image.png` (1200x630px) olarak oluşturur.

## Yöntem 2: Online Tool (Hızlı)

Aşağıdaki online araçlardan birini kullanarak SVG'yi PNG'ye çevirebilirsiniz:

1. **CloudConvert**: https://cloudconvert.com/svg-to-png
   - Dosya: `public/og-image.svg`
   - Boyut: 1200x630px
   - Format: PNG
   - Quality: 100%

2. **Convertio**: https://convertio.co/svg-png/
   - Dosya: `public/og-image.svg`
   - Boyut: 1200x630px
   - Format: PNG

3. **SVG to PNG**: https://svgtopng.com/
   - Dosya: `public/og-image.svg`
   - Boyut: 1200x630px
   - Format: PNG

## Yöntem 3: ImageMagick (Eğer yüklüyse)

```bash
magick public/og-image.svg -resize 1200x630 public/og-image.png
```

## Önemli Notlar

- PNG dosyası **1200x630px** boyutunda olmalı (Open Graph standardı)
- Dosya `public/og-image.png` konumuna kaydedilmeli
- Meta tag'ler zaten `.png` formatını kullanacak şekilde güncellendi

## Kontrol

PNG dosyası oluşturulduktan sonra:
- `public/og-image.png` dosyasının var olduğunu kontrol edin
- Dosya boyutunun 1200x630px olduğunu doğrulayın
- Meta tag'lerde `.png` formatı kullanılıyor (zaten güncellendi)

