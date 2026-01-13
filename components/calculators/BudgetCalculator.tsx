"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function BudgetCalculator() {
  const [income, setIncome] = useState("");
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [utilities, setUtilities] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [other, setOther] = useState("");
  const [result, setResult] = useState<{
    totalExpenses: number;
    remainingIncome: number;
    percentageBreakdown: Record<string, number>;
  } | null>(null);
  
  // Error states
  const [incomeError, setIncomeError] = useState<string | null>(null);
  const [housingError, setHousingError] = useState<string | null>(null);
  const [foodError, setFoodError] = useState<string | null>(null);
  const [transportError, setTransportError] = useState<string | null>(null);
  const [utilitiesError, setUtilitiesError] = useState<string | null>(null);
  const [entertainmentError, setEntertainmentError] = useState<string | null>(null);
  const [otherError, setOtherError] = useState<string | null>(null);

  const handleIncomeChange = (value: string) => {
    setIncome(value);
    if (incomeError) setIncomeError(null);
  };

  const handleExpenseChange = (setter: (v: string) => void, errorSetter: (v: string | null) => void) => (value: string) => {
    setter(value);
    errorSetter(null);
  };

  const calculate = () => {
    const incomeErr = validateField(income, COMMON_RULES.income);
    const housingErr = validateField(housing, COMMON_RULES.optionalPositive);
    const foodErr = validateField(food, COMMON_RULES.optionalPositive);
    const transportErr = validateField(transport, COMMON_RULES.optionalPositive);
    const utilitiesErr = validateField(utilities, COMMON_RULES.optionalPositive);
    const entertainmentErr = validateField(entertainment, COMMON_RULES.optionalPositive);
    const otherErr = validateField(other, COMMON_RULES.optionalPositive);

    if (incomeErr) {
      setIncomeError(incomeErr);
      return;
    }

    const incomeVal = parseFloat(income);
    const expenses = {
      housing: parseFloat(housing) || 0,
      food: parseFloat(food) || 0,
      transport: parseFloat(transport) || 0,
      utilities: parseFloat(utilities) || 0,
      entertainment: parseFloat(entertainment) || 0,
      other: parseFloat(other) || 0,
    };

    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    const remainingIncome = incomeVal - totalExpenses;

    const percentageBreakdown: Record<string, number> = {};
    Object.entries(expenses).forEach(([key, value]) => {
      if (incomeVal > 0) {
        percentageBreakdown[key] = (value / incomeVal) * 100;
      }
    });

    setResult({
      totalExpenses,
      remainingIncome,
      percentageBreakdown,
    });
  };

  const reset = () => {
    setIncome("");
    setHousing("");
    setFood("");
    setTransport("");
    setUtilities("");
    setEntertainment("");
    setOther("");
    setResult(null);
    setIncomeError(null);
    setHousingError(null);
    setFoodError(null);
    setTransportError(null);
    setUtilitiesError(null);
    setEntertainmentError(null);
    setOtherError(null);
  };

  const expenseLabels: Record<string, string> = {
    housing: "Housing",
    food: "Food",
    transport: "Transport",
    utilities: "Utilities",
    entertainment: "Entertainment",
    other: "Other",
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Monthly Income ($)"
            type="number"
            value={income}
            onChange={(e) => handleIncomeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(income, COMMON_RULES.income);
              setIncomeError(error);
            }}
            placeholder="Enter monthly income (e.g., 5000)"
            error={incomeError || undefined}
            helperText="Enter your total monthly income"
            step="100"
            min="0"
          />
          <Input
            label="Housing ($)"
            type="number"
            value={housing}
            onChange={(e) => handleExpenseChange(setHousing, setHousingError)(e.target.value)}
            onBlur={() => {
              const error = validateField(housing, COMMON_RULES.optionalPositive);
              setHousingError(error);
            }}
            placeholder="Enter housing expenses (e.g., 1500)"
            error={housingError || undefined}
            helperText="Rent, mortgage, insurance, etc."
            step="10"
            min="0"
          />
          <Input
            label="Food ($)"
            type="number"
            value={food}
            onChange={(e) => handleExpenseChange(setFood, setFoodError)(e.target.value)}
            onBlur={() => {
              const error = validateField(food, COMMON_RULES.optionalPositive);
              setFoodError(error);
            }}
            placeholder="Enter food expenses (e.g., 600)"
            error={foodError || undefined}
            helperText="Groceries, dining out, etc."
            step="10"
            min="0"
          />
          <Input
            label="Transport ($)"
            type="number"
            value={transport}
            onChange={(e) => handleExpenseChange(setTransport, setTransportError)(e.target.value)}
            onBlur={() => {
              const error = validateField(transport, COMMON_RULES.optionalPositive);
              setTransportError(error);
            }}
            placeholder="Enter transport expenses (e.g., 400)"
            error={transportError || undefined}
            helperText="Car payment, gas, public transport, etc."
            step="10"
            min="0"
          />
          <Input
            label="Utilities ($)"
            type="number"
            value={utilities}
            onChange={(e) => handleExpenseChange(setUtilities, setUtilitiesError)(e.target.value)}
            onBlur={() => {
              const error = validateField(utilities, COMMON_RULES.optionalPositive);
              setUtilitiesError(error);
            }}
            placeholder="Enter utilities expenses (e.g., 200)"
            error={utilitiesError || undefined}
            helperText="Electricity, water, internet, phone, etc."
            step="10"
            min="0"
          />
          <Input
            label="Entertainment ($)"
            type="number"
            value={entertainment}
            onChange={(e) => handleExpenseChange(setEntertainment, setEntertainmentError)(e.target.value)}
            onBlur={() => {
              const error = validateField(entertainment, COMMON_RULES.optionalPositive);
              setEntertainmentError(error);
            }}
            placeholder="Enter entertainment expenses (e.g., 300)"
            error={entertainmentError || undefined}
            helperText="Movies, hobbies, subscriptions, etc."
            step="10"
            min="0"
          />
          <Input
            label="Other Expenses ($)"
            type="number"
            value={other}
            onChange={(e) => handleExpenseChange(setOther, setOtherError)(e.target.value)}
            onBlur={() => {
              const error = validateField(other, COMMON_RULES.optionalPositive);
              setOtherError(error);
            }}
            placeholder="Enter other expenses (e.g., 500)"
            error={otherError || undefined}
            helperText="Any other monthly expenses"
            step="10"
            min="0"
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
              Budget Summary
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  Total Expenses
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  ${result.totalExpenses.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  Remaining Income
                </p>
                <p className={`text-3xl font-bold font-mono ${
                  result.remainingIncome >= 0 ? "text-[#10b981]" : "text-[#ef4444]"
                }`}>
                  ${result.remainingIncome.toFixed(2)}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm font-semibold text-[#1e293b] mb-2">
                  Expense Breakdown (% of income)
                </p>
                <div className="space-y-1">
                  {Object.entries(result.percentageBreakdown).map(([key, percentage]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{expenseLabels[key]}:</span>
                      <span className="font-medium text-[#1e293b]">{percentage.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

