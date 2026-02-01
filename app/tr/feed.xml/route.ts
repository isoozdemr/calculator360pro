import { NextResponse } from "next/server";
import { getAllBlogPostsTR } from "@/lib/blog/posts-tr";
import { SITE_URL } from "@/lib/constants";

export async function GET() {
  const posts = getAllBlogPostsTR();
  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);

  const lastBuildDate = latestPosts.length > 0
    ? new Date(latestPosts[0].date).toUTCString()
    : new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Calculator360Pro Blog - Türkçe</title>
    <link>${SITE_URL}/tr/blog</link>
    <description>Türkçe hesap makinesi rehberleri, ipuçları ve uzman tavsiyeleri. Finansal, sağlık ve eğitim hesaplamaları hakkında kapsamlı bilgiler.</description>
    <language>tr-TR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/tr/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>Calculator360Pro</title>
      <link>${SITE_URL}/tr</link>
    </image>
    ${latestPosts
      .map((post) => {
        const pubDate = new Date(post.date).toUTCString();
        const content = post.content
          .replace(/<[^>]*>/g, "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .substring(0, 500);
        
        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/tr/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/tr/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[${content}...]]></content:encoded>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
      <author>${post.author} (contact@calculator360pro.com)</author>
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
