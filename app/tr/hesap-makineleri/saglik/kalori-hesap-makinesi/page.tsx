import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyCalorieCalculator } from "@/components/calculators/tr/TurkeyCalorieCalculator";

export const metadata: Metadata = {
  title: "Kalori Hesap Makinesi - Günlük Kalori İhtiyacı 2026",
  description: "Ücretsiz kalori hesap makinesi. Günlük kalori ihtiyacınızı, BMH ve TDEE değerlerinizi hesaplayın. Türkiye Beslenme Rehberi'ne uygun makro besin önerileri.",
  keywords: [
    "kalori hesaplama",
    "günlük kalori ihtiyacı",
    "bazal metabolizma",
    "BMH hesaplama",
    "TDEE hesaplama",
    "kilo verme kalori",
    "kilo alma kalori",
    "makro besin hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/health/calorie-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Kalori Hesap Makinesi - Günlük Kalori İhtiyacı | Calculator360Pro",
    description: "Ücretsiz kalori hesap makinesi. Günlük kalori ihtiyacınızı hesaplayın.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

// Schema markup
function generateCalorieSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kalori Hesap Makinesi",
    "description": "Günlük kalori ihtiyacı hesaplama aracı",
    "url": `${SITE_URL}/tr/hesap-makineleri/saglik/kalori-hesap-makinesi`,
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
        "name": "Günlük kalori ihtiyacı nasıl hesaplanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Günlük kalori ihtiyacı, Bazal Metabolizma Hızı (BMH) ile aktivite faktörünün çarpılmasıyla hesaplanır. BMH için en doğru formül Mifflin-St Jeor denklemidir: Erkek: (10 × kilo) + (6.25 × boy) - (5 × yaş) + 5, Kadın: (10 × kilo) + (6.25 × boy) - (5 × yaş) - 161"
        }
      },
      {
        "@type": "Question",
        "name": "Kilo vermek için günde kaç kalori almalıyım?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sağlıklı kilo vermek için günlük kalori ihtiyacınızın 500 kalori altında kalmanız önerilir. Bu şekilde haftada yaklaşık 0.5 kg verebilirsiniz. Ancak günlük 1200 kalorinin (kadınlar) veya 1500 kalorinin (erkekler) altına düşmemelisiniz."
        }
      },
      {
        "@type": "Question",
        "name": "BMH (Bazal Metabolizma Hızı) nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMH, vücudunuzun hiç hareket etmeden, sadece temel yaşamsal fonksiyonları sürdürmek için harcadığı enerji miktarıdır. Solunum, kalp atışı, hücre yenilenmesi gibi işlemler bu enerjiye dahildir."
        }
      }
    ]
  };
}

export default function KaloriHesapMakinesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCalorieSchema()),
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
              <li className="text-[#1e293b] font-medium">Kalori Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Kalori Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Günlük kalori ihtiyacınızı hesaplayın ve hedefinize uygun beslenme 
              planı oluşturun. BMH, TDEE ve makro besin önerileri ile birlikte.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyCalorieCalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Kalori Hesaplama Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                Kalori hesaplama, vücudunuzun günlük enerji ihtiyacını belirlemenize 
                yardımcı olur. Bu hesaplama yaş, cinsiyet, kilo, boy ve aktivite 
                düzeyinize göre yapılır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">BMH (Bazal Metabolizma Hızı)</h3>
                  <p className="text-sm text-[#64748b]">
                    Vücudunuzun dinlenme halinde temel yaşamsal fonksiyonlar için 
                    harcadığı enerji miktarı.
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">TDEE (Günlük Toplam Enerji)</h3>
                  <p className="text-sm text-[#64748b]">
                    BMH + günlük aktivitelerinizle birlikte toplam harcadığınız 
                    enerji miktarı.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Aktivite Düzeyleri
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Hareketsiz</span>
                  <p className="text-sm text-[#64748b]">
                    Masa başı iş, çok az veya hiç egzersiz yok (BMH × 1.2)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Hafif Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 1-3 gün hafif egzersiz (BMH × 1.375)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Orta Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 3-5 gün orta şiddette egzersiz (BMH × 1.55)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Haftada 6-7 gün yoğun egzersiz (BMH × 1.725)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#f8fafc] rounded-lg">
                  <span className="font-semibold text-[#1e293b] min-w-[120px]">Çok Aktif</span>
                  <p className="text-sm text-[#64748b]">
                    Çok yoğun egzersiz veya fiziksel iş (BMH × 1.9)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Makro Besinler
              </h2>
              <p className="text-[#64748b] mb-4">
                T.C. Sağlık Bakanlığı Türkiye Beslenme Rehberi&apos;ne göre önerilen 
                makro besin dağılımı:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Protein</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%15-20</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Et, balık, yumurta, süt ürünleri, baklagiller
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Karbonhidrat</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%45-55</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Tam tahıllar, meyve, sebze, baklagiller
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Yağ</h3>
                  <p className="text-2xl font-bold text-[#2563eb]">%25-30</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Zeytinyağı, ceviz, badem, balık yağı
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sağlıklı Beslenme Önerileri
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2">
                <li>Günde en az 5 porsiyon sebze ve meyve tüketin</li>
                <li>Tam tahıllı ürünleri tercih edin (tam buğday, yulaf, bulgur)</li>
                <li>Günde 2-3 porsiyon süt ve süt ürünleri tüketin</li>
                <li>Kırmızı et yerine balık ve beyaz eti tercih edin</li>
                <li>Günde en az 8-10 bardak su için</li>
                <li>Şekerli içecekler ve işlenmiş gıdalardan kaçının</li>
                <li>Öğün atlamayın, düzenli beslenin</li>
              </ul>
              <p className="mt-4 text-sm text-[#64748b] bg-yellow-50 p-4 rounded-lg">
                <strong>Önemli:</strong> Bu hesaplama genel bir tahmin sağlar. 
                Kişisel beslenme planı için bir diyetisyene danışmanızı öneririz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
