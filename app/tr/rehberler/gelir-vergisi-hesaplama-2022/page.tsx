import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "2022 Gelir Vergisi Hesaplama | 2022 Vergi Dilimleri | Calculator360Pro",
  description:
    "2022 gelir vergisi hesaplama rehberi: kümülatif vergi matrahı, 2022 vergi dilimleri ve örnek hesap mantığı. Ücret gelirleri için genel çerçeve.",
  keywords: [
    "2022 gelir vergisi hesaplama",
    "gelir vergisi hesaplama 2022",
    "2022 vergi dilimleri",
    "gelir vergisi oranları 2022",
    "kümülatif vergi matrahı",
    "damga vergisi 2022",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    languages: {
      tr: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
      "x-default": `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    },
  },
  openGraph: {
    title: "2022 Gelir Vergisi Hesaplama",
    url: `${SITE_URL}/tr/rehberler/gelir-vergisi-hesaplama-2022`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    description:
      "2022 vergi dilimleriyle gelir vergisi hesaplama mantığını öğrenin ve örnek üzerinden anlayın.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Rehberler", path: "/tr/rehberler" },
  { name: "2022 Gelir Vergisi Hesaplama", path: "/tr/rehberler/gelir-vergisi-hesaplama-2022" },
];

export default function GelirVergisiHesaplama2022Page() {
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS as any);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/rehberler">Rehberler</Link> /{" "}
            <span className="text-[#1e293b] font-medium">2022 Gelir Vergisi Hesaplama</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">2022 Gelir Vergisi Hesaplama</h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            Bu rehber, 2022 yılı için gelir vergisi hesaplama mantığını ve vergi dilimlerini anlamanıza yardımcı olur.
            Resmi oranlar ve istisnalar gelir türüne göre değişebilir; bu yüzden her zaman kendi durumunuza uygun doğrulamayı öneririz.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Kümülatif Mantık Nedir?</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Ücret gelirlerinde (aylık bordro uygulamalarında) vergi genellikle yıl başından itibaren biriken matrah üzerinden
            dilime göre hesaplanır. Yani her ay, o ana kadar biriken gelir üzerinden “kümülatif” vergi yeniden değerlendirilir.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">2022 Vergi Dilimleri (Genel Çerçeve)</h2>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-4 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1e293b] text-white">
                    <th className="text-left py-2 px-3 font-semibold">Kümülatif Yıllık Gelir</th>
                    <th className="text-right py-2 px-3 font-semibold">Oran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">0 – 32.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%15</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">32.000 – 70.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%20</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">70.000 – 250.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%27</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-2 px-3 text-[#334155]">250.000 – 880.000 TL</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%35</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#334155]">880.000 TL ve üzeri</td>
                    <td className="py-2 px-3 text-right font-semibold text-[#2563eb]">%40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Adım Adım Hesaplama Mantığı</h2>
          <ol className="space-y-3 text-[#334155] list-decimal list-inside">
            <li>Yıl için brüt gelirinizi veya vergiye esas matrahınızı belirleyin.</li>
            <li>Kümülatif tutarı dilim aralıklarına göre değerlendirin.</li>
            <li>Dilim oranlarını uygularak toplam gelir vergisini kademeli şekilde hesaplayın.</li>
            <li>Gerekirse damga vergisi gibi ek kalemleri ayrıca kontrol edin.</li>
          </ol>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">İsterseniz Hesap Makinesini Kullanın (Güncel Yıl)</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Calculator360Pro’daki gelir vergisi hesap makinesi şu an 2026 yılı verilerini kullanır. 2022 için ise bu rehber
            “yıl odaklı” aramaları yanıtlamak amacıyla hazırlanmıştır.
          </p>
          <p className="mb-6">
            <Link
              href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Gelir Vergisi Hesap Makinesi (2026)
            </Link>
          </p>

          <div className="mt-10 bg-white border border-[#e2e8f0] rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">Kaynaklar ve Yazar Bilgisi</h2>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Yazar:</strong> Calculator360Pro Ekibi
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#334155]">
              <li>
                Resmi kaynak:{" "}
                <a
                  href="https://www.gib.gov.tr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2563eb] hover:underline"
                >
                  gib.gov.tr
                </a>
              </li>
              <li>Not: Dilim aralıkları gelir türüne göre uygulamada farklılaşabilir; kendi durumunuz için doğrulayın.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

