import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { TurkeyStudentLoanCalculator } from "@/components/calculators/tr/TurkeyStudentLoanCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Öğrenim Kredisi Hesap Makinesi 2026",
  description: "Öğrenim kredisi (KYK) hesap makinesi: Aylık taksit ve toplam faiz maliyetini hesaplayın. Kredi tutarı ve vadeye göre geri ödeme planı. Ücretsiz öğrenim kredisi hesaplama.",
  keywords: [
    "öğrenim kredisi hesaplama",
    "öğrenim kredisi taksit",
    "KYK kredi hesaplama",
    "öğrenci kredisi",
    "öğrenim kredisi faiz",
    "öğrenim kredisi 2026",
    "üniversite kredisi hesaplama",
    "öğrenim kredisi hesap makinesi",
    "devlet kredisi öğrenci",
    "öğrenim kredisi geri ödeme",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/student-loan-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`, "x-default": `${SITE_URL}/calculators/finance/student-loan-calculator` },
  },
  openGraph: { title: "Öğrenim Kredisi Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Öğrenim kredisi nedir?", answer: "Üniversite öğrencilerine verilen, mezuniyet sonrası geri ödenen devlet destekli kredidir. Faiz oranları yasalarla belirlenir." },
  { question: "Aylık taksit nasıl hesaplanır?", answer: "Ana para, faiz oranı ve vadeye göre standart kredi formülü (amortisman) uygulanır. Hesaplayıcı ile anında görebilirsiniz." },
  { question: "Erken ödeme yapılır mı?", answer: "Koşullar kredi sözleşmesine göre değişir. Erken ödeme ile toplam faiz düşebilir." },
  { question: "Öğrenim kredisi faiz oranı nasıl belirlenir?", answer: "Devlet destekli öğrenim kredisinde faiz oranları yasalarla belirlenir; yıllık güncellemeler yapılabilir." },
  { question: "Hangi koşullarda başvurulur?", answer: "Üniversite öğrencisi olmak ve gerekli belgeleri sunmak gerekir. Detaylar KYK veya ilgili kurum sitesinden öğrenilebilir." },
  { question: "Taksit tablosu nasıl okunur?", answer: "Her satırda dönem, aylık taksit, anapara ve faiz payı, kalan bakiye görünür. İlk dönemlerde faiz payı yüksek, sonlara doğru anapara payı artar." },
  { question: "Vade ve faiz değişince ne olur?", answer: "Daha uzun vade aylık taksiti düşürür ancak toplam faizi artırır. Daha düşük faiz oranı hem taksiti hem toplam maliyeti azaltır." },
];

const howToSteps = [
  { name: "Kredi tutarını girin", text: "Çekmek istediğiniz veya mevcut öğrenim kredisi tutarını girin." },
  { name: "Faiz oranı ve vade", text: "Yıllık faiz oranını ve vadeyi (yıl veya ay) seçin." },
  { name: "Hesapla", text: "Aylık taksit ve toplam geri ödeme tutarını görün." },
  { name: "Ödeme planını inceleyin", text: "Taksit tablosunda anapara ve faiz dağılımını inceleyin." },
];

export default function OgrenimKredisiPage() {
  return (
    <>
      <SchemaMarkupTR
        name="Öğrenim Kredisi Hesap Makinesi"
        description="Öğrenim kredisi aylık taksit ve toplam maliyet hesaplama aracı"
        slug="ogrenim-kredisi-hesap-makinesi"
        categorySlug="finans"
        categoryName="Finans"
        dateModified={DATA_VERSION.lastUpdated}
        category="finance"
        faqs={faqs}
        howToName="Öğrenim Kredisi Hesap Makinesi Nasıl Kullanılır?"
        howToDescription="Öğrenim kredisi taksit hesaplamak için adımlar."
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
              <li className="text-[#1e293b] font-medium">Öğrenim Kredisi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Öğrenim Kredisi Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Aylık taksit ve toplam maliyet hesaplama.</p>
          <TurkeyStudentLoanCalculator />
          <CalculatorDisclaimer category="finance" locale="tr" />
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Öğrenim Kredisi Nedir?</h2>
              <p className="text-[#64748b] mb-4">
                Öğrenim kredisi, üniversite öğrencilerine devlet (KYK) veya bankalar tarafından verilen, 
                mezuniyet sonrası belirli bir vadeyle geri ödenen kredidir. Faiz oranları yasalarla 
                veya sözleşmeyle belirlenir. Bu hesap makinesi aylık taksit ve toplam geri ödeme 
                tutarını hesaplar.
              </p>
              <p className="text-[#64748b]">
                <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Kredi hesap makinesi</Link> ile 
                ihtiyaç kredisi, <Link href="/tr/hesap-makineleri/finans/konut-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">konut kredisi hesap makinesi</Link> ile 
                ev kredisi taksitini karşılaştırabilirsiniz.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İpuçları ve Öneriler</h2>
              <ul className="list-disc list-inside text-[#64748b] space-y-2 mb-4">
                <li>Mezuniyet sonrası taksitleri bütçenize göre planlayın. <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">Bütçe hesap makinesi</Link> ve <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">maaş hesap makinesi</Link> kullanın.</li>
                <li>Erken ödeme yaparak toplam faizi düşürebilirsiniz; sözleşmedeki erken kapatma koşullarını kontrol edin.</li>
                <li>Vergi diliminizi bilmek için <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">vergi hesap makinesi</Link>, taşıt kredisi karşılaştırması için <Link href="/tr/hesap-makineleri/finans/tasit-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline font-medium">taşıt kredisi hesap makinesi</Link>.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sıkça Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.question}</h3><p className="text-sm text-[#64748b]">{f.answer}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Bütçe Hesap Makinesi</Link>.
            </p>
          </div>
          </div>
          <section className="mt-12">
            <RelatedCalculatorsTR categorySlug="finans" currentSlug="ogrenim-kredisi-hesap-makinesi" maxResults={6} />
          </section>
        </div>
      </div>
    </>
  );
}
