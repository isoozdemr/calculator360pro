import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { TurkeyCurrencyConverter } from "@/components/calculators/tr/TurkeyCurrencyConverter";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Döviz Çevirici 2026 - USD, EUR, TRY Anında",
  description: "USD, EUR, GBP, TRY ve 150+ para birimi arasında anında çeviri! Güncel kurlar. Ücretsiz - seyahat ve yatırım için hemen kullanın.",
  keywords: [
    "döviz çevirici",
    "döviz kuru hesaplama",
    "para birimi çevirici",
    "usd tl çevirici",
    "eur tl çevirici",
    "döviz hesaplama",
    "forex çevirici",
    "döviz kuru",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/doviz-cevirici`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/currency-converter`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/doviz-cevirici`,
      "x-default": `${SITE_URL}/calculators/finance/currency-converter`,
    },
  },
  openGraph: {
    title: "Döviz Çevirici | Calculator360Pro",
    description: "Ücretsiz döviz çevirici. 150+ para birimi arasında anında çeviri.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/doviz-cevirici`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "Döviz kuru nasıl hesaplanır?",
    answer: "Döviz kuru, bir para biriminin başka bir para birimi cinsinden değeridir. Örneğin, 1 USD = 34.5 TRY ise, 100 USD = 3.450 TRY'dir. Döviz kurları piyasa koşullarına göre sürekli değişir.",
  },
  {
    question: "Döviz kurları ne kadar doğrudur?",
    answer: "Hesap makinesindeki döviz kurları yaklaşık değerlerdir ve referans amaçlıdır. Gerçek işlemler için bankanız, döviz büroları veya finans kurumlarından güncel kurları kontrol edin. Kurlar gün içinde değişebilir ve komisyonlar içerebilir.",
  },
  {
    question: "Hangi para birimleri destekleniyor?",
    answer: "Döviz çevirici, TRY (Türk Lirası), USD (ABD Doları), EUR (Euro), GBP (İngiliz Sterlini), JPY (Japon Yeni) ve 150+ para birimini destekler. En popüler para birimleri arasında çeviri yapabilirsiniz.",
  },
  {
    question: "Döviz çevirisi ücretsiz mi?",
    answer: "Evet, bu döviz çevirici tamamen ücretsizdir. Ancak gerçek döviz işlemleri yaparken bankalar ve döviz büroları komisyon alabilir. Bu komisyonlar çeviri sonucuna dahil değildir.",
  },
  {
    question: "Alış ve satış kuru farkı nedir?",
    answer: "Bankalar ve döviz büfeleri alış (siz satarken) ve satış (siz alırken) kuru uygular. Aradaki fark kur marjıdır. Çeviricide gösterilen tek kur ortalama/referans değeridir.",
  },
  {
    question: "Seyahat için döviz ne zaman alınmalı?",
    answer: "Kurlar dalgalı olduğu için tek bir ideal zaman yoktur. Birkaç hafta kurları takip edip ortalama bir seviyede alım yapmak ve acil ihtiyaç dışında panik alımı yapmamak mantıklıdır.",
  },
];

const howToSteps = [
  { name: "Kaynak para birimini seçin", text: "Çevirmek istediğiniz tutarın para birimini (örn. TRY, USD) seçin." },
  { name: "Hedef para birimini seçin", text: "Sonucun gösterileceği para birimini seçin." },
  { name: "Tutarı girin", text: "Çevirmek istediğiniz tutarı girin." },
  { name: "Sonucu görün", text: "Güncel kura göre hesaplanan eşdeğer tutarı görün." },
];

export default function DovizCeviriciPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Döviz Çevirici"
        description="Para birimi çevirici aracı - 150+ para birimi arasında döviz çevirisi"
        slug="doviz-cevirici"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Döviz Çevirici Nasıl Kullanılır?"
        howToDescription="Para birimi çevirisi yapmak için adımlar."
        howToSteps={howToSteps}
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
                <li className="text-white font-medium">Döviz Çevirici</li>
              </ol>
            </nav>

            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Döviz Çevirici
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-2xl">
                USD, EUR, GBP, TRY ve 150+ para birimi arasında anında döviz çevirisi. 
                Güncel döviz kurları ile hesaplama.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeyCurrencyConverter />
            <CalculatorDisclaimer category="finance" locale="tr" />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
              Döviz Çevirisi Nasıl Yapılır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  1
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Tutar Girin</h3>
                <p className="text-sm text-[#64748b]">
                  Çevrilecek tutarı girin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  2
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Para Birimlerini Seçin</h3>
                <p className="text-sm text-[#64748b]">
                  Kaynak ve hedef para birimlerini seçin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  3
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Sonuç</h3>
                <p className="text-sm text-[#64748b]">
                  Çevrilmiş tutarı ve döviz kurunu görün.
                </p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-xl">💱</span>
                Örnek: 100 USD → TRY
              </h3>
              <div className="space-y-2 text-[#64748b]">
                <p><strong className="text-[#1e293b]">Kaynak:</strong> 100 USD</p>
                <p><strong className="text-[#1e293b]">Döviz Kuru:</strong> 1 USD = 34.5 TRY (yaklaşık)</p>
                <p><strong className="text-[#1e293b]">Sonuç:</strong> <span className="text-[#10b981] font-bold">3.450 TRY</span></p>
                <p className="text-sm mt-4"><strong className="text-[#1e293b]">Not:</strong> Döviz kurları değişkendir. Gerçek işlemler için güncel kurları kontrol edin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Döviz Çevirici Nedir?
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Döviz çevirici, bir para birimindeki tutarı başka bir para birimine (örn. USD → TRY) 
                anında çeviren araçtır. Döviz kuru, piyasa koşullarına göre sürekli değişir; bu araç 
                referans kurlarla tahmini çeviri yapar. Seyahat, online alışveriş ve yatırım 
                planlaması için kullanılır. Gerçek işlemlerde banka/döviz bürosu kurları ve 
                komisyonlar geçerlidir.
              </p>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Enflasyon ve alım gücü: <Link href="/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">enflasyon hesap makinesi</Link>, 
                yatırım getirisi: <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yatırım hesap makinesi</Link>, 
                birikim: <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">birikim hesap makinesi</Link>.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                Döviz Çevirici Rehberi
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Döviz çevirici, farklı para birimleri arasında hızlı ve kolay çeviri yapmanızı sağlar. 
                Seyahat planlaması, uluslararası alışveriş, yatırım kararları ve finansal planlama için 
                kullanışlı bir araçtır.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Popüler Para Birimleri
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 border border-[#e2e8f0]">
                <ul className="space-y-3 text-[#64748b]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">•</span>
                    <div>
                      <strong className="text-[#1e293b]">TRY (Türk Lirası):</strong> Türkiye'nin resmi para birimi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">•</span>
                    <div>
                      <strong className="text-[#1e293b]">USD (ABD Doları):</strong> Dünyanın en yaygın rezerv para birimi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">•</span>
                    <div>
                      <strong className="text-[#1e293b]">EUR (Euro):</strong> Avrupa Birliği'nin resmi para birimi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">•</span>
                    <div>
                      <strong className="text-[#1e293b]">GBP (İngiliz Sterlini):</strong> Birleşik Krallık'ın para birimi
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Döviz Kuru Faktörleri
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Döviz kurları şu faktörlere göre değişir:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Ekonomik göstergeler (enflasyon, faiz oranları, büyüme)</li>
                <li>Politik istikrar ve güven</li>
                <li>Merkez bankası politikaları</li>
                <li>Uluslararası ticaret dengesi</li>
                <li>Piyasa spekülasyonları</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Türkiye&apos;de Döviz ve Kur Farkları
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Türkiye&apos;de USD, EUR ve diğer para birimleri günlük hayatta sık kullanılır. 
                Bankalar alış ve satış kuru uygular; aradaki fark kur marjıdır. Döviz alırken 
                satış kuru, satarken alış kuru baz alınır. Seyahat ve online alışveriş için 
                güncel kurları takip etmek bütçe planlamanıza yardımcı olur. Yatırım ve 
                birikim hesaplamalarında <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi Hesap Makinesi</Link> ve 
                maaş planlaması için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> araçlarımızı da kullanabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Döviz Çevirisi Ne Zaman Kullanılır?
              </h3>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Seyahat öncesi bütçe planlaması ve günlük harcama tahmini</li>
                <li>Yurt dışından online alışverişte TL karşılığını görmek</li>
                <li>Uluslararası maaş veya faturaları TRY&apos;ye çevirmek</li>
                <li>Yatırım getirilerini yerel para biriminde değerlendirmek</li>
                <li>İş seyahatleri ve gider raporları için kur hesaplama</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İpuçları ve İlgili Araçlar
              </h3>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Kurlar dalgalı; panik alım yerine bir süre takip edip ortalama seviyede işlem yapın.</li>
                <li>Alış–satış farkı (kur marjı) bankaya göre değişir; gerçek işlem öncesi güncel kurları kontrol edin.</li>
                <li><Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bütçe hesap makinesi</Link> ile seyahat harcamalarını, <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> ile gelirinizi planlayın.</li>
                <li>Döviz geliri vergiye tabi olabilir: <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link>.</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-sm text-blue-800">
                  <strong>Önemli Not:</strong> Bu hesap makinesindeki döviz kurları yaklaşık değerlerdir. 
                  Gerçek işlemler için bankanız, döviz büroları veya finans kurumlarından güncel kurları kontrol edin. 
                  Kurlar gün içinde değişebilir ve komisyonlar içerebilir.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#f8fafc] rounded-lg p-6 border border-[#e2e8f0]">
                  <h3 className="font-bold text-[#1e293b] mb-2 flex items-start gap-2">
                    <span className="text-[#2563eb]">S:</span>
                    {faq.question}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="doviz-cevirici" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}
