"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<
    "of" | "increase" | "decrease"
  >("of");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  
  // Error states
  const [valueError, setValueError] = useState<string | null>(null);
  const [percentageError, setPercentageError] = useState<string | null>(null);
  const [oldValueError, setOldValueError] = useState<string | null>(null);
  const [newValueError, setNewValueError] = useState<string | null>(null);

  const handleValueChange = (val: string) => {
    setValue(val);
    if (valueError) setValueError(null);
  };

  const handlePercentageChange = (val: string) => {
    setPercentage(val);
    if (percentageError) setPercentageError(null);
  };

  const handleOldValueChange = (val: string) => {
    setOldValue(val);
    if (oldValueError) setOldValueError(null);
  };

  const handleNewValueChange = (val: string) => {
    setNewValue(val);
    if (newValueError) setNewValueError(null);
  };

  const calculate = () => {
    if (calculationType === "of") {
      const valueErr = validateField(value, COMMON_RULES.positiveNumber);
      const percErr = validateField(percentage, COMMON_RULES.percentage);
      
      if (valueErr || percErr) {
        setValueError(valueErr);
        setPercentageError(percErr);
        return;
      }

      const val = parseFloat(value);
      const perc = parseFloat(percentage);
      if (!isNaN(val) && !isNaN(perc)) {
        setResult((val * perc) / 100);
      }
    } else if (calculationType === "increase" || calculationType === "decrease") {
      const oldErr = validateField(oldValue, COMMON_RULES.positiveNumber);
      const newErr = validateField(newValue, COMMON_RULES.positiveNumber);
      
      if (oldErr || newErr) {
        setOldValueError(oldErr);
        setNewValueError(newErr);
        return;
      }

      const old = parseFloat(oldValue);
      const newVal = parseFloat(newValue);
      
      if (old === 0) {
        setOldValueError("Old value cannot be zero");
        return;
      }

      if (calculationType === "increase") {
        setResult(((newVal - old) / old) * 100);
      } else {
        setResult(((old - newVal) / old) * 100);
      }
    }
  };

  const reset = () => {
    setValue("");
    setPercentage("");
    setOldValue("");
    setNewValue("");
    setResult(null);
    setValueError(null);
    setPercentageError(null);
    setOldValueError(null);
    setNewValueError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-[#1e293b] rounded-lg border-2 border-[#e2e8f0] dark:border-[#334155] p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setCalculationType("of")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "of"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
              }`}
            >
              Percentage Of
            </button>
            <button
              onClick={() => setCalculationType("increase")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "increase"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
              }`}
            >
              Percentage Increase
            </button>
            <button
              onClick={() => setCalculationType("decrease")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                calculationType === "decrease"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] dark:bg-[#334155] text-[#1e293b] dark:text-[#f1f5f9]"
              }`}
            >
              Percentage Decrease
            </button>
          </div>

          {calculationType === "of" ? (
            <>
              <Input
                label="Value"
                type="number"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                onBlur={() => {
                  const error = validateField(value, COMMON_RULES.positiveNumber);
                  setValueError(error);
                }}
                placeholder="Enter value (e.g., 100)"
                error={valueError || undefined}
                helperText="Enter the base value"
                step="0.01"
                min="0.01"
              />
              <Input
                label="Percentage (%)"
                type="number"
                value={percentage}
                onChange={(e) => handlePercentageChange(e.target.value)}
                onBlur={() => {
                  const error = validateField(percentage, COMMON_RULES.percentage);
                  setPercentageError(error);
                }}
                placeholder="Enter percentage (e.g., 25)"
                error={percentageError || undefined}
                helperText="Enter percentage between 0 and 100"
                step="0.01"
                min="0"
                max="100"
              />
            </>
          ) : (
            <>
              <Input
                label="Old Value"
                type="number"
                value={oldValue}
                onChange={(e) => handleOldValueChange(e.target.value)}
                onBlur={() => {
                  const error = validateField(oldValue, COMMON_RULES.positiveNumber);
                  setOldValueError(error);
                }}
                placeholder="Enter old value (e.g., 100)"
                error={oldValueError || undefined}
                helperText="Enter the original value"
                step="0.01"
                min="0.01"
              />
              <Input
                label="New Value"
                type="number"
                value={newValue}
                onChange={(e) => handleNewValueChange(e.target.value)}
                onBlur={() => {
                  const error = validateField(newValue, COMMON_RULES.positiveNumber);
                  setNewValueError(error);
                }}
                placeholder="Enter new value (e.g., 120)"
                error={newValueError || undefined}
                helperText="Enter the new value"
                step="0.01"
                min="0.01"
              />
            </>
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

        {result !== null && (
          <div className="result-container bg-[#f0fdf4] dark:bg-[#064e3b] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] dark:text-[#f1f5f9] mb-2">
              Result
            </h3>
            <p className="text-3xl font-bold text-[#10b981] font-mono">
              {calculationType === "of"
                ? `${result.toFixed(2)}`
                : `${result.toFixed(2)}%`}
            </p>
            {calculationType === "of" && (
              <p className="text-sm text-[#64748b] dark:text-[#94a3b8] mt-2">
                {percentage}% of {value} = {result.toFixed(2)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

