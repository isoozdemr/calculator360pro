"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function MortgageCalculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  
  // Error states
  const [principalError, setPrincipalError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const handlePrincipalChange = (value: string) => {
    setPrincipal(value);
    if (principalError) setPrincipalError(null);
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
    // Validate all fields
    const principalErr = validateField(principal, COMMON_RULES.loanAmount);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const termErr = validateField(loanTerm, COMMON_RULES.loanTerm);

    if (principalErr || interestErr || termErr) {
      setPrincipalError(principalErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(loanTerm) * 12; // Number of payments

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
    setPrincipal("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setPrincipalError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Loan Amount ($)"
            type="number"
            value={principal}
            onChange={(e) => handlePrincipalChange(e.target.value)}
            onBlur={() => {
              const error = validateField(principal, COMMON_RULES.loanAmount);
              setPrincipalError(error);
            }}
            placeholder="Enter loan amount (e.g., 300000)"
            error={principalError || undefined}
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
            placeholder="Enter interest rate (e.g., 3.5)"
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
            placeholder="Enter loan term (e.g., 30)"
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
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Results
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  Monthly Payment
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.monthlyPayment.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Total Interest
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.totalInterest.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
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

