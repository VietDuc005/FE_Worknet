import React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, error, label, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-foreground mb-2">{label}</label>}
      <input
        className={cn(
          "w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-all",
          error && "border-destructive focus:ring-destructive/20",
          className,
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"
