import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog/posts";
import { SITE_URL } from "@/lib/constants";
import { generateBlogListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Blog - Calculator Guides & Tips 2026",
  description:
    "Expert guides on mortgage, BMI, tax, GPA & more. Learn to calculate like a pro. Free tips & tutorials - read now!",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog - Calculator Guides and Tips",
    description:
      "Learn how to use calculators effectively with our comprehensive guides. Tips, tutorials, and expert advice on financial, health, and educational calculations.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "Calculator360Pro",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Blog - Calculator360Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Calculator Guides and Tips",
    description:
      "Learn how to use calculators effectively with our comprehensive guides. Tips, tutorials, and expert advice on financial, health, and educational calculations.",
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

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const blogListSchema = generateBlogListSchema(
    posts.map((p) => ({ title: p.title, slug: p.slug, date: p.date })),
    `${SITE_URL}/blog`,
    "en"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#64748b] max-w-3xl">
            Learn how to use calculators effectively with our comprehensive guides,
            tips, and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-lg border-2 border-[#e2e8f0] p-6 hover:border-[#2563eb] transition-colors"
            >
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2563eb] bg-[#eff6ff] rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1e293b] mb-3">
                {post.title}
              </h2>
              <p className="text-[#64748b] mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-sm text-[#64748b]">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

