# Schema Validation Guide

Complete guide for validating schema markup using Google Rich Results Test and other tools.

## Overview

This guide covers:
- How to use Google Rich Results Test
- Schema validation checklist
- Common errors and solutions
- Best practices for schema markup
- Testing workflow

## Google Rich Results Test

### What is it?

Google Rich Results Test is a free tool that validates structured data (schema markup) on your pages. It helps ensure your schema is correctly formatted and eligible for rich results in Google Search.

**URL:** https://search.google.com/test/rich-results

### How to Use

1. **Enter URL or Code:**
   - **URL Method:** Paste the full URL of your calculator page
   - **Code Method:** Paste the HTML source code (useful for local testing)

2. **Click "Test URL" or "Test Code"**

3. **Review Results:**
   - ✅ **Valid:** Schema is correctly formatted
   - ⚠️ **Warnings:** Schema is valid but could be improved
   - ❌ **Errors:** Schema has issues that need to be fixed

4. **Check Rich Results Preview:**
   - See how your page might appear in search results
   - Verify all schema types are detected

### Test URLs

Run the test URL generator script to get all calculator test URLs:

```bash
node scripts/generate-schema-test-urls.js
```

This generates:
- `docs/SCHEMA_TEST_CHECKLIST.md` - Complete checklist with test links
- `docs/SCHEMA_QUICK_TEST_LINKS.md` - Quick access links
- `docs/schema-test-urls.json` - JSON file with all URLs

## Schema Types to Validate

### 1. WebApplication Schema

**Required Fields:**
- `@context`: "https://schema.org"
- `@type`: "WebApplication"
- `name`: Calculator name
- `description`: Calculator description
- `url`: Full URL to calculator page
- `applicationCategory`: "UtilityApplication"
- `operatingSystem`: "Web"
- `offers`: Object with:
  - `@type`: "Offer"
  - `price`: "0"
  - `priceCurrency`: "USD"

**Validation Checklist:**
- [ ] All required fields are present
- [ ] `name` matches calculator name exactly
- [ ] `description` matches calculator description exactly
- [ ] `url` is correct and accessible
- [ ] `applicationCategory` is "UtilityApplication"
- [ ] `operatingSystem` is "Web"
- [ ] `offers.price` is "0" (free calculator)
- [ ] `offers.priceCurrency` is "USD"

### 2. FAQPage Schema

**Required Fields:**
- `@context`: "https://schema.org"
- `@type`: "FAQPage"
- `mainEntity`: Array of FAQ items, each with:
  - `@type`: "Question"
  - `name`: FAQ question
  - `acceptedAnswer`: Object with:
    - `@type`: "Answer"
    - `text`: FAQ answer (40-60 words for featured snippets)

**Validation Checklist:**
- [ ] Schema is only present if calculator has FAQs
- [ ] All required fields are present
- [ ] Each FAQ has question and answer
- [ ] FAQ count matches calculator definition
- [ ] Questions match calculator FAQs exactly
- [ ] Answers match calculator FAQs exactly
- [ ] Answers are 40-60 words (optimized for featured snippets)

**Best Practices:**
- Minimum 3 FAQs per calculator
- Answers should be comprehensive but concise
- Use natural language, not keyword stuffing
- Answer the question directly in the first sentence

### 3. BreadcrumbList Schema

**Required Fields:**
- `@context`: "https://schema.org"
- `@type`: "BreadcrumbList"
- `itemListElement`: Array with 4 items:
  1. Home (position: 1)
  2. Calculators (position: 2)
  3. Category (position: 3)
  4. Calculator (position: 4)

Each item must have:
- `@type`: "ListItem"
- `position`: Number (1, 2, 3, 4)
- `name`: Display name
- `item`: Full URL

**Validation Checklist:**
- [ ] Exactly 4 breadcrumb items
- [ ] Positions are sequential (1, 2, 3, 4)
- [ ] First item is "Home" with site URL
- [ ] Second item is "Calculators" with `/calculators` URL
- [ ] Third item is category name with category URL
- [ ] Fourth item is calculator name with calculator URL
- [ ] All URLs are valid and accessible
- [ ] Category slug uses `getCategorySlugByKey` helper

## Common Errors and Solutions

### Error: "Missing required field"

**Cause:** Required schema field is missing or null.

**Solution:**
1. Check schema generation function in `lib/seo/schema.ts`
2. Verify calculator definition has all required fields
3. Ensure schema generation is called correctly in `SchemaMarkup` component

**Example:**
```typescript
// ❌ Missing name field
{
  "@type": "WebApplication",
  "description": "..."
}

// ✅ Correct
{
  "@type": "WebApplication",
  "name": "Calculator Name",
  "description": "..."
}
```

### Error: "Invalid URL"

**Cause:** URL format is incorrect or uses wrong category slug.

**Solution:**
1. Verify `getCategorySlugByKey` is used for URL generation
2. Check category slug mapping in `lib/constants.ts`
3. Ensure URL follows pattern: `/calculators/[category-slug]/[calculator-slug]`

**Example:**
```typescript
// ❌ Wrong - uses category key instead of slug
url: `${SITE_URL}/calculators/${calculator.category}/${calculator.slug}`

// ✅ Correct - uses getCategorySlugByKey
url: `${SITE_URL}/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`
```

### Error: "Schema content doesn't match page content"

**Cause:** Schema fields don't match visible page content.

**Solution:**
1. Verify schema uses calculator definition fields directly
2. Check that name and description match exactly
3. Ensure FAQ questions/answers match page content

**Example:**
```typescript
// ❌ Wrong - hardcoded values
name: "Calculator",
description: "A calculator"

// ✅ Correct - uses calculator definition
name: calculator.name,
description: calculator.description
```

### Warning: "FAQ answer too short/long"

**Cause:** FAQ answer is not optimized for featured snippets (40-60 words).

**Solution:**
1. Rewrite FAQ answer to be 40-60 words
2. Answer the question directly in first sentence
3. Provide comprehensive but concise information

**Example:**
```typescript
// ❌ Too short (10 words)
answer: "BMI is calculated by dividing weight by height squared."

// ✅ Optimized (45 words)
answer: "BMI (Body Mass Index) is calculated by dividing weight in kilograms by height in meters squared (kg/m²). It provides a general indicator of body fat based on height and weight. A healthy BMI range is typically between 18.5 and 24.9, though it may not be accurate for athletes with high muscle mass."
```

### Warning: "Missing recommended field"

**Cause:** Optional but recommended schema field is missing.

**Solution:**
1. Add recommended fields to improve rich results eligibility
2. Check Google's documentation for recommended fields
3. Balance between completeness and performance

## Validation Workflow

### Step 1: Run Validation Scripts

Before testing with Google Rich Results Test, run local validation scripts:

```bash
# Validate schema structure
npm run validate:schema

# Validate schema content matching
node scripts/validate-schema-content-matching.js

# Generate test URLs
node scripts/generate-schema-test-urls.js
```

### Step 2: Test with Google Rich Results Test

1. Open Google Rich Results Test: https://search.google.com/test/rich-results
2. For each calculator:
   - Enter the calculator page URL
   - Click "Test URL"
   - Review results for errors and warnings
   - Check rich results preview

### Step 3: Fix Issues

1. **Fix Errors First:**
   - Errors prevent rich results from showing
   - Fix all errors before optimizing warnings

2. **Optimize Warnings:**
   - Warnings don't prevent rich results but can improve them
   - Address warnings after fixing errors

3. **Re-test:**
   - Re-run validation scripts
   - Re-test with Google Rich Results Test
   - Verify all issues are resolved

### Step 4: Document Results

Update the test checklist:
- Mark calculators as ✅ (passed) or ❌ (failed)
- Note any issues and solutions
- Document any manual fixes needed

## Best Practices

### 1. Always Use Helper Functions

**For URLs:**
```typescript
// ✅ Correct
const url = `${SITE_URL}/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`;

// ❌ Wrong
const url = `${SITE_URL}/calculators/${calculator.category}/${calculator.slug}`;
```

### 2. Match Content Exactly

Schema content must match page content exactly:
- Name must match calculator name
- Description must match calculator description
- FAQs must match page FAQs

### 3. Optimize for Featured Snippets

FAQ answers should be:
- 40-60 words (optimal length)
- Answer question directly in first sentence
- Comprehensive but concise
- Natural language, not keyword stuffing

### 4. Validate Regularly

- Run validation scripts before deploying
- Test with Google Rich Results Test after changes
- Monitor Google Search Console for schema errors

### 5. Keep Schemas Updated

- Update schemas when calculator definitions change
- Remove deprecated fields
- Add new recommended fields as Google updates guidelines

## Testing Tools

### 1. Google Rich Results Test
- **URL:** https://search.google.com/test/rich-results
- **Use for:** Validating schema markup
- **Best for:** Production URLs

### 2. Schema.org Validator
- **URL:** https://validator.schema.org/
- **Use for:** Validating schema structure
- **Best for:** Code validation

### 3. Google Search Console
- **URL:** https://search.google.com/search-console
- **Use for:** Monitoring schema errors and rich results performance
- **Best for:** Ongoing monitoring

### 4. Local Validation Scripts
- **Use for:** Quick validation before deployment
- **Best for:** Development workflow

## Troubleshooting

### Schema Not Detected

**Possible Causes:**
1. Schema not included in page HTML
2. Schema has syntax errors
3. Page not accessible to Google

**Solutions:**
1. Check `SchemaMarkup` component is rendered
2. Verify schema generation functions are called
3. Check browser console for JavaScript errors
4. Ensure page is accessible (not behind authentication)

### Rich Results Not Showing

**Possible Causes:**
1. Schema has errors
2. Page not indexed by Google
3. Content doesn't meet quality guidelines

**Solutions:**
1. Fix all schema errors
2. Submit URL to Google Search Console
3. Ensure content is high quality and relevant
4. Wait for Google to re-crawl (can take days/weeks)

### Schema Errors After Deployment

**Possible Causes:**
1. Build process not including schemas
2. Environment variables not set
3. URL generation issues

**Solutions:**
1. Check build output includes schemas
2. Verify environment variables
3. Test URLs in production
4. Check server logs for errors

## Resources

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [WebApplication Schema](https://schema.org/WebApplication)
- [FAQPage Schema](https://schema.org/FAQPage)
- [BreadcrumbList Schema](https://schema.org/BreadcrumbList)

## Support

For issues or questions:
1. Check this guide first
2. Review validation script output
3. Test with Google Rich Results Test
4. Check Google Search Console for errors
5. Review schema generation code

## Last Updated

${new Date().toISOString().split('T')[0]}

