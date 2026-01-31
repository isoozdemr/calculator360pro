"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function TurkeyCalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "light" | "moderate" | "active" | "very-active">("moderate");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain");
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    dailyCalories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);
  
  const [ageError, setAgeError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const handleAgeChange = (value: string) => {
    setAge(value);
    if (ageError) setAgeError(null);
  };

  const handleWeightChange = (value: string) => {
    setWeight(value);
    if (weightError) setWeightError(null);
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);
    if (heightError) setHeightError(null);
  };

  const calculate = () => {
    const ageVal = parseFloat(age);
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);
    
    let hasError = false;

    if (!age || isNaN(ageVal) || ageVal < 1 || ageVal > 120) {
      setAgeError("Lütfen 1-120 arasında geçerli bir yaş girin");
      hasError = true;
    }
    
    if (!weight || isNaN(weightVal) || weightVal < 1 || weightVal > 500) {
      setWeightError("Lütfen 1-500 kg arasında geçerli bir kilo girin");
      hasError = true;
    }
    
    if (!height || isNaN(heightVal) || heightVal < 30 || heightVal > 300) {
      setHeightError("Lütfen 30-300 cm arasında geçerli bir boy girin");
      hasError = true;
    }

    if (hasError) return;

    // Mifflin-St Jeor Denklemi (en doğru BMR formülü)
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * ageVal + 5;
    } else {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * ageVal - 161;
    }

    // Aktivite çarpanları
    const activityMultipliers = {
      sedentary: 1.2,      // Hareketsiz
      light: 1.375,        // Hafif egzersiz
      moderate: 1.55,      // Orta düzey egzersiz
      active: 1.725,       // Aktif
      "very-active": 1.9,  // Çok aktif
    };

    const tdee = bmr * activityMultipliers[activityLevel];

    // Hedef ayarlamaları
    let dailyCalories: number;
    if (goal === "lose") {
      dailyCalories = tdee - 500; // Haftada ~0.5 kg kayıp
    } else if (goal === "gain") {
      dailyCalories = tdee + 500; // Haftada ~0.5 kg kazanç
    } else {
      dailyCalories = tdee;
    }

    // Makro besin hesaplamaları (Türkiye Beslenme Rehberi'ne uygun)
    // Protein: 15-20% (aktif bireylerde 1.6-2.2g/kg)
    // Karbonhidrat: 45-55%
    // Yağ: 25-30%
    const protein = (dailyCalories * 0.20) / 4; // 4 kcal/g
    const carbs = (dailyCalories * 0.50) / 4;   // 4 kcal/g
    const fat = (dailyCalories * 0.30) / 9;     // 9 kcal/g

    setResult({
      bmr,
      tdee,
      dailyCalories,
      protein,
      carbs,
      fat,
    });
  };

  const reset = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setGender("male");
    setActivityLevel("moderate");
    setGoal("maintain");
    setResult(null);
    setAgeError(null);
    setWeightError(null);
    setHeightError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Cinsiyet
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("male")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  gender === "male"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Erkek
              </button>
              <button
                onClick={() => setGender("female")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  gender === "female"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Kadın
              </button>
            </div>
          </div>

          <Input
            label="Yaş"
            type="number"
            value={age}
            onChange={(e) => handleAgeChange(e.target.value)}
            onBlur={() => {
              const ageVal = parseFloat(age);
              if (!age || isNaN(ageVal) || ageVal < 1 || ageVal > 120) {
                setAgeError("Lütfen geçerli bir yaş girin");
              }
            }}
            placeholder="Yaşınızı girin (örn: 30)"
            error={ageError || undefined}
            helperText="Yaşınızı girin"
            step="1"
            min="1"
            max="120"
          />
          <Input
            label="Kilo (kg)"
            type="number"
            value={weight}
            onChange={(e) => handleWeightChange(e.target.value)}
            onBlur={() => {
              const weightVal = parseFloat(weight);
              if (!weight || isNaN(weightVal) || weightVal < 1 || weightVal > 500) {
                setWeightError("Lütfen geçerli bir kilo girin");
              }
            }}
            placeholder="Kilonuzu girin (örn: 70)"
            error={weightError || undefined}
            helperText="Kilonuzu kilogram cinsinden girin"
            step="0.1"
            min="1"
            max="500"
          />
          <Input
            label="Boy (cm)"
            type="number"
            value={height}
            onChange={(e) => handleHeightChange(e.target.value)}
            onBlur={() => {
              const heightVal = parseFloat(height);
              if (!height || isNaN(heightVal) || heightVal < 30 || heightVal > 300) {
                setHeightError("Lütfen geçerli bir boy girin");
              }
            }}
            placeholder="Boyunuzu girin (örn: 175)"
            error={heightError || undefined}
            helperText="Boyunuzu santimetre cinsinden girin"
            step="0.1"
            min="30"
            max="300"
          />
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Aktivite Düzeyi
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value as typeof activityLevel)}
              className="w-full px-4 py-2.5 border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] min-h-[44px]"
            >
              <option value="sedentary">Hareketsiz (egzersiz yok veya çok az)</option>
              <option value="light">Hafif (haftada 1-3 gün egzersiz)</option>
              <option value="moderate">Orta (haftada 3-5 gün egzersiz)</option>
              <option value="active">Aktif (haftada 6-7 gün egzersiz)</option>
              <option value="very-active">Çok aktif (yoğun egzersiz, fiziksel iş)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
              Hedef
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGoal("lose")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "lose"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Kilo Ver
              </button>
              <button
                onClick={() => setGoal("maintain")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "maintain"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Koru
              </button>
              <button
                onClick={() => setGoal("gain")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] flex-1 ${
                  goal === "gain"
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#f1f5f9] text-[#1e293b]"
                }`}
              >
                Kilo Al
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculate} className="flex-1">
              Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Sonuçlar
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b]">
                  BMH (Bazal Metabolizma Hızı)
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.bmr.toFixed(0)} kalori/gün
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  Dinlenme halinde yakılan kalori
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">
                  TDEE (Günlük Toplam Enerji Harcaması)
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.tdee.toFixed(0)} kalori/gün
                </p>
                <p className="text-xs text-[#64748b] mt-1">
                  Aktivite dahil yakılan toplam kalori
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm text-[#64748b]">
                  Günlük Kalori Hedefi ({goal === "lose" ? "Kilo Verme" : goal === "gain" ? "Kilo Alma" : "Koruma"})
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.dailyCalories.toFixed(0)} kalori/gün
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]/30">
                <p className="text-sm font-medium text-[#1e293b] mb-2">
                  Önerilen Makro Besinler (Günlük)
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-xs text-[#64748b]">Protein</p>
                    <p className="text-lg font-bold text-[#1e293b]">{result.protein.toFixed(0)}g</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-xs text-[#64748b]">Karbonhidrat</p>
                    <p className="text-lg font-bold text-[#1e293b]">{result.carbs.toFixed(0)}g</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-xs text-[#64748b]">Yağ</p>
                    <p className="text-lg font-bold text-[#1e293b]">{result.fat.toFixed(0)}g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Türkiye'ye özel bilgilendirme */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">🇹🇷 Türkiye Beslenme Rehberi</h4>
        <p className="text-sm text-blue-800 mb-2">
          T.C. Sağlık Bakanlığı Türkiye Beslenme Rehberi&apos;ne göre yetişkin bir 
          bireyin günlük enerji ihtiyacı 1800-2500 kalori arasındadır (yaş, cinsiyet 
          ve aktivite düzeyine bağlı olarak değişir).
        </p>
        <p className="text-xs text-blue-700">
          <strong>Öneriler:</strong> Günlük 5 porsiyon sebze-meyve, tam tahıllı 
          ürünler, yeterli protein (et, süt ürünleri, baklagiller) ve sağlıklı 
          yağlar (zeytinyağı) tüketilmelidir.
        </p>
      </div>
    </div>
  );
}
