import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us - Mission & Team | Calculator360Pro",
  description: "Meet the team behind Calculator360Pro. Free, accurate calculators built by experts. Discover our mission - try our tools today!",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      "en": `${SITE_URL}/about`,
      "tr": `${SITE_URL}/tr/hakkimizda`,
      "x-default": `${SITE_URL}/about`,
    },
  },
  openGraph: {
    title: "About Us - Mission & Team | Calculator360Pro",
    description: "Meet the team. Free calculators by experts. Discover our mission - try our tools today!",
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
    description: "Learn about Calculator360Pro - Free online calculators built by experts.",
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

// Team member data for E-E-A-T
const teamMembers = [
  {
    name: "Calculator360Pro Editorial Team",
    role: "Content & Research",
    credentials: "Finance, Health & Education Specialists",
    description: "Our editorial team consists of specialists in finance, health, and education who ensure all calculator content is accurate, up-to-date, and valuable for our users.",
    expertise: ["Financial Calculations", "Health Metrics", "Educational Standards", "Data Accuracy"],
  },
  {
    name: "Development Team",
    role: "Engineering",
    credentials: "Full-Stack Development Experts",
    description: "Our development team builds fast, reliable, and user-friendly calculators using modern web technologies to ensure the best experience on any device.",
    expertise: ["Web Development", "UI/UX Design", "Performance Optimization", "Accessibility"],
  },
];

// Trust indicators
const trustIndicators = [
  {
    title: "Accurate Calculations",
    description: "All formulas verified against industry standards",
    icon: "✓",
  },
  {
    title: "Privacy Focused",
    description: "No personal data collection or storage",
    icon: "🔒",
  },
  {
    title: "Free Forever",
    description: "All calculators free with no hidden fees",
    icon: "💰",
  },
  {
    title: "Regular Updates",
    description: "Continuously improved based on feedback",
    icon: "🔄",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">
            About Calculator360Pro
          </h1>
          <p className="text-xl text-[#64748b] leading-relaxed">
            We're on a mission to make accurate calculations accessible to everyone, 
            completely free. Since 2025, we've helped thousands of users make better 
            financial, health, and educational decisions.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.title}
              className="bg-white rounded-lg border-2 border-[#e2e8f0] p-4 text-center"
            >
              <div className="text-2xl mb-2">{indicator.icon}</div>
              <h3 className="font-semibold text-[#1e293b] text-sm mb-1">
                {indicator.title}
              </h3>
              <p className="text-xs text-[#64748b]">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Story
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro was founded in 2025 with a simple goal: make accurate, 
                reliable calculations accessible to everyone. We noticed that many online 
                calculators were cluttered with ads, required sign-ups, or simply provided 
                inaccurate results. We knew we could do better.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Today, Calculator360Pro offers over 25 free calculators covering finance, 
                health, education, math, and more. Every calculator is built with accuracy 
                as the top priority, using industry-standard formulas that are regularly 
                reviewed and updated by our expert team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Mission
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                <strong>To empower everyone with free, accurate calculation tools</strong> that 
                help them make informed decisions about their finances, health, education, and 
                everyday life.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We believe that understanding numbers shouldn't require expensive software or 
                complex spreadsheets. Whether you're calculating mortgage payments, tracking 
                your health metrics, or planning your education, we want to help you get 
                accurate answers quickly and easily.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Finance Calculators</h3>
                  <p className="text-sm text-[#64748b]">
                    Mortgage, loan, interest, tax, salary, budget, and investment calculators
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Health Calculators</h3>
                  <p className="text-sm text-[#64748b]">
                    BMI, body fat, calorie, pregnancy, and other health-related calculators
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Education Calculators</h3>
                  <p className="text-sm text-[#64748b]">
                    GPA, grade, percentage, and academic calculators
                  </p>
                </div>
                <div className="p-4 bg-[#f8fafc] rounded-lg">
                  <h3 className="font-semibold text-[#1e293b] mb-2">Math & Date Calculators</h3>
                  <p className="text-sm text-[#64748b]">
                    Scientific, percentage, age, date, and time calculators
                  </p>
                </div>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                <Link href="/calculators" className="text-[#2563eb] hover:underline">
                  Browse all our calculators →
                </Link>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Our Commitment to Accuracy
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Every calculator on Calculator360Pro is built using industry-standard 
                formulas and methodologies. Our process includes:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>Research:</strong> We study official sources, academic papers, and industry standards</li>
                <li><strong>Development:</strong> Calculators are built with precision and attention to detail</li>
                <li><strong>Testing:</strong> Multiple test cases verify accuracy before launch</li>
                <li><strong>Review:</strong> Regular reviews ensure formulas stay current with regulations</li>
                <li><strong>Updates:</strong> We incorporate user feedback and update as needed</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed text-sm bg-[#eff6ff] p-4 rounded-lg">
                <strong>Important:</strong> While we strive for accuracy, our calculators are for 
                informational purposes only. For important financial, health, or legal decisions, 
                please consult with qualified professionals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                Why Choose Calculator360Pro?
              </h2>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li><strong>100% Free:</strong> All calculators are completely free to use</li>
                <li><strong>No Registration:</strong> Access any calculator instantly, no sign-up required</li>
                <li><strong>Mobile-Friendly:</strong> Works perfectly on phones, tablets, and computers</li>
                <li><strong>Privacy-First:</strong> We don't track, store, or sell your data</li>
                <li><strong>Detailed Explanations:</strong> Each calculator includes formulas and guides</li>
                <li><strong>Regular Updates:</strong> Continuously improved based on user feedback</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
            Our Team
          </h2>
          <div className="space-y-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-[#f8fafc] rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1e293b] text-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#2563eb] text-sm font-medium mb-2">
                      {member.role} • {member.credentials}
                    </p>
                    <p className="text-[#64748b] text-sm mb-3">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white text-xs text-[#64748b] rounded-full border border-[#e2e8f0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
            Contact Us
          </h2>
          <p className="text-[#64748b] leading-relaxed mb-4">
            We value your feedback and are here to help. Whether you have questions, 
            suggestions, or need assistance, please don't hesitate to reach out.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">General Inquiries</h3>
              <a
                href="mailto:contact@calculator360pro.com"
                className="text-[#2563eb] hover:underline"
              >
                contact@calculator360pro.com
              </a>
            </div>
            <div className="p-4 bg-[#f8fafc] rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">Response Time</h3>
              <p className="text-[#64748b] text-sm">
                We typically respond within 24-48 hours
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              Twitter/X
            </a>
            <a
              href="https://www.facebook.com/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/calculator360pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
