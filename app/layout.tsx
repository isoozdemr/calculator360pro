import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo/schema";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
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
        <GoogleAnalytics />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
