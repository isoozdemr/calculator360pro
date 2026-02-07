import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TurkeyStudentLoanCalculator } from "@/components/calculators/tr/TurkeyStudentLoanCalculator";
import { SchemaMarkupTR } from "@/components/SEO/SchemaMarkupTR";
import { DATA_VERSION } from "@/lib/data/turkey-2026-data";

export const metadata: Metadata = {
  title: "Öğrenim Kredisi Hesap Makinesi 2026",
  description: "Öğrenim kredisi aylık taksit ve toplam faiz hesaplama. Ücretsiz öğrenim kredisi hesaplayıcı.",
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
    languages: { "en": `${SITE_URL}/calculators/finance/student-loan-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi` },
  },
  openGraph: { title: "Öğrenim Kredisi Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { question: "Öğrenim kredisi nedir?", answer: "Üniversite öğrencilerine verilen, mezuniyet sonrası geri ödenen devlet destekli kredidir. Faiz oranları yasalarla belirlenir." },
  { question: "Aylık taksit nasıl hesaplanır?", answer: "Ana para, faiz oranı ve vadeye göre standart kredi formülü (amortisman) uygulanır. Hesaplayıcı ile anında görebilirsiniz." },
  { question: "Erken ödeme yapılır mı?", answer: "Koşullar kredi sözleşmesine göre değişir. Erken ödeme ile toplam faiz düşebilir." },
  { question: "Öğrenim kredisi faiz oranı nasıl belirlenir?", answer: "Devlet destekli öğrenim kredisinde faiz oranları yasalarla belirlenir; yıllık güncellemeler yapılabilir." },
  { question: "Hangi koşullarda başvurulur?", answer: "Üniversite öğrencisi olmak ve gerekli belgeleri sunmak gerekir. Detaylar KYK veya ilgili kurum sitesinden öğrenilebilir." },
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
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
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
      </div>
    </>
  );
}
