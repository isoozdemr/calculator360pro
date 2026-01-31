import { MetadataRoute } from "next";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL, getCategorySlugByKey, CALCULATOR_CATEGORIES, CalculatorCategory } from "@/lib/constants";
import { URL_MAPPINGS, REVERSE_URL_MAPPINGS } from "@/lib/seo/url-mappings";

// Turkish calculator pages with their English equivalents
const TURKISH_CALCULATORS = [
  { category: "finans", slug: "vergi-hesap-makinesi", enCategory: "finance", enSlug: "tax-calculator" },
  { category: "finans", slug: "maas-hesap-makinesi", enCategory: "finance", enSlug: "salary-calculator" },
  { category: "finans", slug: "konut-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "mortgage-calculator" },
  { category: "finans", slug: "kredi-hesap-makinesi", enCategory: "finance", enSlug: "loan-calculator" },
  { category: "finans", slug: "emeklilik-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "finans", slug: "doviz-cevirici", enCategory: "finance", enSlug: "currency-converter" },
  { category: "egitim", slug: "not-ortalamasi-hesap-makinesi", enCategory: "education", enSlug: "gpa-calculator" },
  { category: "saglik", slug: "bmi-hesap-makinesi", enCategory: "health", enSlug: "bmi-calculator" },
  { category: "saglik", slug: "kalori-hesap-makinesi", enCategory: "health", enSlug: "calorie-calculator" },
  { category: "saglik", slug: "gebelik-hesap-makinesi", enCategory: "health", enSlug: "pregnancy-calculator" },
  { category: "matematik", slug: "yuzde-hesap-makinesi", enCategory: "math", enSlug: "percentage-calculator" },
  { category: "matematik", slug: "indirim-hesap-makinesi", enCategory: "finance", enSlug: "discount-calculator" },
  { category: "tarih-zaman", slug: "yas-hesap-makinesi", enCategory: "date-time", enSlug: "age-calculator" },
  { category: "tarih-zaman", slug: "tarih-farki-hesap-makinesi", enCategory: "date-time", enSlug: "date-calculator" },
];

// Turkish category mappings
const TURKISH_CATEGORIES = [
  { tr: "finans", en: "finance" },
  { tr: "egitim", en: "education" },
  { tr: "saglik", en: "health" },
  { tr: "matematik", en: "math" },
  { tr: "tarih-zaman", en: "date-time" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();

  // ============================================
  // BASE URLS WITH HREFLANG
  // ============================================
  
  const baseUrls: MetadataRoute.Sitemap = [
    // Homepage - English with TR alternate
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          tr: `${SITE_URL}/tr`,
        },
      },
    },
    // Calculators listing page
    {
      url: `${SITE_URL}/calculators`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/calculators`,
          tr: `${SITE_URL}/tr/hesap-makineleri`,
        },
      },
    },
    // Turkish homepage
    {
      url: `${SITE_URL}/tr`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
      alternates: {
        languages: {
          en: SITE_URL,
          tr: `${SITE_URL}/tr`,
        },
      },
    },
    // Turkish calculators listing
    {
      url: `${SITE_URL}/tr/hesap-makineleri`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/calculators`,
          tr: `${SITE_URL}/tr/hesap-makineleri`,
        },
      },
    },
  ];

  // ============================================
  // CATEGORY PAGES WITH HREFLANG
  // ============================================
  
  const categoryUrls: MetadataRoute.Sitemap = (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).map((categoryKey) => {
    const categorySlug = getCategorySlugByKey(categoryKey);
    const trMapping = TURKISH_CATEGORIES.find(c => c.en === categorySlug);
    
    return {
      url: `${SITE_URL}/calculators/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: trMapping ? {
        languages: {
          en: `${SITE_URL}/calculators/${categorySlug}`,
          tr: `${SITE_URL}/tr/hesap-makineleri/${trMapping.tr}`,
        },
      } : undefined,
    };
  });

  // Turkish category pages
  const turkishCategoryUrls: MetadataRoute.Sitemap = TURKISH_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/tr/hesap-makineleri/${cat.tr}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${SITE_URL}/calculators/${cat.en}`,
        tr: `${SITE_URL}/tr/hesap-makineleri/${cat.tr}`,
      },
    },
  }));

  // ============================================
  // CALCULATOR PAGES WITH HREFLANG
  // ============================================
  
  const calculatorUrls: MetadataRoute.Sitemap = calculators.map((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enPath = `/calculators/${categorySlug}/${calc.slug}`;
    const trPath = URL_MAPPINGS[enPath];
    
    return {
      url: `${SITE_URL}${enPath}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: trPath ? {
        languages: {
          en: `${SITE_URL}${enPath}`,
          tr: `${SITE_URL}${trPath}`,
        },
      } : undefined,
    };
  });

  // Turkish calculator pages
  const turkishCalculatorUrls: MetadataRoute.Sitemap = TURKISH_CALCULATORS.map((calc) => {
    const trPath = `/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    const enPath = `/calculators/${calc.enCategory}/${calc.enSlug}`;
    
    return {
      url: `${SITE_URL}${trPath}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}${enPath}`,
          tr: `${SITE_URL}${trPath}`,
        },
      },
    };
  });

  // ============================================
  // BLOG POSTS (English and Turkish)
  // ============================================
  
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Turkish blog posts
  const blogPostsTR = getAllBlogPostsTR();
  const turkishBlogUrls: MetadataRoute.Sitemap = blogPostsTR.map((post) => ({
    url: `${SITE_URL}/tr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        en: `${SITE_URL}/blog`,
        tr: `${SITE_URL}/tr/blog/${post.slug}`,
      },
    },
  }));

  // ============================================
  // OTHER PAGES WITH HREFLANG
  // ============================================
  
  const otherUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          tr: `${SITE_URL}/tr/hakkimizda`,
        },
      },
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${SITE_URL}/blog`,
          tr: `${SITE_URL}/tr/blog`,
        },
      },
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${SITE_URL}/privacy-policy`,
          tr: `${SITE_URL}/tr/gizlilik-politikasi`,
        },
      },
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${SITE_URL}/terms-of-service`,
          tr: `${SITE_URL}/tr/kullanim-kosullari`,
        },
      },
    },
  ];

  // Turkish other pages
  const turkishOtherUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/tr/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          tr: `${SITE_URL}/tr/hakkimizda`,
        },
      },
    },
    {
      url: `${SITE_URL}/tr/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${SITE_URL}/privacy-policy`,
          tr: `${SITE_URL}/tr/gizlilik-politikasi`,
        },
      },
    },
    {
      url: `${SITE_URL}/tr/kullanim-kosullari`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${SITE_URL}/terms-of-service`,
          tr: `${SITE_URL}/tr/kullanim-kosullari`,
        },
      },
    },
    {
      url: `${SITE_URL}/tr/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${SITE_URL}/blog`,
          tr: `${SITE_URL}/tr/blog`,
        },
      },
    },
  ];

  return [
    ...baseUrls,
    ...categoryUrls,
    ...turkishCategoryUrls,
    ...calculatorUrls,
    ...turkishCalculatorUrls,
    ...blogUrls,
    ...turkishBlogUrls,
    ...otherUrls,
    ...turkishOtherUrls,
  ];
}
