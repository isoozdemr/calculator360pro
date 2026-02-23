import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SGK Emeklilik Yaş Tablosu | Calculator360Pro",
  description:
    "SGK emeklilik yaşı tablosu, prim günü şartları ve emeklilik koşulları. 1999 öncesi ve sonrası sigortalılar için emeklilik şartları.",
  keywords: [
    "sgk emeklilik",
    "emeklilik yaşı",
    "prim günü",
    "eyt",
    "emeklilik şartları",
    "sgk tablosu",
    "emeklilik tablosu",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
  },
  openGraph: {
    title: "SGK Emeklilik Yaş Tablosu | Calculator360Pro",
    description:
      "SGK emeklilik yaşı tablosu, prim günü şartları ve emeklilik koşulları.",
    url: `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
    locale: "tr_TR",
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SGK Emeklilik Yaş Tablosu",
      },
    ],
  },
};

export default function SGKEmeklilikTablosuPage() {
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
        "name": "SGK Emeklilik Tablosu",
        "item": `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SGK Emeklilik Yaş Tablosu",
    "description":
      "SGK emeklilik yaşı tablosu, prim günü şartları ve emeklilik koşulları.",
    "url": `${SITE_URL}/tr/rehberler/sgk-emeklilik-tablosu`,
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
            <li className="text-[#1e293b] font-medium">SGK Emeklilik Tablosu</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            SGK Emeklilik Yaş Tablosu
          </h1>
          <p className="text-lg text-[#64748b] leading-relaxed mb-4">
            SGK emeklilik yaşı, prim günü şartları ve sigortalılık süresi tablosu. 
            1999 öncesi ve sonrası sigortalılar için farklı şartlar geçerli.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Önemli:</strong> Bu tablo genel bilgilendirme amaçlıdır. Resmi bilgi için 
              SGK şubelerinden veya e-Devlet üzerinden bilgi alın. Emeklilik şartları kişisel 
              duruma göre değişebilir.
            </p>
          </div>
        </div>

        {/* EYT Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            EYT (Erken Yaşlananlar Yasası) - 8 Eylül 1999 Öncesi Sigortalılar
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Cinsiyet
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Yaş Şartı
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Prim Günü
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Sigortalılık Süresi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">Kadın</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">50 yaş (veya yaş şartı yok)</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">5.000 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">20 yıl</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">Erkek</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">50 yaş (veya yaş şartı yok)</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">5.000 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#64748b] text-sm">
            <strong>Not:</strong> 8 Eylül 1999 tarihinden önce sigortalı olanlar EYT şartlarından yararlanır. 
            Yaş şartı olmadan da emeklilik mümkün (25 yıl sigortalılık şartı ile).
          </p>
        </div>

        {/* 1999 Sonrası Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            8 Eylül 1999 Sonrası Sigortalılar
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Doğum Yılı
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Kadın Yaş
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Erkek Yaş
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Prim Günü
                  </th>
                  <th className="border border-[#e2e8f0] p-3 text-left text-[#1e293b] font-semibold">
                    Sigortalılık Süresi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">1960-1965</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">58</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">60</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">7.200 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">1966-1970</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">59</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">61</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">7.200 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
                <tr>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">1971-1975</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">60</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">62</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">7.200 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">1976-1980</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">61</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">63</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">7.200 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
                <tr>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">1981 ve sonrası</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">62</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">64</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">7.200 gün</td>
                  <td className="border border-[#e2e8f0] p-3 text-[#64748b]">25 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#64748b] text-sm">
            <strong>Not:</strong> 8 Eylül 1999 sonrası sigortalı olanlar için yaş şartı doğum yılına göre 
            kademeli olarak artıyor. Prim günü şartı 7.200 gün, sigortalılık süresi 25 yıl.
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Önemli Notlar
          </h2>
          <div className="space-y-4 text-[#64748b]">
            <p>
              <strong className="text-[#1e293b]">Prim Günü:</strong> Sigortalı olarak çalıştığınız her gün 
              için bir gün sayılıyor. Aylık çalışma genellikle 30 gün olarak hesaplanıyor.
            </p>
            <p>
              <strong className="text-[#1e293b]">Askerlik:</strong> Askerlik süresi prim günü olarak sayılıyor. 
              Bu, erkek çalışanlar için önemli bir avantaj.
            </p>
            <p>
              <strong className="text-[#1e293b]">Doğum İzni:</strong> Doğum izni süresi prim günü olarak sayılıyor. 
              Bu, kadın çalışanlar için önemli bir avantaj.
            </p>
            <p>
              <strong className="text-[#1e293b]">Eksik Prim:</strong> Eksik prim günlerinizi tamamlamak için 
              SGK'ya başvurarak eksik prim günlerinizi ödeyebilirsiniz.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            İlgili Hesap Makineleri ve Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">Emeklilik Hesap Makinesi</h3>
              <p className="text-sm text-[#64748b]">
                SGK emeklilik yaşı, prim gün sayısı ve emeklilik tarihi hesaplama
              </p>
            </Link>
            <Link
              href="/tr/blog/eyt-nedir-kimler-faydalanabilir"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">EYT Nedir? Kimler Faydalanabilir?</h3>
              <p className="text-sm text-[#64748b]">
                EYT kapsamında emeklilik şartları ve avantajları
              </p>
            </Link>
            <Link
              href="/tr/blog/sgk-prim-gunu-hesaplama-emeklilik-icin-kac-gun-gerekli"
              className="block p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-semibold text-[#1e293b] mb-2">SGK Prim Günü Hesaplama</h3>
              <p className="text-sm text-[#64748b]">
                Prim günü nedir, nasıl hesaplanır ve emeklilik için kaç gün gerekli
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
