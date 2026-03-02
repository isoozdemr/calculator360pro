"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

const ACTIVITY_LEVELS = [
  { value: "sedentary", label: "Sedentary (little or no exercise)", labelTr: "Hareketsiz (az veya hiç egzersiz)", factor: 1 },
  { value: "light", label: "Light (exercise 1–3 days/week)", labelTr: "Hafif (haftada 1–3 gün egzersiz)", factor: 1.1 },
  { value: "moderate", label: "Moderate (exercise 3–5 days/week)", labelTr: "Orta (haftada 3–5 gün egzersiz)", factor: 1.2 },
  { value: "active", label: "Active (exercise 6–7 days/week)", labelTr: "Aktif (haftada 6–7 gün egzersiz)", factor: 1.3 },
  { value: "very", label: "Very active (intense daily exercise or physical job)", labelTr: "Çok aktif (yoğun günlük egzersiz veya fiziksel iş)", factor: 1.45 },
] as const;

type Locale = "en" | "tr";

export function WaterIntakeCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const isTr = localeProp === "tr";
  const [weightKg, setWeightKg] = useState("");
  const [activity, setActivity] = useState<(typeof ACTIVITY_LEVELS)[number]["value"]>("moderate");
  const [hotClimate, setHotClimate] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [result, setResult] = useState<{ ml: number; cups: number } | null>(null);
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
    // Base: 35 ml per kg per day
    let ml = w * 35;
    const level = ACTIVITY_LEVELS.find((l) => l.value === activity);
    if (level) ml *= level.factor;
    if (hotClimate) ml += 300; // extra for hot/humid
    if (pregnant) ml += 300; // extra for pregnancy
    const cups = Math.round(ml / 250);
    setResult({ ml: Math.round(ml), cups });
  };

  const reset = () => {
    setWeightKg("");
    setActivity("moderate");
    setHotClimate(false);
    setPregnant(false);
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
            <label className="block text-sm font-medium text-[#1e293b] mb-2">{isTr ? "Aktivite düzeyi" : "Activity level"}</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value as (typeof ACTIVITY_LEVELS)[number]["value"])}
              className="w-full rounded-lg border-2 border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none"
            >
              {ACTIVITY_LEVELS.map((l) => (
                <option key={l.value} value={l.value}>{isTr ? l.labelTr : l.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hotClimate}
                onChange={(e) => setHotClimate(e.target.checked)}
                className="rounded border-[#e2e8f0] text-[#2563eb] focus:ring-[#2563eb]"
              />
              <span className="text-sm text-[#64748b]">{isTr ? "Sıcak / nemli iklim" : "Hot/humid climate"}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={pregnant}
                onChange={(e) => setPregnant(e.target.checked)}
                className="rounded border-[#e2e8f0] text-[#2563eb] focus:ring-[#2563eb]"
              />
              <span className="text-sm text-[#64748b]">{isTr ? "Hamile misiniz? (ek sıvı)" : "Pregnancy (extra fluid)"}</span>
            </label>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">{isTr ? "Hesapla" : "Calculate"}</Button>
            <Button onClick={reset} variant="outline">{isTr ? "Sıfırla" : "Reset"}</Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Günlük su tüketimi" : "Daily water intake"}</h3>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#10b981] font-mono">{result.ml.toLocaleString(isTr ? "tr-TR" : "en-US")} ml</p>
              <p className="text-lg text-[#64748b]">{isTr ? `yaklaşık ${result.cups} bardak (250 ml / bardak)` : `about ${result.cups} cups (250 ml per cup)`}</p>
              <p className="text-sm text-[#64748b]">{isTr ? "Gün içine yayın. Susuzluk ve aktiviteye göre ayarlayın." : "Spread throughout the day. Adjust for thirst and activity."}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
