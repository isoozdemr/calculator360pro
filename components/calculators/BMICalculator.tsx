"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES, VALIDATION_PATTERNS } from "@/lib/validation/rules";

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  
  // Error states
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const handleWeightChange = (value: string) => {
    setWeight(value);
    if (weightError) setWeightError(null);
  };

  const handleWeightBlur = () => {
    const rules = unit === "metric" ? COMMON_RULES.weightKg : COMMON_RULES.weightLbs;
    const error = validateField(weight, rules);
    setWeightError(error);
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);
    if (heightError) setHeightError(null);
  };

  const handleHeightBlur = () => {
    if (unit === "metric") {
      const error = validateField(height, COMMON_RULES.heightCm);
      setHeightError(error);
    } else {
      const error = validateField(height, COMMON_RULES.heightImperial);
      setHeightError(error);
    }
  };

  const calculateBMI = () => {
    // Validate all fields
    const weightRules = unit === "metric" ? COMMON_RULES.weightKg : COMMON_RULES.weightLbs;
    const heightRules = unit === "metric" ? COMMON_RULES.heightCm : COMMON_RULES.heightImperial;
    
    const weightErr = validateField(weight, weightRules);
    const heightErr = validateField(height, heightRules);

    if (weightErr || heightErr) {
      setWeightError(weightErr);
      setHeightError(heightErr);
      return;
    }

    let weightKg: number;
    let heightM: number;

    if (unit === "metric") {
      weightKg = parseFloat(weight);
      heightM = parseFloat(height) / 100; // cm to m
    } else {
      // Imperial: weight in lbs, height in feet and inches
      const match = height.match(VALIDATION_PATTERNS.HEIGHT_IMPERIAL);
      if (!match) {
        setHeightError("Height must be in format: feet'inches (e.g., 5'10)");
        return;
      }
      const feet = parseInt(match[1]);
      const inches = parseInt(match[2] || "0");
      weightKg = parseFloat(weight) * 0.453592; // lbs to kg
      heightM = (feet * 12 + inches) * 0.0254; // inches to m
    }

    if (!isNaN(weightKg) && !isNaN(heightM) && heightM > 0) {
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
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
              Metric (kg, cm)
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                unit === "imperial"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              Imperial (lbs, ft'in)
            </button>
          </div>

          <Input
            label={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
            type="number"
            value={weight}
            onChange={(e) => handleWeightChange(e.target.value)}
            onBlur={handleWeightBlur}
            placeholder={unit === "metric" ? "Enter weight in kg (e.g., 70)" : "Enter weight in lbs (e.g., 154)"}
            error={weightError || undefined}
            helperText={unit === "metric" ? "Enter your weight in kilograms" : "Enter your weight in pounds"}
            step="0.1"
            min={unit === "metric" ? "1" : "2.2"}
            max={unit === "metric" ? "500" : "1100"}
          />

          {unit === "metric" ? (
            <Input
              label="Height (cm)"
              type="number"
              value={height}
              onChange={(e) => handleHeightChange(e.target.value)}
              onBlur={handleHeightBlur}
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
              onBlur={handleHeightBlur}
              placeholder="e.g., 5'10"
              error={heightError || undefined}
              helperText="Enter height in format: feet'inches (e.g., 5'10)"
            />
          )}

          <div className="flex gap-3">
            <Button onClick={calculateBMI} className="flex-1">
              Calculate BMI
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {bmi !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Your BMI
            </h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono mb-2">
              {bmi.toFixed(1)}
            </p>
            <p className="text-lg font-semibold text-[#1e293b]">
              {category}
            </p>
            <div className="mt-4 pt-4 border-t border-[#10b981]/30">
              <p className="text-sm text-[#64748b]">
                BMI Categories:
              </p>
              <ul className="text-xs text-[#64748b] mt-2 space-y-1">
                <li>Underweight: &lt; 18.5</li>
                <li>Normal weight: 18.5 - 24.9</li>
                <li>Overweight: 25 - 29.9</li>
                <li>Obese: ≥ 30</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

