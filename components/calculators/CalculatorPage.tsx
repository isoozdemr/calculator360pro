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
import { CalorieCalculator } from "./CalorieCalculator";
import { InvestmentCalculator } from "./InvestmentCalculator";
import { CarLoanCalculator } from "./CarLoanCalculator";
import { StudentLoanCalculator } from "./StudentLoanCalculator";
import { CreditCardPayoffCalculator } from "./CreditCardPayoffCalculator";
import { RetirementCalculator } from "./RetirementCalculator";
import { SavingsCalculator } from "./SavingsCalculator";
import { BudgetCalculator } from "./BudgetCalculator";
import { TipCalculator } from "./TipCalculator";
import { DiscountCalculator } from "./DiscountCalculator";
import { DateCalculator } from "./DateCalculator";
import { UnitConverter } from "./UnitConverter";
import { PregnancyCalculator } from "./PregnancyCalculator";
import { HoursCalculator } from "./HoursCalculator";
import { CurrencyConverter } from "./CurrencyConverter";
import { InflationPurchasingPowerCalculator } from "./InflationPurchasingPowerCalculator";
import { FractionCalculator } from "./FractionCalculator";
import { BMRCalculator } from "./BMRCalculator";
import { GradeCalculator } from "./GradeCalculator";
import { ROICalculator } from "./ROICalculator";
import { PaybackPeriodCalculator } from "./PaybackPeriodCalculator";
import { AdAboveFold, AdBelowContent } from "@/components/ads/AdSense";
import { getRelatedCalculators } from "@/lib/calculators/related";
import { getRelatedBlogPosts } from "@/lib/blog/related";
import { Breadcrumbs } from "@/components/SEO/Breadcrumbs";
import { SocialShare } from "@/components/SEO/SocialShare";
import { StarRating } from "@/components/engagement/StarRating";
import { PrintPdfButton } from "@/components/engagement/PrintPdfButton";
import { CalculationHistory } from "@/components/engagement/CalculationHistory";
import { getCategorySlugByKey } from "@/lib/constants";
import { optimizeFAQAnswer } from "@/lib/seo/featured-snippets";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";
import Link from "next/link";

interface CalculatorPageProps {
  calculator: CalculatorDefinition;
}

const calculatorComponents: Record<
  string,
  React.ComponentType<Record<string, never>>
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
  "calorie-calculator": CalorieCalculator,
  "investment-calculator": InvestmentCalculator,
  "car-loan-calculator": CarLoanCalculator,
  "student-loan-calculator": StudentLoanCalculator,
  "credit-card-payoff-calculator": CreditCardPayoffCalculator,
  "retirement-calculator": RetirementCalculator,
  "savings-calculator": SavingsCalculator,
  "budget-calculator": BudgetCalculator,
  "tip-calculator": TipCalculator,
  "discount-calculator": DiscountCalculator,
  "date-calculator": DateCalculator,
  "unit-converter": UnitConverter,
  "pregnancy-calculator": PregnancyCalculator,
  "hours-calculator": HoursCalculator,
  "currency-converter": CurrencyConverter,
  "inflation-purchasing-power-calculator": InflationPurchasingPowerCalculator,
  "fraction-calculator": FractionCalculator,
  "bmr-calculator": BMRCalculator,
  "grade-calculator": GradeCalculator,
  "roi-calculator": ROICalculator,
  "payback-period-calculator": PaybackPeriodCalculator,
};

export function CalculatorPage({ calculator }: CalculatorPageProps) {
  const CalculatorComponent =
    calculatorComponents[calculator.id] || PercentageCalculator;

  // Get related calculators using smart algorithm
  // Combines manual relatedCalculators with algorithm-based suggestions
  const relatedCalculators = getRelatedCalculators(calculator, 6);
  
  // Get related blog posts for internal linking
  const relatedBlogPosts = getRelatedBlogPosts(calculator, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs calculator={calculator} />
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            {calculator.name}
          </h1>
          <p className="text-lg text-[#64748b] max-w-3xl">
            {calculator.description}
          </p>
        </div>

        <AdAboveFold />

        <CalculatorComponent />

        {(calculator.category === "health" || calculator.category === "finance") && (
          <CalculatorDisclaimer category={calculator.category} locale="en" />
        )}

        {/* User Rating Component */}
        <StarRating calculatorId={calculator.id} calculatorName={calculator.name} />

        {/* Calculation History */}
        <CalculationHistory calculatorId={calculator.id} maxItems={3} />

        <AdBelowContent />

        {calculator.content && (
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: calculator.content }}
            />
            <div className="flex flex-wrap gap-3 mt-4">
              <PrintPdfButton />
              <SocialShare
                url={`/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`}
                title={calculator.name}
                description={calculator.metaDescription}
              />
            </div>
            <p className="text-sm text-[#64748b] mt-3">
              Embed this calculator: use{" "}
              <code className="bg-[#f1f5f9] px-1 rounded">
                https://calculator360pro.com/embed/calculators/{getCategorySlugByKey(calculator.category)}/{calculator.slug}
              </code>{" "}
              in an iframe.
            </p>
          </div>
        )}

        {relatedCalculators.length > 0 && (
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Related Calculators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCalculators.map((related) => (
                <Link
                  key={related.id}
                  href={`/calculators/${getCategorySlugByKey(related.category)}/${related.slug}`}
                  className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                >
                  <h3 className="font-semibold text-[#1e293b] mb-2">
                    {related.name}
                  </h3>
                  <p className="text-sm text-[#64748b] line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Blog Posts Section - Internal Linking */}
        {relatedBlogPosts.length > 0 && (
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                >
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-[#2563eb] bg-[#eff6ff] rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-[#1e293b] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748b] line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {calculator.faqs && calculator.faqs.length > 0 && (
          <div className="mt-12 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {calculator.faqs.map((faq, index) => {
                // Optimize FAQ answer for featured snippets (40-60 words)
                const optimizedAnswer = optimizeFAQAnswer(faq.answer, 50);
                
                return (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed">
                      {optimizedAnswer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

