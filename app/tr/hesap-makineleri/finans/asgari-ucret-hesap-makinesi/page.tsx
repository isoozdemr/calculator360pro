import { Metadata } from "next";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishBreadcrumbSchema, generateTurkishHowToSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { MINIMUM_WAGE_2026, DATA_VERSION } from "@/lib/data/turkey-2026-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asgari Ücret Hesaplama 2026 | Net ve Brüt - SGK, Vergi Dahil",
  description: "2026 asgari ücret hesaplama. Net ve brüt tutar, SGK işçi payı, işsizlik sigortası ve vergi kesintileri. Güncel mevzuat, bekar çalışan. Gelir ve damga vergisi muafiyeti. Ücretsiz hesapla.",
  keywords: [
    "asgari ücret 2026",
    "net asgari ücret 2026",
    "asgari ücret hesaplama",
    "brüt asgari ücret",
    "SGK asgari ücret kesintisi",
    "asgari ücret vergi",
    "2026 asgari ücret ne kadar",
    "asgari ücret net hesaplama",
    "asgari ücret bordro",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi`,
    languages: {
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi`,
      "x-default": `${SITE_URL}/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Asgari Ücret Hesaplama 2026 - Net ve Brüt",
    description: "2026 net ve brüt asgari ücret, SGK kesintileri. Ücretsiz.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi`,
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
      name: "2026 asgari ücret ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `2026 yılı brüt asgari ücret ${MINIMUM_WAGE_2026.gross.toLocaleString("tr-TR")} TL, net asgari ücret (bekar, SGK işçi kesintileri sonrası) ${MINIMUM_WAGE_2026.net.toLocaleString("tr-TR")} TL'dir. Kesintiler: SGK işçi payı ${MINIMUM_WAGE_2026.deductions.sgkWorker.toLocaleString("tr-TR")} TL, işsizlik sigortası işçi payı ${MINIMUM_WAGE_2026.deductions.unemploymentWorker.toLocaleString("tr-TR")} TL. Asgari ücret gelir vergisi ve damga vergisinden muaf olduğu için bu kalemler 0 TL'dir.`,
      },
    },
    {
      "@type": "Question",
      name: "Asgari ücretten ne kesilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asgari ücretten SGK işçi payı (%14) ve işsizlik sigortası işçi payı (%1) kesilir. Gelir vergisi ve damga vergisi asgari ücrette uygulanmaz (muaf). İşveren ayrıca SGK işveren payı ve işsizlik işveren payı öder; bu tutarlar çalışanın eline geçen net ücreti etkilemez.",
      },
    },
    {
      "@type": "Question",
      name: "Net asgari ücret nasıl hesaplanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brüt asgari ücretten SGK işçi payı (%14) ve işsizlik sigortası işçi payı (%1) düşülür. Asgari ücret gelir vergisi ve damga vergisinden muaf olduğu için net = brüt - SGK işçi - işsizlik işçi. Farklı brüt tutarlar için maaş hesap makinesi kullanabilirsiniz.",
      },
    },
  ],
};

const asgariHowToSteps = [
  { name: "Sayfayı inceleyin", text: "2026 brüt ve net asgari ücret tutarlarını ve kesinti detaylarını görün." },
  { name: "Kesintileri kontrol edin", text: "SGK işçi payı, işsizlik sigortası ve vergi muafiyetlerini inceleyin." },
  { name: "Farklı brüt için maaş hesabı", text: "Farklı brüt maaşlar için maaş hesap makinesi linkini kullanın." },
];

export default function AsgariUcretPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/asgari-ucret-hesap-makinesi`;
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Asgari Ücret Hesap Makinesi", "asgari-ucret-hesap-makinesi");
  const howToSchema = generateTurkishHowToSchema(
    "Asgari Ücret Hesap Makinesi Nasıl Kullanılır?",
    "2026 brüt ve net asgari ücret, SGK ve vergi kesintilerini görüntüleme.",
    asgariHowToSteps,
    pageUrl
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Asgari Ücret Hesap Makinesi 2026",
    description: "2026 brüt ve net asgari ücret, SGK ve vergi kesintileri",
    url: pageUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    inLanguage: "tr",
    dateModified: DATA_VERSION.lastUpdated,
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
              <li className="text-[#1e293b] font-medium">Asgari Ücret Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Asgari Ücret Hesaplama 2026
            </h1>
            <p className="text-lg text-[#64748b]">
              {DATA_VERSION.lastUpdatedDisplay} güncel brüt ve net asgari ücret, SGK işçi payı ve vergi kesintileri. Ücretsiz.
            </p>
          </div>

          <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 mb-8">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">2026 Asgari Ücret (Bekar)</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[#64748b]">Brüt asgari ücret</p>
                <p className="text-2xl font-bold text-[#10b981]">{MINIMUM_WAGE_2026.gross.toLocaleString("tr-TR")} TL</p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Net asgari ücret (eline geçen)</p>
                <p className="text-2xl font-bold text-[#10b981]">{MINIMUM_WAGE_2026.net.toLocaleString("tr-TR")} TL</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
              <p className="text-sm font-medium text-[#1e293b] mb-2">Kesintiler (aylık)</p>
              <ul className="text-sm text-[#64748b] space-y-1">
                <li>SGK işçi payı (%14): {MINIMUM_WAGE_2026.deductions.sgkWorker.toLocaleString("tr-TR")} TL</li>
                <li>İşsizlik sigortası işçi payı (%1): {MINIMUM_WAGE_2026.deductions.unemploymentWorker.toLocaleString("tr-TR")} TL</li>
                <li>Gelir vergisi: {MINIMUM_WAGE_2026.deductions.incomeTax.toLocaleString("tr-TR")} TL (asgari ücret muaf)</li>
                <li>Damga vergisi: {MINIMUM_WAGE_2026.deductions.stampTax.toLocaleString("tr-TR")} TL (asgari ücret muaf)</li>
              </ul>
            </div>
            <p className="text-xs text-[#64748b] mt-4">Kaynak: {DATA_VERSION.sources.minimumWage}. Veriler {DATA_VERSION.lastUpdatedDisplay} itibarıyladır.</p>
          </div>

          <CalculatorDisclaimer category="finance" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">2026 Asgari Ücret ve Kesintiler</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Türkiye&apos;de asgari ücret her yıl Asgari Ücret Tespit Komisyonu tarafından belirlenir ve Resmi Gazete&apos;de yayımlanır. 2026 yılı brüt asgari ücret <strong>{MINIMUM_WAGE_2026.gross.toLocaleString("tr-TR")} TL</strong>, net asgari ücret (bekar çalışan, SGK ve işsizlik kesintileri sonrası) <strong>{MINIMUM_WAGE_2026.net.toLocaleString("tr-TR")} TL</strong>&apos;dir. Asgari ücret gelir vergisi ve damga vergisinden muaf olduğu için bu kalemler 0 TL&apos;dir. Farklı brüt maaşlar için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> kullanabilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">SGK ve İşsizlik Kesintileri</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Ücretten işçi adına SGK primi (%14) ve işsizlik sigortası işçi payı (%1) kesilir. İşveren ayrıca SGK işveren payı (%20,5) ve işsizlik işveren payı (%2) öder; toplam işveren maliyeti 2026&apos;da brüt asgari ücret + işveren payları ile yaklaşık {MINIMUM_WAGE_2026.employerCost.total.toLocaleString("tr-TR")} TL civarındadır.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">2026 asgari ücret ne kadar?</h4>
                <p className="text-[#64748b] mt-1">Brüt {MINIMUM_WAGE_2026.gross.toLocaleString("tr-TR")} TL, net (bekar) {MINIMUM_WAGE_2026.net.toLocaleString("tr-TR")} TL. Kesintiler: SGK işçi ve işsizlik işçi payı; gelir ve damga vergisi asgari ücrette 0 TL.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Asgari ücretten ne kesilir?</h4>
                <p className="text-[#64748b] mt-1">SGK işçi payı (%14) ve işsizlik sigortası işçi payı (%1). Gelir vergisi ve damga vergisi asgari ücrette uygulanmaz.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Net asgari ücret nasıl hesaplanır?</h4>
                <p className="text-[#64748b] mt-1">Net = Brüt - SGK işçi payı - İşsizlik işçi payı. Asgari ücrette gelir ve damga vergisi olmadığı için bu formül yeterlidir.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="asgari-ucret-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
