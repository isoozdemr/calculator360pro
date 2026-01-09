import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Calculator360Pro",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service - Calculator360Pro",
    description: "Terms of Service for Calculator360Pro",
    url: `${SITE_URL}/terms-of-service`,
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#64748b] mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                By accessing and using Calculator360Pro, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                2. Use License
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Permission is granted to temporarily use Calculator360Pro for
                personal, non-commercial use only. This is the grant of a license,
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-[#64748b] mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                3. Disclaimer
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                The calculators on Calculator360Pro are provided "as is". We make no
                warranties, expressed or implied, and hereby disclaim and negate all
                other warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Further, Calculator360Pro does not warrant or make any representations
                concerning the accuracy, likely results, or reliability of the use of
                the calculators on its website or otherwise relating to such materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                4. Limitations
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                In no event shall Calculator360Pro or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data or
                profit, or due to business interruption) arising out of the use or
                inability to use the calculators on Calculator360Pro's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                The calculators appearing on Calculator360Pro could include technical,
                typographical, or photographic errors. Calculator360Pro does not warrant
                that any of the calculators on its website are accurate, complete, or
                current. Calculator360Pro may make changes to the calculators contained
                on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                6. Links
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such linked
                site. The inclusion of any link does not imply endorsement by
                Calculator360Pro of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                7. Modifications
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Calculator360Pro may revise these terms of service for its website at
                any time without notice. By using this website you are agreeing to be
                bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                8. Contact Information
              </h2>
              <p className="text-[#64748b] leading-relaxed">
                If you have any questions about these Terms of Service, please contact
                us at: contact@calculator360pro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

