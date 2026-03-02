"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatCurrency, formatPercent } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function DiscountCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [result, setResult] = useState<{
    discountAmount: number;
    finalPrice: number;
    savingsPercentage: number;
  } | null>(null);
  const [originalPriceError, setOriginalPriceError] = useState<string | null>(null);
  const [discountPercentageError, setDiscountPercentageError] = useState<string | null>(null);

  const calculate = () => {
    const price = parseLocaleNumber(originalPrice, locale);
    const discount = parseLocaleNumber(discountPercentage.replace(/%/g, "").trim(), locale);

    if (price == null || price <= 0) {
      setOriginalPriceError(isTr ? "Pozitif fiyat girin" : "Enter a positive price");
      setResult(null);
      return;
    }
    if (discount == null || discount < 0 || discount > 100) {
      setDiscountPercentageError(isTr ? "0–100 arası girin" : "Enter 0–100");
      setResult(null);
      return;
    }
    setOriginalPriceError(null);
    setDiscountPercentageError(null);

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    setResult({ discountAmount, finalPrice, savingsPercentage: discount });
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
              {isTr ? "Sonuçlar" : "Results"}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "İndirim Tutarı" : "Discount Amount"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.discountAmount, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "İndirimli Fiyat" : "Final Price"}
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result.finalPrice, locale)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  {isTr ? "Tasarruf" : "You Save"}
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {formatPercent(result.savingsPercentage, locale)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

