import type { Metadata } from "next";
import Link from "next/link";
import { RelatedCalculatorsTR } from "@/components/calculators/tr/RelatedCalculatorsTR";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import { generateTurkishBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import type { TRCategorySlug } from "@/lib/tr-calculators-nav";

export interface Faq { q: string; a: string }

export function trCalculatorMetadata(opts: {
  category: string; slug: string; title: string; description: string; keywords: string[]; ogTitle: string;
}): Metadata {
  const url = `${SITE_URL}/tr/hesap-makineleri/${opts.category}/${opts.slug}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url, languages: { tr: url, "x-default": url } },
    openGraph: { title: opts.ogTitle, description: opts.description, url, locale: "tr_TR", siteName: "Calculator360Pro", type: "website" },
  };
}

export function TrCalculatorShell(props: {
  category: TRCategorySlug; categoryName: string; slug: string; name: string; h1: string; intro: string;
  calculator: React.ReactNode; faqs: Faq[]; children: React.ReactNode;
}) {
  const url = `${SITE_URL}/tr/hesap-makineleri/${props.category}/${props.slug}`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "WebApplication", name: props.name, url, applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" }, inLanguage: "tr" },
    generateTurkishBreadcrumbSchema(props.categoryName, props.category, props.name, props.slug),
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: props.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li><Link href="/tr" className="hover:text-[#2563eb]">Ana Sayfa</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href={`/tr/hesap-makineleri/${props.category}`} className="hover:text-[#2563eb]">{props.categoryName}</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[#1e293b] font-medium">{props.name}</li>
            </ol>
          </nav>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">{props.h1}</h1>
            <p className="text-lg text-[#64748b]">{props.intro}</p>
          </div>
          {props.calculator}
          <div className="mt-8"><CalculatorDisclaimer category="finance" locale="tr" /></div>
          <div className="mt-12 text-[#64748b] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1e293b] [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4 [&_a]:text-[#2563eb] [&_a]:font-medium [&_table]:w-full [&_table]:bg-white [&_table]:text-sm [&_td]:p-2 [&_td]:border [&_th]:p-2 [&_th]:border [&_th]:bg-[#f1f5f9] [&_th]:text-left [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4">
            {props.children}
            <h2>Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {props.faqs.map((f) => (
                <div key={f.q}><h3 className="font-semibold text-[#1e293b]">{f.q}</h3><p className="mt-1">{f.a}</p></div>
              ))}
            </div>
          </div>
          <div className="mt-12"><RelatedCalculatorsTR categorySlug={props.category} currentSlug={props.slug} maxResults={6} /></div>
        </div>
      </div>
    </>
  );
}
