import { Metadata } from "next";
import Link from "next/link";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { IssizlikMaasiHesaplama } from "@/components/calculators/tr/IssizlikMaasiHesaplama";
import { generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { MINIMUM_WAGE_2026 } from "@/lib/data/turkey-2026-data";

const SLUG = "issizlik-maasi-hesap-makinesi";
const pageUrl = `${SITE_URL}/tr/hesap-makineleri/finans/${SLUG}`;
const tl = (n: number) => n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
const maxGross = MINIMUM_WAGE_2026.gross * 0.8;
const minGross = MINIMUM_WAGE_2026.gross * 0.4;

export const metadata: Metadata = {
  title: "İşsizlik Maaşı Hesaplama 2026 | Ne Kadar, Kaç Ay Alınır?",
  description:
    "İşsizlik maaşı hesaplama 2026: son 4 ay brüt maaşınız ve prim gününüzle aylık net işsizlik ödeneğinizi ve kaç ay alacağınızı hesaplayın. En yüksek ve en düşük tutarlar.",
  keywords: ["işsizlik maaşı hesaplama", "işsizlik maaşı 2026", "işsizlik maaşı ne kadar", "işsizlik ödeneği hesaplama", "işkur işsizlik maaşı"],
  alternates: { canonical: pageUrl, languages: { tr: pageUrl, "x-default": pageUrl } },
  openGraph: { title: "İşsizlik Maaşı Hesaplama 2026", description: "Aylık net işsizlik ödeneğinizi ve süresini hesaplayın.", url: pageUrl, locale: "tr_TR", siteName: "Calculator360Pro", type: "website" },
};

const faqs = [
  { q: "2026 işsizlik maaşı ne kadar?", a: `2026'da brüt en düşük işsizlik maaşı ${tl(minGross)}, en yüksek ${tl(maxGross)}'dir. Damga vergisi (%0,759) kesildikten sonra net tutar en az ${tl(minGross * (1 - 0.00759))}, en fazla ${tl(maxGross * (1 - 0.00759))} olur.` },
  { q: "İşsizlik maaşı nasıl hesaplanır?", a: "Son 4 aylık prime esas brüt kazançların ortalamasının %40'ı alınır. Bu tutar brüt asgari ücretin %80'ini geçemez. Sonuçtan yalnızca damga vergisi kesilir." },
  { q: "İşsizlik maaşı kaç ay alınır?", a: "Son 3 yılda 600 gün prim ödeyenler 6 ay (180 gün), 900 gün ödeyenler 8 ay (240 gün), 1080 gün ödeyenler 10 ay (300 gün) işsizlik ödeneği alır. Ayrıca işten ayrılmadan önceki son 120 gün kesintisiz prim ödenmiş olmalıdır." },
  { q: "İstifa eden işsizlik maaşı alabilir mi?", a: "Hayır. Kendi isteğiyle ve haklı bir neden olmadan istifa edenler işsizlik ödeneği alamaz. İşverenin feshi, haklı nedenle fesih veya belirli süreli sözleşmenin sona ermesi gibi durumlarda hak doğar. Başvuru işten ayrılıştan itibaren 30 gün içinde İŞKUR'a yapılmalıdır." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const appSchema = { "@context": "https://schema.org", "@type": "WebApplication", name: "İşsizlik Maaşı Hesap Makinesi 2026", url: pageUrl, applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };

export default function IssizlikMaasiPage() {
  const breadcrumbSchema = generateTurkishBreadcrumbSchema("Finans", "finans", "İşsizlik Maaşı Hesap Makinesi", SLUG);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb]">Finans</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">İşsizlik Maaşı</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">İşsizlik Maaşı Hesaplama 2026</h1>
            <p className="text-lg text-[#64748b]">Son 4 aylık brüt kazancınızı ve prim gününüzü girin; aylık net işsizlik ödeneğinizi ve kaç ay alacağınızı görün.</p>
          </div>
          <IssizlikMaasiHesaplama />
          <div className="mt-8"><CalculatorDisclaimer category="finance" locale="tr" /></div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">2026 İşsizlik Maaşı Tutarları</h2>
            <table className="w-full text-sm text-left border border-[#e2e8f0] bg-white mb-4">
              <thead className="bg-[#f1f5f9]"><tr><th className="p-2"></th><th className="p-2">Brüt</th><th className="p-2">Net</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="p-2">En düşük</td><td className="p-2">{tl(minGross)}</td><td className="p-2">{tl(minGross * (1 - 0.00759))}</td></tr>
                <tr className="border-t"><td className="p-2">En yüksek</td><td className="p-2">{tl(maxGross)}</td><td className="p-2">{tl(maxGross * (1 - 0.00759))}</td></tr>
              </tbody>
            </table>
            <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Örnek Hesaplama</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Son 4 ay brüt kazancı ortalama 45.000 TL olan ve son 3 yılda 950 gün primi bulunan bir çalışan için: 45.000 × %40 = 18.000 TL brüt; damga vergisi 136,62 TL düşülünce aylık net <strong>17.863,38 TL</strong>. 900 günü geçtiği için 8 ay boyunca ödeme alır.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-4">
              İşten çıkarıldıysanız <Link href="/tr/hesap-makineleri/finans/kidem-tazminati-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">kıdem ve ihbar tazminatınızı</Link> da hesaplayın.
            </p>
            <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q}><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-[#64748b] mt-1">{f.a}</p></div>
              ))}
            </div>
          </div>
          <div className="mt-12"><RelatedCalculatorsTR categorySlug="finans" currentSlug={SLUG} maxResults={6} /></div>
        </div>
      </div>
    </>
  );
}
