import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { TurkeyInvestmentCalculator } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Yatırım Hesap Makinesi 2026 - Getiri Hesapla",
  description: "Yatırım getirinizi anında hesaplayın. Bileşik getiri ile yatırım planlaması. Ücretsiz.",
  keywords: [
    "yatırım hesaplama",
    "yatırım getirisi",
    "yatırım hesap makinesi",
    "bileşik getiri hesaplama",
    "yatırım getirisi hesaplama",
    "aylık yatırım hesaplama",
    "uzun vade yatırım",
    "yatırım planlaması",
    "getiri oranı hesaplama",
    "portföy getirisi",
    "yatırım simülatör",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    languages: {
      "en": `${SITE_URL}/calculators/finance/investment-calculator`,
      "tr": `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
      "x-default": `${SITE_URL}/calculators/finance/investment-calculator`,
    },
  },
  openGraph: {
    title: "Yatırım Hesap Makinesi 2026 | Calculator360Pro",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-hesap-makinesi`,
    type: "website",
    locale: "tr_TR",
    siteName: "Calculator360Pro",
  },
};

const faqs = [
  { question: "Yatırım getirisi nasıl hesaplanır?", answer: "Getiri ((Son değer - Yatırılan) / Yatırılan) x 100. Bileşik getiri vade ve yıllık oranla hesaplanır." },
  { question: "Enflasyon getiriyi nasıl etkiler?", answer: "Reel getiri = nominal getiri - enflasyon. Uzun vadede enflasyonu yenen yatırımlar tercih edilir." },
  { question: "Aylık yatırım ile tek seferlik yatırım farkı nedir?", answer: "Aylık düzenli yatırım (DCA) riski zamana yayar; tek seferlik yatırımda zamanlama önem taşır. Hesap makinemiz her iki senaryoyu da hesaplar." },
  { question: "Yıllık getiri oranı nasıl yorumlanır?", answer: "Yıllık getiri oranı, yatırımınızın bir yılda ne kadar büyüdüğünü gösterir. Bileşik getiri uzun vadede çok önemlidir." },
  { question: "Hangi vade için yatırım yapmalı?", answer: "Uzun vadeli yatırımlar (5-10 yıl+) bileşik getiriden daha fazla fayda sağlar. Kısa süreli hedefler için düşük riskli araçları tercih edin." },
];

const howToSteps = [
  { name: "Başlangıç tutarını girin", text: "İlk yatırım tutarınızı veya mevcut portföy değerinizi girin." },
  { name: "Aylık yatırım (isteğe bağlı)", text: "Düzenli ekleyeceğiniz aylık tutarı girin. Sıfır bırakabilirsiniz." },
  { name: "Yıllık getiri oranı ve vade", text: "Beklenen yıllık getiri oranını (%) ve yatırım vadesini (yıl) seçin." },
  { name: "Hesapla", text: "Tahmini son değer ve getiri oranını görün." },
];

export default function YatirimHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Yatırım Hesap Makinesi"
        description="Başlangıç tutarı ve aylık yatırımla getiri hesaplama aracı"
        slug="yatirim-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Yatırım Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Yatırım getirisi hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Yatırım Hesap Makinesi</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Yatırım Hesap Makinesi</h1>
            <p className="text-lg text-[#64748b]">Başlangıç tutarı ve aylık yatırımla getirinizi hesaplayın.</p>
          </div>
          <TurkeyInvestmentCalculator />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <section className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Yatırım Getirisi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Yatırım getirisi, yatırdığınız sermayenin belirli bir süre sonunda ulaştığı değer ile 
                başlangıç tutarı arasındaki farkın oranıdır. Bileşik getiri sayesinde kazanımlarınız da 
                getiri üretir; bu nedenle uzun vade önemlidir. Bu hesap makinesi tek seferlik veya 
                düzenli aylık yatırımlarınızın tahmini gelecek değerini ve getiri oranını hesaplar.
              </p>
              <p className="text-[#64748b] mb-4">
                Reel getiri için enflasyonu dikkate alın: <Link href="/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Enflasyon ve alım gücü hesap makinesi</Link> ile 
                paranızın değer kaybını, <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı hesap makinesi</Link> ile 
                emeklilik birikim senaryonuzu değerlendirebilirsiniz.
              </p>
            </section>
            <section className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Yatırım Hesap Makinesi Nasıl Kullanılır?</h2>
              <p className="text-[#64748b] mb-4">Bu araç ile tek seferlik veya düzenli aylık yatırımlarınızın gelecekteki değerini ve getiri oranını hesaplayabilirsiniz. Adımlar aşağıdaki gibidir.</p>
              <ol className="list-decimal list-inside space-y-2 text-[#64748b] mb-4">
                <li><strong>Başlangıç tutarı:</strong> Elinizdeki mevcut sermayeyi veya ilk yatırım tutarını girin. Sıfır bırakırsanız sadece aylık yatırımla hesaplama yapılır.</li>
                <li><strong>Aylık yatırım:</strong> Her ay düzenli yatırmak istediğiniz tutarı girin. Dolar ortalama maliyet (DCA) stratejisi için idealdir.</li>
                <li><strong>Yıllık getiri oranı:</strong> Beklediğiniz ortalama yıllık getiri oranını (%) girin. Tarihsel hisse getirileri örnek olarak %7–10, mevduat için daha düşük oranlar kullanılabilir.</li>
                <li><strong>Vade (yıl):</strong> Yatırım süresini yıl olarak seçin. Uzun vade bileşik getiriyi artırır.</li>
                <li><strong>Hesapla:</strong> Sonuç ekranında tahmini toplam değer, toplam yatırılan tutar ve getiri oranını görürsünüz.</li>
              </ol>
            </section>
            <section className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Yatırım Getirisi Formülü</h2>
              <p className="text-[#64748b] mb-4">Bileşik getiri, paranızın üzerine kazanımların da getiri kazanması prensibine dayanır. Tek seferlik yatırım için gelecek değer formülü:</p>
              <p className="bg-[#f8fafc] p-4 rounded-lg font-mono text-sm text-[#1e293b] mb-4">Son Değer = Başlangıç × (1 + r/100)^t</p>
              <p className="text-[#64748b] mb-4">Burada r yıllık getiri oranı (%), t yıl cinsinden vadedir. Aylık düzenli yatırımda her ay eklenen tutar da bileşik getiri ile büyür; formül biraz daha karmaşık olup bu hesap makinesi her iki senaryoyu da otomatik hesaplar.</p>
              <p className="text-[#64748b]">Reel getiri için enflasyonu çıkarmanız gerekir: Reel Getiri ≈ Nominal Getiri − Enflasyon Oranı. Uzun vadede enflasyonu yenen yatırımlar satın alma gücünüzü korur.</p>
            </section>
            <section className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Yatırım Getirisi Neden Önemli?</h2>
              <p className="text-[#64748b] mb-4">Yatırım yapmadan önce hedef vade ve beklenen getiri ile ne kadar birikim yapabileceğinizi bilmek, tasarruf alışkanlığı ve emeklilik planlaması için kritiktir. Bileşik getiri sayesinde kısa vadede küçük görünen farklar, on yıllar içinde çok büyük farklara dönüşür. Ayrıca risk toleransınıza göre getiri beklentinizi ayarlayabilir; düşük riskli araçlarda (mevduat, tahvil) daha düşük oran, hisse veya fonlarda daha yüksek ama dalgalı getiri kullanılabilir.</p>
              <p className="text-[#64748b]">Bu hesap makinesi sadece tahmin amaçlıdır; gerçek getiriler piyasa koşullarına göre değişir. Yine de planlama ve karşılaştırma için <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik Faiz Hesap Makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Birikim Hesap Makinesi</Link> ile birlikte kullanarak farklı senaryoları görebilirsiniz.</p>
            </section>
            <section className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Örnek Senaryolar</h2>
              <p className="text-[#64748b] mb-4"><strong>Senaryo 1:</strong> 50.000 TL tek seferlik yatırım, %8 yıllık getiri, 10 yıl. Tahmini son değer: 50.000 × (1,08)^10 ≈ 107.946 TL. Toplam getiri yaklaşık %116.</p>
              <p className="text-[#64748b] mb-4"><strong>Senaryo 2:</strong> Aylık 1.000 TL düzenli yatırım, %7 yıllık getiri, 20 yıl. 20 yılda toplam 240.000 TL yatırılır; bileşik getiri ile tahmini son değer 520.000 TL civarında olabilir. Getiri, sadece toplam yatırımın çok üzerindedir.</p>
              <p className="text-[#64748b]"><strong>Senaryo 3:</strong> 100.000 TL başlangıç + aylık 2.000 TL, %6 getiri, 15 yıl. Hem mevcut sermaye hem düzenli ekleme birlikte büyür; emeklilik birikimi planlamak için ideal bir örnek.</p>
            </section>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve Öneriler</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Uzun vade bileşik getiriyi artırır; emeklilik birikimi için erken başlayın. <Link href="/tr/hesap-makineleri/finans/bes-devlet-katkisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BES devlet katkısı hesap makinesi</Link> kullanın.</li>
                <li>Reel getiri = nominal getiri − enflasyon. <Link href="/tr/hesap-makineleri/finans/enflasyon-alim-gucu-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Enflasyon ve alım gücü hesap makinesi</Link> ile alım gücünüzü takip edin.</li>
                <li><Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bileşik faiz hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">birikim hesap makinesi</Link> ile farklı senaryoları karşılaştırın.</li>
                <li>Vergi sonrası getiri için <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link> ile diliminizi bilin.</li>
              </ul>
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
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="yatirim-hesap-makinesi" maxResults={6} />
          </div>
        </div>
      </div>
    </>
  );
}
