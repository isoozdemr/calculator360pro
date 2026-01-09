import Link from "next/link";
import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES } from "@/lib/constants";

interface BreadcrumbsProps {
  calculator: CalculatorDefinition;
}

export function Breadcrumbs({ calculator }: BreadcrumbsProps) {
  const category = CALCULATOR_CATEGORIES[calculator.category];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 pt-4">
      <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#64748b]">
        <li>
          <Link
            href="/"
            className="hover:text-[#2563eb] transition-colors"
          >
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href="/calculators"
            className="hover:text-[#2563eb] transition-colors"
          >
            Calculators
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href={`/calculators/${calculator.category}`}
            className="hover:text-[#2563eb] transition-colors"
          >
            {category.name}
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#1e293b] font-medium">
          {calculator.name}
        </li>
      </ol>
    </nav>
  );
}

