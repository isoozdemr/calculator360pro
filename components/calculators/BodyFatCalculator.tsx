"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES, VALIDATION_PATTERNS } from "@/lib/validation/rules";

export function BodyFatCalculator() {
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
  
  // Error states
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
    // Validate all fields
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
      // Imperial: convert to cm
      const match = height.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
      if (!match) {
        setHeightError("Height must be in format: feet'inches (e.g., 5'10)");
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

          <Input
            label="Age"
            type="number"
            value={age}
            onChange={(e) => handleAgeChange(e.target.value)}
            onBlur={() => {
              const error = validateField(age, COMMON_RULES.age);
              setAgeError(error);
            }}
            placeholder="Enter your age (e.g., 30)"
            error={ageError || undefined}
            helperText="Enter your age in years"
            step="1"
            min="0"
            max="150"
          />

          {unit === "metric" ? (
            <Input
              label="Height (cm)"
              type="number"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
              onBlur={() => {
                const error = validateField(height, COMMON_RULES.heightCm);
                setHeightError(error);
              }}
              placeholder="Enter height in cm (e.g., 175)"
              error={heightError || undefined}
              helperText="Enter your height in centimeters"
              step="0.1"
              min="30"
              max="300"
            />
          ) : (
            <Input
              label="Height (ft'in)"
              type="text"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
              onBlur={() => {
                const error = validateField(height, COMMON_RULES.heightImperial);
                setHeightError(error);
              }}
              placeholder="e.g., 5'10"
              error={heightError || undefined}
              helperText="Enter height in format: feet'inches (e.g., 5'10)"
            />
          )}

          {unit === "metric" ? (
            <Input
              label="Neck Circumference (cm)"
              type="number"
              value={neck}
              onChange={(e) => handleNeckChange(e.target.value)}
              onBlur={() => {
                const error = validateField(neck, COMMON_RULES.circumferenceCm);
                setNeckError(error);
              }}
              placeholder="Measure at narrowest point (e.g., 38)"
              error={neckError || undefined}
              helperText="Measure your neck at the narrowest point"
              step="0.1"
              min="10"
              max="200"
            />
          ) : (
            <Input
              label="Neck Circumference (inches)"
              type="number"
              value={neck}
              onChange={(e) => handleNeckChange(e.target.value)}
              onBlur={() => {
                const error = validateField(neck, COMMON_RULES.circumferenceInches);
                setNeckError(error);
              }}
              placeholder="Measure at narrowest point (e.g., 15)"
              error={neckError || undefined}
              helperText="Measure your neck at the narrowest point"
              step="0.1"
              min="4"
              max="80"
            />
          )}

          {unit === "metric" ? (
            <Input
              label="Waist Circumference (cm)"
              type="number"
              value={waist}
              onChange={(e) => handleWaistChange(e.target.value)}
              onBlur={() => {
                const error = validateField(waist, COMMON_RULES.circumferenceCm);
                setWaistError(error);
              }}
              placeholder={gender === "male" ? "Measure at navel (e.g., 90)" : "Measure at narrowest point (e.g., 75)"}
              error={waistError || undefined}
              helperText={gender === "male" ? "Measure your waist at the navel level" : "Measure your waist at the narrowest point"}
              step="0.1"
              min="10"
              max="200"
            />
          ) : (
            <Input
              label="Waist Circumference (inches)"
              type="number"
              value={waist}
              onChange={(e) => handleWaistChange(e.target.value)}
              onBlur={() => {
                const error = validateField(waist, COMMON_RULES.circumferenceInches);
                setWaistError(error);
              }}
              placeholder={gender === "male" ? "Measure at navel (e.g., 35)" : "Measure at narrowest point (e.g., 30)"}
              error={waistError || undefined}
              helperText={gender === "male" ? "Measure your waist at the navel level" : "Measure your waist at the narrowest point"}
              step="0.1"
              min="4"
              max="80"
            />
          )}

          {gender === "female" && (
            <>
              {unit === "metric" ? (
                <Input
                  label="Hip Circumference (cm)"
                  type="number"
                  value={hip}
                  onChange={(e) => handleHipChange(e.target.value)}
                  onBlur={() => {
                    const error = validateField(hip, COMMON_RULES.circumferenceCm);
                    setHipError(error);
                  }}
                  placeholder="Measure at widest point (e.g., 100)"
                  error={hipError || undefined}
                  helperText="Measure your hips at the widest point"
                  step="0.1"
                  min="10"
                  max="200"
                />
              ) : (
                <Input
                  label="Hip Circumference (inches)"
                  type="number"
                  value={hip}
                  onChange={(e) => handleHipChange(e.target.value)}
                  onBlur={() => {
                    const error = validateField(hip, COMMON_RULES.circumferenceInches);
                    setHipError(error);
                  }}
                  placeholder="Measure at widest point (e.g., 40)"
                  error={hipError || undefined}
                  helperText="Measure your hips at the widest point"
                  step="0.1"
                  min="4"
                  max="80"
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
              {result.bodyFatPercentage.toFixed(1)}%
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

