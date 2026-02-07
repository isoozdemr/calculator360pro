import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyDiscountCalculator } from "@/components/calculators/tr/TurkeyDiscountCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "İndirim Hesap Makinesi 2026 - Tasarruf Hesapla",
  description: "İndirimli fiyat ve tasarruf anında! Yüzde indirimden son fiyata. Ücretsiz - alışverişte akıllı karar verin.",
  keywords: [
    "indirim hesaplama",
    "indirim hesap makinesi",
    "indirimli fiyat hesaplama",
    "yüzde indirim hesaplama",
    "tasarruf hesaplama",
    "satış fiyatı hesaplama",
    "indirim oranı hesaplama",
    "ücretsiz indirim hesap makinesi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/indirim-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/discount-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/indirim-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "İndirim Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz indirim hesap makinesi. İndirimli fiyat ve tasarruf hesaplama.",
    url: `${SITE_URL}/tr/hesap-makineleri/matematik/indirim-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  {
    question: "İndirim nasıl hesaplanır?",
    answer: "İndirim hesaplama formülü: İndirim Tutarı = (Orijinal Fiyat × İndirim Yüzdesi) / 100. İndirimli Fiyat = Orijinal Fiyat - İndirim Tutarı. Örneğin, 100 TL'lik ürün %20 indirimle: İndirim = (100 × 20) / 100 = 20 TL, İndirimli Fiyat = 100 - 20 = 80 TL.",
  },
  {
    question: "Yüzde indirim nasıl bulunur?",
    answer: "Yüzde indirim bulmak için: ((Orijinal Fiyat - İndirimli Fiyat) / Orijinal Fiyat) × 100 formülü kullanılır. Örneğin, 100 TL'den 80 TL'ye düşen ürün: ((100-80)/100) × 100 = %20 indirim.",
  },
  {
    question: "Çoklu indirim nasıl hesaplanır?",
    answer: "Çoklu indirimler (örneğin %20 + %10) toplanmaz, sırayla uygulanır. İlk indirim uygulanır, sonra ikinci indirim yeni fiyat üzerinden hesaplanır. Örneğin, 100 TL ürün: İlk %20 = 80 TL, sonra %10 = 72 TL.",
  },
  {
    question: "İndirimli fiyat ne zaman avantajlıdır?",
    answer: "İndirimli fiyat, orijinal fiyatın altında olduğunda avantajlıdır. Ancak ihtiyacınız olmayan ürünler için indirim bile olsa gereksiz harcama yapmamaya dikkat edin. İndirim oranı yüksek olsa bile, gerçekten ihtiyacınız olan ürünleri tercih edin.",
  },
  {
    question: "KDV dahil indirimli fiyat nasıl hesaplanır?",
    answer: "Önce indirim uygulayın, sonra KDV ekleyin veya KDV dahil fiyattan indirimi düşünün. Örnek: 100 TL + %20 KDV = 120 TL. %10 indirim: 120 × 0,9 = 108 TL indirimli KDV dahil fiyat.",
  },
  {
    question: "En iyi indirim dönemleri ne zaman?",
    answer: "Sezon sonu, Black Friday, bayram kampanyaları ve yıl sonu indirimleri genelde daha yüksek oranlıdır. Fiyat geçmişini takip ederek gerçek indirimi değerlendirin.",
  },
];

const howToSteps = [
  { name: "Orijinal fiyatı girin", text: "İndirim öncesi fiyatı girin." },
  { name: "İndirim oranı veya tutarı", text: "Yüzde indirim (örn. %20) veya indirim tutarını girin." },
  { name: "Hesapla", text: "İndirimli fiyat ve tasarruf tutarını görün." },
];

export default function IndirimHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="İndirim Hesap Makinesi"
        description="İndirim hesaplama aracı - İndirimli fiyat, indirim tutarı ve tasarruf hesaplama"
        slug="indirim-hesap-makinesi"
        categorySlug="matematik"
        categoryName="Matematik"
        dateModified={DATA_VERSION.lastUpdated}
        category="math"
        faqs={faqs}
        howToName="İndirim Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="İndirimli fiyat hesaplamak için adımlar."
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
                  <Link href="/tr/hesap-makineleri/matematik" className="hover:text-white transition-colors">
                    Matematik
                  </Link>
                </li>
                <li><span className="mx-2">/</span></li>
                <li className="text-white font-medium">İndirim Hesap Makinesi</li>
              </ol>
            </nav>

            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                İndirim Hesap Makinesi
              </h1>
              <p className="text-lg text-[#94a3b8] max-w-2xl">
                İndirimli fiyat, indirim tutarı ve tasarruf hesaplama. 
                Alışverişte akıllı kararlar verin.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <TurkeyDiscountCalculator />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
              İndirim Nasıl Hesaplanır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  1
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Orijinal Fiyat</h3>
                <p className="text-sm text-[#64748b]">
                  İndirim öncesi orijinal fiyatı belirleyin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  2
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">İndirim Yüzdesi</h3>
                <p className="text-sm text-[#64748b]">
                  Uygulanacak indirim yüzdesini girin.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#2563eb]">
                  3
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">Sonuç</h3>
                <p className="text-sm text-[#64748b]">
                  İndirim tutarı ve indirimli fiyatı görün.
                </p>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                Örnek Hesaplama: 500 TL Ürün %25 İndirim
              </h3>
              <div className="space-y-2 text-[#64748b]">
                <p><strong className="text-[#1e293b]">Orijinal Fiyat:</strong> 500 TL</p>
                <p><strong className="text-[#1e293b]">İndirim Yüzdesi:</strong> %25</p>
                <p><strong className="text-[#1e293b]">İndirim Tutarı:</strong> 500 × 0.25 = 125 TL</p>
                <p><strong className="text-[#1e293b]">İndirimli Fiyat:</strong> 500 - 125 = <span className="text-[#10b981] font-bold">375 TL</span></p>
                <p><strong className="text-[#1e293b]">Tasarruf:</strong> 125 TL (%25)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                İndirim Nedir?
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                İndirim, bir ürün veya hizmetin orijinal fiyatından belirli bir yüzde veya tutar 
                düşülerek satılmasıdır. Yüzde olarak ifade edilir (%10, %25 vb.). İndirimli fiyat = 
                Orijinal fiyat − (Orijinal fiyat × İndirim yüzdesi / 100). Alışveriş, maaş zamları 
                ve vergi indirimlerinde de yüzde hesaplama sık kullanılır; 
                <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium mx-1">yüzde hesap makinesi</Link> ve 
                <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link> ile 
                karşılaştırma yapabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
                İndirim Hesaplama Rehberi
              </h2>
              
              <p className="text-[#64748b] mb-6 leading-relaxed">
                İndirim hesaplama, alışveriş yaparken en önemli becerilerden biridir. 
                Doğru indirim hesaplaması yaparak hem para tasarrufu sağlayabilir hem de 
                gereksiz harcamalardan kaçınabilirsiniz. Bütçe planlaması için 
                <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> bütçe hesap makinesi</Link> ve 
                <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> maaş hesap makinesi</Link> araçlarımızdan faydalanın.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İndirim Hesaplama Formülleri
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 border border-[#e2e8f0]">
                <ul className="space-y-3 text-[#64748b]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">1.</span>
                    <div>
                      <strong className="text-[#1e293b]">İndirim Tutarı:</strong> (Orijinal Fiyat × İndirim Yüzdesi) / 100
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">2.</span>
                    <div>
                      <strong className="text-[#1e293b]">İndirimli Fiyat:</strong> Orijinal Fiyat - İndirim Tutarı
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2563eb] font-bold">3.</span>
                    <div>
                      <strong className="text-[#1e293b]">Yüzde İndirim Bulma:</strong> ((Orijinal - İndirimli) / Orijinal) × 100
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Alışveriş İpuçları
              </h3>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>İndirim oranı yüksek olsa bile, gerçekten ihtiyacınız olan ürünleri tercih edin</li>
                <li>Çoklu indirimleri kontrol edin - bazen toplam indirim daha fazla olabilir</li>
                <li>İndirimli fiyatı diğer mağazalarla karşılaştırın</li>
                <li>Kampanya tarihlerini takip edin - sezon sonu indirimleri genellikle daha yüksektir</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                KDV ve İndirim
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Türkiye&apos;de birçok ürün %18 veya %20 KDV&apos;ye tabidir. İndirimli fiyat hesaplarken KDV&apos;nin 
                indirim öncesi mi sonrası mı uygulandığını kontrol edin. Çoğu mağaza indirimli fiyat üzerinden 
                KDV hesaplar. Vergi hesaplamaları için <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi Hesap Makinesi</Link> aracımızı kullanabilirsiniz.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                İndirim Stratejileri ve Tasarruf
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Black Friday, sezon sonu ve bayram kampanyalarında indirim oranları yüksek olabilir. 
                Ancak &quot;önce fiyatı yükseltip sonra indirim&quot; taktiğine dikkat edin; gerçek tasarrufu 
                anlamak için benzer ürünlerin piyasa fiyatını karşılaştırın. Yüzde hesaplama için 
                <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium"> Yüzde Hesap Makinesi</Link> ile 
                indirim oranını ve son fiyatı anında bulabilirsiniz. Bütçe planlaması yaparken 
                <Link href="/tr/blog/aylik-butce-nasil-planlanir-tasarruf-yontemleri" className="text-[#2563eb] hover:underline font-medium"> Aylık Bütçe Nasıl Planlanır?</Link> yazımızdan faydalanın.
              </p>

              <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-4">
                Gerçek Hayat Örnekleri
              </h3>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                1.500 TL&apos;lik bir üründe %25 indirim: İndirim tutarı 375 TL, ödeyeceğiniz 1.125 TL. 
                3.000 TL&apos;lik konut kredisi masraflarında %10 indirim kampanyası: 300 TL tasarruf. 
                Toplu alımlarda &quot;2 al 1 öde&quot; kampanyası aslında yaklaşık %33 indirime denk gelir; 
                birim fiyatı hesaplayarak diğer indirimlerle karşılaştırabilirsiniz.
              </p>
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
            <RelatedCalculatorsTR categorySlug="matematik" currentSlug="indirim-hesap-makinesi" maxResults={6} />
          </div>
        </section>
      </div>
    </>
  );
}
