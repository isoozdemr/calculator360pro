# URL Standards & Slug Management

**Status:** Critical  
**Last Updated:** 2024  
**Priority:** Must Follow

## ⚠️ CRITICAL RULE: NEVER CHANGE URL STRUCTURE

**This is a CRITICAL rule that MUST be followed for all new features, categories, content, blog posts, or any new pages.**

### Core Principle

**URL structure is IMMUTABLE once established. Changing URLs breaks:**
- SEO rankings
- External links
- User bookmarks
- Search engine indexing
- Internal navigation

## URL Structure Standards

### Current URL Pattern

```
/calculators/{category-slug}/{calculator-slug}
```

**Examples:**
- `/calculators/finance/mortgage-calculator`
- `/calculators/health/bmi-calculator`
- `/calculators/date-time/age-calculator` ✅ (NOT `/calculators/dateTime/age-calculator`)

### Category Slug vs Category Key

**CRITICAL DISTINCTION:**

1. **Category Key (Internal):** Used in code, TypeScript types, calculator definitions
   - Format: `camelCase` (e.g., `dateTime`, `finance`, `health`)
   - Location: `lib/constants.ts` → `CALCULATOR_CATEGORIES` object keys
   - Usage: Internal filtering, type checking, data structures

2. **Category Slug (URL):** Used in URLs, links, navigation
   - Format: `kebab-case` (e.g., `date-time`, `finance`, `health`)
   - Location: `lib/constants.ts` → `CALCULATOR_CATEGORIES[].slug` property
   - Usage: All URLs, links, sitemap, navigation

### ⚠️ MANDATORY: Always Use Helper Functions

**NEVER directly use `calculator.category` or category keys in URLs!**

**ALWAYS use helper functions:**

```typescript
// ✅ CORRECT - Use helper functions
import { getCategorySlugByKey, getCategoryKeyBySlug } from "@/lib/constants";

// Convert category key to slug for URLs
const url = `/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`;

// Convert URL slug to category key for filtering
const categoryKey = getCategoryKeyBySlug(urlSlug);
```

```typescript
// ❌ WRONG - Never do this
const url = `/calculators/${calculator.category}/${calculator.slug}`; // WRONG!
const filtered = calculators.filter(c => c.category === categorySlug); // WRONG!
```

## Helper Functions

### `getCategorySlugByKey(key: CalculatorCategory): string`

**Purpose:** Convert internal category key to URL slug

**Usage:**
- All URL generation
- All link creation
- Sitemap generation
- Schema markup URLs

**Example:**
```typescript
getCategorySlugByKey("dateTime") // Returns: "date-time"
getCategorySlugByKey("finance") // Returns: "finance"
```

### `getCategoryKeyBySlug(slug: string): CalculatorCategory | undefined`

**Purpose:** Convert URL slug to internal category key

**Usage:**
- URL parameter parsing
- Category filtering
- Data lookups

**Example:**
```typescript
getCategoryKeyBySlug("date-time") // Returns: "dateTime"
getCategoryKeyBySlug("finance") // Returns: "finance"
```

## Adding New Categories

### ⚠️ CRITICAL CHECKLIST

When adding a new category:

1. **Add to `CALCULATOR_CATEGORIES` in `lib/constants.ts`:**
   ```typescript
   newCategory: {
     name: "New Category",
     slug: "new-category", // ✅ MUST be kebab-case
     description: "...",
   }
   ```

2. **Category Key (object key):**
   - Use `camelCase` (e.g., `newCategory`)
   - This is the internal identifier

3. **Category Slug (slug property):**
   - Use `kebab-case` (e.g., `new-category`)
   - This is what appears in URLs
   - **MUST be different from key if key is camelCase**

4. **Update all places that use categories:**
   - ✅ Navigation (uses helper functions - automatic)
   - ✅ Footer (uses helper functions - automatic)
   - ✅ Sitemap (add category URL manually)
   - ✅ Category page content (if needed)

5. **Test all links:**
   - Navigation dropdown
   - Footer links
   - Homepage category cards
   - Calculator links
   - Breadcrumbs

## Adding New Calculators

### ⚠️ CRITICAL CHECKLIST

When adding a new calculator:

1. **Set category in calculator definition:**
   ```typescript
   {
     category: "dateTime", // ✅ Use category KEY (camelCase)
     slug: "new-calculator", // ✅ Use kebab-case
   }
   ```

2. **⚠️ MANDATORY: Create calculator component:**
   - **Every new calculator MUST have its own dedicated component**
   - Generic/fallback components cannot be used
   - Component must be designed specifically for the calculator's unique formula and inputs
   - **⚠️ MANDATORY: Component must work with the most current and accurate data**
     - Formulas must be current and accurate (industry standard)
     - Input validation must be in correct ranges
     - Calculations must be mathematically correct
     - Results must be reliable for user satisfaction
     - Old or incorrect formulas cannot be used
   - Component must be registered in `components/calculators/CalculatorPage.tsx`

3. **URLs are automatically generated correctly:**
   - Helper functions handle key → slug conversion
   - No manual URL construction needed

4. **Verify calculator appears in:**
   - Category page (`/calculators/{category-slug}`)
   - Navigation dropdown
   - Homepage category section
   - All calculators page

## Adding New Pages

### URL Patterns

**Established patterns (DO NOT CHANGE):**
- `/` - Homepage
- `/calculators` - All calculators listing
- `/calculators/{category-slug}` - Category page
- `/calculators/{category-slug}/{calculator-slug}` - Calculator page
- `/blog` - Blog listing
- `/blog/{post-slug}` - Blog post
- `/about` - About page
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/search` - Search page

**For new pages:**
- Use `kebab-case` for all slugs
- Keep URLs short and descriptive
- Follow existing patterns
- Document in this file

## Common Mistakes to Avoid

### ❌ MISTAKE 1: Using Category Key in URLs

```typescript
// ❌ WRONG
href={`/calculators/${calculator.category}/${calculator.slug}`}
// If calculator.category is "dateTime", this creates: /calculators/dateTime/age-calculator
// This is WRONG and will 404!
```

```typescript
// ✅ CORRECT
href={`/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`}
// Creates: /calculators/date-time/age-calculator ✅
```

### ❌ MISTAKE 2: Filtering with Slug Instead of Key

```typescript
// ❌ WRONG
const filtered = calculators.filter(c => c.category === "date-time");
// This will never match because calculator.category is "dateTime" (key), not "date-time" (slug)
```

```typescript
// ✅ CORRECT
const categoryKey = getCategoryKeyBySlug("date-time"); // Returns "dateTime"
const filtered = calculators.filter(c => c.category === categoryKey);
```

### ❌ MISTAKE 3: Changing Existing URLs

```typescript
// ❌ NEVER DO THIS
// Changing "date-time" to "dateTime" or "date_and_time" breaks all existing links!
```

**If URL change is absolutely necessary:**
1. Set up 301 redirects
2. Update sitemap
3. Update all internal links
4. Monitor 404 errors
5. Document the change

## Testing Checklist

Before deploying any changes:

- [ ] All category links work (Navigation, Footer, Homepage)
- [ ] All calculator links use correct slugs
- [ ] Category pages load correctly
- [ ] Calculator pages load correctly
- [ ] Breadcrumbs use correct slugs
- [ ] Sitemap uses correct slugs
- [ ] Schema markup uses correct URLs
- [ ] Search results link correctly
- [ ] No 404 errors in navigation
- [ ] No 404 errors in footer
- [ ] No 404 errors on homepage

## Files That MUST Use Helper Functions

**Always use helper functions in these files:**

1. **Navigation Components:**
   - `components/layout/Navigation.tsx`
   - `components/layout/Footer.tsx`

2. **Page Components:**
   - `app/page.tsx` (Homepage)
   - `app/calculators/page.tsx` (All calculators)
   - `app/calculators/[category]/page.tsx` (Category page)
   - `app/calculators/[category]/[slug]/page.tsx` (Calculator page)
   - `app/search/page.tsx`

3. **SEO Components:**
   - `components/SEO/Breadcrumbs.tsx`
   - `components/SEO/MetaTags.tsx`
   - `components/SEO/SchemaMarkup.tsx`
   - `lib/seo/schema.ts`

4. **Sitemap & Metadata:**
   - `app/sitemap.ts`
   - `app/robots.ts`

5. **Any new files that generate URLs or filter by category**

## Migration Notes

**If you find code that doesn't use helper functions:**

1. Identify the file
2. Replace direct category usage with helper functions
3. Test thoroughly
4. Update this document if needed

## Questions?

**If unsure about URL structure:**
1. Check this document first
2. Look at existing implementations
3. Use helper functions
4. Test before deploying
5. Document any new patterns

## Summary

**Remember:**
- ✅ Category Key (camelCase) = Internal code
- ✅ Category Slug (kebab-case) = URLs
- ✅ ALWAYS use helper functions
- ✅ NEVER change existing URLs
- ✅ TEST all links before deploying

**This is non-negotiable. URL structure stability is critical for SEO and user experience.**

