import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Calculator360Pro",
  description: "Get in touch with Calculator360Pro. Email us for questions, feedback, or support. We typically respond within 24-48 hours.",
  alternates: { canonical: `${SITE_URL}/contact`, languages: { en: `${SITE_URL}/contact`, tr: `${SITE_URL}/tr/iletisim` } },
  openGraph: { title: "Contact Us", url: `${SITE_URL}/contact`, locale: "en_US", siteName: "Calculator360Pro" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Contact Us</h1>
        <p className="text-[#64748b] mb-6">
          Have questions, feedback, or need help? We typically respond within 24-48 hours.
        </p>
        <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2">Email</h2>
          <a href="mailto:contact@calculator360pro.com" className="text-[#2563eb] hover:underline">
            contact@calculator360pro.com
          </a>
        </div>
        <p className="text-[#64748b] text-sm">
          <Link href="/about" className="text-[#2563eb] hover:underline">About us</Link> |{" "}
          <Link href="/privacy-policy" className="text-[#2563eb] hover:underline">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-service" className="text-[#2563eb] hover:underline">Terms of Service</Link>
        </p>
      </div>
    </div>
  );
}
