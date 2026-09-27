import { Metadata } from "next";
import Link from "next/link";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { KidemTazminatiHesaplama } from "@/components/calculators/tr/KidemTazminatiHesaplama";
import { generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";

const SLUG = "kidem-tazminati-hesap-makinesi";
const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/${SLUG}`;

export const metadata: Metadata = {
  title: "Kıdem Tazminatı Hesaplama 2026 | Güncel Tavan ve İhbar Tazminatı",
  description:
    "Kıdem tazminatı hesaplama 2026: işe giriş-çıkış tarihi ve brüt maaşla net kıdem ve ihbar tazminatınızı hesaplayın. Temmuz 2026 tavanı 73.729,87 TL. Ücretsiz.",
  keywords: [
    "kıdem tazminatı hesaplama",
    "kıdem tazminatı hesaplama 2026",
    "kıdem tazminatı tavanı 2026",
    "ihbar tazminatı hesaplama",
    "kıdem tazminatı nasıl hesaplanır",
    "net kıdem tazminatı",
  ],
  alternates: {
    canonical: pageUrl,
    languages: { tr: pageUrl, "x-default": pageUrl },
  },
  openGraph: {
    title: "Kıdem Tazminatı Hesaplama 2026",
    description: "Net kıdem ve ihbar tazminatınızı 2026 tavanıyla hesaplayın.",
    url: pageUrl,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  {
    q: "2026 kıdem tazminatı tavanı ne kadar?",
    a: "Kıdem tazminatı tavanı 1 Ocak – 30 Haziran 2026 döneminde 64.948,77 TL, 1 Temmuz – 31 Aralık 2026 döneminde 73.729,87 TL'dir. Tavan, işten çıkış tarihindeki tutara göre uygulanır.",
  },
  {
    q: "Kıdem tazminatı nasıl hesaplanır?",
    a: "Giydirilmiş son brüt ücret (tavanı aşamaz) × toplam çalışma yılı formülü uygulanır. Artık aylar ve günler oranlanarak eklenir. Tutardan yalnızca %0,759 damga vergisi kesilir; gelir vergisi ve SGK primi kesilmez.",
  },
  {
    q: "Kıdem tazminatı almak için kaç yıl çalışmak gerekir?",
    a: "Aynı işverene bağlı olarak en az 1 yıl çalışmış olmak gerekir. Ayrıca işçinin haklı bir nedenle ayrılması, işverence haksız çıkarılması, emeklilik, askerlik, evlilik (kadın işçi, 1 yıl içinde) gibi kanuni hallerden birinin gerçekleşmesi şarttır. Kendi isteğiyle istifa eden işçi kural olarak kıdem tazminatı alamaz.",
  },
  {
    q: "İhbar tazminatı kaç haftalık ödenir?",
    a: "İş Kanunu 17. maddeye göre: 6 aydan az çalışmada 2 hafta, 6 ay – 1,5 yıl arası 4 hafta, 1,5 – 3 yıl arası 6 hafta, 3 yıldan fazla çalışmada 8 haftalık brüt ücret tutarındadır. İhbar tazminatından gelir vergisi ve damga vergisi kesilir.",
  },
  {
    q: "Giydirilmiş brüt ücret nedir?",
    a: "Çıplak brüt maaşa; yol, yemek, düzenli ikramiye, prim gibi süreklilik arz eden para ve parayla ölçülebilen menfaatlerin eklenmesiyle bulunan ücrettir. Kıdem tazminatı bu ücret üzerinden hesaplanır.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kıdem Tazminatı Hesap Makinesi 2026",
  url: pageUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  inLanguage: "tr",
};

export default function KidemTazminatiPage() {
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Kıdem Tazminatı Hesap Makinesi", SLUG);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">Hesap Makineleri</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb]">Finans</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">Kıdem Tazminatı</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Kıdem Tazminatı Hesaplama 2026</h1>
            <p className="text-lg text-[#64748b]">
              İşe giriş ve çıkış tarihinizi, son brüt maaşınızı girin; 2026 tavanına göre net kıdem tazminatınızı ve brüt ihbar tazminatınızı anında görün.
            </p>
          </div>

          <KidemTazminatiHesaplama />

          <div className="mt-8">
            <CalculatorDisclaimer category="finance" locale="tr" />
          </div>

          <div className="mt-12 max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Kıdem Tazminatı Nasıl Hesaplanır?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Kıdem tazminatı, her tam çalışma yılı için <strong>30 günlük giydirilmiş brüt ücret</strong> tutarında ödenir. Bir yıldan artan süreler (ay ve gün) aynı oranla hesaba eklenir. Hesapta kullanılacak aylık ücret, işten çıkış tarihindeki kıdem tazminatı tavanını geçemez.
            </p>
            <div className="bg-white border-2 border-[#e2e8f0] rounded-lg p-4 mb-4 text-[#1e293b]">
              <strong>Formül:</strong> Kıdem tazminatı = min(giydirilmiş brüt ücret, tavan) × çalışma yılı − damga vergisi (%0,759)
            </div>
            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Örnek Hesaplama</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              1 Mart 2020&apos;de işe başlayıp 1 Eylül 2026&apos;da işten çıkarılan, giydirilmiş brüt ücreti 50.000 TL olan bir çalışan 6 yıl 6 ay çalışmıştır. 50.000 × 6,5 = 325.000 TL brüt kıdem tazminatı; damga vergisi 2.466,75 TL düşüldüğünde net tutar <strong>322.533,25 TL</strong> olur. Aynı çalışana 3 yılı aştığı için 8 haftalık (56 gün) ihbar tazminatı da ödenir: 50.000 / 30 × 56 ≈ 93.333 TL brüt.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">2026 Kıdem Tazminatı Tavanı</h3>
            <table className="w-full text-sm text-left border border-[#e2e8f0] bg-white mb-4">
              <thead className="bg-[#f1f5f9]"><tr><th className="p-2">Dönem</th><th className="p-2">Tavan (brüt)</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="p-2">01.07.2026 – 31.12.2026</td><td className="p-2">73.729,87 TL</td></tr>
                <tr className="border-t"><td className="p-2">01.01.2026 – 30.06.2026</td><td className="p-2">64.948,77 TL</td></tr>
                <tr className="border-t"><td className="p-2">01.07.2025 – 31.12.2025</td><td className="p-2">53.919,68 TL</td></tr>
                <tr className="border-t"><td className="p-2">01.01.2025 – 30.06.2025</td><td className="p-2">46.655,43 TL</td></tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">İhbar Süreleri</h3>
            <ul className="list-disc pl-6 text-[#64748b] space-y-1 mb-4">
              <li>6 aydan az: 2 hafta</li>
              <li>6 ay – 1,5 yıl: 4 hafta</li>
              <li>1,5 yıl – 3 yıl: 6 hafta</li>
              <li>3 yıldan fazla: 8 hafta</li>
            </ul>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Brüt maaşınızın net karşılığını görmek için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesini</Link>, emeklilik şartlarınız için <Link href="/tr/hesap-makineleri/finans/prim-gunu-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">prim günü hesap makinesini</Link> kullanabilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[#1e293b]">{f.q}</h3>
                  <p className="text-[#64748b] mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug={SLUG} maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
