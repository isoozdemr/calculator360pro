import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { ROICalculator } from "@/components/calculators/ROICalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "ROI Hesap Makinesi 2026 - Yatırım Getirisi Oranı | Ücretsiz",
  description: "ROI hesap makinesi 2026: Yatırım maliyeti ve kazanç ile getiri oranı (ROI) yüzdesini hesaplayın. İş ve yatırım kararları için ücretsiz ROI hesaplama; anında sonuç. Yüzde getiri.",
  keywords: [
    "ROI hesap makinesi",
    "yatırım getirisi hesaplama",
    "getiri oranı",
    "ROI yüzdesi",
    "yatırım kârı hesaplama",
    "yatırım getirisi oranı",
    "ROI formülü",
    "işletme ROI",
    "sermaye getirisi",
    "yatırım performansı",
    "return on investment",
    "kâr oranı hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-getirisi-hesap-makinesi`,
    languages: { en: `${SITE_URL}/calculators/finance/roi-calculator`, tr: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-getirisi-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/finance/roi-calculator` },
  },
  openGraph: {
    title: "ROI Hesap Makinesi 2026 - Yatırım Getirisi Oranı | Ücretsiz",
    description: "Yatırım maliyeti ve kazanç ile ROI yüzdesi hesaplayın. İş ve yatırım kararları için ücretsiz ROI hesap makinesi.",
    url: `${SITE_URL}/tr/hesap-makineleri/finans/yatirim-getirisi-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  { question: "ROI nedir?", answer: "ROI (Return on Investment – Yatırım Getirisi), yatırıma harcanan tutarın ne kadarının kâr (veya zarar) olarak geri döndüğünü yüzde olarak gösteren orandır. Formül: (Kazanç - Maliyet) / Maliyet × 100." },
  { question: "ROI nasıl hesaplanır?", answer: "ROI = (Kazanç - Maliyet) / Maliyet × 100. Örneğin 10.000 TL yatırıp 12.000 TL elde ettiyseniz: (12.000 - 10.000) / 10.000 × 100 = %20 ROI. Negatif ROI zararı gösterir." },
  { question: "İyi bir ROI oranı nedir?", answer: "Sektör ve riskine göre değişir. Hisse senetleri uzun vadede ortalama %7–10 getirebilir; gayrimenkul veya işletme yatırımları farklı aralıklarda olabilir. ROI tek başına riski göstermez; süre de önemlidir." },
  { question: "ROI negatif olabilir mi?", answer: "Evet. Yatırım değer kaybettiyse kazanç maliyetten az olur ve ROI negatif çıkar. Örn. 10.000 TL yatırım 8.000 TL’ye düştüyse ROI = -%20." },
  { question: "ROI ile yıllık getiri farkı nedir?", answer: "ROI toplam dönem getirisidir. Yıllık getiri (CAGR vb.) aynı getiriyi yıllık bazda ifade eder. 5 yılda %50 ROI, yıllık yaklaşık %8,45’e denk gelir. Süre uzadıkça yıllık getiri daha anlamlıdır." },
  { question: "ROI nerede kullanılır?", answer: "Hisse, emlak, işletme, proje yatırımlarında; pazarlama harcamalarının getirisi (marketing ROI); eğitim veya ekipman yatırımlarında karar desteği olarak kullanılır." },
];

const howToSteps = [
  { name: "Maliyet ve kazancı girin", text: "Yatırım maliyetini (veya çıkış değerini) ve elde edilen kazancı (veya güncel değeri) girin." },
  { name: "İsteğe bağlı süre", text: "Varsa yatırım süresini (yıl) girerek yıllık getiri de görebilirsiniz." },
  { name: "Hesapla", text: "ROI yüzdesini (ve varsa yıllık getiriyi) görün." },
];

export default function YatirimGetirisiHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Yatırım Getirisi (ROI) Hesap Makinesi"
        description="Yatırım maliyeti ve kazanç ile ROI yüzdesi hesaplama aracı"
        slug="yatirim-getirisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="ROI Hesap Makinesi Nasıl Kullanılır?"
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
              <li className="text-[#1e293b] font-medium">Yatırım Getirisi (ROI) Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Yatırım Getirisi (ROI) Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-6">Yatırım maliyeti ve kazanç ile getiri oranı (ROI) yüzdesini hesaplayın.</p>
          <ROICalculator locale="tr" />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">ROI Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                ROI (Return on Investment – Yatırım Getirisi), bir yatırıma harcanan paranın ne kadarının kâr
                (veya zarar) olarak geri döndüğünü yüzde ile ifade eden ölçüttür. Hem bireysel yatırımlar (hisse,
                emlak, kripto) hem de işletme projeleri ve pazarlama harcamaları için kullanılır.
              </p>
              <p className="text-[#64748b] mb-4">
                Formül: (Kazanç - Maliyet) / Maliyet × 100. Pozitif ROI kâr, negatif ROI zarar anlamına gelir.
                ROI süreyi dikkate almaz; aynı ROI 1 yılda veya 10 yılda elde edilmiş olabilir. Karşılaştırma
                için yıllık getiri (CAGR) veya geri dönüş süresi hesabı da yapılabilir.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">ROI Formülü ve Örnek</h3>
              <p className="text-[#64748b] mb-4">
                Yatırım getirisi hesaplama: ROI = (Kazanç − Maliyet) / Maliyet × 100. Örnek: 10.000 TL yatırıp 12.500 TL elde ettiyseniz kazanç 2.500 TL, ROI = (2.500 / 10.000) × 100 = %25. Zarar durumunda kazanç negatiftir; örn. 10.000 TL 8.000 TL’ye düştüyse ROI = −%20. İşletme ROI pazarlama, ekipman veya proje yatırımlarında da aynı formülle hesaplanır.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">ROI ve Yıllık Getiri Farkı</h3>
              <p className="text-[#64748b] mb-4">
                ROI toplam dönem getirisidir; süreyi göstermez. Beş yılda %50 ROI ile bir yılda %50 ROI farklıdır. Yıllık getiri (CAGR) karşılaştırma için daha anlamlıdır. Sermaye getirisi değerlendirirken hem ROI hem de yatırım süresini dikkate alın. Bu ROI hesap makinesi isteğe bağlı süre girildiğinde yıllık getiri de sunar.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">İyi ROI Oranı Ne Olmalı?</h3>
              <p className="text-[#64748b] mb-4">
                Sektör ve riske göre değişir. Hisse senetleri uzun vadede ortalama %7–10 yıllık getiri sunabilir; gayrimenkul veya işletme yatırımları farklı aralıklarda olabilir. Yatırım performansı tek başına ROI ile ölçülmez; risk, likidite ve süre de önemlidir. Kısa vadeli yüksek ROI genelde daha yüksek risk taşır.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">ROI Nerede Kullanılır?</h3>
              <p className="text-[#64748b] mb-4">
                Hisse, emlak, kripto ve diğer varlık yatırımlarında; makine veya yazılım alımında; pazarlama harcamalarının getirisi (marketing ROI); eğitim veya beceri yatırımlarında karar desteği olarak kullanılır. Yatırım getirisi oranı proje ve bütçe planlamasında sıkça referans alınır. İlgili araçlar: <Link href="/tr/hesap-makineleri/finans/geri-donus-suresi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">geri dönüş süresi hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yatırım hesap makinesi</Link>, <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bileşik faiz hesap makinesi</Link>.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yatırım hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/geri-donus-suresi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">geri dönüş süresi hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bileşik faiz hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/finans/emeklilik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">emeklilik hesap makinesi</Link>.
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
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="yatirim-getirisi-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
