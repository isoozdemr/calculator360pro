import { notFound } from "next/navigation";
import { getCalculator } from "@/lib/calculators/definitions";
import { getCategorySlugByKey } from "@/lib/constants";
import { CalculatorPage } from "@/components/calculators/CalculatorPage";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const { getAllCalculators } = await import("@/lib/calculators/definitions");
  const { getCategorySlugByKey } = await import("@/lib/constants");
  const calculators = getAllCalculators();
  return calculators.map((calc) => ({
    category: getCategorySlugByKey(calc.category),
    slug: calc.slug,
  }));
}

export default async function EmbedCalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) notFound();
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4">
      <CalculatorPage calculator={calculator} />
    </div>
  );
}
