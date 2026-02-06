import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { SavingsCalculator } from "@/components/calculators/SavingsCalculator";

export const metadata: Metadata = {
  title: "Birikim Hesap Makinesi 2026 - Hedef Birikim Hesapla",
  description: "Hedef birikime ulasmak icin aylik ne kadar birikim yapmalisiniz? Faiz orani ve vade ile ucretsiz hesaplayin.",
  keywords: ["birikim hesaplama", "birikim hesap makinesi", "hedef birikim", "aylik birikim"],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/birikim-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/savings-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/birikim-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Birikim Hesap Makinesi 2026 | Calculator360Pro",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/birikim-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  { question: "Hedef birikime nasil ulasilir?", answer: "Hedef tutari, vadeyi ve beklenen faiz oranini girerek aylik ne kadar birikim yapmaniz gerektigini hesaplayabilirsiniz. Bilesik faiz sayesinde duzenli kucuk tutarlar buyuk hedeflere ulastirir." },
  { question: "Mevduat faizi birikim icin yeterli mi?", answer: "Mevduat faizi enflasyon altinda kalabilir. Uzun vadede reel getiri icin enflasyonu yenen yatirimlar degerlendirilebilir. Bu arac faiz orani girdinize gore tahmin verir." },
];

export default function BirikimHesapMakinesiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Birikim Hesap Makinesi",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/birikim-hesap-makinesi`,
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
              <li className="text-[#1e293b] font-medium">Birikim Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Birikim Hesap Makinesi</h1>
            <p className="text-lg text-[#64748b]">Hedef birikime ulasmak icin aylik ne kadar birikim yapmaniz gerektigini hesaplayin.</p>
          </div>
          <SavingsCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Birikim Planlamasi</h2>
              <p className="text-[#64748b] mb-4">
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bilesik Faiz Hesap Makinesi</Link> faiz getirisini, <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Butce Hesap Makinesi</Link> gelir-gider dengesini hesaplamaniza yardimci olur.
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
                  <h4 className="font-semibold text-[#1e293b]">Bilesik Faiz Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Faiz getirisi</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Yatirim Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Yatirim getirisi</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Butce Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Gelir-gider plani</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
