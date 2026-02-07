import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateHowToSchema, generateSimpleBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Tax Calendar 2026 USA | Calculator360Pro",
  description: "Key US tax deadlines 2026: federal income tax, estimated taxes, extensions. Plan with our tax calculator.",
  keywords: [
    "tax calendar 2026",
    "US tax deadlines 2026",
    "federal tax due dates",
    "estimated tax 2026",
    "tax extension 2026",
    "IRS deadlines",
  ],
  alternates: {
    canonical: `${SITE_URL}/guides/tax-calendar-2026-usa`,
    languages: {
      en: `${SITE_URL}/guides/tax-calendar-2026-usa`,
      tr: `${SITE_URL}/tr/rehberler/vergi-takvimi-2026`,
      "x-default": `${SITE_URL}/guides/tax-calendar-2026-usa`,
    },
  },
  openGraph: { title: "Tax Calendar 2026 USA", url: `${SITE_URL}/guides/tax-calendar-2026-usa`, locale: "en_US", siteName: "Calculator360Pro" },
};

const dates = [
  { date: "January 15, 2026", desc: "Q4 2025 estimated tax payment due. Fourth-quarter estimated tax for the prior year. If you are self-employed or have income not subject to withholding, mark this date to avoid underpayment penalties." },
  { date: "January 31, 2026", desc: "Employers must send W-2s to employees; 1099-NEC and other 1099s (e.g. interest, dividends) are due from payers. Use these forms when preparing your return." },
  { date: "April 15, 2026", desc: "Federal income tax return due (or file extension). File your 2025 return or request an extension (Form 4868). Note: an extension gives more time to file, not to pay; pay any balance due by April 15 to limit interest and penalties." },
  { date: "April 15, 2026", desc: "Q1 2026 estimated tax payment due. First quarterly payment for the current year if you expect to owe tax on non-withheld income." },
  { date: "June 15, 2026", desc: "Q2 2026 estimated tax payment due. Second quarterly estimated tax for 2026." },
  { date: "September 15, 2026", desc: "Q3 2026 estimated tax payment due. Third quarterly estimated tax for 2026." },
  { date: "October 15, 2026", desc: "Extended federal return due if you filed Form 4868. If you requested an extension by April 15, your completed return must be filed by this date to avoid failure-to-file penalties." },
];

const HOWTO_STEPS = dates.map((d) => ({
  name: d.date,
  text: d.desc,
}));

const BREADCRUMB_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
  { name: "Guides", path: "/guides" },
  { name: "Tax Calendar 2026 USA", path: "/guides/tax-calendar-2026-usa" },
];

export default function TaxCalendar2026USAPage() {
  const howToSchema = generateHowToSchema(
    "How to Use the 2026 US Tax Calendar",
    "Key US federal tax deadlines for 2026: estimated tax payments and filing dates. Plan ahead to avoid penalties.",
    HOWTO_STEPS,
    `${SITE_URL}/guides/tax-calendar-2026-usa`
  );
  const breadcrumbSchema = generateSimpleBreadcrumbSchema(BREADCRUMB_ITEMS);
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / Guides / Tax Calendar 2026 USA
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Tax Calendar 2026 USA</h1>
        <p className="text-[#64748b] mb-4">
          Key US federal tax deadlines for 2026. State and local deadlines may differ—always confirm with the IRS, your state revenue department, or your tax preparer. This guide focuses on the main federal dates that affect most individuals and self-employed filers.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Who Must Pay Estimated Taxes</h2>
        <p className="text-[#64748b] mb-4">
          If you receive income that is not subject to withholding—such as self-employment income, rental income, interest, dividends, or gig economy pay—you generally need to pay estimated tax quarterly. The IRS expects you to pay tax as you earn income during the year. If you do not pay enough through withholding and estimated payments, you can face an underpayment penalty when you file. Use our <Link href="/calculators/finance/tax-calculator" className="text-[#2563eb] hover:underline">tax calculator</Link> to estimate your liability and plan quarterly payments.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Estimated Taxes and Extensions</h2>
        <p className="text-[#64748b] mb-4">
          Estimated taxes are quarterly payments for income that is not subject to withholding. The four due dates are typically January 15 (for Q4 of the prior year), April 15, June 15, and September 15. If a due date falls on a weekend or holiday, the IRS usually moves it to the next business day. Filing an extension (e.g. Form 4868) gives you until October 15 to file your return, but it does not extend the time to pay any tax due; interest and penalties may apply on amounts paid after April 15. Plan ahead so you are not caught short.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">State and Local Deadlines</h2>
        <p className="text-[#64748b] mb-4">
          Many states follow the federal calendar (e.g. April 15 for individual returns), but some have different dates or different rules for estimated payments. If you live or work in a state with income tax, check your state revenue department for exact deadlines. Local taxes (e.g. city or school district) may also have separate due dates. Keeping a single calendar with both federal and state dates can help you avoid missed payments and late fees.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Tips to Avoid Penalties</h2>
        <p className="text-[#64748b] mb-4">
          Pay at least 90% of the current year tax or 100% (110% for higher incomes) of the prior year tax through withholding and estimated payments to avoid underpayment penalties. Set reminders for each quarterly due date and keep records of every payment. If your income changes during the year, recalculate and adjust your next estimated payment. Use our <Link href="/calculators/finance/salary-calculator" className="text-[#2563eb] hover:underline">salary calculator</Link> to see withholding impact when you change jobs or get a raise. When in doubt, consult a tax professional for your situation.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Key 2026 Federal Dates at a Glance</h2>
        <ul className="space-y-3 mb-8">
          {dates.map((d, i) => (
            <li key={`${d.date}-${i}`} className="border-b border-[#e2e8f0] pb-3">
              <strong className="text-[#1e293b]">{d.date}</strong>: {d.desc}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Record-Keeping for Tax Time</h2>
        <p className="text-[#64748b] mb-4">
          Keep copies of all estimated tax payment confirmations, W-2s, 1099s, and receipts for deductions. Organizing documents by year and category makes filing (or handing them to a preparer) much easier. If you use our tax or salary calculators during the year, note the assumptions you used so you can align them with actual forms when you file.
        </p>

        <h2 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">Related Tools and Guides</h2>
        <p className="text-[#64748b]">
          <Link href="/calculators/finance/tax-calculator" className="text-[#2563eb] hover:underline">Tax Calculator</Link>,{" "}
          <Link href="/calculators/finance/salary-calculator" className="text-[#2563eb] hover:underline">Salary Calculator</Link>.{" "}
          <Link href="/blog/understanding-tax-brackets" className="text-[#2563eb] hover:underline">Understanding Tax Brackets</Link>,{" "}
          <Link href="/guides/financial-terms-glossary" className="text-[#2563eb] hover:underline">Financial Terms Glossary</Link>.
        </p>
      </div>
    </div>
  );
}
