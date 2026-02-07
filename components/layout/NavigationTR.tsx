"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getTRCategoriesWithCalculators } from "@/lib/tr-calculators-nav";

const TR_CATEGORIES = getTRCategoriesWithCalculators();

export function NavigationTR() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleCategoryMouseEnter = useCallback((categorySlug: string) => {
    clearHoverTimeout();
    setOpenCategory(categorySlug);
  }, [clearHoverTimeout]);

  const handleCategoryMouseLeave = useCallback(() => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenCategory(null);
      hoverTimeoutRef.current = null;
    }, 100);
  }, [clearHoverTimeout]);

  const handleDropdownMouseEnter = useCallback((categorySlug: string) => {
    clearHoverTimeout();
    setOpenCategory(categorySlug);
  }, [clearHoverTimeout]);

  const handleDropdownMouseLeave = useCallback(() => {
    clearHoverTimeout();
    setOpenCategory(null);
  }, [clearHoverTimeout]);

  const toggleMobileCategory = useCallback((categorySlug: string) => {
    setOpenMobileCategory((prev) => (prev === categorySlug ? null : categorySlug));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileCategory(null);
  }, []);

  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, [clearHoverTimeout]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      const originalTop = document.body.style.top;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.body.style.top = originalTop;
        window.scrollTo(0, scrollY);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <nav className="bg-white border-b-2 border-[#e2e8f0] sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/tr" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Calculator360Pro"
              width={360}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/tr"
              className="text-sm text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors"
            >
              Ana Sayfa
            </Link>

            {/* Category Dropdowns */}
            {TR_CATEGORIES.map((category) => {
              const isOpen = openCategory === category.slug;
              const hasCalculators = category.calculators.length > 0;

              return (
                <div
                  key={category.slug}
                  className="relative"
                  onMouseEnter={() => handleCategoryMouseEnter(category.slug)}
                  onMouseLeave={handleCategoryMouseLeave}
                >
                  <button
                    className="text-sm text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors flex items-center whitespace-nowrap"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {category.name}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && hasCalculators && (
                    <div
                      className={`absolute top-full left-0 mt-2 bg-white border-2 border-[#e2e8f0] rounded-lg shadow-xl overflow-hidden ${
                        category.calculators.length >= 10
                          ? "min-w-[600px] w-[90%] max-w-[1000px]"
                          : "min-w-[280px]"
                      }`}
                      onMouseEnter={() => handleDropdownMouseEnter(category.slug)}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className={`p-4 ${category.calculators.length >= 10 ? "" : "max-h-[400px] overflow-y-auto"}`}>
                        <Link
                          href={`/tr/hesap-makineleri/${category.slug}`}
                          className="block font-bold text-sm text-[#1e293b] hover:text-[#2563eb] transition-colors mb-3 pb-2 border-b border-[#e2e8f0]"
                        >
                          Tüm {category.name} Hesap Makineleri
                        </Link>
                        {category.calculators.length >= 10 ? (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {category.calculators.map((calc) => (
                              <Link
                                key={calc.slug}
                                href={`/tr/hesap-makineleri/${category.slug}/${calc.slug}`}
                                className="block text-sm text-[#64748b] hover:text-[#2563eb] transition-colors py-1.5 px-2 rounded hover:bg-[#f8fafc] leading-relaxed"
                              >
                                {calc.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {category.calculators.map((calc) => (
                              <li key={calc.slug}>
                                <Link
                                  href={`/tr/hesap-makineleri/${category.slug}/${calc.slug}`}
                                  className="block text-sm text-[#64748b] hover:text-[#2563eb] transition-colors py-1.5 px-2 rounded hover:bg-[#f8fafc]"
                                >
                                  {calc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/tr/blog"
              className="text-sm text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors"
            >
              Blog
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale="tr" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher currentLocale="tr" />
            <button
              className="text-[#1e293b] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto" style={{ height: "calc(100vh - 4rem)" }}>
            <div className="py-4 space-y-1">
              <Link
                href="/tr"
                className="block px-4 py-3 text-sm text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium"
                onClick={closeMobileMenu}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/tr/hesap-makineleri"
                className="block px-4 py-3 text-sm text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium"
                onClick={closeMobileMenu}
              >
                Tüm Hesap Makineleri
              </Link>

              {TR_CATEGORIES.map((category) => {
                const isCategoryOpen = openMobileCategory === category.slug;

                return (
                  <div key={category.slug} className="border-b border-[#e2e8f0]">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium"
                      onClick={() => toggleMobileCategory(category.slug)}
                    >
                      <span>{category.name} ({category.calculators.length})</span>
                      <svg className={`w-5 h-5 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isCategoryOpen && (
                      <div className="px-4 pb-3 space-y-1">
                        <Link
                          href={`/tr/hesap-makineleri/${category.slug}`}
                          className="block py-2 text-sm font-semibold text-[#2563eb] hover:underline"
                          onClick={closeMobileMenu}
                        >
                          Tüm {category.name} hesap makineleri →
                        </Link>
                        {category.calculators.map((calc) => (
                          <Link
                            key={calc.slug}
                            href={`/tr/hesap-makineleri/${category.slug}/${calc.slug}`}
                            className="block py-2 px-4 text-sm text-[#64748b] hover:text-[#2563eb] hover:bg-[#f8fafc] rounded"
                            onClick={closeMobileMenu}
                          >
                            {calc.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/tr/blog"
                className="block px-4 py-3 text-sm text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
