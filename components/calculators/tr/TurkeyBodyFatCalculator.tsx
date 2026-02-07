"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES, VALIDATION_PATTERNS } from "@/lib/validation/rules";

const CATEGORIES_MALE: Record<string, string> = {
  "Essential fat": "Zorunlu yağ",
  Athletic: "Atletik",
  Fitness: "Fitness",
  Average: "Ortalama",
  Obese: "Obez",
};

const CATEGORIES_FEMALE: Record<string, string> = {
  "Essential fat": "Zorunlu yağ",
  Athletic: "Atletik",
  Fitness: "Fitness",
  Average: "Ortalama",
  Obese: "Obez",
};

export function TurkeyBodyFatCalculator() {
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

  const handleAgeChange = (value: string) => {
    setAge(value);
    if (ageError) setAgeError(null);
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);
    if (heightError) setHeightError(null);
  };

  const handleNeckChange = (value: string) => {
    setNeck(value);
    if (neckError) setNeckError(null);
  };

  const handleWaistChange = (value: string) => {
    setWaist(value);
    if (waistError) setWaistError(null);
  };

  const handleHipChange = (value: string) => {
    setHip(value);
    if (hipError) setHipError(null);
  };

  const calculateBodyFat = () => {
    const ageErr = validateField(age, COMMON_RULES.age);
    const heightRules = unit === "metric" ? COMMON_RULES.heightCm : COMMON_RULES.heightImperial;
    const heightErr = validateField(height, heightRules);
    const neckRules = unit === "metric" ? COMMON_RULES.circumferenceCm : COMMON_RULES.circumferenceInches;
    const neckErr = validateField(neck, neckRules);
    const waistErr = validateField(waist, neckRules);
    const hipErr = gender === "female" ? validateField(hip, neckRules) : null;

    if (ageErr || heightErr || neckErr || waistErr || hipErr) {
      setAgeError(ageErr);
      setHeightError(heightErr);
      setNeckError(neckErr);
      setWaistError(waistErr);
      setHipError(hipErr);
      return;
    }

    const ageNum = parseFloat(age);
    let heightCm: number;
    let neckCm: number;
    let waistCm: number;
    let hipCm: number;

    if (unit === "metric") {
      heightCm = parseFloat(height);
      neckCm = parseFloat(neck);
      waistCm = parseFloat(waist);
      hipCm = gender === "female" ? parseFloat(hip) : 0;
    } else {
      const match = height.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
      if (!match) {
        setHeightError("Boy formatı: feet'inch (örn. 5'10)");
        return;
      }
      const feet = parseInt(match[1]);
      const inches = parseInt(match[2] || "0");
      heightCm = (feet * 12 + inches) * 2.54;
      neckCm = parseFloat(neck) * 2.54;
      waistCm = parseFloat(waist) * 2.54;
      hipCm = gender === "female" ? parseFloat(hip) * 2.54 : 0;
    }

    if (
      !isNaN(ageNum) &&
      !isNaN(heightCm) &&
      !isNaN(neckCm) &&
      !isNaN(waistCm) &&
      heightCm > 0 &&
      neckCm > 0 &&
      waistCm > 0 &&
      ageNum > 0 &&
      (gender === "male" || (gender === "female" && !isNaN(hipCm) && hipCm > 0))
    ) {
      let bodyFatPercentage: number;

      if (gender === "male") {
        bodyFatPercentage =
          86.010 * Math.log10(waistCm - neckCm) -
          70.041 * Math.log10(heightCm) +
          36.76;
      } else {
        bodyFatPercentage =
          163.205 * Math.log10(waistCm + hipCm - neckCm) -
          97.684 * Math.log10(heightCm) -
          78.387;
      }

      bodyFatPercentage = Math.max(0, Math.min(50, bodyFatPercentage));

      let category: string;
      if (gender === "male") {
        if (bodyFatPercentage < 6) category = "Essential fat";
        else if (bodyFatPercentage < 14) category = "Athletic";
        else if (bodyFatPercentage < 18) category = "Fitness";
        else if (bodyFatPercentage < 25) category = "Average";
        else category = "Obese";
      } else {
        if (bodyFatPercentage < 14) category = "Essential fat";
        else if (bodyFatPercentage < 20) category = "Athletic";
        else if (bodyFatPercentage < 25) category = "Fitness";
        else if (bodyFatPercentage < 32) category = "Average";
        else category = "Obese";
      }

      const categoryTr = gender === "male" ? CATEGORIES_MALE[category] : CATEGORIES_FEMALE[category];
      setResult({
        bodyFatPercentage,
        category: categoryTr || category,
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
                gender === "male" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Erkek
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                gender === "female" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Kadın
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setUnit("metric")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "metric" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Metrik (cm)
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "imperial" ? "bg-[#2563eb] text-white" : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              İnç
            </button>
          </div>

          <Input
            label="Yaş"
            type="number"
            value={age}
            onChange={(e) => handleAgeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(age, COMMON_RULES.age);
              setAgeError(error);
            }}
            placeholder="Yaşınızı girin (örn. 30)"
            error={ageError || undefined}
            helperText="Yaşınızı yıl olarak girin"
            step="1"
            min="0"
            max="150"
          />

          {unit === "metric" ? (
            <Input
              label="Boy (cm)"
              type="number"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
              onBlur={() => {
                const error = validateField(height, COMMON_RULES.heightCm);
                setHeightError(error);
              }}
              placeholder="Boy cm (örn. 175)"
              error={heightError || undefined}
              helperText="Boyunuzu santimetre olarak girin"
              step="0.1"
              min="30"
              max="300"
            />
          ) : (
            <Input
              label="Boy (ft'in)"
              type="text"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
              onBlur={() => {
                const error = validateField(height, COMMON_RULES.heightImperial);
                setHeightError(error);
              }}
              placeholder="örn. 5'10"
              error={heightError || undefined}
              helperText="Boy formatı: feet'inch (örn. 5'10)"
            />
          )}

          {unit === "metric" ? (
            <Input
              label="Boyun Çevresi (cm)"
              type="number"
              value={neck}
              onChange={(e) => handleNeckChange(e.target.value)}
              onBlur={() => {
                const error = validateField(neck, COMMON_RULES.circumferenceCm);
                setNeckError(error);
              }}
              placeholder="En dar noktadan (örn. 38)"
              error={neckError || undefined}
              helperText="Boynunuzu en dar noktadan ölçün"
              step="0.1"
              min="10"
              max="200"
            />
          ) : (
            <Input
              label="Boyun Çevresi (inç)"
              type="number"
              value={neck}
              onChange={(e) => handleNeckChange(e.target.value)}
              onBlur={() => {
                const error = validateField(neck, COMMON_RULES.circumferenceInches);
                setNeckError(error);
              }}
              placeholder="En dar noktadan (örn. 15)"
              error={neckError || undefined}
              helperText="Boynunuzu en dar noktadan ölçün"
              step="0.1"
              min="4"
              max="80"
            />
          )}

          {unit === "metric" ? (
            <Input
              label="Bel Çevresi (cm)"
              type="number"
              value={waist}
              onChange={(e) => handleWaistChange(e.target.value)}
              onBlur={() => {
                const error = validateField(waist, COMMON_RULES.circumferenceCm);
                setWaistError(error);
              }}
              placeholder={gender === "male" ? "Göbek hizasından (örn. 90)" : "En dar noktadan (örn. 75)"}
              error={waistError || undefined}
              helperText={gender === "male" ? "Belinizi göbek hizasından ölçün" : "Belinizi en dar noktadan ölçün"}
              step="0.1"
              min="10"
              max="200"
            />
          ) : (
            <Input
              label="Bel Çevresi (inç)"
              type="number"
              value={waist}
              onChange={(e) => handleWaistChange(e.target.value)}
              onBlur={() => {
                const error = validateField(waist, COMMON_RULES.circumferenceInches);
                setWaistError(error);
              }}
              placeholder={gender === "male" ? "Göbek hizasından (örn. 35)" : "En dar noktadan (örn. 30)"}
              error={waistError || undefined}
              helperText={gender === "male" ? "Belinizi göbek hizasından ölçün" : "Belinizi en dar noktadan ölçün"}
              step="0.1"
              min="4"
              max="80"
            />
          )}

          {gender === "female" && (
            <>
              {unit === "metric" ? (
                <Input
                  label="Kalça Çevresi (cm)"
                  type="number"
                  value={hip}
                  onChange={(e) => handleHipChange(e.target.value)}
                  onBlur={() => {
                    const error = validateField(hip, COMMON_RULES.circumferenceCm);
                    setHipError(error);
                  }}
                  placeholder="En geniş noktadan (örn. 100)"
                  error={hipError || undefined}
                  helperText="Kalçanızı en geniş noktadan ölçün"
                  step="0.1"
                  min="10"
                  max="200"
                />
              ) : (
                <Input
                  label="Kalça Çevresi (inç)"
                  type="number"
                  value={hip}
                  onChange={(e) => handleHipChange(e.target.value)}
                  onBlur={() => {
                    const error = validateField(hip, COMMON_RULES.circumferenceInches);
                    setHipError(error);
                  }}
                  placeholder="En geniş noktadan (örn. 40)"
                  error={hipError || undefined}
                  helperText="Kalçanızı en geniş noktadan ölçün"
                  step="0.1"
                  min="4"
                  max="80"
                />
              )}
            </>
          )}

          <div className="flex gap-3">
            <Button onClick={calculateBodyFat} className="flex-1">
              Vücut Yağ Oranını Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">Vücut Yağ Oranınız</h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono mb-2">
              {result.bodyFatPercentage.toFixed(1)}%
            </p>
            <p className="text-lg font-semibold text-[#1e293b]">{result.category}</p>
            <div className="mt-4 pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b] mb-2">
                Yağ oranı kategorileri ({gender === "male" ? "Erkek" : "Kadın"}):
              </p>
              <ul className="text-xs text-[#64748b] space-y-1">
                {gender === "male" ? (
                  <>
                    <li>Zorunlu yağ: &lt; %6</li>
                    <li>Atletik: %6 - %13</li>
                    <li>Fitness: %14 - %17</li>
                    <li>Ortalama: %18 - %24</li>
                    <li>Obez: ≥ %25</li>
                  </>
                ) : (
                  <>
                    <li>Zorunlu yağ: &lt; %14</li>
                    <li>Atletik: %14 - %20</li>
                    <li>Fitness: %21 - %24</li>
                    <li>Ortalama: %25 - %31</li>
                    <li>Obez: ≥ %32</li>
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
