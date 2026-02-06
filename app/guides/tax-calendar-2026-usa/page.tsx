import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { generateHowToSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Tax Calendar 2026 USA | Calculator360Pro",
  description: "Key US tax deadlines 2026: federal income tax, estimated taxes, extensions. Plan with our tax calculator.",
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
  { date: "January 15, 2026", desc: "Q4 2025 estimated tax payment due" },
  { date: "April 15, 2026", desc: "Federal income tax return due (or file extension)" },
  { date: "June 15, 2026", desc: "Q2 2026 estimated tax payment due" },
  { date: "September 15, 2026", desc: "Q3 2026 estimated tax payment due" },
  { date: "October 15, 2026", desc: "Extended federal return due if you filed Form 4868" },
];

const HOWTO_STEPS = dates.map((d) => ({
  name: d.date,
  text: d.desc,
}));

export default function TaxCalendar2026USAPage() {
  const howToSchema = generateHowToSchema(
    "How to Use the 2026 US Tax Calendar",
    "Key US federal tax deadlines for 2026: estimated tax payments and filing dates. Plan ahead to avoid penalties.",
    HOWTO_STEPS,
    `${SITE_URL}/guides/tax-calendar-2026-usa`
  );
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / Guides / Tax Calendar 2026 USA
        </nav>
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Tax Calendar 2026 USA</h1>
        <p className="text-[#64748b] mb-4">
          Key US federal tax deadlines for 2026. State deadlines may differ. Always confirm with the IRS or your preparer.
        </p>
        <h2 className="text-xl font-semibold text-[#1e293b] mt-6 mb-2">Estimated taxes and extensions</h2>
        <p className="text-[#64748b] mb-4">
          Estimated taxes are quarterly payments for income that is not subject to withholding, such as self-employment income, interest, or dividends. If you do not pay enough during the year, you may owe an underpayment penalty. Filing an extension (e.g. Form 4868) gives you until October 15 to file your return, but it does not extend the time to pay any tax due; interest and penalties may apply on amounts paid after April 15.
        </p>
        <ul className="space-y-3 mb-8">
          {dates.map((d) => (
            <li key={d.date} className="border-b border-[#e2e8f0] pb-3">
              <strong className="text-[#1e293b]">{d.date}</strong>: {d.desc}
            </li>
          ))}
        </ul>
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
