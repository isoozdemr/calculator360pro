import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPostTR, getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL } from "@/lib/constants";
import { getCalculator } from "@/lib/calculators/definitions";
import { getCategorySlugByKey } from "@/lib/constants";
import { generateTurkishArticleSchema } from "@/lib/seo/schema";
import { getRelatedBlogPostsTR } from "@/lib/blog/related";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPostsTR();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostTR(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Calculator360Pro`,
    description: post.description,
    keywords: post.tags,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/tr/blog/${slug}`,
      languages: {
        "en": `${SITE_URL}/blog`,
        "tr": `${SITE_URL}/tr/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/tr/blog/${slug}`,
      locale: "tr_TR",
      type: "article",
      siteName: "Calculator360Pro",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPageTR({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostTR(slug);

  if (!post) {
    notFound();
  }

  // Related calculators based on tags
  const relatedCalculatorIds: string[] = [];
  if (post.tags.includes("vergi hesaplama") || post.tags.includes("gelir vergisi")) {
    relatedCalculatorIds.push("tax-calculator");
  }
  if (post.tags.includes("maas hesaplama") || post.tags.includes("brut net maas")) {
    relatedCalculatorIds.push("salary-calculator");
  }
  if (post.tags.includes("konut kredisi") || post.tags.includes("mortgage")) {
    relatedCalculatorIds.push("mortgage-calculator");
  }
  if (post.tags.includes("emeklilik") || post.tags.includes("eyt")) {
    relatedCalculatorIds.push("retirement-calculator");
  }
  if (post.tags.includes("bmi") || post.tags.includes("vücut kitle indeksi")) {
    relatedCalculatorIds.push("bmi-calculator");
  }

  const relatedCalculators = relatedCalculatorIds
    .map((id) => getCalculator(id))
    .filter((calc): calc is NonNullable<typeof calc> => calc !== undefined)
    .slice(0, 3);

  // Convert markdown-like content to HTML
  const convertContentToHTML = (content: string): string => {
    return content
      .split("\n")
      .map((line) => {
        if (line.startsWith("# ")) {
          return `<h1 class="text-3xl font-bold text-[#1e293b] mt-8 mb-4">${line.substring(2)}</h1>`;
        }
        if (line.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold text-[#1e293b] mt-6 mb-3">${line.substring(3)}</h2>`;
        }
        if (line.startsWith("### ")) {
          return `<h3 class="text-xl font-bold text-[#1e293b] mt-4 mb-2">${line.substring(4)}</h3>`;
        }
        if (line.startsWith("|") && line.includes("|")) {
          // Table row - skip for now, will handle tables separately
          return "";
        }
        if (line.startsWith("- ") || line.startsWith("* ")) {
          const text = line.substring(2);
          return `<li class="ml-4 mb-1">${text}</li>`;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          const text = line.substring(2, line.length - 2);
          return `<p class="mb-4"><strong>${text}</strong></p>`;
        }
        if (line.trim() === "") {
          return "<br/>";
        }
        if (line.trim().startsWith("`")) {
          return "";
        }
        // Convert links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let processedLine = line.replace(linkRegex, (match, text, url) => {
          return `<a href="${url}" class="text-[#2563eb] hover:underline">${text}</a>`;
        });
        return `<p class="text-[#64748b] mb-4 leading-relaxed">${processedLine}</p>`;
      })
      .join("");
  };

  const htmlContent = convertContentToHTML(post.content);

  // Generate schemas
  const articleSchema = generateTurkishArticleSchema(
    post.title,
    post.description,
    post.slug,
    post.date,
    post.author,
    post.tags,
    post.category,
    post.dateModified
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": `${SITE_URL}/tr`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/tr/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/tr/blog/${post.slug}`,
      },
    ],
  };

  // Get related blog posts
  const relatedPosts = getRelatedBlogPostsTR(post, 3);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li>
                <Link href="/tr" className="hover:text-[#2563eb] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/tr/blog" className="hover:text-[#2563eb] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-[#1e293b] font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          <article className="bg-white rounded-lg border-2 border-[#e2e8f0] p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2563eb] bg-[#eff6ff] rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-[#64748b]">
                <span>{post.author} tarafından</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <h3 className="text-sm font-semibold text-[#1e293b] mb-3">Etiketler:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#64748b] bg-[#f1f5f9] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Related Blog Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-8 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">
                İlgili Blog Yazıları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/tr/blog/${relatedPost.slug}`}
                    className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                  >
                    <h3 className="font-semibold text-[#1e293b] mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-[#64748b] line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Calculators Section - Internal Linking */}
          {relatedCalculators.length > 0 && (
            <div className="mt-8 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">
                İlgili Hesap Makineleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedCalculators.map((calc) => {
                  // Find Turkish URL from URL mappings
                  const enPath = `/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`;
                  // For now, construct Turkish path manually
                  const categoryMap: Record<string, string> = {
                    finance: "finans",
                    health: "saglik",
                    education: "egitim",
                    math: "matematik",
                    dateTime: "tarih-zaman",
                  };
                  const slugMap: Record<string, string> = {
                    "tax-calculator": "vergi-hesap-makinesi",
                    "salary-calculator": "maas-hesap-makinesi",
                    "mortgage-calculator": "konut-kredisi-hesap-makinesi",
                    "retirement-calculator": "emeklilik-hesap-makinesi",
                    "bmi-calculator": "bmi-hesap-makinesi",
                  };
                  const trPath = `/tr/hesap-makineleri/${categoryMap[calc.category] || calc.category}/${slugMap[calc.id] || calc.slug}`;
                  
                  return (
                    <Link
                      key={calc.id}
                      href={trPath}
                      className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                    >
                      <h3 className="font-semibold text-[#1e293b] mb-2">
                        {calc.name}
                      </h3>
                      <p className="text-sm text-[#64748b] line-clamp-2">
                        {calc.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back to Blog Link */}
          <div className="mt-8 text-center">
            <Link
              href="/tr/blog"
              className="inline-flex items-center text-[#2563eb] hover:underline font-medium"
            >
              ← Blog'a Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
