import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sağlık Hesap Makineleri - BMI, Kalori ve Daha Fazlası",
  description: "Ücretsiz sağlık hesap makineleri: BMI (Vücut Kitle İndeksi), kalori ihtiyacı, ideal kilo hesaplama. Türkiye Sağlık Bakanlığı standartlarına uygun.",
  keywords: [
    "sağlık hesap makinesi",
    "bmi hesaplama",
    "kalori hesaplama",
    "ideal kilo",
    "vücut kitle indeksi",
    "bazal metabolizma",
    "günlük kalori ihtiyacı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik`,
    languages: {
      "en": `${SITE_URL}/calculators/health`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/saglik`,
    },
  },
  openGraph: {
    title: "Sağlık Hesap Makineleri | Calculator360Pro",
    description: "Ücretsiz sağlık hesap makineleri: BMI, kalori, ideal kilo hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const healthCalculators = [
  {
    name: "BMI Hesap Makinesi",
    description: "Vücut Kitle İndeksinizi (BMI) hesaplayın ve sağlık durumunuzu değerlendirin. WHO standartlarına uygun kategoriler.",
    slug: "bmi-hesap-makinesi",
    icon: "⚖️",
  },
  {
    name: "Kalori Hesap Makinesi",
    description: "Günlük kalori ihtiyacınızı hesaplayın. BMH, TDEE ve makro besin önerileri ile birlikte.",
    slug: "kalori-hesap-makinesi",
    icon: "🔥",
  },
];

export default function SaglikKategorisiPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
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
            <li className="text-[#1e293b] font-medium">Sağlık</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🏥</span>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">
                Sağlık Hesap Makineleri
              </h1>
              <p className="text-[#64748b] mt-2">
                Sağlığınızı takip etmek ve daha bilinçli kararlar almak için ücretsiz sağlık hesap makineleri.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {healthCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/tr/hesap-makineleri/saglik/${calculator.slug}`}
              className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{calculator.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-[#1e293b] group-hover:text-[#2563eb] transition-colors">
                    {calculator.name}
                  </h2>
                  <p className="text-[#64748b] text-sm mt-2">
                    {calculator.description}
                  </p>
                  <span className="inline-flex items-center text-[#2563eb] text-sm font-medium mt-4">
                    Hesapla
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Sağlığınızı Takip Edin
          </h2>
          <div className="space-y-3 text-blue-800">
            <p>
              Sağlık hesap makinelerimiz, Dünya Sağlık Örgütü (WHO) ve T.C. Sağlık 
              Bakanlığı standartlarına uygun olarak hazırlanmıştır.
            </p>
            <p className="text-sm">
              <strong>Önemli Not:</strong> Bu hesap makineleri yalnızca bilgilendirme 
              amaçlıdır. Sağlık durumunuz hakkında kesin bilgi için mutlaka bir sağlık 
              uzmanına danışın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
