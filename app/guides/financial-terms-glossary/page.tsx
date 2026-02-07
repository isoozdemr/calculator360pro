import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateFAQPageSchema, generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Financial Terms Glossary | Calculator360Pro",
  description: "2026 financial terms: mortgage, APR, compound interest, tax definitions and more. Free finance calculators. Use with confidence.",
  keywords: [
    "financial terms glossary",
    "financial terms 2026",
    "APR definition",
    "compound interest definition",
    "mortgage terms",
    "tax terms",
    "finance glossary",
  ],
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
  { term: "APR", def: "Annual Percentage Rate. The yearly cost of borrowing including fees. Compare APR when shopping for loans or credit cards. A lower APR means lower total cost over the life of the loan." },
  { term: "Compound Interest", def: "Interest earned on principal plus accumulated interest. Over time it can grow savings or increase debt significantly. The more frequently interest compounds (e.g. monthly vs annually), the faster the balance grows." },
  { term: "Amortization", def: "Paying off a loan with regular payments over time. Early payments are mostly interest; later ones pay down more principal. An amortization schedule shows how each payment splits between interest and principal." },
  { term: "Principal", def: "The original amount borrowed or invested, before interest or returns. In a loan, paying down principal reduces the amount on which future interest is calculated." },
  { term: "Equity", def: "Ownership in an asset. In a home, it is the home's value minus the remaining mortgage balance. Building equity is a key benefit of homeownership." },
  { term: "Diversification", def: "Spreading investments across different assets or sectors to reduce risk. The idea is that when one investment falls, others may rise, smoothing overall returns." },
  { term: "Tax Deduction", def: "An expense that reduces taxable income. Examples include mortgage interest and charitable donations (subject to limits). Deductions lower the income the IRS taxes, which can reduce your tax bill." },
  { term: "Estimated Tax", def: "Quarterly payments for income not subject to withholding (e.g. self-employment). Used to avoid underpayment penalties. The IRS expects you to pay tax as you earn income throughout the year." },
  { term: "Refinancing", def: "Replacing an existing loan with a new one, often to get a lower rate or change the term. Refinancing can reduce monthly payments or total interest but may involve closing costs." },
  { term: "LTV (Loan-to-Value)", def: "The ratio of the loan amount to the value of the asset (e.g. home or car). A lower LTV usually means better rates and may help you avoid private mortgage insurance (PMI) on a home loan." },
  { term: "PMI (Private Mortgage Insurance)", def: "Insurance that protects the lender if you default on a conventional mortgage when you put less than 20% down. Once you reach 20% equity, you can often request cancellation of PMI." },
  { term: "Capital Gains", def: "Profit from selling an asset (e.g. stocks, real estate) for more than you paid. Short-term gains (held one year or less) are taxed as ordinary income; long-term gains often get favorable rates." },
  { term: "Roth IRA", def: "An individual retirement account where you contribute after-tax money; qualified withdrawals in retirement are tax-free. Useful for people who expect to be in a higher tax bracket later." },
  { term: "401(k)", def: "An employer-sponsored retirement plan. You contribute pre-tax (or after-tax in a Roth 401(k)); many employers match a portion. Contributions and earnings grow tax-deferred until withdrawal." },
  { term: "Net Worth", def: "Total assets minus total liabilities. It is a snapshot of your financial position. Assets include cash, investments, and property; liabilities include loans and credit card debt." },
  { term: "Liquidity", def: "How easily an asset can be converted to cash without losing value. Cash is highly liquid; real estate is less liquid. Liquidity matters for emergencies and short-term goals." },
  { term: "Inflation", def: "The rate at which the purchasing power of money decreases over time. When inflation is high, the same amount of money buys fewer goods and services. Investments that outpace inflation help preserve wealth." },
  { term: "Yield", def: "The return on an investment, often expressed as a percentage. For bonds, yield relates to interest payments and price. For stocks, dividend yield is annual dividends divided by share price." },
  { term: "Dividend", def: "A portion of a company's earnings paid to shareholders, usually quarterly. Dividend-paying stocks can provide income and help smooth returns in volatile markets." },
  { term: "Credit Score", def: "A number (e.g. FICO) that summarizes your creditworthiness based on payment history, amounts owed, length of credit, and other factors. Higher scores can mean better loan and card terms." },
  { term: "Withholding", def: "Tax withheld from your paycheck (or other income) by an employer or payer. Adjust withholding via Form W-4 so you do not overpay or owe too much at tax time." },
  { term: "W-2", def: "Form that reports wages and taxes withheld for employees. You receive it by January 31 and use it to file your federal and state income tax returns." },
  { term: "1099", def: "A family of forms reporting various types of income other than wages (e.g. freelance income, interest, dividends). Payers send these by late January; you use them to report income on your return." },
  { term: "Escrow", def: "Funds held by a third party until conditions are met. In a mortgage, an escrow account often holds money for property taxes and insurance, with the lender paying those bills when due." },
  { term: "Closing Costs", def: "Fees paid at the settlement of a real estate or refinance transaction. They can include origination fees, title insurance, and appraisal. Lenders provide an estimate early in the process." },
];

const GUIDE_FAQS = [
  { question: "What is APR and why does it matter?", answer: "APR (Annual Percentage Rate) is the yearly cost of borrowing including fees. It matters because it lets you compare loans and credit cards on a level playing field—always compare APR when shopping for loans or cards. A lower APR means you pay less over time." },
  { question: "What is compound interest?", answer: "Compound interest is interest earned on your principal plus any accumulated interest. Over time it can grow savings significantly or increase debt. Use our compound interest calculator to see how your money can grow or how debt can balloon." },
  { question: "When do I need to pay estimated taxes?", answer: "If you have income not subject to withholding (self-employment, rental income, dividends, etc.), you generally need to pay estimated tax quarterly. Missing or late payments can result in underpayment penalties. Our tax calculator and tax calendar guide can help you plan." },
  { question: "What is the difference between a tax deduction and a tax credit?", answer: "A deduction reduces your taxable income; a credit reduces your tax bill dollar for dollar. So a $1,000 credit usually saves more than a $1,000 deduction. Both can lower what you owe; check eligibility and limits for your situation." },
  { question: "How can I improve my credit score?", answer: "Pay bills on time, keep credit card balances low relative to limits, avoid opening many new accounts at once, and maintain a mix of credit types. Checking your report for errors and disputing inaccuracies can also help. Our budget and loan calculators can support better money habits." },
  { question: "Why is diversification important for investments?", answer: "Diversification spreads risk across different assets (stocks, bonds, sectors, geographies). When one area drops, others may hold up or rise, which can smooth returns over time. Our investment and compound interest calculators can help you model long-term growth." },
];

const BREADCRUMB_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
  { name: "Guides", path: "/guides" },
  { name: "Financial Terms Glossary", path: "/guides/financial-terms-glossary" },
];

export default function FinancialGlossaryPage() {
  const faqSchema = generateFAQPageSchema(GUIDE_FAQS);
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS);
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / Guides / Financial Glossary
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Financial Terms Glossary</h1>
        <p className="text-[#64748b] mb-4">
          Key terms for mortgages, loans, investments, and taxes. Use our calculators with confidence.
        </p>
        <p className="text-[#64748b] mb-4">
          Understanding these terms helps you compare offers, plan repayments, and make better financial decisions. When in doubt, check the fine print or consult a financial or tax professional for your situation.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Why Financial Literacy Matters</h2>
        <p className="text-[#64748b] mb-4">
          Whether you are buying a home, saving for retirement, or filing taxes, the language of finance can feel overwhelming. Terms like APR, amortization, and estimated tax appear in loan documents, investment statements, and IRS forms. Knowing what they mean helps you avoid costly mistakes, negotiate better terms, and plan with clarity. This glossary focuses on terms you will encounter when using our mortgage, loan, tax, and investment calculators—so you can interpret results and apply them to your own situation.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">How to Use This Glossary</h2>
        <p className="text-[#64748b] mb-6">
          Terms are listed alphabetically. Each definition is written in plain language and, where relevant, tied to real-world use (e.g. comparing loans, filing taxes, or planning savings). For hands-on numbers, use the linked calculators: mortgage calculator for monthly payments, compound interest calculator for growth over time, and tax calculator for estimated tax or refund. Our blog and tax calendar guide offer deeper dives into topics like compound interest and 2026 US tax deadlines.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">A–Z Financial Terms</h2>
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
