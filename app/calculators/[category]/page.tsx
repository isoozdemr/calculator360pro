import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getCalculatorsByCategory } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES, SITE_URL, getCategoryKeyBySlug, getCategorySlugByKey, CalculatorCategory } from "@/lib/constants";
import { CATEGORY_CONTENT } from "@/lib/categories/content";
import { generateCategoryPageSchema, generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return Object.values(CALCULATOR_CATEGORIES).map((categoryInfo) => ({
    category: categoryInfo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryKey = getCategoryKeyBySlug(category);
  
  if (!categoryKey) {
    return {};
  }

  const categoryInfo = CALCULATOR_CATEGORIES[categoryKey];
  const calculators = getCalculatorsByCategory(categoryKey);
  const url = `${SITE_URL}/calculators/${category}`;

  // Generate optimized title (50-60 characters)
  // Format: "Free {Category Name} Calculators - {Secondary Keyword} | Calculator360Pro"
  const secondaryKeywords: Record<CalculatorCategory, string> = {
    finance: "Mortgage, Loan & Investment Tools",
    health: "BMI, Body Fat & Calorie Tools",
    education: "GPA, Grade & Academic Tools",
    math: "Scientific & Mathematical Tools",
    dateTime: "Age, Date Difference & Time Tools",
  };
  
  const secondaryKeyword = secondaryKeywords[categoryKey] || "Free Tools";
  let title = `Free ${categoryInfo.name} Calculators - ${secondaryKeyword} | Calculator360Pro`;
  
  // Ensure title is 50-60 characters
  if (title.length > 60) {
    // Fallback to shorter format
    title = `Free ${categoryInfo.name} Calculators | Calculator360Pro`;
    if (title.length > 60) {
      // Even shorter fallback
      title = `${categoryInfo.name} Calculators | Calculator360Pro`;
    }
  }

  // Generate optimized meta description (150-160 characters)
  // Include top 3 calculator names
  const topCalculators = calculators.slice(0, 3).map(c => c.name);
  const calculatorList = topCalculators.length >= 3
    ? `${topCalculators[0]}, ${topCalculators[1]}, and ${topCalculators[2]}`
    : topCalculators.join(" and ");
  
  const categoryDescriptions: Record<CalculatorCategory, string> = {
    finance: `Free ${categoryInfo.name.toLowerCase()} calculators including ${calculatorList} and more. Calculate loans, mortgages, investments, and financial metrics with our accurate, easy-to-use tools. No registration required.`,
    health: `Free ${categoryInfo.name.toLowerCase()} calculators including ${calculatorList} and more. Calculate BMI, body fat, calories, and health metrics with our accurate, easy-to-use tools. No registration required.`,
    education: `Free ${categoryInfo.name.toLowerCase()} calculators including ${calculatorList} and more. Calculate GPA, grades, percentages, and academic metrics with our accurate, easy-to-use tools. No registration required.`,
    math: `Free ${categoryInfo.name.toLowerCase()} calculators including ${calculatorList} and more. Perform scientific calculations and mathematical operations with our accurate, easy-to-use tools. No registration required.`,
    dateTime: `Free ${categoryInfo.name.toLowerCase()} calculators including ${calculatorList} and more. Calculate age, date differences, and time intervals with our accurate, easy-to-use tools. No registration required.`,
  };
  
  let metaDescription = categoryDescriptions[categoryKey] || categoryInfo.description;
  
  // Validate and truncate meta description to 150-160 characters
  if (metaDescription.length < 150) {
    // If too short, add more context
    metaDescription = `${metaDescription} Get instant results with our free online calculators.`;
  } else if (metaDescription.length > 160) {
    // Truncate to 160 characters
    metaDescription = metaDescription.substring(0, 157) + "...";
  }

  const categoryKeywords: Record<CalculatorCategory, string[]> = {
    finance: ["finance calculators", "mortgage calculator", "loan calculator", "tax calculator", "free financial tools"],
    health: ["health calculators", "BMI calculator", "calorie calculator", "body fat calculator", "free health tools"],
    education: ["education calculators", "GPA calculator", "grade calculator", "academic calculators"],
    math: ["math calculators", "percentage calculator", "scientific calculator", "unit converter"],
    dateTime: ["date time calculators", "age calculator", "date calculator", "hours calculator"],
  };

  return {
    title,
    description: metaDescription,
    keywords: categoryKeywords[categoryKey] || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: metaDescription,
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
      title,
      description: metaDescription,
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
  
  const categorySchema = generateCategoryPageSchema(
    categoryInfo.name,
    categoryInfo.slug,
    calculators.map(calc => ({
      name: calc.name,
      slug: calc.slug,
      category: calc.category,
    }))
  );

  const breadcrumbSchema = generateSimpleBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: `${categoryInfo.name} Calculators`, path: `/calculators/${category}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
    </>
  );
}

