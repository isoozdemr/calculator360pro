"use client";

import { useMemo, useState } from "react";
import {
  FilingStatus,
  US_ADDITIONAL_MEDICARE_THRESHOLDS,
  US_SELF_EMPLOYMENT_TAX,
} from "@/lib/data/usa-current-tax-data";

export function SelfEmployedTaxCalculator() {
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [netEarnings, setNetEarnings] = useState(120000);

  const result = useMemo(() => {
    const seEarnings = Math.max(0, netEarnings * US_SELF_EMPLOYMENT_TAX.seEarningsFactor);
    const socialSecurityTaxable = Math.min(seEarnings, US_SELF_EMPLOYMENT_TAX.socialSecurityWageBase);
    const socialSecurityTax = socialSecurityTaxable * US_SELF_EMPLOYMENT_TAX.socialSecurityRate;
    const medicareTax = seEarnings * US_SELF_EMPLOYMENT_TAX.medicareRate;
    const threshold = US_ADDITIONAL_MEDICARE_THRESHOLDS[filingStatus];
    const additionalMedicareBase = Math.max(0, seEarnings - threshold);
    const additionalMedicareTax = additionalMedicareBase * US_SELF_EMPLOYMENT_TAX.additionalMedicareRate;
    const totalSeTax = socialSecurityTax + medicareTax + additionalMedicareTax;
    const deductibleHalf = totalSeTax / 2;

    return {
      seEarnings,
      socialSecurityTax,
      medicareTax,
      additionalMedicareTax,
      totalSeTax,
      deductibleHalf,
    };
  }, [filingStatus, netEarnings]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Self-Employment Tax Estimate</h2>
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
          Net Self-Employment Earnings ($)
          <input className="w-full mt-1 border rounded p-2" type="number" min={0} value={netEarnings} onChange={(e) => setNetEarnings(Number(e.target.value || 0))} />
        </label>
      </div>

      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border space-y-2">
        <p className="text-sm text-[#475569]">SE Taxable Earnings (92.35%): ${result.seEarnings.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Social Security Portion: ${result.socialSecurityTax.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Medicare Portion: ${result.medicareTax.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Additional Medicare: ${result.additionalMedicareTax.toFixed(2)}</p>
        <p className="text-lg font-bold text-[#1e293b]">Total Estimated SE Tax: ${result.totalSeTax.toFixed(2)}</p>
        <p className="text-sm text-[#475569]">Potential Half-SE Deduction (planning): ${result.deductibleHalf.toFixed(2)}</p>
      </div>
    </div>
  );
}
