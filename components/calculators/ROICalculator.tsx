"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES, type FieldValidation } from "@/lib/validation/rules";
import { CalculatorDisclaimer } from "@/components/calculators/CalculatorDisclaimer";

const finalValueRule: FieldValidation = { required: true, min: 0, custom: { validate: (v: string) => !isNaN(parseFloat(v)), message: "Enter a number" } };

export function ROICalculator() {
  const [initialCost, setInitialCost] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{ roi: number; annualized?: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [costError, setCostError] = useState<string | null>(null);
  const [valueError, setValueError] = useState<string | null>(null);
  const [yearsError, setYearsError] = useState<string | null>(null);

  const calculate = () => {
    const costErr = validateField(initialCost, COMMON_RULES.positiveNumber);
    const valErr = validateField(finalValue, finalValueRule);
    if (costErr || valErr) {
      setCostError(costErr);
      setValueError(valErr);
      return;
    }
    if (years.trim()) {
      const yearsErr = validateField(years, { required: true, min: 0.01, max: 200 });
      if (yearsErr) {
        setYearsError(yearsErr);
        return;
      }
    }
    setCostError(null);
    setValueError(null);
    setYearsError(null);

    const cost = parseFloat(initialCost);
    const value = parseFloat(finalValue);
    const gain = value - cost;
    const roi = cost === 0 ? 0 : (gain / cost) * 100;
    let annualized: number | undefined;
    const yNum = parseFloat(years);
    if (years.trim() && !isNaN(yNum) && yNum > 0 && roi !== -100) {
      const mult = 1 + roi / 100;
      if (mult > 0) annualized = (Math.pow(mult, 1 / yNum) - 1) * 100;
    }
    setResult({ roi, annualized });
  };

  const reset = () => {
    setInitialCost("");
    setFinalValue("");
    setYears("");
    setResult(null);
    setCostError(null);
    setValueError(null);
    setYearsError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;
    const text = result.annualized != null
      ? "ROI: " + result.roi.toFixed(2) + "% | Annualized: " + result.annualized.toFixed(2) + "%"
      : "ROI: " + result.roi.toFixed(2) + "%";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <Input
          label="Initial cost / investment ($)"
          type="number"
          value={initialCost}
          onChange={(e) => { setInitialCost(e.target.value); if (costError) setCostError(null); }}
          onBlur={() => setCostError(validateField(initialCost, COMMON_RULES.positiveNumber))}
          placeholder="e.g. 10000"
          error={costError || undefined}
          step="1"
          min="0"
        />
        <Input
          label="Final value / amount received ($)"
          type="number"
          value={finalValue}
          onChange={(e) => { setFinalValue(e.target.value); if (valueError) setValueError(null); }}
          onBlur={() => setValueError(validateField(finalValue, finalValueRule))}
          placeholder="e.g. 12500"
          error={valueError || undefined}
          step="1"
          min="0"
        />
        <Input
          label="Holding period (years) — optional"
          type="number"
          value={years}
          onChange={(e) => { setYears(e.target.value); if (yearsError) setYearsError(null); }}
          onBlur={() => { if (!years.trim()) setYearsError(null); else setYearsError(validateField(years, { min: 0.01, max: 200 }) || null); }}
          placeholder="e.g. 3"
          error={yearsError || undefined}
          helperText="Leave blank for total ROI only"
          step="0.1"
          min="0"
        />
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">Calculate ROI</Button>
          <Button onClick={reset} variant="outline">Reset</Button>
        </div>
      </div>
      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">Result</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">ROI: {result.roi.toFixed(2)}%</p>
          {result.annualized != null && <p className="text-lg text-[#64748b]">Annualized return: {result.annualized.toFixed(2)}% per year</p>}
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? "Copied!" : "Copy result"}</Button>
        </div>
      )}
      <CalculatorDisclaimer category="finance" locale="en" />
    </div>
  );
}
