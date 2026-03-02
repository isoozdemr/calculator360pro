"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { FormattedNumberInput } from "@/components/ui/FormattedNumberInput";
import { parseLocaleNumber, formatNumber } from "@/lib/format/locale-format";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function simplify(num: number, den: number): { num: number; den: number } {
  if (den === 0) return { num: 0, den: 1 };
  const g = gcd(num, den);
  const n = Math.round(num / g);
  const d = Math.round(den / g);
  if (d < 0) return { num: -n, den: -d };
  return { num: n, den: d };
}

const PRESETS = [
  { label: "1/2 + 1/3", n1: 1, d1: 2, n2: 1, d2: 3, op: "+" as const },
  { label: "3/4 × 2/5", n1: 3, d1: 4, n2: 2, d2: 5, op: "×" as const },
  { label: "7/8 − 1/4", n1: 7, d1: 8, n2: 1, d2: 4, op: "−" as const },
  { label: "2/3 ÷ 4/5", n1: 2, d1: 3, n2: 4, d2: 5, op: "÷" as const },
];

type Op = "+" | "−" | "×" | "÷";

type Locale = "en" | "tr";

export function FractionCalculator({ locale: localeProp = "en" }: { locale?: Locale }) {
  const isTr = localeProp === "tr";
  const [num1, setNum1] = useState("1");
  const [den1, setDen1] = useState("2");
  const [num2, setNum2] = useState("1");
  const [den2, setDen2] = useState("3");
  const [op, setOp] = useState<Op>("+");
  const [result, setResult] = useState<{ num: number; den: number; decimal: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const locale = localeProp;
  const parse = useCallback((n: string, d: string) => {
    const aRaw = parseLocaleNumber(n, locale);
    const bRaw = parseLocaleNumber(d, locale);
    const a = aRaw != null ? Math.round(aRaw) : NaN;
    const b = bRaw != null ? Math.round(bRaw) : NaN;
    return { a, b, valid: !Number.isNaN(a) && !Number.isNaN(b) && b !== 0 };
  }, [locale]);

  const calculate = useCallback(() => {
    setError(null);
    setResult(null);
    const p1 = parse(num1, den1);
    const p2 = parse(num2, den2);
    if (!p1.valid) {
      setError(isTr ? "İlk kesir: geçerli pay ve payda girin (payda sıfır olamaz)." : "First fraction: enter valid numerator and denominator (denominator cannot be zero).");
      return;
    }
    if (!p2.valid) {
      setError(isTr ? "İkinci kesir: geçerli pay ve payda girin (payda sıfır olamaz)." : "Second fraction: enter valid numerator and denominator (denominator cannot be zero).");
      return;
    }
    const { a: n1, b: d1 } = p1;
    const { a: n2, b: d2 } = p2;

    let num: number;
    let den: number;
    if (op === "+") {
      num = n1 * d2 + n2 * d1;
      den = d1 * d2;
    } else if (op === "−") {
      num = n1 * d2 - n2 * d1;
      den = d1 * d2;
    } else if (op === "×") {
      num = n1 * n2;
      den = d1 * d2;
    } else {
      if (n2 === 0) {
        setError(isTr ? "Sıfıra bölünemez." : "Cannot divide by zero.");
        return;
      }
      num = n1 * d2;
      den = d1 * n2;
    }
    const { num: rn, den: rd } = simplify(num, den);
    const decimal = rd === 0 ? 0 : rn / rd;
    setResult({ num: rn, den: rd, decimal });
  }, [num1, den1, num2, den2, op, parse, isTr]);

  const copyResult = useCallback(() => {
    if (!result) return;
    const text = result.den === 1
      ? String(result.num)
      : `${result.num}/${result.den} (${formatNumber(result.decimal, locale, { maxFractionDigits: 6 })})`;
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result, locale]);

  const applyPreset = useCallback((preset: (typeof PRESETS)[0]) => {
    setNum1(String(preset.n1));
    setDen1(String(preset.d1));
    setNum2(String(preset.n2));
    setDen2(String(preset.d2));
    setOp(preset.op);
    setError(null);
    setResult(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">{isTr ? "Kesir 1" : "First fraction"}</label>
            <div className="flex items-center gap-2 flex-wrap">
              <FormattedNumberInput
                value={num1}
                onChange={setNum1}
                locale={locale}
                formatAs="number"
                maxFractionDigits={0}
                helperText={undefined}
                className="w-20 text-center"
              />
              <span className="text-[#64748b]">/</span>
              <FormattedNumberInput
                value={den1}
                onChange={setDen1}
                locale={locale}
                formatAs="number"
                maxFractionDigits={0}
                helperText={undefined}
                className="w-20 text-center"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">{isTr ? "İşlem" : "Operation"}</label>
            <select
              value={op}
              onChange={(e) => setOp(e.target.value as Op)}
              className="w-full rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-[#1e293b] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              aria-label={isTr ? "İşlem" : "Operation"}
            >
              <option value="+">{isTr ? "Toplama (+)" : "Add (+)"}</option>
              <option value="−">{isTr ? "Çıkarma (−)" : "Subtract (−)"}</option>
              <option value="×">{isTr ? "Çarpma (×)" : "Multiply (×)"}</option>
              <option value="÷">{isTr ? "Bölme (÷)" : "Divide (÷)"}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2">{isTr ? "Kesir 2" : "Second fraction"}</label>
            <div className="flex items-center gap-2 flex-wrap">
              <FormattedNumberInput
                value={num2}
                onChange={setNum2}
                locale={locale}
                formatAs="number"
                maxFractionDigits={0}
                helperText={undefined}
                className="w-20 text-center"
              />
              <span className="text-[#64748b]">/</span>
              <FormattedNumberInput
                value={den2}
                onChange={setDen2}
                locale={locale}
                formatAs="number"
                maxFractionDigits={0}
                helperText={undefined}
                className="w-20 text-center"
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">{error}</p>
        )}

        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate} variant="primary">{isTr ? "Hesapla" : "Calculate"}</Button>
          <Button
            onClick={() => {
              setNum1("1"); setDen1("2"); setNum2("1"); setDen2("3"); setOp("+");
              setResult(null); setError(null);
            }}
            variant="secondary"
          >
            {isTr ? "Temizle" : "Reset"}
          </Button>
        </div>

        <div>
          <p className="text-sm text-[#64748b] mb-2">{isTr ? "Örnek dene:" : "Try an example:"}</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyPreset(preset)}
                className="px-3 py-1.5 text-sm rounded-lg border border-[#e2e8f0] text-[#475569] hover:bg-[#f1f5f9] transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div
          className="bg-gradient-to-br from-[#1e293b] to-[#334155] text-white rounded-xl p-6 shadow-lg"
          id="result-summary"
        >
          <p className="text-sm text-[#94a3b8] mb-2">{isTr ? "Sonuç" : "Result"}</p>
          <p className="text-xl md:text-2xl font-bold leading-snug mb-2">
            {result.den === 1 ? (
              result.num
            ) : (
              <span>{result.num}/{result.den}</span>
            )}
            <span className="text-[#93c5fd] ml-2">
              = {formatNumber(result.decimal, locale, { maxFractionDigits: 6 })}
            </span>
          </p>
          <p className="text-sm text-[#94a3b8] mb-3">
            {isTr ? "Sadeleştirilmiş kesir ve ondalık biçim." : "Simplified fraction and decimal form."}
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
