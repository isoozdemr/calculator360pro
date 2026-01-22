"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "KRW", name: "South Korean Won" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
];

// Fallback exchange rates (approximate, should be updated regularly)
const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
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

export function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
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
      setAmountError("Amount is required");
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setAmountError("Please enter a valid positive number");
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
      setAmountError("Error fetching exchange rate. Please try again.");
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

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <Input
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            error={amountError || undefined}
            helperText="Enter the amount to convert"
            step="0.01"
            min="0.01"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1.5">
                From
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
                To
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
            Swap Currencies
          </Button>

          <div className="flex gap-3">
            <Button 
              onClick={calculate} 
              className="flex-1"
              disabled={loading}
            >
              {loading ? "Converting..." : "Convert"}
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {result !== null && exchangeRate !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#1e293b]">
              Conversion Result
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#64748b] mb-2">
                  {amount} {fromCurrency} =
                </p>
                <p className="text-3xl font-bold text-[#10b981] font-mono">
                  {result.toLocaleString("en-US", { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })} {toCurrency}
                </p>
              </div>
              <div className="pt-3 border-t border-[#10b981]">
                <p className="text-xs text-[#64748b]">
                  Exchange Rate: 1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}
                </p>
                <p className="text-xs text-[#64748b] mt-2">
                  Note: Exchange rates are approximate and may vary. For actual transactions, 
                  verify rates with your bank or financial institution as rates fluctuate 
                  and may include fees.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

