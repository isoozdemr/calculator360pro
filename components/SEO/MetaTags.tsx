import { Metadata } from "next";
import { CalculatorDefinition } from "@/lib/calculators/definitions";
import { BlogPost } from "@/lib/blog/posts";
import { SITE_URL } from "@/lib/constants";

export function generateCalculatorMetadata(
  calculator: CalculatorDefinition
): Metadata {
  const url = `${SITE_URL}/calculators/${calculator.category}/${calculator.slug}`;

  return {
    title: `${calculator.name} - Free Online Calculator`,
    description: calculator.metaDescription,
    keywords: calculator.keywords.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${calculator.name} - Free Online Calculator`,
      description: calculator.metaDescription,
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
      title: `${calculator.name} - Free Online Calculator`,
      description: calculator.metaDescription,
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

