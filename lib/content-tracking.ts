/**
 * Content Freshness Tracking
 * 
 * Tracks last modified dates for content freshness and SEO
 */

export interface ContentUpdate {
  url: string;
  lastUpdated: string; // ISO date string
  updateType: "minor" | "major";
  nextReview: string; // ISO date string
  notes?: string;
}

/**
 * Content update tracking data
 * 
 * Update this file when content is modified
 * Format: URL -> ContentUpdate
 */
export const CONTENT_UPDATES: Record<string, ContentUpdate> = {
  // Calculator pages - update when content changes
  "/calculators/math/percentage-calculator": {
    url: "/calculators/math/percentage-calculator",
    lastUpdated: "2026-01-15",
    updateType: "minor",
    nextReview: "2026-04-15",
    notes: "Initial content",
  },
  "/calculators/health/bmi-calculator": {
    url: "/calculators/health/bmi-calculator",
    lastUpdated: "2026-01-15",
    updateType: "minor",
    nextReview: "2026-04-15",
    notes: "Initial content",
  },
  // Add more entries as content is updated
};

/**
 * Get last modified date for a URL
 * 
 * @param url - Page URL
 * @returns Last modified date or undefined if not tracked
 */
export function getLastModified(url: string): Date | undefined {
  const update = CONTENT_UPDATES[url];
  if (!update) {
    return undefined;
  }
  return new Date(update.lastUpdated);
}

/**
 * Get content update info for a URL
 * 
 * @param url - Page URL
 * @returns Content update info or undefined
 */
export function getContentUpdate(url: string): ContentUpdate | undefined {
  return CONTENT_UPDATES[url];
}

/**
 * Check if content needs review
 * 
 * @param url - Page URL
 * @returns True if content needs review
 */
export function needsReview(url: string): boolean {
  const update = CONTENT_UPDATES[url];
  if (!update) {
    return true; // Untracked content should be reviewed
  }
  const nextReview = new Date(update.nextReview);
  return new Date() >= nextReview;
}

/**
 * Get all content that needs review
 * 
 * @returns Array of URLs that need review
 */
export function getContentNeedingReview(): string[] {
  return Object.keys(CONTENT_UPDATES).filter(needsReview);
}

