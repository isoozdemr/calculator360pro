"use client";

import { useMemo, useState } from "react";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function FuelCostCalculator() {
  const [miles, setMiles] = useState(300);
  const [mpg, setMpg] = useState(28);
  const [price, setPrice] = useState(3.4);
  const [roundTrip, setRoundTrip] = useState(false);
  const [people, setPeople] = useState(1);

  const r = useMemo(() => {
    const distance = miles * (roundTrip ? 2 : 1);
    const gallons = mpg > 0 ? distance / mpg : 0;
    const cost = gallons * price;
    return { distance, gallons, cost, perPerson: cost / Math.max(1, people), perMile: distance > 0 ? cost / distance : 0 };
  }, [miles, mpg, price, roundTrip, people]);

  const field = (label: string, value: number, set: (n: number) => void, step = 1) => (
    <label className="text-sm text-[#475569] block">
      {label}
      <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={step} value={value} onChange={(e) => set(Number(e.target.value || 0))} />
    </label>
  );

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Fuel Cost Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {field("Trip distance (miles, one way)", miles, setMiles)}
        {field("Fuel economy (MPG)", mpg, setMpg, 0.1)}
        {field("Gas price ($/gallon)", price, setPrice, 0.01)}
        {field("Split between people", people, setPeople)}
        <label className="flex items-center gap-2 text-sm text-[#475569]">
          <input type="checkbox" checked={roundTrip} onChange={(e) => setRoundTrip(e.target.checked)} /> Round trip
        </label>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Fuel needed</p><p className="text-xl font-bold text-[#1e293b]">{r.gallons.toFixed(1)} gal</p></div>
        <div className="p-4 rounded-lg bg-[#ecfdf5]"><p className="text-sm text-[#64748b]">Total fuel cost ({r.distance} mi)</p><p className="text-2xl font-bold text-[#10b981]">{usd(r.cost)}</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Per person · per mile</p><p className="text-xl font-bold text-[#2563eb]">{usd(r.perPerson)} · {usd(r.perMile)}</p></div>
      </div>
    </div>
  );
}
