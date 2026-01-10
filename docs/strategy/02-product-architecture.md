# Product & Information Architecture

**Status:** Active  
**Last Updated:** 2024  
**Priority:** Critical

## Executive Summary

Product architecture, Calculator360Pro'nun ölçeklenebilir, SEO-friendly ve kullanıcı dostu bir platform olmasını sağlar. Bu doküman, calculator kategorileri, URL yapısı, internal linking stratejisi ve expansion sistemi için net kurallar tanımlar.

## Category Hierarchy

### Primary Categories

1. **Finance** (`/calculators/finance/`)
   - Mortgage & Loans
   - Investment & Savings
   - Tax & Salary
   - Currency & Conversion

2. **Health** (`/calculators/health/`)
   - Body Metrics (BMI, Body Fat)
   - Nutrition (Calorie, Macro)
   - Fitness (BMR, TDEE)

3. **Education** (`/calculators/education/`)
   - Academic (GPA, Grade)
   - Test Prep (SAT, ACT)
   - Study Tools

4. **Math** (`/calculators/math/`)
   - Basic (Percentage, Fraction)
   - Scientific
   - Statistics
   - Geometry

5. **Date & Time** (`/calculators/date-time/`)
   - Age & Birthday
   - Date Calculations
   - Time Zone

### Subcategory Structure (Future)

```
Finance/
  ├── mortgage/
  ├── loans/
  ├── investment/
  └── tax/

Health/
  ├── body-metrics/
  ├── nutrition/
  └── fitness/

Math/
  ├── basic/
  ├── scientific/
  └── statistics/
```

## URL & Slug Conventions

### ⚠️ CRITICAL: URL Structure is IMMUTABLE

**URL structure MUST NEVER change once established. Changing URLs breaks SEO, external links, and user bookmarks.**

**See [URL_STANDARDS.md](../URL_STANDARDS.md) for complete documentation.**

### URL Structure

**Pattern:** `/calculators/{category-slug}/{calculator-slug}`

**Examples:**
- `/calculators/finance/mortgage-calculator`
- `/calculators/health/bmi-calculator`
- `/calculators/education/gpa-calculator`
- `/calculators/math/percentage-calculator`
- `/calculators/date-time/age-calculator` ✅ (NOT `/calculators/dateTime/age-calculator`)

### ⚠️ CRITICAL: Category Key vs Category Slug

**IMPORTANT DISTINCTION:**

1. **Category Key (Internal):**
   - Format: `camelCase` (e.g., `dateTime`, `finance`, `health`)
   - Used in: Code, TypeScript types, calculator definitions
   - Location: `CALCULATOR_CATEGORIES` object keys

2. **Category Slug (URL):**
   - Format: `kebab-case` (e.g., `date-time`, `finance`, `health`)
   - Used in: All URLs, links, navigation, sitemap
   - Location: `CALCULATOR_CATEGORIES[].slug` property

**⚠️ MANDATORY: Always use helper functions:**
```typescript
import { getCategorySlugByKey, getCategoryKeyBySlug } from "@/lib/constants";

// Convert key to slug for URLs
const url = `/calculators/${getCategorySlugByKey(calculator.category)}/${calculator.slug}`;

// Convert slug to key for filtering
const categoryKey = getCategoryKeyBySlug(urlSlug);
```

**❌ NEVER do this:**
```typescript
// WRONG - Using category key directly in URL
const url = `/calculators/${calculator.category}/${calculator.slug}`;
```

### Slug Rules

1. **Format:** kebab-case (lowercase, hyphens)
2. **Length:** 3-50 characters
3. **Keywords:** Include primary keyword
4. **Uniqueness:** Must be unique across all calculators
5. **SEO:** Descriptive, user-friendly
6. **Stability:** Once set, NEVER change

**Good Examples:**
- `mortgage-calculator`
- `bmi-calculator`
- `compound-interest-calculator`
- `percentage-increase-calculator`
- `date-time` (category slug)

**Bad Examples:**
- `calc1`, `calc2` (not descriptive)
- `mortgage_calculator` (underscores)
- `MortgageCalculator` (camelCase - use for keys, not URLs)
- `mortgage-calc` (abbreviation loses keyword)
- `dateTime` (camelCase - use for keys, not URLs)

### Category Slug Rules

1. **Format:** Single word or kebab-case
2. **Consistency:** Match category name
3. **SEO:** Include primary category keyword
4. **Stability:** Once set, NEVER change

**Current Categories:**
- `finance` (key: `finance`, slug: `finance`)
- `health` (key: `health`, slug: `health`)
- `education` (key: `education`, slug: `education`)
- `math` (key: `math`, slug: `math`)
- `date-time` (key: `dateTime`, slug: `date-time`) ⚠️ Note the difference!

## Internal Linking Strategy

### Topical Authority Structure

```
Homepage
  ├── Category Pages (Finance, Health, etc.)
  │   ├── Calculator Pages
  │   │   ├── Related Calculators (Same Category)
  │   │   └── Related Calculators (Cross-Category)
  │   └── Subcategory Pages (Future)
  └── Blog Posts
      └── Calculator Pages (Contextual)
```

### Linking Rules

#### 1. Category to Calculators

**Pattern:** Category page links to all calculators in that category

**Implementation:**
- Grid/list view of all calculators
- Alphabetical or popularity-based sorting
- 3-6 calculators per row (responsive)

#### 2. Calculator to Related Calculators

**Rules:**
- Show 3-6 related calculators
- Priority order:
  1. Same category, high relevance
  2. Cross-category, high relevance
  3. Same category, medium relevance
  4. Popular calculators (fallback)

**Relevance Factors:**
- Shared keywords
- Similar use cases
- User journey patterns
- Category proximity

#### 3. Calculator to Category

**Pattern:** Breadcrumb navigation + category link

**Implementation:**
- Breadcrumb: Home > Calculators > Category > Calculator
- "View all [Category] calculators" link
- Category name in calculator description

#### 4. Homepage to Categories

**Pattern:** Featured categories with calculator previews

**Implementation:**
- Category cards with 3-4 featured calculators
- "View all" link to category page
- Category description

### Internal Link Density

**Per Calculator Page:**
- Minimum: 3 internal links
- Maximum: 10 internal links
- Optimal: 5-7 internal links

**Link Types:**
1. Related calculators (3-6 links)
2. Category page (1 link)
3. Homepage (breadcrumb, 1 link)
4. Blog posts (contextual, 0-2 links)

### Anchor Text Strategy

**Rules:**
1. **Natural:** Use descriptive, natural anchor text
2. **Variation:** Vary anchor text (avoid exact match)
3. **Context:** Anchor text should match link context
4. **Keywords:** Include relevant keywords naturally

**Good Examples:**
- "Calculate your BMI with our BMI calculator"
- "See also: Mortgage calculator and Loan calculator"
- "Explore more finance calculators"

**Bad Examples:**
- "Click here" (not descriptive)
- "BMI calculator BMI calculator BMI calculator" (over-optimized)
- Exact match only (unnatural)

## Topical Authority Structure

### Cluster Strategy

**Primary Clusters:**

1. **Finance Cluster**
   - Core: Mortgage Calculator
   - Supporting: Loan, Compound Interest, Investment
   - Related: Tax, Salary, Budget
   - **Authority Goal:** Become top resource for financial calculations

2. **Health Cluster**
   - Core: BMI Calculator
   - Supporting: Body Fat, BMR, TDEE
   - Related: Calorie, Macro, Fitness
   - **Authority Goal:** Comprehensive health calculation resource

3. **Education Cluster**
   - Core: GPA Calculator
   - Supporting: Grade, Test Score
   - Related: Percentage, Statistics
   - **Authority Goal:** Student-focused calculation tools

### Content Depth Requirements

**🎯 PRIMARY GOALS:**
- **Google SEO:** Achieve top 10 rankings in Google organic search results
- **AdSense Compliance:** Follow all Google AdSense policies and guidelines
- **Organic Search:** Maximize organic traffic through deep SEO optimization
- **Keyword Optimization:** Target the most searched keywords naturally throughout content

**Per Calculator:**
- **⚠️ MANDATORY: Minimum 2000+ words** of unique, comprehensive, deep SEO-optimized content
- **Deep SEO Optimization:** Content must be optimized for Google's ranking algorithms
- **AdSense Compliant:** Content must follow all Google AdSense policies
- **High-Volume Keywords:** Content must include the most searched keywords
- **Top 10 Ranking Goal:** Content must be designed to rank in Google's top 10 search results
- FAQ section (3-5 questions)
- How-to guide or explanation
- Related calculators section
- Schema markup

**Per Category:**
- **⚠️ MANDATORY: Minimum 2000+ words** of unique, comprehensive, deep SEO-optimized content (REQUIRED for all category pages)
- **Deep SEO Optimization:** Content must be optimized for Google's ranking algorithms
- **AdSense Compliant:** Content must follow all Google AdSense policies
- **High-Volume Keywords:** Content must include the most searched keywords
- **Top 10 Ranking Goal:** Content must be designed to rank in Google's top 10 search results
- Category description (comprehensive, 2000+ words)
- Category-specific tips/guides
- Featured calculators section
- Category FAQ (if applicable)
- Detailed use cases and real-world examples
- Why choose our calculators section
- Best practices and tips

**⚠️ MANDATORY CATEGORY PAGE CONTENT REQUIREMENT:**
- **All category pages (existing and new) MUST have minimum 2000+ words** of unique, comprehensive, deep SEO-optimized content
- **Deep SEO Optimization:** Content must be optimized for Google's ranking algorithms with natural keyword integration
- **AdSense Compliance:** Content must follow all Google AdSense policies and guidelines
- **High-Volume Keywords:** Content must include the most searched keywords related to the category topic
- **Organic Search Focus:** Content structure and optimization must target organic search visibility
- **Top 10 Ranking Goal:** Content must be designed to rank in Google's top 10 search results
- Content must be deep, comprehensive, and provide genuine value
- Content must follow the same quality standards as calculator pages (DEEP & COMPREHENSIVE, UNIQUE & ORIGINAL, RANKING-OPTIMIZED, USER-FIRST, E-E-A-T signals)
- This requirement applies to ALL category pages without exception

## Expansion System

### New Calculator Addition Process

#### Step 1: Validation

**Criteria:**
- [ ] Search volume: 10K+ monthly (US/UK/EU combined)
- [ ] Competition: DR < 60
- [ ] RPM potential: $3+ (or strategic value)
- [ ] User demand: Requests or market research
- [ ] Technical feasibility: Can be built with current stack

#### Step 2: Planning

**Documentation:**
- Calculator definition (name, slug, category)
- Keywords list (primary + secondary)
- Meta description
- FAQ questions (3-5)
- Related calculators
- Implementation timeline

#### Step 3: Implementation

**Checklist:**
- [ ] Calculator component created
- [ ] Calculator definition added to `definitions.ts`
  - [ ] Category uses KEY (camelCase), not slug
  - [ ] Slug uses kebab-case
- [ ] Page route created (if needed)
- [ ] Schema markup implemented
- [ ] Internal links updated
  - [ ] ⚠️ All links use `getCategorySlugByKey()` helper function
  - [ ] No direct `calculator.category` in URLs
- [ ] Content written
- [ ] SEO optimization
- [ ] Testing
  - [ ] All category links work (Navigation, Footer, Homepage)
  - [ ] Calculator appears in correct category page
  - [ ] No 404 errors
  - [ ] URLs use correct slugs (kebab-case)

#### Step 4: Launch

**Pre-launch:**
- [ ] Content review
- [ ] SEO audit
- [ ] Performance test
- [ ] Mobile responsiveness check

**Post-launch:**
- [ ] Monitor indexing
- [ ] Track rankings
- [ ] Collect user feedback
- [ ] Iterate based on data

### SEO Risk Minimization

#### Duplicate Content Prevention

**Rules:**
1. **Unique Content:** Each calculator must have unique description, FAQ, and content
2. **Value Addition:** Each calculator must provide unique value
3. **Template Variation:** Programmatic calculators must have unique content sections

**Implementation:**
- Content templates with variable sections
- Unique FAQ per calculator
- Custom descriptions (not auto-generated)
- Unique use cases and examples

#### Thin Content Prevention

**Minimum Requirements (Calculators):**
- **⚠️ MANDATORY: Minimum 2000+ words** of unique, comprehensive, deep SEO-optimized content
- **Deep SEO Optimization:** Optimized for Google's ranking algorithms
- **AdSense Compliant:** Follows all Google AdSense policies
- **High-Volume Keywords:** Includes the most searched keywords
- **Top 10 Ranking Goal:** Designed to rank in Google's top 10 search results
- 3+ FAQ items
- Calculator explanation/guide
- Related calculators section

**Minimum Requirements (Category Pages):**
- **⚠️ MANDATORY: Minimum 2000+ words** of unique, comprehensive, deep SEO-optimized content
- **Deep SEO Optimization:** Optimized for Google's ranking algorithms
- **AdSense Compliant:** Follows all Google AdSense policies
- **High-Volume Keywords:** Includes the most searched keywords
- **Top 10 Ranking Goal:** Designed to rank in Google's top 10 search results
- Category description (comprehensive)
- Category-specific tips/guides
- Featured calculators section
- Use cases and examples

**Quality Checks:**
- Readability score
- User value assessment
- SEO value assessment

#### Over-Optimization Prevention

**Rules:**
1. **Natural Keywords:** Keywords used naturally, not stuffed
2. **Variation:** Use keyword variations and synonyms
3. **User-First:** Content written for users, not search engines
4. **E-E-A-T:** Demonstrate expertise, experience, authoritativeness, trustworthiness

## Calculator Definition Structure

### TypeScript Interface

```typescript
interface CalculatorDefinition {
  id: string;                    // Unique identifier
  name: string;                  // Display name
  slug: string;                  // URL slug
  category: CalculatorCategory;   // Primary category
  description: string;           // Short description (150 chars)
  keywords: string[];            // SEO keywords
  metaDescription: string;       // Meta description (155 chars)
  faqs: FAQ[];                   // FAQ items
  relatedCalculators?: string[]; // Related calculator IDs
  priority: 'P0' | 'P1' | 'P2'; // Implementation priority
  layer: '1' | '2';              // Traffic layer
  searchVolume?: number;         // Monthly search volume
  competition?: number;          // Domain rating
  rpmPotential?: number;         // AdSense RPM estimate
}
```

### Example

```typescript
{
  id: "mortgage-calculator",
  name: "Mortgage Calculator",
  slug: "mortgage-calculator",
  category: "finance",
  description: "Calculate your monthly mortgage payment, total interest, and amortization schedule.",
  keywords: ["mortgage calculator", "home loan calculator", "mortgage payment"],
  metaDescription: "Free mortgage calculator to calculate monthly payments, total interest, and amortization schedule.",
  faqs: [
    {
      question: "How is monthly mortgage payment calculated?",
      answer: "Monthly mortgage payment is calculated using..."
    }
  ],
  relatedCalculators: ["loan-calculator", "compound-interest-calculator"],
  priority: "P0",
  layer: "1",
  searchVolume: 450000,
  competition: 50,
  rpmPotential: 10
}
```

## Action Items

### Immediate

- [ ] Finalize category structure
- [ ] Document all URL/slug conventions
- [ ] Create calculator definition template
- [ ] Set up internal linking guidelines

### Short-term

- [ ] Implement related calculators algorithm
- [ ] Create category pages with proper linking
- [ ] Set up topical authority clusters
- [ ] Document expansion process

### Medium-term

- [ ] Add subcategory support
- [ ] Implement advanced internal linking
- [ ] Create content templates for programmatic scaling
- [ ] Build calculator recommendation engine

## Risk Assessment

### High Risk

1. **URL Structure Changes**
   - Risk: Breaking existing links, SEO loss
   - Mitigation: Plan structure carefully, use redirects if needed

2. **Duplicate Content**
   - Risk: Google penalty
   - Mitigation: Strict content uniqueness rules

### Medium Risk

1. **Over-Linking**
   - Risk: Appearing spammy
   - Mitigation: Natural linking, user-focused

2. **Category Confusion**
   - Risk: Poor user experience
   - Mitigation: Clear category definitions, user testing

## Success Metrics

- Internal link click-through rate: 15%+
- Average pages per session: 2.5+
- Category page engagement: 60%+ bounce rate
- Calculator discovery rate: 40%+ via internal links

