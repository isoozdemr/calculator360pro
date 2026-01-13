"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [result, setResult] = useState<{
    discountAmount: number;
    finalPrice: number;
    savingsPercentage: number;
  } | null>(null);
  
  // Error states
  const [originalPriceError, setOriginalPriceError] = useState<string | null>(null);
  const [discountPercentageError, setDiscountPercentageError] = useState<string | null>(null);

  const handleOriginalPriceChange = (value: string) => {
    setOriginalPrice(value);
    if (originalPriceError) setOriginalPriceError(null);
  };

  const handleDiscountPercentageChange = (value: string) => {
    setDiscountPercentage(value);
    if (discountPercentageError) setDiscountPercentageError(null);
  };

  const calculate = () => {
    const priceErr = validateField(originalPrice, COMMON_RULES.positiveNumber);
    const discountErr = validateField(discountPercentage, COMMON_RULES.percentage);

    if (priceErr || discountErr) {
      setOriginalPriceError(priceErr);
      setDiscountPercentageError(discountErr);
      return;
    }

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount) && price > 0 && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      const savingsPercentage = discount;

      setResult({
        discountAmount,
        finalPrice,
        savingsPercentage,
      });
    }
  };

  const reset = () => {
    setOriginalPrice("");
    setDiscountPercentage("");
    setResult(null);
    setOriginalPriceError(null);
    setDiscountPercentageError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Original Price ($)"
            type="number"
            value={originalPrice}
            onChange={(e) => handleOriginalPriceChange(e.target.value)}
            onBlur={() => {
              const error = validateField(originalPrice, COMMON_RULES.positiveNumber);
              setOriginalPriceError(error);
            }}
            placeholder="Enter original price (e.g., 100)"
            error={originalPriceError || undefined}
            helperText="Enter the original price before discount"
            step="0.01"
            min="0.01"
          />
          <Input
            label="Discount Percentage (%)"
            type="number"
            value={discountPercentage}
            onChange={(e) => handleDiscountPercentageChange(e.target.value)}
            onBlur={() => {
              const error = validateField(discountPercentage, COMMON_RULES.percentage);
              setDiscountPercentageError(error);
            }}
            placeholder="Enter discount percentage (e.g., 20)"
            error={discountPercentageError || undefined}
            helperText="Enter discount percentage (0-100)"
            step="0.1"
            min="0"
            max="100"
          />

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Calculate
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Results
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  Discount Amount
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.discountAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Final Price
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.finalPrice.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  You Save
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.savingsPercentage.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

