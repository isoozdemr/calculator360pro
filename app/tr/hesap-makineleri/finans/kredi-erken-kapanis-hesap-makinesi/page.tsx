import { Metadata } from "next";
import { LoanPayoffCalculator } from "@/components/calculators/LoanPayoffCalculator";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishHowToSchema, generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kredi Erken Kapanış Hesap Makinesi 2026 | Ekstra Taksit - Ücretsiz",
  description: "Kredi erken kapanış hesaplama 2026. Ekstra taksit ile kredinin ne zaman biteceğini ve ne kadar faiz tasarrufu yapacağınızı görün. Ödeme planı ve tasarruf. Ücretsiz.",
  keywords: [
    "kredi erken kapanış hesaplama",
    "kredi erken kapatma hesaplama",
    "ekstra taksit ile kredi kapanış",
    "kredi ne zaman biter",
    "fazla ödeme ile kredi süresi",
    "aylık ekstra ödeme ile kredi",
    "kredi erken kapatmak mantıklı mı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-erken-kapanis-hesap-makinesi`,
    languages: {
      en: `${SITE_URL}/calculators/finance/loan-payoff-calculator`,
      tr: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-erken-kapanis-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/loan-payoff-calculator`,
    },
  },
  openGraph: {
    title: "Kredi Erken Kapanış Hesap Makinesi 2026 - Ekstra Taksit",
    description: "Ekstra taksit ile kredi ne zaman biter, ne kadar faiz tasarrufu. Ücretsiz hesapla.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-erken-kapanis-hesap-makinesi`,
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
      name: "Ekstra taksit kredi kapanışını nasıl etkiler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ekstra taksit anaparayı daha hızlı düşürür; böylece daha az faiz birikir ve kredi daha erken kapanır. Aylık ödemenize ek olarak düzenli ekstra ödeme yaparak hem vadeyi kısaltabilir hem de toplam faiz tasarrufu elde edebilirsiniz. Bu hesap makinesi ekstra taksit ile yeni kapanış süresini ve tasarruf edilen faizi gösterir.",
      },
    },
    {
      "@type": "Question",
      name: "Kredi erken kapatmak mantıklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faiz oranınız yüksekse erken kapatmak genelde mantıklıdır; tasarruf ettiğiniz faiz belirgin olur. Oran düşükse ve yatırımda daha yüksek getiri bekliyorsanız yatırım tercih edilebilir. Erken kapanışta bazı bankalar erken kapanış komisyonu alabilir; sözleşmenizi kontrol edin.",
      },
    },
    {
      "@type": "Question",
      name: "Ekstra ödeme ile kredi ne zaman biter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut bakiye, faiz oranı, aylık taksit ve ekstra ödeme tutarını girerek bu hesap makinesi ile ekstra ödeme yaparsanız kredinin kaç ayda kapanacağını ve ne kadar faiz tasarrufu yapacağınızı görebilirsiniz.",
      },
    },
  ],
};

export default function KrediErkenKapanisPage() {
  const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/kredi-erken-kapanis-hesap-makinesi`;
  const howToSteps = [
    { name: "Kalan bakiyeyi girin", text: "Kredinin güncel anapara bakiyesini girin." },
    { name: "Faiz oranı ve taksiti girin", text: "Yıllık faiz oranını ve şu anki aylık taksit tutarını girin." },
    { name: "Ekstra ödeme girin", text: "İsteğe bağlı: her ay ek olarak ödeyebileceğiniz tutarı girin." },
    { name: "Hesapla'ya tıklayın", text: "Kapanış süresi ve faiz tasarrufunu görün." },
  ];
  const howToSchema = generateTurkishHowToSchema(
    "Kredi Erken Kapanış Hesap Makinesi Nasıl Kullanılır?",
    "Ekstra taksit ile kredi kapanış süresi ve faiz tasarrufu hesaplama.",
    howToSteps,
    pageUrl
  );
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "Kredi Erken Kapanış Hesap Makinesi", "kredi-erken-kapanis-hesap-makinesi");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kredi Erken Kapanış Hesap Makinesi",
    description: "Ekstra taksit ile kredi kapanış süresi ve faiz tasarrufu hesaplama",
    url: pageUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    inLanguage: "tr",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <li className="text-[#1e293b] font-medium">Kredi Erken Kapanış Hesap Makinesi</li>
            </ol>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Kredi Erken Kapanış Hesap Makinesi 2026
            </h1>
            <p className="text-lg text-[#64748b]">
              Ekstra taksit ile kredinizin ne zaman biteceğini ve ne kadar faiz tasarrufu yapacağınızı hesaplayın. Konut, ihtiyaç veya taşıt kredisi için ücretsiz.
            </p>
          </div>

          <LoanPayoffCalculator locale="tr" />
          <CalculatorDisclaimer category="finance" locale="tr" />

          <div className="mt-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Ekstra Taksit ile Kredi Erken Kapatma</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Aylık taksidinize ek olarak düzenli fazla ödeme yapmak, anaparayı daha hızlı düşürür ve toplam faiz yükünü azaltır. Birçok banka erken kapanışa izin verir; sözleşmenizde erken kapanış komisyonu olup olmadığını kontrol edin. Bu hesap makinesi ile mevcut bakiyenizi, faiz oranınızı ve aylık taksidinizi girip ekstra ödeme ekleyerek yeni kapanış süresini ve tasarruf edeceğiniz faizi görebilirsiniz. <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile aylık taksit hesaplama, <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">konut kredisi hesap makinesi</Link> ile mortgage senaryolarını karşılaştırabilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Ekstra Ödeme Neden İşe Yarar?</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Her ay yalnızca taksit ödediğinizde faiz, kalan anapara üzerinden hesaplanır. Ekstra ödeme anaparayı düşürdüğü için bir sonraki ayda daha az faiz birikir. Zamanla kredi daha erken kapanır ve toplam faiz ödemeniz azalır. Küçük ekstra tutarlar bile (örneğin aylık 100 TL veya 200 TL) uzun vadede büyük tasarruf sağlayabilir. <Link href="/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi kartı borç hesap makinesi</Link> ile kart borcunu erken kapatma etkisini de görebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">Erken Kapanış Komisyonu</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Bazı bankalar erken kapanışta komisyon veya ceza uygular. Sözleşmenizi okuyun; komisyon varsa tasarruf ettiğiniz faiz ile karşılaştırıp erken kapatmanın hâlâ kârlı olup olmadığını değerlendirin. Bu araç tahmini tasarrufu gösterir; nihai rakamlar bankanıza bağlıdır.
            </p>

            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1e293b]">Ekstra taksit kredi kapanışını nasıl etkiler?</h4>
                <p className="text-[#64748b] mt-1">Ekstra taksit anaparayı hızlı düşürür, böylece daha az faiz birikir ve kredi daha erken kapanır. Bu hesap makinesi ekstra ödeme ile yeni kapanış süresini ve faiz tasarrufunu gösterir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Kredi erken kapatmak mantıklı mı?</h4>
                <p className="text-[#64748b] mt-1">Faiz oranı yüksekse erken kapatmak genelde mantıklıdır. Oran düşükse ve yatırımda daha iyi getiri bekliyorsanız yatırım tercih edilebilir. Erken kapanış komisyonu olup olmadığını kontrol edin.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1e293b]">Ekstra ödeme ile kredi ne zaman biter?</h4>
                <p className="text-[#64748b] mt-1">Bakiye, faiz oranı, aylık taksit ve ekstra ödeme tutarını girerek bu hesap makinesinde kapanış süresini ve tasarruf edilen faizi görebilirsiniz.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="kredi-erken-kapanis-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
