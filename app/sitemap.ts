import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-entries";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}
