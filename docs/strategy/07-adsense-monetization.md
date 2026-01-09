# AdSense Monetization Strategy

**Status:** Active  
**Last Updated:** 2024  
**Priority:** High

## Executive Summary

AdSense monetization stratejisi, Calculator360Pro'nun Google AdSense politikalarına uygun şekilde yüksek RPM (Revenue Per Mille) değerleri elde etmesini sağlar. Bu doküman, güvenli reklam yerleşimleri, yüksek-RPM sayfa türleri ve UX-odaklı monetizasyon kurallarını detaylandırır.

## AdSense Policy Compliance

### Critical Rules

1. **Content Quality**
   - Original, valuable content
   - No thin or duplicate content
   - User-focused, not ad-focused

2. **Ad Placement**
   - Above-the-fold ads allowed (with limits)
   - No deceptive ad placement
   - Clear distinction between ads and content

3. **Ad Density**
   - Maximum 3 ads per page (desktop)
   - Maximum 2 ads per page (mobile)
   - No excessive ads

4. **User Experience**
   - Ads don't interfere with calculator use
   - No pop-ups or interstitials
   - Fast page load times maintained

### Policy Violations to Avoid

**Never:**
- Click your own ads
- Ask users to click ads
- Place ads in misleading locations
- Use excessive ads
- Create low-quality content for ads

## Safe Ad Placements

### Above-the-Fold (ATF) Placement

**Location:** Between calculator title and calculator component

**Rules:**
- Maximum 1 ATF ad per page
- Must not interfere with calculator
- Responsive ad unit
- Reserve space to prevent CLS

**Implementation:**
```typescript
// components/ads/AdAboveFold.tsx
<div className="my-6">
  <AdSense
    slot="1234567890"
    style={{ display: 'block' }}
    format="auto"
    responsive="true"
  />
</div>
```

**RPM Impact:** +20-30% (high visibility)

### Below Content (BFC) Placement

**Location:** After calculator and FAQ sections

**Rules:**
- Maximum 1 BFC ad per page
- After main content
- Before related calculators
- Responsive ad unit

**Implementation:**
```typescript
// components/ads/AdBelowContent.tsx
<div className="my-8">
  <AdSense
    slot="0987654321"
    style={{ display: 'block' }}
    format="auto"
    responsive="true"
  />
</div>
```

**RPM Impact:** +15-25% (good visibility)

### Sidebar Placement (Desktop Only)

**Location:** Right sidebar on desktop

**Rules:**
- Desktop only (hidden on mobile)
- Maximum 1 sidebar ad
- 300x250 or 300x600 unit
- Non-intrusive

**RPM Impact:** +10-15% (supplementary)

### In-Content Placement (Future)

**Location:** Within content sections (not calculator area)

**Rules:**
- Only in text content (FAQ, guides)
- Not in calculator component
- Natural break points
- Maximum 1 per content section

**RPM Impact:** +5-10% (contextual)

## High-RPM Page Types

### Finance Calculators

**RPM Range:** $8-18

**Top Performers:**
1. Mortgage Calculator: $10-15
2. Loan Calculator: $10-15
3. Tax Calculator: $12-18
4. Investment Calculator: $9-14
5. Compound Interest: $7-11

**Strategy:**
- Priority placement for finance calculators
- Above-fold ads on high-traffic finance pages
- Premium ad formats (if available)

### Health Calculators

**RPM Range:** $5-12

**Top Performers:**
1. BMI Calculator: $6-10
2. Body Fat Calculator: $7-11
3. Calorie Calculator: $5-9
4. BMR Calculator: $6-10

**Strategy:**
- Contextual health ads perform well
- Above-fold placement effective
- Health-related keywords valuable

### Education Calculators

**RPM Range:** $4-9

**Top Performers:**
1. GPA Calculator: $5-9
2. Grade Calculator: $4-8
3. Test Score Calculator: $5-9

**Strategy:**
- Lower RPM but high volume
- Focus on volume over RPM
- Education-related ads contextual

### Math Calculators

**RPM Range:** $2-7

**Top Performers:**
1. Percentage Calculator: $4-7
2. Scientific Calculator: $2-5
3. Fraction Calculator: $3-6

**Strategy:**
- Lower RPM, focus on volume
- Efficient ad placement
- Don't over-optimize (low value)

## Ad Density Limits

### Desktop Limits

**Maximum Ads:**
- 3 ads per page total
- 1 above-fold
- 1 below content
- 1 sidebar (optional)

**Ad Sizes:**
- Above-fold: Responsive (auto)
- Below content: Responsive (auto)
- Sidebar: 300x250 or 300x600

### Mobile Limits

**Maximum Ads:**
- 2 ads per page total
- 1 above-fold
- 1 below content
- No sidebar ads

**Ad Sizes:**
- Above-fold: Responsive (auto)
- Below content: Responsive (auto)
- Optimized for mobile viewport

### Ad Spacing Rules

**Minimum Spacing:**
- Between ads: 2rem (32px)
- Ad to content: 1.5rem (24px)
- Ad to calculator: 2rem (32px)

**Purpose:**
- Prevent ad stacking
- Maintain readability
- Improve user experience

## UX-Safe Monetization

### Calculator Interaction

**Rules:**
- Ads never block calculator inputs
- Ads never interfere with results
- Calculator always fully functional
- No ads within calculator component

### Page Load Performance

**Rules:**
- Ads load asynchronously
- Lazy load below-fold ads
- Reserve space to prevent CLS
- Don't delay calculator rendering

**Implementation:**
```typescript
// Lazy load ads
<AdSense
  slot="..."
  strategy="lazyOnload" // Next.js Image strategy
/>
```

### Mobile Experience

**Rules:**
- Touch-friendly ad sizes
- No interstitials
- Fast loading
- Non-intrusive placement

### Accessibility

**Rules:**
- Ads don't interfere with screen readers
- Keyboard navigation not blocked
- Focus order maintained
- Clear ad labeling

## RPM Optimization Strategy

### Content Optimization

**High-RPM Content:**
- Finance-focused calculators
- Health calculators with medical context
- Tax calculators (seasonal)
- Investment calculators

**Content Depth:**
- Comprehensive calculator pages
- FAQ sections
- Use cases and examples
- Related calculators

### Keyword Targeting

**High-Value Keywords:**
- "mortgage calculator"
- "tax calculator"
- "loan calculator"
- "investment calculator"
- "BMI calculator"

**Strategy:**
- Target high-RPM keywords
- Create comprehensive content
- Optimize for featured snippets
- Build topical authority

### Geographic Targeting

**High-RPM Markets:**
- United States: $8-15 average
- United Kingdom: $6-12 average
- Canada: $7-13 average
- Australia: $6-11 average

**Strategy:**
- Focus on high-RPM markets first
- Localize content for target markets
- Optimize for local keywords

### Seasonal Optimization

**High-RPM Seasons:**
- Tax season (January-April): Tax calculators
- Back-to-school (August-September): Education calculators
- New Year (January): Finance calculators
- Health awareness months: Health calculators

**Strategy:**
- Prepare content for high-RPM seasons
- Optimize existing calculators
- Create seasonal content
- Monitor RPM trends

## Ad Format Strategy

### Responsive Ads (Primary)

**Format:** Auto ads or responsive display ads

**Advantages:**
- Optimal size for viewport
- Higher fill rates
- Better user experience
- Mobile-optimized

**Usage:**
- Above-fold placement
- Below content placement
- Primary ad format

### Fixed-Size Ads (Secondary)

**Formats:**
- 300x250 (Medium Rectangle)
- 300x600 (Half Page)
- 728x90 (Leaderboard - desktop only)

**Usage:**
- Sidebar placement (desktop)
- Specific high-RPM pages
- A/B testing

### Native Ads (Future)

**Format:** Matched content units

**Advantages:**
- Better user experience
- Higher engagement
- Less intrusive

**Consideration:**
- Requires quality content
- May have lower RPM
- Better for long-term

## Monitoring & Optimization

### Key Metrics

**RPM Metrics:**
- Overall site RPM
- RPM by calculator type
- RPM by page
- RPM by device (desktop/mobile)
- RPM by country

**Performance Metrics:**
- Page load time (with ads)
- CLS score (with ads)
- User engagement
- Bounce rate

### Optimization Process

1. **Monitor RPM Trends**
   - Weekly RPM review
   - Identify high/low performers
   - Track seasonal trends

2. **A/B Testing**
   - Test ad placements
   - Test ad formats
   - Test ad density
   - Measure impact on UX

3. **Content Optimization**
   - Focus on high-RPM calculators
   - Improve content quality
   - Add high-value keywords

4. **Technical Optimization**
   - Optimize ad loading
   - Reduce CLS impact
   - Improve page speed

## Action Items

### Immediate

- [ ] Set up AdSense account (if not done)
- [ ] Implement above-fold ad placement
- [ ] Implement below-content ad placement
- [ ] Configure ad density limits

### Short-term

- [ ] Monitor RPM by calculator type
- [ ] Optimize high-RPM calculators
- [ ] A/B test ad placements
- [ ] Implement lazy loading for ads

### Medium-term

- [ ] Add sidebar ads (desktop)
- [ ] Optimize for seasonal trends
- [ ] Expand high-RPM calculator content
- [ ] Implement advanced ad formats

## Risk Assessment

### High Risk

1. **Policy Violation**
   - Risk: Account suspension
   - Mitigation: Strict policy compliance, regular audits

2. **Poor User Experience**
   - Risk: High bounce rate, low engagement
   - Mitigation: UX-first approach, testing

### Medium Risk

1. **Low RPM**
   - Risk: Insufficient revenue
   - Mitigation: Focus on high-RPM calculators, optimization

2. **Performance Impact**
   - Risk: Slow page loads
   - Mitigation: Lazy loading, optimization

## Success Metrics

- Overall RPM: $7+ (Month 3), $9+ (Month 6)
- Finance calculator RPM: $10+ (Month 3)
- Ad viewability: 70%+ (target)
- Page load time: < 3s (with ads)
- CLS score: 0.0 (with ads)

