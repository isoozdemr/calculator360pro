import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateFAQPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Financial Terms Glossary | Calculator360Pro",
  description: "2026 financial terms: mortgage, APR, compound interest, tax definitions and more. Free finance calculators. Use with confidence.",
  alternates: {
    canonical: `${SITE_URL}/guides/financial-terms-glossary`,
    languages: {
      en: `${SITE_URL}/guides/financial-terms-glossary`,
      tr: `${SITE_URL}/tr/rehberler/finansal-terimler-sozlugu`,
      "x-default": `${SITE_URL}/guides/financial-terms-glossary`,
    },
  },
  openGraph: { title: "Financial Terms Glossary", url: `${SITE_URL}/guides/financial-terms-glossary`, locale: "en_US", siteName: "Calculator360Pro" },
};

const terms = [
  { term: "APR", def: "Annual Percentage Rate. The yearly cost of borrowing including fees. Compare APR when shopping for loans or credit cards." },
  { term: "Compound Interest", def: "Interest earned on principal plus accumulated interest. Over time it can grow savings or increase debt significantly." },
  { term: "Amortization", def: "Paying off a loan with regular payments over time. Early payments are mostly interest; later ones pay down more principal." },
  { term: "Principal", def: "The original amount borrowed or invested, before interest or returns." },
  { term: "Equity", def: "Ownership in an asset. In a home, it is the home's value minus the remaining mortgage balance." },
  { term: "Diversification", def: "Spreading investments across different assets or sectors to reduce risk." },
  { term: "Tax Deduction", def: "An expense that reduces taxable income. Examples include mortgage interest and charitable donations (subject to limits)." },
  { term: "Estimated Tax", def: "Quarterly payments for income not subject to withholding (e.g. self-employment). Used to avoid underpayment penalties." },
];

const GUIDE_FAQS = [
  { question: "What is APR and why does it matter?", answer: "APR (Annual Percentage Rate) is the yearly cost of borrowing including fees. It matters because it lets you compare loans and credit cards on a level playing field—always compare APR when shopping for loans or cards." },
  { question: "What is compound interest?", answer: "Compound interest is interest earned on your principal plus any accumulated interest. Over time it can grow savings significantly or increase debt, so it helps to use a compound interest calculator when planning." },
];

export default function FinancialGlossaryPage() {
  const faqSchema = generateFAQPageSchema(GUIDE_FAQS);
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / Guides / Financial Glossary
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Financial Terms Glossary</h1>
        <p className="text-[#64748b] mb-4">
          Key terms for mortgages, loans, investments, and taxes. Use our calculators with confidence.
        </p>
        <p className="text-[#64748b] mb-6">
          Understanding these terms helps you compare offers, plan repayments, and make better financial decisions. When in doubt, check the fine print or consult a financial or tax professional for your situation.
        </p>
        <ul className="space-y-3 mb-8">
          {terms.map((t) => (
            <li key={t.term} className="border-b border-[#e2e8f0] pb-3">
              <strong className="text-[#1e293b]">{t.term}</strong>: {t.def}
            </li>
          ))}
        </ul>
        <section className="mb-8 pt-6 border-t border-[#e2e8f0]" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-xl font-bold text-[#1e293b] mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {GUIDE_FAQS.map((faq, i) => (
              <li key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="font-semibold text-[#1e293b]" itemProp="name">{faq.question}</h3>
                <p className="text-[#64748b] mt-1" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <span itemProp="text">{faq.answer}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>
        <p className="text-[#64748b]">
          <Link href="/calculators/finance/compound-interest-calculator" className="text-[#2563eb] hover:underline">Compound Interest Calculator</Link>,{" "}
          <Link href="/calculators/finance/mortgage-calculator" className="text-[#2563eb] hover:underline">Mortgage Calculator</Link>,{" "}
          <Link href="/calculators/finance/tax-calculator" className="text-[#2563eb] hover:underline">Tax Calculator</Link>.{" "}
          <Link href="/blog/compound-interest-explained" className="text-[#2563eb] hover:underline">Compound Interest Explained</Link>,{" "}
          <Link href="/guides/tax-calendar-2026-usa" className="text-[#2563eb] hover:underline">Tax Calendar 2026 USA</Link>.
        </p>
      </div>
    </div>
  );
}
