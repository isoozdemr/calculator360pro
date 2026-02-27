"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

type ScalePreset = "standard" | "strict" | "custom";
const SCALE_PRESETS: Record<ScalePreset, { A: number; B: number; C: number; D: number }> = {
  standard: { A: 90, B: 80, C: 70, D: 60 },
  strict: { A: 93, B: 85, C: 77, D: 70 },
  custom: { A: 90, B: 80, C: 70, D: 60 },
};

function percentToLetter(percent: number, scale: { A: number; B: number; C: number; D: number }): string {
  if (percent >= scale.A) return "A";
  if (percent >= scale.B) return "B";
  if (percent >= scale.C) return "C";
  if (percent >= scale.D) return "D";
  return "F";
}

export function GradeCalculator() {
  const [mode, setMode] = useState<"percent" | "points" | "final">("percent");
  const [percent, setPercent] = useState("");
  const [pointsEarned, setPointsEarned] = useState("");
  const [pointsTotal, setPointsTotal] = useState("");
  const [scalePreset, setScalePreset] = useState<ScalePreset>("standard");
  const [customA, setCustomA] = useState("90");
  const [customB, setCustomB] = useState("80");
  const [customC, setCustomC] = useState("70");
  const [customD, setCustomD] = useState("60");
  const [currentGrade, setCurrentGrade] = useState("");
  const [finalWeight, setFinalWeight] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [result, setResult] = useState<{ letter: string; percent: number } | { needed: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const scale =
    scalePreset === "custom"
      ? { A: parseFloat(customA) || 90, B: parseFloat(customB) || 80, C: parseFloat(customC) || 70, D: parseFloat(customD) || 60 }
      : SCALE_PRESETS[scalePreset];

  const clearError = (key: string) => {
    setErrors((e) => ({ ...e, [key]: null }));
  };

  const calculate = () => {
    const newErrors: Record<string, string | null> = {};
    if (mode === "percent") {
      const err = validateField(percent, { ...COMMON_RULES.percentage, max: 100 });
      if (err) newErrors.percent = err;
    }
    if (mode === "points") {
      const errEarned = validateField(pointsEarned, COMMON_RULES.positiveNumber);
      const errTotal = validateField(pointsTotal, COMMON_RULES.positiveNumber);
      if (errEarned) newErrors.pointsEarned = errEarned;
      if (errTotal) newErrors.pointsTotal = errTotal;
      const e = parseFloat(pointsEarned);
      const t = parseFloat(pointsTotal);
      if (!errEarned && !errTotal && t > 0 && e > t) newErrors.pointsEarned = "Earned cannot exceed total";
    }
    if (mode === "final") {
      const errCur = validateField(currentGrade, COMMON_RULES.percentage);
      const errWeight = validateField(finalWeight, COMMON_RULES.percentage);
      const errDes = validateField(desiredGrade, COMMON_RULES.percentage);
      if (errCur) newErrors.currentGrade = errCur;
      if (errWeight) newErrors.finalWeight = errWeight;
      if (errDes) newErrors.desiredGrade = errDes;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).some((k) => newErrors[k])) return;

    if (mode === "percent") {
      const p = parseFloat(percent);
      if (!isNaN(p) && p >= 0 && p <= 100) setResult({ letter: percentToLetter(p, scale), percent: p });
      return;
    }
    if (mode === "points") {
      const e = parseFloat(pointsEarned);
      const t = parseFloat(pointsTotal);
      if (!isNaN(e) && !isNaN(t) && t > 0 && e <= t) {
        const p = (e / t) * 100;
        setResult({ letter: percentToLetter(p, scale), percent: p });
      }
      return;
    }
    if (mode === "final") {
      const cur = parseFloat(currentGrade);
      const w = parseFloat(finalWeight);
      const des = parseFloat(desiredGrade);
      if (w <= 0 || w > 100) return;
      const weightDecimal = w / 100;
      const currentWeight = 1 - weightDecimal;
      const needed = (des - cur * currentWeight) / weightDecimal;
      setResult({ needed });
    }
  };

  const reset = () => {
    setPercent("");
    setPointsEarned("");
    setPointsTotal("");
    setCurrentGrade("");
    setFinalWeight("");
    setDesiredGrade("");
    setResult(null);
    setErrors({});
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;
    const text = "needed" in result ? "Grade needed on final: " + result.needed.toFixed(1) + "%" : "Grade: " + result.letter + " (" + result.percent.toFixed(1) + "%)";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="flex flex-wrap gap-2">
          <Button variant={mode === "percent" ? "primary" : "outline"} size="sm" onClick={() => { setMode("percent"); setResult(null); }}>% to letter</Button>
          <Button variant={mode === "points" ? "primary" : "outline"} size="sm" onClick={() => { setMode("points"); setResult(null); }}>Points to grade</Button>
          <Button variant={mode === "final" ? "primary" : "outline"} size="sm" onClick={() => { setMode("final"); setResult(null); }}>Grade needed on final</Button>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#334155]">Grading scale</label>
          <select className="w-full rounded-md border border-[#e2e8f0] px-3 py-2 text-[#1e293b]" value={scalePreset} onChange={(e) => setScalePreset(e.target.value as ScalePreset)}>
            <option value="standard">Standard (90/80/70/60)</option>
            <option value="strict">Strict (93/85/77/70)</option>
            <option value="custom">Custom</option>
          </select>
          {scalePreset === "custom" && (
            <div className="grid grid-cols-4 gap-2 mt-2">
              <Input label="A min %" type="number" value={customA} onChange={(e) => setCustomA(e.target.value)} min="0" max="100" />
              <Input label="B min %" type="number" value={customB} onChange={(e) => setCustomB(e.target.value)} min="0" max="100" />
              <Input label="C min %" type="number" value={customC} onChange={(e) => setCustomC(e.target.value)} min="0" max="100" />
              <Input label="D min %" type="number" value={customD} onChange={(e) => setCustomD(e.target.value)} min="0" max="100" />
            </div>
          )}
        </div>
        {mode === "percent" && (
          <Input label="Percentage" type="number" value={percent} onChange={(e) => { setPercent(e.target.value); clearError("percent"); }} placeholder="e.g. 85" error={errors.percent || undefined} step="0.1" min="0" max="100" />
        )}
        {mode === "points" && (
          <>
            <Input label="Points earned" type="number" value={pointsEarned} onChange={(e) => { setPointsEarned(e.target.value); clearError("pointsEarned"); }} placeholder="e.g. 42" error={errors.pointsEarned || undefined} min="0" />
            <Input label="Total points" type="number" value={pointsTotal} onChange={(e) => { setPointsTotal(e.target.value); clearError("pointsTotal"); }} placeholder="e.g. 50" error={errors.pointsTotal || undefined} min="0" />
          </>
        )}
        {mode === "final" && (
          <>
            <Input label="Current grade (%)" type="number" value={currentGrade} onChange={(e) => { setCurrentGrade(e.target.value); clearError("currentGrade"); }} placeholder="e.g. 78" error={errors.currentGrade || undefined} step="0.1" min="0" max="100" />
            <Input label="Final exam weight (%)" type="number" value={finalWeight} onChange={(e) => { setFinalWeight(e.target.value); clearError("finalWeight"); }} placeholder="e.g. 30" error={errors.finalWeight || undefined} step="0.1" min="0" max="100" />
            <Input label="Desired course grade (%)" type="number" value={desiredGrade} onChange={(e) => { setDesiredGrade(e.target.value); clearError("desiredGrade"); }} placeholder="e.g. 80" error={errors.desiredGrade || undefined} step="0.1" min="0" max="100" />
          </>
        )}
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">Calculate</Button>
          <Button onClick={reset} variant="outline">Reset</Button>
        </div>
      </div>
      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">Result</h3>
          {"needed" in result ? (
            <p className="text-2xl font-bold text-[#10b981] font-mono">Grade needed on final: {result.needed.toFixed(1)}%{result.needed > 100 && " (impossible)"}{result.needed < 0 && " (already above target)"}</p>
          ) : (
            <p className="text-2xl font-bold text-[#10b981] font-mono">{result.letter} — {result.percent.toFixed(1)}%</p>
          )}
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? "Copied!" : "Copy result"}</Button>
        </div>
      )}
    </div>
  );
}
