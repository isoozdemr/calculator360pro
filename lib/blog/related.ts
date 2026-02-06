import { BlogPost, getAllBlogPosts } from "./posts";
import { BlogPost as BlogPostTR, getAllBlogPostsTR } from "./posts-tr";
import { CalculatorDefinition } from "@/lib/calculators/definitions";

/**
 * Blog post to calculator mappings
 * Maps blog post slugs to related calculator IDs
 */
const BLOG_CALCULATOR_MAPPINGS: Record<string, string[]> = {
  "how-to-calculate-mortgage-payment": ["mortgage-calculator", "loan-calculator", "compound-interest-calculator"],
  "understanding-bmi-calculator": ["bmi-calculator", "body-fat-calculator", "calorie-calculator"],
  "guide-to-gpa-calculation": ["gpa-calculator", "percentage-calculator"],
  "percentage-calculations-made-easy": ["percentage-calculator", "discount-calculator", "tip-calculator"],
  "compound-interest-explained": ["compound-interest-calculator", "investment-calculator", "savings-calculator", "retirement-calculator"],
  "managing-student-loans": ["student-loan-calculator", "loan-calculator", "budget-calculator"],
  "credit-card-debt-strategies": ["credit-card-payoff-calculator", "budget-calculator", "loan-calculator"],
  "retirement-planning-guide": ["retirement-calculator", "investment-calculator", "savings-calculator", "compound-interest-calculator"],
  "understanding-tax-brackets": ["tax-calculator", "salary-calculator", "budget-calculator"],
  "body-fat-measurement-methods": ["body-fat-calculator", "bmi-calculator", "calorie-calculator"],
  "calorie-counting-tips": ["calorie-calculator", "bmi-calculator", "body-fat-calculator"],
  "scientific-calculator-guide": ["scientific-calculator", "percentage-calculator", "unit-converter"],
  "pregnancy-due-date-calculation": ["pregnancy-calculator", "age-calculator", "date-calculator"],
  "car-loan-tips": ["car-loan-calculator", "loan-calculator", "budget-calculator"],
  "investment-basics-beginners": ["investment-calculator", "compound-interest-calculator", "savings-calculator", "retirement-calculator"],
  "budget-planning-101": ["budget-calculator", "salary-calculator", "savings-calculator"],
  "tip-etiquette-guide": ["tip-calculator", "percentage-calculator", "discount-calculator"],
  "discount-shopping-strategies": ["discount-calculator", "percentage-calculator", "budget-calculator"],
  "time-management-hours-tracking": ["hours-calculator", "date-calculator", "salary-calculator"],
  "currency-exchange-tips": ["currency-converter", "budget-calculator"],
  "age-calculation-methods": ["age-calculator", "date-calculator", "pregnancy-calculator"],
  "loan-comparison-guide": ["loan-calculator", "mortgage-calculator", "car-loan-calculator", "student-loan-calculator"],
  "savings-strategies-guide": ["savings-calculator", "compound-interest-calculator", "budget-calculator", "retirement-calculator"],
  "salary-negotiation-tips": ["salary-calculator", "tax-calculator", "budget-calculator"],
  "unit-conversion-guide": ["unit-converter", "scientific-calculator"],
  "best-mortgage-calculators-comparison": ["mortgage-calculator", "loan-calculator", "compound-interest-calculator"],
  "compound-interest-calculator-wealth-building": ["compound-interest-calculator", "investment-calculator", "savings-calculator", "retirement-calculator"],
  "mortgage-vs-rent-calculator-2026": ["mortgage-calculator", "budget-calculator", "loan-calculator"],
};

/**
 * Get related blog posts for a calculator
 * 
 * @param calculator - The calculator to find related blog posts for
 * @param maxResults - Maximum number of blog posts to return (default: 3)
 * @returns Array of related blog posts
 */
export function getRelatedBlogPosts(
  calculator: CalculatorDefinition,
  maxResults: number = 3
): BlogPost[] {
  const allPosts = getAllBlogPosts();
  
  // Find blog posts that are mapped to this calculator
  const mappedPosts: BlogPost[] = [];
  
  for (const [postSlug, calcIds] of Object.entries(BLOG_CALCULATOR_MAPPINGS)) {
    if (calcIds.includes(calculator.id)) {
      const post = allPosts.find((p) => p.slug === postSlug);
      if (post) {
        mappedPosts.push(post);
      }
    }
  }
  
  // If we have enough mapped posts, return them
  if (mappedPosts.length >= maxResults) {
    return mappedPosts.slice(0, maxResults);
  }
  
  // Otherwise, find posts with matching keywords/tags
  const calculatorKeywords = calculator.keywords.map((k) => k.toLowerCase());
  
  const scoredPosts = allPosts
    .filter((post) => !mappedPosts.some((mp) => mp.slug === post.slug))
    .map((post) => {
      let score = 0;
      
      // Check tag matches
      post.tags.forEach((tag) => {
        const tagLower = tag.toLowerCase();
        if (calculatorKeywords.some((k) => k.includes(tagLower) || tagLower.includes(k))) {
          score += 3;
        }
      });
      
      // Check category match
      if (post.category.toLowerCase() === calculator.category.toLowerCase()) {
        score += 5;
      }
      
      // Check title match
      const titleWords = post.title.toLowerCase().split(/\s+/);
      const calcName = calculator.name.toLowerCase().split(/\s+/);
      
      calcName.forEach((word) => {
        if (word.length > 3 && titleWords.includes(word)) {
          score += 2;
        }
      });
      
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.post);
  
  return [...mappedPosts, ...scoredPosts].slice(0, maxResults);
}

/**
 * Get related calculators for a blog post
 * 
 * @param post - The blog post to find related calculators for
 * @returns Array of related calculator IDs
 */
export function getRelatedCalculatorsForPost(post: BlogPost): string[] {
  return BLOG_CALCULATOR_MAPPINGS[post.slug] || [];
}

/**
 * Get related English blog posts for internal linking
 * Uses category, tags, and title/description similarity (same logic as TR).
 *
 * @param currentPost - The current blog post
 * @param maxResults - Maximum number of related posts to return (default: 4)
 * @returns Array of related English blog posts
 */
export function getRelatedBlogPostsForPost(
  currentPost: BlogPost,
  maxResults: number = 4
): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);
  if (otherPosts.length === 0) return [];

  const scoredPosts = otherPosts.map((post) => {
    let score = 0;
    if (post.category === currentPost.category) score += 10;
    const currentTags = currentPost.tags.map((t) => t.toLowerCase());
    const postTags = post.tags.map((t) => t.toLowerCase());
    const commonTags = currentTags.filter((tag) => postTags.includes(tag));
    score += commonTags.length * 5;
    const currentTitleWords = currentPost.title.toLowerCase().split(/\s+/);
    const postTitleWords = post.title.toLowerCase().split(/\s+/);
    const commonTitleWords = currentTitleWords.filter((word) =>
      word.length > 3 && postTitleWords.includes(word)
    );
    score += commonTitleWords.length * 2;
    const currentDescWords = currentPost.description.toLowerCase().split(/\s+/);
    const postDescWords = post.description.toLowerCase().split(/\s+/);
    const commonDescWords = currentDescWords.filter((word) =>
      word.length > 3 && postDescWords.includes(word)
    );
    score += commonDescWords.length;
    return { post, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.post);

  return scoredPosts.slice(0, maxResults);
}

/**
 * Get related Turkish blog posts for a blog post
 * 
 * @param currentPost - The current blog post to find related posts for
 * @param maxResults - Maximum number of blog posts to return (default: 3)
 * @returns Array of related blog posts
 */
export function getRelatedBlogPostsTR(
  currentPost: BlogPostTR,
  maxResults: number = 3
): BlogPostTR[] {
  const allPosts = getAllBlogPostsTR();
  
  // Filter out the current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);
  
  // Score posts based on relevance
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;
    
    // High priority: Same category
    if (post.category === currentPost.category) {
      score += 10;
    }
    
    // Medium priority: Common tags
    const currentTags = currentPost.tags.map((t) => t.toLowerCase());
    const postTags = post.tags.map((t) => t.toLowerCase());
    const commonTags = currentTags.filter((tag) => postTags.includes(tag));
    score += commonTags.length * 5;
    
    // Low priority: Keyword matches in title/description
    const currentTitleWords = currentPost.title.toLowerCase().split(/\s+/);
    const postTitleWords = post.title.toLowerCase().split(/\s+/);
    const commonTitleWords = currentTitleWords.filter((word) => 
      word.length > 3 && postTitleWords.includes(word)
    );
    score += commonTitleWords.length * 2;
    
    // Check description for keyword matches
    const currentDescWords = currentPost.description.toLowerCase().split(/\s+/);
    const postDescWords = post.description.toLowerCase().split(/\s+/);
    const commonDescWords = currentDescWords.filter((word) => 
      word.length > 3 && postDescWords.includes(word)
    );
    score += commonDescWords.length;
    
    return { post, score };
  })
  .filter((item) => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .map((item) => item.post);
  
  return scoredPosts.slice(0, maxResults);
}
