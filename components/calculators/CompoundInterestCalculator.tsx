"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("12");
  const [result, setResult] = useState<{
    finalAmount: number;
    interestEarned: number;
  } | null>(null);
  
  // Error states
  const [principalError, setPrincipalError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);

  const handlePrincipalChange = (value: string) => {
    setPrincipal(value);
    if (principalError) setPrincipalError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleTimeChange = (value: string) => {
    setTime(value);
    if (timeError) setTimeError(null);
  };

  const calculate = () => {
    const principalErr = validateField(principal, COMMON_RULES.positiveNumber);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const timeErr = validateField(time, COMMON_RULES.timeYears);

    if (principalErr || interestErr || timeErr) {
      setPrincipalError(principalErr);
      setInterestRateError(interestErr);
      setTimeError(timeErr);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundingFrequency);

    if (!isNaN(p) && !isNaN(r) && !isNaN(t) && !isNaN(n) && p > 0 && r >= 0 && t > 0 && n > 0) {
      const finalAmount = p * Math.pow(1 + r / n, n * t);
      const interestEarned = finalAmount - p;

      setResult({
        finalAmount,
        interestEarned,
      });
    }
  };

  const reset = () => {
    setPrincipal("");
    setInterestRate("");
    setTime("");
    setCompoundingFrequency("12");
    setResult(null);
    setPrincipalError(null);
    setInterestRateError(null);
    setTimeError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Principal Amount ($)"
            type="number"
            value={principal}
            onChange={(e) => handlePrincipalChange(e.target.value)}
            onBlur={() => {
              const error = validateField(principal, COMMON_RULES.positiveNumber);
              setPrincipalError(error);
            }}
            placeholder="Enter principal amount (e.g., 10000)"
            error={principalError || undefined}
            helperText="Enter the initial investment amount"
            step="100"
            min="0.01"
          />
          <Input
            label="Annual Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => handleInterestRateChange(e.target.value)}
            onBlur={() => {
              const error = validateField(interestRate, COMMON_RULES.interestRate);
              setInterestRateError(error);
            }}
            placeholder="Enter interest rate (e.g., 5.5)"
            error={interestRateError || undefined}
            helperText="Enter the annual interest rate as a percentage"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Time (years)"
            type="number"
            value={time}
            onChange={(e) => handleTimeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(time, COMMON_RULES.timeYears);
              setTimeError(error);
            }}
            placeholder="Enter time period (e.g., 10)"
            error={timeError || undefined}
            helperText="Enter the investment period in years"
            step="0.1"
            min="0.01"
            max="100"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Compounding Frequency
            </label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="1">Annually</option>
              <option value="2">Semi-annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>

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
                  Final Amount
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.finalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Interest Earned
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.interestEarned.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

