"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function StudentLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [repaymentPlan, setRepaymentPlan] = useState<"standard" | "extended">("standard");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    payoffDate: string;
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
    const termErr = validateField(loanTerm, {
      required: true,
      min: 5,
      max: repaymentPlan === "standard" ? 10 : 25,
      custom: {
        validate: (v: string) => {
          const num = parseFloat(v);
          const maxTerm = repaymentPlan === "standard" ? 10 : 25;
          return !isNaN(num) && num >= 5 && num <= maxTerm && Number.isInteger(num);
        },
        message: `Loan term must be between 5 and ${repaymentPlan === "standard" ? 10 : 25} years`,
      },
    } as typeof COMMON_RULES.positiveNumber);

    if (amountErr || interestErr || termErr) {
      setLoanAmountError(amountErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const principal = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(loanTerm) * 12; // Number of payments

    if (!isNaN(principal) && !isNaN(r) && !isNaN(n) && principal > 0 && r >= 0 && n > 0) {
      const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - principal;

      // Calculate payoff date
      const today = new Date();
      const payoffDate = new Date(today);
      payoffDate.setMonth(payoffDate.getMonth() + n);
      const payoffDateStr = payoffDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setResult({
        monthlyPayment,
        totalInterest,
        totalPayment,
        payoffDate: payoffDateStr,
      });
    }
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setRepaymentPlan("standard");
    setResult(null);
    setLoanAmountError(null);
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
            value={loanAmount}
            onChange={(e) => handleLoanAmountChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanAmount, COMMON_RULES.loanAmount);
              setLoanAmountError(error);
            }}
            placeholder="Enter loan amount (e.g., 30000)"
            error={loanAmountError || undefined}
            helperText="Enter the total student loan amount"
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
            placeholder="Enter interest rate (e.g., 5.5)"
            error={interestRateError || undefined}
            helperText="Enter the annual interest rate as a percentage"
            step="0.01"
            min="0"
            max="100"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Repayment Plan
            </label>
            <select
              value={repaymentPlan}
              onChange={(e) => setRepaymentPlan(e.target.value as "standard" | "extended")}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="standard">Standard (5-10 years)</option>
              <option value="extended">Extended (5-25 years)</option>
            </select>
          </div>
          <Input
            label="Loan Term (years)"
            type="number"
            value={loanTerm}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            onBlur={() => {
              const error = validateField(loanTerm, {
                required: true,
                min: 5,
                max: repaymentPlan === "standard" ? 10 : 25,
                custom: {
                  validate: (v: string) => {
                    const num = parseFloat(v);
                    const maxTerm = repaymentPlan === "standard" ? 10 : 25;
                    return !isNaN(num) && num >= 5 && num <= maxTerm && Number.isInteger(num);
                  },
                  message: `Loan term must be between 5 and ${repaymentPlan === "standard" ? 10 : 25} years`,
                },
              } as typeof COMMON_RULES.positiveNumber);
              setLoanTermError(error);
            }}
            placeholder={repaymentPlan === "standard" ? "Enter loan term (5-10 years)" : "Enter loan term (5-25 years)"}
            error={loanTermError || undefined}
            helperText={repaymentPlan === "standard" ? "Enter the loan term in years (5-10)" : "Enter the loan term in years (5-25)"}
            step="1"
            min="5"
            max={repaymentPlan === "standard" ? 10 : 25}
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
              <div>
                <p className="text-sm text-[#64748b]">
                  Payoff Date
                </p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  {result.payoffDate}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

