import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Student Loans Monthly Payment (How to Calculate) | Calculator360Pro",
  description:
    "Learn how student loans monthly payments are calculated using standard vs extended repayment terms, interest rate, and amortization math.",
  keywords: [
    "student loans monthly payment calculator",
    "student loan payment calculator",
    "how to calculate monthly payment",
    "amortization formula",
    "repayment term",
  ],
  alternates: {
    canonical: `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
    languages: {
      en: `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
      tr: `${SITE_URL}/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir`,
      "x-default": `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
    },
  },
  openGraph: {
    title: "Student Loans Monthly Payment (How to Calculate)",
    url: `${SITE_URL}/guides/student-loans-monthly-payment-calculator-how-to`,
    locale: "en_US",
    siteName: "Calculator360Pro",
    description:
      "Step-by-step: principal, interest rate, repayment term, monthly payment, total interest, and payoff date.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
  { name: "Guides", path: "/guides" },
  {
    name: "Student Loans Monthly Payment (How to Calculate)",
    path: "/guides/student-loans-monthly-payment-calculator-how-to",
  },
];

export default function StudentLoansMonthlyPaymentHowToPage() {
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
            <Link href="/guides">Guides</Link> /{" "}
            <span className="text-[#1e293b] font-medium">Student Loans Monthly Payment</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#1e293b] mb-4">
            Student Loans Monthly Payment: How to Calculate
          </h1>
          <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
            This guide explains the inputs behind a student loan monthly payment: loan principal, interest rate,
            and repayment term. It also explains how standard vs extended terms change your payoff time and total interest.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">1) Identify the Loan Inputs</h2>
          <ul className="space-y-3 text-[#334155]">
            <li>
              <strong>Principal (P):</strong> your loan balance (before interest accrues).
            </li>
            <li>
              <strong>Annual interest rate:</strong> the percentage charged each year.
            </li>
            <li>
              <strong>Repayment term:</strong> Standard (shorter) or Extended (longer).
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">2) Use the Amortization Formula</h2>
          <p className="text-[#334155] leading-relaxed mb-4">
            For fixed-rate amortizing loans, the monthly payment is commonly computed as:
          </p>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-4 text-[#0f172a] font-mono text-sm mb-8">
            M = P × [ r(1+r)^n ] / [ (1+r)^n - 1 ]
          </div>
          <p className="text-[#334155] leading-relaxed mb-6">
            Where <strong>r</strong> is the monthly interest rate (annual ÷ 12) and <strong>n</strong> is the number of monthly payments.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">3) Understand Standard vs Extended Terms</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Standard terms usually increase the monthly payment, but you pay less total interest because you finish sooner.
            Extended terms spread the same balance across more months: monthly payment goes down, but total interest typically increases.
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">4) Use the Calculator</h2>
          <p className="text-[#334155] leading-relaxed mb-6">
            Plug your loan details into our student loan calculator to get the monthly payment, total interest, and payoff date.
          </p>
          <p className="mb-8">
            <Link
              href="/calculators/finance/student-loan-calculator"
              className="inline-block bg-[#2563eb] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Open Student Loan Calculator
            </Link>
          </p>

          <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Note</h2>
          <p className="text-[#334155] leading-relaxed">
            This guide and tool focus on fixed-term amortization inputs. It does not model income-driven repayment formulas
            or ad-hoc extra payment amounts.
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
                Amortization formula (concept):{" "}
                <a href="https://en.wikipedia.org/wiki/Amortization" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">
                  Wikipedia
                </a>
              </li>
              <li>
                Loan amortization overview:{" "}
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

