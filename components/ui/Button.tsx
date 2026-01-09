import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary:
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] active:bg-[#1e40af]",
    secondary:
      "bg-[#10b981] text-white hover:bg-[#059669] active:bg-[#047857]",
    outline:
      "border-2 border-[#e2e8f0] text-[#1e293b] hover:bg-[#f1f5f9] dark:border-[#334155] dark:text-[#f1f5f9] dark:hover:bg-[#1e293b]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm min-h-[36px]",
    md: "px-4 py-2 text-base min-h-[44px]",
    lg: "px-6 py-3 text-lg min-h-[52px]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

