# Coverage Monitoring Guide

**Status:** Active  
**Last Updated:** 2026  
**Priority:** Critical

## Overview

Coverage monitoring helps identify indexing issues, errors, and opportunities to improve your site's visibility in Google search results.

## Accessing Coverage Report

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Click "Coverage" in the left sidebar

## Understanding Coverage Status

### Valid Pages
- **Status**: Indexed and appearing in search results
- **Action**: Monitor regularly, ensure count matches your sitemap
- **Target**: 100% of important pages indexed

### Excluded Pages
- **Status**: Not indexed (but not errors)
- **Common Reasons**:
  - Redirected (301/302)
  - Not found (404)
  - Blocked by robots.txt
  - Duplicate content (canonical tag)
  - Crawled but not indexed
- **Action**: Review and fix if needed

### Errors
- **Status**: Critical issues preventing indexing
- **Action**: Fix immediately
- **Types**:
  - Server errors (5xx)
  - Soft 404 errors
  - Redirect errors
  - Blocked by robots.txt
  - Not found (404)

### Warnings
- **Status**: Issues that may affect indexing
- **Action**: Review and fix
- **Types**:
  - Indexed but blocked by robots.txt
  - Alternate page with proper canonical tag
  - Page with redirect

## Common Issues & Solutions

### 1. Server Errors (5xx)

**Problem**: Server returning 5xx errors

**Solution**:
- Check server logs
- Verify hosting is working
- Check for database connection issues
- Review error logs

**Prevention**:
- Monitor server health
- Set up error alerts
- Use reliable hosting

### 2. Soft 404 Errors

**Problem**: Page returns 200 but content suggests 404

**Solution**:
- Check page content
- Ensure pages have unique, valuable content
- Fix empty or thin pages
- Add proper 404 handling

**Prevention**:
- Ensure all pages have 2000+ words of content
- Avoid duplicate content
- Use proper 404 pages

### 3. Blocked by robots.txt

**Problem**: Pages blocked from crawling

**Solution**:
- Review `app/robots.ts`
- Remove unnecessary blocks
- Ensure important pages are not blocked

**Prevention**:
- Only block admin/test pages
- Never block calculator pages
- Test robots.txt changes

### 4. Not Found (404)

**Problem**: Pages returning 404 errors

**Solution**:
- Fix broken internal links
- Add redirects for moved pages
- Update sitemap
- Remove dead links

**Prevention**:
- Test all links before publishing
- Use proper URL structure
- Never change URLs without redirects

### 5. Duplicate Content

**Problem**: Multiple URLs with same content

**Solution**:
- Use canonical tags
- Consolidate duplicate pages
- Fix URL structure issues

**Prevention**:
- Use canonical tags consistently
- Avoid duplicate content
- Use proper URL structure

### 6. Crawled but Not Indexed

**Problem**: Pages crawled but not indexed

**Possible Reasons**:
- Low-quality content
- Duplicate content
- Thin content
- No search demand

**Solution**:
- Improve content quality (2000+ words)
- Make content unique
- Add valuable information
- Optimize for keywords

**Prevention**:
- Ensure all pages have 2000+ words
- Make content unique and valuable
- Optimize for target keywords

## Monitoring Schedule

### Daily
- Check for new errors
- Review excluded pages
- Monitor valid page count

### Weekly
- Review all errors
- Fix critical issues
- Check coverage trends
- Verify sitemap matches coverage

### Monthly
- Analyze coverage patterns
- Review excluded pages
- Check for opportunities
- Update monitoring strategy

## Coverage Goals

### Target Metrics
- **Valid Pages**: 100% of important pages
- **Errors**: 0 critical errors
- **Warnings**: Minimal warnings
- **Excluded**: Only intentional exclusions

### Calculator Pages
- All calculator pages should be indexed
- Category pages should be indexed
- Blog posts should be indexed
- Static pages should be indexed

## Best Practices

1. **Regular Monitoring**: Check coverage daily
2. **Quick Fixes**: Fix errors immediately
3. **Preventive Measures**: Test before publishing
4. **Documentation**: Document all changes
5. **Testing**: Test robots.txt changes
6. **Sitemap Sync**: Keep sitemap in sync with coverage

## Tools

- **Google Search Console**: Primary tool
- **URL Inspection**: Check individual URLs
- **Sitemap Validator**: Validate sitemap
- **Robots.txt Tester**: Test robots.txt

## Checklist

- [ ] Coverage report accessed
- [ ] All calculator pages indexed
- [ ] No critical errors
- [ ] Excluded pages reviewed
- [ ] Monitoring schedule established
- [ ] Error resolution process documented

