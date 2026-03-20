"use client";

import { useMemo, useState } from "react";

export function PercentagePointsCalculator() {
  const [oldPercent, setOldPercent] = useState(5);
  const [newPercent, setNewPercent] = useState(7.5);

  const result = useMemo(() => {
    const points = newPercent - oldPercent;
    const relative = oldPercent === 0 ? null : (points / oldPercent) * 100;
    return { points, relative };
  }, [newPercent, oldPercent]);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Percentage Points Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm text-[#475569]">
          Old Percentage (%)
          <input className="w-full mt-1 border rounded p-2" type="number" value={oldPercent} onChange={(e) => setOldPercent(Number(e.target.value || 0))} />
        </label>
        <label className="text-sm text-[#475569]">
          New Percentage (%)
          <input className="w-full mt-1 border rounded p-2" type="number" value={newPercent} onChange={(e) => setNewPercent(Number(e.target.value || 0))} />
        </label>
      </div>
      <div className="mt-6 bg-[#f8fafc] rounded-lg p-4 border">
        <p className="text-lg font-bold text-[#1e293b]">Percentage-point change: {result.points.toFixed(2)} pts</p>
        <p className="text-sm text-[#475569] mt-1">
          Relative percent change: {result.relative === null ? "Undefined (old value is 0)" : `${result.relative.toFixed(2)}%`}
        </p>
      </div>
    </div>
  );
}
