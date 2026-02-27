import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { TurkeyCreditCardPayoffCalculator } from "@/components/calculators/tr";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Kredi Kartı Borç Hesap Makinesi 2026 - Kapanma Süresi",
  description: "Kredi kartı borç hesap makinesi: Borcunuzun kapanma süresi ve toplam faiz maliyetini hesaplayın. Minimum ödeme ile karşılaştırın. Ücretsiz kredi kartı borç hesaplama.",
  keywords: [
    "kredi kartı borcu hesaplama",
    "kredi kartı borç kapanma süresi",
    "kart borcu hesaplama",
    "minimum odeme hesaplama",
    "kredi karti faiz maliyeti",
    "borc kapanma hesap makinesi",
    "kredi karti odeme plani",
    "kart borcu ne zaman biter",
    "kredi karti borc hesap makinesi",
    "faiz tasarrufu hesaplama",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/credit-card-payoff-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/finance/credit-card-payoff-calculator` },
  },
  openGraph: { title: "Kredi Kartı Borç Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Kredi kartı borcu nasıl hesaplanır?", answer: "Borç tutarı, aylık faiz oranı ve aylık ödeme miktarına göre kapanma süresi ve toplam faiz hesaplanır. Minimum ödeme ile ne kadar sürede biteceğini de görebilirsiniz." },
  { question: "Minimum ödeme yeterli mi?", answer: "Çoğu zaman hayır. Minimum ödeme çoğunlukla faizi kapatır; ana para yavaş iner. Aylık ödemeyi artırırsanız borç çok daha hızlı kapanır ve faiz maliyeti düşer." },
  { question: "Faiz oranı nereden bulunur?", answer: "Kredi kartı ekstrenizde veya banka mobil uygulamasında aylık faiz oranı (APR / yıllık oranın 12'de biri) yazar. Hesaplayıcı aylık oran kullanır." },
  { question: "Erken kapatmanın faydası var mı?", answer: "Evet. Ne kadar erken kapatırsanız o kadar az faiz ödersiniz. Ek gelir veya tasarrufla fazla ödeme yapmak uzun vadede çok tasarruf sağlar." },
  { question: "Birden fazla kartı nasıl planlarım?", answer: "Ya en yüksek faizli kartı önce bitirin (avalanche) ya da en küçük bakiyeyi önce kapatıp motivasyon alın (snowball). Hesaplayıcı tek kart içindir; her kartı ayrı hesaplayıp plan yapabilirsiniz." },
];

const howToSteps = [
  { name: "Borç tutarını girin", text: "Kredi kartı borç bakiyenizi girin." },
  { name: "Aylık faiz oranını girin", text: "Kartınızın aylık faiz oranını (yıllık oran / 12) girin." },
  { name: "Aylık ödeme tutarını girin", text: "Her ay ödeyeceğiniz tutarı girin. Minimum ödeme ile de hesaplayabilirsiniz." },
  { name: "Sonuçları inceleyin", text: "Kapanma süresi ve toplam faiz maliyetini görün." },
];

export default function KrediKartiBorcPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Kredi Kartı Borç Hesap Makinesi"
        description="Kredi kartı borcu kapanma süresi ve faiz maliyeti hesaplama aracı"
        slug="kredi-karti-borc-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Kredi Kartı Borç Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Kredi kartı borcu kapanma süresi hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Kredi Kartı Borç</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Kredi Kartı Borç Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Kredi kartı borcunuzun ne kadar sürede kapanacağını ve toplam ne kadar faiz ödeyeceğinizi hesaplayın. Aylık ödeme miktarını artırarak faiz maliyetini nasıl düşürebileceğinizi görmek için ideal bir araçtır. Minimum ödeme ile kapanma süresi genelde çok uzun ve faiz yüksek olur; bu yüzden mümkün olduğunca fazla ödeme yapmak önerilir.
          </p>
          <p className="text-[#64748b] mb-8">
            Borç tutarı, kartınızın aylık faiz oranı ve aylık ödemeyi girerek anında sonuç alırsınız. Birden fazla kartınız varsa her biri için ayrı hesaplama yapıp öncelik sırası belirleyebilirsiniz.
          </p>
          <TurkeyCreditCardPayoffCalculator />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Kredi Kartı Borcu Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Kredi kartı borcu, kartla yaptığınız harcamaların toplamından o ana kadar yapılan 
                ödemelerin düşülmesiyle kalan bakiyedir. Aylık asgari ödeme (minimum ödeme) yapılsa bile 
                kalan bakiyeye faiz işler; bu nedenle borç uzun sürede kapanır ve toplam faiz maliyeti 
                artar. Bu hesap makinesi kapanma süresi ve toplam faizi hesaplar.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile 
                taksitli kredi maliyetini, <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bileşik faiz hesap makinesi</Link> ile 
                getiri senaryolarını karşılaştırabilirsiniz.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve Öneriler</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Minimum ödeme yerine mümkün olduğunca fazla ödeyin; kapanma süresi kısalır, faiz düşer.</li>
                <li>Bütçenizi kontrol edin: <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">bütçe hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link>.</li>
                <li>Borç bitince birikim hedefi koyun: <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">birikim hesap makinesi</Link>.</li>
                <li>Faiz geliri vergisi: <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link> ile diliminizi bilin.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              İlgili hesap makineleri:{" "}
              <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Bütçe Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline">Bileşik Faiz Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline">Öğrenim Kredisi Hesap Makinesi</Link>.
            </p>
          </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="kredi-karti-borc-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
