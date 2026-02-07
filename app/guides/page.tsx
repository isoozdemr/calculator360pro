import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Guides - Financial Terms, Tax Calendar | Calculator360Pro",
  description:
    "Free guides: financial terms glossary, tax calendar 2026 USA. Use with our calculators for better planning.",
  keywords: [
    "guides",
    "financial glossary",
    "tax calendar 2026",
    "financial terms",
    "tax deadlines",
    "calculator guides",
  ],
  alternates: {
    canonical: `${SITE_URL}/guides`,
    languages: {
      en: `${SITE_URL}/guides`,
      tr: `${SITE_URL}/tr/rehberler`,
      "x-default": `${SITE_URL}/guides`,
    },
  },
  openGraph: {
    title: "Guides - Calculator360Pro",
    description: "Financial terms glossary and tax calendar guides. Free resources with our calculators.",
    url: `${SITE_URL}/guides`,
    type: "website",
    siteName: "Calculator360Pro",
  },
  robots: { index: true, follow: true },
};

const GUIDES = [
  {
    title: "Financial Terms Glossary",
    href: "/guides/financial-terms-glossary",
    description: "Key financial terms: APR, compound interest, amortization, and more. Use with our finance calculators.",
  },
  {
    title: "Tax Calendar 2026 USA",
    href: "/guides/tax-calendar-2026-usa",
    description: "Important US tax deadlines and filing dates for 2026. Plan with our tax calculator.",
  },
];

const BREADCRUMB_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
  { name: "Guides", path: "/guides" },
];

export default function GuidesPage() {
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS);
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1e293b]">Home</Link>
          {" / "}
          <Link href="/calculators" className="hover:text-[#1e293b]">Calculators</Link>
          {" / "}
          <span className="text-[#1e293b]">Guides</span>
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Guides</h1>
        <p className="text-[#64748b] mb-8">
          Reference guides to use with our free calculators: financial definitions and tax calendar.
        </p>
        <ul className="space-y-6">
          {GUIDES.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="block p-4 rounded-lg border border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:shadow-sm transition-colors"
              >
                <h2 className="text-xl font-semibold text-[#1e293b] mb-2">{guide.title}</h2>
                <p className="text-[#64748b] text-sm">{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
