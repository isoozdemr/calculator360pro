import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { TurkeyCarLoanCalculator } from "@/components/calculators/tr";

export const metadata: Metadata = {
  title: "Taşıt Kredisi Hesap Makinesi 2026 - Araç Kredisi Taksit",
  description: "Taşıt kredisi aylık taksit ve toplam maliyet hesaplayın. KKDF, BSMV dahil 2026 güncel. Ücretsiz - hemen hesaplayın!",
  keywords: [
    "taşıt kredisi hesaplama",
    "araç kredisi",
    "taşıt kredisi hesap makinesi",
    "otomobil kredisi",
    "taksit hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/tasit-kredisi-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/car-loan-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/tasit-kredisi-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/car-loan-calculator`,
    },
  },
  openGraph: {
    title: "Taşıt Kredisi Hesap Makinesi 2026 | Calculator360Pro",
    description: "Araç kredisi taksit ve maliyet hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/tasit-kredisi-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  { question: "Taşıt kredisi KKDF ve BSMV oranları nedir?", answer: "Türkiye'de taşıt kredilerinde KKDF ve BSMV uygulanır. Oranlar yıla göre değişir; banka ve kredi türüne göre efektif faiz farklı olabilir. Bu hesap makinesi genel taksit tahmini verir; net teklif için bankaya danışın." },
  { question: "Peşinat oranı ne olmalı?", answer: "Yüksek peşinat taksiti ve toplam faizi düşürür. En az %20-30 peşinat önerilir. Düşük peşinatla kredi maliyeti artar." },
  { question: "Taşıt kredisi vadesi kaç ay?", answer: "Genelde 12-48 ay arası sunulur. Uzun vade aylık taksiti düşürür ama toplam faiz artar. Ödeme gücüne göre kısa vade tercih edilebilir." },
  { question: "İhtiyaç kredisi ile taşıt kredisi farkı?", answer: "Taşıt kredisi aracı teminat gösterir; faiz oranları farklı olabilir. İhtiyaç kredisi teminatsızdır. Her iki türde de KKDF/BSMV uygulanır; oranlar kredi türüne göre değişir." },
  { question: "Erken ödeme cezası var mı?", answer: "Bazı bankalarda taşıt kredisi erken kapamada cezai şart uygulanır. Sözleşmeyi okuyun. Erken kapatma planınız varsa cezai şartı sorun." },
];

const howToSteps = [
  { name: "Araç fiyatı ve peşinatı girin", text: "Aracın fiyatını ve peşinat tutarınızı girin." },
  { name: "Faiz oranı ve vadeyi seçin", text: "Yıllık faiz oranı ve kredi vadesini (ay) seçin." },
  { name: "Hesapla butonuna tıklayın", text: "Aylık taksit ve toplam maliyeti görün." },
];

export default function TasitKredisiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Taşıt Kredisi Hesap Makinesi"
        description="Taşıt kredisi taksit ve maliyet hesaplama aracı"
        slug="tasit-kredisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Taşıt Kredisi Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Araç kredisi taksit hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Taşıt Kredisi Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Taşıt Kredisi Hesap Makinesi</h1>
            <p className="text-lg text-[#64748b]">
              Araç kredisi aylık taksit ve toplam geri ödeme tutarını hesaplayın. Peşinat ve vade seçenekleri ile.
            </p>
          </div>
          <TurkeyCarLoanCalculator />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Taşıt Kredisi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Taşıt kredisi, araç (otomobil, motosiklet vb.) satın almak için bankalardan 
                çekilen tüketici kredisidir. Konut kredisinden farklı olarak taşıt kredilerinde 
                <strong> KKDF ve BSMV</strong> uygulanır; bu nedenle nominal faizin üzerinde 
                efektif maliyet oluşur. Bu hesap makinesi aylık taksit ve toplam geri ödeme 
                tutarını hesaplar.
              </p>
              <p className="text-[#64748b] mb-4">
                <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile 
                ihtiyaç kredisi maliyetini, <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">konut kredisi hesap makinesi</Link> ile 
                ev kredisi taksitini karşılaştırabilirsiniz.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve Öneriler</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Efektif faiz oranına bakın; KKDF ve BSMV dahil toplam maliyeti bu araç ile hesaplayın.</li>
                <li>Peşinatı artırmak taksit ve toplam faizi düşürür. <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim hesap makinesi</Link> ile peşinat hedefi koyun.</li>
                <li>Aylık taksidin gelirinizin %20–25&apos;ini geçmemesine dikkat edin. <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bütçe hesap makinesi</Link> kullanın.</li>
                <li>Erken kapatma koşullarını sözleşmede kontrol edin.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Taşıt Kredisi ve Türkiye Mevzuatı</h2>
              <p className="text-[#64748b] mb-4">
                Taşıt kredilerinde bankalar KKDF ve BSMV uygular. Efektif faiz oranı reklam faizinden yüksektir. 
                <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium mx-1">Kredi Hesap Makinesi</Link> 
                ile ihtiyaç kredisi maliyetini de karşılaştırabilirsiniz. 
                <Link href="/tr/blog/konut-kredisi-alirken-dikkat-edilecekler-2026" className="text-[#2563eb] hover:underline font-medium">Konut kredisi dikkat edilecekler</Link> benzer mantıkla taşıt kredisi için de geçerlidir.
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
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="tasit-kredisi-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
