# Content Freshness Strategy

**Status:** Active  
**Last Updated:** 2026  
**Priority:** High

## Overview

Content freshness is a ranking factor that Google uses to determine how current and relevant content is. Regularly updating content signals to Google that your site is active and maintained.

## Why Content Freshness Matters

- **Ranking Factor**: Google favors fresh, updated content
- **User Trust**: Updated content builds user trust
- **Relevance**: Fresh content is more relevant to current needs
- **Competitive Advantage**: Regular updates help stay ahead of competitors

## Current Implementation

### Sitemap Last Modified Dates

**Status:** ✅ Implemented

- Sitemap uses `new Date()` for lastModified
- Updates automatically on each build
- All pages have lastModified dates

**File:** `app/sitemap.ts`

### Content Update Tracking

**Status:** ⚠️ Needs Enhancement

- No explicit content update tracking
- No content version history
- No update schedule

## Content Freshness Strategy

### Update Frequency by Content Type

#### Calculator Pages
- **Frequency**: Quarterly (every 3 months)
- **Updates**: 
  - Review and update formulas if needed
  - Update examples with current data
  - Refresh statistics and trends
  - Update related calculators
  - Check for broken links

#### Blog Posts
- **Frequency**: Monthly or as needed
- **Updates**:
  - Update statistics and data
  - Refresh examples
  - Add new information
  - Update links
  - Fix outdated information

#### Category Pages
- **Frequency**: Quarterly
- **Updates**:
  - Update calculator lists
  - Refresh descriptions
  - Update statistics
  - Add new calculators

#### Static Pages (About, Privacy, Terms)
- **Frequency**: Annually or as needed
- **Updates**:
  - Legal updates
  - Policy changes
  - Contact information

### Content Update Checklist

For each content update:

- [ ] Review content for accuracy
- [ ] Update statistics and data
- [ ] Refresh examples
- [ ] Check for broken links
- [ ] Update lastModified date
- [ ] Test page functionality
- [ ] Verify SEO elements
- [ ] Submit to Google Search Console (if major update)

## Implementation Plan

### Phase 1: Content Audit (Week 1)

1. **Audit All Content**
   - List all calculator pages
   - List all blog posts
   - List all category pages
   - Note last update date (if available)

2. **Prioritize Updates**
   - High-traffic pages first
   - Pages with outdated information
   - Pages with low rankings

### Phase 2: Update Schedule (Week 2)

1. **Create Update Calendar**
   - Quarterly calculator updates
   - Monthly blog reviews
   - Annual static page reviews

2. **Set Reminders**
   - Calendar reminders
   - Task management system
   - Regular review schedule

### Phase 3: Content Refresh (Ongoing)

1. **Regular Updates**
   - Follow update schedule
   - Track updates in documentation
   - Monitor results

2. **Major Updates**
   - Significant content changes
   - New features added
   - Major revisions

## Content Update Types

### Minor Updates
- Fix typos
- Update examples
- Refresh statistics
- Fix broken links
- Update dates

**Impact**: Low to medium
**Frequency**: As needed

### Major Updates
- Rewrite sections
- Add new content
- Update formulas
- Add new features
- Significant revisions

**Impact**: High
**Frequency**: Quarterly or as needed

## Tracking Content Updates

### Recommended System

**Spreadsheet or Database:**
- Page URL
- Last Updated Date
- Update Type (Minor/Major)
- Next Review Date
- Notes

### Example Tracking

```
URL: /calculators/finance/mortgage-calculator
Last Updated: 2026-01-15
Update Type: Minor
Next Review: 2026-04-15
Notes: Updated interest rate examples
```

## Best Practices

1. **Regular Schedule**: Stick to update schedule
2. **Track Changes**: Document all updates
3. **Monitor Results**: Track ranking changes after updates
4. **Quality Over Quantity**: Focus on meaningful updates
5. **User-Focused**: Update based on user needs
6. **SEO Considerations**: Maintain SEO while updating

## Content Freshness Signals

### What Google Looks For

1. **Last Modified Date**: In sitemap and HTML
2. **Content Changes**: Actual content updates
3. **Update Frequency**: Regular updates
4. **New Content**: New pages or sections
5. **User Engagement**: User signals after updates

### Implementation

1. **Sitemap Dates**: Already implemented ✅
2. **HTML Last Modified**: Can add to meta tags
3. **Content Updates**: Follow schedule
4. **Regular Reviews**: Quarterly reviews

## Update Schedule Template

### Q1 (January-March)
- Review top 10 calculator pages
- Update statistics and examples
- Refresh blog posts

### Q2 (April-June)
- Review next 10 calculator pages
- Update category pages
- Add new content

### Q3 (July-September)
- Review remaining calculator pages
- Update blog posts
- Refresh examples

### Q4 (October-December)
- Annual content audit
- Major updates as needed
- Plan next year's updates

## Monitoring

### Tools

- **Google Search Console**: Monitor indexing and rankings
- **Analytics**: Track traffic changes after updates
- **Content Audit**: Regular content reviews

### Metrics to Track

- **Update Frequency**: How often content is updated
- **Ranking Changes**: Position changes after updates
- **Traffic Changes**: Traffic changes after updates
- **User Engagement**: Engagement metrics after updates

## Checklist

- [ ] Content audit completed
- [ ] Update schedule created
- [ ] Tracking system set up
- [ ] First updates completed
- [ ] Monitoring in place
- [ ] Regular reviews scheduled
- [ ] Results tracked

