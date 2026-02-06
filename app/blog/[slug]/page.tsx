import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog/posts";
import { getRelatedCalculatorsForPost, getRelatedBlogPostsForPost } from "@/lib/blog/related";
import { getCalculator } from "@/lib/calculators/definitions";
import { generateBlogPostMetadata } from "@/components/SEO/MetaTags";
import { generateArticleSchema, generateBlogBreadcrumbSchema, generateFAQPageSchema } from "@/lib/seo/schema";
import { getCategorySlugByKey } from "@/lib/constants";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return generateBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBlogBreadcrumbSchema(post);
  const faqSchema = post.faqs?.length ? generateFAQPageSchema(post.faqs) : null;
  
  // Get related calculators and related blog posts for internal linking
  const relatedCalculatorIds = getRelatedCalculatorsForPost(post);
  const relatedCalculators = relatedCalculatorIds
    .map((id) => getCalculator(id))
    .filter((calc): calc is NonNullable<typeof calc> => calc !== undefined)
    .slice(0, 3);
  const relatedBlogPosts = getRelatedBlogPostsForPost(post, 4);

  return (
    <>
      {/* Article Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb Schema for navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#64748b]">
              <li>
                <Link href="/" className="hover:text-[#2563eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2563eb] transition-colors">
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
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1>${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2>${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3>${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith("```")) {
                      return "";
                    }
                    if (line.trim() === "") {
                      return "<br/>";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />

            {/* FAQ Section (when faqs provided) */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#e2e8f0]" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-xl font-bold text-[#1e293b] mb-4">Frequently Asked Questions</h2>
                <ul className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <li key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="font-semibold text-[#1e293b]" itemProp="name">{faq.question}</h3>
                      <p className="text-[#64748b] mt-1" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <span itemProp="text">{faq.answer}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <h3 className="text-sm font-semibold text-[#1e293b] mb-3">Tags:</h3>
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

          {/* Related Blog Posts Section - Internal Linking */}
          {relatedBlogPosts.length > 0 && (
            <div className="mt-8 bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">
                Related Blog Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedBlogPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
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
                Related Calculators
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedCalculators.map((calc) => (
                  <Link
                    key={calc.id}
                    href={`/calculators/${getCategorySlugByKey(calc.category)}/${calc.slug}`}
                    className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                  >
                    <h3 className="font-semibold text-[#1e293b] mb-2">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-[#64748b] line-clamp-2">
                      {calc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog Link */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#2563eb] hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

