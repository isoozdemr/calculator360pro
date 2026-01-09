"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    weeks: number;
    days: number;
  } | null>(null);
  const [birthDateError, setBirthDateError] = useState<string | null>(null);

  const handleBirthDateChange = (value: string) => {
    setBirthDate(value);
    if (birthDateError) setBirthDateError(null);
  };

  const calculateAge = () => {
    const error = validateField(birthDate, COMMON_RULES.birthDate);
    if (error) {
      setBirthDateError(error);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setBirthDateError("Birth date cannot be in the future");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(today.getTime() - birth.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);

    setAge({
      years,
      months,
      weeks,
      days: totalDays,
    });
  };

  const reset = () => {
    setBirthDate("");
    setAge(null);
    setBirthDateError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Birth Date"
            type="date"
            value={birthDate}
            onChange={(e) => handleBirthDateChange(e.target.value)}
            onBlur={() => {
              const error = validateField(birthDate, COMMON_RULES.birthDate);
              setBirthDateError(error);
            }}
            max={new Date().toISOString().split("T")[0]}
            error={birthDateError || undefined}
            helperText="Select your date of birth"
          />

          <div className="flex gap-3">
            <Button onClick={calculateAge} className="flex-1">
              Calculate Age
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {age !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-4">
              Your Age
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {age.years}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  Years
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {age.months}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  Months
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {age.weeks}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  Weeks
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {age.days}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  Days
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

