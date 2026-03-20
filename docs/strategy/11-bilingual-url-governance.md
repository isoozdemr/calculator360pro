# Bilingual URL Governance (EN/TR)

This document defines how EN/TR pages must be mapped, switched, and indexed.

## Goals
- Prevent LanguageSwitcher misrouting when a translation does not exist.
- Keep sitemap alternates and metadata alternates consistent.
- Ensure new EN/TR guide pairs are discoverable and crawlable.

## Source of truth
- URL pair definitions: `lib/seo/url-mappings.ts`
- Sitemap generation: `lib/sitemap-entries.ts`
- Metadata alternates: page-level metadata and shared helpers

## Mandatory rules
1. If a page is bilingual, add EN->TR pair in `URL_MAPPINGS`.
2. If a page is EN-only or TR-only, do not create fake alternates.
3. LanguageSwitcher fallback behavior:
   - If no mapped translation exists, stay on current path (no homepage redirect).
4. Every bilingual guide pair must be represented in:
   - metadata alternates on both pages
   - sitemap alternates
   - `URL_MAPPINGS`

## Validation checklist (before release)
- `LanguageSwitcher` on EN page opens matching TR path.
- `LanguageSwitcher` on TR page opens matching EN path.
- For EN-only pages, switch button keeps same path.
- `/sitemap.xml` includes alternates for true EN/TR pairs only.

## Implemented updates in this cycle
- Added guide pairs:
  - `/guides/best-mortgage-calculator-2026` <-> `/tr/rehberler/en-iyi-konut-kredisi-hesap-makinesi-2026`
  - `/guides/student-loans-monthly-payment-calculator-how-to` <-> `/tr/rehberler/ogrenim-kredisi-aylik-odeme-nasil-hesaplanir`
- Updated `getAlternateUrl()` fallback to `path` when translation is missing.

