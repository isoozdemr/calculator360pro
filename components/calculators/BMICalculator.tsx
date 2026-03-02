"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber } from "@/lib/format/locale-format";
import { VALIDATION_PATTERNS } from "@/lib/validation/rules";

type Locale = "en" | "tr";

const CATEGORIES: Record<string, { en: string; tr: string }> = {
  under: { en: "Underweight", tr: "Zayıf" },
  normal: { en: "Normal weight", tr: "Normal" },
  over: { en: "Overweight", tr: "Fazla kilolu" },
  obese: { en: "Obese", tr: "Obez" },
};

export function BMICalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const calculateBMI = () => {
    let weightKg: number;
    let heightM: number;

    if (unit === "metric") {
      const w = parseLocaleNumber(weight, locale);
      const h = parseLocaleNumber(height, locale);
      if (w == null || w < 1 || w > 500) {
        setWeightError(isTr ? "1–500 kg arası girin" : "Enter between 1 and 500 kg");
        setBmi(null);
        return;
      }
      if (h == null || h < 30 || h > 300) {
        setHeightError(isTr ? "30–300 cm arası girin" : "Enter between 30 and 300 cm");
        setBmi(null);
        return;
      }
      setWeightError(null);
      setHeightError(null);
      weightKg = w;
      heightM = h / 100;
    } else {
      const w = parseLocaleNumber(weight, locale);
      if (w == null || w < 2.2 || w > 1100) {
        setWeightError(isTr ? "2,2–1100 lb arası girin" : "Enter between 2.2 and 1100 lbs");
        setBmi(null);
        return;
      }
      const match = height.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
      if (!match) {
        setHeightError(isTr ? "Boyu feet'inç formatında girin (örn. 5'10)" : "Height must be in format: feet'inches (e.g., 5'10)");
        setBmi(null);
        return;
      }
      setWeightError(null);
      setHeightError(null);
      const feet = parseInt(match[1], 10);
      const inches = parseInt(match[2] || "0", 10);
      weightKg = w * 0.453592;
      heightM = (feet * 12 + inches) * 0.0254;
    }

    if (heightM > 0) {
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setCategory(isTr ? CATEGORIES.under.tr : CATEGORIES.under.en);
      else if (bmiValue < 25) setCategory(isTr ? CATEGORIES.normal.tr : CATEGORIES.normal.en);
      else if (bmiValue < 30) setCategory(isTr ? CATEGORIES.over.tr : CATEGORIES.over.en);
      else setCategory(isTr ? CATEGORIES.obese.tr : CATEGORIES.obese.en);
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setWeightError(null);
    setHeightError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setUnit("metric")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "metric"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "Metrik (kg, cm)" : "Metric (kg, cm)"}
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "imperial"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "İmparatorluk (lb, ft'inç)" : "Imperial (lbs, ft'in)"}
            </button>
          </div>

          <FormattedNumberInput
            label={unit === "metric" ? (isTr ? "Kilo (kg)" : "Weight (kg)") : (isTr ? "Kilo (lb)" : "Weight (lbs)")}
            value={weight}
            onChange={(v) => { setWeight(v); setWeightError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={1}
            error={weightError || undefined}
            helperText={unit === "metric" ? (isTr ? "Kilonuzu kg girin" : "Enter your weight in kilograms") : (isTr ? "Kilonuzu lb girin" : "Enter your weight in pounds")}
          />

          {unit === "metric" ? (
            <FormattedNumberInput
              label={isTr ? "Boy (cm)" : "Height (cm)"}
              value={height}
              onChange={(v) => { setHeight(v); setHeightError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={1}
              error={heightError || undefined}
              helperText={isTr ? "Boyunuzu cm girin" : "Enter your height in centimeters"}
            />
          ) : (
            <Input
              label={isTr ? "Boy (ft'inç)" : "Height (ft'in)"}
              type="text"
              value={height}
              onChange={(e) => { setHeight(e.target.value); setHeightError(null); }}
              placeholder="e.g., 5'10"
              error={heightError || undefined}
              helperText={isTr ? "Boy: feet'inç (örn. 5'10)" : "Enter height in format: feet'inches (e.g., 5'10)"}
            />
          )}

          <div className="flex gap-3">
            <Button onClick={calculateBMI} className="flex-1">
              {isTr ? "BMI Hesapla" : "Calculate BMI"}
            </Button>
            <Button onClick={reset} variant="outline">
              {isTr ? "Sıfırla" : "Reset"}
            </Button>
          </div>
        </div>

        {bmi !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              {isTr ? "BMI Sonucunuz" : "Your BMI"}
            </h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono mb-2">
              {formatNumber(bmi, locale, { minFractionDigits: 1, maxFractionDigits: 1 })}
            </p>
            <p className="text-lg font-semibold text-[#1e293b]">
              {category}
            </p>
            <div className="mt-4 pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b]">
                {isTr ? "BMI Kategorileri:" : "BMI Categories:"}
              </p>
              <ul className="text-xs text-[#64748b] mt-2 space-y-1">
                <li>{isTr ? "Zayıf" : "Underweight"}: &lt; 18.5</li>
                <li>{isTr ? "Normal" : "Normal weight"}: 18.5 - 24.9</li>
                <li>{isTr ? "Fazla kilolu" : "Overweight"}: 25 - 29.9</li>
                <li>{isTr ? "Obez" : "Obese"}: ≥ 30</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

