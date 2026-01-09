"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function SalaryCalculator() {
  const [salary, setSalary] = useState("");
  const [payFrequency, setPayFrequency] = useState<"annual" | "monthly" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [result, setResult] = useState<{
    annual: number;
    monthly: number;
    weekly: number;
    hourly: number;
    takeHome: number;
  } | null>(null);
  
  // Error states
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [hoursError, setHoursError] = useState<string | null>(null);

  const handleSalaryChange = (value: string) => {
    setSalary(value);
    if (salaryError) setSalaryError(null);
  };

  const handleHoursChange = (value: string) => {
    setHoursPerWeek(value);
    if (hoursError) setHoursError(null);
  };

  const calculate = () => {
    const salaryErr = validateField(salary, COMMON_RULES.positiveNumber);
    const hoursErr = payFrequency === "hourly" 
      ? validateField(hoursPerWeek, COMMON_RULES.hoursPerWeek)
      : null;

    if (salaryErr || hoursErr) {
      setSalaryError(salaryErr);
      setHoursError(hoursErr);
      return;
    }

    let annualSalary = 0;

    if (payFrequency === "annual") {
      annualSalary = parseFloat(salary);
    } else if (payFrequency === "monthly") {
      annualSalary = parseFloat(salary) * 12;
    } else if (payFrequency === "hourly") {
      const hourly = parseFloat(salary);
      const hours = parseFloat(hoursPerWeek) || 40;
      annualSalary = hourly * hours * 52;
    }

    if (!isNaN(annualSalary) && annualSalary > 0) {
      const monthly = annualSalary / 12;
      const weekly = annualSalary / 52;
      const hours = parseFloat(hoursPerWeek) || 40;
      const hourly = annualSalary / (hours * 52);

      // Simplified tax calculation (estimate 20% for federal + state)
      const estimatedTaxRate = 0.2;
      const takeHome = annualSalary * (1 - estimatedTaxRate);

      setResult({
        annual: annualSalary,
        monthly,
        weekly,
        hourly,
        takeHome,
      });
    }
  };

  const reset = () => {
    setSalary("");
    setPayFrequency("annual");
    setHoursPerWeek("40");
    setResult(null);
    setSalaryError(null);
    setHoursError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] dark:text-[#f1f5f9] mb-1.5">
              Pay Frequency
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPayFrequency("annual")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "annual"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
                }`}
              >
                Annual
              </button>
              <button
                onClick={() => setPayFrequency("monthly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "monthly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPayFrequency("hourly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                  payFrequency === "hourly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
                }`}
              >
                Hourly
              </button>
            </div>
          </div>

          <Input
            label={
              payFrequency === "annual"
                ? "Annual Salary ($)"
                : payFrequency === "monthly"
                ? "Monthly Salary ($)"
                : "Hourly Wage ($)"
            }
            type="number"
            value={salary}
            onChange={(e) => handleSalaryChange(e.target.value)}
            onBlur={() => {
              const error = validateField(salary, COMMON_RULES.positiveNumber);
              setSalaryError(error);
            }}
            placeholder={
              payFrequency === "annual"
                ? "Enter annual salary (e.g., 75000)"
                : payFrequency === "monthly"
                ? "Enter monthly salary (e.g., 6250)"
                : "Enter hourly wage (e.g., 25)"
            }
            error={salaryError || undefined}
            helperText={
              payFrequency === "annual"
                ? "Enter your annual salary"
                : payFrequency === "monthly"
                ? "Enter your monthly salary"
                : "Enter your hourly wage"
            }
            step={payFrequency === "hourly" ? "0.01" : "1000"}
            min="0.01"
          />

          {payFrequency === "hourly" && (
            <Input
              label="Hours Per Week"
              type="number"
              value={hoursPerWeek}
              onChange={(e) => handleHoursChange(e.target.value)}
              onBlur={() => {
                const error = validateField(hoursPerWeek, COMMON_RULES.hoursPerWeek);
                setHoursError(error);
              }}
              placeholder="Enter hours per week (e.g., 40)"
              error={hoursError || undefined}
              helperText="Enter the number of hours you work per week"
              step="1"
              min="1"
              max="168"
            />
          )}

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
              Salary Breakdown
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">Annual</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  ${result.annual.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">Monthly</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  ${result.monthly.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">Weekly</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  ${result.weekly.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">Hourly</p>
                <p className="text-xl font-bold text-[#10b981] font-mono">
                  ${result.hourly.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
                Estimated Take-Home (after ~20% taxes)
              </p>
              <p className="text-2xl font-bold text-[#10b981] font-mono">
                ${result.takeHome.toFixed(2)}/year
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

