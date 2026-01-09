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
      <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#64748b] dark:text-[#94a3b8]">
        <li>
          <Link
            href="/"
            className="hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors"
          >
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href="/calculators"
            className="hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors"
          >
            Calculators
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href={`/calculators/${calculator.category}`}
            className="hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors"
          >
            {category.name}
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#1e293b] dark:text-[#f1f5f9] font-medium">
          {calculator.name}
        </li>
      </ol>
    </nav>
  );
}

