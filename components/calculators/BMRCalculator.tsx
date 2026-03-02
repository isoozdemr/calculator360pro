"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber } from "@/lib/format/locale-format";

/** Mifflin-St Jeor: BMR (kcal/day). Weight in kg, height in cm. */
function mifflinStJeor(gender: "male" | "female", age: number, weightKg: number, heightCm: number): number {
  if (gender === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

type Locale = "en" | "tr";

export function BMRCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const locale = localeProp;
  const isTr = locale === "tr";
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

  const calculate = useCallback(() => {
    const ageVal = parseLocaleNumber(age, locale);
    const weightVal = parseLocaleNumber(weight, locale);
    const heightVal = parseLocaleNumber(height, locale);

    if (ageVal == null || ageVal < 15 || ageVal > 120 || !Number.isInteger(ageVal)) {
      setAgeError(isTr ? "15–120 arası tam sayı girin" : "Enter an integer between 15 and 120");
      setResult(null);
      return;
    }
    if (unit === "metric") {
      if (weightVal == null || weightVal < 20 || weightVal > 300) {
        setWeightError(isTr ? "20–300 kg arası girin" : "Enter between 20 and 300 kg");
        setResult(null);
        return;
      }
      if (heightVal == null || heightVal < 100 || heightVal > 250) {
        setHeightError(isTr ? "100–250 cm arası girin" : "Enter between 100 and 250 cm");
        setResult(null);
        return;
      }
    } else {
      if (weightVal == null || weightVal < 44 || weightVal > 660) {
        setWeightError(isTr ? "44–660 lb arası girin" : "Enter between 44 and 660 lb");
        setResult(null);
        return;
      }
      if (heightVal == null || heightVal < 39 || heightVal > 98) {
        setHeightError(isTr ? "39–98 inç arası girin" : "Enter between 39 and 98 inches");
        setResult(null);
        return;
      }
    }
    setAgeError(null);
    setWeightError(null);
    setHeightError(null);

    let weightKg: number;
    let heightCm: number;
    if (unit === "metric") {
      weightKg = weightVal!;
      heightCm = heightVal!;
    } else {
      weightKg = weightVal! * 0.453592;
      heightCm = heightVal! * 2.54;
    }
    const bmr = Math.round(mifflinStJeor(gender, Math.round(ageVal), weightKg, heightCm));
    setResult(Math.max(0, bmr));
  }, [age, weight, height, unit, gender, locale]);

  const copyResult = useCallback(() => {
    if (result == null) return;
    const suffix = isTr ? " kcal/gün" : " kcal/day";
    void navigator.clipboard.writeText(`${formatNumber(result, locale, { maxFractionDigits: 0 })}${suffix}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result, isTr, locale]);

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
          <label className="block text-sm font-medium text-[#475569] mb-2">{isTr ? "Cinsiyet" : "Gender"}</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setGender("male")}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "male" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "Erkek" : "Male"}
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "female" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "Kadın" : "Female"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#475569] mb-2">{isTr ? "Birim" : "Units"}</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setUnit("metric")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                unit === "metric" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "Metrik (kg, cm)" : "Metric (kg, cm)"}
            </button>
            <button
              type="button"
              onClick={() => setUnit("imperial")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                unit === "imperial" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              {isTr ? "İmparatorluk (lb, in)" : "Imperial (lb, in)"}
            </button>
          </div>
        </div>

        <FormattedNumberInput
          label={isTr ? "Yaş (yıl)" : "Age (years)"}
          value={age}
          onChange={(v) => { setAge(v); setAgeError(null); }}
          locale={locale}
          formatAs="number"
          maxFractionDigits={0}
          error={ageError || undefined}
        />
        <FormattedNumberInput
          label={unit === "metric" ? (isTr ? "Kilo (kg)" : "Weight (kg)") : (isTr ? "Kilo (lb)" : "Weight (lb)")}
          value={weight}
          onChange={(v) => { setWeight(v); setWeightError(null); }}
          locale={locale}
          formatAs="number"
          maxFractionDigits={1}
          error={weightError || undefined}
        />
        <FormattedNumberInput
          label={unit === "metric" ? (isTr ? "Boy (cm)" : "Height (cm)") : (isTr ? "Boy (inç)" : "Height (inches)")}
          value={height}
          onChange={(v) => { setHeight(v); setHeightError(null); }}
          locale={locale}
          formatAs="number"
          maxFractionDigits={1}
          error={heightError || undefined}
        />

        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">{isTr ? "Hesapla" : "Calculate"}</Button>
          <Button onClick={reset} variant="secondary">{isTr ? "Sıfırla" : "Reset"}</Button>
        </div>

        <p className="text-sm text-[#64748b]">
          {isTr ? "Mifflin-St Jeor formülü kullanılır. Aktivite dahil günlük kalori için " : "Uses the Mifflin-St Jeor equation. For total daily calories including activity, use our "}
          {isTr ? <a href="/tr/hesap-makineleri/saglik/kalori-hesap-makinesi" className="text-[#2563eb] hover:underline">kalori hesaplama</a> : <a href="/calculators/health/calorie-calculator" className="text-[#2563eb] hover:underline">calorie calculator</a>}
          {isTr ? "." : "."}
        </p>
      </div>

      {result !== null && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="result-summary"
        >
          <p className="text-sm text-[#94a3b8] mb-2">{isTr ? "BMR (Bazal Metabolizma Hızı)" : "Your BMR (Basal Metabolic Rate)"}</p>
          <p className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-[#93c5fd]">{formatNumber(result, locale, { maxFractionDigits: 0 })}</span> {isTr ? "kcal/gün" : "kcal/day"}
          </p>
          <p className="text-sm text-[#94a3b8] mb-3">
            {isTr ? "Vücudunuz dinlenirken hayati fonksiyonları sürdürmek için yaktığı kalori. Aktivite dahil değildir." : "Calories your body burns at rest to maintain vital functions. This does not include activity."}
          </p>
          <Button
            onClick={copyResult}
            variant="outline"
            size="sm"
            className="border-[#64748b] text-white hover:bg-[#334155]"
          >
            {copied ? (isTr ? "Kopyalandı!" : "Copied!") : (isTr ? "Sonucu kopyala" : "Copy result")}
          </Button>
        </div>
      )}
    </div>
  );
}
