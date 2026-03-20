"use client";

import { useMemo, useState } from "react";
import { FilingStatus, US_LTCG_THRESHOLDS } from "@/lib/data/usa-current-tax-data";

type GainType = "long-term" | "short-term";

export function CapitalGainsTaxCalculator() {
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [taxableIncome, setTaxableIncome] = useState(90000);
  const [costBasis, setCostBasis] = useState(20000);
  const [saleProceeds, setSaleProceeds] = useState(30000);
  const [gainType, setGainType] = useState<GainType>("long-term");
  const [ordinaryRate, setOrdinaryRate] = useState(0.22);

  const result = useMemo(() => {
    const netGain = Math.max(0, saleProceeds - costBasis);
    let rate = ordinaryRate;

    if (gainType === "long-term") {
      const thresholds = US_LTCG_THRESHOLDS[filingStatus];
      if (taxableIncome <= thresholds.zeroRateMax) {
        rate = 0;
      } else if (taxableIncome <= thresholds.fifteenRateMax) {
        rate = 0.15;
      } else {
        rate = 0.2;
      }
    }

    const estimatedTax = netGain * rate;
    return { netGain, rate, estimatedTax };
  }, [costBasis, filingStatus, gainType, ordinaryRate, saleProceeds, taxableIncome]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Capital Gains Tax Estimate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569]">
          Filing Status
          <select className="w-full mt-1 border rounded p-2" value={filingStatus} onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}>
            <option value="single">Single</option>
            <option value="mfj">Married Filing Jointly</option>
            <option value="mfs">Married Filing Separately</option>
            <option value="hoh">Head of Household</option>
          </select>
        </label>
        <label className="text-sm text-[#475569]">
          Taxable Income ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={taxableIncome} onChange={(e) => setTaxableIncome(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Cost Basis ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={costBasis} onChange={(e) => setCostBasis(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Sale Proceeds ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={saleProceeds} onChange={(e) => setSaleProceeds(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Gain Type
          <select className="w-full mt-1 border rounded p-2" value={gainType} onChange={(e) => setGainType(e.target.value as GainType)}>
            <option value="long-term">Long-term (&gt; 1 year)</option>
            <option value="short-term">Short-term (1 year or less)</option>
          </select>
        </label>
        {gainType === "short-term" && (
          <label className="text-sm text-[#475569]">
            Ordinary Tax Rate
            <select className="w-full mt-1 border rounded p-2" value={ordinaryRate} onChange={(e) => setOrdinaryRate(Number(e.target.value))}>
              <option value={0.1}>10%</option>
              <option value={0.12}>12%</option>
              <option value={0.22}>22%</option>
              <option value={0.24}>24%</option>
              <option value={0.32}>32%</option>
              <option value={0.35}>35%</option>
              <option value={0.37}>37%</option>
            </select>
          </label>
        )}
      </div>

      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-sm text-[#475569]">Net Capital Gain</p>
        <p className="text-2xl font-bold text-[#1e293b]">${result.netGain.toFixed(2)}</p>
        <p className="text-sm text-[#475569] mt-2">Applied Rate: {(result.rate * 100).toFixed(2)}%</p>
        <p className="text-sm text-[#475569]">Estimated Tax: ${result.estimatedTax.toFixed(2)}</p>
      </div>
    </div>
  );
}
