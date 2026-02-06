# IndexNow Kullanım Rehberi

IndexNow, sitenizdeki içerik güncellemelerini veya yeni sayfaları arama motorlarına anında bildirmenizi sağlayan bir protokoldür. Google Indexing API'den farklı olarak **Bing, Yandex, Seznam ve Naver** gibi arama motorları tarafından desteklenir. Google IndexNow kullanmaz; Google için [Google Indexing API](GOOGLE_INDEXING_AUTOMATION.md) veya Search Console kullanın.

## Amaç

- Yeni veya güncellenen URL'leri Bing ve Yandex'e hızlıca bildirmek
- Sitemap beklemeden indekslemeyi tetiklemek
- Tek istekle birden fazla URL göndermek (en fazla 10.000 URL/istek)

## Endpoint

**URL:** `POST https://calculator360pro.com/api/indexnow`

**Headers:**
```
Content-Type: application/json
x-api-key: <INDEXNOW_API_SECRET>
```

Ortam değişkeni: `INDEXNOW_API_SECRET` (varsayılan örnek: `your-secret-key`; production'da güçlü bir değer kullanın).

## Key Dosyası

IndexNow protokolü, sitenizin sahipliğini doğrulamak için bir key dosyası kullanır.

- **Konum:** `https://calculator360pro.com/calculator360pro-indexnow-key-2026.txt`
- **Dosya yolu (proje içi):** `public/calculator360pro-indexnow-key-2026.txt`
- Key dosyasının içeriği, API'de kullanılan `INDEXNOW_KEY` (veya varsayılan `calculator360pro-indexnow-key-2026`) ile aynı olmalıdır. Ortam değişkeni: `INDEXNOW_KEY`.

## İstek Örnekleri

### Tek URL

```bash
curl -X POST https://calculator360pro.com/api/indexnow \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_SECRET" \
  -d '{"url": "/calculators/finance/salary-calculator"}'
```

### Birden fazla URL

```json
{
  "urls": [
    "/calculators/finance/salary-calculator",
    "/tr/hesap-makineleri/finans/maas-hesap-makinesi",
    "/blog/tax-calculator-guide"
  ]
}
```

URL'ler relative veya absolute olabilir; relative ise otomatik olarak site domain'i ile birleştirilir.

## Yanıt

Başarılı yanıt örneği:

```json
{
  "success": true,
  "message": "Submitted 3 URL(s) to 3/3 search engines",
  "urls": ["https://calculator360pro.com/..."],
  "results": [
    { "endpoint": "https://api.indexnow.org/indexnow", "status": 200, "ok": true },
    { "endpoint": "https://www.bing.com/indexnow", "status": 200, "ok": true },
    { "endpoint": "https://yandex.com/indexnow", "status": 200, "ok": true }
  ]
}
```

## GET ile Durum Kontrolü

Endpoint'e GET isteği göndererek servisin açık olduğunu ve key konumunu doğrulayabilirsiniz:

```bash
curl https://calculator360pro.com/api/indexnow
```

## Özet

| Özellik | Değer |
|---------|--------|
| Endpoint | `POST /api/indexnow` |
| Auth | Header: `x-api-key` |
| Key dosyası | `public/calculator360pro-indexnow-key-2026.txt` |
| Env vars | `INDEXNOW_KEY`, `INDEXNOW_API_SECRET` |
| Desteklenen motorlar | Bing, Yandex, Seznam, Naver (Google hariç) |

Google için URL bildirimi: [GOOGLE_INDEXING_AUTOMATION.md](GOOGLE_INDEXING_AUTOMATION.md).
