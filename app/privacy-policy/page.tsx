import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Calculator360Pro",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
    languages: {
      "en": `${SITE_URL}/privacy-policy`,
      "tr": `${SITE_URL}/tr/gizlilik-politikasi`,
      "x-default": `${SITE_URL}/privacy-policy`,
    },
  },
  openGraph: {
    title: "Privacy Policy - Calculator360Pro",
    description: "Privacy Policy for Calculator360Pro",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: "Calculator360Pro",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                1. Introduction
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website
                calculator360pro.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                2.1 Automatically Collected Information
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                When you visit our website, we automatically collect certain
                information about your device, including:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                2.2 Cookies and Tracking Technologies
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity
                on our website and store certain information. Cookies are files with
                a small amount of data which may include an anonymous unique
                identifier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Personalize your experience</li>
                <li>Display relevant advertisements</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We use third-party services that may collect information about you:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To analyze website traffic and
                  usage patterns
                </li>
                <li>
                  <strong>Google AdSense:</strong> To display advertisements
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                5. Your Rights (GDPR & CCPA)
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification</li>
                <li>Right to erasure</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to opt-out of sale of personal information (CCPA)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                6. Data Security
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to
                protect your personal information. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                7. Children's Privacy
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Our website is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                9. Contact Us
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact
                us at: contact@calculator360pro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

