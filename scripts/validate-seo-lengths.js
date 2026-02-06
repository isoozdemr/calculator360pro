/**
 * SEO Length Checklist – 2026
 * Validates title (50–60 chars), meta description (150–160 chars), and body word count
 * for calculators, blog (EN/TR), and optionally guides.
 *
 * Usage: node scripts/validate-seo-lengths.js
 */

const fs = require("fs");
const path = require("path");

const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESC_MIN = 150;
const DESC_MAX = 160;
const CALC_MIN_WORDS = 2000;
const BLOG_MIN_WORDS = 800;
const GUIDE_MIN_WORDS = 1500;

const results = { calculators: [], blogEn: [], blogTr: [], guides: [] };
let hasErrors = false;

function wordCount(text) {
  if (!text || typeof text !== "string") return 0;
  const stripped = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return stripped ? stripped.split(" ").filter(Boolean).length : 0;
}

// ---- Calculators ----
const definitionsPath = path.join(__dirname, "../lib/calculators/definitions.ts");
const contentPath = path.join(__dirname, "../lib/calculators/content.ts");
const definitionsFile = fs.readFileSync(definitionsPath, "utf8");
const contentFile = fs.readFileSync(contentPath, "utf8");
const calcDefRegex = /"([a-z0-9-]+)":\s*\{\s*id:[^,]+,\s*name:\s*"([^"]+)",[\s\S]*?metaDescription:\s*"([^"]+)"/g;
let m;
while ((m = calcDefRegex.exec(definitionsFile)) !== null) {
  const [, id, name, metaDescription] = m;
  const title = `Free ${name} | Calculator360Pro`;
  const titleLen = title.length;
  const descLen = metaDescription.length;
  const contentMatch = new RegExp(`"${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*\`([\\s\\S]*?)\`,\\s*(?="|$)`, "m").exec(contentFile);
  const words = contentMatch ? wordCount(contentMatch[1]) : 0;
  const titleOk = titleLen >= TITLE_MIN && titleLen <= TITLE_MAX;
  const descOk = descLen >= DESC_MIN && descLen <= DESC_MAX;
  const wordsOk = words >= CALC_MIN_WORDS;
  if (!titleOk || !descOk || !wordsOk) hasErrors = true;
  results.calculators.push({
    id,
    titleLen,
    descLen,
    words,
    titleOk,
    descOk,
    wordsOk,
  });
}

function parseBlogFile(fileContent) {
  const posts = [];
  const blockRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*(?:\n\s*)?"([^"]*)"[\s\S]*?content:\s*`([\s\S]*?)`,\s*author:/g;
  let p;
  while ((p = blockRegex.exec(fileContent)) !== null) {
    posts.push({ slug: p[1], title: p[2], description: p[3], content: p[4] });
  }
  return posts;
}

// ---- Blog EN ----
const postsPath = path.join(__dirname, "../lib/blog/posts.ts");
const postsFile = fs.readFileSync(postsPath, "utf8");
parseBlogFile(postsFile).forEach(({ slug, title, description, content }) => {
  const fullTitle = `${title} | Calculator360Pro Blog`;
  const titleLen = fullTitle.length;
  const descLen = description.length;
  const words = wordCount(content);
  const titleOk = titleLen >= TITLE_MIN && titleLen <= TITLE_MAX;
  const descOk = descLen >= DESC_MIN && descLen <= DESC_MAX;
  const wordsOk = words >= BLOG_MIN_WORDS;
  if (!titleOk || !descOk || !wordsOk) hasErrors = true;
  results.blogEn.push({ slug, titleLen, descLen, words, titleOk, descOk, wordsOk });
});

// ---- Blog TR ----
const postsTrPath = path.join(__dirname, "../lib/blog/posts-tr.ts");
const postsTrFile = fs.readFileSync(postsTrPath, "utf8");
parseBlogFile(postsTrFile).forEach(({ slug, title, description, content }) => {
  const fullTitle = `${title} | Calculator360Pro`;
  const titleLen = fullTitle.length;
  const descLen = description.length;
  const words = wordCount(content);
  const titleOk = titleLen >= TITLE_MIN && titleLen <= TITLE_MAX;
  const descOk = descLen >= DESC_MIN && descLen <= DESC_MAX;
  const wordsOk = words >= BLOG_MIN_WORDS;
  if (!titleOk || !descOk || !wordsOk) hasErrors = true;
  results.blogTr.push({ slug, titleLen, descLen, words, titleOk, descOk, wordsOk });
});

// ---- Report ----
console.log("\n=== SEO Length Checklist (2026) ===\n");
console.log("Targets: Title 50–60 chars | Description 150–160 chars | Body min words (calc 2000, blog 800)\n");

console.log("--- Calculators ---");
console.log("ID".padEnd(40) + "Title  Desc   Words   Status");
console.log("-".repeat(75));
results.calculators.forEach((r) => {
  const status = [r.titleOk ? "T" : "t", r.descOk ? "D" : "d", r.wordsOk ? "W" : "w"].join("");
  const ok = r.titleOk && r.descOk && r.wordsOk;
  console.log(`${r.id.padEnd(40)} ${String(r.titleLen).padStart(5)} ${String(r.descLen).padStart(5)} ${String(r.words).padStart(6)}   ${ok ? "✅" : "⚠️"} ${!ok ? status : ""}`);
});

console.log("\n--- Blog (EN) ---");
console.log("Slug".padEnd(45) + "Title  Desc   Words   Status");
console.log("-".repeat(80));
results.blogEn.forEach((r) => {
  const status = [r.titleOk ? "T" : "t", r.descOk ? "D" : "d", r.wordsOk ? "W" : "w"].join("");
  const ok = r.titleOk && r.descOk && r.wordsOk;
  console.log(`${(r.slug || "").slice(0, 44).padEnd(45)} ${String(r.titleLen).padStart(5)} ${String(r.descLen).padStart(5)} ${String(r.words).padStart(6)}   ${ok ? "✅" : "⚠️"} ${!ok ? status : ""}`);
});

console.log("\n--- Blog (TR) ---");
console.log("Slug".padEnd(45) + "Title  Desc   Words   Status");
console.log("-".repeat(80));
results.blogTr.forEach((r) => {
  const status = [r.titleOk ? "T" : "t", r.descOk ? "D" : "d", r.wordsOk ? "W" : "w"].join("");
  const ok = r.titleOk && r.descOk && r.wordsOk;
  console.log(`${(r.slug || "").slice(0, 44).padEnd(45)} ${String(r.titleLen).padStart(5)} ${String(r.descLen).padStart(5)} ${String(r.words).padStart(6)}   ${ok ? "✅" : "⚠️"} ${!ok ? status : ""}`);
});

console.log("\nLegend: T=title, D=description, W=words; lowercase = out of range.\n");
process.exit(hasErrors ? 1 : 0);
