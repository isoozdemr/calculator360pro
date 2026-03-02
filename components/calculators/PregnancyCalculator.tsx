"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function PregnancyCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [lmpDate, setLmpDate] = useState("");
  const [result, setResult] = useState<{
    dueDate: Date;
    currentWeek: number;
    currentDay: number;
    trimester: string;
    daysRemaining: number;
  } | null>(null);
  const [lmpDateError, setLmpDateError] = useState<string | null>(null);

  const calculate = useCallback(() => {
    if (!lmpDate?.trim()) {
      setLmpDateError(isTr ? "Son adet tarihi girin" : "Last menstrual period date is required");
      return;
    }
    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) {
      setLmpDateError(isTr ? "Geçerli bir tarih girin" : "Invalid date");
      return;
    }
    const today = new Date();
    if (lmp > today) {
      setLmpDateError(isTr ? "Son adet tarihi gelecekte olamaz" : "LMP date cannot be in the future");
      return;
    }
    setLmpDateError(null);

    // Calculate due date: LMP + 280 days (40 weeks)
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);

    // Calculate current pregnancy week and day
    const daysSinceLMP = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(daysSinceLMP / 7);
    const currentDay = daysSinceLMP % 7;

    // Determine trimester
    let trimester = "First";
    if (currentWeek >= 14) trimester = "Second";
    if (currentWeek >= 28) trimester = "Third";

    // Calculate days remaining
    const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      dueDate,
      currentWeek: Math.max(0, currentWeek),
      currentDay,
      trimester,
      daysRemaining,
    });
  }, [lmpDate, isTr]);

  const reset = useCallback(() => {
    setLmpDate("");
    setResult(null);
    setLmpDateError(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label={isTr ? "Son Adet Tarihi (SAT)" : "Last Menstrual Period (LMP) Date"}
            type="date"
            value={lmpDate}
            onChange={(e) => { setLmpDate(e.target.value); setLmpDateError(null); }}
            error={lmpDateError || undefined}
            helperText={isTr ? "Son adetinizin ilk gününü girin" : "Enter the first day of your last menstrual period"}
          />

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
              {isTr ? "Gebelik Bilgisi" : "Pregnancy Information"}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Tahmini Doğum Tarihi" : "Estimated Due Date"}</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {result.dueDate.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Mevcut gebelik haftası" : "Current Pregnancy Week"}</p>
                <p className="text-2xl font-bold text-[#10b981] font-mono">
                  {isTr ? "Hafta " : "Week "}{formatNumber(result.currentWeek, locale, { maxFractionDigits: 0 })}, {isTr ? "Gün " : "Day "}{formatNumber(result.currentDay, locale, { maxFractionDigits: 0 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{isTr ? "Trimester" : "Trimester"}</p>
                <p className="text-xl font-bold text-[#10b981]">
                  {result.trimester} {isTr ? "Trimester" : "Trimester"}
                </p>
              </div>
              {result.daysRemaining > 0 && (
                <div>
                  <p className="text-sm text-[#64748b]">{isTr ? "Doğum tarihine kalan gün" : "Days Until Due Date"}</p>
                  <p className="text-xl font-bold text-[#10b981] font-mono">
                    {formatNumber(result.daysRemaining, locale, { maxFractionDigits: 0 })} {isTr ? "gün" : "days"}
                  </p>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-[#10b981]">
              <p className="text-xs text-[#64748b]">
                {isTr ? "Not: Doğum tarihleri tahminidir. Bebeklerin yalnızca yaklaşık %5'i tam tahmini tarihte doğar. Çoğu doğum tahmini tarihten 2 hafta önce veya sonra gerçekleşir." : "Note: Due dates are estimates. Only about 5% of babies are born exactly on their due date. Most births occur within 2 weeks before or after the due date."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

