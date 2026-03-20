"use client";

import { useMemo, useState } from "react";

export function IdealWeightCalculator() {
  const [heightCm, setHeightCm] = useState(170);
  const [currentWeightKg, setCurrentWeightKg] = useState(72);

  const result = useMemo(() => {
    const hMeters = heightCm / 100;
    if (hMeters <= 0) return null;
    const minWeight = 18.5 * hMeters * hMeters;
    const maxWeight = 24.9 * hMeters * hMeters;
    const bmi = currentWeightKg / (hMeters * hMeters);
    return { minWeight, maxWeight, bmi };
  }, [heightCm, currentWeightKg]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Ideal Weight Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569]">
          Height (cm)
          <input className="w-full mt-1 border rounded p-2" type="number" min={80} max={250} value={heightCm} onChange={(e) => setHeightCm(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          Current Weight (kg)
          <input className="w-full mt-1 border rounded p-2" type="number" min={20} max={300} value={currentWeightKg} onChange={(e) => setCurrentWeightKg(Number(e.target.value || 0))} />
        </label>
      </div>

      {result && (
        <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border space-y-1">
          <p className="text-sm text-[#475569]">
            Healthy Weight Range (BMI 18.5 - 24.9): <span className="font-semibold text-[#1e293b]">{result.minWeight.toFixed(1)} - {result.maxWeight.toFixed(1)} kg</span>
          </p>
          <p className="text-sm text-[#475569]">
            Current BMI: <span className="font-semibold text-[#1e293b]">{result.bmi.toFixed(1)}</span>
          </p>
          <p className="text-xs text-[#64748b] mt-2">
            This is a screening estimate and not a medical diagnosis.
          </p>
        </div>
      )}
    </div>
  );
}
