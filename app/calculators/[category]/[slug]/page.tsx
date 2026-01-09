import { notFound } from "next/navigation";
import { getCalculator } from "@/lib/calculators/definitions";
import { generateCalculatorMetadata } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { CalculatorPage } from "@/components/calculators/CalculatorPage";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { getAllCalculators } = await import("@/lib/calculators/definitions");
  const calculators = getAllCalculators();
  
  return calculators.map((calc) => ({
    category: calc.category,
    slug: calc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const calculator = getCalculator(slug);

  if (!calculator) {
    return {};
  }

  return generateCalculatorMetadata(calculator);
}

export default async function CalculatorPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const calculator = getCalculator(slug);

  if (!calculator) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup calculator={calculator} />
      <CalculatorPage calculator={calculator} />
    </>
  );
}

