"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg mb-4">
          WN
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Đặt lại Mật khẩu</h1>
        <p className="text-muted-foreground">Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Địa chỉ Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
            </div>

            <button type="submit" disabled={isLoading} className="btn-primary w-full">
              {isLoading ? "Đang gửi..." : "Gửi Liên kết Đặt lại"}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Kiểm tra email của bạn</h2>
              <p className="text-muted-foreground text-sm">
                Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến <strong>{email}</strong>
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Liên kết sẽ hết hạn trong 24 giờ. Nếu bạn không thấy email, hãy kiểm tra thư mục spam.
            </p>
          </div>
        )}

        <div className="mt-6">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-primary hover:underline font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
