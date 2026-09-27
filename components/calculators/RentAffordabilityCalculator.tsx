"use client";

import { useMemo, useState } from "react";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function RentAffordabilityCalculator() {
  const [income, setIncome] = useState(60000);
  const [debts, setDebts] = useState(300);

  const r = useMemo(() => {
    const monthly = income / 12;
    const rule30 = monthly * 0.3;
    const rule40x = income / 40; // landlord "40x rent" screening rule
    const dtiCap = Math.max(0, monthly * 0.36 - debts); // total debt incl. rent <= 36%
    const recommended = Math.min(rule30, dtiCap);
    return { monthly, rule30, rule40x, dtiCap, recommended };
  }, [income, debts]);

  const field = (label: string, value: number, set: (n: number) => void) => (
    <label className="text-sm text-[#475569] block">
      {label}
      <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={100} value={value} onChange={(e) => set(Number(e.target.value || 0))} />
    </label>
  );

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Rent Affordability Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {field("Annual gross income ($)", income, setIncome)}
        {field("Monthly debt payments ($) — car, student loans, cards", debts, setDebts)}
      </div>
      <div className="mt-6 p-4 rounded-lg bg-[#ecfdf5]">
        <p className="text-sm text-[#64748b]">Recommended maximum rent</p>
        <p className="text-3xl font-bold text-[#10b981]">{usd(r.recommended)}<span className="text-base font-normal text-[#64748b]"> / month</span></p>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-[#64748b]">30% rule</p><p className="text-lg font-bold text-[#1e293b]">{usd(r.rule30)}</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-[#64748b]">40x rent rule (landlords)</p><p className="text-lg font-bold text-[#1e293b]">{usd(r.rule40x)}</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-[#64748b]">36% total debt limit</p><p className="text-lg font-bold text-[#1e293b]">{usd(r.dtiCap)}</p></div>
      </div>
    </div>
  );
}
