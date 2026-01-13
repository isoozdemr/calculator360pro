"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CALCULATOR_CATEGORIES, getCategoryKeyBySlug, getCategorySlugByKey } from "@/lib/constants";
import { getAllCalculators } from "@/lib/calculators/definitions";

export function Navigation() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const calculators = getAllCalculators();
  const categories = Object.values(CALCULATOR_CATEGORIES);

  // Memoize category calculators for performance
  const categoryCalculatorsMap = useMemo(() => {
    const map: Record<string, typeof calculators> = {};
    categories.forEach((category) => {
      const categoryKey = getCategoryKeyBySlug(category.slug);
      if (categoryKey) {
        map[category.slug] = calculators.filter((calc) => calc.category === categoryKey);
      }
    });
    return map;
  }, [calculators, categories]);

  const getCategoryCalculators = useCallback((categorySlug: string) => {
    return categoryCalculatorsMap[categorySlug] || [];
  }, [categoryCalculatorsMap]);

  // Clear hover timeout
  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  // Desktop hover handlers
  const handleCategoryMouseEnter = useCallback((categorySlug: string) => {
    // Clear any existing timeout when switching categories
    clearHoverTimeout();
    // Immediately open the new category
    setOpenCategory(categorySlug);
  }, [clearHoverTimeout]);

  const handleCategoryMouseLeave = useCallback(() => {
    // Clear existing timeout
    clearHoverTimeout();
    // Set timeout to close after a short delay
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenCategory(null);
      hoverTimeoutRef.current = null;
    }, 100);
  }, [clearHoverTimeout]);

  const handleDropdownMouseEnter = useCallback((categorySlug: string) => {
    // Clear timeout when entering dropdown
    clearHoverTimeout();
    setOpenCategory(categorySlug);
  }, [clearHoverTimeout]);

  const handleDropdownMouseLeave = useCallback(() => {
    // Clear timeout and close immediately
    clearHoverTimeout();
    setOpenCategory(null);
  }, [clearHoverTimeout]);

  // Mobile accordion handlers
  const toggleMobileCategory = useCallback((categorySlug: string) => {
    setOpenMobileCategory((prev) => (prev === categorySlug ? null : categorySlug));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileCategory(null);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, [clearHoverTimeout]);

  // Keyboard navigation for desktop dropdowns
  const handleCategoryKeyDown = useCallback((e: React.KeyboardEvent, categorySlug: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenCategory(openCategory === categorySlug ? null : categorySlug);
    } else if (e.key === "Escape") {
      setOpenCategory(null);
    }
  }, [openCategory]);

  // Keyboard navigation for mobile accordion
  const handleMobileCategoryKeyDown = useCallback((e: React.KeyboardEvent, categorySlug: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMobileCategory(categorySlug);
    }
  }, [toggleMobileCategory]);

  // Close mobile menu on Escape key and lock body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock body scroll - prevent layout shift
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      const originalTop = document.body.style.top;
      
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      
      // Add escape key listener
      document.addEventListener("keydown", handleEscape);
      
      return () => {
        // Restore body scroll
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.body.style.top = originalTop;
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <nav className="bg-white border-b-2 border-[#e2e8f0] sticky top-0 z-50">
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
              className="text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors"
            >
              Home
            </Link>

            {/* Category Dropdowns */}
            {categories.map((category) => {
              const categoryCalculators = getCategoryCalculators(category.slug);
              const isOpen = openCategory === category.slug;
              const isFinance = category.slug === "finance";
              const showAllCalculators = isFinance;
              const displayedCalculators = showAllCalculators 
                ? categoryCalculators 
                : categoryCalculators.slice(0, 10);
              
              return (
                <div
                  key={category.slug}
                  className="relative"
                  onMouseEnter={() => handleCategoryMouseEnter(category.slug)}
                  onMouseLeave={() => handleCategoryMouseLeave(category.slug)}
                >
                  <button
                    className="text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors flex items-center"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`category-menu-${category.slug}`}
                    onKeyDown={(e) => handleCategoryKeyDown(e, category.slug)}
                  >
                    {category.name}
                    <svg
                      className={`ml-1 w-4 h-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && categoryCalculators.length > 0 && (
                    <div
                      id={`category-menu-${category.slug}`}
                      className={`absolute top-full left-0 mt-2 bg-white border-2 border-[#e2e8f0] rounded-lg shadow-xl overflow-hidden ${
                        isFinance 
                          ? "min-w-[600px] w-[90%] max-w-[1000px]" 
                          : "min-w-[350px] w-[80%] max-w-[920px]"
                      }`}
                      onMouseEnter={() => handleDropdownMouseEnter(category.slug)}
                      onMouseLeave={handleDropdownMouseLeave}
                      role="menu"
                    >
                      <div className={`overflow-y-auto p-4 ${isFinance ? "max-h-[500px]" : "max-h-[400px]"}`}>
                        <Link
                          href={`/calculators/${category.slug}`}
                          className="block font-bold text-base text-[#1e293b] hover:text-[#2563eb] transition-colors mb-3 pb-2 border-b border-[#e2e8f0]"
                          role="menuitem"
                        >
                          {category.name}
                        </Link>
                        {isFinance ? (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {displayedCalculators.map((calc) => (
                              <Link
                                key={calc.id}
                                href={`/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`}
                                className="block text-sm text-[#64748b] hover:text-[#2563eb] transition-colors py-1.5 leading-relaxed rounded px-2 hover:bg-[#f8fafc]"
                                role="menuitem"
                              >
                                {calc.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2" role="list">
                            {displayedCalculators.map((calc) => (
                              <li key={calc.id} role="none">
                                <Link
                                  href={`/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`}
                                  className="block text-sm text-[#64748b] hover:text-[#2563eb] transition-colors py-1.5 leading-relaxed rounded px-2 hover:bg-[#f8fafc]"
                                  role="menuitem"
                                >
                                  {calc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {!showAllCalculators && categoryCalculators.length > 10 && (
                          <Link
                            href={`/calculators/${category.slug}`}
                            className="block text-xs font-semibold text-[#2563eb] hover:underline mt-4 pt-3 border-t border-[#e2e8f0]"
                            role="menuitem"
                          >
                            View all {categoryCalculators.length} calculators →
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/blog"
              className="text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[#1e293b] hover:text-[#2563eb] font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1e293b] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
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

        {/* Mobile Menu with Accordion - Fixed and Scroll Locked */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
            style={{ 
              height: 'calc(100vh - 4rem)',
              maxHeight: 'calc(100vh - 4rem)',
              width: '100%',
              left: 0,
              right: 0
            }}
          >
            <div className="py-4 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/calculators"
                className="block px-4 py-3 text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                All Calculators
              </Link>
              
              {/* Category Accordions */}
              {categories.map((category) => {
                const categoryCalculators = getCategoryCalculators(category.slug);
                const isCategoryOpen = openMobileCategory === category.slug;
                const hasCalculators = categoryCalculators.length > 0;

                return (
                  <div key={category.slug} className="border-b border-[#e2e8f0] last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => hasCalculators && toggleMobileCategory(category.slug)}
                      onKeyDown={(e) => hasCalculators && handleMobileCategoryKeyDown(e, category.slug)}
                      aria-expanded={isCategoryOpen}
                      aria-controls={`mobile-category-${category.slug}`}
                      disabled={!hasCalculators}
                    >
                      <span className="flex items-center">
                        {category.name}
                        {hasCalculators && (
                          <span className="ml-2 text-xs text-[#64748b] font-normal">
                            ({categoryCalculators.length})
                          </span>
                        )}
                      </span>
                      {hasCalculators && (
                        <svg
                          className={`w-5 h-5 ${
                            isCategoryOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                    {hasCalculators && (
                      <div
                        id={`mobile-category-${category.slug}`}
                        className={`overflow-hidden ${
                          isCategoryOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                        aria-hidden={!isCategoryOpen}
                      >
                        <div className="px-4 pb-3 space-y-1">
                          <Link
                            href={`/calculators/${category.slug}`}
                            className="block py-2 text-sm font-semibold text-[#2563eb] hover:underline"
                            onClick={closeMobileMenu}
                          >
                            View all {category.name} calculators →
                          </Link>
                          {categoryCalculators.map((calc) => (
                            <Link
                              key={calc.id}
                              href={`/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`}
                              className="block py-2 px-4 text-sm text-[#64748b] hover:text-[#2563eb] hover:bg-[#f8fafc] rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {calc.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/blog"
                className="block px-4 py-3 text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-[#1e293b] hover:text-[#2563eb] hover:bg-[#f8fafc] font-medium rounded-lg transition-colors"
                onClick={closeMobileMenu}
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
