"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [result, setResult] = useState<{
    payoffTime: number;
    totalInterest: number;
    totalPayment: number;
    minimumPayment: number;
    warning: string | null;
  } | null>(null);
  
  // Error states
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [monthlyPaymentError, setMonthlyPaymentError] = useState<string | null>(null);

  const handleBalanceChange = (value: string) => {
    setBalance(value);
    if (balanceError) setBalanceError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleMonthlyPaymentChange = (value: string) => {
    setMonthlyPayment(value);
    if (monthlyPaymentError) setMonthlyPaymentError(null);
  };

  const calculate = () => {
    const balanceErr = validateField(balance, COMMON_RULES.positiveNumber);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const paymentErr = validateField(monthlyPayment, COMMON_RULES.positiveNumber);

    if (balanceErr || interestErr || paymentErr) {
      setBalanceError(balanceErr);
      setInterestRateError(interestErr);
      setMonthlyPaymentError(paymentErr);
      return;
    }

    const bal = parseFloat(balance);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const payment = parseFloat(monthlyPayment);

    // Calculate minimum payment (typically 1% of balance + interest)
    const minimumPayment = Math.max(bal * 0.01 + (bal * rate), 25);

    if (payment < minimumPayment) {
      setMonthlyPaymentError(`Minimum payment should be at least $${minimumPayment.toFixed(2)}`);
      return;
    }

    if (payment <= bal * rate) {
      setMonthlyPaymentError("Monthly payment must be greater than monthly interest");
      return;
    }

    // Calculate payoff time using iterative method
    let remainingBalance = bal;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 600; // 50 years max

    while (remainingBalance > 0.01 && months < maxMonths) {
      const monthlyInterest = remainingBalance * rate;
      totalInterest += monthlyInterest;
      remainingBalance = remainingBalance + monthlyInterest - payment;
      months++;
    }

    const totalPayment = bal + totalInterest;
    let warning: string | null = null;

    if (payment < minimumPayment * 1.5) {
      warning = "Consider paying more than the minimum to pay off faster and save on interest.";
    }

    setResult({
      payoffTime: months,
      totalInterest,
      totalPayment,
      minimumPayment,
      warning,
    });
  };

  const reset = () => {
    setBalance("");
    setInterestRate("");
    setMonthlyPayment("");
    setResult(null);
    setBalanceError(null);
    setInterestRateError(null);
    setMonthlyPaymentError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Credit Card Balance ($)"
            type="number"
            value={balance}
            onChange={(e) => handleBalanceChange(e.target.value)}
            onBlur={() => {
              const error = validateField(balance, COMMON_RULES.positiveNumber);
              setBalanceError(error);
            }}
            placeholder="Enter credit card balance (e.g., 5000)"
            error={balanceError || undefined}
            helperText="Enter the current credit card balance"
            step="10"
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
            placeholder="Enter interest rate (e.g., 18.5)"
            error={interestRateError || undefined}
            helperText="Enter the annual interest rate (APR) as a percentage"
            step="0.1"
            min="0"
            max="100"
          />
          <Input
            label="Monthly Payment ($)"
            type="number"
            value={monthlyPayment}
            onChange={(e) => handleMonthlyPaymentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(monthlyPayment, COMMON_RULES.positiveNumber);
              setMonthlyPaymentError(error);
            }}
            placeholder="Enter monthly payment (e.g., 200)"
            error={monthlyPaymentError || undefined}
            helperText="Enter the amount you plan to pay each month"
            step="10"
            min="0.01"
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
                  Payoff Time
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.payoffTime < 12 
                    ? `${result.payoffTime} ${result.payoffTime === 1 ? "month" : "months"}`
                    : `${(result.payoffTime / 12).toFixed(1)} years`}
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
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  Minimum Payment
                </p>
                <p className="text-lg font-semibold text-[#1e293b]">
                  ${result.minimumPayment.toFixed(2)}
                </p>
              </div>
              {result.warning && (
                <div className="pt-3 border-t border-[#10b981]/30">
                  <p className="text-sm text-[#ef4444] font-medium">
                    ⚠️ {result.warning}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

