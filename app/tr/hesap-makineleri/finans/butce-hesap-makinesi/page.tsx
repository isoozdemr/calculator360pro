import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { TurkeyBudgetCalculator } from "@/components/calculators/tr";

export const metadata: Metadata = {
  title: "Bütçe Hesap Makinesi 2026 - Gelir Gider Dengesi",
  description: "Aylık gelir ve giderlerinizi dengeleyin. Bütçe planı, tasarruf hedefi. Ücretsiz bütçe hesap makinesi - hemen kullanın!",
  keywords: [
    "bütçe hesaplama",
    "bütçe hesap makinesi",
    "gelir gider",
    "aylık bütçe",
    "tasarruf planı",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/butce-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/budget-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/butce-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Bütçe Hesap Makinesi 2026 | Calculator360Pro",
    description: "Gelir-gider dengesi ve bütçe planı.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/butce-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  { question: "50/30/20 kuralı nedir?", answer: "Gelirin %50'si ihtiyaçlara (kira, faturalar, market), %30'u isteklere (eğlence, hobi), %20'si tasarrufa ayrılır. Bu kural bütçe dengesi için basit bir rehberdir." },
  { question: "Bütçe nasıl yapılır?", answer: "Önce aylık geliri, sonra sabit giderleri (kira, kredi, faturalar), ardından değişken giderleri (yemek, ulaşım, eğlence) yazın. Gelir - gider = tasarruf veya açık." },
  { question: "Tasarruf oranı ne olmalı?", answer: "En az %10-20 tasarruf hedeflenebilir. Acil durum fonu 3-6 aylık gideri karşılayacak kadar olmalı. Sonrasında yatırım ve hedef birikimleri artırabilirsiniz." },
  { question: "Gelir net mi brüt mü?", answer: "Bütçe planında net (ele geçen) maaşı kullanın. Vergi ve kesintiler zaten düşülmüş olur. Net maaş için maaş hesap makinemizi kullanabilirsiniz." },
  { question: "Bütçe neden aşılır?", answer: "Gizli giderler (abonelikler, küçük harcamalar), plansız alışveriş ve acil harcamalar bütçeyi aşabilir. Harcamaları takip etmek ve kategorilere ayırmak farkındalık sağlar." },
];

const howToSteps = [
  { name: "Geliri girin", text: "Aylık toplam gelirinizi (net maaş vb.) girin." },
  { name: "Giderleri girin", text: "Sabit ve değişken giderlerinizi kategorilere ayırarak girin." },
  { name: "Hesapla butonuna tıklayın", text: "Bütçe dengesi ve tasarruf miktarını görün." },
  { name: "Sonucu inceleyin", text: "Gelir-gider farkı ve tasarruf oranını değerlendirin." },
];

export default function ButceHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Bütçe Hesap Makinesi"
        description="Gelir-gider ve bütçe planlama aracı"
        slug="butce-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Bütçe Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Gelir ve giderlerle bütçe planlamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Bütçe Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Bütçe Hesap Makinesi</h1>
            <p className="text-lg text-[#64748b]">
              Aylık gelir ve giderlerinizi girerek bütçe dengesini ve tasarruf potansiyelini görün.
            </p>
          </div>
          <TurkeyBudgetCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Bütçe Planlama İpuçları</h2>
              <p className="text-[#64748b] mb-4">
                <Link href="/tr/blog/aylik-butce-nasil-planlanir-tasarruf-yontemleri" className="text-[#2563eb] hover:underline font-medium">Aylık Bütçe Nasıl Planlanır?</Link> 
                yazımızda tasarruf yöntemlerini anlattık. 
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium mx-1">Maaş Hesap Makinesi</Link> 
                ile net gelirinizi, <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> ile hedef birikiminizi hesaplayabilirsiniz.
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
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Maaş Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Net gelir hesaplama</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Birikim Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Hedef birikim</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Kredi Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Taksit ve borç planı</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
