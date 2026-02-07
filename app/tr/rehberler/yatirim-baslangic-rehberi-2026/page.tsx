import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateTurkishGuideSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Yatırım Başlangıç Rehberi 2026 | Calculator360Pro",
  description: "Yatırıma nereden başlanır? Mevduat, BES, hisse, tahvil karşılaştırması. Getiri hesaplama araçları. Ücretsiz yatırım ve birikim hesaplayıcılar.",
  keywords: ["yatırım başlangıç", "yatırıma nereden başlanır", "mevduat BES", "bileşik faiz", "acil fon", "yatırım rehberi", "birikim planlama", "2026 yatırım"],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`,
    languages: {
      tr: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`,
      "x-default": `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`,
    },
  },
  openGraph: { title: "Yatırım Başlangıç Rehberi 2026", url: `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const GUIDE_URL = `${SITE_URL}/tr/rehberler/yatirim-baslangic-rehberi-2026`;
const DATE_MODIFIED = "2026-02-01";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/tr` },
    { "@type": "ListItem", position: 2, name: "Rehberler", item: `${SITE_URL}/tr/rehberler` },
    { "@type": "ListItem", position: 3, name: "Yatırım Başlangıç Rehberi 2026", item: GUIDE_URL },
  ],
};

export default function YatirimBaslangicRehberiPage() {
  const guideSchema = generateTurkishGuideSchema(
    "Yatırım Başlangıç Rehberi 2026",
    "Yatırıma nereden başlanır? Mevduat, BES, hisse, tahvil karşılaştırması. Getiri hesaplama araçları.",
    GUIDE_URL,
    DATE_MODIFIED
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Yatırım Başlangıç
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Yatırım Başlangıç Rehberi 2026</h1>
        <p className="text-[#64748b] mb-4">
          Yatırıma başlarken önce acil fon ayırın, borçları yönetin, sonra mevduat veya BES gibi düşük riskli araçlarla başlayabilirsiniz. Bileşik faiz uzun vadede önemli fark yaratır.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Yatırımda İlk Adımlar</h2>
        <p className="text-[#64748b] mb-4">
          İlk adım, 3-6 aylık giderinizi karşılayacak kadar nakit veya vadesiz mevduat tutmaktır. Bu acil fon, iş kaybı veya beklenmedik harcamalarda yatırımlarınızı zorla satmanızı engeller. İkinci adım, yüksek faizli kredi kartı veya kredileri azaltmaktır; buradaki getiri çoğu yatırımdan yüksek olur. Üçüncü adımda mevduat, BES veya devlet tahvili gibi düşük riskli araçlarla başlayıp, risk toleransınıza ve bilginize göre hisse veya fon ekleyebilirsiniz.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Adımlar</h2>
          <ul className="list-disc pl-6">
            <li>Acil fon: 3-6 aylık gider kadar likit birikim</li>
            <li>Borç önceliği: Yüksek faizli borçları azaltın</li>
            <li>Mevduat veya BES ile başlayın; risk toleransınıza göre çeşitlendirin</li>
          </ul>
          <p className="mb-2">
            Yatırım ve birikim hesaplayıcıları ile farklı senaryoları (aylık yatırım, vade, beklenen getiri) karşılaştırarak kendi planınızı oluşturabilirsiniz. Uzun vade ve düzenli yatırım, bileşik faiz sayesinde önemli birikim oluşturabilir.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/yatirim-hesap-makinesi" className="text-[#2563eb] hover:underline">Yatırım Hesap Makinesi</Link>,{" "}
            <Link href="/tr/hesap-makineleri/finans/bilesik-faiz-hesap-makinesi" className="text-[#2563eb] hover:underline">Bileşik Faiz Hesap Makinesi</Link> ve{" "}
            <Link href="/tr/hesap-makineleri/finans/birikim-hesap-makinesi" className="text-[#2563eb] hover:underline">Birikim Hesap Makinesi</Link> ile senaryolarınızı hesaplayın.{" "}
            <Link href="/tr/blog/yatirim-araclari-karsilastirmasi-2026" className="text-[#2563eb] hover:underline">Yatırım Araçları Karşılaştırması</Link> ve{" "}
            <Link href="/tr/rehberler/finansal-terimler-sozlugu" className="text-[#2563eb] hover:underline">Finansal Terimler Sözlüğü</Link> rehberlerimize bakın.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
