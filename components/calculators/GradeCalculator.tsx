"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber, formatPercent } from "@/lib/format/locale-format";

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

type Locale = "en" | "tr";

export function GradeCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const isTr = localeProp === "tr";
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

  const locale = localeProp;
  const scale =
    scalePreset === "custom"
      ? { A: parseLocaleNumber(customA, locale) ?? 90, B: parseLocaleNumber(customB, locale) ?? 80, C: parseLocaleNumber(customC, locale) ?? 70, D: parseLocaleNumber(customD, locale) ?? 60 }
      : SCALE_PRESETS[scalePreset];

  const clearError = (key: string) => {
    setErrors((e) => ({ ...e, [key]: null }));
  };

  const calculate = () => {
    const newErrors: Record<string, string | null> = {};
    if (mode === "percent") {
      const p = parseLocaleNumber(percent, locale);
      if (p == null || p < 0 || p > 100) newErrors.percent = isTr ? "0–100 arası yüzde girin" : "Enter percentage 0–100";
    }
    if (mode === "points") {
      const e = parseLocaleNumber(pointsEarned, locale);
      const t = parseLocaleNumber(pointsTotal, locale);
      if (e == null || e < 0) newErrors.pointsEarned = isTr ? "Geçerli kazanılan puan" : "Valid points earned";
      if (t == null || t <= 0) newErrors.pointsTotal = isTr ? "Geçerli toplam puan" : "Valid total points";
      if (e != null && t != null && t > 0 && e > t) newErrors.pointsEarned = isTr ? "Kazanılan toplamı aşamaz" : "Earned cannot exceed total";
    }
    if (mode === "final") {
      const cur = parseLocaleNumber(currentGrade, locale);
      const w = parseLocaleNumber(finalWeight, locale);
      const des = parseLocaleNumber(desiredGrade, locale);
      if (cur == null || cur < 0 || cur > 100) newErrors.currentGrade = isTr ? "0–100 arası girin" : "Enter 0–100";
      if (w == null || w <= 0 || w > 100) newErrors.finalWeight = isTr ? "0–100 arası ağırlık" : "Weight 0–100";
      if (des == null || des < 0 || des > 100) newErrors.desiredGrade = isTr ? "0–100 arası istenen not" : "Desired grade 0–100";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).some((k) => newErrors[k])) return;

    if (mode === "percent") {
      const p = parseLocaleNumber(percent, locale);
      if (p != null && p >= 0 && p <= 100) setResult({ letter: percentToLetter(p, scale), percent: p });
      return;
    }
    if (mode === "points") {
      const e = parseLocaleNumber(pointsEarned, locale)!;
      const t = parseLocaleNumber(pointsTotal, locale)!;
      if (t > 0 && e <= t) {
        const p = (e / t) * 100;
        setResult({ letter: percentToLetter(p, scale), percent: p });
      }
      return;
    }
    if (mode === "final") {
      const cur = parseLocaleNumber(currentGrade, locale)!;
      const w = parseLocaleNumber(finalWeight, locale)!;
      const des = parseLocaleNumber(desiredGrade, locale)!;
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
    const text = "needed" in result
      ? (isTr ? "Finalde gerekli not: " : "Grade needed on final: ") + formatPercent(result.needed, locale, { maxFractionDigits: 1 })
      : (isTr ? "Not: " : "Grade: ") + result.letter + " (" + formatPercent(result.percent, locale, { maxFractionDigits: 1 }) + ")";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="flex flex-wrap gap-2">
          <Button variant={mode === "percent" ? "primary" : "outline"} size="sm" onClick={() => { setMode("percent"); setResult(null); }}>{isTr ? "% → harf" : "% to letter"}</Button>
          <Button variant={mode === "points" ? "primary" : "outline"} size="sm" onClick={() => { setMode("points"); setResult(null); }}>{isTr ? "Puan → not" : "Points to grade"}</Button>
          <Button variant={mode === "final" ? "primary" : "outline"} size="sm" onClick={() => { setMode("final"); setResult(null); }}>{isTr ? "Finalde gerekli not" : "Grade needed on final"}</Button>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#334155]">{isTr ? "Notlama ölçeği" : "Grading scale"}</label>
          <select className="w-full rounded-md border border-[#e2e8f0] px-3 py-2 text-[#1e293b]" value={scalePreset} onChange={(e) => setScalePreset(e.target.value as ScalePreset)}>
            <option value="standard">{isTr ? "Standart (90/80/70/60)" : "Standard (90/80/70/60)"}</option>
            <option value="strict">{isTr ? "Katı (93/85/77/70)" : "Strict (93/85/77/70)"}</option>
            <option value="custom">{isTr ? "Özel" : "Custom"}</option>
          </select>
          {scalePreset === "custom" && (
            <div className="grid grid-cols-4 gap-2 mt-2">
              <FormattedNumberInput label={isTr ? "A min %" : "A min %"} value={customA} onChange={setCustomA} locale={locale} formatAs="number" maxFractionDigits={0} />
              <FormattedNumberInput label={isTr ? "B min %" : "B min %"} value={customB} onChange={setCustomB} locale={locale} formatAs="number" maxFractionDigits={0} />
              <FormattedNumberInput label={isTr ? "C min %" : "C min %"} value={customC} onChange={setCustomC} locale={locale} formatAs="number" maxFractionDigits={0} />
              <FormattedNumberInput label={isTr ? "D min %" : "D min %"} value={customD} onChange={setCustomD} locale={locale} formatAs="number" maxFractionDigits={0} />
            </div>
          )}
        </div>
        {mode === "percent" && (
          <FormattedNumberInput label={isTr ? "Yüzde" : "Percentage"} value={percent} onChange={(v) => { setPercent(v); clearError("percent"); }} locale={locale} formatAs="percent" error={errors.percent || undefined} helperText={isTr ? "örn. 85" : "e.g. 85"} />
        )}
        {mode === "points" && (
          <>
            <FormattedNumberInput label={isTr ? "Kazanılan puan" : "Points earned"} value={pointsEarned} onChange={(v) => { setPointsEarned(v); clearError("pointsEarned"); }} locale={locale} formatAs="number" error={errors.pointsEarned || undefined} helperText={isTr ? "örn. 42" : "e.g. 42"} />
            <FormattedNumberInput label={isTr ? "Toplam puan" : "Total points"} value={pointsTotal} onChange={(v) => { setPointsTotal(v); clearError("pointsTotal"); }} locale={locale} formatAs="number" error={errors.pointsTotal || undefined} helperText={isTr ? "örn. 50" : "e.g. 50"} />
          </>
        )}
        {mode === "final" && (
          <>
            <FormattedNumberInput label={isTr ? "Mevcut not (%)" : "Current grade (%)"} value={currentGrade} onChange={(v) => { setCurrentGrade(v); clearError("currentGrade"); }} locale={locale} formatAs="percent" error={errors.currentGrade || undefined} helperText={isTr ? "örn. 78" : "e.g. 78"} />
            <FormattedNumberInput label={isTr ? "Final sınav ağırlığı (%)" : "Final exam weight (%)"} value={finalWeight} onChange={(v) => { setFinalWeight(v); clearError("finalWeight"); }} locale={locale} formatAs="percent" error={errors.finalWeight || undefined} helperText={isTr ? "örn. 30" : "e.g. 30"} />
            <FormattedNumberInput label={isTr ? "İstenen ders notu (%)" : "Desired course grade (%)"} value={desiredGrade} onChange={(v) => { setDesiredGrade(v); clearError("desiredGrade"); }} locale={locale} formatAs="percent" error={errors.desiredGrade || undefined} helperText={isTr ? "örn. 80" : "e.g. 80"} />
          </>
        )}
        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">{isTr ? "Hesapla" : "Calculate"}</Button>
          <Button onClick={reset} variant="outline">{isTr ? "Sıfırla" : "Reset"}</Button>
        </div>
      </div>
      {result && (
        <div className="bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-3" id="result-summary">
          <h3 className="text-lg font-semibold text-[#1e293b]">{isTr ? "Sonuç" : "Result"}</h3>
          {"needed" in result ? (
            <p className="text-2xl font-bold text-[#10b981] font-mono">{isTr ? "Finalde gerekli not: " : "Grade needed on final: "}{formatPercent(result.needed, locale, { maxFractionDigits: 1 })}{result.needed > 100 && (isTr ? " (imkansız)" : " (impossible)")}{result.needed < 0 && (isTr ? " (zaten hedefin üzerinde)" : " (already above target)")}</p>
          ) : (
            <p className="text-2xl font-bold text-[#10b981] font-mono">{result.letter} — {formatPercent(result.percent, locale, { maxFractionDigits: 1 })}</p>
          )}
          <Button onClick={copyResult} variant="outline" size="sm">{copied ? (isTr ? "Kopyalandı!" : "Copied!") : (isTr ? "Sonucu kopyala" : "Copy result")}</Button>
        </div>
      )}
    </div>
  );
}
