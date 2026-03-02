"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const GOALS = [
  { value: "maintain", label: "Maintain weight", labelTr: "Kilo koruma", min: 0.8, max: 1.0 },
  { value: "lose", label: "Lose weight (preserve muscle)", labelTr: "Kilo verme (kas koruma)", min: 1.2, max: 1.6 },
  { value: "muscle", label: "Build muscle", labelTr: "Kas kazanımı", min: 1.6, max: 2.2 },
] as const;

type Locale = "en" | "tr";

export function ProteinCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const isTr = localeProp === "tr";
  const [weightKg, setWeightKg] = useState("");
  const [goal, setGoal] = useState<(typeof GOALS)[number]["value"]>("maintain");
  const [result, setResult] = useState<{ minG: number; maxG: number; midG: number } | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);

  const calculate = () => {
    const err = validateField(weightKg, COMMON_RULES.positiveNumber);
    if (err) {
      setWeightError(err);
      setResult(null);
      return;
    }
    setWeightError(null);
    const w = parseFloat(weightKg);
    if (w <= 0 || w > 300) {
      setWeightError(isTr ? "1 ile 300 kg arasında bir ağırlık girin" : "Enter a weight between 1 and 300 kg");
      return;
    }
    const g = GOALS.find((x) => x.value === goal);
    if (!g) return;
    const minG = Math.round(w * g.min);
    const maxG = Math.round(w * g.max);
    const midG = Math.round((minG + maxG) / 2);
    setResult({ minG, maxG, midG });
  };

  const reset = () => {
    setWeightKg("");
    setGoal("maintain");
    setResult(null);
    setWeightError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label={isTr ? "Vücut Ağırlığı (kg)" : "Body Weight (kg)"}
            type="number"
            value={weightKg}
            onChange={(e) => { setWeightKg(e.target.value); setWeightError(null); }}
            onBlur={() => setWeightError(validateField(weightKg, COMMON_RULES.positiveNumber))}
            placeholder={isTr ? "örn. 70" : "e.g. 70"}
            error={weightError || undefined}
            helperText={isTr ? "Mevcut kilonuz (kg)" : "Your current weight in kilograms"}
            step="1"
            min="1"
            max="300"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">{isTr ? "Hedef" : "Goal"}</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as (typeof GOALS)[number]["value"])}
              className="w-full rounded-lg border-2 border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none"
            >
              {GOALS.map((g) => (
                <option key={g.value} value={g.value}>{isTr ? g.labelTr : g.label}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">{isTr ? "Hesapla" : "Calculate"}</Button>
            <Button onClick={reset} variant="outline">{isTr ? "Sıfırla" : "Reset"}</Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Günlük protein hedefi" : "Daily protein target"}</h3>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#10b981] font-mono">{result.midG} g</p>
              <p className="text-[#64748b]">{isTr ? "Aralık: " : "Range: "}{result.minG} – {result.maxG} g {isTr ? "günlük" : "per day"}</p>
              <p className="text-sm text-[#64748b]">{isTr ? "Öğünlere yayın. Kas kazanımı için direnç antrenmanı ile birleştirin." : "Spread across meals. Combine with resistance training for muscle gain."}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
