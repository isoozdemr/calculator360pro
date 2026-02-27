"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

/** Mifflin-St Jeor: BMR (kcal/day). Weight in kg, height in cm. */
function mifflinStJeor(gender: "male" | "female", age: number, weightKg: number, heightCm: number): number {
  if (gender === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

export function BMRCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [result, setResult] = useState<number | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const weightRule = unit === "metric" ? COMMON_RULES.weightKg : COMMON_RULES.weightLbs;
  const heightRule = unit === "metric" ? COMMON_RULES.heightCm : { required: true, min: 20, max: 120, custom: { validate: (v: string) => { const n = parseFloat(v); return !isNaN(n) && n >= 20 && n <= 120; }, message: "Height must be between 20 and 120 inches" } };

  const calculate = useCallback(() => {
    const aErr = validateField(age, COMMON_RULES.age);
    const wErr = validateField(weight, weightRule);
    const hErr = validateField(height, heightRule);
    setAgeError(aErr);
    setWeightError(wErr);
    setHeightError(hErr);
    if (aErr || wErr || hErr) {
      setResult(null);
      return;
    }
    const ageVal = parseInt(age, 10);
    let weightKg: number;
    let heightCm: number;
    if (unit === "metric") {
      weightKg = parseFloat(weight);
      heightCm = parseFloat(height);
    } else {
      weightKg = parseFloat(weight) * 0.453592;
      heightCm = parseFloat(height) * 2.54;
    }
    const bmr = Math.round(mifflinStJeor(gender, ageVal, weightKg, heightCm));
    setResult(Math.max(0, bmr));
  }, [age, weight, height, unit, gender, weightRule, heightRule]);

  const copyResult = useCallback(() => {
    if (result == null) return;
    void navigator.clipboard.writeText(`${result} kcal/day`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result]);

  const reset = useCallback(() => {
    setAge("");
    setWeight("");
    setHeight("");
    setResult(null);
    setAgeError(null);
    setWeightError(null);
    setHeightError(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#475569] mb-2">Gender</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setGender("male")}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "male" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "female" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#475569] mb-2">Units</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setUnit("metric")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                unit === "metric" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Metric (kg, cm)
            </button>
            <button
              type="button"
              onClick={() => setUnit("imperial")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                unit === "imperial" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Imperial (lb, in)
            </button>
          </div>
        </div>

        <Input
          label="Age (years)"
          type="number"
          value={age}
          onChange={(e) => { setAge(e.target.value); setAgeError(null); }}
          placeholder="e.g. 30"
          error={ageError || undefined}
          min={15}
          max={120}
          step={1}
        />
        <Input
          label={unit === "metric" ? "Weight (kg)" : "Weight (lb)"}
          type="number"
          value={weight}
          onChange={(e) => { setWeight(e.target.value); setWeightError(null); }}
          placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
          error={weightError || undefined}
          min={unit === "metric" ? 20 : 44}
          max={unit === "metric" ? 300 : 660}
          step={0.1}
        />
        <Input
          label={unit === "metric" ? "Height (cm)" : "Height (inches)"}
          type="number"
          value={height}
          onChange={(e) => { setHeight(e.target.value); setHeightError(null); }}
          placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"}
          error={heightError || undefined}
          min={unit === "metric" ? 100 : 39}
          max={unit === "metric" ? 250 : 98}
          step={0.1}
        />

        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">Calculate</Button>
          <Button onClick={reset} variant="secondary">Reset</Button>
        </div>

        <p className="text-sm text-[#64748b]">
          Uses the Mifflin-St Jeor equation. For total daily calories including activity, use our{" "}
          <a href="/calculators/health/calorie-calculator" className="text-[#2563eb] hover:underline">calorie calculator</a>.
        </p>
      </div>

      {result !== null && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="result-summary"
        >
          <p className="text-sm text-[#94a3b8] mb-2">Your BMR (Basal Metabolic Rate)</p>
          <p className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-[#93c5fd]">{result}</span> kcal/day
          </p>
          <p className="text-sm text-[#94a3b8] mb-3">
            Calories your body burns at rest to maintain vital functions. This does not include activity.
          </p>
          <Button
            onClick={copyResult}
            variant="outline"
            size="sm"
            className="border-[#64748b] text-white hover:bg-[#334155]"
          >
            {copied ? "Copied!" : "Copy result"}
          </Button>
        </div>
      )}
    </div>
  );
}
