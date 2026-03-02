"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatPercent } from "@/lib/format/locale-format";
import { VALIDATION_PATTERNS } from "@/lib/validation/rules";

type Locale = "en" | "tr";

export function BodyFatCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [result, setResult] = useState<{
    bodyFatPercentage: number;
    category: string;
  } | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);
  const [neckError, setNeckError] = useState<string | null>(null);
  const [waistError, setWaistError] = useState<string | null>(null);
  const [hipError, setHipError] = useState<string | null>(null);

  const calculateBodyFat = () => {
    setAgeError(null);
    setHeightError(null);
    setNeckError(null);
    setWaistError(null);
    setHipError(null);

    const ageNum = parseLocaleNumber(age, locale);
    let heightCm: number;
    let neckCm: number;
    let waistCm: number;
    let hipCm: number;

    if (unit === "metric") {
      const h = parseLocaleNumber(height, locale);
      const n = parseLocaleNumber(neck, locale);
      const w = parseLocaleNumber(waist, locale);
      const hi = gender === "female" ? parseLocaleNumber(hip, locale) : 0;
      if (ageNum == null || ageNum < 18 || ageNum > 100) {
        setAgeError(isTr ? "18–100 arası yaş girin" : "Enter age 18–100");
        return;
      }
      if (h == null || h < 100 || h > 250) {
        setHeightError(isTr ? "100–250 cm girin" : "Enter 100–250 cm");
        return;
      }
      if (n == null || n < 20 || n > 80) {
        setNeckError(isTr ? "Geçerli boyun çevresi girin" : "Enter valid neck circumference");
        return;
      }
      if (w == null || w < 50 || w > 200) {
        setWaistError(isTr ? "Geçerli bel çevresi girin" : "Enter valid waist circumference");
        return;
      }
      if (gender === "female" && (hi == null || hi < 60 || hi > 200)) {
        setHipError(isTr ? "Geçerli kalça çevresi girin" : "Enter valid hip circumference");
        return;
      }
      heightCm = h;
      neckCm = n;
      waistCm = w;
      hipCm = gender === "female" ? hi! : 0;
    } else {
      const match = height.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
      if (!match) {
        setHeightError(isTr ? "Boy formatı: feet'inch (örn. 5'10)" : "Height format: feet'inches (e.g., 5'10)");
        return;
      }
      const feet = parseInt(match[1], 10);
      const inches = parseInt(match[2] || "0", 10);
      heightCm = (feet * 12 + inches) * 2.54;
      const n = parseLocaleNumber(neck, locale);
      const w = parseLocaleNumber(waist, locale);
      const hi = gender === "female" ? parseLocaleNumber(hip, locale) : 0;
      if (ageNum == null || ageNum < 18 || ageNum > 100) {
        setAgeError(isTr ? "18–100 arası yaş girin" : "Enter age 18–100");
        return;
      }
      if (n == null || n < 4 || n > 36) {
        setNeckError(isTr ? "Geçerli boyun çevresi (inç)" : "Enter valid neck (inches)");
        return;
      }
      if (w == null || w < 20 || w > 80) {
        setWaistError(isTr ? "Geçerli bel çevresi (inç)" : "Enter valid waist (inches)");
        return;
      }
      if (gender === "female" && (hi == null || hi < 24 || hi > 80)) {
        setHipError(isTr ? "Geçerli kalça çevresi (inç)" : "Enter valid hip (inches)");
        return;
      }
      neckCm = n * 2.54;
      waistCm = w * 2.54;
      hipCm = gender === "female" ? hi! * 2.54 : 0;
    }

    if (
      ageNum != null &&
      heightCm > 0 &&
      neckCm > 0 &&
      waistCm > 0 &&
      ageNum > 0 &&
      (gender === "male" || (gender === "female" && hipCm > 0))
    ) {
      let bodyFatPercentage: number;

      if (gender === "male") {
        // US Navy method for men
        bodyFatPercentage =
          86.010 * Math.log10(waistCm - neckCm) -
          70.041 * Math.log10(heightCm) +
          36.76;
      } else {
        // US Navy method for women
        bodyFatPercentage =
          163.205 * Math.log10(waistCm + hipCm - neckCm) -
          97.684 * Math.log10(heightCm) -
          78.387;
      }

      // Ensure result is within reasonable bounds
      bodyFatPercentage = Math.max(0, Math.min(50, bodyFatPercentage));

      let category: string;
      if (gender === "male") {
        if (bodyFatPercentage < 6) {
          category = "Essential fat";
        } else if (bodyFatPercentage < 14) {
          category = "Athletic";
        } else if (bodyFatPercentage < 18) {
          category = "Fitness";
        } else if (bodyFatPercentage < 25) {
          category = "Average";
        } else {
          category = "Obese";
        }
      } else {
        if (bodyFatPercentage < 14) {
          category = "Essential fat";
        } else if (bodyFatPercentage < 20) {
          category = "Athletic";
        } else if (bodyFatPercentage < 25) {
          category = "Fitness";
        } else if (bodyFatPercentage < 32) {
          category = "Average";
        } else {
          category = "Obese";
        }
      }

      setResult({
        bodyFatPercentage,
        category,
      });
    }
  };

  const reset = () => {
    setAge("");
    setHeight("");
    setNeck("");
    setWaist("");
    setHip("");
    setResult(null);
    setAgeError(null);
    setHeightError(null);
    setNeckError(null);
    setWaistError(null);
    setHipError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setGender("male")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "male"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "female"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Female
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setUnit("metric")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "metric"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Metric (cm)
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "imperial"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Imperial (inches)
            </button>
          </div>

          <FormattedNumberInput
            label={isTr ? "Yaş" : "Age"}
            value={age}
            onChange={(v) => { setAge(v); setAgeError(null); }}
            locale={locale}
            formatAs="number"
            maxFractionDigits={0}
            error={ageError || undefined}
            helperText={isTr ? "Yaşınız" : "Enter your age in years"}
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
              helperText={isTr ? "Boyunuz (cm)" : "Enter your height in centimeters"}
            />
          ) : (
            <Input
              label={isTr ? "Boy (ft'in)" : "Height (ft'in)"}
              type="text"
              value={height}
              onChange={(e) => { setHeight(e.target.value); setHeightError(null); }}
              placeholder="e.g., 5'10"
              error={heightError || undefined}
              helperText={isTr ? "Boy: feet'inch (örn. 5'10)" : "Enter height in format: feet'inches (e.g., 5'10)"}
            />
          )}

          {unit === "metric" ? (
            <FormattedNumberInput
              label={isTr ? "Boyun çevresi (cm)" : "Neck Circumference (cm)"}
              value={neck}
              onChange={(v) => { setNeck(v); setNeckError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={1}
              error={neckError || undefined}
              helperText={isTr ? "En dar noktadan ölçün" : "Measure your neck at the narrowest point"}
            />
          ) : (
            <FormattedNumberInput
              label={isTr ? "Boyun çevresi (inç)" : "Neck Circumference (inches)"}
              value={neck}
              onChange={(v) => { setNeck(v); setNeckError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={1}
              error={neckError || undefined}
              helperText={isTr ? "En dar noktadan ölçün" : "Measure your neck at the narrowest point"}
            />
          )}

          {unit === "metric" ? (
            <FormattedNumberInput
              label={isTr ? "Bel çevresi (cm)" : "Waist Circumference (cm)"}
              value={waist}
              onChange={(v) => { setWaist(v); setWaistError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={1}
              error={waistError || undefined}
              helperText={gender === "male" ? (isTr ? "Göbek hizasından ölçün" : "Measure your waist at the navel level") : (isTr ? "En dar noktadan ölçün" : "Measure your waist at the narrowest point")}
            />
          ) : (
            <FormattedNumberInput
              label={isTr ? "Bel çevresi (inç)" : "Waist Circumference (inches)"}
              value={waist}
              onChange={(v) => { setWaist(v); setWaistError(null); }}
              locale={locale}
              formatAs="number"
              maxFractionDigits={1}
              error={waistError || undefined}
              helperText={gender === "male" ? (isTr ? "Göbek hizasından ölçün" : "Measure your waist at the navel level") : (isTr ? "En dar noktadan ölçün" : "Measure your waist at the narrowest point")}
            />
          )}

          {gender === "female" && (
            <>
              {unit === "metric" ? (
                <FormattedNumberInput
                  label={isTr ? "Kalça çevresi (cm)" : "Hip Circumference (cm)"}
                  value={hip}
                  onChange={(v) => { setHip(v); setHipError(null); }}
                  locale={locale}
                  formatAs="number"
                  maxFractionDigits={1}
                  error={hipError || undefined}
                  helperText={isTr ? "En geniş noktadan ölçün" : "Measure your hips at the widest point"}
                />
              ) : (
                <FormattedNumberInput
                  label={isTr ? "Kalça çevresi (inç)" : "Hip Circumference (inches)"}
                  value={hip}
                  onChange={(v) => { setHip(v); setHipError(null); }}
                  locale={locale}
                  formatAs="number"
                  maxFractionDigits={1}
                  error={hipError || undefined}
                  helperText={isTr ? "En geniş noktadan ölçün" : "Measure your hips at the widest point"}
                />
              )}
            </>
          )}

          <div className="flex gap-3">
            <Button onClick={calculateBodyFat} className="flex-1">
              Calculate Body Fat
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Your Body Fat Percentage
            </h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono mb-2">
              {formatPercent(result.bodyFatPercentage, locale, { maxFractionDigits: 1 })}
            </p>
            <p className="text-lg font-semibold text-[#1e293b]">
              {result.category}
            </p>
            <div className="mt-4 pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b] mb-2">
                Body Fat Categories ({gender === "male" ? "Men" : "Women"}):
              </p>
              <ul className="text-xs text-[#64748b] space-y-1">
                {gender === "male" ? (
                  <>
                    <li>Essential fat: &lt; 6%</li>
                    <li>Athletic: 6 - 13%</li>
                    <li>Fitness: 14 - 17%</li>
                    <li>Average: 18 - 24%</li>
                    <li>Obese: ≥ 25%</li>
                  </>
                ) : (
                  <>
                    <li>Essential fat: &lt; 14%</li>
                    <li>Athletic: 14 - 20%</li>
                    <li>Fitness: 21 - 24%</li>
                    <li>Average: 25 - 31%</li>
                    <li>Obese: ≥ 32%</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

