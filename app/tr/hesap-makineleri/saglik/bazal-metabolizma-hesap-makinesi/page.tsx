import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { BMRCalculator } from "@/components/calculators/BMRCalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "BMR Hesap Makinesi 2026 - Bazal Metabolizma Hızı | Ücretsiz",
  description: "BMR hesap makinesi 2026: Bazal metabolizma hızınızı (dinlenme kalorisi) Mifflin-St Jeor formülü ile hesaplayın. Diyet ve kilo planı için ücretsiz BMR hesaplama; anında sonuç. TDEE temeli.",
  keywords: [
    "BMR hesap makinesi",
    "bazal metabolizma hesaplama",
    "bazal metabolizma hızı",
    "dinlenme kalorisi",
    "Mifflin-St Jeor",
    "günlük kalori ihtiyacı",
    "metabolizma hesaplama",
    "BMR formülü",
    "kalori hesaplama",
    "kilo verme kalori",
    "TDEE BMR farkı",
    "dinlenirken kalori",
    "kalori ihtiyacı hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/bazal-metabolizma-hesap-makinesi`,
    languages: { en: `${SITE_URL}/calculators/health/bmr-calculator`, tr: `${SITE_URL}/tr/hesap-makineleri/saglik/bazal-metabolizma-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/health/bmr-calculator` },
  },
  openGraph: {
    title: "BMR Hesap Makinesi 2026 - Bazal Metabolizma Hızı | Ücretsiz",
    description: "Bazal metabolizma hızı (dinlenme kalorisi) Mifflin-St Jeor ile hesaplayın. Diyet ve kilo planı için ücretsiz BMR hesaplama aracı.",
    url: `${SITE_URL}/tr/hesap-makineleri/saglik/bazal-metabolizma-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  { question: "BMR nedir?", answer: "BMR (Bazal Metabolizma Hızı), vücudunuzun tam dinlenme halinde (uyanık ama hareket etmeden) nefes alma, dolaşım, hücre yenilenmesi gibi yaşamsal fonksiyonlar için harcadığı günlük kalori miktarıdır." },
  { question: "BMR hangi formülle hesaplanır?", answer: "Bu araç Mifflin-St Jeor denklemini kullanır. Akademi ve diyetisyenler tarafından önerilen güncel formüldür. Cinsiyet, yaş, kilo ve boy ile hesaplanır." },
  { question: "BMR ile TDEE farkı nedir?", answer: "BMR sadece dinlenme kalorisidir. TDEE (Toplam Günlük Enerji Harcaması) ise BMR artı günlük aktivite (iş, egzersiz, yürüyüş) ile harcanan toplam kaloridir. Kilo vermek için TDEE altında, kilo almak için üstünde beslenilir." },
  { question: "BMR kilo vermek için nasıl kullanılır?", answer: "BMR’nin altında uzun süre beslenmek önerilmez. Genelde TDEE’den 300–500 kalori düşük alım güvenli zayıflama sağlar. Önce BMR’nizi öğrenin, sonra kalori hesap makinesi ile günlük ihtiyacınızı (TDEE) hesaplayın." },
  { question: "BMR neden cinsiyet ve yaşa göre değişir?", answer: "Erkeklerde ortalama kas kütlesi daha fazla olduğu için BMR genelde daha yüksektir. Yaş ilerledikçe metabolizma yavaşlar, bu yüzden yaş BMR formülünde düşürücü etki yapar." },
  { question: "BMR sonucu kesin mi?", answer: "Formül tahminidir. Gerçek BMR kişiden kişiye (kas/yağ oranı, genetik, sağlık durumu) değişir. Beslenme ve kilo planı için diyetisyen veya doktorla birlikte kullanılması önerilir." },
];

const howToSteps = [
  { name: "Cinsiyet ve yaşı girin", text: "Cinsiyet ve yaşınızı seçin." },
  { name: "Kilo ve boyu girin", text: "Kilonuzu (kg veya lb) ve boyunuzu (cm veya inç) girin." },
  { name: "Hesapla", text: "BMR’nizi (kcal/gün) görün." },
];

export default function BazalMetabolizmaHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Bazal Metabolizma (BMR) Hesap Makinesi"
        description="BMR – dinlenirken harcanan kalori (Mifflin-St Jeor) hesaplama aracı"
        slug="bazal-metabolizma-hesap-makinesi"
        categorySlug="saglik"
        categoryName="Sağlık"
        dateModified={DATA_VERSION.lastUpdated}
        category="health"
        faqs={faqs}
        howToName="BMR Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Bazal metabolizma hızı hesaplamak için adımlar."
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
              <li><Link href="/tr/hesap-makineleri/saglik" className="hover:text-[#2563eb]">Sağlık</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Bazal Metabolizma Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Bazal Metabolizma (BMR) Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-6">Dinlenirken harcadığınız günlük kalori – Mifflin-St Jeor formülü.</p>
          <BMRCalculator locale="tr" />
          <CalculatorDisclaimer category="health" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">BMR Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Bazal metabolizma hızı (BMR), vücudunuzun tam dinlenme halinde – uyanık ama hiç hareket etmeden –
                nefes alma, kan dolaşımı, organ fonksiyonları ve hücre yenilenmesi için harcadığı kalori miktarıdır.
                Günlük toplam kalori ihtiyacının (TDEE) temelini oluşturur.
              </p>
              <p className="text-[#64748b] mb-4">
                Mifflin-St Jeor formülü, cinsiyet, yaş, kilo ve boy kullanarak BMR tahmini verir. Diyet ve kilo
                hedefleri için önce BMR’nizi bilmek, sonra aktiviteyle TDEE’yi hesaplamak faydalıdır. BMR’nin
                altında sürekli beslenmek metabolizmayı yavaşlatabileceği için uzun vadede önerilmez.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Mifflin-St Jeor Formülü</h3>
              <p className="text-[#64748b] mb-4">
                BMR hesaplama için güncel standart Mifflin-St Jeor denklemidir. Erkekler için: BMR = 10 × kilo (kg) + 6,25 × boy (cm) − 5 × yaş + 5. Kadınlar için: BMR = 10 × kilo (kg) + 6,25 × boy (cm) − 5 × yaş − 161. Sonuç günlük kalori (kcal) cinsindendir. Bu formül yetişkinler için geçerli olup çocuklar veya aşırı yaşlı bireyler için farklı formüller kullanılabilir. BMR hesap makinesi imperial (lb, inç) veya metrik (kg, cm) birimleri destekler.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">BMR ile TDEE İlişkisi</h3>
              <p className="text-[#64748b] mb-4">
                TDEE (Toplam Günlük Enerji Harcaması), BMR’ye günlük aktivite çarpanı uygulanarak bulunur. Hareketsiz yaşam için TDEE ≈ BMR × 1,2; hafif aktif için ≈ BMR × 1,375; orta aktif için ≈ BMR × 1,55; çok aktif için daha yüksek çarpanlar kullanılır. Kilo vermek için genelde TDEE’den 300–500 kcal düşük alım önerilir; BMR’nin altına düşmemek önemlidir. Günlük kalori ihtiyacı hesaplama için <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link> TDEE ve makro da verir.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">BMR Neden Cinsiyet ve Yaşa Göre Değişir?</h3>
              <p className="text-[#64748b] mb-4">
                Ortalama olarak erkeklerde kas kütlesi ve vücut yüzeyi daha fazla olduğu için dinlenme metabolizması daha yüksektir; formülde +5 ile yansıtılır. Kadınlarda −161 terimi bu farkı düzeltir. Yaş arttıkça metabolizma yavaşlar; formülde yaş çarpanı (−5 × yaş) BMR’yi düşürür. Bu nedenle aynı kilo ve boyda 20 yaşındaki ile 50 yaşındaki kişinin BMR’si farklı çıkar. Bazal metabolizma hesaplama kişisel diyet planı için ilk adımdır.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Kilo Verme ve BMR Kullanımı</h3>
              <p className="text-[#64748b] mb-4">
                Kalori açığı oluştururken BMR’nin altında uzun süre kalmak metabolizmayı yavaşlatabilir ve kas kaybı riskini artırabilir. Güvenli kilo verme için TDEE’den günde 300–500 kcal eksik almak genelde yeterlidir (haftada yaklaşık 0,5 kg). Önce bu BMR hesap makinesi ile dinlenme kalorinizi öğrenin, sonra aktivite düzeyinize göre TDEE’yi hesaplayıp hedef kaloriyi belirleyin. Kilo verme kalori planı yaparken diyetisyen veya doktor desteği almanız önerilir.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">BMR Sonucu Ne Kadar Doğru?</h3>
              <p className="text-[#64748b] mb-4">
                Formül tahminidir; gerçek BMR kas/yağ oranı, genetik, tiroid ve sağlık durumuna göre değişir. Laboratuvar ölçümü (dolaylı kalorimetri) daha isabetlidir ancak pahalıdır. Günlük kullanım ve diyet planlama için Mifflin-St Jeor ile BMR hesaplama yeterli kabul edilir. Sonuçları bir başlangıç noktası olarak kullanıp vücudunuzun tepkisine göre kaloriyi ayarlayabilirsiniz. Metabolizma hesaplama araçları bilgilendirme amaçlıdır; tıbbi karar yerine geçmez.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">İlgili Hesaplamalar</h3>
              <p className="text-[#64748b] mb-4">
                BMR’den sonra adım, günlük toplam kalori ihtiyacını (TDEE) ve makro dağılımını bilmektir. <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kalori hesap makinesi</Link> BMR, TDEE ve kilo hedefine göre önerilen kaloriyi verir. <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI hesap makinesi</Link> kilo-boy oranını, <Link href="/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vücut yağ oranı hesap makinesi</Link> ise vücut kompozisyonunu değerlendirmenize yardımcı olur. Hep birlikte kullanıldığında diyet ve kilo planı daha sağlıklı şekillenir.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kalori hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vücut yağ oranı hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">gebelik hesap makinesi</Link>.
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
            <RelatedCalculatorsTR categorySlug="saglik" currentSlug="bazal-metabolizma-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
