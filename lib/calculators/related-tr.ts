import type { TRCategorySlug } from "@/lib/tr-calculators-nav";
import { TR_CALCULATORS, type TRCalculatorItem } from "@/lib/tr-calculators-nav";

/**
 * Get related TR calculators for internal linking (same category first, then others).
 * Used by TR calculator pages to show "İlgili Hesap Makineleri" with at least 5 links.
 */
export function getRelatedCalculatorsTR(
  categorySlug: TRCategorySlug,
  currentSlug: string,
  maxResults: number = 6
): TRCalculatorItem[] {
  const others = TR_CALCULATORS.filter((c) => c.slug !== currentSlug);
  const sameCategory = others.filter((c) => c.category === categorySlug);
  const otherCategory = others.filter((c) => c.category !== categorySlug);
  const combined = [...sameCategory, ...otherCategory];
  return combined.slice(0, maxResults);
}
