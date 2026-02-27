/**
 * Print all sitemap URLs (one per line) for comparing with GSC "Tarandı - dizine eklenmemiş" list.
 * Run: npx tsx scripts/print-sitemap-urls.ts
 * Optional: npm run gsc:urls (writes to sitemap-urls.txt)
 */

import { getSitemapEntries } from "../lib/sitemap-entries";
import * as fs from "fs";
import * as path from "path";

function main() {
  const entries = getSitemapEntries();
  const urls = entries.map((e) => e.url);
  const out = urls.join("\n");
  const outPath = path.join(process.cwd(), "sitemap-urls.txt");
  fs.writeFileSync(outPath, out, "utf-8");
  console.log(`Wrote ${urls.length} URLs to ${outPath}`);
  console.log("Compare with GSC → Sayfa indeksleme → 'Tarandı - şu anda dizine eklenmiş değil'.");
}

main();
