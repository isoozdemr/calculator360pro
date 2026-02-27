import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { TurkeyUnitConverter } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Birim Çevirici 2026 - Uzunluk, Ağırlık, Hacim",
  description: "Birim çevirici: Uzunluk, ağırlık, hacim, alan ve sıcaklık birimleri arasında anında çeviri. Metrik ve imperial. Ücretsiz online birim çevirme aracı.",
  keywords: [
    "birim çevirici",
    "uzunluk çevirme",
    "ağırlık çevirme",
    "hacim çevirme",
    "metre foot çevirme",
    "kg pound çevirme",
    "litre gallon",
    "Celsius Fahrenheit",
    "birim dönüşüm",
    "ölçü birimleri çevirici",
    "alan birim çevirme",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/birim-cevirici`,
    languages: { "en": `${SITE_URL}/calculators/math/unit-converter`, "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/birim-cevirici`, "x-default": `${SITE_URL}/calculators/math/unit-converter` },
  },
  openGraph: { title: "Birim Cevirici 2026", url: `${SITE_URL}/tr/hesap-makineleri/matematik/birim-cevirici`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Birim çevirici ne yapar?", answer: "Farklı ölçüm sistemleri arasında dönüşüm yapar: metre-foot, kg-pound, litre-gallon, Celsius-Fahrenheit vb." },
  { question: "Hangi kategoriler var?", answer: "Uzunluk, ağırlık, hacim, alan, sıcaklık ve daha fazlası. Tek ekranda hızlı çevirim yapılır." },
  { question: "Sonuçlar doğru mu?", answer: "Evet. Standart dönüşüm çarpanları kullanılır. Bilim ve günlük kullanım için yeterli hassasiyettedir." },
  { question: "Metrik ve imperial nedir?", answer: "Metrik: metre, kg, litre (SI). Imperial: foot, pound, gallon (ABD/UK). Çevirici her iki sistemi destekler." },
  { question: "Nasıl kullanılır?", answer: "Önce kategori (uzunluk, ağırlık vb.) seçin. Kaynak ve hedef birimleri seçip değeri girin; sonuç anında hesaplanır. Tarif, seyahat veya ödev için tek sayfada birden fazla çevirim yapabilirsiniz." },
  { question: "Hangi birimler destekleniyor?", answer: "Uzunlukta metre, foot, inç, mil; ağırlıkta kg, gram, pound, ons; hacimde litre, gallon, mililitre; sıcaklıkta Celsius, Fahrenheit, Kelvin. Alan birimleri de mevcuttur." },
];

const howToSteps = [
  { name: "Kategori seçin", text: "Uzunluk, ağırlık, hacim, alan veya sıcaklık seçin." },
  { name: "Birimleri ve değeri girin", text: "Kaynak birim, hedef birim ve çevrilecek değeri girin." },
  { name: "Sonucu görün", text: "Dönüşüm anında gösterilir." },
];

export default function BirimCeviriciPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Birim Cevirici"
        description="Uzunluk, ağırlık, hacim ve diğer birim dönüşümleri aracı"
        slug="birim-cevirici"
        categorySlug="matematik"
        categoryName="Matematik"
        dateModified={DATA_VERSION.lastUpdated}
        category="math"
        faqs={faqs}
        howToName="Birim Çevirici Nasıl Kullanılır?"
        howToDescription="Birim dönüşümü yapmak için adımlar."
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
              <li><Link href="/tr/hesap-makineleri/matematik" className="hover:text-[#2563eb]">Matematik</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Birim Cevirici</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Birim Cevirici</h1>
          <p className="text-[#64748b] mb-8">Uzunluk, ağırlık, hacim ve diğer birim dönüşümleri.</p>
          <TurkeyUnitConverter />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Birim Çevirici Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Birim çevirici, farklı ölçüm sistemleri arasında (metrik, imperial) dönüşüm yapan araçtır. 
                Uzunluk (metre–foot), ağırlık (kg–pound), hacim (litre–gallon), alan ve sıcaklık 
                (Celsius–Fahrenheit) gibi kategorilerde tek ekranda hızlı çevirim yapılır. Günlük 
                hayat, seyahat, tarif ve bilimsel hesaplamalarda kullanılır.
              </p>
              <p className="text-[#64748b] mb-4">
                Önce dönüştürmek istediğiniz kategoriyi (uzunluk, ağırlık, hacim, alan veya sıcaklık) seçin. 
                Kaynak birimi (örneğin metre), hedef birimi (örneğin foot) ve çevirmek istediğiniz sayıyı girin; 
                sonuç anında görünür. Tariflerde gram–su bardağı, seyahatte km–mil veya sıcaklık için derece–Fahrenheit 
                gibi çevirileri tek yerden yapabilirsiniz.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yüzde hesap makinesi</Link>, 
                <Link href="/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bilimsel hesap makinesi</Link>, 
                <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">indirim hesap makinesi</Link>.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve İlgili Araçlar</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Metrik (SI): metre, kg, litre. Imperial: foot, pound, gallon (ABD/UK).</li>
                <li>Tarif ve mutfak: hacim ve ağırlık çevirileri sık kullanılır.</li>
                <li><Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Yüzde hesap makinesi</Link> ile oran, <Link href="/tr/hesap-makineleri/finans/doviz-cevirici" className="text-[#2563eb] hover:underline font-medium">döviz çevirici</Link> ile para birimi dönüşümü.</li>
                <li><Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Tarih farkı hesap makinesi</Link> ile süre hesaplama.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline">Yüzde Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi" className="text-[#2563eb] hover:underline">Bilimsel Hesap Makinesi</Link>.
            </p>
          </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="matematik" currentSlug="birim-cevirici" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
