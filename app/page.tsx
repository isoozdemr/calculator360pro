import { Metadata } from "next";
import Link from "next/link";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { CALCULATOR_CATEGORIES, SITE_URL, getCategoryKeyBySlug, getCategorySlugByKey } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Online Calculators 2026 | Mortgage, BMI, Tax",
  description:
    "Calculate mortgage, BMI, taxes & more with free online tools. Trusted by millions. Accurate results in seconds - try Calculator360Pro now!",
  alternates: {
    canonical: SITE_URL,
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

export default function HomePage() {
  const calculators = getAllCalculators();
  const categories = Object.values(CALCULATOR_CATEGORIES);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-6">
            Calculator360Pro
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto">
            Free, accurate online calculators for finance, health, education,
            math, and more. Calculate mortgage, BMI, GPA, percentage, and
            hundreds of other calculations.
          </p>
        </div>

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

        {/* SEO Content Section */}
        <article className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
            Free Online Calculators for Every Need
          </h2>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-[#64748b] mb-6">
              Calculator360Pro provides free, accurate, and easy-to-use online calculators for finance, health, education, math, and everyday calculations. Whether you're calculating mortgage payments, tracking your BMI, determining your GPA, or working with percentages, our comprehensive collection of calculators helps you make informed decisions quickly and accurately.
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
              Make informed financial decisions with our comprehensive finance calculators. Calculate mortgage payments, understand compound interest, plan loan repayments, estimate taxes, and analyze salary breakdowns. Our finance calculators help you understand the true cost of loans, the power of compound interest, and how to optimize your financial planning.
            </p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">
              Health Calculators
            </h3>
            <p className="text-[#64748b] mb-4">
              Track and understand your health metrics with our health calculators. Calculate your Body Mass Index (BMI), determine body fat percentage, and monitor your health indicators. Our health calculators provide accurate measurements and helpful context to guide your wellness journey.
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

