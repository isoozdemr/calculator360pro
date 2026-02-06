import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "2026 Vergi Takvimi | Calculator360Pro",
  description:
    "2026 yılı vergi takvimi, ödeme tarihleri ve beyanname süreleri. Gelir vergisi, KDV, stopaj ve diğer vergi ödeme tarihleri.",
  keywords: [
    "vergi takvimi",
    "2026 vergi takvimi",
    "vergi ödeme tarihleri",
    "beyanname tarihleri",
    "kdv beyannamesi",
    "stopaj beyannamesi",
    "vergi takvimi 2026",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
    languages: {
      en: `${SITE_URL}/guides/tax-calendar-2026-usa`,
      tr: `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
      "x-default": `${SITE_URL}/guides/tax-calendar-2026-usa`,
    },
  },
  openGraph: {
    title: "2026 Vergi Takvimi | Calculator360Pro",
    description:
      "2026 yılı vergi takvimi, ödeme tarihleri ve beyanname süreleri.",
    url: `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
    locale: "tr_TR",
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "2026 Vergi Takvimi",
      },
    ],
  },
};

const taxCalendar = [
  {
    month: "Ocak",
    dates: [
      { date: "15 Ocak", description: "Aralık ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Ocak", description: "Aralık ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Şubat",
    dates: [
      { date: "15 Şubat", description: "Ocak ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Şubat", description: "Ocak ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Mart",
    dates: [
      { date: "15 Mart", description: "Şubat ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Mart", description: "Şubat ayı stopaj beyannamesi ve ödemesi" },
      { date: "31 Mart", description: "Yıllık gelir vergisi beyannamesi (ücretliler için)" },
    ],
  },
  {
    month: "Nisan",
    dates: [
      { date: "15 Nisan", description: "Mart ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Nisan", description: "Mart ayı stopaj beyannamesi ve ödemesi" },
      { date: "30 Nisan", description: "Yıllık gelir vergisi beyannamesi (serbest meslek, ticari kazanç)" },
    ],
  },
  {
    month: "Mayıs",
    dates: [
      { date: "15 Mayıs", description: "Nisan ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Mayıs", description: "Nisan ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Haziran",
    dates: [
      { date: "15 Haziran", description: "Mayıs ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Haziran", description: "Mayıs ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Temmuz",
    dates: [
      { date: "15 Temmuz", description: "Haziran ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Temmuz", description: "Haziran ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Ağustos",
    dates: [
      { date: "15 Ağustos", description: "Temmuz ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Ağustos", description: "Temmuz ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Eylül",
    dates: [
      { date: "15 Eylül", description: "Ağustos ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Eylül", description: "Ağustos ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Ekim",
    dates: [
      { date: "15 Ekim", description: "Eylül ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Ekim", description: "Eylül ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Kasım",
    dates: [
      { date: "15 Kasım", description: "Ekim ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Kasım", description: "Ekim ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
  {
    month: "Aralık",
    dates: [
      { date: "15 Aralık", description: "Kasım ayı KDV beyannamesi ve ödemesi" },
      { date: "26 Aralık", description: "Kasım ayı stopaj beyannamesi ve ödemesi" },
    ],
  },
];

export default function VergiTakvimi2026Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": `${SITE_URL}/tr`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rehberler",
        "item": `${SITE_URL}/tr/rehberler`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "2026 Vergi Takvimi",
        "item": `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "2026 Vergi Takvimi",
    "description":
      "2026 yılı vergi takvimi, ödeme tarihleri ve beyanname süreleri.",
    "url": `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
    "inLanguage": "tr-TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
            <li>
              <Link href="/tr" className="hover:text-[#2563eb] transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li>
              <Link href="/tr/rehberler" className="hover:text-[#2563eb] transition-colors">
                Rehberler
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="text-[#1e293b] font-medium">2026 Vergi Takvimi</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            2026 Vergi Takvimi
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed mb-4">
            2026 yılı vergi ödeme tarihleri ve beyanname süreleri. KDV, stopaj, gelir vergisi 
            ve diğer vergi türleri için önemli tarihler.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Önemli:</strong> Bu takvim genel bilgilendirme amaçlıdır. Resmi tarihler 
              için Gelir İdaresi Başkanlığı'nın (gib.gov.tr) resmi web sitesini kontrol edin. 
              Tarihler değişebilir.
            </p>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="space-y-8">
            {taxCalendar.map((month, index) => (
              <div key={index} className="border-b border-[#e2e8f0] pb-6 last:border-b-0 last:pb-0">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-4">{month.month}</h2>
                <div className="space-y-3">
                  {month.dates.map((item, dateIndex) => (
                    <div
                      key={dateIndex}
                      className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-[#f8fafc] rounded-lg"
                    >
                      <span className="font-semibold text-[#1e293b] min-w-[120px]">
                        {item.date}
                      </span>
                      <span className="text-[#64748b]">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Önemli Notlar
          </h2>
          <div className="space-y-4 text-[#64748b]">
            <p>
              <strong className="text-[#1e293b]">Ücretliler:</strong> Genellikle gelir vergisi 
              stopaj yoluyla tahsil edilir. İşvereniniz maaştan vergiyi kesip vergi dairesine yatırır. 
              Yıllık beyanname genellikle gerekmez.
            </p>
            <p>
              <strong className="text-[#1e293b]">Serbest Meslek Erbabı:</strong> Yıllık gelir vergisi 
              beyannamesi 30 Nisan'a kadar verilir. Geçici vergi ödemeleri de yapılabilir.
            </p>
            <p>
              <strong className="text-[#1e293b]">KDV Mükellefleri:</strong> Aylık KDV beyannamesi 
              ayın 15'ine kadar verilir ve ödeme yapılır.
            </p>
            <p>
              <strong className="text-[#1e293b]">Stopaj:</strong> Stopaj beyannamesi ayın 26'sına 
              kadar verilir ve ödeme yapılır.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Hesap Makineleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Vergi Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                2026 gelir vergisi dilimleri ile vergi hesaplama
              </p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Maaş Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                Brüt-net maaş hesaplama, vergi kesintileri dahil
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
