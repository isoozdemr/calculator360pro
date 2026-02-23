import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { TR_REHBERLER } from "@/lib/tr-rehberler";

export const metadata: Metadata = {
  title: "Rehberler | Finans ve Emeklilik Rehberleri 2026",
  description:
    "Vergi takvimi, SGK emeklilik tablosu, finansal terimler sözlüğü, kredi notu ve vergi indirimleri rehberleri. 2026 güncel bilgiler.",
  keywords: [
    "rehberler",
    "vergi takvimi 2026",
    "sgk emeklilik tablosu",
    "finansal terimler",
    "kredi notu",
    "vergi indirimleri",
    "yatırım rehberi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tr/rehberler`,
    languages: {
      en: `${SITE_URL}/guides`,
      tr: `${SITE_URL}/tr/rehberler`,
      "x-default": `${SITE_URL}/guides`,
    },
  },
  openGraph: {
    title: "Rehberler | Calculator360Pro",
    description: "Finans ve emeklilik rehberleri: vergi takvimi, SGK, kredi notu, vergi indirimleri.",
    url: `${SITE_URL}/tr/rehberler`,
    locale: "tr_TR",
    type: "website",
    siteName: "Calculator360Pro",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/tr` },
    { "@type": "ListItem", position: 2, name: "Rehberler", item: `${SITE_URL}/tr/rehberler` },
  ],
};

export default function RehberlerIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/tr" className="hover:text-[#2563eb] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e293b] font-medium">Rehberler</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Rehberler
          </h1>
          <p className="text-lg text-[#64748b] mb-10 max-w-2xl">
            Vergi, emeklilik, kredi ve yatırım konularında 2026 güncel rehberlerimiz. 
            Hesap makinelerimizle birlikte kullanarak doğru kararlar alın.
          </p>

          <ul className="space-y-4">
            {TR_REHBERLER.map((rehber) => (
              <li key={rehber.slug}>
                <Link
                  href={`/tr/rehberler/${rehber.slug}`}
                  className="block bg-white rounded-xl border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] hover:shadow-lg transition-all group"
                >
                  <h2 className="text-xl font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors mb-2">
                    {rehber.title}
                  </h2>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {rehber.description}
                  </p>
                  <span className="inline-flex items-center text-[#2563eb] text-sm font-medium mt-3">
                    Oku
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
            <p className="text-[#64748b] text-sm">
              <Link href="/tr/hesap-makineleri" className="text-[#2563eb] hover:underline font-medium">
                Tüm hesap makineleri
              </Link>
              {" "}sayfamızdan vergi, maaş, kredi ve emeklilik hesaplama araçlarına ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
