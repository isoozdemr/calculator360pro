"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalContributions: number;
    interestEarned: number;
  } | null>(null);
  
  // Error states
  const [initialInvestmentError, setInitialInvestmentError] = useState<string | null>(null);
  const [monthlyContributionError, setMonthlyContributionError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [timePeriodError, setTimePeriodError] = useState<string | null>(null);

  const handleInitialInvestmentChange = (value: string) => {
    setInitialInvestment(value);
    if (initialInvestmentError) setInitialInvestmentError(null);
  };

  const handleMonthlyContributionChange = (value: string) => {
    setMonthlyContribution(value);
    if (monthlyContributionError) setMonthlyContributionError(null);
  };

  const handleInterestRateChange = (value: string) => {
    setInterestRate(value);
    if (interestRateError) setInterestRateError(null);
  };

  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
    if (timePeriodError) setTimePeriodError(null);
  };

  const calculate = () => {
    const initialErr = validateField(initialInvestment, COMMON_RULES.optionalPositive);
    const monthlyErr = validateField(monthlyContribution, COMMON_RULES.optionalPositive);
    const interestErr = validateField(interestRate, COMMON_RULES.interestRate);
    const timeErr = validateField(timePeriod, COMMON_RULES.timeYears);

    if (interestErr || timeErr) {
      setInterestRateError(interestErr);
      setTimePeriodError(timeErr);
      return;
    }

    const initial = parseFloat(initialInvestment) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const years = parseFloat(timePeriod);
    const months = years * 12;

    if (!isNaN(initial) && !isNaN(monthly) && !isNaN(rate) && !isNaN(months) && months > 0) {
      // Compound interest for initial investment
      let finalAmount = initial * Math.pow(1 + rate, months);
      
      // Future value of monthly contributions (annuity)
      if (monthly > 0 && rate > 0) {
        finalAmount += monthly * ((Math.pow(1 + rate, months) - 1) / rate);
      } else if (monthly > 0) {
        finalAmount += monthly * months;
      }

      const totalContributions = initial + (monthly * months);
      const interestEarned = finalAmount - totalContributions;

      setResult({
        finalAmount,
        totalContributions,
        interestEarned,
      });
    }
  };

  const reset = () => {
    setInitialInvestment("");
    setMonthlyContribution("");
    setInterestRate("");
    setTimePeriod("");
    setResult(null);
    setInitialInvestmentError(null);
    setMonthlyContributionError(null);
    setInterestRateError(null);
    setTimePeriodError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Initial Investment ($)"
            type="number"
            value={initialInvestment}
            onChange={(e) => handleInitialInvestmentChange(e.target.value)}
            onBlur={() => {
              const error = validateField(initialInvestment, COMMON_RULES.optionalPositive);
              setInitialInvestmentError(error);
            }}
            placeholder="Enter initial investment (e.g., 5000)"
            error={initialInvestmentError || undefined}
            helperText="Enter starting investment amount (optional)"
            step="100"
            min="0"
          />
          <Input
            label="Monthly Contribution ($)"
            type="number"
            value={monthlyContribution}
            onChange={(e) => handleMonthlyContributionChange(e.target.value)}
            onBlur={() => {
              const error = validateField(monthlyContribution, COMMON_RULES.optionalPositive);
              setMonthlyContributionError(error);
            }}
            placeholder="Enter monthly contribution (e.g., 500)"
            error={monthlyContributionError || undefined}
            helperText="Enter monthly investment amount (optional)"
            step="10"
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
            placeholder="Enter interest rate (e.g., 7)"
            error={interestRateError || undefined}
            helperText="Enter expected annual return as a percentage"
            step="0.01"
            min="0"
            max="100"
          />
          <Input
            label="Time Period (years)"
            type="number"
            value={timePeriod}
            onChange={(e) => handleTimePeriodChange(e.target.value)}
            onBlur={() => {
              const error = validateField(timePeriod, COMMON_RULES.timeYears);
              setTimePeriodError(error);
            }}
            placeholder="Enter investment period (e.g., 20)"
            error={timePeriodError || undefined}
            helperText="Enter the investment period in years"
            step="0.1"
            min="0.01"
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
                  Total Contributions
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.totalContributions.toFixed(2)}
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

