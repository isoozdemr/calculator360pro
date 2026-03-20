import { Metadata } from "next";
import { TurkeyTaxCalculator } from "@/components/calculators/tr/TurkeyTaxCalculator";
import { DATA_VERSION, INCOME_TAX_BRACKETS_2026 } from "@/lib/data/turkey-2026-data";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gelir Vergisi Hesaplama 2026 | Vergi Dilimi Hesap Makinesi | Calculator360Pro",
  description: "Gelir vergisi hesaplama 2026: Güncel vergi dilimleri ile verginizi hesaplayın. Kümülatif vergi matrahı, efektif vergi oranı, damga vergisi. GİB onaylı oranlar ile ücretsiz vergi hesap makinesi.",
  keywords: [
    "gelir vergisi hesaplama",
    "gelir vergisi hesaplama 2026",
    "vergi hesap makinesi",
    "2026 vergi dilimleri",
    "türkiye vergi hesaplama",
    "gelir vergisi oranları",
    "vergi dilimi hesaplama",
    "yıllık gelir vergisi",
    "vergi matrahı hesaplama",
    "kümülatif vergi matrahı",
    "efektif vergi oranı",
    "damga vergisi hesaplama",
    "ücret geliri vergisi",
    "maaş vergisi hesaplama",
    "beyanname vergisi",
    "stopaj vergisi hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/vergi-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/tax-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/vergi-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/tax-calculator`,
    },
  },
  openGraph: {
    title: "Gelir Vergisi Hesaplama 2026 - Vergi Dilimi Hesap Makinesi",
    description: "2026 güncel gelir vergisi dilimleri ve oranları ile verginizi hesaplayın. Kümülatif vergi matrahı ve efektif vergi oranı hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/vergi-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  {
    question: "2026 yılı gelir vergisi dilimleri nedir?",
    answer: "2026 yılı gelir vergisi dilimleri: 0-190.000 TL arası %15, 190.000-400.000 TL arası %20, 400.000-1.500.000 TL arası %27, 1.500.000-5.300.000 TL arası %35, 5.300.000 TL üzeri %40 oranında vergilendirilir.",
  },
  {
    question: "Kümülatif vergi matrahı nedir?",
    answer: "Kümülatif vergi matrahı, yılın başından itibaren elde ettiğiniz toplam vergilendirilebilir gelirdir. Her ay maaşınız bu matraha eklenir ve vergi dilimi buna göre belirlenir. Yıl içinde üst dilimlere geçilebilir.",
  },
  {
    question: "Efektif vergi oranı nedir?",
    answer: "Efektif vergi oranı, ödediğiniz toplam verginin toplam gelirinize oranıdır. Kademeli vergi sistemi sayesinde efektif vergi oranınız her zaman en yüksek vergi diliminden düşük olur.",
  },
  {
    question: "Asgari ücret vergi muafiyeti nasıl uygulanır?",
    answer: "2026 yılında asgari ücretliler gelir vergisinden ve damga vergisinden muaftır. Asgari ücretin üzerinde maaş alanlar ise sadece asgari ücreti aşan kısım için vergi öderler.",
  },
  {
    question: "Gelir vergisi stopaj yoluyla mı ödenir?",
    answer: "Ücret gelirleri için evet. İşvereniniz maaşınızdan gelir vergisi stopajı keserek vergi dairesine yatırır. Serbest meslek ve kira gelirleri için yıllık beyanname vermeniz gerekebilir.",
  },
  {
    question: "Hangi gelirler vergiye tabidir?",
    answer: "Türkiye'de ücret gelirleri, serbest meslek kazançları, ticari kazançlar, kira gelirleri, menkul sermaye iratları (faiz, temettü) ve diğer kazançlar gelir vergisine tabidir.",
  },
  {
    question: "Vergi iade alabilir miyim?",
    answer: "Evet, bazı durumlarda vergi iadesi alabilirsiniz. Eğitim ve sağlık harcamaları, bağış ve yardımlar belirli oranlarda vergiden düşülebilir. Fazla ödenen vergiler için iade talep edilebilir.",
  },
  {
    question: "Damga vergisi oranı nedir?",
    answer: "Damga vergisi oranı brüt maaş üzerinden binde 7,59 (‰7,59) olarak uygulanır. Ancak asgari ücretliler damga vergisinden muaftır.",
  },
];

export default function TurkeyTaxCalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Türkiye Gelir Vergisi Hesap Makinesi 2026",
    description: "2026 yılı güncel gelir vergisi dilimleri ile kümülatif vergi matrahı, efektif vergi oranı ve damga vergisi hesaplama aracı",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/vergi-hesap-makinesi`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
    dateModified: DATA_VERSION.lastUpdated,
    creator: {
      "@type": "Organization",
      name: "Calculator360Pro",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const vergiUrl = `${SITE_URL}/tr/hesap-makineleri/finans/vergi-hesap-makinesi`;
  const howToSteps = [
    { name: "Yıllık geliri girin", text: "Vergilendirilecek yıllık brüt gelirinizi veya vergi matrahınızı girin." },
    { name: "Hesapla butonuna tıklayın", text: "Hesapla butonuna tıklayarak kümülatif vergi ve efektif oranı görün." },
    { name: "Vergi dilimlerini inceleyin", text: "Hangi dilimde vergilendiğinizi ve toplam vergi tutarını inceleyin." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Gelir Vergisi Hesap Makinesi Nasıl Kullanılır?",
    "2026 gelir vergisi dilimleri ile verginizi hesaplamak için adımlar.",
    howToSteps,
    vergiUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Gelir Vergisi Hesap Makinesi", "vergi-hesap-makinesi");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-[#94a3b8]">
                <li>
                  <Link href="/tr" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri" className="hover:text-white transition-colors">
                    Hesap Makineleri
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li>
                  <Link href="/tr/hesap-makineleri/finans" className="hover:text-white transition-colors">
                    Finans
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li className="text-white font-medium">Vergi Hesap Makinesi</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Gelir Vergisi Hesaplama 2026
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  2026 güncel gelir vergisi dilimleri ile yıllık verginizi hesaplayın. 
                  <strong className="text-white"> Kümülatif vergi matrahı</strong> ve 
                  <strong className="text-white"> efektif vergi oranı</strong> hesaplama.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-full text-sm whitespace-nowrap">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{DATA_VERSION.lastUpdatedDisplay}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Tax Brackets Quick View */}
        <section className="py-4 bg-white border-b border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {INCOME_TAX_BRACKETS_2026.map((bracket, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#64748b]">
                    {index === 0 ? "0" : formatCurrency(INCOME_TAX_BRACKETS_2026[index - 1].max || 0)} - {bracket.max ? formatCurrency(bracket.max) : "∞"}
                  </span>
                  <span className="font-bold text-[#2563eb]">%{bracket.rate * 100}</span>
                  {index < INCOME_TAX_BRACKETS_2026.length - 1 && (
                    <span className="text-[#e2e8f0]">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeyTaxCalculator />
            <CalculatorDisclaimer category="finance" locale="tr" />
            <div className="mt-6 bg-white rounded-lg border border-[#e2e8f0] p-4">
              <p className="text-[#64748b] text-sm leading-relaxed">
                <strong className="text-[#1e293b]">2022</strong> gelir vergisi hesaplama rehberi için{" "}
                <Link
                  href="/tr/rehberler/gelir-vergisi-hesaplama-2022"
                  className="text-[#2563eb] hover:underline font-medium"
                >
                  buraya tıklayın
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Tax Brackets Table */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              2026 Yılı Gelir Vergisi Dilimleri Tablosu
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1e293b] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Vergi Dilimi</th>
                    <th className="px-4 py-3 text-center font-semibold">Vergi Oranı</th>
                    <th className="px-4 py-3 text-right font-semibold">Dilim Tutarı</th>
                    <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Maksimum Vergi</th>
                  </tr>
                </thead>
                <tbody>
                  {INCOME_TAX_BRACKETS_2026.map((bracket, index) => {
                    const prevMax = index === 0 ? 0 : INCOME_TAX_BRACKETS_2026[index - 1].max || 0;
                    const bracketAmount = bracket.max ? bracket.max - prevMax : "∞";
                    const maxTax = bracket.max ? bracketAmount as number * bracket.rate : "∞";
                    
                    return (
                      <tr key={index} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc]">
                        <td className="px-4 py-4 text-[#64748b]">
                          {formatCurrency(prevMax)} - {bracket.max ? formatCurrency(bracket.max) : "∞"}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                            index === 0 ? "bg-green-100 text-green-700" :
                            index === 1 ? "bg-blue-100 text-blue-700" :
                            index === 2 ? "bg-yellow-100 text-yellow-700" :
                            index === 3 ? "bg-orange-100 text-orange-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            %{bracket.rate * 100}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right text-[#1e293b] font-medium">
                          {typeof bracketAmount === "number" ? formatCurrency(bracketAmount) : "∞"}
                        </td>
                        <td className="px-4 py-4 text-right text-[#64748b] hidden md:table-cell">
                          {typeof maxTax === "number" ? formatCurrency(maxTax) : "∞"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#64748b] mt-4">
              * Vergi matrahı, brüt gelirden SGK kesintileri düşüldükten sonra kalan tutardır.
            </p>
          </div>
        </section>

        {/* How Tax Works Section */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
              Gelir Vergisi Nasıl Hesaplanır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  1
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Brüt Gelir</h3>
                <p className="text-sm text-[#64748b]">
                  Yıllık brüt geliriniz belirlenir. Maaş, ikramiye, prim gibi tüm ödemeler dahildir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  2
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Vergi Matrahı</h3>
                <p className="text-sm text-[#64748b]">
                  Brüt gelirden SGK primi ve işsizlik sigortası düşülerek vergi matrahı bulunur.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  3
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Kademeli Hesaplama</h3>
                <p className="text-sm text-[#64748b]">
                  Vergi matrahı dilimlere ayrılır, her dilime ilgili oran uygulanır ve toplanır.
                </p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                Örnek Hesaplama: 500.000 TL Yıllık Vergi Matrahı
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[#64748b]">
                      <th className="pb-2">Dilim</th>
                      <th className="pb-2 text-right">Tutar</th>
                      <th className="pb-2 text-right">Oran</th>
                      <th className="pb-2 text-right">Vergi</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1e293b]">
                    <tr className="border-t border-[#e2e8f0]">
                      <td className="py-2">0 - 190.000 TL</td>
                      <td className="py-2 text-right">190.000 TL</td>
                      <td className="py-2 text-right">%15</td>
                      <td className="py-2 text-right font-medium">28.500 TL</td>
                    </tr>
                    <tr className="border-t border-[#e2e8f0]">
                      <td className="py-2">190.000 - 400.000 TL</td>
                      <td className="py-2 text-right">210.000 TL</td>
                      <td className="py-2 text-right">%20</td>
                      <td className="py-2 text-right font-medium">42.000 TL</td>
                    </tr>
                    <tr className="border-t border-[#e2e8f0]">
                      <td className="py-2">400.000 - 500.000 TL</td>
                      <td className="py-2 text-right">100.000 TL</td>
                      <td className="py-2 text-right">%27</td>
                      <td className="py-2 text-right font-medium">27.000 TL</td>
                    </tr>
                    <tr className="border-t-2 border-[#1e293b] font-bold">
                      <td className="py-2">TOPLAM</td>
                      <td className="py-2 text-right">500.000 TL</td>
                      <td className="py-2 text-right text-[#2563eb]">%19,50 (Efektif)</td>
                      <td className="py-2 text-right text-[#2563eb]">97.500 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#64748b] mt-4">
                * Bu örnekte, 500.000 TL vergi matrahı için toplam 97.500 TL vergi ödenir. 
                Efektif vergi oranı %19,50&apos;dir, en yüksek dilim olan %27&apos;den düşüktür.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed SEO Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Gelir Vergisi Nedir?
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde ettikleri gelirler üzerinden 
                alınan dolaysız bir vergidir. Türkiye&apos;de Gelir Vergisi Kanunu (GVK) ile düzenlenir; 
                ücret, serbest meslek, ticari kazanç, kira geliri, faiz ve benzeri tüm gelir türleri 
                (kanunda sayılan istisnalar hariç) gelir vergisine tabidir. Devlet, bu vergi geliriyle 
                kamu hizmetlerini finanse eder; vatandaşlar ise gelirlerine göre kademeli oranlarla 
                vergi öder.
              </p>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Gelir vergisi hesaplama, brüt gelirden yasal indirimler (örneğin SGK primi) düşüldükten 
                sonra kalan <strong>vergi matrahı</strong> üzerinden yapılır. Matrah, vergi dilimlerine 
                göre kademeli olarak vergilendirilir; bu nedenle tüm geliriniz tek bir orana tabi 
                tutulmaz. <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">Maaş hesap makinesi</Link> ile 
                brüt-net maaş ve vergi kesintilerini birlikte görebilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-6">
                Türkiye Gelir Vergisi Sistemi: Kapsamlı Rehber
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Türkiye&apos;de gelir vergisi, Gelir Vergisi Kanunu (GVK) kapsamında düzenlenen 
                ve gerçek kişilerin bir takvim yılı içinde elde ettikleri kazanç ve iratlar 
                üzerinden alınan bir vergirdir. <strong>Gelir vergisi hesaplama</strong> işlemi, 
                artan oranlı (kademeli) tarife sistemi ile yapılmaktadır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Artan Oranlı (Kademeli) Vergi Sistemi
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Türkiye&apos;de uygulanan artan oranlı vergi sistemi, gelir arttıkça vergi oranının 
                da artması prensibiyle çalışır. Ancak bu, tüm gelirinize tek bir yüksek oran 
                uygulanacağı anlamına gelmez. Her gelir dilimi için ayrı bir oran uygulanır 
                ve toplam vergi bu dilimlerin toplamından oluşur.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bu sistem, düşük gelirli kişilerin düşük oranda vergi ödemesini sağlarken, 
                yüksek gelirli kişilerin de sadece yüksek gelir kısımları için yüksek oran 
                ödemesini sağlar. Bu sayede daha adil bir vergilendirme yapılmış olur.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Önceki yıllar (2022, 2023 vb.) için vergi dilimleri ve tutarlar farklı olabilir; 
                bu hesap makinesi güncel 2026 dilimlerine göre hesaplama yapar. Eski yıl vergisi 
                için GİB veya mali müşavirinize danışın.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Kümülatif Vergi Matrahı Nedir?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Kümülatif vergi matrahı, yılın başından itibaren toplam vergilendirilecek 
                gelirinizdir. Her ay maaşınız bu matraha eklenir. Yıl başında düşük vergi 
                diliminde olabilirsiniz, ancak yıl ilerledikçe toplam matrahınız artar ve 
                üst vergi dilimlerine geçebilirsiniz.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bu nedenle, aynı brüt maaşı alan bir çalışanın yılın ilk aylarında net maaşı 
                daha yüksek olabilir, yılın son aylarında ise kümülatif matrah arttığı için 
                vergi kesintisi artabilir ve net maaş düşebilir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Gelir Vergisine Tabi Gelir Türleri
              </h3>
              <div className="bg-[#f8fafc] rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-[#64748b]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">1.</span>
                    <div>
                      <strong className="text-[#1e293b]">Ücret Gelirleri:</strong> Maaş, ikramiye, 
                      prim ve benzeri ödemeler. İşveren tarafından stopaj yoluyla kesilir.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">2.</span>
                    <div>
                      <strong className="text-[#1e293b]">Serbest Meslek Kazançları:</strong> Avukat, 
                      doktor, mühendis gibi bağımsız çalışanların kazançları.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">3.</span>
                    <div>
                      <strong className="text-[#1e293b]">Ticari Kazançlar:</strong> Her türlü 
                      ticari ve sınai faaliyetlerden elde edilen kazançlar.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">4.</span>
                    <div>
                      <strong className="text-[#1e293b]">Gayrimenkul Sermaye İratları:</strong> Kira 
                      gelirleri ve gayrimenkul satış kazançları.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">5.</span>
                    <div>
                      <strong className="text-[#1e293b]">Menkul Sermaye İratları:</strong> Faiz, 
                      temettü, repo ve benzeri finansal gelirler.
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Vergi Muafiyet ve İstisnaları
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Türkiye&apos;de bazı gelirler vergi muafiyeti veya istisnasından yararlanır:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Asgari ücret muafiyeti:</strong> 2026 yılında asgari ücret gelir vergisinden muaftır</li>
                <li><strong>Kira geliri istisnası:</strong> Belirli tutara kadar kira geliri vergiden istisna</li>
                <li><strong>Konut satışı istisnası:</strong> 5 yıldan fazla elde tutulan konutların satışı vergiden istisna</li>
                <li><strong>Bireysel Emeklilik (BES) katkıları:</strong> Belirli limitlere kadar vergi avantajı</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Vergi Beyannamesi ve Stopaj
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Ücretliler için genellikle gelir vergisi <strong>stopaj</strong> yoluyla tahsil edilir. 
                Bu, işverenin maaştan vergiyi kesip vergi dairesine yatırması demektir. 
                Ancak bazı durumlarda yıllık beyanname verilmesi gerekir:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Birden fazla işverenden ücret alanlar (belirli koşullarda)</li>
                <li>Serbest meslek erbabı ve tüccarlar</li>
                <li>Kira geliri elde edenler (istisna tutarını aşanlar)</li>
                <li>Yurtdışı geliri olanlar</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
                2026 Güncel Vergi Dilimleri ve Uygulama
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                2026 yılı gelir vergisi dilimleri, bütçe kanunu ile belirlenir. İlk dilim 0–190.000 TL 
                için %15, son dilim 5.300.000 TL üzeri için %40 oranı uygulanır. Asgari ücretliler 
                gelir vergisi ve damga vergisinden muaftır; yalnızca asgari ücreti aşan kısım vergilendirilir. 
                Dilimler yıllık kümülatif matrah üzerinden hesaplandığı için, aylık maaşınız sabit olsa bile 
                yıl içinde net maaşınız değişebilir. Güncel oranları bu sayfadaki hesap makinesi ve tabloda 
                kontrol edebilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
                İpuçları ve Öneriler
              </h2>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-3">
                <li><strong>Yıllık verginizi tahmin edin:</strong> Bu <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline">vergi hesap makinesi</Link> ile yıllık brüt veya matrah girerek toplam vergi ve efektif oranı görebilirsiniz. Böylece bütçe ve vergi iadesi planlaması yapabilirsiniz.</li>
                <li><strong>Brüt–net maaş ilişkisi:</strong> Maaşınızdan kesilen vergiyi anlamak için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">maaş hesap makinesi</Link> kullanın. SGK, gelir vergisi ve damga vergisi tek ekranda görünür.</li>
                <li><strong>BES ve vergi avantajı:</strong> Bireysel emeklilik katkılarınız belirli limitlere kadar vergi indirimi sağlayabilir. <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline">BES devlet katkısı hesap makinesi</Link> ile birikim ve devlet katkısını hesaplayabilirsiniz.</li>
                <li><strong>Kira ve diğer gelirler:</strong> Kira geliri, serbest meslek veya yan gelirleriniz varsa yıllık beyanname ve ödeme tarihlerini takip edin. <Link href="/tr/rehberler/vergi-takvimi-2026" className="text-[#2563eb] hover:underline">Vergi takvimi rehberi</Link> önemli tarihleri listeler.</li>
                <li><strong>Eğitim ve sağlık giderleri:</strong> Belirli eğitim ve sağlık harcamaları vergi indirimi konusunda hak sağlayabilir. Detay için mali müşavir veya vergi dairesi kaynaklarını inceleyin.</li>
                <li><strong>Konut ve yatırım:</strong> Konut kredisi faizleri ve yatırım getirileri vergi açısından farklı işleme tabidir. <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline">Konut kredisi hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline">yatırım hesap makinesi</Link> ile planlama yapabilirsiniz.</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-sm text-blue-800">
                  <strong>Önemli Not:</strong> Bu hesap makinesi ve içerik bilgilendirme amaçlıdır. 
                  Vergi planlaması ve beyanname işlemleri için mutlaka yetkili mali müşavir veya 
                  serbest muhasebeci ile görüşün. Vergi mevzuatı sık değişebilmektedir.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-[#e2e8f0]">
                  <h3 className="font-bold text-[#1e293b] mb-2 flex items-start gap-2">
                    <span className="text-[#2563eb]">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Blog Post */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              İlgili Blog Yazıları
            </h2>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] transition-colors">
              <Link href="/tr/blog/2026-gelir-vergisi-dilimleri-hesaplama-rehberi" className="block">
                <h3 className="text-xl font-bold text-[#1e293b] mb-2 hover:text-[#2563eb]">
                  2026 Gelir Vergisi Dilimleri ve Hesaplama Rehberi
                </h3>
                <p className="text-[#64748b] mb-4">
                  2026 yılı güncel gelir vergisi dilimleri, kümülatif vergi matrahı hesaplama ve efektif vergi oranı hakkında kapsamlı rehber.
                </p>
                <span className="text-[#2563eb] font-medium text-sm hover:underline">
                  Yazıyı Oku →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="vergi-hesap-makinesi" maxResults={6} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Maaşınızdan Yapılan Tüm Kesintileri Görün
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Vergi, SGK ve diğer tüm kesintileri tek bir hesaplamada görün.
            </p>
            <Link
              href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
              className="inline-flex items-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Maaş Hesapla
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
