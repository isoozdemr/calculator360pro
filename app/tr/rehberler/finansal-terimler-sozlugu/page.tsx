import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Finansal Terimler Sözlüğü | Calculator360Pro",
  description:
    "Finansal terimler sözlüğü: Vergi, SGK, kredi, emeklilik ve diğer finansal kavramların açıklamaları. Türkiye'ye özel finansal terimler rehberi.",
  keywords: [
    "finansal terimler",
    "vergi terimleri",
    "sgk terimleri",
    "kredi terimleri",
    "emeklilik terimleri",
    "finans sözlüğü",
    "mali terimler",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
    languages: {
      "tr": `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
    },
  },
  openGraph: {
    title: "Finansal Terimler Sözlüğü | Calculator360Pro",
    description:
      "Finansal terimler sözlüğü: Vergi, SGK, kredi, emeklilik ve diğer finansal kavramların açıklamaları.",
    url: `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
    locale: "tr_TR",
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Finansal Terimler Sözlüğü",
      },
    ],
  },
};

const financialTerms = [
  {
    term: "Brüt Maaş",
    definition:
      "İşverenin çalışana ödediği toplam tutar. Bu tutardan SGK kesintileri, gelir vergisi, damga vergisi gibi kesintiler yapılarak net maaş hesaplanır.",
  },
  {
    term: "Net Maaş",
    definition:
      "Brüt maaştan tüm kesintiler (SGK, vergi, damga vergisi vb.) düşüldükten sonra elinize geçen tutar.",
  },
  {
    term: "SGK İşçi Payı",
    definition:
      "Sosyal Güvenlik Kurumu işçi payı, brüt maaşın yüzde 14'ü kadar. İşsizlik sigortası işçi payı yüzde 1 ile birlikte toplam yüzde 15 kesinti yapılır.",
  },
  {
    term: "Gelir Vergisi",
    definition:
      "Ücret geliri üzerinden alınan vergi. Kademeli sistem ile hesaplanır. 2026 yılı için vergi dilimleri yüzde 15 ile yüzde 40 arasında değişiyor.",
  },
  {
    term: "AGİ (Asgari Geçim İndirimi)",
    definition:
      "Gelir vergisinden düşülen bir indirim. Medeni durum ve çocuk sayısına göre değişir. 2026 yılında bekar çalışanlar için 2.500 TL.",
  },
  {
    term: "KKDF (Kaynak Kullanımını Destekleme Fonu)",
    definition:
      "Tüketici kredilerinde uygulanan yüzde 15 oranında bir kesinti. Kredi faizi üzerinden hesaplanır ve toplam kredi maliyetini artırır.",
  },
  {
    term: "BSMV (Banka ve Sigorta Muameleleri Vergisi)",
    definition:
      "Kredi faizi üzerinden alınan yüzde 10 oranında vergi. KKDF ile birlikte kredi maliyetini artırır.",
  },
  {
    term: "EYT (Erken Yaşlananlar Yasası)",
    definition:
      "8 Eylül 1999 öncesi sigortalı olanların emeklilik şartlarını düzenleyen yasa. Bu tarihten önce sigortalı olanlar daha esnek emeklilik şartlarından yararlanır.",
  },
  {
    term: "Prim Günü",
    definition:
      "Sigortalı olarak çalıştığınız her gün için bir gün sayılıyor. Emeklilik için gereken prim günü sayısı sigorta başlangıç tarihine göre değişiyor.",
  },
  {
    term: "BES (Bireysel Emeklilik Sistemi)",
    definition:
      "Çalışanların emeklilik için birikim yapmasını sağlayan sistem. Devlet katkısı yüzde 25 oranında. Yıllık 30.000 TL'ye kadar katkı için geçerli.",
  },
  {
    term: "Vergi Matrahı",
    definition:
      "Vergilendirilecek gelir. Brüt maaştan SGK kesintileri düşüldükten sonra kalan tutar. Bu tutar üzerinden gelir vergisi hesaplanır.",
  },
  {
    term: "Kümülatif Vergi Matrahı",
    definition:
      "Yılın başından itibaren toplam vergilendirilecek gelir. Her ay maaşınız bu matraha eklenir ve vergi dilimi buna göre belirlenir.",
  },
  {
    term: "Efektif Vergi Oranı",
    definition:
      "Toplam gelirin yüzde kaçının vergi olarak ödendiğini gösteren oran. Kademeli sistem nedeniyle marjinal vergi oranından düşük olur.",
  },
  {
    term: "Marjinal Vergi Oranı",
    definition:
      "Son kazandığınız gelirin yüzde kaçının vergilendirildiğini gösteren oran. En yüksek vergi dilimindeki oran.",
  },
];

export default function FinansalTerimlerSozluguPage() {
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
        "name": "Finansal Terimler Sözlüğü",
        "item": `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Finansal Terimler Sözlüğü",
    "description":
      "Finansal terimler sözlüğü: Vergi, SGK, kredi, emeklilik ve diğer finansal kavramların açıklamaları.",
    "url": `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
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
            <li className="text-[#1e293b] font-medium">Finansal Terimler Sözlüğü</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            Finansal Terimler Sözlüğü
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed">
            Finansal hesaplamalarda sıkça karşılaştığınız terimlerin açıklamaları. 
            Türkiye'ye özel finansal kavramlar ve mevzuat terimleri.
          </p>
        </div>

        {/* Terms List */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <div className="space-y-6">
            {financialTerms.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#e2e8f0] pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-semibold text-[#1e293b] mb-2">
                  {item.term}
                </h2>
                <p className="text-[#64748b] leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mt-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Hesap Makineleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Maaş Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                Brüt-net maaş hesaplama, SGK, AGİ, vergi dahil
              </p>
            </Link>
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
              href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Emeklilik Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                SGK emeklilik yaşı, prim gün sayısı hesaplama
              </p>
            </Link>
            <Link
              href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Kredi Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                İhtiyaç kredisi hesaplama, KKDF ve BSMV dahil
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
