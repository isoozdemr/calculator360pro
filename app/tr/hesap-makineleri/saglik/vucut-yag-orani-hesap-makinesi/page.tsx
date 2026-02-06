import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { BodyFatCalculator } from "@/components/calculators/BodyFatCalculator";

const faqs = [
  { q: "Vucut yag orani nedir?", a: "Toplam agirliginizin yag dokusundan gelen kismidir. Saglik ve fitness icin BMI'dan daha anlamli bir gostergedir; kas ve yagi ayirt eder." },
  { q: "Nasil hesaplanir?", a: "Yas, cinsiyet, boy, kilo ve bazen bel cevresi gibi olculerle tahmini formuller (ornegin US Navy formulu) kullanilir. Kesin sonuc icin DEXA veya BIA cihazi gerekir." },
  { q: "BMI ile farki nedir?", a: "BMI kas ve yagi ayirt etmez; sadece boy-kilo orani. Vucut yag orani kompozisyonu gosterir; sporcular ve yaslilar icin daha uygundur." },
  { q: "Saglikli yag orani araligi nedir?", a: "Erkekler icin genelde %10-20, kadinlar icin %20-30 normal kabul edilir. Yas ve aktiviteye gore hedef aralik degisir; hesaplayici size kategori gosterir." },
  { q: "Kimler kullanmali?", a: "Kilo verme veya kas artirma hedefi olanlar, sporcular ve saglik takibi yapanlar. Tek basina tani koymaz; doktor veya dietisyen ile degerlendirin." },
];

export default function VucutYagOraniPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Vucut Yag Orani Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/saglik/vucut-yag-orani-hesap-makinesi`, applicationCategory: "HealthApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6 text-sm text-[#64748b]">
            <ol className="flex items-center space-x-2">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri" className="hover:text-[#2563eb]">Hesap Makineleri</Link></li>
              <li>/</li>
              <li><Link href="/tr/hesap-makineleri/saglik" className="hover:text-[#2563eb]">Saglik</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Vucut Yag Orani</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Vucut Yag Orani Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Vucut yag orani, toplam agirliginizin yag dokusundan gelen yuzdesidir. BMI'dan farkli olarak kas ve yagi ayirt eder; bu nedenle sporcular ve kilo verenler icin daha anlamli bir saglik gostergesidir. Yas, cinsiyet, boy, kilo ve bel cevresi gibi olculerle tahmini formuller kullanilarak hesaplanir.
          </p>
          <p className="text-[#64748b] mb-8">
            Bu araç genel bilgilendirme amaclidir. Kesin olcum icin DEXA, BIA veya uzman degerlendirmesi gerekebilir. Saglik kararlariniz icin mutlaka bir saglik uzmanina danisin.
          </p>
          <BodyFatCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/saglik/bmi-hesap-makinesi" className="text-[#2563eb] hover:underline">BMI Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline">Kalori Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/saglik/gebelik-hesap-makinesi" className="text-[#2563eb] hover:underline">Gebelik Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
