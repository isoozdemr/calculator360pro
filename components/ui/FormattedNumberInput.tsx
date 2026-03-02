"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";
import {
  type FormatLocale,
  parseLocaleNumber,
  formatNumber,
  getNumberPlaceholder,
  getCurrencyPlaceholder,
  getPercentPlaceholder,
} from "@/lib/format/locale-format";

type FormatType = "number" | "currency" | "percent";

interface FormattedNumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
  label?: string;
  error?: string;
  helperText?: string;
  value: string;
  onChange: (value: string) => void;
  locale: FormatLocale;
  formatAs?: FormatType;
  /** Optional: format displayed value on blur (default true) */
  formatOnBlur?: boolean;
  minFractionDigits?: number;
  maxFractionDigits?: number;
}

export function FormattedNumberInput({
  label,
  error,
  helperText,
  value,
  onChange,
  locale,
  formatAs = "number",
  formatOnBlur = true,
  minFractionDigits,
  maxFractionDigits,
  placeholder,
  className,
  id,
  onBlur,
  ...props
}: FormattedNumberInputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (formatOnBlur && value.trim()) {
      const num = parseLocaleNumber(value, locale);
      if (num !== null && !isNaN(num)) {
        const opts = { minFractionDigits, maxFractionDigits: maxFractionDigits ?? (formatAs === "currency" ? 2 : 2) };
        const formatted =
          formatAs === "percent"
            ? formatPercentDisplay(num, locale, maxFractionDigits)
            : formatNumber(num, locale, opts);
        onChange(formatted);
      }
    }
    onBlur?.(e);
  };

  const displayPlaceholder =
    placeholder ??
    (formatAs === "currency"
      ? getCurrencyPlaceholder(locale)
      : formatAs === "percent"
        ? getPercentPlaceholder(locale)
        : getNumberPlaceholder(locale));

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-[#1e293b] mb-1.5">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        placeholder={displayPlaceholder}
        className={cn(
          "w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg",
          "bg-white text-[#1e293b]",
          "focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "min-h-[44px]",
          error && "border-[#ef4444] focus:ring-[#ef4444]",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : helperId}
        {...props}
      />
      <div className="min-h-[20px] mt-1.5">
        {helperText && !error && (
          <p id={helperId} className="text-[11px] text-[#64748b] leading-tight">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-[11px] text-[#ef4444] leading-tight whitespace-nowrap overflow-hidden text-ellipsis" role="alert">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

function formatPercentDisplay(value: number, locale: FormatLocale, maxFractionDigits?: number): string {
  const loc = locale === "tr" ? "tr-TR" : "en-US";
  const opts = { minimumFractionDigits: 1, maximumFractionDigits: maxFractionDigits ?? 2 };
  return locale === "tr" ? `%${new Intl.NumberFormat(loc, opts).format(value)}` : `${new Intl.NumberFormat(loc, opts).format(value)}%`;
}
