import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyPercentageCalculator } from "@/components/calculators/tr/TurkeyPercentageCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Yüzde Hesap Makinesi 2026 - Anında Hesapla",
  description: "Yüzde, artış/azalış ve indirim hesaplama. Anında sonuç. Ücretsiz - vergi, maaş, KDV için hemen kullanın!",
  keywords: [
    "yüzde hesaplama",
    "yüzde hesap makinesi",
    "artış oranı hesaplama",
    "azalış oranı hesaplama",
    "indirim hesaplama",
    "oran hesaplama",
    "yüzde bulma",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/math/percentage-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    },
  },
  openGraph: {
    title: "Yüzde Hesap Makinesi | Calculator360Pro",
    description: "Ücretsiz yüzde hesap makinesi. Yüzde hesaplama, artış/azalış oranı bulma.",
    url: `${SITE_URL}/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const yuzdeFaqs = [
  { question: "Bir sayının yüzdesi nasıl hesaplanır?", answer: "Bir sayının yüzdesini hesaplamak için: (Sayı × Yüzde) / 100 formülü kullanılır. Örneğin, 200'ün %25'i = (200 × 25) / 100 = 50." },
  { question: "Artış oranı nasıl hesaplanır?", answer: "Artış oranı formülü: ((Yeni Değer - Eski Değer) / Eski Değer) × 100. Örneğin, 100'den 120'ye artış = ((120-100)/100) × 100 = %20 artış." },
  { question: "Bir sayı diğerinin yüzde kaçıdır nasıl bulunur?", answer: "Formül: (Parça Değer / Toplam Değer) × 100. Örneğin, 25 sayısı 100'ün yüzde kaçıdır = (25/100) × 100 = %25." },
  { question: "KDV dahil fiyattan KDV nasıl hesaplanır?", answer: "KDV dahil fiyattan KDV'yi çıkarmak için: Net = Brüt / (1 + KDV oranı). %20 KDV için: 120 TL'den 100 TL net, 20 TL KDV." },
  { question: "Yüzde puan ile yüzde farkı nedir?", answer: "Yüzde puan mutlak farktır (örn. %10'dan %12'ye = 2 puan). Yüzde farkı oransal artıştır: ((12-10)/10)×100 = %20 artış." },
  { question: "İki yüzde artış/azalış neden toplanmaz?", answer: "Çünkü her işlem farklı taban üzerinden uygulanır. %20 artış sonra %10 azalış, toplam %10 artış değildir; 100→120→108 olur." },
];

const howToSteps = [
  { name: "Hesaplama türünü seçin", text: "Yüzde bulma, artış/azalış oranı veya KDV hesaplama seçin." },
  { name: "Değerleri girin", text: "İstenen sayıları ilgili alanlara girin." },
  { name: "Hesapla", text: "Sonucu anında görün." },
];

export default function YuzdeHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Yüzde Hesap Makinesi"
        description="Yüzde hesaplama aracı"
        slug="yuzde-hesap-makinesi"
        categorySlug="matematik"
        categoryName="Matematik"
        dateModified={DATA_VERSION.lastUpdated}
        category="math"
        faqs={yuzdeFaqs}
        howToName="Yüzde Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Yüzde hesaplamak için adımlar."
        howToSteps={howToSteps}
      />
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-[#64748b]">
              <li>
                <Link href="/tr" className="hover:text-[#2563eb]">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">
                  Hesap Makineleri
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tr/hesap-makineleri/matematik" className="hover:text-[#2563eb]">
                  Matematik
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Yüzde Hesap Makinesi</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Yüzde Hesap Makinesi
            </h1>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Yüzde hesaplama, artış/azalış oranı bulma ve oran hesaplama. 
              Günlük hayatta en çok ihtiyaç duyulan hesaplama aracı.
            </p>
          </div>

          {/* Calculator */}
          <TurkeyPercentageCalculator />

          {/* Educational Content */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yüzde Hesaplama Nedir?
              </h2>
              <p className="text-[#64748b] mb-4">
                Yüzde (%), bir sayının 100&apos;e bölünmesiyle elde edilen oranı ifade eder. 
                Yüzde hesaplama, günlük hayatta alışverişten finansal kararlara kadar 
                birçok alanda karşımıza çıkar.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yüzde Hesaplama Formülleri
              </h2>
              <div className="space-y-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">1. Bir Sayının Yüzdesini Bulma</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Sonuç = (Sayı × Yüzde) ÷ 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 1000&apos;in %20&apos;si = (1000 × 20) ÷ 100 = 200
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">2. Artış Oranı Hesaplama</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Artış % = ((Yeni - Eski) ÷ Eski) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 100&apos;den 125&apos;e artış = ((125-100) ÷ 100) × 100 = %25
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">3. Azalış Oranı Hesaplama</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Azalış % = ((Eski - Yeni) ÷ Eski) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 100&apos;den 80&apos;e azalış = ((100-80) ÷ 100) × 100 = %20
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">4. Bir Sayının Yüzde Kaç Olduğunu Bulma</h3>
                  <p className="font-mono text-center py-2 bg-white rounded border">
                    Yüzde = (Parça ÷ Toplam) × 100
                  </p>
                  <p className="text-sm text-[#64748b] mt-2">
                    Örnek: 25, 200&apos;ün yüzde kaçı = (25 ÷ 200) × 100 = %12.5
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Günlük Hayatta Yüzde Kullanımı
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">🛒 Alışveriş</h3>
                  <p className="text-sm text-[#64748b]">
                    İndirim hesaplama, KDV hesaplama, kampanya fiyatları
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">💰 Finans</h3>
                  <p className="text-sm text-[#64748b]">
                    Faiz oranları, yatırım getirisi, kredi hesaplama
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">💼 İş Hayatı</h3>
                  <p className="text-sm text-[#64748b]">
                    Maaş zammı, satış hedefleri, performans değerlendirme
                  </p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1e293b] mb-2">📊 Ekonomi</h3>
                  <p className="text-sm text-[#64748b]">
                    Enflasyon oranı, büyüme oranı, işsizlik oranı
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sık Kullanılan Yüzde Örnekleri
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">İşlem</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Örnek</th>
                      <th className="px-4 py-3 text-left font-semibold text-[#1e293b]">Sonuç</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%10 indirim</td>
                      <td className="px-4 py-3 text-[#64748b]">100 TL ürün</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">90 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%20 KDV</td>
                      <td className="px-4 py-3 text-[#64748b]">500 TL + KDV</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">600 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%15 bahşiş</td>
                      <td className="px-4 py-3 text-[#64748b]">200 TL hesap</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">30 TL</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#64748b]">%25 artış</td>
                      <td className="px-4 py-3 text-[#64748b]">20.000 TL maaş</td>
                      <td className="px-4 py-3 text-[#1e293b] font-medium">25.000 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Finansta Yüzde Kullanımı
              </h2>
              <p className="text-[#64748b] mb-4">
                Vergi dilimleri, maaş zamları, kredi faizleri ve yatırım getirileri yüzde ile ifade edilir. 
                2026 gelir vergisi dilimlerini hesaplamak için <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Vergi Hesap Makinesi</Link>, 
                brüt-net maaş için <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Maaş Hesap Makinesi</Link> aracımızı kullanabilirsiniz. 
                İndirimli fiyat hesaplarken <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">İndirim Hesap Makinesi</Link> de yüzde hesaplamalarınızı kolaylaştırır.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Yüzde Hesaplamada Sık Yapılan Hatalar
              </h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li><strong>Artış/azalışta taban karışıklığı:</strong> %20 artış sonrası %20 azalş aynı değere dönmez (örn. 100 → 120 → 96). Taban her seferinde değişir.</li>
                <li><strong>Çoklu indirimleri toplamak:</strong> %20 + %10 indirim, %30 indirim değildir; sırayla uygulanır (100 → 80 → 72).</li>
                <li><strong>Yüzde puan vs yüzde:</strong> Faiz oranı %10&apos;dan %12&apos;ye çıktığında 2 puan artış, %20 oransal artıştır (12/10 - 1).</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4 mb-8">
                {yuzdeFaqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#e2e8f0] pb-4 last:border-0">
                    <h3 className="font-semibold text-[#1e293b] mb-2">{faq.question}</h3>
                    <p className="text-[#64748b] text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Uzman İpuçları
              </h2>
              <p className="text-[#64748b] mb-4">
                Alışverişte indirimleri karşılaştırırken indirimli fiyatı değil, orijinal fiyat üzerinden yüzdeyi düşünün. 
                Maaş görüşmelerinde brüt artış oranı ile net artış oranı farklıdır; vergi dilimi değişebilir. 
                Yatırım getirilerinde yıllık yüzde getiri (APR) ile bileşik getiriyi ayırt edin. 
                Daha fazla finansal hesaplama için <Link href="/tr/blog/finansal-okuryazarlik-temel-kavramlar-ve-pratik-ipuclari" className="text-[#2563eb] hover:underline font-medium">Finansal Okuryazarlık</Link> blog yazımıza göz atın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
