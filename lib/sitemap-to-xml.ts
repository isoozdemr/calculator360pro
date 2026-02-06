import type { MetadataRoute } from "next";

/**
 * Converts Next.js MetadataRoute.Sitemap entries to sitemap XML string.
 * Used by the route handler to serve /sitemap.xml with Content-Type: application/xml.
 */
export function sitemapEntriesToXml(entries: MetadataRoute.Sitemap): string {
  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const urlBlocks = entries.map((entry) => {
    const lastmod =
      typeof entry.lastModified === "string"
        ? entry.lastModified
        : entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : "";
    const loc = escape(entry.url);
    let links = "";
    const langs = entry.alternates?.languages;
    if (langs) {
      const en = escape(langs.en ?? entry.url);
      const tr = escape(langs.tr ?? entry.url);
      const xDefault = escape((langs as Record<string, string>)["x-default"] ?? entry.url);
      links = `\n<xhtml:link rel="alternate" hreflang="en" href="${en}" />\n<xhtml:link rel="alternate" hreflang="tr" href="${tr}" />\n<xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />`;
    }
    return `<url>
<loc>${loc}</loc>${links}
<lastmod>${lastmod}</lastmod>
<changefreq>${entry.changeFrequency ?? "weekly"}</changefreq>
<priority>${entry.priority ?? 0.5}</priority>
</url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks.join("\n")}
</urlset>`;
}
