"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function PregnancyCalculator() {
  const [lmpDate, setLmpDate] = useState("");
  const [result, setResult] = useState<{
    dueDate: Date;
    currentWeek: number;
    currentDay: number;
    trimester: string;
    daysRemaining: number;
  } | null>(null);
  
  const [lmpDateError, setLmpDateError] = useState<string | null>(null);

  const handleLmpDateChange = useCallback((value: string) => {
    setLmpDate(value);
    if (lmpDateError) setLmpDateError(null);
  }, [lmpDateError]);

  const calculate = useCallback(() => {
    if (!lmpDate) {
      setLmpDateError("Last menstrual period date is required");
      return;
    }

    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) {
      setLmpDateError("Invalid date");
      return;
    }

    const today = new Date();
    if (lmp > today) {
      setLmpDateError("LMP date cannot be in the future");
      return;
    }

    setLmpDateError(null);

    // Calculate due date: LMP + 280 days (40 weeks)
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);

    // Calculate current pregnancy week and day
    const daysSinceLMP = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(daysSinceLMP / 7);
    const currentDay = daysSinceLMP % 7;

    // Determine trimester
    let trimester = "First";
    if (currentWeek >= 14) trimester = "Second";
    if (currentWeek >= 28) trimester = "Third";

    // Calculate days remaining
    const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      dueDate,
      currentWeek: Math.max(0, currentWeek),
      currentDay,
      trimester,
      daysRemaining,
    });
  }, [lmpDate]);

  const reset = useCallback(() => {
    setLmpDate("");
    setResult(null);
    setLmpDateError(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Last Menstrual Period (LMP) Date"
            type="date"
            value={lmpDate}
            onChange={(e) => handleLmpDateChange(e.target.value)}
            error={lmpDateError || undefined}
            helperText="Enter the first day of your last menstrual period"
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
              Pregnancy Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#64748b]">Estimated Due Date</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.dueDate.toLocaleDateString("en-US", { 
                    year: "numeric", 
                    month: "long", 
                    day: "numeric" 
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Current Pregnancy Week</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  Week {result.currentWeek}, Day {result.currentDay}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Trimester</p>
                <p className="text-xl font-bold text-[#10b981]">
                  {result.trimester} Trimester
                </p>
              </div>
              {result.daysRemaining > 0 && (
                <div>
                  <p className="text-sm text-[#64748b]">Days Until Due Date</p>
                  <p className="text-xl font-bold text-[#10b981] font-mono">
                    {result.daysRemaining} days
                  </p>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-[#10b981]">
              <p className="text-xs text-[#64748b]">
                Note: Due dates are estimates. Only about 5% of babies are born exactly on their due date. 
                Most births occur within 2 weeks before or after the due date.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

