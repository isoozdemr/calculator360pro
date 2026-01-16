"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

// Simplified US tax brackets for 2026 (single filer)
const TAX_BRACKETS = [
  { min: 0, max: 12400, rate: 0.1 },
  { min: 12401, max: 50400, rate: 0.12 },
  { min: 50401, max: 105700, rate: 0.22 },
  { min: 105701, max: 201775, rate: 0.24 },
  { min: 201776, max: 256225, rate: 0.32 },
  { min: 256226, max: 640600, rate: 0.35 },
  { min: 640601, max: Infinity, rate: 0.37 },
];

const STANDARD_DEDUCTION = 16100; // 2026 single filer

export function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState<{
    taxableIncome: number;
    taxOwed: number;
    effectiveRate: number;
    marginalRate: number;
  } | null>(null);
  
  // Error states
  const [incomeError, setIncomeError] = useState<string | null>(null);
  const [deductionsError, setDeductionsError] = useState<string | null>(null);

  const calculateTax = (taxableIncome: number) => {
    let tax = 0;
    let remainingIncome = taxableIncome;

    for (const bracket of TAX_BRACKETS) {
      if (remainingIncome <= 0) break;

      const bracketIncome = Math.min(
        remainingIncome,
        bracket.max === Infinity ? remainingIncome : bracket.max - bracket.min
      );
      tax += bracketIncome * bracket.rate;
      remainingIncome -= bracketIncome;
    }

    return tax;
  };

  const handleIncomeChange = (value: string) => {
    setIncome(value);
    if (incomeError) setIncomeError(null);
  };

  const handleDeductionsChange = (value: string) => {
    setDeductions(value);
    if (deductionsError) setDeductionsError(null);
  };

  const calculate = () => {
    const incomeErr = validateField(income, COMMON_RULES.income);
    const deductionsErr = deductions 
      ? validateField(deductions, COMMON_RULES.optionalPositive)
      : null;

    if (incomeErr || deductionsErr) {
      setIncomeError(incomeErr);
      setDeductionsError(deductionsErr);
      return;
    }

    const grossIncome = parseFloat(income);
    const itemizedDeductions = parseFloat(deductions) || 0;

    if (!isNaN(grossIncome) && grossIncome > 0) {
      const deduction = Math.max(STANDARD_DEDUCTION, itemizedDeductions);
      const taxableIncome = Math.max(0, grossIncome - deduction);
      const taxOwed = calculateTax(taxableIncome);
      const effectiveRate = (taxOwed / grossIncome) * 100;

      // Find marginal rate
      let marginalRate = 0;
      for (const bracket of TAX_BRACKETS) {
        if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
          marginalRate = bracket.rate * 100;
          break;
        }
      }

      setResult({
        taxableIncome,
        taxOwed,
        effectiveRate,
        marginalRate,
      });
    }
  };

  const reset = () => {
    setIncome("");
    setDeductions("");
    setResult(null);
    setIncomeError(null);
    setDeductionsError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Annual Income ($)"
            type="number"
            value={income}
            onChange={(e) => handleIncomeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(income, COMMON_RULES.income);
              setIncomeError(error);
            }}
            placeholder="Enter annual income (e.g., 75000)"
            error={incomeError || undefined}
            helperText="Enter your gross annual income"
            step="1000"
            min="0"
            max="100000000"
          />
          <Input
            label="Itemized Deductions ($) - Optional"
            type="number"
            value={deductions}
            onChange={(e) => handleDeductionsChange(e.target.value)}
            onBlur={() => {
              if (deductions) {
                const error = validateField(deductions, COMMON_RULES.optionalPositive);
                setDeductionsError(error);
              }
            }}
            placeholder="Enter deductions (or leave blank for standard deduction)"
            error={deductionsError || undefined}
            helperText="Enter itemized deductions or leave blank to use standard deduction"
            step="100"
            min="0"
          />
          <p className="text-sm text-[#64748b]">
            Standard deduction for 2026: ${STANDARD_DEDUCTION.toLocaleString()}
          </p>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Calculate Tax
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Tax Results
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  Taxable Income
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.taxableIncome.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Tax Owed
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.taxOwed.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Effective Tax Rate
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.effectiveRate.toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Marginal Tax Rate
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.marginalRate.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

