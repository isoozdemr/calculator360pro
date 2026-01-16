# Google Search Console Setup & Optimization Guide

**Status:** Active  
**Last Updated:** 2026  
**Priority:** Critical

## Overview

Google Search Console (GSC) is essential for monitoring your site's performance in Google search results, submitting sitemaps, and identifying indexing issues. This guide will help you set up and optimize GSC for Calculator360Pro.

## Step 1: Property Setup

### 1.1 Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" method (recommended)
4. Enter your site URL: `https://calculator360pro.com`
5. Click "Continue"

### 1.2 Verification Methods

**Recommended: HTML Tag Method**

1. Copy the verification meta tag provided by Google
2. Add it to `app/layout.tsx` in the `<head>` section
3. Deploy the changes
4. Click "Verify" in Google Search Console

**Alternative: DNS Verification**

1. Add TXT record to your domain DNS
2. Wait for DNS propagation (up to 48 hours)
3. Click "Verify" in Google Search Console

## Step 2: Sitemap Submission

### 2.1 Submit Main Sitemap

1. Go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (usually 24-48 hours)

### 2.2 Verify Sitemap Status

- Check "Sitemaps" section regularly
- Ensure all pages are discovered
- Fix any errors reported

### 2.3 Sitemap URLs

Your sitemap is automatically generated at:
- Main sitemap: `https://calculator360pro.com/sitemap.xml`

**Included URLs:**
- Homepage
- All calculator pages (`/calculators/{category}/{slug}`)
- Category pages (`/calculators/{category}`)
- Blog posts (`/blog/{slug}`)
- Static pages (about, privacy-policy, terms-of-service)

## Step 3: Indexing Requests

### 3.1 Manual Indexing Request

For new or updated pages:

1. Go to "URL Inspection" tool
2. Enter the page URL
3. Click "Request Indexing"
4. Wait for Google to crawl (usually within hours)

### 3.2 Bulk Indexing (API)

For bulk indexing requests, use Google Search Console API:

```bash
# Install Google Search Console API client
npm install googleapis
```

**Note:** API setup requires OAuth 2.0 authentication. See Google's documentation for details.

## Step 4: Coverage Monitoring

### 4.1 Check Coverage Report

1. Go to "Coverage" in the left sidebar
2. Review:
   - **Valid pages**: Should match your sitemap
   - **Excluded pages**: Check if any important pages are excluded
   - **Errors**: Fix immediately
   - **Warnings**: Review and fix if needed

### 4.2 Common Issues

**404 Errors:**
- Check for broken internal links
- Fix URL structure issues
- Update sitemap if needed

**Submitted but not indexed:**
- Check page quality
- Ensure no robots.txt blocking
- Verify meta robots tags

**Duplicate content:**
- Check canonical tags
- Ensure unique content per page
- Fix duplicate URL issues

## Step 5: Performance Monitoring

### 5.1 Performance Report

1. Go to "Performance" in the left sidebar
2. Monitor:
   - **Total clicks**: Track organic traffic
   - **Total impressions**: Track visibility
   - **Average CTR**: Optimize meta descriptions
   - **Average position**: Track rankings

### 5.2 Key Metrics to Track

**Weekly:**
- Total clicks (organic traffic)
- Average position (rankings)
- Top queries (keyword performance)
- Top pages (content performance)

**Monthly:**
- CTR trends
- Position changes
- New keyword rankings
- Traffic growth

## Step 6: URL Inspection Tool

### 6.1 Inspect Individual URLs

1. Go to "URL Inspection" tool
2. Enter any page URL
3. Check:
   - **Coverage status**: Is it indexed?
   - **Last crawl**: When was it last crawled?
   - **Mobile usability**: Is it mobile-friendly?
   - **Rich results**: Are schemas working?

### 6.2 Request Indexing for New Pages

For newly published calculators:

1. Use URL Inspection tool
2. Request indexing immediately
3. Monitor indexing status
4. Fix any issues reported

## Step 7: Mobile Usability

### 7.1 Check Mobile Usability

1. Go to "Mobile Usability" in the left sidebar
2. Fix any issues:
   - Text too small
   - Clickable elements too close
   - Content wider than screen
   - Viewport not set

### 7.2 Mobile-Friendly Test

Test individual pages:
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Step 8: Core Web Vitals

### 8.1 Monitor Core Web Vitals

1. Go to "Core Web Vitals" in the left sidebar
2. Check:
   - **LCP (Largest Contentful Paint)**: Target < 2.5s
   - **FID (First Input Delay)**: Target < 100ms
   - **CLS (Cumulative Layout Shift)**: Target < 0.1

### 8.2 Fix Issues

- Optimize images
- Minimize JavaScript
- Use lazy loading
- Optimize fonts
- Reduce server response time

## Step 9: Security Issues

### 9.1 Monitor Security Issues

1. Go to "Security Issues" in the left sidebar
2. Fix immediately if any issues found:
   - Malware
   - Hacked content
   - Social engineering
   - Unwanted software

## Step 10: Links Report

### 10.1 Monitor Backlinks

1. Go to "Links" in the left sidebar
2. Check:
   - **External links**: Track backlinks
   - **Internal links**: Monitor internal linking
   - **Top linking sites**: Identify link sources

## Best Practices

### Daily
- Check for new indexing errors
- Monitor performance metrics
- Review top queries

### Weekly
- Submit new calculator pages for indexing
- Review coverage report
- Check mobile usability issues
- Monitor Core Web Vitals

### Monthly
- Analyze performance trends
- Review keyword rankings
- Check backlink growth
- Update sitemap if needed

## Troubleshooting

### Pages Not Indexing

1. Check robots.txt: Ensure pages aren't blocked
2. Check meta robots tags: Ensure `index: true`
3. Check sitemap: Ensure pages are included
4. Request indexing manually
5. Check page quality: Ensure unique, valuable content

### Low CTR

1. Optimize meta descriptions (150-160 characters)
2. Include primary keywords
3. Make descriptions compelling
4. Test different descriptions

### Low Rankings

1. Check content quality (2000+ words)
2. Optimize for target keywords
3. Build backlinks
4. Improve Core Web Vitals
5. Ensure schema markup is correct

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Search Console API Documentation](https://developers.google.com/webmaster-tools)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)

## Checklist

- [ ] Property added and verified
- [ ] Sitemap submitted
- [ ] All calculator pages indexed
- [ ] Coverage report clean (no errors)
- [ ] Performance monitoring set up
- [ ] Mobile usability issues fixed
- [ ] Core Web Vitals optimized
- [ ] Regular monitoring schedule established

