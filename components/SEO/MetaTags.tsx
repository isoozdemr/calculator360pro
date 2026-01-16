import { Metadata } from "next";
import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { BlogPost } from "@/lib/blog/posts";
import { SITE_URL, getCategorySlugByKey } from "@/lib/constants";

export function generateCalculatorMetadata(
  calculator: CalculatorDefinition
): Metadata {
  const url = `${SITE_URL}/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`;

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

  return {
    title,
    description: metaDescription,
    keywords: calculator.keywords.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: metaDescription,
      url,
      type: "website",
      siteName: "Calculator360Pro",
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

