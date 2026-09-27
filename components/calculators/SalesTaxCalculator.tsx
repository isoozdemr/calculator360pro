"use client";

import { useMemo, useState } from "react";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function SalesTaxCalculator() {
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(8.25);

  const r = useMemo(() => {
    const t = rate / 100;
    if (mode === "add") {
      const tax = amount * t;
      return { net: amount, tax, gross: amount + tax };
    }
    const net = amount / (1 + t);
    return { net, tax: amount - net, gross: amount };
  }, [mode, amount, rate]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Sales Tax Calculator</h2>
      <div className="flex gap-2 mb-4">
        {(["add", "remove"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={`px-4 py-2 rounded-lg border-2 text-sm font-medium ${mode === m ? "bg-[#2563eb] text-white border-[#2563eb]" : "border-[#e2e8f0] text-[#475569]"}`}>
            {m === "add" ? "Add tax to price" : "Remove tax from total (reverse)"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569] block">
          {mode === "add" ? "Price before tax ($)" : "Total paid incl. tax ($)"}
          <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={0.01} value={amount} onChange={(e) => setAmount(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569] block">
          Sales tax rate (%)
          <input className="w-full mt-1 border-2 border-[#e2e8f0] rounded-lg p-2" type="number" min={0} step={0.001} value={rate} onChange={(e) => setRate(Number(e.target.value || 0))} />
        </label>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Pre-tax price</p><p className="text-xl font-bold text-[#1e293b]">{usd(r.net)}</p></div>
        <div className="p-4 rounded-lg bg-[#f8fafc]"><p className="text-sm text-[#64748b]">Sales tax</p><p className="text-xl font-bold text-[#2563eb]">{usd(r.tax)}</p></div>
        <div className="p-4 rounded-lg bg-[#ecfdf5]"><p className="text-sm text-[#64748b]">Total with tax</p><p className="text-2xl font-bold text-[#10b981]">{usd(r.gross)}</p></div>
      </div>
    </div>
  );
}
