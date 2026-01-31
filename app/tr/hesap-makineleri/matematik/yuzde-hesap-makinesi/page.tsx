import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyPercentageCalculator } from "@/components/calculators/tr/TurkeyPercentageCalculator";

export const metadata: Metadata = {
  title: "Yüzde Hesap Makinesi - Yüzde Hesaplama 2026",
  description: "Ücretsiz yüzde hesap makinesi. Yüzde hesaplama, artış/azalış oranı bulma, indirim hesaplama. Kolay kullanım, anında sonuç.",
  keywords: [
    "yüzde hesaplama",
    "yüzde hesap makinesi",
    "artış oranı hesaplama",
    "azalış oranı hesaplama",
    "indirim hesaplama",
    "oran hesaplama",
    "yüzde bulma",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/math/percentage-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Yüzde Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz yüzde hesap makinesi. Yüzde hesaplama, artış/azalış oranı bulma.",
    url: `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

// Schema markup
function generatePercentageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Yüzde Hesap Makinesi",
    "description": "Yüzde hesaplama aracı",
    "url": `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "inLanguage": "tr"
  };
}

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bir sayının yüzdesi nasıl hesaplanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bir sayının yüzdesini hesaplamak için: (Sayı × Yüzde) / 100 formülü kullanılır. Örneğin, 200'ün %25'i = (200 × 25) / 100 = 50"
        }
      },
      {
        "@type": "Question",
        "name": "Artış oranı nasıl hesaplanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Artış oranı formülü: ((Yeni Değer - Eski Değer) / Eski Değer) × 100. Örneğin, 100'den 120'ye artış = ((120-100)/100) × 100 = %20 artış"
        }
      },
      {
        "@type": "Question",
        "name": "Bir sayı diğerinin yüzde kaçıdır nasıl bulunur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formül: (Parça Değer / Toplam Değer) × 100. Örneğin, 25 sayısı 100'ün yüzde kaçıdır = (25/100) × 100 = %25"
        }
      }
    ]
  };
}

export default function YuzdeHesapMakinesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePercentageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-[#64748b]">
              <li>
                <Link href="/tr" className="hover:text-[#2563eb]">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">
                  Hesap Makineleri
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri/matematik" className="hover:text-[#2563eb]">
                  Matematik
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Yüzde Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Yüzde Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Yüzde hesaplama, artış/azalış oranı bulma ve oran hesaplama. 
              Günlük hayatta en çok ihtiyaç duyulan hesaplama aracı.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyPercentageCalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yüzde Hesaplama Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                Yüzde (%), bir sayının 100&apos;e bölünmesiyle elde edilen oranı ifade eder. 
                Yüzde hesaplama, günlük hayatta alışverişten finansal kararlara kadar 
                birçok alanda karşımıza çıkar.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yüzde Hesaplama Formülleri
              </h2>
              <div className="space-y-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">1. Bir Sayının Yüzdesini Bulma</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Sonuç = (Sayı × Yüzde) ÷ 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 1000&apos;in %20&apos;si = (1000 × 20) ÷ 100 = 200
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">2. Artış Oranı Hesaplama</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Artış % = ((Yeni - Eski) ÷ Eski) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 100&apos;den 125&apos;e artış = ((125-100) ÷ 100) × 100 = %25
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">3. Azalış Oranı Hesaplama</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Azalış % = ((Eski - Yeni) ÷ Eski) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 100&apos;den 80&apos;e azalış = ((100-80) ÷ 100) × 100 = %20
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">4. Bir Sayının Yüzde Kaç Olduğunu Bulma</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Yüzde = (Parça ÷ Toplam) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 25, 200&apos;ün yüzde kaçı = (25 ÷ 200) × 100 = %12.5
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Günlük Hayatta Yüzde Kullanımı
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">🛒 Alışveriş</h3>
                  <p className="text-sm text-[#64748b]">
                    İndirim hesaplama, KDV hesaplama, kampanya fiyatları
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">💰 Finans</h3>
                  <p className="text-sm text-[#64748b]">
                    Faiz oranları, yatırım getirisi, kredi hesaplama
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">💼 İş Hayatı</h3>
                  <p className="text-sm text-[#64748b]">
                    Maaş zammı, satış hedefleri, performans değerlendirme
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">📊 Ekonomi</h3>
                  <p className="text-sm text-[#64748b]">
                    Enflasyon oranı, büyüme oranı, işsizlik oranı
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sık Kullanılan Yüzde Örnekleri
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">İşlem</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Örnek</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Sonuç</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%10 indirim</td>
                      <td className="px-4 py-3 text-[#64748b]">100 TL ürün</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">90 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%20 KDV</td>
                      <td className="px-4 py-3 text-[#64748b]">500 TL + KDV</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">600 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%15 bahşiş</td>
                      <td className="px-4 py-3 text-[#64748b]">200 TL hesap</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">30 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%25 artış</td>
                      <td className="px-4 py-3 text-[#64748b]">20.000 TL maaş</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">25.000 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
