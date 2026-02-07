import Link from "next/link";
import { getRelatedCalculatorsTR } from "@/lib/calculators/related-tr";
import type { TRCategorySlug } from "@/lib/tr-calculators-nav";

interface RelatedCalculatorsTRProps {
  categorySlug: TRCategorySlug;
  currentSlug: string;
  maxResults?: number;
}

export function RelatedCalculatorsTR({
  categorySlug,
  currentSlug,
  maxResults = 6,
}: RelatedCalculatorsTRProps) {
  const related = getRelatedCalculatorsTR(categorySlug, currentSlug, maxResults);
  if (related.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-2xl font-bold text-[#1e293b] mb-4">İlgili Hesap Makineleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((calc) => (
          <Link
            key={`${calc.category}-${calc.slug}`}
            href={`/tr/hesap-makineleri/${calc.category}/${calc.slug}`}
            className="p-4 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors"
          >
            <h4 className="font-semibold text-[#1e293b]">{calc.name}</h4>
            {calc.description && (
              <p className="text-sm text-[#64748b] mt-1">{calc.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
