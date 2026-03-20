import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "2026 Veri Kaynakları ve Güncelleme | Calculator360Pro",
  description:
    "Calculator360Pro’da kullanılan Türkiye 2026 özel verilerin güncelleme zamanı ve resmi kaynak bağlantıları (gib.gov.tr, sgk.gov.tr, csgb.gov.tr, tcmb.gov.tr).",
  keywords: ["2026 veri kaynakları", "güncelleme", "gib.gov.tr", "sgk.gov.tr", "tcmb.gov.tr", "csgb.gov.tr"],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/2026-veri-kaynaklari`,
    languages: {
      tr: `${SITE_URL}/tr/rehberler/2026-veri-kaynaklari`,
      "x-default": `${SITE_URL}/tr/rehberler/2026-veri-kaynaklari`,
    },
  },
  openGraph: {
    title: "2026 Veri Kaynakları ve Güncelleme",
    url: `${SITE_URL}/tr/rehberler/2026-veri-kaynaklari`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    description: "2026 veri seti kaynakları ve güncelleme özeti.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Rehberler", path: "/tr/rehberler" },
  { name: "2026 Veri Kaynakları ve Güncelleme", path: "/tr/rehberler/2026-veri-kaynaklari" },
];

export default function VeriKaynaklari2026Page() {
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
            <span className="text-[#1e293b] font-medium">2026 Veri Kaynakları</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">2026 Veri Kaynakları ve Güncelleme</h1>
          <p className="text-lg text-[#64748b] mb-6 leading-relaxed">
            Calculator360Pro’daki Türkiye 2026 hesap makineleri, merkezi bir veri kaynağı üzerinden güncellenir. Bu sayfa
            veri setinin güncelleme bilgisini ve resmi kaynakları linkli şekilde sunar.
          </p>

          <div className="bg-white border border-[#e2e8f0] rounded-lg p-4 mb-8">
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay}
            </p>
            <p className="text-xs text-[#64748b] mt-2">
              <strong className="text-[#1e293b]">Yazar:</strong> Calculator360Pro Ekibi
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Resmi Kaynaklar</h2>
          <ul className="space-y-3 text-[#334155]">
            <li>
              <strong>Gelir İdaresi Başkanlığı (GİB):</strong>{" "}
              <a href="https://www.gib.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                gib.gov.tr
              </a>
            </li>
            <li>
              <strong>SGK:</strong>{" "}
              <a href="https://www.sgk.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                sgk.gov.tr
              </a>
            </li>
            <li>
              <strong>Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB):</strong>{" "}
              <a href="https://www.csgb.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                csgb.gov.tr
              </a>
            </li>
            <li>
              <strong>TCMB:</strong>{" "}
              <a href="https://www.tcmb.gov.tr" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                tcmb.gov.tr
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Bu Sayfayı Nasıl Kullanabilirsiniz?</h2>
          <p className="text-[#334155] leading-relaxed">
            Link building ve kaynak gösterimi için bu sayfayı “2026 veri kaynakları” referansı olarak kullanabilirsiniz.
            Güncellemeler periyodik olarak yapıldığından, dış bağlantılarda bu sayfanın adresini tercih edin.
          </p>
        </div>
      </div>
    </>
  );
}

