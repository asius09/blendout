"use client";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type btnVariant = "filled" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: btnVariant;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  className = "",
  variant = "filled",
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  const variantClassNames: Record<btnVariant, string> = {
    filled: "bg-primary text-text-bg hover:bg-primary/90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-text-bg",
  };
  const baseClassName =
    "rounded-xl text-lg shadow-lg font-bold transition-all duration-150 hover:scale-102 hover:shadow-xl focus-ring-4 focus:outline-none focus:ring-primary cursor-pointer w-full py-2 md:py-3 disable:opacity-50";
  return (
    <button
      type={type}
      className={cn(baseClassName, className, variantClassNames[variant])}
      {...props}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;
