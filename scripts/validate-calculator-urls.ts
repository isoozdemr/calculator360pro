/**
 * Validates that every TR calculator in TURKISH_CALCULATORS has a page file,
 * and that every EN calculator in definitions has a slug (used by generateStaticParams).
 * Run: npx tsx scripts/validate-calculator-urls.ts
 */

import * as fs from "fs";
import * as path from "path";
import { TURKISH_CALCULATORS } from "../lib/sitemap-entries";
import { getAllCalculators, getCalculator } from "../lib/calculators/definitions";

const APP_TR_BASE = path.join(process.cwd(), "app", "tr", "hesap-makineleri");

function main(): void {
  let failed = false;

  // 1. TR: every TURKISH_CALCULATORS entry must have app/tr/hesap-makineleri/{category}/{slug}/page.tsx
  console.log("Checking TR calculator page files...");
  for (const calc of TURKISH_CALCULATORS) {
    const pagePath = path.join(APP_TR_BASE, calc.category, calc.slug, "page.tsx");
    if (!fs.existsSync(pagePath)) {
      console.error(`Missing TR page: ${calc.category}/${calc.slug} -> ${pagePath}`);
      failed = true;
    }
  }
  if (!failed) console.log(`  OK: ${TURKISH_CALCULATORS.length} TR calculator pages found.`);

  // 2. EN: every calculator from definitions must be resolvable (getCalculator returns defined)
  console.log("Checking EN calculator definitions...");
  const enCalculators = getAllCalculators();
  for (const calc of enCalculators) {
    const found = getCalculator(calc.slug);
    if (!found) {
      console.error(`Missing EN definition for slug: ${calc.slug}`);
      failed = true;
    }
  }
  if (!failed) console.log(`  OK: ${enCalculators.length} EN calculator definitions.`);

  if (failed) {
    process.exit(1);
  }
  console.log("Validation passed.");
}

main();
