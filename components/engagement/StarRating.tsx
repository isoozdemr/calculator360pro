"use client";

import { useState, useEffect } from "react";
import { getCalculatorRating, setCalculatorRating, hasRated } from "@/lib/engagement/rating-system";

interface StarRatingProps {
  calculatorId: string;
  calculatorName: string;
}

export function StarRating({ calculatorId, calculatorName }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Check if user has already rated this calculator
    const existingRating = getCalculatorRating(calculatorId);
    if (existingRating) {
      setRating(existingRating);
      setHasSubmitted(true);
    }
  }, [calculatorId]);

  const handleRating = (value: number) => {
    setRating(value);
    setCalculatorRating(calculatorId, value);
    setHasSubmitted(true);
    setShowThankYou(true);
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="bg-[#f8fafc] rounded-lg p-4 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="font-semibold text-[#1e293b] text-sm">
            {hasSubmitted ? "Thanks for your rating!" : `Rate this ${calculatorName}`}
          </h3>
          <p className="text-xs text-[#64748b]">
            {hasSubmitted 
              ? "Your feedback helps us improve" 
              : "Help others by sharing your experience"}
          </p>
        </div>
        
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 focus:outline-none focus:ring-2 focus:ring-[#2563eb] rounded"
              aria-label={`Rate ${star} out of 5 stars`}
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  (hoverRating || rating) >= star
                    ? "text-[#fbbf24] fill-[#fbbf24]"
                    : "text-[#d1d5db] fill-[#d1d5db]"
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      
      {showThankYou && (
        <div className="mt-3 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#dcfce7] text-[#166534]">
            ✓ Thank you for rating!
          </span>
        </div>
      )}
    </div>
  );
}
