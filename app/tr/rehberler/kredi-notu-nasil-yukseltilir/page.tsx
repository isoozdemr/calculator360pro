import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateTurkishGuideSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Kredi Notu Nasıl Yükseltilir? | Calculator360Pro",
  description: "Findeks kredi notu nedir, nasıl yükselir? Kredi notu yükseltme ipuçları ve adımlar. Kredi ve bütçe hesaplama araçları.",
  keywords: ["kredi notu", "Findeks", "kredi notu yükseltme", "kredi notu nasıl yükselir", "Findeks sorgulama", "kredi başvurusu", "kredi notu ipuçları"],
  alternates: { canonical: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir`, languages: { tr: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir` } },
  openGraph: { title: "Kredi Notu Nasıl Yükseltilir?", url: `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const GUIDE_URL = `${SITE_URL}/tr/rehberler/kredi-notu-nasil-yukseltilir`;
const DATE_MODIFIED = "2026-02-01";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/tr` },
    { "@type": "ListItem", position: 2, name: "Rehberler", item: `${SITE_URL}/tr/rehberler` },
    { "@type": "ListItem", position: 3, name: "Kredi Notu Nasıl Yükseltilir?", item: GUIDE_URL },
  ],
};

export default function KrediNotuRehberiPage() {
  const guideSchema = generateTurkishGuideSchema(
    "Kredi Notu Nasıl Yükseltilir?",
    "Findeks kredi notu nedir, nasıl yükselir? Kredi notu yükseltme ipuçları ve adımlar.",
    GUIDE_URL,
    DATE_MODIFIED
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Kredi Notu
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Kredi Notu Nasıl Yükseltilir?</h1>
        <p className="text-[#64748b] mb-4">
          Findeks kredi notu, bankaların kredi talebinizi değerlendirmekte kullandığı bir puandır. Notunuzu yükseltmek için ödemelerinizi zamanında yapın, borç oranını düşürün ve gereksiz kredi sorgulamasından kaçının.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Kredi Notu Neden Önemli?</h2>
        <p className="text-[#64748b] mb-4">
          Kredi notu, konut kredisi, taşıt kredisi veya kredi kartı başvurularında onay şansınızı ve faiz oranını doğrudan etkiler. Yüksek not, daha uygun koşullar ve daha düşük faiz demektir. Düşük not ise reddedilme veya yüksek maliyetle karşılaşma riski taşır. Bu yüzden notunuzu bilmek ve zaman içinde iyileştirmek uzun vadede çok tasarruf sağlar.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Temel İpuçları</h2>
          <ul className="list-disc pl-6">
            <li>Faturaları ve kredi taksitlerini zamanında ödeyin.</li>
            <li>Kredi kartı borcunu azaltın; kullanım oranını %30 altında tutun.</li>
            <li>Gereksiz kredi başvurusu yapmayın; her sorgu notu etkiler.</li>
            <li>Mevcut kredileri erken kapatmak bazen notu olumlu etkiler.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#1e293b] mt-6">Ne Yapmaktan Kaçınmalısınız?</h2>
          <p className="mb-2">
            Çok sık kredi veya kredi kartı başvurusu yapmak, gecikmeli ödemeler ve yüksek kullanım oranı notu düşürür. Findeks üzerinden kendi notunuzu yılda birkaç kez sorgulamanız notu olumsuz etkilemez; ancak her banka başvurusu yeni bir sorgu olarak işlenir. Bu nedenle ihtiyacınız yoksa başvuru yapmayın.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/kredi-hesap-makinesi" className="text-[#2563eb] hover:underline">Kredi Hesap Makinesi</Link> ile taksit planlayın.{" "}
            <Link href="/tr/hesap-makineleri/finans/butce-hesap-makinesi" className="text-[#2563eb] hover:underline">Bütçe Hesap Makinesi</Link> ile gelir-gider dengesini kurun.{" "}
            <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline">Finansal Terimler Sözlüğü</Link> ve{" "}
            <Link href="/tr/rehberler/vergi-takvimi-2026" className="text-[#2563eb] hover:underline">Vergi Takvimi</Link> rehberlerimize bakın.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
