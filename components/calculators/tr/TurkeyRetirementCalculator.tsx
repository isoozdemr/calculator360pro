"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getRetirementAge,
  SGK_RETIREMENT_AGE_TABLE,
  SGK_PREMIUM_DAY_REQUIREMENTS,
  EYT_RULES,
  BES_2026,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface RetirementFormData {
  birthYear: number;
  birthMonth: number;
  gender: "male" | "female";
  insuranceStartYear: number;
  insuranceStartMonth: number;
  currentPremiumDays: number;
  monthlyContribution: number;
  besEnabled: boolean;
}

interface RetirementResult {
  retirementAge: number;
  retirementYear: number;
  retirementMonth: number;
  yearsUntilRetirement: number;
  currentAge: number;
  requiredPremiumDays: number;
  remainingPremiumDays: number;
  isEYTEligible: boolean;
  besProjection?: {
    personalContribution: number;
    stateContribution: number;
    totalAtRetirement: number;
  };
}

export function TurkeyRetirementCalculator() {
  const [result, setResult] = useState<RetirementResult | null>(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RetirementFormData>({
    defaultValues: {
      birthYear: 1990,
      birthMonth: 1,
      gender: "male",
      insuranceStartYear: 2015,
      insuranceStartMonth: 1,
      currentPremiumDays: 3000,
      monthlyContribution: 1000,
      besEnabled: false,
    },
  });

  const besEnabled = watch("besEnabled");

  const onSubmit = (data: RetirementFormData) => {
    const currentYear = 2026;
    const currentMonth = 1;

    // Yaş hesaplama
    const currentAge = currentYear - data.birthYear;
    
    // Emeklilik yaşı
    const retirementAge = getRetirementAge(data.birthYear, data.gender);
    
    // Emeklilik yılı
    const retirementYear = data.birthYear + retirementAge;
    const retirementMonth = data.birthMonth;
    
    // Emekliliğe kalan yıl
    const yearsUntilRetirement = Math.max(0, retirementYear - currentYear);
    
    // Prim gün şartı
    const requiredPremiumDays = SGK_PREMIUM_DAY_REQUIREMENTS.normal.minDays;
    const remainingPremiumDays = Math.max(0, requiredPremiumDays - data.currentPremiumDays);
    
    // EYT kontrolü
    const insuranceStartDate = new Date(data.insuranceStartYear, data.insuranceStartMonth - 1);
    const eytCutoffDate = new Date(1999, 8, 8); // 08.09.1999
    const isEYTEligible = insuranceStartDate < eytCutoffDate;

    // BES projeksiyonu
    let besProjection;
    if (data.besEnabled && data.monthlyContribution > 0) {
      const yearsToRetirement = Math.max(0, (BES_2026.minimumAge - currentAge));
      const totalMonths = yearsToRetirement * 12;
      const personalContribution = data.monthlyContribution * totalMonths;
      const maxStateContribution = yearsToRetirement * BES_2026.maxStateContributionPerYear;
      const calculatedStateContribution = personalContribution * (BES_2026.stateContribution / 100);
      const stateContribution = Math.min(calculatedStateContribution, maxStateContribution);
      
      // Basit bileşik getiri (yıllık %5 varsayım)
      const annualReturn = 0.05;
      let totalAtRetirement = 0;
      for (let year = 0; year < yearsToRetirement; year++) {
        totalAtRetirement = (totalAtRetirement + data.monthlyContribution * 12 * (1 + BES_2026.stateContribution / 100)) * (1 + annualReturn);
      }

      besProjection = {
        personalContribution,
        stateContribution,
        totalAtRetirement,
      };
    }

    setResult({
      retirementAge,
      retirementYear,
      retirementMonth,
      yearsUntilRetirement,
      currentAge,
      requiredPremiumDays,
      remainingPremiumDays,
      isEYTEligible,
      besProjection,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - 70 + i);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      {/* Güncelleme Bilgisi */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay} | 
          <strong> Kaynak:</strong> {DATA_VERSION.sources.sgk}
        </p>
      </div>

      {/* EYT Bilgisi */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">
          EYT (Emeklilikte Yaşa Takılanlar) Bilgisi
        </h4>
        <p className="text-sm text-yellow-700">
          {EYT_RULES.description}
        </p>
        <p className="text-sm text-yellow-700 mt-1">
          <strong>Yürürlük Tarihi:</strong> {EYT_RULES.effectiveDate}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Doğum Yılı
            </label>
            <select
              {...register("birthYear", { valueAsNumber: true })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Doğum Ayı
            </label>
            <select
              {...register("birthMonth", { valueAsNumber: true })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            >
              {["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"].map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Cinsiyet
            </label>
            <select
              {...register("gender")}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            >
              <option value="male">Erkek</option>
              <option value="female">Kadın</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Sigorta Başlangıç Yılı
            </label>
            <select
              {...register("insuranceStartYear", { valueAsNumber: true })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Mevcut Prim Gün Sayısı
            </label>
            <input
              type="number"
              {...register("currentPremiumDays", {
                required: "Prim gün sayısı gereklidir",
                min: { value: 0, message: "0'dan küçük olamaz" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 3000"
            />
            {errors.currentPremiumDays && (
              <p className="text-red-500 text-sm mt-1">{errors.currentPremiumDays.message}</p>
            )}
          </div>
        </div>

        {/* BES Bölümü */}
        <div className="border-t border-[#e2e8f0] pt-6">
          <div className="flex items-center gap-3 mb-4">
            <input
              type="checkbox"
              {...register("besEnabled")}
              id="besEnabled"
              className="w-5 h-5 text-[#2563eb] border-[#e2e8f0] rounded focus:ring-[#2563eb]"
            />
            <label htmlFor="besEnabled" className="text-sm font-medium text-[#1e293b]">
              BES (Bireysel Emeklilik) Hesaplaması Ekle
            </label>
          </div>

          {besEnabled && (
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1e293b] mb-2">
                    Aylık BES Katkısı (TL)
                  </label>
                  <input
                    type="number"
                    {...register("monthlyContribution", { valueAsNumber: true })}
                    className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="Örn: 1000"
                  />
                </div>
                <div className="flex items-end">
                  <div className="text-sm text-[#64748b]">
                    <p>Devlet Katkısı: %{BES_2026.stateContribution}</p>
                    <p>Yıllık Maks: {formatCurrency(BES_2026.maxStateContributionPerYear)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Emeklilik Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            Emeklilik Hesaplama Sonuçları
          </h3>

          {/* EYT Durumu */}
          {result.isEYTEligible && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-green-800">EYT Kapsamındasınız!</span>
              </div>
              <p className="text-sm text-green-700 mt-2">
                08.09.1999 öncesi sigorta girişiniz olduğu için yaş şartı aranmadan, sadece prim gün şartını tamamladığınızda emekli olabilirsiniz.
              </p>
            </div>
          )}

          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600">Emeklilik Yaşı</p>
              <p className="text-3xl font-bold text-blue-700">
                {result.retirementAge}
              </p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Emeklilik Tarihi</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {result.retirementMonth}/{result.retirementYear}
              </p>
            </div>
            <div className={`p-4 rounded-lg border ${
              result.yearsUntilRetirement <= 5 
                ? "bg-green-50 border-green-200" 
                : "bg-yellow-50 border-yellow-200"
            }`}>
              <p className="text-sm text-[#64748b]">Emekliliğe Kalan</p>
              <p className={`text-2xl font-bold ${
                result.yearsUntilRetirement <= 5 
                  ? "text-green-700" 
                  : "text-yellow-700"
              }`}>
                {result.yearsUntilRetirement} Yıl
              </p>
            </div>
          </div>

          {/* Prim Gün Durumu */}
          <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
            <h4 className="font-semibold text-[#1e293b] mb-4">Prim Gün Şartı</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-[#64748b]">Gerekli Prim Günü</p>
                <p className="text-xl font-bold text-[#1e293b]">
                  {result.requiredPremiumDays.toLocaleString("tr-TR")} gün
                </p>
                <p className="text-xs text-[#64748b]">
                  ({SGK_PREMIUM_DAY_REQUIREMENTS.normal.minYears} yıl)
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Mevcut Prim Günü</p>
                <p className="text-xl font-bold text-[#1e293b]">
                  {(result.requiredPremiumDays - result.remainingPremiumDays).toLocaleString("tr-TR")} gün
                </p>
              </div>
              <div>
                <p className="text-sm text-[#64748b]">Kalan Prim Günü</p>
                <p className={`text-xl font-bold ${
                  result.remainingPremiumDays === 0 ? "text-green-700" : "text-red-700"
                }`}>
                  {result.remainingPremiumDays === 0 
                    ? "Tamamlandı ✓" 
                    : `${result.remainingPremiumDays.toLocaleString("tr-TR")} gün`
                  }
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-blue-600 h-4 rounded-full transition-all"
                  style={{ 
                    width: `${Math.min(100, ((result.requiredPremiumDays - result.remainingPremiumDays) / result.requiredPremiumDays) * 100)}%` 
                  }}
                />
              </div>
              <p className="text-xs text-[#64748b] mt-1 text-right">
                %{(((result.requiredPremiumDays - result.remainingPremiumDays) / result.requiredPremiumDays) * 100).toFixed(1)} tamamlandı
              </p>
            </div>
          </div>

          {/* BES Sonuçları */}
          {result.besProjection && (
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-4">BES Projeksiyonu (Tahmini)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-purple-600">Kişisel Katkı</p>
                  <p className="text-xl font-bold text-purple-700">
                    {formatCurrency(result.besProjection.personalContribution)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Devlet Katkısı</p>
                  <p className="text-xl font-bold text-purple-700">
                    {formatCurrency(result.besProjection.stateContribution)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Tahmini Toplam (56 yaş)</p>
                  <p className="text-xl font-bold text-purple-700">
                    {formatCurrency(result.besProjection.totalAtRetirement)}
                  </p>
                </div>
              </div>
              <p className="text-xs text-purple-600 mt-2">
                * Yıllık %5 getiri varsayımıyla hesaplanmıştır. Gerçek getiri değişebilir.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Emeklilik Yaşı Tablosu */}
      <div className="mt-8 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
        <h4 className="font-semibold text-[#1e293b] mb-4">
          SGK Emeklilik Yaşı Tablosu (4/a - SSK)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="text-left py-2 px-3 text-[#64748b]">Doğum Yılı</th>
                <th className="text-center py-2 px-3 text-[#64748b]">Erkek</th>
                <th className="text-center py-2 px-3 text-[#64748b]">Kadın</th>
              </tr>
            </thead>
            <tbody>
              {SGK_RETIREMENT_AGE_TABLE.map((row, index) => (
                <tr key={index} className="border-b border-[#e2e8f0] last:border-0">
                  <td className="py-2 px-3 text-[#1e293b]">
                    {row.birthYearStart} - {row.birthYearEnd > 2050 ? "sonrası" : row.birthYearEnd}
                  </td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-600">
                    {row.retirementAgeMale}
                  </td>
                  <td className="py-2 px-3 text-center font-semibold text-pink-600">
                    {row.retirementAgeFemale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BES Bilgisi */}
      <div className="mt-6 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
        <h4 className="font-semibold text-[#1e293b] mb-4">
          BES (Bireysel Emeklilik Sistemi) 2026 Bilgileri
        </h4>
        <ul className="text-sm text-[#64748b] space-y-2">
          <li>• Devlet Katkısı: %{BES_2026.stateContribution}</li>
          <li>• Yıllık Maksimum Devlet Katkısı: {formatCurrency(BES_2026.maxStateContributionPerYear)}</li>
          <li>• BES Emeklilik Yaşı: {BES_2026.minimumAge}</li>
          <li>• Minimum Sistemde Kalma Süresi: {BES_2026.minimumYears} yıl</li>
          <li>• Devlet Katkısı Hak Ediş: 3 yıl %{BES_2026.vestingRates.year3}, 6 yıl %{BES_2026.vestingRates.year6}, 10 yıl %{BES_2026.vestingRates.year10}, Emeklilik %{BES_2026.vestingRates.retirement}</li>
        </ul>
      </div>
    </div>
  );
}
