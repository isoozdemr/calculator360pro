"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getAllCalculators } from "@/lib/calculators/definitions";
import { getAllBlogPosts } from "@/lib/blog/posts";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  
  const calculators = getAllCalculators();
  const blogPosts = getAllBlogPosts();

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return { calculators: [], blogPosts: [] };
    }

    const query = searchQuery.toLowerCase().trim();

    const filteredCalculators = calculators.filter(
      (calc) =>
        calc.name.toLowerCase().includes(query) ||
        calc.description.toLowerCase().includes(query) ||
        calc.keywords.some((keyword) => keyword.toLowerCase().includes(query)) ||
        calc.category.toLowerCase().includes(query)
    );

    const filteredBlogPosts = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
    );

    return {
      calculators: filteredCalculators,
      blogPosts: filteredBlogPosts,
    };
  }, [searchQuery, calculators, blogPosts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const totalResults = filteredResults.calculators.length + filteredResults.blogPosts.length;

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Search
          </h1>
          <p className="text-lg text-[#64748b]">
            Find calculators and articles
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search calculators, articles..."
              className="flex-1 px-4 py-3 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              Search
            </button>
          </div>
        </form>

        {searchQuery.trim() && (
          <div className="mb-6">
            <p className="text-[#64748b]">
              {totalResults === 0
                ? "No results found"
                : `Found ${totalResults} result${totalResults !== 1 ? "s" : ""}`}
            </p>
          </div>
        )}

        {filteredResults.calculators.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Calculators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResults.calculators.map((calc) => (
                <Link
                  key={calc.id}
                  href={`/calculators/${calc.category}/${calc.slug}`}
                  className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors bg-white"
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

        {filteredResults.blogPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">
              Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResults.blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 rounded-lg border-2 border-[#e2e8f0] hover:border-[#2563eb] transition-colors bg-white"
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2563eb] bg-[#eff6ff] rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1e293b] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748b] line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {searchQuery.trim() && totalResults === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[#64748b] mb-4">
              No results found for &quot;{searchQuery}&quot;
            </p>
            <p className="text-sm text-[#64748b]">
              Try different keywords or browse our{" "}
              <Link
                href="/calculators"
                className="text-[#2563eb] hover:underline"
              >
                calculators
              </Link>
            </p>
          </div>
        )}

        {!searchQuery.trim() && (
          <div className="text-center py-12">
            <p className="text-lg text-[#64748b] mb-4">
              Enter a search term to find calculators and articles
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/calculators"
                className="px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
              >
                Browse All Calculators
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-white text-[#2563eb] border-2 border-[#2563eb] rounded-lg font-semibold hover:bg-[#eff6ff] transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
              Search
            </h1>
            <p className="text-lg text-[#64748b]">
              Loading...
            </p>
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
