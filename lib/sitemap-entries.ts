import type { MetadataRoute } from "next";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import {
  SITE_URL,
  getCategorySlugByKey,
  CALCULATOR_CATEGORIES,
  CalculatorCategory,
} from "@/lib/constants";
import { URL_MAPPINGS, REVERSE_URL_MAPPINGS } from "@/lib/seo/url-mappings";
import { getTrBlogSlugForEn, getEnBlogSlugForTr } from "@/lib/blog/slug-mappings";

const TURKISH_CALCULATORS = [
  { category: "finans", slug: "vergi-hesap-makinesi", enCategory: "finance", enSlug: "tax-calculator" },
  { category: "finans", slug: "maas-hesap-makinesi", enCategory: "finance", enSlug: "salary-calculator" },
  { category: "finans", slug: "konut-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "mortgage-calculator" },
  { category: "finans", slug: "kredi-hesap-makinesi", enCategory: "finance", enSlug: "loan-calculator" },
  { category: "finans", slug: "emeklilik-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
  { category: "finans", slug: "bilesik-faiz-hesap-makinesi", enCategory: "finance", enSlug: "compound-interest-calculator" },
  { category: "finans", slug: "yatirim-hesap-makinesi", enCategory: "finance", enSlug: "investment-calculator" },
  { category: "finans", slug: "birikim-hesap-makinesi", enCategory: "finance", enSlug: "savings-calculator" },
  { category: "finans", slug: "butce-hesap-makinesi", enCategory: "finance", enSlug: "budget-calculator" },
  { category: "finans", slug: "tasit-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "car-loan-calculator" },
  { category: "finans", slug: "doviz-cevirici", enCategory: "finance", enSlug: "currency-converter" },
  { category: "egitim", slug: "not-ortalamasi-hesap-makinesi", enCategory: "education", enSlug: "gpa-calculator" },
  { category: "saglik", slug: "bmi-hesap-makinesi", enCategory: "health", enSlug: "bmi-calculator" },
  { category: "saglik", slug: "kalori-hesap-makinesi", enCategory: "health", enSlug: "calorie-calculator" },
  { category: "saglik", slug: "gebelik-hesap-makinesi", enCategory: "health", enSlug: "pregnancy-calculator" },
  { category: "matematik", slug: "yuzde-hesap-makinesi", enCategory: "math", enSlug: "percentage-calculator" },
  { category: "matematik", slug: "indirim-hesap-makinesi", enCategory: "finance", enSlug: "discount-calculator" },
  { category: "tarih-zaman", slug: "yas-hesap-makinesi", enCategory: "date-time", enSlug: "age-calculator" },
  { category: "tarih-zaman", slug: "tarih-farki-hesap-makinesi", enCategory: "date-time", enSlug: "date-calculator" },
  { category: "matematik", slug: "bilimsel-hesap-makinesi", enCategory: "math", enSlug: "scientific-calculator" },
  { category: "matematik", slug: "birim-cevirici", enCategory: "math", enSlug: "unit-converter" },
  { category: "tarih-zaman", slug: "saat-hesap-makinesi", enCategory: "date-time", enSlug: "hours-calculator" },
  { category: "saglik", slug: "vucut-yag-orani-hesap-makinesi", enCategory: "health", enSlug: "body-fat-calculator" },
  { category: "finans", slug: "ogrenim-kredisi-hesap-makinesi", enCategory: "finance", enSlug: "student-loan-calculator" },
  { category: "finans", slug: "kredi-karti-borc-hesap-makinesi", enCategory: "finance", enSlug: "credit-card-payoff-calculator" },
  { category: "finans", slug: "bahsis-hesap-makinesi", enCategory: "finance", enSlug: "tip-calculator" },
  { category: "finans", slug: "enflasyon-alim-gucu-hesap-makinesi", enCategory: "finance", enSlug: "inflation-purchasing-power-calculator" },
  { category: "finans", slug: "bes-devlet-katkisi-hesap-makinesi", enCategory: "finance", enSlug: "retirement-calculator" },
];

const TURKISH_CATEGORIES = [
  { tr: "finans", en: "finance" },
  { tr: "egitim", en: "education" },
  { tr: "saglik", en: "health" },
  { tr: "matematik", en: "math" },
  { tr: "tarih-zaman", en: "date-time" },
];

function fullUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function entry(
  url: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"],
  priority: number,
  alternates?: { en: string; tr: string; "x-default": string }
): MetadataRoute.Sitemap[0] {
  const item: MetadataRoute.Sitemap[0] = {
    url: fullUrl(url),
    lastModified,
    changeFrequency,
    priority,
  };
  if (alternates) {
    item.alternates = {
      languages: {
        en: fullUrl(alternates.en),
        tr: fullUrl(alternates.tr),
        "x-default": fullUrl(alternates["x-default"]),
      },
    };
  }
  return item;
}

/** Builds sitemap entries for /sitemap.xml (used by route handler only). */
export function getSitemapEntries(): MetadataRoute.Sitemap {
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();
  const blogPostsTR = getAllBlogPostsTR();
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  const baseAlt = { en: "/", tr: "/tr", "x-default": "/" };
  const calcListAlt = { en: "/calculators", tr: "/tr/hesap-makineleri", "x-default": "/calculators" };
  urls.push(entry("/", now, "daily", 1, baseAlt));
  urls.push(entry("/calculators", now, "daily", 0.9, calcListAlt));
  urls.push(entry("/tr", now, "daily", 0.9, baseAlt));
  urls.push(entry("/tr/hesap-makineleri", now, "daily", 0.8, calcListAlt));

  (Object.keys(CALCULATOR_CATEGORIES) as CalculatorCategory[]).forEach((categoryKey) => {
    const categorySlug = getCategorySlugByKey(categoryKey);
    const enPath = `/calculators/${categorySlug}`;
    const trPath =
      URL_MAPPINGS[enPath] ||
      `/tr/hesap-makineleri/${TURKISH_CATEGORIES.find((c) => c.en === categorySlug)?.tr ?? categorySlug}`;
    urls.push(entry(enPath, now, "weekly", 0.8, { en: enPath, tr: trPath, "x-default": enPath }));
  });

  TURKISH_CATEGORIES.forEach((cat) => {
    const trPath = `/tr/hesap-makineleri/${cat.tr}`;
    const enPath = `/calculators/${cat.en}`;
    urls.push(entry(trPath, now, "weekly", 0.8, { en: enPath, tr: trPath, "x-default": enPath }));
  });

  calculators.forEach((calc) => {
    const categorySlug = getCategorySlugByKey(calc.category);
    const enRel = `/calculators/${categorySlug}/${calc.slug}`;
    const trRel = URL_MAPPINGS[enRel];
    const alt = trRel ? { en: enRel, tr: trRel, "x-default": enRel } : undefined;
    urls.push(entry(enRel, now, "weekly", 0.9, alt));
  });

  TURKISH_CALCULATORS.forEach((calc) => {
    const trRel = `/tr/hesap-makineleri/${calc.category}/${calc.slug}`;
    const enRel = REVERSE_URL_MAPPINGS[trRel];
    const alt = enRel ? { en: enRel, tr: trRel, "x-default": enRel } : undefined;
    urls.push(entry(trRel, now, "weekly", 0.9, alt));
  });

  blogPosts.forEach((post) => {
    const trSlug = getTrBlogSlugForEn(post.slug);
    const enUrl = `/blog/${post.slug}`;
    const lastmod = new Date(post.dateModified || post.date);
    if (trSlug) {
      urls.push(
        entry(enUrl, lastmod, "monthly", 0.7, {
          en: enUrl,
          tr: `/tr/blog/${trSlug}`,
          "x-default": enUrl,
        })
      );
    } else {
      urls.push({ url: fullUrl(enUrl), lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 });
    }
  });

  blogPostsTR.forEach((post) => {
    const enSlug = getEnBlogSlugForTr(post.slug);
    const trUrl = `/tr/blog/${post.slug}`;
    const lastmod = new Date(post.dateModified || post.date);
    if (enSlug) {
      const enUrl = `/blog/${enSlug}`;
      urls.push(
        entry(trUrl, lastmod, "monthly", 0.7, {
          en: enUrl,
          tr: trUrl,
          "x-default": enUrl,
        })
      );
    } else {
      urls.push({ url: fullUrl(trUrl), lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 });
    }
  });

  const aboutAlt = { en: "/about", tr: "/tr/hakkimizda", "x-default": "/about" };
  urls.push(entry("/about", now, "monthly", 0.5, aboutAlt));
  urls.push(entry("/tr/hakkimizda", now, "monthly", 0.5, aboutAlt));
  urls.push({ url: fullUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 });
  urls.push({ url: fullUrl("/tr/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 });
  urls.push({ url: fullUrl("/search"), lastModified: now, changeFrequency: "monthly", priority: 0.4 });

  const privacyAlt = { en: "/privacy-policy", tr: "/tr/gizlilik-politikasi", "x-default": "/privacy-policy" };
  urls.push(entry("/privacy-policy", now, "yearly", 0.3, privacyAlt));
  urls.push(entry("/tr/gizlilik-politikasi", now, "yearly", 0.3, privacyAlt));
  const termsAlt = { en: "/terms-of-service", tr: "/tr/kullanim-kosullari", "x-default": "/terms-of-service" };
  urls.push(entry("/terms-of-service", now, "yearly", 0.3, termsAlt));
  urls.push(entry("/tr/kullanim-kosullari", now, "yearly", 0.3, termsAlt));

  const guideGlossaryAlt = {
    en: "/guides/financial-terms-glossary",
    tr: "/tr/rehberler/finansal-terimler-sozlugu",
    "x-default": "/guides/financial-terms-glossary",
  };
  const guideTaxAlt = {
    en: "/guides/tax-calendar-2026-usa",
    tr: "/tr/rehberler/vergi-takvimi-2026",
    "x-default": "/guides/tax-calendar-2026-usa",
  };
  urls.push(entry("/tr/rehberler/finansal-terimler-sozlugu", now, "monthly", 0.6, guideGlossaryAlt));
  urls.push(entry("/tr/rehberler/vergi-takvimi-2026", now, "monthly", 0.6, guideTaxAlt));
  urls.push({ url: fullUrl("/tr/rehberler/sgk-emeklilik-tablosu"), lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  urls.push({ url: fullUrl("/tr/rehberler/kredi-notu-nasil-yukseltilir"), lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  urls.push({ url: fullUrl("/tr/rehberler/vergi-indirimleri-rehberi-2026"), lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  urls.push({ url: fullUrl("/tr/rehberler/yatirim-baslangic-rehberi-2026"), lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  urls.push(entry("/guides/financial-terms-glossary", now, "monthly", 0.6, guideGlossaryAlt));
  urls.push(entry("/guides/tax-calendar-2026-usa", now, "monthly", 0.6, guideTaxAlt));

  const contactAlt = { en: "/contact", tr: "/tr/iletisim", "x-default": "/contact" };
  urls.push(entry("/contact", now, "monthly", 0.5, contactAlt));
  urls.push(entry("/tr/iletisim", now, "monthly", 0.5, contactAlt));

  return urls;
}
