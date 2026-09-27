"use client";

import { useMemo, useState } from "react";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function OvertimePayCalculator() {
  const [rate, setRate] = useState(25);
  const [hours, setHours] = useState(48);
  const [threshold, setThreshold] = useState(40);
  const [multiplier, setMultiplier] = useState(1.5);

  const r = useMemo(() => {
    const regularHours = Math.min(hours, threshold);
    const overtimeHours = Math.max(0, hours - threshold);
    const regularPay = regularHours * rate;
    const overtimeRate = rate * multiplier;
    const overtimePay = overtimeHours * overtimeRate;
    return { regularHours, overtimeHours, regularPay, overtimeRate, overtimePay, total: regularPay + overtimePay };
  }, [rate, hours, threshold, multiplier]);

  const field = (label: string, value: number, set: (n: number) => void, step = 1) => (
    <label className="text-sm text-[#475569] block">
      {label}
      <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={step} value={value} onChange={(e) => set(Number(e.target.value || 0))} />
    </label>
  );

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Overtime Pay Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {field("Hourly rate ($)", rate, setRate, 0.25)}
        {field("Hours worked this week", hours, setHours, 0.25)}
        {field("Overtime starts after (hours/week)", threshold, setThreshold)}
        <label className="text-sm text-[#475569] block">
          Overtime multiplier
          <select className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))}>
            <option value={1.5}>1.5x (time and a half)</option>
            <option value={2}>2x (double time)</option>
            <option value={1.25}>1.25x</option>
          </select>
        </label>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Regular pay ({r.regularHours} h)</p><p className="text-xl font-bold text-[#1e293b]">{usd(r.regularPay)}</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Overtime pay ({r.overtimeHours} h × {usd(r.overtimeRate)})</p><p className="text-xl font-bold text-[#2563eb]">{usd(r.overtimePay)}</p></div>
        <div className="p-4 rounded-lg bg-[#ecfdf5]"><p className="text-sm text-[#64748b]">Total gross pay</p><p className="text-2xl font-bold text-[#10b981]">{usd(r.total)}</p></div>
      </div>
    </div>
  );
}
