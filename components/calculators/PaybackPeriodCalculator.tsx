"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function PaybackPeriodCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [cashFlow, setCashFlow] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [result, setResult] = useState<{ years: number; months: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [investmentError, setInvestmentError] = useState<string | null>(null);
  const [cashFlowError, setCashFlowError] = useState<string | null>(null);

  const calculate = () => {
    const invErr = validateField(initialInvestment, COMMON_RULES.positiveNumber);
    const flowErr = validateField(cashFlow, COMMON_RULES.positiveNumber);
    if (invErr || flowErr) {
      setInvestmentError(invErr);
      setCashFlowError(flowErr);
      return;
    }
    setInvestmentError(null);
    setCashFlowError(null);

    const inv = parseFloat(initialInvestment);
    const flow = parseFloat(cashFlow);
    if (flow <= 0) return;
    const monthsToPayback = isMonthly ? inv / flow : (inv / flow) * 12;
    const years = Math.floor(monthsToPayback / 12);
    const months = Math.round(monthsToPayback % 12);
    setResult({ years, months: monthsToPayback < 12 ? Math.round(monthsToPayback) : months });
  };

  const reset = () => {
    setInitialInvestment("");
    setCashFlow("");
    setResult(null);
    setInvestmentError(null);
    setCashFlowError(null);
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;
    const text = result.years >= 1
      ? `Payback period: ${result.years} year(s) ${result.months} month(s)`
      : `Payback period: ${result.months} month(s)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayYears = result ? result.years : 0;
  const displayMonths = result ? (result.years >= 1 ? result.months : result.months) : 0;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <Input
          label="Initial investment ($)"
          type="number"
          value={initialInvestment}
          onChange={(e) => {
            setInitialInvestment(e.target.value);
            if (investmentError) setInvestmentError(null);
          }}
          onBlur={() => setInvestmentError(validateField(initialInvestment, COMMON_RULES.positiveNumber))}
          placeholder="e.g. 24000"
          error={investmentError || undefined}
          step="1"
          min="0"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="annual"
              name="flowType"
              checked={!isMonthly}
              onChange={() => setIsMonthly(false)}
            />
            <label htmlFor="annual">Annual net cash flow</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="monthly"
              name="flowType"
              checked={isMonthly}
              onChange={() => setIsMonthly(true)}
            />
            <label htmlFor="monthly">Monthly net cash flow</label>
          </div>
        </div>
        <Input
          label={isMonthly ? "Monthly net cash flow ($)" : "Annual net cash flow ($)"}
          type="number"
          value={cashFlow}
          onChange={(e) => {
            setCashFlow(e.target.value);
            if (cashFlowError) setCashFlowError(null);
          }}
          onBlur={() => setCashFlowError(validateField(cashFlow, COMMON_RULES.positiveNumber))}
          placeholder={isMonthly ? "e.g. 500" : "e.g. 6000"}
          error={cashFlowError || undefined}
          step="1"
          min="0"
        />
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            Calculate payback
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>
      </div>

      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">Result</h3>
          <p className="text-2xl font-bold text-[#10b981] font-mono">
            {displayYears >= 1
              ? `Payback period: ${displayYears} year(s)${displayMonths > 0 ? ` ${displayMonths} month(s)` : ""}`
              : `Payback period: ${displayMonths} month(s)`}
          </p>
          <p className="text-sm text-[#64748b]">
            Simple payback (initial investment ÷ cash flow). Does not account for time value of money.
          </p>
          <Button onClick={copyResult} variant="outline" size="sm">
            {copied ? "Copied!" : "Copy result"}
          </Button>
        </div>
      )}
    </div>
  );
}
