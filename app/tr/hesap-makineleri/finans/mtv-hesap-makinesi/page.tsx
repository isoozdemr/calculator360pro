import { Metadata } from "next";
import { MTVHesaplama } from "@/components/calculators/tr/MTVHesaplama";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishBreadcrumbSchema, generateTurkishHowToSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { MTV_2026_SOURCE } from "@/lib/data/mtv-2026";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MTV Hesaplama 2026 | Motorlu Taşıt Vergisi - Motor Hacmi, Yaş",
  description: "Motorlu taşıt vergisi (MTV) hesaplama 2026. Araç yaşı ve motor hacmine göre yıllık MTV. Güncel mevzuat. 2018 öncesi tescilli araçlar için tahmini tutar. Ocak-Temmuz taksit. Ücretsiz hesapla.",
  keywords: [
    "MTV hesaplama",
    "motorlu taşıt vergisi hesaplama",
    "MTV 2026",
    "araç vergisi hesaplama",
    "MTV ne kadar",
    "motor hacmine göre MTV",
    "yaşa göre MTV",
    "2026 MTV oranları",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/mtv-hesap-makinesi`,
    languages: {
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/mtv-hesap-makinesi`,
      "x-default": `${SITE_URL}/tr/hesap-makineleri/finans/mtv-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "MTV Hesaplama 2026 - Motorlu Taşıt Vergisi",
    description: "Motor hacmi ve araç yaşına göre 2026 MTV. Ücretsiz hesapla.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/mtv-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "MTV ne kadar 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026 MTV tutarı motor hacmi (cm³) ve araç yaşına göre değişir. 2018 öncesi tescilli otomobiller için tarife Resmi Gazete ile belirlenir. Bu sitedeki hesap makinesi motor hacmi ve araç yaşını girerek yıllık tahmini MTV tutarını verir. 2018 sonrası tescilli araçlarda taşıt değeri (matrah) da kullanıldığı için resmi tutarı e-Devlet veya belediyenizden kontrol edin.",
      },
    },
    {
      "@type": "Question",
      name: "MTV nasıl hesaplanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MTV motor silindir hacmi (cc) ve aracın yaşına göre hesaplanır. Yaş grupları 1-3, 4-6, 7-11, 12-15, 16+ şeklindedir. Motor hacmi grupları 0-1300, 1301-1600, 1601-1800, 1801-2000 cc ve üzeri olarak ayrılır. 2018 sonrası tescilli araçlarda ayrıca taşıt değeri (matrah) dikkate alınır.",
      },
    },
    {
      "@type": "Question",
      name: "MTV ne zaman ödenir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Motorlu taşıt vergisi yılda iki eşit taksitte ödenir: Ocak ve Temmuz aylarında. Borç sorgulama ve ödeme işlemleri e-Devlet ve belediyeler üzerinden yapılabilir.",
      },
    },
  ],
};

const mtvHowToSteps = [
  { name: "Motor hacmini ve araç yaşını girin", text: "Aracınızın motor hacmini (cm³) ve yaşını seçin." },
  { name: "Hesapla", text: "Yıllık tahmini MTV tutarını görün." },
  { name: "Resmi borç için e-Devlet", text: "Resmi tutar için e-Devlet veya belediyenizi kullanın." },
];

export default function MTVHesapMakinesiPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/mtv-hesap-makinesi`;
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "MTV Hesap Makinesi", "mtv-hesap-makinesi");
  const howToSchema = generateTurkishHowToSchema(
    "MTV Hesap Makinesi Nasıl Kullanılır?",
    "Motor hacmi ve araç yaşına göre motorlu taşıt vergisi hesaplama adımları.",
    mtvHowToSteps,
    pageUrl
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MTV Hesap Makinesi 2026",
    description: "Motorlu taşıt vergisi hesaplama, motor hacmi ve araç yaşına göre",
    url: pageUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    inLanguage: "tr",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li><Link href="/tr" className="hover:text-[#2563eb] transition-colors">Ana Sayfa</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb] transition-colors">Hesap Makineleri</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb] transition-colors">Finans</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">MTV Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              MTV Hesaplama 2026 - Motorlu Taşıt Vergisi
            </h1>
            <p className="text-lg text-[#64748b]">
              Araç yaşı ve motor hacmine göre 2026 yıllık motorlu taşıt vergisi (MTV) tahmini. 2018 öncesi tescilli otomobiller için. Ücretsiz.
            </p>
          </div>

          <MTVHesaplama />
          <CalculatorDisclaimer category="finance" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Motorlu Taşıt Vergisi (MTV) Nedir?</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Motorlu taşıt vergisi, araç sahiplerinin her yıl ödediği bir vergidir. Tutar motor silindir hacmi (cm³) ve aracın yaşına göre belirlenir. 2026 tarifesi Cumhurbaşkanı Kararı ile Resmi Gazete&apos;de yayımlanır. 2018 öncesi tescilli otomobillerde sadece motor hacmi ve yaş kullanılır; 2018 sonrası tescilli araçlarda taşıt değeri (matrah) de hesaplamaya dahil edilir. Bu hesap makinesi 2018 öncesi tescilli araçlar için tahmini MTV verir. Resmi borç için e-Devlet veya belediyenizi kullanın. <Link href="/tr/hesap-makineleri/finans/emlak-vergisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Emlak vergisi hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link> ile diğer vergi araçlarımıza bakabilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">MTV Nasıl Hesaplanır?</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Motor hacmi grupları: 0-1300, 1301-1600, 1601-1800, 1801-2000 cm³ ve üzeri. Araç yaşı grupları: 1-3, 4-6, 7-11, 12-15, 16+ yıl. Aracınızın motor hacmini ve yaşını girerek bu sitedeki araçla yıllık tahmini MTV&apos;yi görebilirsiniz. MTV yılda iki eşit taksitte (Ocak ve Temmuz) ödenir.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">MTV ne kadar 2026?</h4>
                <p className="text-[#64748b] mt-1">Motor hacmi ve araç yaşına göre değişir. Bu hesap makinesi 2018 öncesi tescilli otomobiller için tahmini tutar verir. 2018 sonrası araçlarda matrah kullanıldığı için e-Devlet veya belediyenizden kontrol edin.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">MTV nasıl hesaplanır?</h4>
                <p className="text-[#64748b] mt-1">Motor hacmi (cc) ve araç yaşı gruplarına göre tarifeden tutar bulunur. Yaş grupları 1-3, 4-6, 7-11, 12-15, 16+; motor grupları 0-1300, 1301-1600 vb.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">MTV ne zaman ödenir?</h4>
                <p className="text-[#64748b] mt-1">Yılda iki taksit: Ocak ve Temmuz. Borç sorgulama ve ödeme e-Devlet ve belediyeler üzerinden yapılır.</p>
              </div>
            </div>
            <p className="text-xs text-[#64748b] mt-6">Kaynak: {MTV_2026_SOURCE}. Bu sayfa rehber niteliğindedir; resmi tutar için belediyenize veya e-Devlet&apos;e bakın.</p>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="mtv-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
