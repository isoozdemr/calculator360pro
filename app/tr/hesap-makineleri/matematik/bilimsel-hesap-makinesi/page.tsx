import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ScientificCalculator } from "@/components/calculators/ScientificCalculator";

export const metadata: Metadata = {
  title: "Bilimsel Hesap Makinesi 2026 - Trigonometri, Log",
  description: "Trigonometri, logaritma, us ve kok islemleri. Ucretsiz bilimsel hesap makinesi - hemen kullanin.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/math/scientific-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi` },
  },
  openGraph: { title: "Bilimsel Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { q: "Bilimsel hesap makinesi ne ise yarar?", a: "Trigonometri (sin, cos, tan), logaritma, us ve kok, istatistik islemleri icin kullanilir. Ogrenciler ve muhendisler icin idealdir." },
  { q: "Radyan mi derece mi?", a: "Acilari derece veya radyan cinsinden girebilirsiniz. Trigonometrik fonksiyonlarda birim secenegini kontrol edin." },
];

export default function BilimselHesapMakinesiPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Bilimsel Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/matematik/bilimsel-hesap-makinesi`, applicationCategory: "UtilityApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
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
              <li><Link href="/tr/hesap-makineleri/matematik" className="hover:text-[#2563eb]">Matematik</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Bilimsel Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Bilimsel Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Trigonometri, logaritma, us ve kok islemleri.</p>
          <ScientificCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline">Yuzde Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/matematik/birim-cevirici" className="text-[#2563eb] hover:underline">Birim Cevirici</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
