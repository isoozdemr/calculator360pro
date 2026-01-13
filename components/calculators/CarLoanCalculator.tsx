"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  
  // Error states
  const [carPriceError, setCarPriceError] = useState<string | null>(null);
  const [downPaymentError, setDownPaymentError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [loanTermError, setLoanTermError] = useState<string | null>(null);

  const handleCarPriceChange = (value: string) => {
    setCarPrice(value);
    if (carPriceError) setCarPriceError(null);
  };

  const handleDownPaymentChange = (value: string) => {
    setDownPayment(value);
    if (downPaymentError) setDownPaymentError(null);
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
    const priceErr = validateField(carPrice, COMMON_RULES.positiveNumber);
    const downErr = validateField(downPayment, COMMON_RULES.optionalPositive);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const termErr = validateField(loanTerm, {
      required: true,
      min: 1,
      max: 8,
      custom: {
        validate: (v: string) => {
          const num = parseFloat(v);
          return !isNaN(num) && num >= 1 && num <= 8 && Number.isInteger(num);
        },
        message: "Loan term must be between 1 and 8 years",
      },
    } as typeof COMMON_RULES.positiveNumber);

    if (priceErr || interestErr || termErr) {
      setCarPriceError(priceErr);
      setDownPaymentError(downErr);
      setInterestRateError(interestErr);
      setLoanTermError(termErr);
      return;
    }

    const price = parseFloat(carPrice);
    const down = parseFloat(downPayment) || 0;
    const principal = price - down;
    
    if (principal <= 0) {
      setDownPaymentError("Down payment cannot exceed car price");
      return;
    }

    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(loanTerm) * 12; // Number of payments

    if (!isNaN(principal) && !isNaN(r) && !isNaN(n) && principal > 0 && r >= 0 && n > 0) {
      const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - principal;

      setResult({
        monthlyPayment,
        totalInterest,
        totalPayment,
      });
    }
  };

  const reset = () => {
    setCarPrice("");
    setDownPayment("");
    setInterestRate("");
    setLoanTerm("");
    setResult(null);
    setCarPriceError(null);
    setDownPaymentError(null);
    setInterestRateError(null);
    setLoanTermError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Car Price ($)"
            type="number"
            value={carPrice}
            onChange={(e) => handleCarPriceChange(e.target.value)}
            onBlur={() => {
              const error = validateField(carPrice, COMMON_RULES.positiveNumber);
              setCarPriceError(error);
            }}
            placeholder="Enter car price (e.g., 25000)"
            error={carPriceError || undefined}
            helperText="Enter the total car price"
            step="100"
            min="0.01"
          />
          <Input
            label="Down Payment ($)"
            type="number"
            value={downPayment}
            onChange={(e) => handleDownPaymentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(downPayment, COMMON_RULES.optionalPositive);
              setDownPaymentError(error);
            }}
            placeholder="Enter down payment (e.g., 5000)"
            error={downPaymentError || undefined}
            helperText="Enter down payment amount (optional)"
            step="100"
            min="0"
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
              const error = validateField(loanTerm, {
                required: true,
                min: 1,
                max: 8,
                custom: {
                  validate: (v: string) => {
                    const num = parseFloat(v);
                    return !isNaN(num) && num >= 1 && num <= 8 && Number.isInteger(num);
                  },
                  message: "Loan term must be between 1 and 8 years",
                },
              } as typeof COMMON_RULES.positiveNumber);
              setLoanTermError(error);
            }}
            placeholder="Enter loan term (e.g., 5)"
            error={loanTermError || undefined}
            helperText="Enter the loan term in years (1-8)"
            step="1"
            min="1"
            max="8"
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

