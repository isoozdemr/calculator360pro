"use client";

import { useMemo, useState } from "react";

type DayEntry = { day: string; start: string; end: string; breakMin: number };

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

export function WorkHoursTimesheetCalculator() {
  const [threshold, setThreshold] = useState(40);
  const [entries, setEntries] = useState<DayEntry[]>([
    { day: "Mon", start: "09:00", end: "17:30", breakMin: 30 },
    { day: "Tue", start: "09:00", end: "17:30", breakMin: 30 },
    { day: "Wed", start: "09:00", end: "17:30", breakMin: 30 },
    { day: "Thu", start: "09:00", end: "17:30", breakMin: 30 },
    { day: "Fri", start: "09:00", end: "17:30", breakMin: 30 },
  ]);

  const result = useMemo(() => {
    const daily = entries.map((entry) => {
      const start = toMinutes(entry.start);
      const end = toMinutes(entry.end);
      const raw = Math.max(0, end - start);
      const netMin = Math.max(0, raw - entry.breakMin);
      return { day: entry.day, hours: netMin / 60 };
    });
    const total = daily.reduce((sum, d) => sum + d.hours, 0);
    const overtime = Math.max(0, total - threshold);
    return { daily, total, overtime };
  }, [entries, threshold]);

  const update = (idx: number, key: keyof DayEntry, value: string) => {
    const next = [...entries];
    next[idx] = { ...next[idx], [key]: key === "breakMin" ? Number(value || 0) : value };
    setEntries(next);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Work Hours Timesheet Calculator</h2>
      <label className="text-sm text-[#475569] block mb-4">
        Weekly Overtime Threshold (hours)
        <input className="w-full mt-1 border rounded p-2" type="number" min={1} value={threshold} onChange={(e) => setThreshold(Number(e.target.value || 0))} />
      </label>
      <div className="space-y-3">
        {entries.map((entry, idx) => (
          <div key={entry.day} className="grid grid-cols-4 gap-2 items-center">
            <span className="text-sm font-medium text-[#1e293b]">{entry.day}</span>
            <input className="border rounded p-2 text-sm" type="time" value={entry.start} onChange={(e) => update(idx, "start", e.target.value)} />
            <input className="border rounded p-2 text-sm" type="time" value={entry.end} onChange={(e) => update(idx, "end", e.target.value)} />
            <input className="border rounded p-2 text-sm" type="number" min={0} value={entry.breakMin} onChange={(e) => update(idx, "breakMin", e.target.value)} placeholder="Break min" />
          </div>
        ))}
      </div>
      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-sm text-[#475569]">Weekly Total: <span className="font-semibold text-[#1e293b]">{result.total.toFixed(2)} hours</span></p>
        <p className="text-sm text-[#475569]">Estimated Overtime: <span className="font-semibold text-[#1e293b]">{result.overtime.toFixed(2)} hours</span></p>
      </div>
    </div>
  );
}
