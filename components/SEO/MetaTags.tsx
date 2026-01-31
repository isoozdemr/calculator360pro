import { Metadata } from "next";
import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { BlogPost } from "@/lib/blog/posts";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";
import { URL_MAPPINGS } from "@/lib/seo/url-mappings";

export function generateCalculatorMetadata(
  calculator: CalculatorDefinition
): Metadata {
  const categorySlug = getCategorySlugByKey(calculator.category);
  const enPath = `/calculators/${categorySlug}/${calculator.slug}`;
  const url = `${SITE_URL}${enPath}`;
  
  // Check if there's a Turkish translation
  const trPath = URL_MAPPINGS[enPath];
  const hasTranslation = !!trPath;

  // Optimize title tag: Primary keyword at the beginning, 50-60 characters
  const secondaryKeyword = calculator.keywords[1] || "";
  
  // Build optimized title
  let title = `Free ${calculator.name}`;
  if (secondaryKeyword && title.length < 50) {
    // Add secondary keyword if there's space
    const withSecondary = `${title} - ${secondaryKeyword}`;
    if (withSecondary.length <= 60) {
      title = withSecondary;
    }
  }
  title += " | Calculator360Pro";
  
  // Ensure title is 50-60 characters
  if (title.length > 60) {
    // Fallback to shorter format
    title = `${calculator.name} - Free Calculator | Calculator360Pro`;
    if (title.length > 60) {
      // Even shorter fallback
      title = `Free ${calculator.name} | Calculator360Pro`;
    }
  }
  
  // Validate meta description length (150-160 characters)
  let metaDescription = calculator.metaDescription;
  if (metaDescription.length < 150) {
    // Meta description too short - log warning but keep original
    console.warn(`Meta description for ${calculator.id} is too short: ${metaDescription.length} characters (minimum 150)`);
  } else if (metaDescription.length > 160) {
    // Truncate to 160 characters
    metaDescription = metaDescription.substring(0, 157) + "...";
  }

  // Build alternates with hreflang if translation exists
  const alternates: Metadata["alternates"] = {
    canonical: url,
  };
  
  if (hasTranslation) {
    alternates.languages = {
      "en": url,
      "tr": `${SITE_URL}${trPath}`,
      "x-default": url,
    };
  }

  return {
    title,
    description: metaDescription,
    keywords: calculator.keywords.join(", "),
    alternates,
    openGraph: {
      title,
      description: metaDescription,
      url,
      type: "website",
      siteName: "Calculator360Pro",
      locale: "en_US",
      alternateLocale: hasTranslation ? ["tr_TR"] : undefined,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${calculator.name} - Free Online Calculator`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [`${SITE_URL}/og-image.png`],
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
}

export function generateBlogPostMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Calculator360Pro Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "Calculator360Pro",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate metadata for Turkish calculator pages
 * Includes proper hreflang links back to English version
 */
export function generateTurkishCalculatorMetadata(
  name: string,
  description: string,
  keywords: string[],
  trPath: string,
  enPath: string
): Metadata {
  const trUrl = `${SITE_URL}${trPath}`;
  const enUrl = `${SITE_URL}${enPath}`;

  return {
    title: `${name} | Calculator360Pro`,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: trUrl,
      languages: {
        "en": enUrl,
        "tr": trUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: name,
      description,
      url: trUrl,
      type: "website",
      siteName: "Calculator360Pro",
      locale: "tr_TR",
      alternateLocale: ["en_US"],
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${name} - Ücretsiz Online Hesap Makinesi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [`${SITE_URL}/og-image.png`],
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
}