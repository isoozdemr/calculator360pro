"use client";

import { useMemo, useState } from "react";

type DebtLine = { name: string; balance: number; apr: number; minPayment: number };

export function DebtSnowballCalculator() {
  const [extraPayment, setExtraPayment] = useState(200);
  const [debts, setDebts] = useState<DebtLine[]>([
    { name: "Credit Card A", balance: 3500, apr: 24.9, minPayment: 120 },
    { name: "Credit Card B", balance: 2200, apr: 19.9, minPayment: 80 },
    { name: "Personal Loan", balance: 9000, apr: 11.5, minPayment: 240 },
  ]);

  const result = useMemo(() => {
    const working = debts.map((d) => ({ ...d }));
    let months = 0;
    let totalInterest = 0;
    let done = 0;
    const order: string[] = [];

    while (done < working.length && months < 1200) {
      months += 1;
      working.sort((a, b) => a.balance - b.balance);
      let monthlyExtra = extraPayment;

      for (const debt of working) {
        if (debt.balance <= 0) continue;
        const monthlyRate = debt.apr / 100 / 12;
        const interest = debt.balance * monthlyRate;
        totalInterest += interest;
        debt.balance += interest;
        const pay = Math.min(debt.balance, debt.minPayment);
        debt.balance -= pay;
      }

      for (const debt of working) {
        if (debt.balance <= 0 || monthlyExtra <= 0) continue;
        const payExtra = Math.min(debt.balance, monthlyExtra);
        debt.balance -= payExtra;
        monthlyExtra -= payExtra;
      }

      for (const debt of working) {
        if (debt.balance <= 0 && !order.includes(debt.name)) {
          order.push(debt.name);
        }
      }
      done = working.filter((d) => d.balance <= 0).length;
    }

    return { months, totalInterest, payoffOrder: order };
  }, [debts, extraPayment]);

  const updateDebt = (index: number, key: keyof DebtLine, value: string) => {
    const next = [...debts];
    next[index] = { ...next[index], [key]: key === "name" ? value : Number(value || 0) };
    setDebts(next);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Debt Snowball Calculator</h2>
      <label className="text-sm text-[#475569] block mb-4">
        Extra Monthly Payment ($)
        <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value || 0))} />
      </label>
      <div className="space-y-4">
        {debts.map((debt, idx) => (
          <div key={idx} className="border rounded p-3 grid grid-cols-1 md:grid-cols-4 gap-2">
            <input className="border rounded p-2 text-sm" value={debt.name} onChange={(e) => updateDebt(idx, "name", e.target.value)} />
            <input className="border rounded p-2 text-sm" type="number" min={0} value={debt.balance} onChange={(e) => updateDebt(idx, "balance", e.target.value)} placeholder="Balance" />
            <input className="border rounded p-2 text-sm" type="number" min={0} value={debt.apr} onChange={(e) => updateDebt(idx, "apr", e.target.value)} placeholder="APR %" />
            <input className="border rounded p-2 text-sm" type="number" min={0} value={debt.minPayment} onChange={(e) => updateDebt(idx, "minPayment", e.target.value)} placeholder="Min Payment" />
          </div>
        ))}
      </div>
      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-lg font-bold text-[#1e293b]">Estimated Payoff Time: {result.months} months</p>
        <p className="text-sm text-[#475569]">Estimated Total Interest: ${result.totalInterest.toFixed(2)}</p>
        <p className="text-sm text-[#475569] mt-2">Payoff Order: {result.payoffOrder.join(" -> ") || "Not enough payment to close balances in horizon"}</p>
      </div>
    </div>
  );
}
