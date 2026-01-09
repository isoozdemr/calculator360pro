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

### URL Structure

**Pattern:** `/calculators/{category}/{slug}`

**Examples:**
- `/calculators/finance/mortgage-calculator`
- `/calculators/health/bmi-calculator`
- `/calculators/education/gpa-calculator`
- `/calculators/math/percentage-calculator`
- `/calculators/date-time/age-calculator`

### Slug Rules

1. **Format:** kebab-case (lowercase, hyphens)
2. **Length:** 3-50 characters
3. **Keywords:** Include primary keyword
4. **Uniqueness:** Must be unique across all calculators
5. **SEO:** Descriptive, user-friendly

**Good Examples:**
- `mortgage-calculator`
- `bmi-calculator`
- `compound-interest-calculator`
- `percentage-increase-calculator`

**Bad Examples:**
- `calc1`, `calc2` (not descriptive)
- `mortgage_calculator` (underscores)
- `MortgageCalculator` (camelCase)
- `mortgage-calc` (abbreviation loses keyword)

### Category Slug Rules

1. **Format:** Single word or kebab-case
2. **Consistency:** Match category name
3. **SEO:** Include primary category keyword

**Current Categories:**
- `finance`
- `health`
- `education`
- `math`
- `date-time`

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

**Per Calculator:**
- Minimum 300 words of unique content
- FAQ section (3-5 questions)
- How-to guide or explanation
- Related calculators section
- Schema markup

**Per Category:**
- Category description (200+ words)
- Category-specific tips/guides
- Featured calculators section
- Category FAQ (if applicable)

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
- [ ] Page route created (if needed)
- [ ] Schema markup implemented
- [ ] Internal links updated
- [ ] Content written
- [ ] SEO optimization
- [ ] Testing

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

**Minimum Requirements:**
- 300+ words of unique content
- 3+ FAQ items
- Calculator explanation/guide
- Related calculators section

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

