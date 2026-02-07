import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyScientificCalculator } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Bilimsel Hesap Makinesi 2026 - Trigonometri, Log",
  description: "Trigonometri, logaritma, üs ve kök işlemleri. Ücretsiz bilimsel hesap makinesi - hemen kullanın.",
  keywords: [
    "bilimsel hesap makinesi",
    "trigonometri hesaplama",
    "logaritma hesaplama",
    "sin cos tan",
    "üs ve kök hesaplama",
    "bilimsel calculator",
    "mühendislik hesap makinesi",
    "online bilimsel hesap",
    "log ln hesaplama",
    "radyan derece çevirme",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/math/scientific-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi` },
  },
  openGraph: { title: "Bilimsel Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Bilimsel hesap makinesi ne işe yarar?", answer: "Trigonometri (sin, cos, tan), logaritma, üs ve kök, istatistik işlemleri için kullanılır. Öğrenciler ve mühendisler için idealdir." },
  { question: "Radyan mı derece mi?", answer: "Açıları derece veya radyan cinsinden girebilirsiniz. Trigonometrik fonksiyonlarda birim seçeneğini kontrol edin." },
  { question: "Logaritma tabanı nedir?", answer: "log genelde 10 tabanlı (log10), ln doğal logaritma (e tabanı). Hesap makinesi her ikisini de destekler." },
  { question: "Bilimsel notasyon nasıl kullanılır?", answer: "Çok büyük veya küçük sayılar için 1.5e10 gibi gösterim kullanılır. e sonrası üs (10'un kuvveti) anlamına gelir." },
];

const howToSteps = [
  { name: "Sayıları ve işlemi seçin", text: "Rakam ve operatör (+, -, x, /, üs, kök) kullanın." },
  { name: "Trigonometri veya log", text: "sin, cos, tan, log, ln gibi fonksiyonları seçin; açı birimini (derece/radyan) kontrol edin." },
  { name: "Sonucu görün", text: "Eşittir ile sonucu hesaplayın." },
];

export default function BilimselHesapMakinesiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Bilimsel Hesap Makinesi"
        description="Trigonometri, logaritma, üs ve kök işlemleri aracı"
        slug="bilimsel-hesap-makinesi"
        categorySlug="matematik"
        categoryName="Matematik"
        dateModified={DATA_VERSION.lastUpdated}
        category="math"
        faqs={faqs}
        howToName="Bilimsel Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Bilimsel hesaplama yapmak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Bilimsel Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Bilimsel Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Trigonometri, logaritma, üs ve kök işlemleri.</p>
          <TurkeyScientificCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline">Yüzde Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/matematik/birim-cevirici" className="text-[#2563eb] hover:underline">Birim Çevirici</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
