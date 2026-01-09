"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  
  // Error states
  const [loanAmountError, setLoanAmountError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const handleLoanAmountChange = (value: string) => {
    setLoanAmount(value);
    if (loanAmountError) setLoanAmountError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleLoanTermChange = (value: string) => {
    setLoanTerm(value);
    if (loanTermError) setLoanTermError(null);
  };

  const calculate = () => {
    const amountErr = validateField(loanAmount, COMMON_RULES.loanAmount);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const termErr = validateField(loanTerm, COMMON_RULES.loanTerm);

    if (amountErr || interestErr || termErr) {
      setLoanAmountError(amountErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const p = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!isNaN(p) && !isNaN(r) && !isNaN(n) && p > 0 && r >= 0 && n > 0) {
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - p;

      setResult({
        monthlyPayment,
        totalInterest,
        totalPayment,
      });
    }
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setLoanAmountError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Loan Amount ($)"
            type="number"
            value={loanAmount}
            onChange={(e) => handleLoanAmountChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanAmount, COMMON_RULES.loanAmount);
              setLoanAmountError(error);
            }}
            placeholder="Enter loan amount (e.g., 25000)"
            error={loanAmountError || undefined}
            helperText="Enter the total loan amount"
            step="1000"
            min="1000"
            max="10000000"
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
            placeholder="Enter interest rate (e.g., 4.5)"
            error={interestRateError || undefined}
            helperText="Enter the annual interest rate as a percentage"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Loan Term (years)"
            type="number"
            value={loanTerm}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanTerm, COMMON_RULES.loanTerm);
              setLoanTermError(error);
            }}
            placeholder="Enter loan term (e.g., 5)"
            error={loanTermError || undefined}
            helperText="Enter the loan term in years (1-50)"
            step="1"
            min="1"
            max="50"
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
          <div className="result-container bg-[#f0fdf4] dark:bg-[#064e3b] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b] dark:text-[#f1f5f9]">
              Results
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                  Monthly Payment
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.monthlyPayment.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                  Total Interest
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.totalInterest.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                  Total Payment
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.totalPayment.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

