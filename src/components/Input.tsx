import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const baseClassName =
      "border-foreground/20 focus:ring-primary bg-foreground text-text-fg placeholder:text-text-fg/60 flex-1 rounded-xl border px-4 py-3 text-base font-medium transition focus:ring-2 focus:outline-none";
    return (
      <input ref={ref} className={cn(baseClassName, className)} {...props} />
    );
  },
);
