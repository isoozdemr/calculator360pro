import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "En İyi Konut Kredisi Hesap Makinesi 2026 | Calculator360Pro",
  description:
    "2026 için en iyi konut kredisi hesap makinesini nasıl seçersiniz? Taksit, amortisman çizelgesi ve toplam maliyet varsayımlarıyla karşılaştırın.",
  keywords: [
    "en iyi konut kredisi hesap makinesi 2026",
    "konut kredisi hesap makinesi",
    "taksit hesaplama",
    "amortisman çizelgesi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026`,
    languages: {
      en: `${SITE_URL}/guides/best-mortgage-calculator-2026`,
      tr: `${SITE_URL}/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026`,
      "x-default": `${SITE_URL}/guides/best-mortgage-calculator-2026`,
    },
  },
  openGraph: {
    title: "En İyi Konut Kredisi Hesap Makinesi 2026",
    url: `${SITE_URL}/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    description:
      "Taksit ve amortisman çizelgesiyle senaryoları karşılaştırın; toplam maliyet varsayımlarını anlayın.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Ana Sayfa", path: "/tr" },
  { name: "Rehberler", path: "/tr/rehberler" },
  { name: "En İyi Konut Kredisi Hesap Makinesi 2026", path: "/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026" },
];

export default function EnIyiKonutKredisiHesapMakinesi2026Page() {
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
            <Link href="/tr">Ana Sayfa</Link> /{" "}
            <Link href="/tr/rehberler">Rehberler</Link> /{" "}
            <span className="text-[#1e293b] font-medium">En İyi Konut Kredisi Hesap Makinesi 2026</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            En İyi Konut Kredisi Hesap Makinesi 2026
          </h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            “En iyi” konut kredisi hesap makinesi, taksit tutarını doğru hesaplamanın yanında amortisman çizelgesiyle
            borcun zaman içindeki dağılımını da görmenizi sağlar. Ayrıca toplam maliyet varsayımlarını anlamanıza yardımcı olmalıdır.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Nelere Bakmalısınız?</h2>
          <ul className="space-y-3 text-[#334155]">
            <li>
              <strong>Taksit (aylık) hesabı</strong>: Ana para + faiz mantığıyla tutarlı sonuçlar.
            </li>
            <li>
              <strong>Amortisman çizelgesi</strong>: Aylık faiz/ana para dağılımını görebilme.
            </li>
            <li>
              <strong>2026 güncel veri yaklaşımı</strong>: Ürün maliyetlerine göre güncellemeler (varsa).
            </li>
            <li>
              <strong>Senaryo karşılaştırma</strong>: Vade ve faiz oranını değiştirip nasıl etkilendiğini görmek.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Nasıl Karşılaştırılır?</h2>
          <ol className="space-y-3 text-[#334155] list-decimal list-inside">
            <li>Hesap makinesinin <strong>taksit</strong> ve <strong>amortisman</strong> çıkardığını kontrol edin.</li>
            <li>Vade değiştirildiğinde sonuçların tutarlı şekilde güncellenip güncellenmediğine bakın.</li>
            <li>Toplam maliyet yaklaşımını (ör. ek masraflar/varsayımlar) anlayın.</li>
            <li>Kendi girişlerinizle yeniden hesaplayarak senaryoları kıyaslayın.</li>
          </ol>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Calculator360Pro’yu Deneyin</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Aşağıdaki konut kredisi hesap makinesiyle vade, faiz oranı ve peşinat senaryolarını test edin. Çıktılarda
            aylık taksit, toplam faiz ve amortisman çizelgesi yer alır.
          </p>
          <p className="mb-8">
            <Link
              href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Konut Kredisi Hesap Makinesini Aç
            </Link>
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">İlgili Rehber</h2>
          <p className="text-[#334155] leading-relaxed">
            Öğrenim kredilerinde aylık ödeme mantığını anlamak için{" "}
            <Link href="/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir" className="text-[#2563eb] hover:underline">
              öğrenim kredisi aylık ödeme rehberimizi
            </Link>{" "}
            de inceleyin.
          </p>

          <div className="mt-12 bg-white border border-[#e2e8f0] rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">Kaynaklar ve Güncelleme</h2>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Yazar:</strong> Calculator360Pro Ekibi
            </p>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Son güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay}
            </p>
            <p className="text-sm text-[#64748b] mt-2">
              <strong className="text-[#1e293b]">Veri seti:</strong>{" "}
              <Link href="/tr/rehberler/2026-veri-kaynaklari" className="text-[#2563eb] hover:underline font-medium">
                2026 Veri Kaynakları ve Güncelleme
              </Link>
            </p>
            <ul className="mt-3 space-y-2 text-[#334155] text-sm">
              <li>
                Resmi kaynak:{" "}
                <a
                  href="https://www.tcmb.gov.tr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2563eb] hover:underline"
                >
                  tcmb.gov.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

