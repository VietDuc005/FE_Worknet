"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      if (formData.name && formData.email && formData.password) {
        setIsLoading(false)
        window.location.href = "/dashboard"
      } else {
        setError("Please fill in all fields")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">{error}</div>}

      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <Checkbox
        checked={agreeTerms}
        onChange={(e) => setAgreeTerms(e.target.checked)}
        label={
          <span>
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
          </span>
        }
      />

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
        Create Account
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">Or sign up with</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full bg-transparent"
        onClick={() => {
          /* Mock Google OAuth */
        }}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.461,2.268,15.365,1.156,12.545,1.156 c-6.29,0-11.388,5.098-11.388,11.388c0,6.289,5.098,11.389,11.388,11.389c6.291,0,11.388-5.1,11.388-11.389 c0-0.747-0.092-1.476-0.25-2.185H12.545z"
          />
        </svg>
        Sign up with Google
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </form>
  )
}
