import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { StudentLoanCalculator } from "@/components/calculators/StudentLoanCalculator";

export const metadata: Metadata = {
  title: "Ogrenim Kredisi Hesap Makinesi 2026",
  description: "Ogrenim kredisi aylik taksit ve toplam faiz hesaplama. Ucretsiz ogrenim kredisi hesaplayici.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/finance/student-loan-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi` },
  },
  openGraph: { title: "Ogrenim Kredisi Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { q: "Ogrenim kredisi nedir?", a: "Universite ogrencilerine verilen, mezuniyet sonrasi geri odenen devlet destekli kredidir. Faiz oranlari yasalarla belirlenir." },
  { q: "Aylik taksit nasil hesaplanir?", a: "Ana para, faiz orani ve vadeye gore standart kredi formulu (amortisman) uygulanir. Hesaplayici ile aninda gorebilirsiniz." },
  { q: "Erken odeme yapilir mi?", a: "Kosullar kredi sozlesmesine gore degisir. Erken odeme ile toplam faiz dusebilir." },
];

export default function OgrenimKredisiPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Ogrenim Kredisi Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi`, applicationCategory: "FinanceApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
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
              <li><Link href="/tr/hesap-makineleri/finans" className="hover:text-[#2563eb]">Finans</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Ogrenim Kredisi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Ogrenim Kredisi Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Aylik taksit ve toplam maliyet hesaplama.</p>
          <StudentLoanCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Butce Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
