"use client";

import { useMemo, useState } from "react";

export function NetWorthCalculator() {
  const [cash, setCash] = useState(15000);
  const [investments, setInvestments] = useState(45000);
  const [realEstate, setRealEstate] = useState(220000);
  const [vehicles, setVehicles] = useState(18000);
  const [otherAssets, setOtherAssets] = useState(5000);

  const [mortgageDebt, setMortgageDebt] = useState(170000);
  const [studentDebt, setStudentDebt] = useState(12000);
  const [creditCardDebt, setCreditCardDebt] = useState(4000);
  const [otherDebt, setOtherDebt] = useState(2000);

  const result = useMemo(() => {
    const totalAssets = cash + investments + realEstate + vehicles + otherAssets;
    const totalLiabilities = mortgageDebt + studentDebt + creditCardDebt + otherDebt;
    return {
      totalAssets,
      totalLiabilities,
      netWorth: totalAssets - totalLiabilities,
    };
  }, [cash, investments, realEstate, vehicles, otherAssets, mortgageDebt, studentDebt, creditCardDebt, otherDebt]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Net Worth Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-[#1e293b] mb-2">Assets</h3>
          {[
            ["Cash", cash, setCash],
            ["Investments", investments, setInvestments],
            ["Real Estate Value", realEstate, setRealEstate],
            ["Vehicle Value", vehicles, setVehicles],
            ["Other Assets", otherAssets, setOtherAssets],
          ].map(([label, value, setter]) => (
            <label key={label as string} className="text-sm text-[#475569] block mb-2">
              {label} ($)
              <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={value as number} onChange={(e) => (setter as (n: number) => void)(Number(e.target.value || 0))} />
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-[#1e293b] mb-2">Liabilities</h3>
          {[
            ["Mortgage Balance", mortgageDebt, setMortgageDebt],
            ["Student Loans", studentDebt, setStudentDebt],
            ["Credit Cards", creditCardDebt, setCreditCardDebt],
            ["Other Debt", otherDebt, setOtherDebt],
          ].map(([label, value, setter]) => (
            <label key={label as string} className="text-sm text-[#475569] block mb-2">
              {label} ($)
              <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={value as number} onChange={(e) => (setter as (n: number) => void)(Number(e.target.value || 0))} />
            </label>
          ))}
        </div>
      </div>
      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-sm text-[#475569]">Total Assets: ${result.totalAssets.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Total Liabilities: ${result.totalLiabilities.toFixed(2)}</p>
        <p className="text-2xl font-bold text-[#1e293b] mt-2">Net Worth: ${result.netWorth.toFixed(2)}</p>
      </div>
    </div>
  );
}
