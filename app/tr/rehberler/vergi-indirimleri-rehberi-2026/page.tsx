import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateTurkishGuideSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "2026 Vergi İndirimleri Rehberi | Calculator360Pro",
  description: "2026 gelir vergisi indirimleri: eğitim, sağlık, BES, bağış. Vergi indirimi hesaplama. Vergi hesap makinesi.",
  keywords: ["vergi indirimleri", "gelir vergisi indirimi", "eğitim indirimi", "sağlık indirimi", "BES vergi avantajı", "vergi indirimi hesaplama", "2026 vergi indirimleri", "beyanname indirim"],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026`,
  },
  openGraph: { title: "2026 Vergi İndirimleri Rehberi", url: `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026`, locale: "tr_TR", siteName: "Calculator360Pro" },
};

const GUIDE_URL = `${SITE_URL}/tr/rehberler/vergi-indirimleri-rehberi-2026`;
const DATE_MODIFIED = "2026-02-01";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/tr` },
    { "@type": "ListItem", position: 2, name: "Rehberler", item: `${SITE_URL}/tr/rehberler` },
    { "@type": "ListItem", position: 3, name: "2026 Vergi İndirimleri Rehberi", item: GUIDE_URL },
  ],
};

export default function VergiIndirimleriRehberiPage() {
  const guideSchema = generateTurkishGuideSchema(
    "2026 Vergi İndirimleri Rehberi",
    "2026 gelir vergisi indirimleri: eğitim, sağlık, BES, bağış. Vergi indirimi hesaplama.",
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
          <Link href="/tr">Ana Sayfa</Link> / <Link href="/tr/hesap-makineleri">Hesap Makineleri</Link> / Rehberler / Vergi İndirimleri
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">2026 Vergi İndirimleri Rehberi</h1>
        <p className="text-[#64748b] mb-4">
          2026 yılında gelir vergisinden düşülebilecek harcamalar: eğitim ve sağlık, BES katkıları, bağış. Limitler mevzuata göre değişir.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Vergi İndirimi Nasıl Alınır?</h2>
        <p className="text-[#64748b] mb-4">
          İndirimler, beyanname verirken ilgili harcama kalemlerini belgeleyerek talep edilir. Eğitim ve sağlık harcamaları için fatura veya makbuz saklayın; BES için katkı dekontları, bağış için ise bağış belgesi gereklidir. Bu belgeleri yıllık gelir vergisi beyannamenizde ilgili bölümlere işleyerek indirim hakkını kullanırsınız. Limitler her yıl güncellenebilir; 2026 için güncel limitleri Gelir İdaresi veya muhasebecinizden kontrol edin.
        </p>
        <div className="prose prose-slate max-w-none space-y-4 text-[#64748b]">
          <h2 className="text-xl font-semibold text-[#1e293b]">Yaygın İndirimler</h2>
          <ul className="list-disc pl-6">
            <li>Eğitim harcamaları (belirli limitlere kadar)</li>
            <li>Sağlık harcamaları (belirli limitlere kadar)</li>
            <li>BES katkı payı (vergi avantajı)</li>
            <li>Bağış ve yardımlar</li>
          </ul>
          <p className="mb-2">
            Her indirim kaleminin üst sınırı vardır. Toplam indirim tutarınız vergi matrahından düşülür; yani vergi hesaplanan tutar azalır ve ödenen vergi düşebilir. İndirimleri doğru hesaplamak için bir vergi veya maaş hesap aracı kullanmak faydalı olur.
          </p>
          <p>
            <Link href="/tr/hesap-makineleri/finans/vergi-hesap-makinesi" className="text-[#2563eb] hover:underline">Vergi Hesap Makinesi</Link>,{" "}
            <Link href="/tr/hesap-makineleri/finans/maas-hesap-makinesi" className="text-[#2563eb] hover:underline">Maaş Hesap Makinesi</Link>,{" "}
            <Link href="/tr/blog/2026-gelir-vergisi-dilimleri-hesaplama-rehberi" className="text-[#2563eb] hover:underline">2026 Gelir Vergisi Rehberi</Link>,{" "}
            <Link href="/tr/rehberler/vergi-takvimi-2026" className="text-[#2563eb] hover:underline">Vergi Takvimi</Link>.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
