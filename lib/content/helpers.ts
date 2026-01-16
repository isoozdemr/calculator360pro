/**
 * Content Generation Helpers
 * 
 * Utilities for generating SEO-optimized content with featured snippets support
 * Uses featured snippets utilities for step-by-step guides, tables, and definitions
 */

import {
  formatStepByStepGuide,
  formatComparisonTable,
  formatDefinitionBox,
  optimizeFAQAnswer,
} from "@/lib/seo/featured-snippets";

/**
 * Generate step-by-step guide content for calculators
 * 
 * @param title - Guide title
 * @param steps - Array of step descriptions
 * @returns HTML formatted step-by-step guide
 * 
 * @example
 * ```typescript
 * const steps = [
 *   "Enter your loan amount in the first field",
 *   "Input your annual interest rate",
 *   "Select your loan term (15 or 30 years)",
 *   "Click calculate to see your monthly payment"
 * ];
 * const guide = generateStepByStepGuide("How to Calculate Mortgage Payment", steps);
 * ```
 */
export function generateStepByStepGuide(
  title: string,
  steps: string[]
): string {
  const guideHTML = formatStepByStepGuide(steps);
  return `
    <h3>${title}</h3>
    <p>Follow these steps to ${title.toLowerCase()}:</p>
    ${guideHTML}
  `;
}

/**
 * Generate comparison table content for calculators
 * 
 * @param title - Table title
 * @param description - Table description
 * @param headers - Table column headers
 * @param rows - Table data rows
 * @returns HTML formatted comparison table
 * 
 * @example
 * ```typescript
 * const headers = ["Loan Amount", "Interest Rate", "30-Year Payment", "15-Year Payment"];
 * const rows = [
 *   ["$200,000", "4%", "$955", "$1,479"],
 *   ["$300,000", "4%", "$1,432", "$2,219"]
 * ];
 * const table = generateComparisonTable(
 *   "Mortgage Payment Comparison",
 *   "Compare monthly payments for different loan amounts and terms",
 *   headers,
 *   rows
 * );
 * ```
 */
export function generateComparisonTable(
  title: string,
  description: string,
  headers: string[],
  rows: string[][]
): string {
  const tableHTML = formatComparisonTable(headers, rows);
  return `
    <h3>${title}</h3>
    <p>${description}</p>
    ${tableHTML}
  `;
}

/**
 * Generate definition box content for calculators
 * 
 * @param term - Term to define
 * @param definition - Definition (40-60 words for featured snippets)
 * @param example - Optional example
 * @returns HTML formatted definition box
 * 
 * @example
 * ```typescript
 * const definition = generateDefinitionBox(
 *   "BMI",
 *   "Body Mass Index (BMI) is a measure of body fat based on height and weight. It's calculated by dividing weight in kilograms by height in meters squared (kg/m²). BMI provides a general indicator of health and fitness, though it doesn't account for muscle mass or body composition.",
 *   "A person who is 5'10\" tall and weighs 180 pounds has a BMI of approximately 25.8."
 * );
 * ```
 */
export function generateDefinitionBox(
  term: string,
  definition: string,
  example?: string
): string {
  // Optimize definition for featured snippets (40-60 words)
  const optimizedDefinition = optimizeFAQAnswer(definition, 50);
  return formatDefinitionBox(term, optimizedDefinition, example);
}

/**
 * Generate FAQ section with optimized answers
 * 
 * @param faqs - Array of FAQ objects with question and answer
 * @returns HTML formatted FAQ section
 * 
 * @example
 * ```typescript
 * const faqs = [
 *   {
 *     question: "How do I calculate a percentage?",
 *     answer: "To calculate a percentage, divide the part by the whole and multiply by 100."
 *   }
 * ];
 * const faqSection = generateFAQSection(faqs);
 * ```
 */
export function generateFAQSection(
  faqs: Array<{ question: string; answer: string }>
): string {
  const faqItems = faqs.map((faq) => {
    const optimizedAnswer = optimizeFAQAnswer(faq.answer, 50);
    return `
      <div>
        <h4>${faq.question}</h4>
        <p>${optimizedAnswer}</p>
      </div>
    `;
  }).join("");

  return `
    <h3>Frequently Asked Questions</h3>
    ${faqItems}
  `;
}

/**
 * Generate complete calculator content section
 * Combines multiple content types for comprehensive SEO content
 * 
 * @param options - Content generation options
 * @returns Complete HTML content
 */
export function generateCalculatorContent(options: {
  introduction: string;
  definition?: { term: string; definition: string; example?: string };
  stepByStepGuide?: { title: string; steps: string[] };
  comparisonTable?: {
    title: string;
    description: string;
    headers: string[];
    rows: string[][];
  };
  additionalContent?: string;
  faqs?: Array<{ question: string; answer: string }>;
}): string {
  let content = `<p>${options.introduction}</p>`;

  if (options.definition) {
    content += generateDefinitionBox(
      options.definition.term,
      options.definition.definition,
      options.definition.example
    );
  }

  if (options.stepByStepGuide) {
    content += generateStepByStepGuide(
      options.stepByStepGuide.title,
      options.stepByStepGuide.steps
    );
  }

  if (options.comparisonTable) {
    content += generateComparisonTable(
      options.comparisonTable.title,
      options.comparisonTable.description,
      options.comparisonTable.headers,
      options.comparisonTable.rows
    );
  }

  if (options.additionalContent) {
    content += options.additionalContent;
  }

  if (options.faqs && options.faqs.length > 0) {
    content += generateFAQSection(options.faqs);
  }

  return content;
}

