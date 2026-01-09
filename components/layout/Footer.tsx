"use client";

import Link from "next/link";
import { CALCULATOR_CATEGORIES } from "@/lib/constants";

export function Footer() {

  return (
    <footer className="bg-[#1e293b] dark:bg-[#020617] text-[#f1f5f9] mt-16">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Calculator360Pro</h3>
            <p className="text-[#94a3b8] text-sm">
              Calculator360Pro provides free, accurate calculators for everyday needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators"
                  className="hover:text-white transition-colors"
                >
                  Calculators
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {Object.values(CALCULATOR_CATEGORIES).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/calculators/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 text-center text-sm text-[#94a3b8]">
          <p>© 2024 Calculator360Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

