"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  getCalculationHistory, 
  clearCalculationHistory, 
  removeFromHistory,
  CalculationHistoryItem 
} from "@/lib/engagement/calculation-history";
import { getCategorySlugByKey, CalculatorCategory } from "@/lib/constants";

interface CalculationHistoryProps {
  calculatorId?: string; // If provided, show only this calculator's history
  maxItems?: number;
}

export function CalculationHistory({ calculatorId, maxItems = 5 }: CalculationHistoryProps) {
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    loadHistory();
  }, [calculatorId]);

  const loadHistory = () => {
    let items = getCalculationHistory();
    if (calculatorId) {
      items = items.filter((item) => item.calculatorId === calculatorId);
    }
    setHistory(items);
  };

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your calculation history?")) {
      clearCalculationHistory();
      setHistory([]);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromHistory(itemId);
    loadHistory();
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const displayedHistory = isExpanded ? history : history.slice(0, maxItems);

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[#1e293b]">
          {calculatorId ? "Recent Calculations" : "Calculation History"}
        </h3>
        <button
          onClick={handleClearHistory}
          className="text-xs text-[#64748b] hover:text-[#ef4444] transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-2">
        {displayedHistory.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                {!calculatorId && (
                  <Link
                    href={`/calculators/${getCategorySlugByKey(item.category as CalculatorCategory)}/${item.calculatorId}`}
                    className="font-medium text-[#1e293b] text-sm hover:text-[#2563eb] truncate"
                  >
                    {item.calculatorName}
                  </Link>
                )}
                <span className="text-xs text-[#94a3b8]">
                  {formatDate(item.timestamp)}
                </span>
              </div>
              <p className="text-sm text-[#64748b] truncate mt-1">
                Result: <span className="font-medium text-[#1e293b]">{item.result}</span>
              </p>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="ml-2 p-1 text-[#94a3b8] hover:text-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Remove from history"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {history.length > maxItems && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm text-[#2563eb] hover:underline"
        >
          {isExpanded ? "Show less" : `Show ${history.length - maxItems} more`}
        </button>
      )}
    </div>
  );
}
