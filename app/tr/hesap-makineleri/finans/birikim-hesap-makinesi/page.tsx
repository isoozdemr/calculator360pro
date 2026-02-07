import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { TurkeySavingsCalculator } from "@/components/calculators/tr";

export const metadata: Metadata = {
  title: "Birikim Hesap Makinesi 2026 - Hedef Birikim Hesapla",
  description: "Hedef birikime ulaşmak için aylık ne kadar birikim yapmalısınız? Faiz oranı ve vade ile ücretsiz hesaplayın.",
  keywords: [
    "birikim hesaplama",
    "birikim hesap makinesi",
    "hedef birikim",
    "aylik birikim",
    "tasarruf hesaplama",
    "birikim hedefi",
    "ne kadar birikim",
    "faizli birikim",
    "düzenli birikim hesabı",
    "birikim planlamasi",
    "tasarruf hesap makinesi",
  ],
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
  { question: "Hedef birikime nasıl ulaşılır?", answer: "Hedef tutarı, vadeyi ve beklenen faiz oranını girerek aylık ne kadar birikim yapmanız gerektiğini hesaplayabilirsiniz. Bileşik faiz sayesinde düzenli küçük tutarlar büyük hedeflere ulaştırır." },
  { question: "Mevduat faizi birikim için yeterli mi?", answer: "Mevduat faizi enflasyon altında kalabilir. Uzun vadede reel getiri için enflasyonu yenen yatırımlar değerlendirilebilir. Bu araç faiz oranı girdinize göre tahmin verir." },
];

const howToSteps = [
  { name: "Hedef tutarı girin", text: "Ulaşmak istediğiniz birikim hedefini TL olarak girin." },
  { name: "Vade ve faiz oranını girin", text: "Kaç yıl içinde hedefe ulaşmak istediğinizi ve beklenen yıllık faiz oranını girin." },
  { name: "Hesapla butonuna tıklayın", text: "Hesapla butonuna tıklayarak aylık yapmanız gereken birikim tutarını görün." },
  { name: "Sonucu inceleyin", text: "Aylık birikim tutarını ve toplam birikim planını inceleyin." },
];

export default function BirikimHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Birikim Hesap Makinesi"
        description="Hedef birikime ulaşmak için aylık ne kadar birikim yapmanız gerektiğini hesaplayın."
        slug="birikim-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Birikim Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Hedef birikim için aylık katkı hesaplamak üzere adımlar."
        howToSteps={howToSteps}
      />
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
            <p className="text-lg text-[#64748b]">Hedef birikime ulaşmak için aylık ne kadar birikim yapmanız gerektiğini hesaplayın.</p>
          </div>
          <TurkeySavingsCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Birikim Planlaması</h2>
              <p className="text-[#64748b] mb-4">
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik Faiz Hesap Makinesi</Link> faiz getirisini, <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bütçe Hesap Makinesi</Link> gelir-gider dengesini hesaplamanıza yardımcı olur.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
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
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İlgili Hesap Makineleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Bileşik Faiz Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Faiz getirisi</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Yatırım Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Yatirim getirisi</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Bütçe Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Gelir-gider planı</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
