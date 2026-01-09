"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string; // Additional guidance text below input
}

export function Input({ label, error, helperText, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[#1e293b] dark:text-[#f1f5f9] mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-2.5 text-base border-2 border-[#e2e8f0] rounded-lg",
          "bg-white dark:bg-[#1e293b] text-[#1e293b] dark:text-[#f1f5f9]",
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
      {/* Reserve space for error/helper text to prevent CLS - always render container with min-height */}
      <div className="min-h-[20px] mt-1.5">
        {helperText && !error && (
          <p id={helperId} className="text-[11px] text-[#64748b] dark:text-[#94a3b8] leading-tight">
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

