import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo/schema";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  // latin-ext: TR karakterleri (ş, ğ, ı, ö, ü, ç) latin alt kümesinde yok;
  // eksik olunca tarayıcı sistem fontuna düşüyor ve düzen kayması (CLS) oluşuyordu.
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  // Yalnızca formül/sonuç metinlerinde kullanılıyor; ağırlık sayısı azaltıldı.
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Calculator360Pro - Free Online Calculators",
  description:
    "Calculate mortgage, BMI, taxes & more with free online tools. Trusted results in seconds. Try Calculator360Pro now!",
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
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calculator360pro.com",
    siteName: "Calculator360Pro",
    title: "Calculator360Pro - Free Online Calculators 2026",
    description:
      "Calculate mortgage, BMI, taxes & more in seconds. Free, accurate tools. Try now!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Calculator360Pro - Free Online Calculators 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator360Pro - Free Online Calculators 2026",
    description:
      "Calculate mortgage, BMI, taxes & more in seconds. Free, accurate tools. Try now!",
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
        {/* Preconnect to Google services for faster script loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* AdSense loads lazily well after paint, so a preconnect here just
            competes with critical requests for the connection pool. */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* RSS Feed Auto-discovery */}
        <link rel="alternate" type="application/rss+xml" title="Calculator360Pro Blog RSS Feed" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/feed.xml`} />
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
        <SpeedInsights />
      </body>
    </html>
  );
}
