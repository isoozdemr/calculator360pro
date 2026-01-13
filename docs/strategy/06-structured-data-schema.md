# Structured Data & Schema

**Status:** Active  
**Last Updated:** 2024  
**Priority:** High

## Executive Summary

Structured data (Schema.org markup), Calculator360Pro'nun Google arama sonuçlarında zengin sonuçlar (rich snippets) göstermesini ve daha iyi görünürlük kazanmasını sağlar. Bu doküman, tüm schema türlerinin implementasyonunu ve placement stratejisini detaylandırır.

## Schema Types Overview

### Implemented Schemas

1. **Calculator Schema** (WebApplication)
2. **FAQ Schema** (FAQPage)
3. **Breadcrumb Schema** (BreadcrumbList)
4. **WebApplication Schema** (Calculator-specific)
5. **Organization Schema**
6. **WebSite Schema**

## Calculator Schema (WebApplication)

### Purpose

- Identify calculator as a web application
- Enable rich results in search
- Provide structured information to Google

### Implementation

**Location:** Calculator pages (`/calculators/{category}/{slug}`)

**Schema Structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mortgage Calculator",
  "description": "Calculate your monthly mortgage payment...",
  "url": "https://calculator360pro.com/calculators/finance/mortgage-calculator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

**Current Implementation:**
- ✅ Basic WebApplication schema
- ⏳ AggregateRating (future - after reviews)
- ⏳ Screenshot (future)
- ⏳ Feature list (future)

### Placement

**Where:** In `<head>` section of calculator pages

**Implementation:**
```typescript
// components/SEO/SchemaMarkup.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(calculatorSchema),
  }}
/>
```

## FAQ Schema (FAQPage)

### Purpose

- Enable FAQ rich results
- Improve click-through rate
- Answer user questions directly in SERP

### Implementation

**Location:** Calculator pages with FAQ sections

**Schema Structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is monthly mortgage payment calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monthly mortgage payment is calculated using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]..."
      }
    }
  ]
}
```

**Requirements:**
- Minimum 3 questions per calculator
- Maximum 10 questions (Google limit for rich results)
- Questions should be user-focused
- Answers should be comprehensive (50+ words)

**Current Implementation:**
- ✅ FAQ schema for all calculators
- ✅ Dynamic generation from calculator definitions
- ✅ Validated with Google Rich Results Test

### Placement

**Where:** Same page as calculator, in `<head>` section

**Best Practices:**
- FAQ content must match visible FAQ on page
- Answers must be complete (not truncated)
- Use natural language
- Update when FAQ changes

## Breadcrumb Schema (BreadcrumbList)

### Purpose

- Show breadcrumb navigation in search results
- Improve user navigation
- Enhance site structure understanding

### Implementation

**Location:** All calculator and category pages

**Schema Structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://calculator360pro.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calculators",
      "item": "https://calculator360pro.com/calculators"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Finance",
      "item": "https://calculator360pro.com/calculators/finance"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Mortgage Calculator",
      "item": "https://calculator360pro.com/calculators/finance/mortgage-calculator"
    }
  ]
}
```

**Current Implementation:**
- ✅ Breadcrumb schema for all pages
- ✅ Dynamic generation based on URL structure
- ✅ Matches visible breadcrumb navigation

### Placement

**Where:** All pages with breadcrumb navigation

**Rules:**
- Must match visible breadcrumb
- Include all hierarchy levels
- Use absolute URLs
- Update when structure changes

## WebApplication Schema (Enhanced)

### Future Enhancements

**Screenshot:**
```json
{
  "@type": "WebApplication",
  "screenshot": "https://calculator360pro.com/screenshots/mortgage-calculator.png"
}
```

**Feature List:**
```json
{
  "@type": "WebApplication",
  "featureList": [
    "Calculate monthly payments",
    "Amortization schedule",
    "Extra payment calculator"
  ]
}
```

**Software Requirements:**
```json
{
  "@type": "WebApplication",
  "softwareRequirements": "Web browser",
  "browserRequirements": "Requires JavaScript. Requires HTML5."
}
```

## Organization Schema

### Purpose

- Establish brand identity
- Enable knowledge graph
- Build trust signals

### Implementation

**Location:** All pages (in root layout)

**Schema Structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Calculator360Pro",
  "url": "https://calculator360pro.com",
  "logo": "https://calculator360pro.com/logo.png",
  "sameAs": [
    "https://twitter.com/calculator360pro",
    "https://facebook.com/calculator360pro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@calculator360pro.com"
  }
}
```

**Current Implementation:**
- ✅ Basic Organization schema
- ⏳ Social media links (future)
- ⏳ Contact point (future)

### Placement

**Where:** Root layout (all pages)

**Best Practices:**
- Include on every page
- Keep information updated
- Add social media profiles when available

## WebSite Schema

### Purpose

- Enable site search box in search results
- Provide site-wide information
- Enhance brand presence

### Implementation

**Location:** Root layout (all pages)

**Schema Structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Calculator360Pro",
  "url": "https://calculator360pro.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://calculator360pro.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Current Implementation:**
- ✅ Basic WebSite schema
- ⏳ SearchAction (future - when search implemented)

### Placement

**Where:** Root layout (all pages)

## Schema Placement Strategy

### Page-Level Schemas

**Calculator Pages:**
1. WebApplication (calculator-specific)
2. FAQPage (if FAQs present)
3. BreadcrumbList
4. Organization (inherited from layout)
5. WebSite (inherited from layout)

**Category Pages:**
1. BreadcrumbList
2. Organization (inherited)
3. WebSite (inherited)

**Homepage:**
1. Organization
2. WebSite
3. BreadcrumbList (Home only)

### Implementation Pattern

```typescript
// app/calculators/[category]/[slug]/page.tsx
export default async function CalculatorPage({ params }) {
  const calculator = getCalculator(slug);
  
  const schemas = [
    generateCalculatorSchema(calculator),
    generateFAQSchema(calculator),
    generateBreadcrumbSchema(category, calculator),
  ].filter(Boolean);
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <CalculatorPage calculator={calculator} />
    </>
  );
}
```

## Schema Validation

### Testing Tools

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each schema type
   - Fix errors immediately

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validate structure
   - Check for warnings

3. **Google Search Console**
   - Monitor rich results performance
   - Check for schema errors
   - Track rich result impressions

### Validation Checklist

**⚠️ MANDATORY: All new calculators MUST have schema markup implemented and validated**

**Per Calculator:**
- [ ] **⚠️ MANDATORY: WebApplication schema implemented and valid**
- [ ] **⚠️ MANDATORY: FAQ schema implemented and valid (if FAQs present)**
- [ ] **⚠️ MANDATORY: Breadcrumb schema implemented and valid**
- [ ] **⚠️ MANDATORY: No schema errors in Google Rich Results Test**
- [ ] **⚠️ MANDATORY: Schema matches visible page content exactly**
- [ ] Schema helps Google understand and display calculator in search results
- [ ] Schema optimized to improve Google search rankings

**Site-Wide:**
- [ ] Organization schema on all pages
- [ ] WebSite schema on all pages
- [ ] No duplicate schemas
- [ ] All schemas validated

## Schema Best Practices

### Content Matching

**Rule:** Schema content must match visible page content

**Examples:**
- FAQ schema questions = visible FAQ questions
- Breadcrumb schema = visible breadcrumb
- Description in schema = meta description

### Completeness

**Rule:** Include all required properties

**WebApplication Required:**
- @context
- @type
- name
- url

**FAQPage Required:**
- @context
- @type
- mainEntity (with Question and Answer)

### Accuracy

**Rule:** Keep schema data accurate and updated

**Maintenance:**
- Update when calculator changes
- Update when FAQ changes
- Update when URL structure changes
- Regular validation audits

## Action Items

### Immediate

- [ ] Validate all existing schemas
- [ ] Fix any schema errors
- [ ] Test with Rich Results Test
- [ ] Document schema generation process

### Short-term

- [ ] Add AggregateRating schema (after reviews)
- [ ] Implement SearchAction schema
- [ ] Add social media to Organization schema
- [ ] Create schema validation automation

### Medium-term

- [ ] Add Screenshot to WebApplication
- [ ] Add FeatureList to WebApplication
- [ ] Implement HowTo schema (for guides)
- [ ] Add VideoObject schema (if videos added)

## Risk Assessment

### High Risk

1. **Invalid Schema**
   - Risk: Rich results not shown, errors
   - Mitigation: Regular validation, testing

2. **Content Mismatch**
   - Risk: Google penalty, trust issues
   - Mitigation: Ensure schema matches content

### Medium Risk

1. **Missing Schemas**
   - Risk: Missed rich result opportunities
   - Mitigation: Comprehensive schema coverage

2. **Outdated Schemas**
   - Risk: Inaccurate information
   - Mitigation: Regular updates, monitoring

## Success Metrics

- Rich result impressions: 50%+ of total impressions (Month 6)
- FAQ rich results: 30%+ of calculator pages (Month 3)
- Breadcrumb rich results: 100% of pages (Month 1)
- Schema errors: 0 (ongoing)

