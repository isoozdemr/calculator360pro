"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

// Türkçe burç isimleri
const BURCLAR = [
  { ad: "Koç", baslangic: { ay: 3, gun: 21 }, bitis: { ay: 4, gun: 19 }, emoji: "♈" },
  { ad: "Boğa", baslangic: { ay: 4, gun: 20 }, bitis: { ay: 5, gun: 20 }, emoji: "♉" },
  { ad: "İkizler", baslangic: { ay: 5, gun: 21 }, bitis: { ay: 6, gun: 20 }, emoji: "♊" },
  { ad: "Yengeç", baslangic: { ay: 6, gun: 21 }, bitis: { ay: 7, gun: 22 }, emoji: "♋" },
  { ad: "Aslan", baslangic: { ay: 7, gun: 23 }, bitis: { ay: 8, gun: 22 }, emoji: "♌" },
  { ad: "Başak", baslangic: { ay: 8, gun: 23 }, bitis: { ay: 9, gun: 22 }, emoji: "♍" },
  { ad: "Terazi", baslangic: { ay: 9, gun: 23 }, bitis: { ay: 10, gun: 22 }, emoji: "♎" },
  { ad: "Akrep", baslangic: { ay: 10, gun: 23 }, bitis: { ay: 11, gun: 21 }, emoji: "♏" },
  { ad: "Yay", baslangic: { ay: 11, gun: 22 }, bitis: { ay: 12, gun: 21 }, emoji: "♐" },
  { ad: "Oğlak", baslangic: { ay: 12, gun: 22 }, bitis: { ay: 1, gun: 19 }, emoji: "♑" },
  { ad: "Kova", baslangic: { ay: 1, gun: 20 }, bitis: { ay: 2, gun: 18 }, emoji: "♒" },
  { ad: "Balık", baslangic: { ay: 2, gun: 19 }, bitis: { ay: 3, gun: 20 }, emoji: "♓" },
];

function getBurc(ay: number, gun: number) {
  for (const burc of BURCLAR) {
    if (burc.ad === "Oğlak") {
      if ((ay === 12 && gun >= 22) || (ay === 1 && gun <= 19)) {
        return burc;
      }
    } else if (
      (ay === burc.baslangic.ay && gun >= burc.baslangic.gun) ||
      (ay === burc.bitis.ay && gun <= burc.bitis.gun)
    ) {
      return burc;
    }
  }
  return BURCLAR[0];
}

export function TurkeyAgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    weeks: number;
    days: number;
    totalDays: number;
    totalMonths: number;
    totalHours: number;
    nextBirthdayDays: number;
    burc: { ad: string; emoji: string };
    dogumGunu: string;
  } | null>(null);
  const [birthDateError, setBirthDateError] = useState<string | null>(null);

  const handleBirthDateChange = (value: string) => {
    setBirthDate(value);
    if (birthDateError) setBirthDateError(null);
  };

  const gunAdiGetir = (tarih: Date): string => {
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    return gunler[tarih.getDay()];
  };

  const calculateAge = () => {
    if (!birthDate) {
      setBirthDateError("Lütfen doğum tarihinizi seçin");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setBirthDateError("Doğum tarihi gelecekte olamaz");
      return;
    }

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
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    // Sonraki doğum gününe kalan gün
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    // Burç hesaplama
    const burc = getBurc(birth.getMonth() + 1, birth.getDate());

    // Doğum günü
    const dogumGunu = gunAdiGetir(birth);

    setAge({
      years,
      months,
      weeks,
      days,
      totalDays,
      totalMonths,
      totalHours,
      nextBirthdayDays,
      burc,
      dogumGunu,
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
            label="Doğum Tarihi"
            type="date"
            value={birthDate}
            onChange={(e) => handleBirthDateChange(e.target.value)}
            onBlur={() => {
              if (!birthDate) {
                setBirthDateError("Lütfen doğum tarihinizi seçin");
              }
            }}
            max={new Date().toISOString().split("T")[0]}
            error={birthDateError || undefined}
            helperText="Doğum tarihinizi seçin"
          />

          <div className="flex gap-3">
            <Button onClick={calculateAge} className="flex-1">
              Yaş Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {age !== null && (
          <>
            <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1e293b] mb-4">
                Yaşınız
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#10b981] font-mono">
                    {age.years}
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Yıl
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#10b981] font-mono">
                    {age.months}
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Ay
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#10b981] font-mono">
                    {age.weeks.toLocaleString("tr-TR")}
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Hafta
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#10b981] font-mono">
                    {age.totalDays.toLocaleString("tr-TR")}
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Gün
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Detaylı Bilgiler</h4>
                <ul className="space-y-2 text-sm text-[#64748b]">
                  <li className="flex justify-between">
                    <span>Toplam Ay:</span>
                    <span className="font-medium text-[#1e293b]">{age.totalMonths.toLocaleString("tr-TR")}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Toplam Saat:</span>
                    <span className="font-medium text-[#1e293b]">{age.totalHours.toLocaleString("tr-TR")}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Doğduğunuz Gün:</span>
                    <span className="font-medium text-[#1e293b]">{age.dogumGunu}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Özel Bilgiler</h4>
                <ul className="space-y-2 text-sm text-[#64748b]">
                  <li className="flex justify-between">
                    <span>Burcunuz:</span>
                    <span className="font-medium text-[#1e293b]">{age.burc.emoji} {age.burc.ad}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sonraki Doğum Günü:</span>
                    <span className="font-medium text-[#1e293b]">
                      {age.nextBirthdayDays === 0 ? "Bugün! 🎂" : `${age.nextBirthdayDays} gün`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bilgilendirme Kutusu */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">🎂 Yaş Hesaplama Bilgisi</h4>
        <p className="text-sm text-blue-800">
          Yaş hesaplama, doğum tarihinizden bugüne kadar geçen süreyi hesaplar. 
          Türkiye&apos;de resmi işlemlerde (ehliyet, evlilik, askerlik vb.) yaş hesaplaması 
          doğum tarihi üzerinden yapılır.
        </p>
      </div>
    </div>
  );
}
