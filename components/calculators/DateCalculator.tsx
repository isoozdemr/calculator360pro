"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeEndDate, setIncludeEndDate] = useState(true);
  const [result, setResult] = useState<{
    days: number;
    weeks: number;
    months: number;
    years: number;
    businessDays: number;
  } | null>(null);
  
  const [startDateError, setStartDateError] = useState<string | null>(null);
  const [endDateError, setEndDateError] = useState<string | null>(null);

  const handleStartDateChange = useCallback((value: string) => {
    setStartDate(value);
    if (startDateError) setStartDateError(null);
  }, [startDateError]);

  const handleEndDateChange = useCallback((value: string) => {
    setEndDate(value);
    if (endDateError) setEndDateError(null);
  }, [endDateError]);

  const calculateBusinessDays = useCallback((start: Date, end: Date): number => {
    let count = 0;
    const current = new Date(start);
    while (current <= end) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }
    return count;
  }, []);

  const calculate = useCallback(() => {
    if (!startDate || !endDate) {
      if (!startDate) setStartDateError("Start date is required");
      if (!endDate) setEndDateError("End date is required");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime())) {
      setStartDateError("Invalid start date");
      return;
    }

    if (isNaN(end.getTime())) {
      setEndDateError("Invalid end date");
      return;
    }

    if (start > end) {
      setEndDateError("End date must be after start date");
      return;
    }

    setStartDateError(null);
    setEndDateError(null);

    // Calculate difference in milliseconds
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Adjust based on includeEndDate
    const totalDays = includeEndDate ? diffDays + 1 : diffDays;

    // Calculate weeks, months, years
    const weeks = Math.floor(totalDays / 7);
    const months = Math.floor(totalDays / 30.44); // Average days per month
    const years = Math.floor(totalDays / 365.25); // Account for leap years

    // Calculate business days
    const businessDays = calculateBusinessDays(start, end);

    setResult({
      days: totalDays,
      weeks,
      months,
      years,
      businessDays,
    });
  }, [startDate, endDate, includeEndDate, calculateBusinessDays]);

  const reset = useCallback(() => {
    setStartDate("");
    setEndDate("");
    setIncludeEndDate(true);
    setResult(null);
    setStartDateError(null);
    setEndDateError(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
            error={startDateError || undefined}
            helperText="Enter the earlier date"
          />
          <Input
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => handleEndDateChange(e.target.value)}
            error={endDateError || undefined}
            helperText="Enter the later date"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includeEndDate"
              checked={includeEndDate}
              onChange={(e) => setIncludeEndDate(e.target.checked)}
              className="w-4 h-4 text-[#2563eb] border-[#e2e8f0] rounded focus:ring-[#2563eb]"
            />
            <label htmlFor="includeEndDate" className="text-sm text-[#64748b]">
              Include end date in calculation
            </label>
          </div>

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#64748b]">Total Days</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.days}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Weeks</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.weeks}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Months</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.months}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Years</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.years}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#10b981]">
              <p className="text-sm text-[#64748b]">Business Days (Weekdays)</p>
              <p className="text-xl font-bold text-[#10b981] font-mono">
                {result.businessDays}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

