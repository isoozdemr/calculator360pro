"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getAlternateUrl, Locale } from "@/lib/seo/url-mappings";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Hedef URL'yi belirle - merkezi mapping sistemini kullan
  const targetUrl = getAlternateUrl(pathname, currentLocale);
  const targetLocale: Locale = currentLocale === "en" ? "tr" : "en";

  return (
    <Link
      href={targetUrl}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e2e8f0] hover:border-[#2563eb] hover:bg-[#f8fafc] transition-colors text-sm font-medium text-[#1e293b]"
      title={currentLocale === "en" ? "Türkçe'ye geç" : "Switch to English"}
    >
      {targetLocale === "tr" ? (
        <>
          <span className="text-base">🇹🇷</span>
          <span className="hidden sm:inline">TR</span>
        </>
      ) : (
        <>
          <span className="text-base">🇬🇧</span>
          <span className="hidden sm:inline">EN</span>
        </>
      )}
    </Link>
  );
}
