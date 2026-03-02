"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatNumber } from "@/lib/format/locale-format";

export function TurkeyBMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [categoryColor, setCategoryColor] = useState<string>("");
  
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const handleWeightChange = (value: string) => {
    setWeight(value);
    if (weightError) setWeightError(null);
  };

  const handleWeightBlur = () => {
    const weightVal = parseFloat(weight);
    if (!weight) {
      setWeightError("Kilo gereklidir");
    } else if (isNaN(weightVal) || weightVal < 1 || weightVal > 500) {
      setWeightError("Lütfen 1-500 kg arasında geçerli bir kilo girin");
    }
  };

  const handleHeightChange = (value: string) => {
    setHeight(value);
    if (heightError) setHeightError(null);
  };

  const handleHeightBlur = () => {
    const heightVal = parseFloat(height);
    if (!height) {
      setHeightError("Boy gereklidir");
    } else if (isNaN(heightVal) || heightVal < 30 || heightVal > 300) {
      setHeightError("Lütfen 30-300 cm arasında geçerli bir boy girin");
    }
  };

  const calculateBMI = () => {
    // Validate fields
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);
    
    let hasError = false;
    
    if (!weight || isNaN(weightVal) || weightVal < 1 || weightVal > 500) {
      setWeightError("Lütfen 1-500 kg arasında geçerli bir kilo girin");
      hasError = true;
    }
    
    if (!height || isNaN(heightVal) || heightVal < 30 || heightVal > 300) {
      setHeightError("Lütfen 30-300 cm arasında geçerli bir boy girin");
      hasError = true;
    }

    if (hasError) return;

    const heightM = heightVal / 100;
    const bmiValue = weightVal / (heightM * heightM);
    setBmi(bmiValue);

    // Türkiye Sağlık Bakanlığı BMI kategorileri (WHO standartları)
    if (bmiValue < 18.5) {
      setCategory("Zayıf");
      setCategoryColor("text-yellow-600");
    } else if (bmiValue < 25) {
      setCategory("Normal Kilolu");
      setCategoryColor("text-green-600");
    } else if (bmiValue < 30) {
      setCategory("Fazla Kilolu");
      setCategoryColor("text-orange-600");
    } else if (bmiValue < 35) {
      setCategory("1. Derece Obez");
      setCategoryColor("text-red-500");
    } else if (bmiValue < 40) {
      setCategory("2. Derece Obez");
      setCategoryColor("text-red-600");
    } else {
      setCategory("3. Derece (Morbid) Obez");
      setCategoryColor("text-red-700");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setCategoryColor("");
    setWeightError(null);
    setHeightError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Kilo (kg)"
            type="number"
            value={weight}
            onChange={(e) => handleWeightChange(e.target.value)}
            onBlur={handleWeightBlur}
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
            onBlur={handleHeightBlur}
            placeholder="Boyunuzu girin (örn: 175)"
            error={heightError || undefined}
            helperText="Boyunuzu santimetre cinsinden girin"
            step="0.1"
            min="30"
            max="300"
          />

          <div className="flex gap-3">
            <Button onClick={calculateBMI} className="flex-1">
              BMI Hesapla
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {bmi !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Vücut Kitle İndeksiniz (BMI)
            </h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono mb-2">
              {formatNumber(bmi, "tr", { maxFractionDigits: 1 })}
            </p>
            <p className={`text-lg font-semibold ${categoryColor}`}>
              {category}
            </p>
            <div className="mt-4 pt-4 border-t border-[#10b981]/30">
              <p className="text-sm font-medium text-[#1e293b] mb-2">
                BMI Kategorileri (Dünya Sağlık Örgütü):
              </p>
              <ul className="text-xs text-[#64748b] space-y-1">
                <li><span className="text-yellow-600 font-medium">Zayıf:</span> &lt; 18.5</li>
                <li><span className="text-green-600 font-medium">Normal kilolu:</span> 18.5 - 24.9</li>
                <li><span className="text-orange-600 font-medium">Fazla kilolu:</span> 25 - 29.9</li>
                <li><span className="text-red-500 font-medium">1. Derece obez:</span> 30 - 34.9</li>
                <li><span className="text-red-600 font-medium">2. Derece obez:</span> 35 - 39.9</li>
                <li><span className="text-red-700 font-medium">3. Derece (Morbid) obez:</span> ≥ 40</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Türkiye'ye özel bilgilendirme */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">🇹🇷 Türkiye&apos;de Obezite</h4>
        <p className="text-sm text-blue-800 mb-2">
          Türkiye Sağlık Bakanlığı verilerine göre, Türkiye&apos;de yetişkin nüfusunun 
          yaklaşık %30&apos;u obez kategorisindedir. Bu oran Avrupa ortalamasının üzerindedir.
        </p>
        <p className="text-xs text-blue-700">
          <strong>Önemli:</strong> BMI tek başına sağlık durumunuzu belirlemez. Bel çevresi 
          ölçümü, vücut yağ oranı ve diğer faktörler de değerlendirilmelidir. Sağlık 
          durumunuz hakkında bir uzman hekime danışmanızı öneririz.
        </p>
      </div>
    </div>
  );
}
