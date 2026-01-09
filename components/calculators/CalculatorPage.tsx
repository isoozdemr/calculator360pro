import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { PercentageCalculator } from "./PercentageCalculator";
import { BMICalculator } from "./BMICalculator";
import { GPACalculator } from "./GPACalculator";
import { AgeCalculator } from "./AgeCalculator";
import { ScientificCalculator } from "./ScientificCalculator";
import { MortgageCalculator } from "./MortgageCalculator";
import { CompoundInterestCalculator } from "./CompoundInterestCalculator";
import { LoanCalculator } from "./LoanCalculator";
import { TaxCalculator } from "./TaxCalculator";
import { SalaryCalculator } from "./SalaryCalculator";
import { BodyFatCalculator } from "./BodyFatCalculator";
import { AdAboveFold, AdBelowContent } from "@/components/ads/AdSense";
import { getCalculator } from "@/lib/calculators/definitions";
import { Breadcrumbs } from "@/components/SEO/Breadcrumbs";
import Link from "next/link";

interface CalculatorPageProps {
  calculator: CalculatorDefinition;
}

const calculatorComponents: Record<
  string,
  React.ComponentType<{}>
> = {
  "percentage-calculator": PercentageCalculator,
  "bmi-calculator": BMICalculator,
  "gpa-calculator": GPACalculator,
  "age-calculator": AgeCalculator,
  "scientific-calculator": ScientificCalculator,
  "mortgage-calculator": MortgageCalculator,
  "compound-interest-calculator": CompoundInterestCalculator,
  "loan-calculator": LoanCalculator,
  "tax-calculator": TaxCalculator,
  "salary-calculator": SalaryCalculator,
  "body-fat-calculator": BodyFatCalculator,
};

export function CalculatorPage({ calculator }: CalculatorPageProps) {
  const CalculatorComponent =
    calculatorComponents[calculator.id] || PercentageCalculator;

  const relatedCalculators = (calculator.relatedCalculators
    ?.map((id) => getCalculator(id))
    .filter((calc): calc is CalculatorDefinition => calc !== undefined) || []);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs calculator={calculator} />
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
            {calculator.name}
          </h1>
          <p className="text-lg text-[#64748b] dark:text-[#94a3b8] max-w-3xl">
            {calculator.description}
          </p>
        </div>

        <AdAboveFold />

        <CalculatorComponent />

        <AdBelowContent />

        {calculator.content && (
          <div className="mt-12 bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-8">
            <div
              className="prose prose-slate dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: calculator.content }}
            />
          </div>
        )}

        {relatedCalculators.length > 0 && (
          <div className="mt-12 bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-6">
              Related Calculators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCalculators.map((related) => (
                <Link
                  key={related.id}
                  href={`/calculators/${related.category}/${related.slug}`}
                  className="block p-4 rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] hover:border-[#2563eb] dark:hover:border-[#60a5fa] transition-colors"
                >
                  <h3 className="font-semibold text-[#1e293b] dark:text-[#f1f5f9] mb-2">
                    {related.name}
                  </h3>
                  <p className="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {calculator.faqs && calculator.faqs.length > 0 && (
          <div className="mt-12 bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {calculator.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-[#1e293b] dark:text-[#f1f5f9] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

