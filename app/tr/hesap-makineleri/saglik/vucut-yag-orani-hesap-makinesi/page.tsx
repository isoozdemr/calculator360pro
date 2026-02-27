import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyBodyFatCalculator } from "@/components/calculators/tr/TurkeyBodyFatCalculator";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Vücut Yağ Oranı Hesap Makinesi 2026 - Yağ Oranı Hesaplama",
  description: "Vücut yağ oranı hesap makinesi: Yaş, cinsiyet, boy, kilo ve bel çevresi ile vücut yağ yüzdesi tahmini. BMI'dan farklı kompozisyon göstergesi. Ücretsiz hesaplama.",
  keywords: [
    "vücut yağ oranı hesaplama",
    "vücut yağ oranı hesap makinesi",
    "yağ oranı hesaplama",
    "body fat hesaplama",
    "US Navy formülü",
    "vücut kompozisyonu",
    "yağ oranı sağlık",
    "BMI vücut yağ farkı",
    "bel çevresi yağ oranı",
    "yağ oranı kategorileri",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/health/body-fat-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/health/body-fat-calculator` },
  },
  openGraph: { title: "Vücut Yağ Oranı Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Vücut yağ oranı nedir?", answer: "Toplam ağırlığınızın yağ dokusundan gelen kısmıdır. Sağlık ve fitness için BMI'dan daha anlamlı bir göstergedir; kas ve yağı ayırt eder." },
  { question: "Nasıl hesaplanır?", answer: "Yaş, cinsiyet, boy, kilo ve bazen bel çevresi gibi ölçülerle tahmini formüller (örneğin US Navy formülü) kullanılır. Kesin sonuç için DEXA veya BIA cihazı gerekir." },
  { question: "BMI ile farkı nedir?", answer: "BMI kas ve yağı ayırt etmez; sadece boy-kilo oranı. Vücut yağ oranı kompozisyonu gösterir; sporcular ve yaşlılar için daha uygundur." },
  { question: "Sağlıklı yağ oranı aralığı nedir?", answer: "Erkekler için genelde %10-20, kadınlar için %20-30 normal kabul edilir. Yaş ve aktiviteye göre hedef aralık değişir; hesaplayıcı size kategori gösterir." },
  { question: "Kimler kullanmalı?", answer: "Kilo verme veya kas artırma hedefi olanlar, sporcular ve sağlık takibi yapanlar. Tek başına tanı koymaz; doktor veya diyetisyen ile değerlendirin." },
];

const howToSteps = [
  { name: "Cinsiyet ve yaş girin", text: "Cinsiyetinizi ve yaşınızı seçin." },
  { name: "Boy, kilo ve bel çevresi", text: "Boy (cm), kilo (kg) ve bel çevresi (cm) ölçülerini girin." },
  { name: "Hesapla", text: "Tahmini vücut yağ oranını ve kategoriyi görün." },
];

export default function VucutYagOraniPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Vücut Yağ Oranı Hesap Makinesi"
        description="Vücut yağ oranı tahmini hesaplama aracı"
        slug="vucut-yag-orani-hesap-makinesi"
        categorySlug="saglik"
        categoryName="Sağlık"
        dateModified={DATA_VERSION.lastUpdated}
        category="health"
        faqs={faqs}
        howToName="Vücut Yağ Oranı Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Vücut yağ oranı tahmini hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Vücut Yağ Oranı</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Vücut Yağ Oranı Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Vücut yağ oranı, toplam ağırlığınızın yağ dokusundan gelen yüzdesidir. BMI&apos;dan farklı olarak kas ve yağı ayırt eder; bu nedenle sporcular ve kilo verenler için daha anlamlı bir sağlık göstergesidir. Yaş, cinsiyet, boy, kilo ve bel çevresi gibi ölçülerle tahmini formüller kullanılarak hesaplanır.
          </p>
          <p className="text-[#64748b] mb-8">
            Bu araç genel bilgilendirme amaçlıdır. Kesin ölçüm için DEXA, BIA veya uzman değerlendirmesi gerekebilir. Sağlık kararlarınız için mutlaka bir sağlık uzmanına danışın.
          </p>
          <TurkeyBodyFatCalculator />
          <CalculatorDisclaimer category="health" locale="tr" />
          <div className="mt-12 space-y-8">
          <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Vücut Yağ Oranı Nedir?</h2>
            <p className="text-[#64748b] mb-4">
              Vücut yağ oranı (body fat percentage), vücut ağırlığınızın yüzde kaçının yağ dokusundan 
              geldiğini ifade eder. BMI sadece boy-kilo ilişkisine bakar; vücut yağ oranı ise kas/yağ 
              ayrımı yaptığı için atletler ve kilo verenler için daha anlamlıdır. Bu hesap makinesi 
              yaş, cinsiyet, boy, kilo ve bel çevresi ile tahmini vücut yağ oranı hesaplar.
            </p>
            <p className="text-[#64748b]">
              İdeal aralıklar cinsiyet ve yaşa göre değişir. Genel sağlık için erkeklerde %10–20, 
              kadınlarda %20–30 civarı hedeflenebilir. <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI hesap makinesi</Link> ile 
              kilo boy endeksinizi, <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link> ile 
              günlük enerji ihtiyacınızı takip edebilirsiniz.
            </p>
          </div>
          <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve Öneriler</h2>
            <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
              <li>Bel çevresi ölçümünü doğru yapın; formül doğruluğu için önemlidir.</li>
              <li>Kilo verirken hem <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">BMI</Link> hem vücut yağ oranını takip edin.</li>
              <li>Günlük kalori ihtiyacı için <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kalori hesap makinesi</Link> kullanın.</li>
              <li>Hamilelikte kilo takibi: <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">gebelik hesap makinesi</Link> ile hafta takibi yapın.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline">BMI Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline">Kalori Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline">Gebelik Hesap Makinesi</Link>.
            </p>
          </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="saglik" currentSlug="vucut-yag-orani-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
