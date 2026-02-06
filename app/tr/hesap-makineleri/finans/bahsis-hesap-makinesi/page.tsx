import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TipCalculator } from "@/components/calculators/TipCalculator";

const faqs = [
  { q: "Bahsis nasil hesaplanir?", a: "Fis tutari uzerinden yuzde secerek (ornegin %10, %15, %20) veya tutar girerek hesaplanir. Kisi sayisina bolerek kisi basi pay da goruntulenir." },
  { q: "Ne kadar bahsis verilir?", a: "Ulkeye ve duruma gore degisir. Turkiye'de restoranlarda %5-10 yaygin; ABD'de %15-20 standart. Hizmet kalitesine gore artirip azaltabilirsiniz." },
  { q: "KDV dahil mi hesaplanmali?", a: "Cogu uygulamada fis tutari (KDV dahil) baz alinir. Isterseniz KDV haric tutari girip ona gore bahsis hesaplayabilirsiniz; genelde KDV dahil uzerinden verilir." },
  { q: "Kisi basi odeme nasil bulunur?", a: "Toplam (fis + bahsis) kisi sayisina bolunur. Grup yemeklerinde herkes esit pay odemek icin bu degeri kullanir." },
  { q: "Bahsis vergiye tabi mi?", a: "Turkiye'de calisanin aldigi bahsis gelir niteliginde olabilir; detaylar vergi mevzuatina gore degisir. Hesaplayici sadece tutar hesaplar; vergi danismanligi vermez." },
];

export default function BahsisPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Bahsis Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/finans/bahsis-hesap-makinesi`, applicationCategory: "FinanceApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
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
              <li className="text-[#1e293b] font-medium">Bahsis</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Bahsis Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Restoran veya hizmet fisi uzerinden bahsis tutarini ve kisi basi odemeyi hizlica hesaplayin. Fis tutarini ve istediginiz bahsis yuzdesini (veya tutari) girerek toplam odeme ve kisi basi payi gorursunuz. Grup yemeklerinde herkesin esit pay vermesi icin cok kullanislidir.
          </p>
          <p className="text-[#64748b] mb-8">
            Bahsis orani ulke ve hizmete gore degisir; araç farkli yuzdeleri denemenize olanak tanir. Hizmet kalitesine gore %10, %15, %20 veya ozel bir tutar secebilirsiniz.
          </p>
          <TipCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              Ilgili hesap makineleri:{" "}
              <Link href="/tr/hesap-makineleri/matematik/yuzde-hesap-makinesi" className="text-[#2563eb] hover:underline">Yuzde Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/matematik/indirim-hesap-makinesi" className="text-[#2563eb] hover:underline">Indirim Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Butce Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
