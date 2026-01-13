"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [result, setResult] = useState<{
    retirementSavings: number;
    totalContributions: number;
    interestEarned: number;
    monthlyIncome: number;
  } | null>(null);
  
  // Error states
  const [currentAgeError, setCurrentAgeError] = useState<string | null>(null);
  const [retirementAgeError, setRetirementAgeError] = useState<string | null>(null);
  const [currentSavingsError, setCurrentSavingsError] = useState<string | null>(null);
  const [monthlyContributionError, setMonthlyContributionError] = useState<string | null>(null);
  const [expectedReturnError, setExpectedReturnError] = useState<string | null>(null);

  const handleCurrentAgeChange = (value: string) => {
    setCurrentAge(value);
    if (currentAgeError) setCurrentAgeError(null);
  };

  const handleRetirementAgeChange = (value: string) => {
    setRetirementAge(value);
    if (retirementAgeError) setRetirementAgeError(null);
  };

  const handleCurrentSavingsChange = (value: string) => {
    setCurrentSavings(value);
    if (currentSavingsError) setCurrentSavingsError(null);
  };

  const handleMonthlyContributionChange = (value: string) => {
    setMonthlyContribution(value);
    if (monthlyContributionError) setMonthlyContributionError(null);
  };

  const handleExpectedReturnChange = (value: string) => {
    setExpectedReturn(value);
    if (expectedReturnError) setExpectedReturnError(null);
  };

  const calculate = () => {
    const currentAgeErr = validateField(currentAge, COMMON_RULES.age);
    const retirementAgeErr = validateField(retirementAge, COMMON_RULES.age);
    const currentSavingsErr = validateField(currentSavings, COMMON_RULES.optionalPositive);
    const monthlyContributionErr = validateField(monthlyContribution, COMMON_RULES.optionalPositive);
    const expectedReturnErr = validateField(expectedReturn, COMMON_RULES.interestRate);

    if (currentAgeErr || retirementAgeErr || expectedReturnErr) {
      setCurrentAgeError(currentAgeErr);
      setRetirementAgeError(retirementAgeErr);
      setCurrentSavingsError(currentSavingsErr);
      setMonthlyContributionError(monthlyContributionErr);
      setExpectedReturnError(expectedReturnErr);
      return;
    }

    const current = parseFloat(currentAge);
    const retirement = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const rate = parseFloat(expectedReturn) / 100 / 12; // Monthly rate

    if (retirement <= current) {
      setRetirementAgeError("Retirement age must be greater than current age");
      return;
    }

    const yearsToRetirement = retirement - current;
    const months = yearsToRetirement * 12;

    if (!isNaN(current) && !isNaN(retirement) && !isNaN(savings) && !isNaN(monthly) && !isNaN(rate) && months > 0) {
      // Compound interest for current savings
      let retirementSavings = savings * Math.pow(1 + rate, months);
      
      // Future value of monthly contributions (annuity)
      if (monthly > 0 && rate > 0) {
        retirementSavings += monthly * ((Math.pow(1 + rate, months) - 1) / rate);
      } else if (monthly > 0) {
        retirementSavings += monthly * months;
      }

      const totalContributions = savings + (monthly * months);
      const interestEarned = retirementSavings - totalContributions;

      // Estimate monthly income (4% withdrawal rule)
      const monthlyIncome = (retirementSavings * 0.04) / 12;

      setResult({
        retirementSavings,
        totalContributions,
        interestEarned,
        monthlyIncome,
      });
    }
  };

  const reset = () => {
    setCurrentAge("");
    setRetirementAge("");
    setCurrentSavings("");
    setMonthlyContribution("");
    setExpectedReturn("");
    setResult(null);
    setCurrentAgeError(null);
    setRetirementAgeError(null);
    setCurrentSavingsError(null);
    setMonthlyContributionError(null);
    setExpectedReturnError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Current Age"
            type="number"
            value={currentAge}
            onChange={(e) => handleCurrentAgeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(currentAge, COMMON_RULES.age);
              setCurrentAgeError(error);
            }}
            placeholder="Enter current age (e.g., 30)"
            error={currentAgeError || undefined}
            helperText="Enter your current age"
            step="1"
            min="18"
            max="100"
          />
          <Input
            label="Retirement Age"
            type="number"
            value={retirementAge}
            onChange={(e) => handleRetirementAgeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(retirementAge, COMMON_RULES.age);
              setRetirementAgeError(error);
            }}
            placeholder="Enter retirement age (e.g., 65)"
            error={retirementAgeError || undefined}
            helperText="Enter your planned retirement age"
            step="1"
            min="18"
            max="100"
          />
          <Input
            label="Current Savings ($)"
            type="number"
            value={currentSavings}
            onChange={(e) => handleCurrentSavingsChange(e.target.value)}
            onBlur={() => {
              const error = validateField(currentSavings, COMMON_RULES.optionalPositive);
              setCurrentSavingsError(error);
            }}
            placeholder="Enter current retirement savings (e.g., 50000)"
            error={currentSavingsError || undefined}
            helperText="Enter your current retirement savings (optional)"
            step="1000"
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
            helperText="Enter monthly retirement contribution (optional)"
            step="10"
            min="0"
          />
          <Input
            label="Expected Annual Return (%)"
            type="number"
            value={expectedReturn}
            onChange={(e) => handleExpectedReturnChange(e.target.value)}
            onBlur={() => {
              const error = validateField(expectedReturn, COMMON_RULES.interestRate);
              setExpectedReturnError(error);
            }}
            placeholder="Enter expected return (e.g., 7)"
            error={expectedReturnError || undefined}
            helperText="Enter expected annual return as a percentage"
            step="0.1"
            min="0"
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
              Retirement Projection
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  Retirement Savings
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.retirementSavings.toFixed(2)}
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
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  Estimated Monthly Income (4% rule)
                </p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  ${result.monthlyIncome.toFixed(2)}
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  Based on 4% annual withdrawal rate
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

