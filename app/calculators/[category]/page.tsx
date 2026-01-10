import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getCalculatorsByCategory } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES, SITE_URL, getCategoryKeyBySlug, getCategorySlugByKey } from "@/lib/constants";
import { CATEGORY_CONTENT } from "@/lib/categories/content";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CALCULATOR_CATEGORIES).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = CALCULATOR_CATEGORIES[category as keyof typeof CALCULATOR_CATEGORIES];

  if (!categoryInfo) {
    return {};
  }

  const url = `${SITE_URL}/calculators/${category}`;

  return {
    title: `${categoryInfo.name} Calculators`,
    description: categoryInfo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${categoryInfo.name} Calculators`,
      description: categoryInfo.description,
      url,
      type: "website",
      siteName: "Calculator360Pro",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${categoryInfo.name} Calculators`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryInfo.name} Calculators`,
      description: categoryInfo.description,
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
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryKey = getCategoryKeyBySlug(category);
  
  if (!categoryKey) {
    notFound();
  }

  const categoryInfo = CALCULATOR_CATEGORIES[categoryKey];
  const calculators = getCalculatorsByCategory(categoryKey);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            {categoryInfo.name} Calculators
          </h1>
          <p className="text-lg text-[#64748b] max-w-3xl">
            {categoryInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`}
              className="block p-6 bg-white rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
            >
              <h2 className="text-xl font-bold text-[#1e293b] mb-3">
                {calculator.name}
              </h2>
              <p className="text-[#64748b] line-clamp-3">
                {calculator.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Category Content Section */}
        {CATEGORY_CONTENT[category] && (
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: CATEGORY_CONTENT[category] }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

