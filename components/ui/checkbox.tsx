"use client";

import React from "react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      ref={ref}
      className={cn("w-4 h-4 rounded border-border border accent-primary cursor-pointer", className)}
      {...props}
    />
    {label && <label className="text-sm font-medium text-foreground cursor-pointer">{label}</label>}
  </div>
))

Checkbox.displayName = "Checkbox"
