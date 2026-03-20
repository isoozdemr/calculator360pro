import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Best Mortgage Calculator 2026 | Calculator360Pro",
  description:
    "Compare the best mortgage calculator for 2026: principal & interest (P&I), amortization schedule, and how to factor taxes, insurance, and PMI.",
  keywords: [
    "best mortgage calculator 2026",
    "best mortgage calculator",
    "mortgage calculator",
    "mortgage payment calculator",
    "amortization schedule",
  ],
  alternates: {
    canonical: `${SITE_URL}/guides/best-mortgage-calculator-2026`,
    languages: {
      en: `${SITE_URL}/guides/best-mortgage-calculator-2026`,
      tr: `${SITE_URL}/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026`,
      "x-default": `${SITE_URL}/guides/best-mortgage-calculator-2026`,
    },
  },
  openGraph: {
    title: "Best Mortgage Calculator 2026",
    url: `${SITE_URL}/guides/best-mortgage-calculator-2026`,
    locale: "en_US",
    siteName: "Calculator360Pro",
    description:
      "Compare the best mortgage calculator for 2026: P&I, amortization schedule, and total monthly cost assumptions.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
  { name: "Guides", path: "/guides" },
  { name: "Best Mortgage Calculator 2026", path: "/guides/best-mortgage-calculator-2026" },
];

export default function BestMortgageCalculator2026Page() {
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> /{" "}
            <Link href="/guides">Guides</Link> / <span className="text-[#1e293b] font-medium">Best Mortgage Calculator 2026</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Best Mortgage Calculator 2026</h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            “Best” means a calculator helps you compare scenarios clearly: principal & interest (P&amp;I), an amortization schedule,
            and a way to estimate the real total monthly cost (taxes, insurance, and PMI when eligible).
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">What to Look For</h2>
          <ul className="space-y-3 text-[#334155]">
            <li>
              <strong>P&amp;I monthly payment</strong> with correct amortization math (fixed interest rate + repayment term).
            </li>
            <li>
              <strong>Amortization schedule</strong> so you can see interest vs. principal over time.
            </li>
            <li>
              <strong>Estimated total monthly cost</strong> (taxes + homeowners insurance + PMI when your inputs indicate it applies).
            </li>
            <li>
              <strong>Scenario comparison</strong> (try different terms and interest rates to understand trade-offs).
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">How to Compare Mortgage Calculators</h2>
          <ol className="space-y-3 text-[#334155] list-decimal list-inside">
            <li>Check whether the calculator shows <strong>principal &amp; interest</strong> and not only one quick number.</li>
            <li>Look for an <strong>amortization table</strong> (even if it’s limited to the first 12–24 months).</li>
            <li>See if it lets you estimate <strong>taxes and insurance</strong> and includes PMI using your inputs.</li>
            <li>Confirm how it handles <strong>down payment</strong> (does it affect loan amount, and does PMI turn on/off?).</li>
          </ol>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Try Calculator360Pro</h2>
          <p className="text-[#334155] mb-6 leading-relaxed">
            Use our mortgage calculator to get a monthly payment breakdown and an amortization schedule. Start with inputs you
            already know (home value, down payment %, interest rate, and loan term), then optionally add annual taxes and insurance.
          </p>
          <p className="mb-8">
            <Link
              href="/calculators/finance/mortgage-calculator"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Open Mortgage Calculator
            </Link>
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Related Guides</h2>
          <p className="text-[#334155] leading-relaxed">
            Also check our{" "}
            <Link href="/guides/student-loans-monthly-payment-calculator-how-to" className="text-[#2563eb] hover:underline">
              Student Loans Monthly Payment guide
            </Link>{" "}
            to understand how monthly payment calculations work across different loan types.
          </p>

          <div className="mt-12 bg-white border border-[#e2e8f0] rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">Sources & Update</h2>
            <p className="text-sm text-[#64748b]">
              <strong className="text-[#1e293b]">Author:</strong> Calculator360Pro Team
            </p>
            <p className="text-sm text-[#64748b] mt-2">
              Updated for 2026.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#334155]">
              <li>
                Amortization concept:{" "}
                <a href="https://en.wikipedia.org/wiki/Amortization" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                  Wikipedia
                </a>
              </li>
              <li>
                Amortization overview:{" "}
                <a href="https://www.investopedia.com/terms/a/amortization.asp" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                  Investopedia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

