# Google Indexing API - Otomatikleştirme Rehberi

Bu dokümantasyon, Google Indexing API'yi kullanarak tüm içeriklerinizi otomatik olarak Google'a bildirmek için oluşturulmuş script'ler ve API endpoint'lerini açıklar.

## 📋 İçindekiler

1. [Hızlı Başlangıç](#hızlı-başlangıç)
2. [Tüm URL'leri Gönderme](#tüm-urlleri-gönderme)
3. [Yeni İçerikleri Otomatik Gönderme](#yeni-içerikleri-otomatik-gönderme)
4. [API Endpoint'leri](#api-endpointleri)
5. [Otomatikleştirme Seçenekleri](#otomatikleştirme-seçenekleri)

## 🚀 Hızlı Başlangıç

### 1. Tüm URL'leri Tek Seferde Gönderme

**PowerShell ile:**
```powershell
$headers = @{
    "Content-Type" = "application/json"
    "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239"
}

$body = @{
    type = "all"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
```

**cURL ile:**
```bash
curl -X POST https://calculator360pro.com/api/google-indexing/bulk \
  -H "Content-Type: application/json" \
  -H "x-api-key: calculator360pro-indexing-api-secret-2026-1769963462239" \
  -d '{"type": "all"}'
```

**NPM Script ile:**
```bash
npm run submit:urls
```

### 2. Son 7 Günün Yeni İçeriklerini Gönderme

```powershell
$headers = @{
    "Content-Type" = "application/json"
    "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239"
}

$body = @{
    type = "new"
    days = 7
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
```

## 📤 Tüm URL'leri Gönderme

### Yöntem 1: Bulk API Endpoint (Önerilen)

En kolay ve hızlı yöntem. Tüm URL'leri otomatik olarak toplar ve Google'a gönderir.

```powershell
# Tüm URL'leri gönder
$headers = @{ "Content-Type" = "application/json"; "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239" }
$body = @{ type = "all" } | ConvertTo-Json
Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
```

### Yöntem 2: NPM Script

```bash
npm run submit:urls
```

Bu script:
- Tüm indexable URL'leri toplar (~100+ URL)
- 10'ar URL'lik batch'ler halinde gönderir
- Her batch arasında 2 saniye bekler (rate limiting için)
- Detaylı progress ve sonuç raporu gösterir

## 🔄 Yeni İçerikleri Otomatik Gönderme

### Yeni Blog Yazılarını Gönderme

```powershell
$headers = @{
    "Content-Type" = "application/json"
    "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239"
}

# Son 7 günün yeni içeriklerini gönder
$body = @{
    type = "new"
    days = 7
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
```

### Özel Gün Sayısı

```powershell
# Son 30 günün içeriklerini gönder
$body = @{
    type = "new"
    days = 30
} | ConvertTo-Json
```

## 🔐 Ortam Değişkenleri (Environment Variables)

Aşağıdaki değişkenler Google Indexing API için gereklidir (Vercel / .env):

| Değişken | Açıklama |
|----------|----------|
| `GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL` | Google Cloud Service Account e-posta adresi |
| `GOOGLE_INDEXING_PRIVATE_KEY` | Service Account JSON anahtar dosyasındaki `private_key` (PEM formatında; satır sonları `\n` olarak escape edilebilir) |
| `GOOGLE_INDEXING_API_SECRET` | Tek URL / bulk endpoint'lerini korumak için kullanılan API anahtarı; isteklerde `x-api-key` header'ında gönderilir |

Not: Bulk endpoint (`/api/google-indexing/bulk`) kendi auth mekanizmasını kullanıyorsa aynı veya ayrı bir secret kullanılabilir. Tek URL endpoint'i (`POST /api/google-indexing`) `x-api-key` ile korunur.

## 🔌 API Endpoint'leri

### 1. Bulk Submission Endpoint

**URL:** `POST /api/google-indexing/bulk`

**Headers:**
```
Content-Type: application/json
x-api-key: calculator360pro-indexing-api-secret-2026-1769963462239
```

**Body:**
```json
{
  "type": "all" | "new",
  "days": 7  // Sadece "new" için, kaç gün geriye bakılacak
}
```

**Response:**
```json
{
  "success": true,
  "message": "Processed 114 URLs: 114 successful, 0 failed",
  "type": "all",
  "totalUrls": 114,
  "successful": 114,
  "failed": 0
}
```

### 2. Single URL Endpoint

**URL:** `POST /api/google-indexing`

**Body:**
```json
{
  "url": "/tr/hesap-makineleri/finans/maas-hesap-makinesi",
  "type": "URL_UPDATED"
}
```

### 3. Multiple URLs Endpoint

**URL:** `POST /api/google-indexing`

**Body:**
```json
{
  "urls": [
    "/tr/hesap-makineleri/finans/maas-hesap-makinesi",
    "/tr/blog/2026-gelir-vergisi-dilimleri-hesaplama-rehberi"
  ],
  "type": "URL_UPDATED"
}
```

## 🤖 Otomatikleştirme Seçenekleri

### 1. Vercel Cron Jobs (Önerilen)

Vercel'de cron job oluşturarak haftalık veya günlük otomatik gönderim yapabilirsiniz.

**`vercel.json` ekle:**
```json
{
  "crons": [
    {
      "path": "/api/google-indexing/bulk",
      "schedule": "0 2 * * 0"
    }
  ]
}
```

**API Route oluştur:** `app/api/cron/google-indexing/route.ts`

```typescript
import { NextResponse } from "next/server";
import { getAllIndexableUrls, getNewContentUrls } from "@/lib/indexing/get-all-urls";

export async function GET(request: NextRequest) {
  // Vercel Cron secret kontrolü
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Son 7 günün yeni içeriklerini gönder
  const newUrls = getNewContentUrls(7);
  
  // Bulk API'yi çağır
  // ... implementation
}
```

### 2. GitHub Actions

`.github/workflows/submit-to-google.yml`:

```yaml
name: Submit to Google Indexing API

on:
  schedule:
    - cron: '0 2 * * 0'  # Her Pazar günü saat 02:00
  workflow_dispatch:  # Manuel tetikleme

jobs:
  submit:
    runs-on: ubuntu-latest
    steps:
      - name: Submit URLs
        run: |
          curl -X POST https://calculator360pro.com/api/google-indexing/bulk \
            -H "Content-Type: application/json" \
            -H "x-api-key: ${{ secrets.GOOGLE_INDEXING_API_SECRET }}" \
            -d '{"type": "new", "days": 7}'
```

### 3. Manuel Script (Local)

```bash
# Tüm URL'leri gönder
npm run submit:urls

# Veya script'i direkt çalıştır
npx tsx scripts/submit-all-urls-to-google.ts
```

## 📊 İstatistikler

Bulk endpoint'i GET ile çağırarak istatistikleri görebilirsiniz:

```powershell
Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method GET
```

**Response:**
```json
{
  "service": "Google Indexing API - Bulk Submission",
  "status": "configured",
  "stats": {
    "totalIndexableUrls": 114,
    "newUrlsLast7Days": 3
  }
}
```

## ⚠️ Önemli Notlar

1. **Rate Limiting:** Google günde maksimum 200 URL'ye izin verir. Script otomatik olarak batch'ler halinde gönderir.

2. **Batch Size:** Varsayılan batch size 10'dur. Her batch arasında 2 saniye beklenir.

3. **Yeni İçerik:** `type: "new"` kullanıldığında, sadece son N gün içinde eklenen blog yazıları gönderilir.

4. **Hata Yönetimi:** Başarısız URL'ler response'da `errors` array'inde döner.

## 🔍 Debugging

Hata durumunda:

1. **API Key Kontrolü:**
   ```powershell
   # GET endpoint'i test et
   Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing" -Method GET
   ```

2. **Tek URL Test:**
   ```powershell
   $headers = @{ "Content-Type" = "application/json"; "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239" }
   $body = @{ url = "/tr/hesap-makineleri/finans/maas-hesap-makinesi" } | ConvertTo-Json
   Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing" -Method POST -Headers $headers -Body $body
   ```

3. **Bulk Stats:**
   ```powershell
   Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method GET
   ```

## 📝 Örnek Kullanım Senaryoları

### Senaryo 1: İlk Kurulum - Tüm URL'leri Gönderme

```powershell
# Tüm site URL'lerini Google'a bildir
$headers = @{ "Content-Type" = "application/json"; "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239" }
$body = @{ type = "all" } | ConvertTo-Json
$result = Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
$result | ConvertTo-Json -Depth 5
```

### Senaryo 2: Haftalık Yeni İçerik Kontrolü

```powershell
# Son 7 günün yeni blog yazılarını gönder
$headers = @{ "Content-Type" = "application/json"; "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239" }
$body = @{ type = "new"; days = 7 } | ConvertTo-Json
Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing/bulk" -Method POST -Headers $headers -Body $body
```

### Senaryo 3: Yeni Blog Yazısı Eklendiğinde

Yeni bir blog yazısı eklediğinizde, o yazıyı hemen Google'a bildirmek için:

```powershell
$headers = @{ "Content-Type" = "application/json"; "x-api-key" = "calculator360pro-indexing-api-secret-2026-1769963462239" }
$body = @{ url = "/tr/blog/yeni-yazi-slug" } | ConvertTo-Json
Invoke-RestMethod -Uri "https://calculator360pro.com/api/google-indexing" -Method POST -Headers $headers -Body $body
```

## 🚀 Deploy Sonrası (Opsiyonel CI Adımı)

Yeni bir deploy'dan sonra indekslemeyi hızlandırmak için:

- **Tüm sayfalar:** `POST /api/google-indexing/bulk` ile `{ "type": "all" }` (ilk kurulum veya büyük güncelleme sonrası).
- **Sadece yeni içerik:** `{ "type": "new", "days": 7 }` ile son 7 günün blog / yeni sayfalarını gönderin.
- CI/CD pipeline'a (GitHub Actions, Vercel deploy hook vb.) deploy başarılı olduktan sonra bu endpoint'i çağıran bir adım eklenebilir.

## 🎯 Sonuç

Bu sistem sayesinde:
- ✅ Tüm içerikleriniz otomatik olarak Google'a bildirilir
- ✅ Yeni içerikler hızlıca indexlenir
- ✅ Manuel işlem gerektirmez
- ✅ Batch processing ile rate limit sorunları önlenir

Sorularınız için: [GitHub Issues](https://github.com/isoozdemr/calculator360pro/issues)
