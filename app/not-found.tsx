import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-[#2563eb] dark:text-[#60a5fa] mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#64748b] dark:text-[#94a3b8] mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#2563eb] dark:bg-[#60a5fa] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] dark:hover:bg-[#3b82f6] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/calculators"
            className="px-6 py-3 bg-white dark:bg-[#1e293b] text-[#2563eb] dark:text-[#60a5fa] border-2 border-[#2563eb] dark:border-[#60a5fa] rounded-lg font-semibold hover:bg-[#eff6ff] dark:hover:bg-[#1e3a8a] transition-colors"
          >
            Browse Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}

