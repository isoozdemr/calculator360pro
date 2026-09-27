"use client";

import { useMemo, useState } from "react";

const PERIODS = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 } as const;
type Period = keyof typeof PERIODS;

export function PtoAccrualCalculator() {
  const [annualDays, setAnnualDays] = useState(15);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [period, setPeriod] = useState<Period>("biweekly");
  const [periodsWorked, setPeriodsWorked] = useState(10);
  const [used, setUsed] = useState(16);
  const [cap, setCap] = useState(0);

  const r = useMemo(() => {
    const annualHours = annualDays * hoursPerDay;
    const perPeriod = annualHours / PERIODS[period];
    const perHourWorked = annualHours / 2080;
    let accrued = perPeriod * periodsWorked;
    if (cap > 0) accrued = Math.min(accrued, cap + used);
    const balance = accrued - used;
    return { annualHours, perPeriod, perHourWorked, accrued, balance };
  }, [annualDays, hoursPerDay, period, periodsWorked, used, cap]);

  const field = (label: string, value: number, set: (n: number) => void, step = 1) => (
    <label className="text-sm text-[#475569] block">
      {label}
      <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={step} value={value} onChange={(e) => set(Number(e.target.value || 0))} />
    </label>
  );

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">PTO Accrual Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {field("PTO days per year", annualDays, setAnnualDays, 0.5)}
        {field("Hours per workday", hoursPerDay, setHoursPerDay, 0.5)}
        <label className="text-sm text-[#475569] block">
          Pay frequency
          <select className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" value={period} onChange={(e) => setPeriod(e.target.value as Period)}>
            <option value="weekly">Weekly (52)</option>
            <option value="biweekly">Biweekly (26)</option>
            <option value="semimonthly">Semi-monthly (24)</option>
            <option value="monthly">Monthly (12)</option>
          </select>
        </label>
        {field("Pay periods worked so far this year", periodsWorked, setPeriodsWorked)}
        {field("PTO hours already used", used, setUsed, 0.5)}
        {field("Balance cap in hours (0 = no cap)", cap, setCap)}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Accrual per pay period</p><p className="text-xl font-bold text-[#1e293b]">{r.perPeriod.toFixed(2)} h</p><p className="text-xs text-[#64748b]">{r.perHourWorked.toFixed(4)} h per hour worked</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Accrued to date</p><p className="text-xl font-bold text-[#2563eb]">{r.accrued.toFixed(2)} h</p></div>
        <div className="p-4 rounded-lg bg-[#ecfdf5]"><p className="text-sm text-[#64748b]">Available balance</p><p className="text-2xl font-bold text-[#10b981]">{r.balance.toFixed(2)} h</p><p className="text-xs text-[#64748b]">≈ {(r.balance / Math.max(1, hoursPerDay)).toFixed(1)} days</p></div>
      </div>
    </div>
  );
}
