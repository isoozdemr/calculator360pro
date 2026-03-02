"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatNumber } from "@/lib/format/locale-format";

type Locale = "en" | "tr";

export function AgeCalculator({ locale: localeProp = "en" }: { locale?: Locale } = {}) {
  const locale = localeProp;
  const isTr = locale === "tr";
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    weeks: number;
    days: number;
  } | null>(null);
  const [birthDateError, setBirthDateError] = useState<string | null>(null);

  const calculateAge = () => {
    if (!birthDate.trim()) {
      setBirthDateError(isTr ? "Doğum tarihi girin" : "Enter birth date");
      return;
    }
    const birth = new Date(birthDate);
    const today = new Date();
    if (isNaN(birth.getTime())) {
      setBirthDateError(isTr ? "Geçerli bir tarih girin" : "Enter a valid date");
      return;
    }
    if (birth > today) {
      setBirthDateError(isTr ? "Doğum tarihi gelecekte olamaz" : "Birth date cannot be in the future");
      return;
    }
    setBirthDateError(null);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(today.getTime() - birth.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);

    setAge({
      years,
      months,
      weeks,
      days: totalDays,
    });
  };

  const reset = () => {
    setBirthDate("");
    setAge(null);
    setBirthDateError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label={isTr ? "Doğum Tarihi" : "Birth Date"}
            type="date"
            value={birthDate}
            onChange={(e) => { setBirthDate(e.target.value); setBirthDateError(null); }}
            max={new Date().toISOString().split("T")[0]}
            error={birthDateError || undefined}
            helperText={isTr ? "Doğum tarihinizi seçin" : "Select your date of birth"}
          />

          <div className="flex gap-3">
            <Button onClick={calculateAge} className="flex-1">
              Calculate Age
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {age !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-4">
              Your Age
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(age.years, locale, { maxFractionDigits: 0 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {isTr ? "Yıl" : "Years"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(age.months, locale, { maxFractionDigits: 0 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {isTr ? "Ay" : "Months"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(age.weeks, locale, { maxFractionDigits: 0 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {isTr ? "Hafta" : "Weeks"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatNumber(age.days, locale, { maxFractionDigits: 0 })}
                </p>
                <p className="text-sm text-[#64748b] mt-1">
                  {isTr ? "Gün" : "Days"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

