import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TR_CALCULATORS, TR_CATEGORY_PAGE_TITLES } from "@/lib/tr-calculators-nav";

const mathCalculators = TR_CALCULATORS.filter((c) => c.category === "matematik").map((c) => ({
  name: c.name,
  slug: c.slug,
  description: c.description ?? "",
  icon: c.icon ?? "🔢",
}));

export const metadata: Metadata = {
  title: "Matematik Hesap Makineleri - Yüzde, Kesir ve Daha Fazlası",
  description: "Matematik hesap makineleri 2026: yüzde, kesir, indirim, bilimsel hesap, birim çevirici. Günlük hayat ve iş için ücretsiz araçlar - hemen kullanın.",
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
      "x-default": `${SITE_URL}/calculators/math`,
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

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TR_CATEGORY_PAGE_TITLES.matematik,
  description: "Ücretsiz matematik hesap makineleri: Yüzde, kesir, oran hesaplama.",
  url: `${SITE_URL}/tr/hesap-makineleri/matematik`,
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: mathCalculators.length,
    itemListElement: mathCalculators.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "SoftwareApplication", name: calc.name, url: `${SITE_URL}/tr/hesap-makineleri/matematik/${calc.slug}` },
    })),
  },
};

export default function MatematikKategorisiPage() {
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

        {/* Açıklayıcı İçerik */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Matematik hesaplamaları günlük hayatın birçok alanında karşımıza çıkıyor. Yüzde hesaplama, 
              indirim hesaplama, artış oranı bulma gibi işlemler alışverişten iş yaşamına kadar geniş bir 
              kullanım alanına sahip.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Yüzde hesaplama, bir sayının başka bir sayının yüzde kaçı olduğunu bulma işlemi. Örneğin, 
              100 TL'nin yüzde 20'si 20 TL. Yüzde hesaplama, indirim hesaplama, faiz hesaplama, vergi 
              hesaplama gibi birçok alanda kullanılıyor.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Artış ve azalış oranları da yüzde hesaplama ile bulunuyor. Bir değerin önceki değere göre 
              yüzde kaç arttığını veya azaldığını hesaplamak için yüzde formülü kullanılıyor. Bu, fiyat 
              değişimlerini, büyüme oranlarını anlamak için önemli.
            </p>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              Matematik hesap makinelerimiz, günlük hayatta sıkça ihtiyaç duyulan hesaplamaları kolaylaştırıyor. 
              Tüm hesaplamalar doğru formüller kullanılarak yapılıyor. Sonuçlar anında gösteriliyor, detaylı 
              açıklamalar sunuluyor.
            </p>
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

        {/* FAQ Bölümü */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Yüzde nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Yüzde hesaplama için sayıyı 100'e bölüp yüzde oranıyla çarpıyorsunuz. Örneğin 1000 TL'nin 
                yüzde 15'i = 1000 × 15 / 100 = 150 TL. Veya daha basit: 1000 × 0.15 = 150 TL.
              </p>
            </div>
            <div className="border-b border-[#e2e8f0] pb-4">
              <h3 className="font-semibold text-[#1e293b] mb-2">
                İndirim hesaplama nasıl yapılır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                İndirim hesaplama için önce indirim tutarını buluyorsunuz, sonra orijinal fiyattan çıkarıyorsunuz. 
                Örneğin 500 TL'lik ürün yüzde 20 indirimli ise: İndirim = 500 × 0.20 = 100 TL, İndirimli fiyat = 500 - 100 = 400 TL.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e293b] mb-2">
                Artış oranı nasıl hesaplanır?
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Artış oranı için yeni değerden eski değeri çıkarıp eski değere bölüyorsunuz, sonra 100 ile çarpıyorsunuz. 
                Örneğin 100 TL'den 120 TL'ye çıkmışsa: (120 - 100) / 100 × 100 = yüzde 20 artış.
              </p>
            </div>
          </div>
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
    </>
  );
}
