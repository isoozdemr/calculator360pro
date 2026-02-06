"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";
import { NavigationTR } from "./NavigationTR";
import { Footer } from "./Footer";
import { FooterTR } from "./FooterTR";
import { LanguageBanner } from "./LanguageBanner";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isTurkish = pathname.startsWith("/tr");
  const isEmbed = pathname.startsWith("/embed");

  if (isEmbed) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="no-print">
        {/* Language Banner - only show on English pages for Turkish users */}
        {!isTurkish && <LanguageBanner targetLocale="tr" />}
        {/* Navigation */}
        {isTurkish ? <NavigationTR /> : <Navigation />}
      </div>
      {/* Main Content */}
      {children}
      <div className="no-print">
        {/* Footer */}
        {isTurkish ? <FooterTR /> : <Footer />}
      </div>
    </>
  );
}
