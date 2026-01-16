import { CalculatorDefinition, getAllCalculators } from "./definitions";

/**
 * Get related calculators with smart algorithm
 * 
 * Priority order:
 * 1. Manual relatedCalculators (if defined)
 * 2. Same category calculators (high relevance)
 * 3. Cross-category calculators with keyword similarity
 * 4. Popular calculators (fallback)
 * 
 * @param calculator - The calculator to find related calculators for
 * @param maxResults - Maximum number of related calculators to return (default: 6)
 * @returns Array of related calculators (3-6 items)
 */
export function getRelatedCalculators(
  calculator: CalculatorDefinition,
  maxResults: number = 6
): CalculatorDefinition[] {
  const allCalculators = getAllCalculators();
  
  // Exclude the current calculator
  const otherCalculators = allCalculators.filter(
    (calc) => calc.id !== calculator.id
  );
  
  // Priority 1: Manual relatedCalculators (if defined)
  if (calculator.relatedCalculators && calculator.relatedCalculators.length > 0) {
    const manualRelated = calculator.relatedCalculators
      .map((id) => allCalculators.find((calc) => calc.id === id))
      .filter((calc): calc is CalculatorDefinition => calc !== undefined)
      .slice(0, maxResults);
    
    // If we have enough manual related calculators, return them
    if (manualRelated.length >= 3) {
      return manualRelated.slice(0, maxResults);
    }
    
    // Otherwise, supplement with algorithm-based suggestions
    const suggested = getSuggestedRelatedCalculators(
      calculator,
      otherCalculators.filter(
        (calc) => !manualRelated.some((related) => related.id === calc.id)
      ),
      maxResults - manualRelated.length
    );
    
    return [...manualRelated, ...suggested].slice(0, maxResults);
  }
  
  // Priority 2-4: Algorithm-based suggestions
  return getSuggestedRelatedCalculators(calculator, otherCalculators, maxResults);
}

/**
 * Get suggested related calculators using algorithm
 * 
 * @param calculator - The calculator to find related calculators for
 * @param candidates - Candidate calculators to choose from
 * @param maxResults - Maximum number of results
 * @returns Array of suggested related calculators
 */
function getSuggestedRelatedCalculators(
  calculator: CalculatorDefinition,
  candidates: CalculatorDefinition[],
  maxResults: number
): CalculatorDefinition[] {
  // Score each candidate calculator
  const scored = candidates.map((candidate) => ({
    calculator: candidate,
    score: calculateRelevanceScore(calculator, candidate),
  }));
  
  // Sort by score (highest first)
  scored.sort((a, b) => b.score - a.score);
  
  // Return top results
  return scored.slice(0, maxResults).map((item) => item.calculator);
}

/**
 * Calculate relevance score between two calculators
 * 
 * Scoring factors:
 * - Same category: +10 points
 * - Shared keywords: +5 points per keyword
 * - Keyword similarity: +2 points per similar word
 * 
 * @param calculator1 - First calculator
 * @param calculator2 - Second calculator
 * @returns Relevance score (higher = more relevant)
 */
function calculateRelevanceScore(
  calculator1: CalculatorDefinition,
  calculator2: CalculatorDefinition
): number {
  let score = 0;
  
  // Same category bonus
  if (calculator1.category === calculator2.category) {
    score += 10;
  }
  
  // Shared keywords bonus
  const keywords1 = calculator1.keywords.map((k) => k.toLowerCase());
  const keywords2 = calculator2.keywords.map((k) => k.toLowerCase());
  
  const sharedKeywords = keywords1.filter((k) => keywords2.includes(k));
  score += sharedKeywords.length * 5;
  
  // Keyword similarity bonus (partial matches)
  keywords1.forEach((keyword1) => {
    keywords2.forEach((keyword2) => {
      // Check if keywords share significant words
      const words1 = keyword1.split(/\s+/);
      const words2 = keyword2.split(/\s+/);
      
      const commonWords = words1.filter((w) => 
        w.length > 3 && words2.includes(w)
      );
      
      if (commonWords.length > 0) {
        score += commonWords.length * 2;
      }
    });
  });
  
  // Name similarity bonus (if names share words)
  const name1Words = calculator1.name.toLowerCase().split(/\s+/);
  const name2Words = calculator2.name.toLowerCase().split(/\s+/);
  
  const commonNameWords = name1Words.filter((w) => 
    w.length > 3 && name2Words.includes(w)
  );
  
  if (commonNameWords.length > 0) {
    score += commonNameWords.length * 3;
  }
  
  return score;
}

