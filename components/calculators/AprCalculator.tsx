"use client";

import { useMemo, useState } from "react";

function paymentFromRate(principal: number, monthlyRate: number, months: number): number {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

export function AprCalculator() {
  const [principal, setPrincipal] = useState(25000);
  const [monthlyPayment, setMonthlyPayment] = useState(550);
  const [months, setMonths] = useState(60);
  const [fees, setFees] = useState(500);

  const result = useMemo(() => {
    const financedAmount = Math.max(1, principal - fees);
    let low = 0;
    let high = 1;
    for (let i = 0; i < 80; i += 1) {
      const mid = (low + high) / 2;
      const estPayment = paymentFromRate(financedAmount, mid, months);
      if (estPayment > monthlyPayment) {
        high = mid;
      } else {
        low = mid;
      }
    }
    const monthlyRate = (low + high) / 2;
    const apr = monthlyRate * 12 * 100;
    const totalPaid = monthlyPayment * months + fees;
    const totalInterestAndFees = Math.max(0, totalPaid - principal);
    return { apr, monthlyRate: monthlyRate * 100, totalPaid, totalInterestAndFees };
  }, [principal, monthlyPayment, months, fees]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">APR Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569]">
          Loan Amount ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={1} value={principal} onChange={(e) => setPrincipal(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Monthly Payment ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={1} value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Loan Term (months)
          <input className="w-full mt-1 border rounded p-2" type="number" min={1} value={months} onChange={(e) => setMonths(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Upfront Fees ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={fees} onChange={(e) => setFees(Number(e.target.value || 0))} />
        </label>
      </div>

      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border space-y-1">
        <p className="text-lg font-bold text-[#1e293b]">Estimated APR: {result.apr.toFixed(2)}%</p>
        <p className="text-sm text-[#475569]">Estimated Monthly Rate: {result.monthlyRate.toFixed(4)}%</p>
        <p className="text-sm text-[#475569]">Total Paid (incl. fees): ${result.totalPaid.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Total Interest + Fees: ${result.totalInterestAndFees.toFixed(2)}</p>
      </div>
    </div>
  );
}
