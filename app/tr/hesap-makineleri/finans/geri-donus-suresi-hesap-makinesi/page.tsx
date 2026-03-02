import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { PaybackPeriodCalculator } from "@/components/calculators/PaybackPeriodCalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Geri Dönüş Süresi Hesap Makinesi 2026 | Yatırım Geri Ödeme",
  description: "Geri dönüş süresi hesap makinesi 2026: Yatırım maliyeti ve yıllık/aylık nakit akışı ile yatırımın kendini kaç yılda geri ödeyeceğini hesaplayın. Ücretsiz payback period hesaplama.",
  keywords: [
    "geri dönüş süresi",
    "geri dönüş süresi hesaplama",
    "yatırım geri ödeme süresi",
    "payback period",
    "yatırım geri kazanım süresi",
    "proje geri dönüş",
    "nakit akışı geri ödeme",
    "basit geri dönüş süresi",
    "yatırım değerlendirme",
    "işletme yatırım süresi",
    "yatırım geri ödeme",
    "nakit akışı hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/geri-donus-suresi-hesap-makinesi`,
    languages: { en: `${SITE_URL}/calculators/finance/payback-period-calculator`, tr: `${SITE_URL}/tr/hesap-makineleri/finans/geri-donus-suresi-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/finance/payback-period-calculator` },
  },
  openGraph: {
    title: "Geri Dönüş Süresi Hesap Makinesi 2026 | Yatırım Geri Ödeme",
    description: "Yatırım maliyeti ve nakit akışı ile geri ödeme süresini hesaplayın. Ücretsiz payback period hesap makinesi.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/geri-donus-suresi-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  { question: "Geri dönüş süresi nedir?", answer: "Geri dönüş süresi (payback period), bir yatırımın başlangıç maliyetini, ürettiği nakit akışlarıyla kaç yıl (veya ay) içinde geri ödeyeceğini gösteren süredir. Basit formül: Başlangıç Yatırımı / Yıllık Nakit Akışı." },
  { question: "Geri dönüş süresi nasıl hesaplanır?", answer: "Basit yöntemde: İlk yatırım tutarını yıllık (veya aylık) net nakit akışına bölersiniz. Örn. 100.000 TL yatırım, yıllık 25.000 TL nakit akışı → 100.000 / 25.000 = 4 yıl. Bu araç basit geri dönüş süresini hesaplar." },
  { question: "Basit ve indirgenmiş (iskontolu) geri dönüş farkı nedir?", answer: "Basit geri dönüş, paranın zaman değerini (iskonto) dikkate almaz. İndirgenmiş geri dönüş, gelecek nakit akışlarını bugünkü değere indirger; genelde daha uzun süre çıkar. Bu hesap makinesi basit yöntemi kullanır." },
  { question: "Kısa geri dönüş süresi her zaman iyi mi?", answer: "Kısa süre riski azaltır ve sermayeyi daha çabuk geri almanızı sağlar. Ancak geri dönüş sonrası getirileri ve toplam kârı göz ardı eder. ROI veya NPV ile birlikte değerlendirmek daha sağlıklıdır." },
  { question: "Aylık nakit akışı ile nasıl hesaplanır?", answer: "Aylık net nakit akışınız varsa ilk yatırımı aylık akışa bölersiniz; sonucu 12’ye bölerek yıl cinsinden ifade edebilirsiniz. Bu araç yıllık veya aylık giriş destekler." },
  { question: "Geri dönüş süresi nerede kullanılır?", answer: "Makine/ekipman alımı, enerji verimliliği yatırımları, işletme projeleri, gayrimenkul kiraları ve nakit akışı üreten her tür yatırımda karar desteği olarak kullanılır." },
];

const howToSteps = [
  { name: "İlk yatırım tutarını girin", text: "Proje veya yatırımın toplam başlangıç maliyetini girin." },
  { name: "Nakit akışını girin", text: "Yıllık veya aylık net nakit akışı (gelir - gider) girin." },
  { name: "Hesapla", text: "Geri dönüş süresini yıl ve ay olarak görün." },
];

export default function GeriDonusSuresiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Geri Dönüş Süresi Hesap Makinesi"
        description="Yatırım maliyeti ve nakit akışı ile geri ödeme süresi hesaplama aracı"
        slug="geri-donus-suresi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Geri Dönüş Süresi Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Yatırım geri dönüş süresi hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Geri Dönüş Süresi Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Geri Dönüş Süresi Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-6">Yatırım maliyeti ve yıllık/aylık nakit akışı ile yatırımın kendini kaç yılda geri ödeyeceğini hesaplayın.</p>
          <PaybackPeriodCalculator locale="tr" />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Geri Dönüş Süresi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Geri dönüş süresi (payback period), bir yatırımın başlangıçta harcanan parayı, ürettiği nakit
                akışlarıyla kaç yıl (veya ay) içinde geri ödeyeceğini gösteren basit bir ölçüttür. Özellikle
                makine alımı, enerji yatırımları ve kiralama geliri olan projelerde “ne zaman kendini öder?”
                sorusuna yanıt verir.
              </p>
              <p className="text-[#64748b] mb-4">
                Bu araç basit geri dönüş süresini hesaplar: paranın zaman değeri (iskonto) dikkate alınmaz.
                Daha detaylı analiz için NPV (net bugünkü değer) veya yatırım getirisi (ROI) ile birlikte
                kullanılması önerilir. Yıllık veya aylık sabit nakit akışı girebilirsiniz.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Geri Dönüş Süresi Formülü</h3>
              <p className="text-[#64748b] mb-4">
                Basit geri dönüş süresi = İlk yatırım tutarı / Yıllık net nakit akışı. Örnek: 200.000 TL yatırım, yıllık 40.000 TL nakit akışı → 200.000 / 40.000 = 5 yıl. Aylık akış kullanıyorsanız sonucu 12’ye bölerek yıl cinsinden ifade edebilirsiniz. Yatırım geri kazanım süresi likidite ve risk değerlendirmesinde sık kullanılır.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Basit ve İndirgenmiş Geri Dönüş Farkı</h3>
              <p className="text-[#64748b] mb-4">
                Basit yöntem paranın zaman değerini dikkate almaz; indirgenmiş (discounted) payback period gelecek nakit akışlarını bugüne iskonto eder ve genelde daha uzun süre verir. Bu hesap makinesi basit geri dönüş süresini hesaplar. Proje değerlendirmesinde ROI veya NPV ile birlikte kullanmak daha doğrudur.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Nerede Kullanılır?</h3>
              <p className="text-[#64748b] mb-4">
                Makine ve ekipman alımı, enerji verimliliği (güneş paneli, izolasyon), işletme projeleri, gayrimenkul kiraları ve düzenli nakit akışı üreten her tür yatırımda karar desteği olarak kullanılır. Kısa geri dönüş süresi riski azaltır; ancak geri dönüş sonrası getirileri ve toplam kârı göstermez. İlgili araçlar: <Link href="/tr/hesap-makineleri/finans/yatirim-getirisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">ROI hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yatırım hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bileşik faiz hesap makinesi</Link>.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/finans/yatirim-getirisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yatırım getirisi (ROI) hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yatırım hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bileşik faiz hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">birikim hesap makinesi</Link>.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
              {faqs.map((f, i) => (
                <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
              ))}
            </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="geri-donus-suresi-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
