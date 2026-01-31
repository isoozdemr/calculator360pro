/**
 * Calculation History Management
 * Uses localStorage to store user's calculation history
 * This improves user engagement and dwell time
 */

export interface CalculationHistoryItem {
  id: string;
  calculatorId: string;
  calculatorName: string;
  timestamp: number;
  inputs: Record<string, string | number>;
  result: string;
  category: string;
}

const HISTORY_KEY = "calculator360pro_history";
const MAX_HISTORY_ITEMS = 50;

/**
 * Get calculation history from localStorage
 */
export function getCalculationHistory(): CalculationHistoryItem[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

/**
 * Add a calculation to history
 */
export function addToCalculationHistory(item: Omit<CalculationHistoryItem, "id" | "timestamp">): void {
  if (typeof window === "undefined") return;
  
  try {
    const history = getCalculationHistory();
    
    const newItem: CalculationHistoryItem = {
      ...item,
      id: `calc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };
    
    // Add to beginning of array
    history.unshift(newItem);
    
    // Keep only the most recent items
    const trimmedHistory = history.slice(0, MAX_HISTORY_ITEMS);
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmedHistory));
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Clear all calculation history
 */
export function clearCalculationHistory(): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch {
    // Silently fail
  }
}

/**
 * Remove a specific item from history
 */
export function removeFromHistory(itemId: string): void {
  if (typeof window === "undefined") return;
  
  try {
    const history = getCalculationHistory();
    const filtered = history.filter((item) => item.id !== itemId);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  } catch {
    // Silently fail
  }
}

/**
 * Get history for a specific calculator
 */
export function getCalculatorHistory(calculatorId: string): CalculationHistoryItem[] {
  const history = getCalculationHistory();
  return history.filter((item) => item.calculatorId === calculatorId);
}
