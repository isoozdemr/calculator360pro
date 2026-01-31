import { Metadata } from "next";
import { TurkeySalaryCalculator } from "@/components/calculators/tr/TurkeySalaryCalculator";
import { DATA_VERSION, MINIMUM_WAGE_2026, SGK_RATES_2026, INCOME_TAX_BRACKETS_2026 } from "@/lib/data/turkey-2026-data";

// Helper to access SGK rates
const SGK_WORKER_TOTAL = SGK_RATES_2026.worker.total;
const SGK_CEILING = SGK_RATES_2026.limits.ceiling;
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maaş Hesaplama 2026 | Brüt Net Maaş Hesap Makinesi | SGK AGİ Hesaplama",
  description: "2026 güncel asgari ücret (26.005 TL brüt), SGK oranları ve vergi dilimleri ile brütten nete maaş hesaplayın. AGİ, damga vergisi, gelir vergisi, işveren maliyeti hesaplama. Ücretsiz online maaş hesap makinesi.",
  keywords: [
    "maaş hesaplama",
    "maaş hesaplama 2026",
    "brüt net hesaplama",
    "brütten nete hesaplama",
    "net maaş hesaplama",
    "SGK kesintisi hesaplama",
    "SGK hesaplama",
    "AGİ hesaplama",
    "asgari geçim indirimi hesaplama",
    "2026 asgari ücret",
    "2026 asgari ücret net",
    "maaş hesap makinesi",
    "netten brüte hesaplama",
    "işveren maliyeti hesaplama",
    "maaştan kesintiler",
    "damga vergisi hesaplama",
    "gelir vergisi hesaplama",
    "maaş bordrosu hesaplama",
  ],
  alternates: {
    canonical: "https://calculator360pro.com/tr/hesap-makineleri/finans/maas-hesap-makinesi",
    languages: {
      "en": "https://calculator360pro.com/calculators/finance/salary-calculator",
      "tr": "https://calculator360pro.com/tr/hesap-makineleri/finans/maas-hesap-makinesi",
    },
  },
  openGraph: {
    title: "Maaş Hesaplama 2026 - Brüt Net Maaş Hesap Makinesi",
    description: "2026 güncel asgari ücret ve SGK oranları ile brütten nete, netten brüte maaş hesaplayın. AGİ ve işveren maliyeti dahil.",
    locale: "tr_TR",
    type: "website",
  },
};

const faqs = [
  {
    question: "2026 yılında brüt asgari ücret ne kadar?",
    answer: "2026 yılı için brüt asgari ücret 26.005,50 TL olarak belirlenmiştir. Bu tutar, SGK ve vergi kesintileri yapılmadan önceki tutardır.",
  },
  {
    question: "2026 yılında net asgari ücret ne kadar?",
    answer: "2026 yılında bekar bir çalışanın eline geçen net asgari ücret yaklaşık 22.104,67 TL'dir. Bu tutar, tüm SGK kesintileri ve vergi kesintileri sonrası hesaplanmıştır.",
  },
  {
    question: "Brüt maaştan hangi kesintiler yapılır?",
    answer: "Brüt maaştan SGK işçi payı (%14), işsizlik sigortası primi (%1), gelir vergisi (kademeli %15-%40) ve damga vergisi (‰7.59) kesintileri yapılır. Asgari ücret için damga vergisi muafiyeti bulunmaktadır.",
  },
  {
    question: "AGİ (Asgari Geçim İndirimi) nedir?",
    answer: "AGİ, çalışanların medeni durumu ve bakmakla yükümlü oldukları kişi sayısına göre hesaplanan vergi indirimidir. Bekar çalışanlar için asgari ücretin %50'si, evli ve eşi çalışmayanlar için %60'ı üzerinden hesaplanır.",
  },
  {
    question: "İşveren maliyeti nasıl hesaplanır?",
    answer: "İşveren maliyeti, brüt maaşın üzerine SGK işveren payı (%20,5) ve işsizlik sigortası işveren payı (%2) eklenerek hesaplanır. Bu nedenle işveren maliyeti, brüt maaştan yaklaşık %22,5 daha fazladır.",
  },
  {
    question: "SGK tavan ücreti ne demek?",
    answer: "SGK tavan ücreti, SGK primlerinin hesaplandığı maksimum ücret limitidir. 2026 yılında bu tutar 195.041,25 TL'dir. Bu tutarın üzerindeki maaşlardan SGK primi sadece tavan tutar üzerinden hesaplanır.",
  },
  {
    question: "Kümülatif vergi matrahı nedir?",
    answer: "Kümülatif vergi matrahı, yıl başından itibaren toplam vergi matrahınızdır. Bu değer arttıkça, yıl içinde daha yüksek vergi dilimine geçilebilir ve vergi kesintisi artabilir.",
  },
  {
    question: "Asgari ücret damga vergisinden muaf mı?",
    answer: "Evet, 2026 yılında asgari ücretliler damga vergisinden muaftır. Bu muafiyet sadece asgari ücret alan çalışanlar için geçerlidir.",
  },
];

export default function TurkeySalaryCalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Türkiye Maaş Hesap Makinesi 2026",
    description: "2026 yılı SGK oranları, AGİ ve vergi dilimleri ile brüt-net maaş hesaplama aracı. İşveren maliyeti hesaplama.",
    url: "https://calculator360pro.com/tr/hesap-makineleri/finans/maas-hesap-makinesi",
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
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
                <li className="text-white font-medium">Maaş Hesap Makinesi</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Maaş Hesaplama 2026
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-2xl">
                  Brüt maaşınızdan net ele geçen tutarı, SGK kesintilerini, gelir vergisini ve 
                  işveren maliyetini <strong className="text-white">2026 güncel oranları</strong> ile hesaplayın.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-full text-sm whitespace-nowrap">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{DATA_VERSION.lastUpdatedDisplay}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-4 bg-white border-b border-[#e2e8f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <p className="text-sm text-[#64748b]">2026 Brüt Asgari Ücret</p>
                <p className="text-lg font-bold text-[#1e293b]">{formatCurrency(MINIMUM_WAGE_2026.gross)}</p>
              </div>
              <div className="p-3">
                <p className="text-sm text-[#64748b]">2026 Net Asgari Ücret</p>
                <p className="text-lg font-bold text-[#1e293b]">{formatCurrency(MINIMUM_WAGE_2026.net)}</p>
              </div>
              <div className="p-3">
                <p className="text-sm text-[#64748b]">SGK İşçi Payı</p>
                <p className="text-lg font-bold text-[#1e293b]">%{SGK_WORKER_TOTAL}</p>
              </div>
              <div className="p-3">
                <p className="text-sm text-[#64748b]">SGK Tavan</p>
                <p className="text-lg font-bold text-[#1e293b]">{formatCurrency(SGK_CEILING)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeySalaryCalculator />
          </div>
        </section>

        {/* 2026 Tax Brackets Table */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              2026 Yılı Gelir Vergisi Dilimleri
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc]">
                    <th className="border border-[#e2e8f0] px-4 py-3 text-left font-semibold text-[#1e293b]">Vergi Matrahı</th>
                    <th className="border border-[#e2e8f0] px-4 py-3 text-center font-semibold text-[#1e293b]">Vergi Oranı</th>
                    <th className="border border-[#e2e8f0] px-4 py-3 text-right font-semibold text-[#1e293b]">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {INCOME_TAX_BRACKETS_2026.map((bracket, index) => (
                    <tr key={index} className="hover:bg-[#f8fafc]">
                      <td className="border border-[#e2e8f0] px-4 py-3 text-[#64748b]">
                        {formatCurrency(bracket.min)} - {bracket.max ? formatCurrency(bracket.max) : "∞"}
                      </td>
                      <td className="border border-[#e2e8f0] px-4 py-3 text-center font-semibold text-[#2563eb]">
                        %{bracket.rate * 100}
                      </td>
                      <td className="border border-[#e2e8f0] px-4 py-3 text-right text-sm text-[#64748b]">
                        {index === 0 && "En düşük dilim"}
                        {index === 1 && "Orta-alt dilim"}
                        {index === 2 && "Orta dilim"}
                        {index === 3 && "Yüksek dilim"}
                        {index === 4 && "En yüksek dilim"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#64748b] mt-4">
              * Gelir vergisi, kümülatif vergi matrahına göre hesaplanır. Yıl içinde toplam 
              matrahınız arttıkça üst dilimlere geçiş yapabilirsiniz.
            </p>
          </div>
        </section>

        {/* Detailed SEO Content */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Maaş Hesaplama Rehberi: Brütten Nete Nasıl Hesaplanır?
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Türkiye&apos;de çalışanların maaşları, brüt tutardan çeşitli yasal kesintiler 
                yapıldıktan sonra net olarak ödenmektedir. Bu kesintiler Sosyal Güvenlik 
                Kurumu (SGK) primleri, gelir vergisi, damga vergisi ve işsizlik sigortasından 
                oluşmaktadır. <strong>Maaş hesaplama</strong> işlemi, bu kesintilerin doğru 
                şekilde hesaplanmasını gerektirir.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Maaştan Yapılan Kesintiler Nelerdir?
              </h3>

              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                  <span className="text-xl">1️⃣</span> SGK İşçi Payı (Emekli ve Sağlık Primi)
                </h4>
                <p className="text-[#64748b] mb-2">
                  SGK işçi payı, brüt maaşın <strong>%14&apos;ü</strong> oranında kesilir. Bu prim, 
                  emeklilik sigortası (%9) ve genel sağlık sigortası (%5) olarak iki kısımdan oluşur.
                </p>
                <div className="bg-[#f8fafc] rounded p-3 text-sm">
                  <strong>Örnek:</strong> 50.000 TL brüt maaş × %14 = 7.000 TL SGK kesintisi
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                  <span className="text-xl">2️⃣</span> İşsizlik Sigortası Primi
                </h4>
                <p className="text-[#64748b] mb-2">
                  İşsizlik sigortası, brüt maaşın <strong>%1&apos;i</strong> oranında kesilir. 
                  Bu fon, işsiz kalındığında işsizlik maaşı alabilmek için kullanılır.
                </p>
                <div className="bg-[#f8fafc] rounded p-3 text-sm">
                  <strong>Örnek:</strong> 50.000 TL brüt maaş × %1 = 500 TL işsizlik sigortası kesintisi
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                  <span className="text-xl">3️⃣</span> Gelir Vergisi (Kademeli)
                </h4>
                <p className="text-[#64748b] mb-2">
                  Gelir vergisi, SGK kesintileri düşüldükten sonra kalan tutar (vergi matrahı) 
                  üzerinden hesaplanır. Türkiye&apos;de <strong>artan oranlı vergi sistemi</strong> 
                  uygulanır; gelir arttıkça vergi oranı da artar.
                </p>
                <p className="text-[#64748b] mb-2">
                  2026 yılı için gelir vergisi oranları %15&apos;ten başlayıp %40&apos;a kadar çıkmaktadır. 
                  Kümülatif vergi matrahı dikkate alınarak hesaplama yapılır.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                  <span className="text-xl">4️⃣</span> Damga Vergisi
                </h4>
                <p className="text-[#64748b] mb-2">
                  Damga vergisi, brüt maaş üzerinden <strong>binde 7.59 (‰7.59)</strong> oranında 
                  kesilir. Ancak <strong>asgari ücretliler damga vergisinden muaftır</strong>.
                </p>
                <div className="bg-[#f8fafc] rounded p-3 text-sm">
                  <strong>Örnek:</strong> 50.000 TL brüt maaş × 0.00759 = 379,50 TL damga vergisi
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                AGİ (Asgari Geçim İndirimi) Nedir?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Asgari Geçim İndirimi (AGİ), çalışanların vergi yükünü hafifletmek amacıyla 
                uygulanan bir vergi indirimidir. AGİ tutarı, çalışanın medeni durumu ve 
                bakmakla yükümlü olduğu kişi sayısına göre değişir.
              </p>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <h4 className="font-bold text-[#1e293b] mb-3">2026 AGİ Oranları</h4>
                <ul className="space-y-2 text-[#64748b]">
                  <li className="flex justify-between"><span>Bekar veya evli (eşi çalışan)</span><span className="font-semibold text-[#1e293b]">%50</span></li>
                  <li className="flex justify-between"><span>Evli (eşi çalışmayan)</span><span className="font-semibold text-[#1e293b]">%60</span></li>
                  <li className="flex justify-between"><span>İlk 2 çocuk için (her biri)</span><span className="font-semibold text-[#1e293b]">+%7.5</span></li>
                  <li className="flex justify-between"><span>3. ve sonraki çocuklar için (her biri)</span><span className="font-semibold text-[#1e293b]">+%10</span></li>
                </ul>
                <p className="text-sm text-[#64748b] mt-3">
                  * AGİ tutarı, asgari ücretin yukarıdaki oranı üzerinden hesaplanan verginin %15&apos;idir.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İşveren Maliyeti Nasıl Hesaplanır?
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                İşverenler, çalışanlara ödenen brüt maaşın yanı sıra ek maliyetler de ödemek 
                zorundadır. Bu maliyetler şunlardır:
              </p>
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
                <ul className="space-y-2 text-[#64748b]">
                  <li className="flex justify-between"><span>SGK İşveren Payı</span><span className="font-semibold text-[#1e293b]">%20.5</span></li>
                  <li className="flex justify-between"><span>İşsizlik Sigortası İşveren Payı</span><span className="font-semibold text-[#1e293b]">%2</span></li>
                  <li className="flex justify-between border-t border-[#e2e8f0] pt-2 mt-2">
                    <span className="font-semibold">Toplam Ek Maliyet</span>
                    <span className="font-bold text-[#2563eb]">%22.5</span>
                  </li>
                </ul>
                <div className="bg-[#f8fafc] rounded p-3 text-sm mt-4">
                  <strong>Örnek:</strong> 50.000 TL brüt maaş için işveren maliyeti = 
                  50.000 + (50.000 × 22.5%) = <strong>61.250 TL</strong>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Netten Brüte Hesaplama
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Bazen işverenler, çalışana belirli bir net maaş teklif ederler. Bu durumda 
                brüt maaşın ne olması gerektiğini hesaplamak gerekir. Bu hesaplama, kesinti 
                oranlarının tersine uygulanmasıyla yapılır.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                <strong>Netten brüte hesaplama</strong> işlemi karmaşık olabilir çünkü gelir 
                vergisi oranları kademeli olarak değişir. Hesap makinemiz bu hesaplamayı 
                otomatik olarak yapmaktadır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                SGK Tavan ve Taban Ücret
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                SGK primleri hesaplanırken bir taban ve tavan tutar uygulanır:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Taban (Alt Sınır):</strong> Asgari ücret tutarı ({formatCurrency(MINIMUM_WAGE_2026.gross)})</li>
                <li><strong>Tavan (Üst Sınır):</strong> Asgari ücretin 7.5 katı ({formatCurrency(SGK_CEILING)})</li>
              </ul>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Tavan tutarın üzerindeki maaşlardan SGK primi sadece tavan tutar üzerinden 
                hesaplanır. Bu durum, yüksek maaşlı çalışanlar için önemli bir avantaj 
                sağlayabilir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-sm text-blue-800">
                  <strong>Önemli Not:</strong> Bu hesap makinesi bilgilendirme amaçlıdır. 
                  Resmi bordro hesaplamaları için işvereninizin muhasebe birimine veya 
                  bir mali müşavire danışın. Vergi ve SGK mevzuatındaki değişiklikler 
                  sonuçları etkileyebilir.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">
              Sıkça Sorulan Sorular (SSS)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#f8fafc] rounded-lg p-6 border border-[#e2e8f0]">
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

        {/* Related Calculators */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              İlgili Hesap Makineleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Vergi Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  2026 gelir vergisi dilimleri ile kümülatif vergi hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">🏖️</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Emeklilik Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  SGK emeklilik yaşı ve prim gün sayısı hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Kredi Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  İhtiyaç kredisi, KKDF ve BSMV dahil hesaplama
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diğer Finans Hesap Makinelerimizi Keşfedin
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Vergi, kredi, emeklilik ve daha fazlası için Türkiye&apos;ye özel hesap makineleri.
            </p>
            <Link
              href="/tr/hesap-makineleri/finans"
              className="inline-flex items-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Tüm Finans Hesap Makineleri
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
