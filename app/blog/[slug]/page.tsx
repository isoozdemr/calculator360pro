import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog/posts";
import { generateBlogPostMetadata } from "@/components/SEO/MetaTags";

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

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] bg-[#eff6ff] dark:bg-[#1e3a8a] rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] dark:text-[#f1f5f9] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#64748b] dark:text-[#94a3b8]">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          <div
            className="prose prose-slate dark:prose-invert max-w-none"
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
        </article>
      </div>
    </div>
  );
}

