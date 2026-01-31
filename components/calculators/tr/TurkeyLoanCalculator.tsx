"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateLoanCost,
  CONSUMER_LOAN_FEES_2026,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface LoanFormData {
  loanAmount: number;
  interestRate: number;
  termMonths: number;
  loanType: "personal" | "vehicle" | "education";
}

interface LoanResult {
  loanAmount: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  kkdfAmount: number;
  bsmvAmount: number;
  effectiveRate: number;
  amortizationSchedule: {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

export function TurkeyLoanCalculator() {
  const [result, setResult] = useState<LoanResult | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoanFormData>({
    defaultValues: {
      termMonths: 36,
      interestRate: 3.5,
      loanType: "personal",
    },
  });

  const loanType = watch("loanType");

  const onSubmit = (data: LoanFormData) => {
    const loanResult = calculateLoanCost(
      data.loanAmount,
      data.interestRate,
      data.termMonths,
      data.loanType === "personal" ? "consumer" : data.loanType
    );

    // Amortisman tablosu oluşturma
    const monthlyRate = loanResult.effectiveRate / 100 / 12;
    let balance = data.loanAmount;
    const amortizationSchedule: LoanResult["amortizationSchedule"] = [];

    for (let month = 1; month <= data.termMonths; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = loanResult.monthlyPayment - interestPayment;
      balance -= principalPayment;

      amortizationSchedule.push({
        month,
        payment: loanResult.monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }

    setResult({
      loanAmount: data.loanAmount,
      monthlyPayment: loanResult.monthlyPayment,
      totalPayment: loanResult.totalPayment,
      totalInterest: loanResult.totalInterest,
      kkdfAmount: loanResult.kkdfAmount,
      bsmvAmount: loanResult.bsmvAmount,
      effectiveRate: loanResult.effectiveRate,
      amortizationSchedule,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getLoanTypeFees = (type: string) => {
    if (type === "education") {
      return CONSUMER_LOAN_FEES_2026.byType.education;
    }
    return CONSUMER_LOAN_FEES_2026.byType.personal;
  };

  const currentFees = getLoanTypeFees(loanType);

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      {/* Güncelleme Bilgisi */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay} | 
          <strong> Kaynak:</strong> {DATA_VERSION.sources.banking}
        </p>
      </div>

      {/* Kredi Vergileri Bilgisi */}
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <h4 className="font-semibold text-red-800 mb-2">
          Tüketici Kredisi Ek Maliyetleri (2026)
        </h4>
        <ul className="text-sm text-red-700 space-y-1">
          <li>• KKDF (Kaynak Kullanımı Destekleme Fonu): %{currentFees.kkdf}</li>
          <li>• BSMV (Banka ve Sigorta Muameleleri Vergisi): %{currentFees.bsmv}</li>
          <li>• Toplam Ek Maliyet: %{currentFees.kkdf + currentFees.bsmv} (faiz üzerine)</li>
        </ul>
        {loanType === "education" && (
          <p className="mt-2 text-green-700 text-sm">
            ✓ Eğitim kredileri KKDF&apos;den muaftır!
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Kredi Türü
          </label>
          <select
            {...register("loanType")}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
          >
            <option value="personal">İhtiyaç Kredisi</option>
            <option value="vehicle">Taşıt Kredisi</option>
            <option value="education">Eğitim Kredisi</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Kredi Tutarı (TL)
            </label>
            <input
              type="number"
              {...register("loanAmount", {
                required: "Kredi tutarı gereklidir",
                min: { value: 1000, message: "Minimum 1.000 TL olmalıdır" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 100000"
            />
            {errors.loanAmount && (
              <p className="text-red-500 text-sm mt-1">{errors.loanAmount.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">
              Aylık Faiz Oranı (%)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("interestRate", {
                required: "Faiz oranı gereklidir",
                min: { value: 0.1, message: "Minimum %0.1 olmalıdır" },
              })}
              className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
              placeholder="Örn: 3.5"
            />
            {errors.interestRate && (
              <p className="text-red-500 text-sm mt-1">{errors.interestRate.message}</p>
            )}
            <p className="text-xs text-[#64748b] mt-1">
              Yıllık faiz oranı: %{((watch("interestRate") || 0) * 12).toFixed(2)}
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1e293b] mb-2">
            Vade (Ay)
          </label>
          <select
            {...register("termMonths", { valueAsNumber: true })}
            className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none transition-colors"
          >
            {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 72, 84, 96].map((month) => (
              <option key={month} value={month}>
                {month} Ay ({(month / 12).toFixed(1)} Yıl)
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Kredi Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            Kredi Hesaplama Sonuçları
          </h3>

          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Kredi Tutarı</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {formatCurrency(result.loanAmount)}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600">Aylık Taksit</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(result.monthlyPayment)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-600">Efektif Faiz</p>
              <p className="text-2xl font-bold text-green-700">
                %{result.effectiveRate.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Maliyet Detayları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600">Toplam Faiz</p>
              <p className="text-xl font-bold text-red-700">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Toplam Geri Ödeme</p>
              <p className="text-xl font-bold text-[#1e293b]">
                {formatCurrency(result.totalPayment)}
              </p>
            </div>
          </div>

          {/* KKDF ve BSMV Detayları */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-4">Vergi Detayları</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-yellow-600">KKDF Tutarı</p>
                <p className="font-semibold text-yellow-700">
                  {formatCurrency(result.kkdfAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-yellow-600">BSMV Tutarı</p>
                <p className="font-semibold text-yellow-700">
                  {formatCurrency(result.bsmvAmount)}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-yellow-200">
              <div className="flex justify-between items-center">
                <span className="text-yellow-700 font-semibold">Toplam Vergi:</span>
                <span className="text-xl font-bold text-yellow-800">
                  {formatCurrency(result.kkdfAmount + result.bsmvAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* Ödeme Planı */}
          <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-[#1e293b]">Ödeme Planı</h4>
              <button
                onClick={() => setShowFullSchedule(!showFullSchedule)}
                className="text-sm text-[#2563eb] hover:underline"
              >
                {showFullSchedule ? "Özet Göster" : "Tamamını Göster"}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left py-2 px-3 text-[#64748b]">Ay</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Taksit</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Anapara</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Faiz</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Kalan Borç</th>
                  </tr>
                </thead>
                <tbody>
                  {(showFullSchedule 
                    ? result.amortizationSchedule 
                    : result.amortizationSchedule.slice(0, 12)
                  ).map((row) => (
                    <tr key={row.month} className="border-b border-[#e2e8f0] last:border-0">
                      <td className="py-2 px-3 text-[#1e293b]">{row.month}</td>
                      <td className="py-2 px-3 text-right text-[#1e293b]">
                        {formatCurrency(row.payment)}
                      </td>
                      <td className="py-2 px-3 text-right text-green-600">
                        {formatCurrency(row.principal)}
                      </td>
                      <td className="py-2 px-3 text-right text-red-600">
                        {formatCurrency(row.interest)}
                      </td>
                      <td className="py-2 px-3 text-right text-[#1e293b]">
                        {formatCurrency(row.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
