import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { TurkeyCompoundInterestCalculator } from "@/components/calculators/tr";

export const metadata: Metadata = {
  title: "Bileşik Faiz Hesap Makinesi 2026 - Yatırım Getirisi",
  description: "Bileşik faiz ile birikim ve yatırım getirinizi anında hesaplayın! Ana para, faiz oranı ve vade. Ücretsiz - hemen deneyin.",
  keywords: [
    "bileşik faiz hesaplama",
    "bileşik faiz hesap makinesi",
    "yatırım getirisi hesaplama",
    "birikim faizi",
    "faiz getirisi",
    "bileşik getiri",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/compound-interest-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Bileşik Faiz Hesap Makinesi 2026 | Calculator360Pro",
    description: "Bileşik faiz ile yatırım getirinizi hesaplayın. Ücretsiz araç.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Bileşik faiz nedir?",
    answer: "Bileşik faiz, ana paraya kazanılan faizin de eklenerek yeni dönemde faize tabi tutulduğu hesaplama yöntemidir. Basit faizden farklı olarak 'faizin faizi' kazanırsınız; bu da uzun vadede getiriyi artırır.",
  },
  {
    question: "Bileşik faiz formülü nedir?",
    answer: "Formül: A = P(1 + r/n)^(nt). Burada P ana para, r yıllık faiz oranı (ondalık), n yılda bileşikleşme sayısı, t yıl. Örneğin aylık bileşikleşmede n=12.",
  },
  {
    question: "Bileşik faiz mi basit faiz mi daha karlı?",
    answer: "Aynı oran ve sürede bileşik faiz her zaman daha yüksek getiri verir. Fark vade uzadıkça artar. Uzun vadeli birikim ve yatırımlarda bileşik faiz tercih edilir.",
  },
  {
    question: "Türkiye'de mevduat bileşik faiz mi?",
    answer: "Bankalar genelde aylık veya günlük bileşik faiz uygular. Vadeli mevduat sözleşmesinde bileşikleşme sıklığı yazar. Bu hesap makinesi farklı sıklıkları destekler.",
  },
  {
    question: "72 kuralı nedir?",
    answer: "Paranızın ikiye katlanması için gereken yıl sayısını tahmin etmek için: 72 / yıllık faiz oranı. Örneğin %6 faizde 72/6 = 12 yıl. Bileşik faiz için kabaca doğru bir tahmindir.",
  },
];

const howToSteps = [
  { name: "Ana para ve faiz oranını girin", text: "Ana para (yatırım tutarı), yıllık faiz oranı ve vadeyi ilgili alanlara girin." },
  { name: "Bileşikleşme sıklığını seçin", text: "Aylık, üç aylık veya yıllık bileşikleşme seçeneğini belirleyin." },
  { name: "Hesapla butonuna tıklayın", text: "Hesapla butonuna tıklayarak toplam getiri ve sonucu görün." },
  { name: "Sonucu inceleyin", text: "Hesaplanan nihai tutar ve faiz getirisini inceleyin; farklı senaryoları deneyebilirsiniz." },
];

export default function BilesikFaizHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Bileşik Faiz Hesap Makinesi"
        description="Bileşik faiz ile yatırım ve birikim getirisi hesaplama aracı"
        slug="bilesik-faiz-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Bileşik Faiz Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Bileşik faiz getirisi hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Bileşik Faiz Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Bileşik Faiz Hesap Makinesi
            </h1>
            <p className="text-lg text-[#64748b]">
              Ana para, faiz oranı ve vade ile bileşik faiz getirinizi hesaplayın. 
              Mevduat ve yatırım planlaması için ücretsiz araç.
            </p>
          </div>
          <TurkeyCompoundInterestCalculator />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Bileşik Faiz Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Bileşik faiz, kazanılan faizin de ana paraya eklenerek bir sonraki dönemde faize tabi tutulduğu yöntemdir. 
                Uzun vadede basit faize göre çok daha yüksek getiri sağlar. Türkiye&apos;de vadeli mevduat ve birikim hesapları 
                genelde aylık veya günlük bileşik faiz uygular.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> ile 
                düzenli aylık yatırımlarınızı da hesaplayabilirsiniz. <Link href="/tr/blog/bireysel-emeklilik-bes-devlet-katkisi-nasil-hesaplanir" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı</Link> yazımız da ilginizi çekebilir.
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
                <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Yatırım Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Yatırım getirisi hesaplama</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Birikim Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Düzenli birikim hesaplama</p>
                </Link>
                <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <h4 className="font-semibold text-[#1e293b]">Emeklilik Hesap Makinesi</h4>
                  <p className="text-sm text-[#64748b]">Emeklilik planlaması</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
