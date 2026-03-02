import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TR_CALCULATORS, TR_CATEGORY_PAGE_TITLES } from "@/lib/tr-calculators-nav";

const dateTimeCalculators = TR_CALCULATORS.filter((c) => c.category === "tarih-zaman").map((c) => ({
  name: c.name,
  slug: c.slug,
  description: c.description ?? "",
  icon: c.icon ?? "📅",
}));

export const metadata: Metadata = {
  title: "Tarih ve Zaman Hesap Makineleri - Yaş Hesaplama",
  description: "Tarih ve zaman hesap makineleri 2026: yaş hesaplama, tarih farkı, saat ve haftalık çalışma saati. İki tarih arası gün ve iş günü. Ücretsiz araçlar - hemen hesaplayın.",
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
      "x-default": `${SITE_URL}/calculators/date-time`,
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

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TR_CATEGORY_PAGE_TITLES["tarih-zaman"],
  description: "Ücretsiz tarih ve zaman hesap makineleri: Yaş hesaplama, gün hesaplama.",
  url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman`,
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: dateTimeCalculators.length,
    itemListElement: dateTimeCalculators.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "SoftwareApplication", name: calc.name, url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/${calc.slug}` },
    })),
  },
};

export default function TarihZamanKategorisiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
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

        {/* Açıklayıcı İçerik */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Tarih ve zaman hesaplamaları günlük hayatta sıkça karşımıza çıkıyor. Yaş hesaplama, 
              tarih farkı bulma, doğum gününe kalan süre gibi hesaplamalar resmi işlemlerden 
              kişisel planlamaya kadar geniş bir kullanım alanına sahip.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Yaş hesaplama, doğum tarihinden bugüne kadar geçen süreyi hesaplama işlemi. Yıl, ay, 
              hafta, gün olarak detaylı hesaplama yapılabiliyor. Resmi işlemler için tam yaş bilgisi 
              önemli. Emeklilik başvuruları, ehliyet yenileme gibi işlemlerde yaş bilgisi gerekli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Tarih farkı hesaplama, iki tarih arasındaki süreyi bulma işlemi. Gün, hafta, ay, yıl 
              olarak hesaplanabiliyor. Özel günlere kalan süreyi hesaplamak, planlama yapmak için 
              faydalı. Doğum günü, yıldönümü, tatil gibi özel günlere kalan süreyi bilmek önemli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Burç hesaplama, doğum tarihine göre burç belirleme işlemi. Türkiye'de yaygın olarak 
              kullanılan burç sistemi, doğum tarihine göre belirleniyor. Burç bilgisi, yaş hesaplama 
              ile birlikte gösterilebiliyor.
            </p>
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

        {/* FAQ Bölümü */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Yaş nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Yaş hesaplama için bugünün tarihinden doğum tarihini çıkarıyorsunuz. Yıl, ay, gün 
                olarak detaylı hesaplama yapılabiliyor. Artık yıllar da dikkate alınıyor.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Tarih farkı nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Tarih farkı hesaplama için büyük tarihten küçük tarihi çıkarıyorsunuz. Sonuç gün, 
                hafta, ay, yıl olarak gösterilebiliyor. Artık yıllar ve ay gün sayıları dikkate alınıyor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Burç nasıl belirlenir?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Burç, doğum tarihine göre belirleniyor. Her burç belirli tarih aralığına sahip. 
                Doğum tarihiniz hangi aralığa düşüyorsa o burç sizin burcunuz oluyor.
              </p>
            </div>
          </div>
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
    </>
  );
}
