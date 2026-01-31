import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyBMICalculator } from "@/components/calculators/tr/TurkeyBMICalculator";

export const metadata: Metadata = {
  title: "BMI Hesap Makinesi - Vücut Kitle İndeksi Hesaplama 2026",
  description: "Ücretsiz BMI (Vücut Kitle İndeksi) hesap makinesi. Kilonuz ve boyunuzla BMI değerinizi hesaplayın. WHO standartlarına uygun kategoriler ve Türkiye'ye özel sağlık bilgileri.",
  keywords: [
    "bmi hesaplama",
    "vücut kitle indeksi",
    "kilo boy oranı",
    "ideal kilo hesaplama",
    "obezite hesaplama",
    "bmi hesap makinesi",
    "zayıflık testi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/health/bmi-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "BMI Hesap Makinesi - Vücut Kitle İndeksi | Calculator360Pro",
    description: "Ücretsiz BMI hesap makinesi. Kilonuz ve boyunuzla BMI değerinizi hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

// Schema markup
function generateBMISchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Hesap Makinesi",
    "description": "Vücut Kitle İndeksi (BMI) hesaplama aracı",
    "url": `${SITE_URL}/tr/hesap-makineleri/saglik/bmi-hesap-makinesi`,
    "applicationCategory": "HealthApplication",
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
        "name": "BMI nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMI (Body Mass Index - Vücut Kitle İndeksi), kilo ve boy kullanılarak hesaplanan bir değerdir. Formül: BMI = Kilo (kg) / Boy² (m²). WHO tarafından kabul edilen standart kategorilere göre değerlendirilir."
        }
      },
      {
        "@type": "Question",
        "name": "Normal BMI aralığı nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WHO standartlarına göre normal BMI aralığı 18.5 ile 24.9 arasındadır. 18.5'in altı zayıf, 25-29.9 arası fazla kilolu, 30 ve üzeri obez olarak değerlendirilir."
        }
      },
      {
        "@type": "Question",
        "name": "Türkiye'de obezite oranı nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T.C. Sağlık Bakanlığı verilerine göre Türkiye'de yetişkin nüfusunun yaklaşık %30'u obez kategorisindedir. Bu oran Avrupa ortalamasının üzerindedir."
        }
      }
    ]
  };
}

export default function BMIHesapMakinesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBMISchema()),
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
                <Link href="/tr/hesap-makineleri/saglik" className="hover:text-[#2563eb]">
                  Sağlık
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">BMI Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              BMI Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Vücut Kitle İndeksinizi (BMI) hesaplayın ve WHO standartlarına göre 
              sağlık durumunuzu değerlendirin.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyBMICalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                BMI (Body Mass Index - Vücut Kitle İndeksi), kilo ve boy kullanılarak 
                hesaplanan ve vücut yağ oranı hakkında genel bir fikir veren bir değerdir. 
                Dünya Sağlık Örgütü (WHO) tarafından kabul edilen standart bir ölçümdür.
              </p>
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <p className="font-mono text-center text-lg">
                  BMI = Kilo (kg) ÷ Boy² (m²)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Nasıl Hesaplanır?
              </h2>
              <ol className="list-decimal list-inside text-[#64748b] space-y-2">
                <li>Kilonuzu kilogram (kg) cinsinden girin</li>
                <li>Boyunuzu santimetre (cm) cinsinden girin</li>
                <li>"BMI Hesapla" butonuna tıklayın</li>
                <li>Sonucunuzu ve kategorinizi görüntüleyin</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI Kategorileri
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Kategori</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">BMI Aralığı</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-3 text-yellow-600 font-medium">Zayıf</td>
                      <td className="px-4 py-3 text-[#64748b]">&lt; 18.5</td>
                      <td className="px-4 py-3 text-[#64748b]">Yetersiz beslenme riski</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-green-600 font-medium">Normal</td>
                      <td className="px-4 py-3 text-[#64748b]">18.5 - 24.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Sağlıklı kilo aralığı</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-orange-600 font-medium">Fazla Kilolu</td>
                      <td className="px-4 py-3 text-[#64748b]">25 - 29.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Kilo verme önerilir</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-500 font-medium">1. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">30 - 34.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Sağlık riski artmış</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-600 font-medium">2. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">35 - 39.9</td>
                      <td className="px-4 py-3 text-[#64748b]">Ciddi sağlık riski</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-700 font-medium">3. Derece Obez</td>
                      <td className="px-4 py-3 text-[#64748b]">≥ 40</td>
                      <td className="px-4 py-3 text-[#64748b]">Çok ciddi sağlık riski</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                BMI&apos;nin Sınırlamaları
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>Kas kütlesi yüksek olan sporcularda yanıltıcı olabilir</li>
                <li>Yaşlı bireylerde kas kaybını hesaba katmaz</li>
                <li>Bel çevresi ve vücut yağ dağılımını ölçmez</li>
                <li>Çocuklar ve hamileler için farklı tablolar kullanılmalıdır</li>
              </ul>
              <p className="mt-4 text-sm text-[#64748b] bg-yellow-50 p-4 rounded-lg">
                <strong>Öneri:</strong> BMI tek başına sağlık durumunuzu belirlemez. 
                Bel çevresi ölçümü, kan testleri ve genel sağlık değerlendirmesi için 
                bir sağlık uzmanına danışmanızı öneririz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
