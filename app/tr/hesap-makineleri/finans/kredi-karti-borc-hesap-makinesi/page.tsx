import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { CreditCardPayoffCalculator } from "@/components/calculators/CreditCardPayoffCalculator";

const faqs = [
  { q: "Kredi karti borcu nasil hesaplanir?", a: "Borc tutari, aylik faiz orani ve aylik odeme miktarina gore kapanma suresi ve toplam faiz hesaplanir. Minimum odeme ile ne kadar surede bitecegini de gorebilirsiniz." },
  { q: "Minimum odeme yeterli mi?", a: "Cogu zaman hayir. Minimum odeme cogunlukla faizi kapatir; ana para yavas iner. Aylik odemeyi artirirsaniz borc cok daha hizli kapanir ve faiz maliyeti duser." },
  { q: "Faiz orani nereden bulunur?", a: "Kredi karti ekstrenizde veya banka mobil uygulamasinda aylik faiz orani (APR / yillik oranin 12'de biri) yazar. Hesaplayici aylik oran kullanir." },
  { q: "Erken kapatmanin faydasi var mi?", a: "Evet. Ne kadar erken kapatirsaniz o kadar az faiz odersiniz. Ek gelir veya tasarrufla fazla odeme yapmak uzun vadede cok tasarruf saglar." },
  { q: "Birden fazla karti nasil planlarim?", a: "Ya en yuksek faizli karti once bitirin (avalanche) ya da en kucuk bakiyeyi once kapatip motivasyon alin (snowball). Hesaplayici tek kart icindir; her karti ayri hesaplayip plan yapabilirsiniz." },
];

export default function KrediKartiBorcPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Kredi Karti Borc Hesap Makinesi", url: `${SITE_URL}/tr/hesap-makineleri/finans/kredi-karti-borc-hesap-makinesi`, applicationCategory: "FinanceApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" };
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
              <li className="text-[#1e293b] font-medium">Kredi Karti Borc</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Kredi Karti Borc Hesap Makinesi</h1>
          <p className="text-[#64748b] mb-4">
            Kredi karti borcunuzun ne kadar surede kapanacagini ve toplam ne kadar faiz odeyeceginizi hesaplayin. Aylik odeme miktarini artirarak faiz maliyetini nasil dusurebileceginizi gormek icin ideal bir araçtir. Minimum odeme ile kapanma suresi genelde cok uzun ve faiz yuksek olur; bu yuzden mumkun oldugunca fazla odeme yapmak onerilir.
          </p>
          <p className="text-[#64748b] mb-8">
            Borc tutari, kartinizin aylik faiz orani ve aylik odemeyi girerek aninda sonuc alirsiniz. Birden fazla kartiniz varsa her biri icin ayri hesaplama yapip oncelik sirasi belirleyebilirsiniz.
          </p>
          <CreditCardPayoffCalculator />
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sikca Sorulan Sorular</h2>
            {faqs.map((f, i) => (
              <div key={i} className="mb-4"><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="text-sm text-[#64748b]">{f.a}</p></div>
            ))}
            <p className="mt-4 text-[#64748b]">
              Ilgili hesap makineleri:{" "}
              <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Butce Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline">Bilesik Faiz Hesap Makinesi</Link>,{" "}
              <Link href="/tr/hesap-makineleri/finans/ogrenim-kredisi-hesap-makinesi" className="text-[#2563eb] hover:underline">Ogrenim Kredisi Hesap Makinesi</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
