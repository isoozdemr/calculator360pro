import { MetadataRoute } from "next";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();
  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/calculators`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Calculator URLs - dynamically generated from all calculators
  const calculatorUrls: MetadataRoute.Sitemap = calculators.map((calc) => ({
    url: `${SITE_URL}/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Category pages - dynamically generated from CALCULATOR_CATEGORIES
  const categoryUrls: MetadataRoute.Sitemap = (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).map((categoryKey) => ({
    url: `${SITE_URL}/calculators/${getCategorySlugByKey(categoryKey)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Blog post URLs
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Other pages
  const otherUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...baseUrls, ...categoryUrls, ...calculatorUrls, ...blogUrls, ...otherUrls];
}

