import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyCurrencyConverter } from "@/components/calculators/tr/TurkeyCurrencyConverter";

export const metadata: Metadata = {
  title: "Döviz Çevirici - Döviz Kuru Hesaplama 2026 | Calculator360Pro",
  description: "Ücretsiz döviz çevirici. USD, EUR, GBP, TRY ve 150+ para birimi arasında anında döviz çevirisi. Güncel döviz kurları ile hesaplama.",
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
];

export default function DovizCeviriciPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Döviz Çevirici",
    description: "Para birimi çevirici aracı - 150+ para birimi arasında döviz çevirisi",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/doviz-cevirici`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY"
    },
    inLanguage: "tr"
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
                  Gelir vergisi hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/hesap-makineleri/finans/maas-hesap-makinesi"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">💵</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Maaş Hesap Makinesi
                </h3>
                <p className="text-sm text-[#64748b]">
                  Brüt-net maaş hesaplama
                </p>
              </Link>
              <Link 
                href="/tr/blog"
                className="bg-white p-6 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors group"
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#2563eb] mb-2">
                  Blog Yazıları
                </h3>
                <p className="text-sm text-[#64748b]">
                  Finans rehberleri ve ipuçları
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
