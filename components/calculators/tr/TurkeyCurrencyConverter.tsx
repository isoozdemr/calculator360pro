"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const CURRENCIES = [
  { code: "TRY", name: "Türk Lirası" },
  { code: "USD", name: "ABD Doları" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "İngiliz Sterlini" },
  { code: "JPY", name: "Japon Yeni" },
  { code: "CAD", name: "Kanada Doları" },
  { code: "AUD", name: "Avustralya Doları" },
  { code: "CHF", name: "İsviçre Frangı" },
  { code: "CNY", name: "Çin Yuanı" },
  { code: "INR", name: "Hindistan Rupisi" },
  { code: "BRL", name: "Brezilya Reali" },
  { code: "MXN", name: "Meksika Pesosu" },
  { code: "KRW", name: "Güney Kore Wonu" },
  { code: "SGD", name: "Singapur Doları" },
  { code: "HKD", name: "Hong Kong Doları" },
  { code: "NZD", name: "Yeni Zelanda Doları" },
];

// Fallback exchange rates (approximate, should be updated regularly)
// Rates are relative to USD (as of 2026, approximate)
const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  TRY: 34.5, // 1 USD = ~34.5 TRY (approximate 2026 rate)
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110,
  CAD: 1.25,
  AUD: 1.35,
  CHF: 0.92,
  CNY: 6.45,
  INR: 74,
  BRL: 5.2,
  MXN: 20,
  KRW: 1200,
  SGD: 1.35,
  HKD: 7.8,
  NZD: 1.4,
};

export function TurkeyCurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("TRY");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [amountError, setAmountError] = useState<string | null>(null);

  // Fetch exchange rates (using a free API or fallback)
  useEffect(() => {
    const fetchRates = async () => {
      // In production, you would use a real API like exchangerate-api.com
      // For now, we'll use fallback rates
      // You can implement API call here if you have an API key
    };
    fetchRates();
  }, []);

  const handleAmountChange = useCallback((value: string) => {
    setAmount(value);
    if (amountError) setAmountError(null);
  }, [amountError]);

  const getExchangeRate = useCallback(async (from: string, to: string): Promise<number> => {
    if (from === to) return 1;

    // Use fallback rates (in production, fetch from API)
    const fromRate = FALLBACK_RATES[from] || 1;
    const toRate = FALLBACK_RATES[to] || 1;
    
    // Convert via USD
    if (from === "USD") {
      return toRate;
    }
    if (to === "USD") {
      return 1 / fromRate;
    }
    
    // Convert from -> USD -> to
    const usdValue = 1 / fromRate;
    return usdValue * toRate;
  }, []);

  const calculate = useCallback(async () => {
    if (!amount || amount.trim() === "") {
      setAmountError("Tutar gereklidir");
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setAmountError("Lütfen geçerli bir pozitif sayı girin");
      return;
    }

    setAmountError(null);
    setLoading(true);

    try {
      const rate = await getExchangeRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
      const converted = numAmount * rate;
      setResult(converted);
    } catch (error) {
      setAmountError("Döviz kuru alınırken hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency, getExchangeRate]);

  const reset = useCallback(() => {
    setAmount("");
    setResult(null);
    setExchangeRate(null);
    setAmountError(null);
  }, []);

  const swapCurrencies = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
    setExchangeRate(null);
  }, [fromCurrency, toCurrency]);

  const formatCurrency = (value: number, code: string) => {
    if (code === "TRY") {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Tutar"
            type="number"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            error={amountError || undefined}
            helperText="Çevrilecek tutarı girin"
            step="0.01"
            min="0.01"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
                Kaynak Para Birimi
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
              >
                {CURRENCIES.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
                Hedef Para Birimi
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent min-h-[44px]"
              >
                {CURRENCIES.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button
            onClick={swapCurrencies}
            variant="outline"
            className="w-full"
          >
            Para Birimlerini Değiştir
          </Button>

          <div className="flex gap-3">
            <Button 
              onClick={calculate} 
              className="flex-1"
              disabled={loading}
            >
              {loading ? "Çevriliyor..." : "Çevir"}
            </Button>
            <Button onClick={reset} variant="outline">
              Sıfırla
            </Button>
          </div>
        </div>

        {result !== null && exchangeRate !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Çeviri Sonucu
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b] mb-2">
                  {formatCurrency(parseFloat(amount), fromCurrency)} =
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {formatCurrency(result, toCurrency)}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]">
                <p className="text-xs text-[#64748b]">
                  Döviz Kuru: 1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}
                </p>
                <p className="text-xs text-[#64748b] mt-2">
                  Not: Döviz kurları yaklaşık değerlerdir ve değişebilir. Gerçek işlemler için 
                  bankanız veya finans kurumunuzdan güncel kurları doğrulayın. Kurlar dalgalanır 
                  ve komisyonlar içerebilir.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
