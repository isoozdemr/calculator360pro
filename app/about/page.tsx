import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Calculator360Pro - Free online calculators for everyone",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us - Calculator360Pro",
    description: "Learn about Calculator360Pro - Free online calculators for everyone",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About Us - Calculator360Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Calculator360Pro",
    description: "Learn about Calculator360Pro - Free online calculators for everyone",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-8">
            About Calculator360Pro
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
                Our Mission
              </h2>
              <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-4">
                Calculator360Pro is dedicated to providing free, accurate, and
                easy-to-use online calculators for everyone. Whether you need to
                calculate mortgage payments, determine your BMI, compute your GPA, or
                perform any other calculation, we've got you covered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
                What We Offer
              </h2>
              <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-4">
                Our platform features a wide range of calculators across multiple
                categories:
              </p>
              <ul className="list-disc list-inside text-[#64748b] dark:text-[#94a3b8] mb-4 space-y-2">
                <li>
                  <strong>Finance Calculators:</strong> Mortgage, loan, interest, tax,
                  and salary calculators
                </li>
                <li>
                  <strong>Health Calculators:</strong> BMI, body fat, calorie, and
                  other health-related calculators
                </li>
                <li>
                  <strong>Education Calculators:</strong> GPA, grade, percentage, and
                  academic calculators
                </li>
                <li>
                  <strong>Math Calculators:</strong> Scientific, percentage, fraction,
                  and mathematical calculators
                </li>
                <li>
                  <strong>Date & Time Calculators:</strong> Age, date difference, and
                  time-related calculators
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
                Our Commitment
              </h2>
              <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-4">
                We are committed to:
              </p>
              <ul className="list-disc list-inside text-[#64748b] dark:text-[#94a3b8] mb-4 space-y-2">
                <li>Providing accurate and reliable calculations</li>
                <li>Maintaining a fast and user-friendly interface</li>
                <li>Ensuring privacy and data security</li>
                <li>Continuously improving and adding new calculators</li>
                <li>Offering our services completely free of charge</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
                Contact Us
              </h2>
              <p className="text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                If you have any questions, suggestions, or feedback, please don't
                hesitate to contact us at: contact@calculator360pro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

