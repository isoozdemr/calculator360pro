import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarih ve Zaman Hesap Makineleri - Yaş Hesaplama",
  description: "Ücretsiz tarih ve zaman hesap makineleri: Yaş hesaplama, gün hesaplama, tarih farkı bulma. Hızlı ve kolay kullanım.",
  keywords: [
    "yaş hesaplama",
    "tarih hesap makinesi",
    "gün hesaplama",
    "tarih farkı",
    "kaç gün kaldı",
    "doğum günü hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman`,
    languages: {
      "en": `${SITE_URL}/calculators/date-time`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman`,
    },
  },
  openGraph: {
    title: "Tarih ve Zaman Hesap Makineleri | Calculator360Pro",
    description: "Ücretsiz tarih ve zaman hesap makineleri: Yaş hesaplama, gün hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const dateTimeCalculators = [
  {
    name: "Yaş Hesap Makinesi",
    description: "Doğum tarihinizden yaşınızı hesaplayın. Yıl, ay, hafta, gün detayları, burç bilgisi ve sonraki doğum gününe kalan süre.",
    slug: "yas-hesap-makinesi",
    icon: "🎂",
  },
];

export default function TarihZamanKategorisiPage() {
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
            <li className="text-[#1e293b] font-medium">Tarih ve Zaman</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📅</span>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">
                Tarih ve Zaman Hesap Makineleri
              </h1>
              <p className="text-[#64748b] mt-2">
                Yaş hesaplama, tarih farkı bulma ve zaman hesaplama araçları.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {dateTimeCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/tr/hesap-makineleri/tarih-zaman/${calculator.slug}`}
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
            Yaş ve Tarih Hesaplama
          </h2>
          <div className="space-y-3 text-blue-800">
            <p>
              Tarih ve zaman hesaplama araçları, günlük hayatta sıkça ihtiyaç duyulan 
              hesaplamaları kolaylaştırır.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Yaş hesaplama (resmi işlemler için)</li>
              <li>Tarihler arası fark bulma</li>
              <li>Doğum gününe kalan süre</li>
              <li>Burç hesaplama</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
