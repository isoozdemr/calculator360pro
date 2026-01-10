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
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-8">
            About Calculator360Pro
          </h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Mission
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro is dedicated to providing free, accurate, and
                easy-to-use online calculators for everyone. Whether you need to
                calculate mortgage payments, determine your BMI, compute your GPA, or
                perform any other calculation, we've got you covered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                What We Offer
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Our platform features a wide range of calculators across multiple
                categories:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
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
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Commitment
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We are committed to:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Providing accurate and reliable calculations</li>
                <li>Maintaining a fast and user-friendly interface</li>
                <li>Ensuring privacy and data security</li>
                <li>Continuously improving and adding new calculators</li>
                <li>Offering our services completely free of charge</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Why Choose Calculator360Pro?
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                In a world filled with countless online tools, Calculator360Pro stands out by offering:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Accuracy First:</strong> All our calculators use industry-standard formulas and are regularly tested for accuracy</li>
                <li><strong>No Registration Required:</strong> Access all calculators instantly without creating an account</li>
                <li><strong>Mobile-Friendly:</strong> Our calculators work seamlessly on desktop, tablet, and mobile devices</li>
                <li><strong>Comprehensive Guides:</strong> Each calculator includes detailed explanations, formulas, and usage examples</li>
                <li><strong>Privacy-Focused:</strong> We respect your privacy and don't collect unnecessary personal information</li>
                <li><strong>Regular Updates:</strong> We continuously add new calculators and improve existing ones based on user feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Values
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                At Calculator360Pro, we believe in:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Accessibility:</strong> Everyone should have access to free, high-quality calculation tools</li>
                <li><strong>Transparency:</strong> We clearly explain how our calculators work and what formulas they use</li>
                <li><strong>User Experience:</strong> We prioritize ease of use and intuitive design</li>
                <li><strong>Continuous Improvement:</strong> We listen to user feedback and constantly enhance our platform</li>
                <li><strong>Educational Value:</strong> Beyond calculations, we aim to help users understand the concepts behind the numbers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Contact Us
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We value your feedback and are here to help. If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@calculator360pro.com"
                  className="text-[#2563eb] hover:underline"
                >
                  contact@calculator360pro.com
                </a>
              </p>
              <p className="text-[#64748b] leading-relaxed text-sm mt-4">
                We typically respond to inquiries within 24-48 hours. For technical issues or feature requests, please include as much detail as possible to help us assist you better.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

