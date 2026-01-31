"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getAlternateUrl, Locale } from "@/lib/seo/url-mappings";

interface LanguageBannerProps {
  targetLocale: Locale;
}

const STORAGE_KEY = "language_banner_dismissed";

export function LanguageBanner({ targetLocale }: LanguageBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      return;
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    const isTurkish = browserLang.startsWith("tr");
    const isOnEnglishPage = !pathname.startsWith("/tr");

    // Show banner only if Turkish browser on English page
    if (isTurkish && isOnEnglishPage && targetLocale === "tr") {
      // Small delay to avoid flash
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname, targetLocale]);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  // Merkezi mapping sistemini kullan
  const targetUrl = getAlternateUrl(pathname, "en");

  if (!showBanner) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2.5 px-4 relative z-50">
      <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">🇹🇷</span>
          <p className="text-sm font-medium">
            Bu sayfanın Türkçe versiyonu mevcut!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={targetUrl}
            className="bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            Türkçe&apos;ye Git
          </Link>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Kapat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
