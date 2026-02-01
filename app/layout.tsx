import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo/schema";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Calculator360Pro - Free Online Calculators",
    template: "%s | Calculator360Pro",
  },
  description:
    "Free, accurate online calculators for finance, health, education, math, and more. Calculate mortgage, BMI, GPA, percentage, and hundreds of other calculations.",
  keywords: [
    "calculator",
    "online calculator",
    "free calculator",
    "mortgage calculator",
    "BMI calculator",
    "GPA calculator",
    "percentage calculator",
  ],
  authors: [{ name: "Calculator360Pro" }],
  creator: "Calculator360Pro",
  publisher: "Calculator360Pro",
  metadataBase: new URL("https://calculator360pro.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://calculator360pro.com",
      "tr": "https://calculator360pro.com/tr",
      "x-default": "https://calculator360pro.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calculator360pro.com",
    siteName: "Calculator360Pro",
    title: "Calculator360Pro - Free Online Calculators",
    description:
      "Free, accurate online calculators for finance, health, education, math, and more.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Calculator360Pro - Free Online Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator360Pro - Free Online Calculators",
    description:
      "Free, accurate online calculators for finance, health, education, math, and more.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/og-image.png`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preconnect to Google services for faster script loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />
        {/* RSS Feed Auto-discovery */}
        <link rel="alternate" type="application/rss+xml" title="Calculator360Pro Blog RSS Feed" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/feed.xml`} />
        {/* Critical Resource Preload */}
        <link rel="preload" href="/og-image.png" as="image" fetchPriority="high" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" as="style" />
        <meta
          name="google-adsense-account"
          content={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-2471021299627229"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ConsentBanner />
        <GoogleAnalytics />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-2471021299627229"}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
          data-npa="1"
        />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
