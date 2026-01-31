import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Matematik Hesap Makineleri - Yüzde, Kesir ve Daha Fazlası",
  description: "Ücretsiz matematik hesap makineleri: Yüzde hesaplama, kesir işlemleri, oran hesaplama ve daha fazlası. Günlük hayatta ve iş yaşamında kullanabileceğiniz hesap makineleri.",
  keywords: [
    "matematik hesap makinesi",
    "yüzde hesaplama",
    "oran hesaplama",
    "kesir hesaplama",
    "artış oranı hesaplama",
    "indirim hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik`,
    languages: {
      "en": `${SITE_URL}/calculators/math`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/matematik`,
    },
  },
  openGraph: {
    title: "Matematik Hesap Makineleri | Calculator360Pro",
    description: "Ücretsiz matematik hesap makineleri: Yüzde, kesir, oran hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/matematik`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const mathCalculators = [
  {
    name: "Yüzde Hesap Makinesi",
    description: "Yüzde hesaplama, artış/azalış oranı bulma ve oran hesaplama. Günlük hayatta en çok ihtiyaç duyulan hesaplama aracı.",
    slug: "yuzde-hesap-makinesi",
    icon: "%",
  },
];

export default function MatematikKategorisiPage() {
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
            <li className="text-[#1e293b] font-medium">Matematik</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🔢</span>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">
                Matematik Hesap Makineleri
              </h1>
              <p className="text-[#64748b] mt-2">
                Günlük hayatta ve iş yaşamında ihtiyaç duyacağınız matematik hesaplama araçları.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mathCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/tr/hesap-makineleri/matematik/${calculator.slug}`}
              className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#2563eb]">{calculator.icon}</span>
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
            Yüzde Hesaplama Neden Önemli?
          </h2>
          <div className="space-y-3 text-blue-800">
            <p>
              Yüzde hesaplama günlük hayatın birçok alanında karşımıza çıkar:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Alışverişte indirim hesaplama</li>
              <li>Banka faizi ve kredi hesaplama</li>
              <li>Vergi oranları hesaplama</li>
              <li>Maaş zammı ve artış oranları</li>
              <li>Enflasyon ve fiyat değişimleri</li>
              <li>Bahşiş hesaplama</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
