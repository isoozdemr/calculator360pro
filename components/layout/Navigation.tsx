"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CALCULATOR_CATEGORIES } from "@/lib/constants";
import { getAllCalculators } from "@/lib/calculators/definitions";

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const calculators = getAllCalculators();

  const categories = Object.values(CALCULATOR_CATEGORIES);

  const getCategoryCalculators = (categorySlug: string) => {
    return calculators.filter((calc) => calc.category === categorySlug);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setOpenDropdown("calculators");
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Small delay to allow moving to dropdown
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setOpenDropdown("calculators");
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white dark:bg-[#1e293b] border-b-2 border-[#e2e8f0] dark:border-[#334155] sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Calculator360Pro"
              width={360}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium transition-colors"
            >
              Home
            </Link>

            {/* Calculators Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium transition-colors flex items-center"
              >
                Calculators
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    openDropdown === "calculators" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "calculators" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-[calc(100vw-2rem)] bg-white dark:bg-[#1e293b] border-2 border-[#e2e8f0] dark:border-[#334155] rounded-lg shadow-xl p-6 overflow-x-hidden"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-full">
                    {categories.map((category) => {
                      const categoryCalculators = getCategoryCalculators(category.slug);
                      return (
                        <div key={category.slug} className="space-y-3 min-w-0">
                          <Link
                            href={`/calculators/${category.slug}`}
                            className="block font-bold text-base text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors mb-3 pb-2 border-b border-[#e2e8f0] dark:border-[#334155]"
                          >
                            {category.name}
                          </Link>
                          <ul className="space-y-2">
                            {categoryCalculators.slice(0, 6).map((calc) => (
                              <li key={calc.id}>
                                <Link
                                  href={`/calculators/${calc.category}/${calc.slug}`}
                                  className="block text-sm text-[#64748b] dark:text-[#94a3b8] hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors py-1 leading-relaxed"
                                >
                                  {calc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {categoryCalculators.length > 6 && (
                            <Link
                              href={`/calculators/${category.slug}`}
                              className="block text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] hover:underline mt-3"
                            >
                              +{categoryCalculators.length - 6} more →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e2e8f0] dark:border-[#334155]">
                    <Link
                      href="/calculators"
                      className="block text-center text-sm font-semibold text-[#2563eb] dark:text-[#60a5fa] hover:underline"
                    >
                      View All Calculators →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1e293b] dark:text-[#f1f5f9]"
            onClick={() => setOpenDropdown(openDropdown === "mobile" ? null : "mobile")}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {openDropdown === "mobile" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {openDropdown === "mobile" && (
          <div className="md:hidden py-4 border-t border-[#e2e8f0] dark:border-[#334155]">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium"
                onClick={() => setOpenDropdown(null)}
              >
                Home
              </Link>
              <Link
                href="/calculators"
                className="block text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium"
                onClick={() => setOpenDropdown(null)}
              >
                All Calculators
              </Link>
              {categories.map((category) => (
                <div key={category.slug} className="pl-4">
                  <Link
                    href={`/calculators/${category.slug}`}
                    className="block text-[#64748b] dark:text-[#94a3b8] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium mb-2"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {category.name}
                  </Link>
                  <ul className="pl-4 space-y-1">
                    {getCategoryCalculators(category.slug).slice(0, 5).map((calc) => (
                      <li key={calc.id}>
                        <Link
                          href={`/calculators/${calc.category}/${calc.slug}`}
                          className="block text-sm text-[#64748b] dark:text-[#94a3b8] hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {calc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/blog"
                className="block text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium"
                onClick={() => setOpenDropdown(null)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#2563eb] dark:hover:text-[#60a5fa] font-medium"
                onClick={() => setOpenDropdown(null)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
