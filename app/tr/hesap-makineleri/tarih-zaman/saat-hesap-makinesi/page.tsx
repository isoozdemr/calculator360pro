import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { HoursCalculator } from "@/components/calculators/HoursCalculator";

export const metadata: Metadata = {
  title: "Saat Hesap Makinesi 2026 - Calisma Suresi",
  description: "Baslangic ve bitis saati ile toplam sure, ucret hesaplama. Ucretsiz saat hesap makinesi.",
  alternates: {
    canonical: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`,
    languages: { "en": `${SITE_URL}/calculators/date-time/hours-calculator`, "tr": `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi` },
  },
  openGraph: { title: "Saat Hesap Makinesi 2026", url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const faqs = [
  { q: "Calisma suresi nasil hesaplanir?", a: "Bitis saati - baslangic saati. Ara vermeler varsa cikarilir. Sonuc saat ve dakika olarak gorunur." },
  { q: "Ucret hesaplamada kullanilir mi?", a: "Evet. Toplam calisma saati x saatlik ucret = brut ucret. Net icin vergi ve kesintiler uygulanir." },
];

export default function SaatHesapMakinesiPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Saat Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/tarih-zaman/saat-hesap-makinesi`, applicationCategory: "UtilityApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
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
              <li><Link href="/tr/hesap-makineleri/tarih-zaman" className="hover:text-[#2563eb]">Tarih-Zaman</Link></li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Saat Hesap Makinesi</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Saat Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-8">Calisma suresi ve toplam saat hesaplama.</p>
          <HoursCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">SSS</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              <Link href="/tr/hesap-makineleri/tarih-zaman/tarih-farki-hesap-makinesi" className="text-[#2563eb] hover:underline">Tarih Farki</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">Maaş Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
