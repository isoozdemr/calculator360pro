import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Calculator360Pro - Ücretsiz Online Hesap Makineleri",
    template: "%s | Calculator360Pro",
  },
  description:
    "Finans, sağlık, eğitim, matematik ve daha fazlası için ücretsiz, doğru online hesap makineleri. Vergi, maaş, kredi, BMI ve yüzlerce farklı hesaplama.",
  keywords: [
    "hesap makinesi",
    "online hesap makinesi",
    "ücretsiz hesap makinesi",
    "vergi hesaplama",
    "maaş hesaplama",
    "kredi hesaplama",
    "BMI hesaplama",
    "not ortalaması hesaplama",
  ],
  authors: [{ name: "Calculator360Pro" }],
  creator: "Calculator360Pro",
  publisher: "Calculator360Pro",
  alternates: {
    canonical: "/tr",
    languages: {
      "en": "https://calculator360pro.com",
      "tr": "https://calculator360pro.com/tr",
      "x-default": "https://calculator360pro.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://calculator360pro.com/tr",
    siteName: "Calculator360Pro",
    title: "Calculator360Pro - Ücretsiz Online Hesap Makineleri",
    description:
      "Finans, sağlık, eğitim ve daha fazlası için ücretsiz, doğru online hesap makineleri.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://calculator360pro.com"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Calculator360Pro - Ücretsiz Online Hesap Makineleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator360Pro - Ücretsiz Online Hesap Makineleri",
    description:
      "Finans, sağlık, eğitim ve daha fazlası için ücretsiz, doğru online hesap makineleri.",
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
};

// Türkçe schema'ları head'e eklemek için script component
function TurkishSchemaScripts() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Calculator360Pro",
    "url": "https://calculator360pro.com",
    "logo": "https://calculator360pro.com/logo.svg",
    "sameAs": [
      "https://twitter.com/calculator360pro",
      "https://www.facebook.com/calculator360pro",
      "https://www.linkedin.com/company/calculator360pro",
      "https://www.pinterest.com/calculator360pro",
      "https://www.youtube.com/@calculator360pro",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@calculator360pro.com",
      "availableLanguage": ["English", "Turkish"],
    },
    "foundingDate": "2025",
    "description": "Calculator360Pro finans, sağlık, eğitim, matematik ve günlük ihtiyaçlar için ücretsiz, doğru online hesap makineleri sunar.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calculator360Pro",
    "url": "https://calculator360pro.com/tr",
    "inLanguage": "tr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://calculator360pro.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
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
    </>
  );
}

export default function TurkishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Bu layout sadece children'ı döndürür
  // Navigation ve Footer, LayoutWrapper tarafından pathname'e göre otomatik eklenir
  return (
    <>
      <TurkishSchemaScripts />
      {children}
    </>
  );
}
