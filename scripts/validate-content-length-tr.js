/**
 * Turkish (TR) calculator page content length validation.
 * Ensures TR calculator pages have sufficient text for AdSense and SEO.
 *
 * Usage: node scripts/validate-content-length-tr.js
 */

const fs = require("fs");
const path = require("path");

// Minimum words per TR calculator page (catches near-empty pages). For AdSense, 1500+ words per page is recommended.
const MIN_WORDS = 80;
const HESAP_MAKINELERI = path.join(__dirname, "../app/tr/hesap-makineleri");

const CATEGORY_SLUGS = new Set(["finans", "saglik", "matematik", "egitim", "tarih-zaman", "hesap-makineleri"]);

function findAllPageTsx(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "page.tsx" || e.name === "layout.tsx") continue;
      findAllPageTsx(full, list);
    } else if (e.name === "page.tsx") {
      const parentDir = path.basename(path.dirname(full));
      if (!CATEGORY_SLUGS.has(parentDir)) list.push(full);
    }
  }
  return list;
}

function extractTextFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  let text = "";

  // Template literals (backticks) - skip if contains ${}
  const backtickRe = /`([^`]*?)`/gs;
  let m;
  while ((m = backtickRe.exec(content)) !== null) {
    const s = m[1];
    if (s.length > 15 && !s.includes("${") && !/className|href|src|width|height/i.test(s)) {
      text += " " + s;
    }
  }

  // (question|answer|text|name|title|description|q|a): optional newline/space then "string"
  const keyValueRe = /(?:question|answer|text|name|title|description|q|a)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  while ((m = keyValueRe.exec(content)) !== null) {
    const s = m[1].replace(/\\"/g, '"');
    if (s.length > 10) text += " " + s;
  }

  // Same for single-quoted
  const keyValueSqRe = /(?:question|answer|text|name|title|description|q|a)\s*:\s*'((?:[^'\\]|\\.)*)'/g;
  while ((m = keyValueSqRe.exec(content)) !== null) {
    const s = m[1].replace(/\\'/g, "'");
    if (s.length > 10) text += " " + s;
  }

  return text;
}

function countWords(str) {
  const cleaned = str.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.split(" ").filter((w) => w.length > 0).length : 0;
}

const pageFiles = findAllPageTsx(HESAP_MAKINELERI);
const results = [];
let valid = 0;
let invalid = 0;

console.log("Validating TR calculator page content length...\n");

for (const filePath of pageFiles) {
  const rel = path.relative(path.join(__dirname, ".."), filePath);
  const slug = path.basename(path.dirname(filePath));
  const text = extractTextFromFile(filePath);
  const wordCount = countWords(text);
  const ok = wordCount >= MIN_WORDS;
  if (ok) valid++;
  else invalid++;
  results.push({ slug, wordCount, ok, rel });
}

results.sort((a, b) => a.wordCount - b.wordCount);

console.log("─".repeat(60));
console.log(`${"TR Calculator".padEnd(45)} | Words  | Status`);
console.log("─".repeat(60));

results.forEach((r) => {
  const name = r.slug.replace(/-/g, " ");
  const statusStr = r.ok ? "Valid" : "Short";
  console.log(`${name.padEnd(45)} | ${String(r.wordCount).padStart(6)} | ${r.ok ? "✅" : "⚠️"} ${statusStr}`);
});

console.log("─".repeat(60));
console.log(`\nSummary: ${results.length} TR calculator(s), ✅ ≥${MIN_WORDS} words: ${valid}, ⚠️ <${MIN_WORDS} words: ${invalid}`);

if (invalid > 0) {
  console.log(`\nWARNING: ${invalid} TR page(s) have less than ${MIN_WORDS} words. Add more FAQs, descriptions, or body text. For AdSense, aim for 1500+ words per page.\n`);
  process.exit(1);
}
console.log("\nAll TR calculator pages meet the minimum word count. For AdSense, consider 1500+ words per page where possible.\n");
process.exit(0);
