import { Metadata } from "next";
import Link from "next/link";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES, SITE_URL, getCategoryKeyBySlug, getCategorySlugByKey } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Online Calculators 2026 | Mortgage, BMI, Tax, Loan, Protein",
  description:
    "Free online calculators 2026: mortgage, BMI, tax, debt-to-income, loan payoff, water intake, protein & more. No sign-up. Accurate results in seconds. Try Calculator360Pro now!",
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      tr: `${SITE_URL}/tr`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Free Online Calculators 2026 | Mortgage, BMI, Tax",
    description:
      "Calculate mortgage, BMI, taxes & more in seconds. Free, accurate. Try Calculator360Pro now!",
    url: SITE_URL,
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Calculator360Pro - Free Online Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Calculators 2026 | Mortgage, BMI, Tax",
    description:
      "Calculate mortgage, BMI, taxes & more in seconds. Free tools. Try now!",
    images: [`${SITE_URL}/og-image.png`],
  },
};

const EN_GUIDES = [
  { title: "Financial Terms Glossary", href: "/guides/financial-terms-glossary", description: "APR, compound interest, amortization and more. Use with our finance calculators." },
  { title: "Tax Calendar 2026 USA", href: "/guides/tax-calendar-2026-usa", description: "US tax deadlines and filing dates for 2026. Plan with our tax calculator." },
];

const FAQS = [
  { q: "What is Calculator360Pro?", a: "Calculator360Pro is a free online calculator site offering accurate tools for finance, health, education, math, and date & time. No sign-up required." },
  { q: "Are the calculators really free?", a: "Yes. All calculators are free with no registration, hidden fees, or subscriptions. Use them anytime on any device." },
  { q: "Which calculators do you offer?", a: "We offer 30+ calculators including mortgage, loan payoff, debt-to-income, BMI, tax, salary, protein, water intake, GPA, percentage, and many more." },
  { q: "How accurate are the results?", a: "We use industry-standard formulas and keep calculators updated. For major financial or health decisions, always consult a professional." },
];

export default function HomePage() {
  const calculators = getAllCalculators();
  const categories = Object.values(CALCULATOR_CATEGORIES);
  const calculatorCount = calculators.length;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e293b] via-[#1e3a5f] to-[#334155] text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>2026 · Free · No sign-up</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Free Online Calculators
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">for Every Need</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] mb-8 max-w-3xl mx-auto leading-relaxed">
              Mortgage, BMI, tax, debt-to-income, loan payoff, water intake, protein and <strong className="text-white">{calculatorCount}+ more</strong>. Accurate results in seconds. <strong className="text-white">100% free</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators" className="inline-flex items-center justify-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors text-lg">
                All Calculators
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/calculators/finance/mortgage-calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-lg">
                Mortgage Calculator
              </Link>
              <Link href="/calculators/health/bmi-calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-lg">
                BMI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-[#e2e8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2563eb]">{calculatorCount}+</p>
              <p className="text-[#64748b] text-sm">Calculators</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2563eb]">Free</p>
              <p className="text-[#64748b] text-sm">No sign-up</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2563eb]">2026</p>
              <p className="text-[#64748b] text-sm">Updated</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2563eb]">100%</p>
              <p className="text-[#64748b] text-sm">Free forever</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => {
            const categoryKey = getCategoryKeyBySlug(category.slug);
            const categoryCalculators = categoryKey
              ? calculators.filter((calc) => calc.category === categoryKey)
              : [];
            return (
              <div
                key={category.slug}
                className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6"
              >
                <h2 className="text-2xl font-bold text-[#1e293b] mb-3">
                  {category.name}
                </h2>
                <p className="text-[#64748b] mb-4">
                  {category.description}
                </p>
                <Link
                  href={`/calculators/${category.slug}`}
                  className="text-[#2563eb] font-semibold hover:underline"
                >
                  View all {category.name} calculators →
                </Link>
                <ul className="mt-4 space-y-2">
                  {categoryCalculators.slice(0, 3).map((calc) => (
                    <li key={calc.id}>
                      <Link
                        href={`/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`}
                        className="text-[#64748b] hover:text-[#2563eb] transition-colors"
                      >
                        {calc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
            Popular Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {calculators.map((calculator) => (
              <Link
                key={calculator.id}
                href={`/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`}
                className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
              >
                <h3 className="font-semibold text-[#1e293b] mb-2">
                  {calculator.name}
                </h3>
                <p className="text-sm text-[#64748b] line-clamp-2">
                  {calculator.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Guides</h2>
          <p className="text-[#64748b] mb-6 max-w-2xl">
            Use our free guides together with the calculators for better planning: financial terms and tax calendar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EN_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block p-6 rounded-xl border-2 border-[#e2e8f0] bg-white hover:border-[#2563eb] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-[#1e293b] mb-2">{guide.title}</h3>
                <p className="text-sm text-[#64748b]">{guide.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/guides" className="text-[#2563eb] hover:underline font-medium">View all guides →</Link>
          </p>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Choose a calculator</h3>
              <p className="text-[#64748b] text-sm">
                Browse <Link href="/calculators/finance" className="text-[#2563eb] hover:underline">finance</Link>, <Link href="/calculators/health" className="text-[#2563eb] hover:underline">health</Link>, <Link href="/calculators/education" className="text-[#2563eb] hover:underline">education</Link>, <Link href="/calculators/math" className="text-[#2563eb] hover:underline">math</Link>, or <Link href="/calculators/date-time" className="text-[#2563eb] hover:underline">date & time</Link>.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Enter your values</h3>
              <p className="text-[#64748b] text-sm">Fill in the fields. Each calculator includes clear labels and optional help.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Get results</h3>
              <p className="text-[#64748b] text-sm">See accurate results instantly. No account or sign-up required.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#1e293b] mb-2">{faq.q}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 py-12 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Calculating Now</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Free, no sign-up. Use any calculator on any device.</p>
          <Link href="/calculators" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Browse all calculators
          </Link>
        </section>

        {/* SEO Content Section */}
        <article className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
            Free Online Calculators for Every Need
          </h2>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-[#64748b] mb-6">
              Calculator360Pro provides free, accurate, and easy-to-use online calculators for finance, health, education, math, and everyday calculations. Whether you&apos;re calculating mortgage payments, debt-to-income ratio, loan payoff with extra payments, daily water intake, protein needs, tracking your BMI, determining your GPA, or working with percentages, our comprehensive collection helps you make informed decisions quickly and accurately.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Why Choose Calculator360Pro?
            </h3>
            <p className="text-[#64748b] mb-4">
              Our calculators are designed with accuracy, ease of use, and comprehensive functionality in mind. Every calculator on Calculator360Pro is thoroughly tested to ensure precise results, and we provide detailed explanations, formulas, and guidance to help you understand not just the results, but how they're calculated.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Finance Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Make informed financial decisions with our comprehensive finance calculators. Calculate mortgage payments, debt-to-income ratio, loan payoff with extra payments, compound interest, taxes, and salary breakdowns. Our finance calculators help you understand the true cost of loans and how to optimize your financial planning.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Health Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Track and understand your health metrics with our health calculators. Calculate your Body Mass Index (BMI), daily water intake, protein needs, body fat percentage, and more. Our health calculators provide accurate measurements and helpful context to guide your wellness journey.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Education Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Excel in your academic journey with our education calculators. Calculate your Grade Point Average (GPA), track your academic performance, and plan your course load effectively. Our education calculators support both standard and weighted GPA calculations, helping students at all levels achieve their academic goals.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Math Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Solve complex mathematical problems with our math calculators. From basic percentage calculations to advanced scientific computations, our math calculators provide accurate results and step-by-step explanations. Perfect for students, professionals, and anyone who needs reliable mathematical tools.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Date & Time Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Calculate dates, ages, and time differences with ease. Our date and time calculators help you determine ages, calculate date differences, and work with various time-related calculations. Whether you're planning events, tracking milestones, or working with dates, our calculators make it simple.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              How to Use Our Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Using Calculator360Pro is simple and straightforward. Browse our calculator categories or use the search function to find the calculator you need. Enter your values in the input fields, and get instant, accurate results. Each calculator includes helpful guidance, formulas, and explanations to help you understand the calculations and make informed decisions.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Accurate and Reliable Results
            </h3>
            <p className="text-[#64748b] mb-4">
              All calculators on Calculator360Pro are built using industry-standard formulas and methodologies. We regularly update our calculators to ensure accuracy and incorporate the latest calculation methods. While our calculators provide accurate results based on the inputs you provide, always consult with professionals for important financial, health, or legal decisions.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Free Forever
            </h3>
            <p className="text-[#64748b] mb-4">
              Calculator360Pro is completely free to use. No registration required, no hidden fees, no subscriptions. Access all our calculators anytime, anywhere, on any device. We're committed to providing free, accessible tools that help people make better decisions in their daily lives.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

