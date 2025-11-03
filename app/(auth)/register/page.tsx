"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleGoogleSignUp = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert("Google OAuth - Chuyển hướng đến: https://accounts.google.com/o/oauth2/v2/auth")
      setIsLoading(false)
    }, 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      alert(`Đang đăng ký: ${formData.email}`)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg mb-4">
          WN
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tạo Tài khoản</h1>
        <p className="text-muted-foreground">Tham gia hàng ngàn nhóm sử dụng WorkNet</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
        <button onClick={handleGoogleSignUp} disabled={isLoading} className="btn-google w-full mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {isLoading ? "Đang kết nối..." : "Đăng ký bằng Google"}
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-muted-foreground">Hoặc đăng ký bằng email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Họ và tên</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Địa chỉ Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Xác nhận Mật khẩu</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-border" required />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              Tôi đồng ý với{" "}
              <Link href="#" className="text-primary hover:underline">
                Điều khoản Dịch vụ
              </Link>{" "}
              và{" "}
              <Link href="#" className="text-primary hover:underline">
                Chính sách Bảo mật
              </Link>
            </label>
          </div>

          <button type="submit" disabled={isLoading} className="btn-primary w-full">
            {isLoading ? "Đang tạo tài khoản..." : "Tạo Tài khoản"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Đã có tài khoản?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
