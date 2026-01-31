/**
 * Calculator Rating System
 * Uses localStorage to store user ratings
 * Improves user engagement and provides feedback signals
 */

export interface CalculatorRating {
  calculatorId: string;
  rating: number; // 1-5 stars
  timestamp: number;
}

const RATINGS_KEY = "calculator360pro_ratings";

/**
 * Get all ratings from localStorage
 */
export function getAllRatings(): CalculatorRating[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(RATINGS_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

/**
 * Get rating for a specific calculator
 */
export function getCalculatorRating(calculatorId: string): number | null {
  const ratings = getAllRatings();
  const rating = ratings.find((r) => r.calculatorId === calculatorId);
  return rating ? rating.rating : null;
}

/**
 * Set or update rating for a calculator
 */
export function setCalculatorRating(calculatorId: string, rating: number): void {
  if (typeof window === "undefined") return;
  if (rating < 1 || rating > 5) return;
  
  try {
    const ratings = getAllRatings();
    const existingIndex = ratings.findIndex((r) => r.calculatorId === calculatorId);
    
    const newRating: CalculatorRating = {
      calculatorId,
      rating,
      timestamp: Date.now(),
    };
    
    if (existingIndex >= 0) {
      ratings[existingIndex] = newRating;
    } else {
      ratings.push(newRating);
    }
    
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  } catch {
    // Silently fail
  }
}

/**
 * Check if user has rated a calculator
 */
export function hasRated(calculatorId: string): boolean {
  return getCalculatorRating(calculatorId) !== null;
}
