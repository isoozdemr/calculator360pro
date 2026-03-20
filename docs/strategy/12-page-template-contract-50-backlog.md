# Page Template Contract for 50-Page Backlog

This contract is mandatory for all new Tool and Landing/Embed pages.

## 1) Metadata contract
- Title length: 48-62 chars, exact query intent near start.
- Description length: 135-160 chars, include outcome + qualifier (free, no signup, 2026).
- Include year only when user intent is year-specific.
- One primary keyword cluster per page; 2-4 secondary variants.

## 2) Above-the-fold contract
- H1 exactly matches intent family (best/how-to/calculator/compare).
- 1-sentence promise: what user gets in under 10 seconds.
- Primary CTA above fold:
  - Tool page: `Calculate now`
  - Landing/Embed: `Open calculator` + embedded demo where possible.

## 3) Content block contract
Required sections in order:
1. Quick answer (40-80 words)
2. Input explanation (what each input means)
3. Calculation logic (plain language + lightweight formula)
4. 1-2 worked examples
5. FAQ block (4-8 Q/A)
6. Related tools and guides (cluster links)
7. Sources and update note

## 4) Schema contract
- All pages: `BreadcrumbList`
- Tool pages: `WebApplication` + `FAQPage`
- How-to pages: `HowTo` + `FAQPage`
- Compare/best pages: `Article` + `FAQPage`
- Keep schema fields aligned with visible page copy (no hidden claims).

## 5) CTA contract
- Primary CTA at top.
- Secondary CTA after first example.
- Bottom CTA before FAQ or before related links.
- CTA text must include action and benefit (ex: "Compare monthly payment now").

## 6) Internal link cluster rules
- Every new page must link to:
  - 2 same-cluster pages (horizontal links)
  - 1 parent cluster hub
  - 1 cross-cluster utility page (ex: percentage, calendar, glossary)
- Anchor text should match target intent naturally.

## 7) EN/TR bilingual rules
- If bilingual pair exists: add alternates and URL mappings.
- If pair does not exist: do not force hreflang pair; keep page local.
- TR pages must include TR-specific terms where relevant (KKDF/BSMV etc).

## 8) Quality gates
- Snippet-read test: first 160 chars answer intent.
- Tool-content parity test: content claims only what tool can calculate.
- Link integrity test: all related links are live.
- Mobile first-contentful interaction under acceptable threshold in production.

