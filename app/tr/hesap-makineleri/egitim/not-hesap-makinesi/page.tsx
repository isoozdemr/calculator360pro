import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { GradeCalculator } from "@/components/calculators/GradeCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Not Hesap Makinesi 2026 - Yüzde Harf Notu, Final Hesaplama",
  description: "Not hesap makinesi 2026: Yüzde–harf notu dönüşümü, ağırlıklı ortalama ve finalde kaç almanız gerektiğini hesaplayın. Öğrenciler için ücretsiz not hesaplama; anında sonuç. Vize final.",
  keywords: [
    "not hesap makinesi",
    "yüzde harf notu",
    "ağırlıklı not ortalaması",
    "final notu hesaplama",
    "geçme notu hesaplama",
    "sınav notu hesaplama",
    "yüzde not dönüşümü",
    "ders notu hesaplama",
    "ortalama not hesaplama",
    "finalde kaç almalıyım",
    "vize final ortalama",
    "hedef not hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/egitim/not-hesap-makinesi`,
    languages: { en: `${SITE_URL}/calculators/education/grade-calculator`, tr: `${SITE_URL}/tr/hesap-makineleri/egitim/not-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/education/grade-calculator` },
  },
  openGraph: {
    title: "Not Hesap Makinesi 2026 - Yüzde Harf Notu, Final Hesaplama",
    description: "Yüzde–harf notu dönüşümü, ağırlıklı ortalama ve finalde kaç almalıyım hesaplama. Ücretsiz not hesap makinesi.",
    url: `${SITE_URL}/tr/hesap-makineleri/egitim/not-hesap-makinesi`,
    locale: "tr_TR",
    siteName: "Calculator360Pro",
    type: "website",
  },
};

const faqs = [
  { question: "Yüzde not harf notuna nasıl çevrilir?", answer: "Okulun not çizelgesine göre değişir. Yaygın sistem: 90–100 A, 80–89 B, 70–79 C, 60–69 D, 60 altı F. Hesap makinesinde farklı ölçekler seçilebilir." },
  { question: "Ağırlıklı ortalama nasıl hesaplanır?", answer: "Her sınav/ödevin notunu ağırlığı (yüzde) ile çarpıp toplayın; toplamı ağırlıkların toplamına bölün. Örn. Vize %40’tan 70, Final %60’tan 80: (70×0,40 + 80×0,60) = 76." },
  { question: "Finalde kaç almalıyım nasıl hesaplanır?", answer: "Mevcut notunuzu ve finalin yüzde ağırlığını girin; hedef geçme veya hedef ortalama seçin. Hesap makinesi finalde almanız gereken minimum notu gösterir." },
  { question: "Geçme notu nedir?", answer: "Genelde 50 veya 60 (yüzde) geçme sınırı kabul edilir. Üniversite ve derse göre değişir; yönetmeliğe bakın. Bu araç hedef notu sizin girdiğiniz değere göre hesaplar." },
  { question: "Vize ve final ağırlıkları neden önemli?", answer: "Final daha yüksek ağırlıklıysa final notu ortalamayı daha çok etkiler. Düşük vize notu yüksek final ile telafi edilebilir; hesap makinesi finalde kaç almanız gerektiğini gösterir." },
  { question: "Not hesap makinesi GANO ile aynı mı?", answer: "Hayır. Bu araç tek ders/sınav notu, yüzde–harf dönüşümü ve final hedefi için. GANO (not ortalaması) için not ortalaması hesap makinesini kullanın." },
];

const howToSteps = [
  { name: "Modu seçin", text: "Yüzde–harf dönüşümü veya final notu hesaplama seçin." },
  { name: "Değerleri girin", text: "Mevcut not, ağırlıklar ve hedef notu (veya geçme notu) girin." },
  { name: "Hesapla", text: "Harf notu veya finalde almanız gereken notu görün." },
];

export default function NotHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Not Hesap Makinesi"
        description="Yüzde–harf notu dönüşümü, ağırlıklı ortalama ve final notu hesaplama aracı"
        slug="not-hesap-makinesi"
        categorySlug="egitim"
        categoryName="Eğitim"
        dateModified={DATA_VERSION.lastUpdated}
        category="education"
        faqs={faqs}
        howToName="Not Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Not ve final hedefi hesaplamak için adımlar."
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
              <li><Link href="/tr/hesap-makineleri/egitim" className="hover:text-[#2563eb]">Eğitim</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Not Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Not Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-6">Yüzde–harf notu dönüşümü, ağırlıklı ortalama ve finalde kaç almalıyım hesaplama.</p>
          <GradeCalculator locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Not Hesap Makinesi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Not hesap makinesi, yüzde puanı harf notuna (A, B, C, D, F) çeviren, ağırlıklı sınav ortalaması
                hesaplayan ve “finalde kaç almalıyım?” sorusuna yanıt veren ücretsiz araçtır. Öğrenciler tek ders
                veya sınav bazında kullanabilir; GANO (genel not ortalaması) için not ortalaması hesap makinesi
                ayrıdır.
              </p>
              <p className="text-[#64748b] mb-4">
                Vize ve final ağırlıklarını girerek dönem sonu ortalamanızı tahmin edebilir veya hedef ortalamaya
                ulaşmak için finalde almanız gereken notu hesaplayabilirsiniz. Farklı yüzde–harf ölçekleri
                desteklenir; okulunuzun sistemine göre seçim yapın.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Yüzde–Harf Notu Dönüşümü</h3>
              <p className="text-[#64748b] mb-4">
                Okullar ve üniversiteler farklı not çizelgeleri kullanır. Yaygın sistem: 90–100 A, 80–89 B, 70–79 C, 60–69 D, 0–59 F. Bazı kurumlarda A+, A, A− gibi alt dilimler veya 4’lük sistem kullanılır. Not hesap makinesi ile yüzde puanınızı girip karşılık gelen harf notunu görebilirsiniz.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">Ağırlıklı Ortalama ve Final Hedefi</h3>
              <p className="text-[#64748b] mb-4">
                Ağırlıklı ortalama = (Not1 × Ağırlık1 + Not2 × Ağırlık2 + …) / toplam ağırlık. Finalde kaç almalıyım sorusu için mevcut not, final ağırlığı ve hedef not girilir; hesap makinesi gerekli final puanını verir. Geçme notu 50 veya 60 ise bu değeri hedef olarak girebilirsiniz.
              </p>
              <h3 className="text-xl font-bold text-[#1e293b] mt-6 mb-3">GANO ile Fark</h3>
              <p className="text-[#64748b] mb-4">
                Bu araç tek ders veya tek sınav dönemi için not ve final hedefi hesaplar. GANO tüm dönemlerdeki derslerin kredi ağırlıklı ortalamasıdır. GANO için <Link href="/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">not ortalaması hesap makinesi</Link> kullanılır.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/egitim/not-ortalamasi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Not ortalaması (GANO) hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">yüzde hesap makinesi</Link>,{" "}
                <Link href="/tr/hesap-makineleri/matematik/kesir-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kesir hesap makinesi</Link>.
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
            <RelatedCalculatorsTR categorySlug="egitim" currentSlug="not-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
