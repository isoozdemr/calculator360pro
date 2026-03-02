"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function CalorieCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "light" | "moderate" | "active" | "very-active">("moderate");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain");
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    dailyCalories: number;
  } | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const calculate = () => {
    const ageVal = parseLocaleNumber(age, locale);
    const weightKg = parseLocaleNumber(weight, locale);
    const heightCm = parseLocaleNumber(height, locale);

    if (ageVal == null || ageVal < 18 || ageVal > 100) {
      setAgeError(isTr ? "18–100 arası yaş girin" : "Enter age 18–100");
      setResult(null);
      return;
    }
    if (weightKg == null || weightKg < 20 || weightKg > 500) {
      setWeightError(isTr ? "20–500 kg arası girin" : "Enter 20–500 kg");
      setResult(null);
      return;
    }
    if (heightCm == null || heightCm < 100 || heightCm > 250) {
      setHeightError(isTr ? "100–250 cm arası girin" : "Enter 100–250 cm");
      setResult(null);
      return;
    }
    setAgeError(null);
    setWeightError(null);
    setHeightError(null);

    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageVal + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageVal - 161;
    }

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,      // Little or no exercise
      light: 1.375,        // Light exercise 1-3 days/week
      moderate: 1.55,     // Moderate exercise 3-5 days/week
      active: 1.725,      // Hard exercise 6-7 days/week
      "very-active": 1.9, // Very hard exercise, physical job
    };

    const tdee = bmr * activityMultipliers[activityLevel];

    // Goal adjustments
    let dailyCalories: number;
    if (goal === "lose") {
      dailyCalories = tdee - 500; // 500 calorie deficit for ~1 lb/week loss
    } else if (goal === "gain") {
      dailyCalories = tdee + 500; // 500 calorie surplus for ~1 lb/week gain
    } else {
      dailyCalories = tdee; // Maintain weight
    }

    setResult({
      bmr,
      tdee,
      dailyCalories,
    });
  };

  const reset = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setGender("male");
    setActivityLevel("moderate");
    setGoal("maintain");
    setResult(null);
    setAgeError(null);
    setWeightError(null);
    setHeightError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Gender
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("male")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  gender === "male"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  gender === "female"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          <FormattedNumberInput
            label={isTr ? "Yaş" : "Age"}
            value={age}
            onChange={(v) => { setAge(v); setAgeError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={ageError || undefined}
            helperText={isTr ? "Yaşınız" : "Enter your age"}
          />
          <FormattedNumberInput
            label={isTr ? "Kilo (kg)" : "Weight (kg)"}
            value={weight}
            onChange={(v) => { setWeight(v); setWeightError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={1}
            error={weightError || undefined}
            helperText={isTr ? "Kilonuz (kg)" : "Enter your weight in kilograms"}
          />
          <FormattedNumberInput
            label={isTr ? "Boy (cm)" : "Height (cm)"}
            value={height}
            onChange={(v) => { setHeight(v); setHeightError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={1}
            error={heightError || undefined}
            helperText={isTr ? "Boyunuz (cm)" : "Enter your height in centimeters"}
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Activity Level
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value as typeof activityLevel)}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (exercise 1-3 days/week)</option>
              <option value="moderate">Moderate (exercise 3-5 days/week)</option>
              <option value="active">Active (exercise 6-7 days/week)</option>
              <option value="very-active">Very Active (hard exercise, physical job)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Goal
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGoal("lose")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "lose"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Lose Weight
              </button>
              <button
                onClick={() => setGoal("maintain")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "maintain"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Maintain
              </button>
              <button
                onClick={() => setGoal("gain")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "gain"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Gain Weight
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Calculate
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Results
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  BMR (Basal Metabolic Rate)
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(result.bmr, locale, { maxFractionDigits: 0 })} {isTr ? "kalori/gün" : "calories/day"}
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  Calories burned at rest
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  TDEE (Total Daily Energy Expenditure)
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(result.tdee, locale, { maxFractionDigits: 0 })} {isTr ? "kalori/gün" : "calories/day"}
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  Calories burned including activity
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  Daily Calorie Target ({goal === "lose" ? "Weight Loss" : goal === "gain" ? "Weight Gain" : "Maintenance"})
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(result.dailyCalories, locale, { maxFractionDigits: 0 })} {isTr ? "kalori/gün" : "calories/day"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

