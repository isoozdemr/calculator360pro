import { Metadata } from "next";
import Link from "next/link";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Calculators",
  description:
    "Browse all free online calculators on Calculator360Pro. Find calculators for finance, health, education, math, and more.",
  alternates: {
    canonical: `${SITE_URL}/calculators`,
  },
  openGraph: {
    title: "All Calculators - Calculator360Pro",
    description:
      "Browse all free online calculators on Calculator360Pro. Find calculators for finance, health, education, math, and more.",
    url: `${SITE_URL}/calculators`,
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "All Calculators - Calculator360Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Calculators - Calculator360Pro",
    description:
      "Browse all free online calculators on Calculator360Pro. Find calculators for finance, health, education, math, and more.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CalculatorsPage() {
  const calculators = getAllCalculators();
  const categories = Object.values(CALCULATOR_CATEGORIES);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
            All Calculators
          </h1>
          <p className="text-lg text-[#64748b] dark:text-[#94a3b8] max-w-3xl">
            Browse our complete collection of free, accurate online calculators.
          </p>
        </div>

        {categories.map((category) => {
          const categoryCalculators = calculators.filter(
            (calc) => calc.category === category.slug
          );

          if (categoryCalculators.length === 0) return null;

          return (
            <div
              key={category.slug}
              className="mb-12 bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-8"
            >
              <h2 className="text-3xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
                {category.name}
              </h2>
              <p className="text-[#64748b] dark:text-[#94a3b8] mb-6">
                {category.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryCalculators.map((calculator) => (
                  <Link
                    key={calculator.id}
                    href={`/calculators/${calculator.category}/${calculator.slug}`}
                    className="block p-4 rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] hover:border-[#2563eb] dark:hover:border-[#60a5fa] transition-colors"
                  >
                    <h3 className="font-semibold text-[#1e293b] dark:text-[#f1f5f9] mb-2">
                      {calculator.name}
                    </h3>
                    <p className="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-2">
                      {calculator.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

