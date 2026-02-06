import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { InvestmentCalculator } from "@/components/calculators/InvestmentCalculator";

export const metadata: Metadata = {
  title: "Yatirim Hesap Makinesi 2026 - Getiri Hesapla",
  description: "Yatirim getirinizi aninda hesaplayin. Bilesik getiri ile yatirim planlamasi. Ucretsiz.",
  keywords: ["yatirim hesaplama", "yatirim getirisi", "yatirim hesap makinesi"],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/investment-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Yatirim Hesap Makinesi 2026 | Calculator360Pro",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  { question: "Yatirim getirisi nasil hesaplanir?", answer: "Getiri ((Son deger - Yatirilan) / Yatirilan) x 100. Bilesik getiri vade ve yillik oranla hesaplanir." },
  { question: "Enflasyon getiriyi nasil etkiler?", answer: "Reel getiri = nominal getiri - enflasyon. Uzun vadede enflasyonu yenen yatirimlar tercih edilir." },
];

export default function YatirimHesapMakinesiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Yatirim Hesap Makinesi",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    inLanguage: "tr",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6 text-sm text-[#64748b]">
            <ol className="flex items-center space-x-2">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">Hesap Makineleri</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb]">Finans</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Yatirim Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Yatirim Hesap Makinesi</h1>
            <p className="text-lg text-[#64748b]">Baslangic tutari ve aylik yatirimla getirinizi hesaplayin.</p>
          </div>
          <InvestmentCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Yatirim Getirisi</h2>
              <p className="text-[#64748b] mb-4">
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bilesik Faiz Hesap Makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> ile karsilastirin.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#e2e8f0] pb-4 last:border-0">
                    <h3 className="font-semibold text-[#1e293b] mb-2">{faq.question}</h3>
                    <p className="text-[#64748b] text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Ilgili Hesap Makineleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Bilesik Faiz</h4>
                  <p className="text-sm text-[#64748b]">Bilesik getiri</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Birikim</h4>
                  <p className="text-sm text-[#64748b]">Hedef birikim</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Emeklilik</h4>
                  <p className="text-sm text-[#64748b]">Emeklilik plani</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
