"use client";

import { useMemo, useState } from "react";

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("2026-03-01");
  const [cycleLength, setCycleLength] = useState(28);

  const result = useMemo(() => {
    const lmp = new Date(lastPeriodDate);
    if (Number.isNaN(lmp.getTime()) || cycleLength < 20 || cycleLength > 45) {
      return null;
    }
    const ovulationOffset = cycleLength - 14;
    const ovulationDate = addDays(lmp, ovulationOffset);
    const fertileStart = addDays(ovulationDate, -5);
    const fertileEnd = addDays(ovulationDate, 1);
    return { ovulationDate, fertileStart, fertileEnd };
  }, [cycleLength, lastPeriodDate]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Ovulation Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569]">
          First Day of Last Period
          <input className="w-full mt-1 border rounded p-2" type="date" value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} />
        </label>
        <label className="text-sm text-[#475569]">
          Average Cycle Length (days)
          <input className="w-full mt-1 border rounded p-2" type="number" min={20} max={45} value={cycleLength} onChange={(e) => setCycleLength(Number(e.target.value || 0))} />
        </label>
      </div>

      {result ? (
        <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
          <p className="text-lg font-bold text-[#1e293b]">Estimated Ovulation: {formatDate(result.ovulationDate)}</p>
          <p className="text-sm text-[#475569] mt-1">
            Estimated Fertile Window: {formatDate(result.fertileStart)} - {formatDate(result.fertileEnd)}
          </p>
          <p className="text-xs text-[#64748b] mt-3">
            Educational estimate only. Cycle timing can vary due to health and lifestyle factors.
          </p>
        </div>
      ) : (
        <p className="mt-4 text-sm text-red-600">Please enter a valid date and a cycle length between 20 and 45 days.</p>
      )}
    </div>
  );
}
