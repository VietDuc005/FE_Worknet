"use client"

import type React from "react"
import { useToast } from "@/components/ui/toast"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { showToast } = useToast();
  const router = useRouter();

  const handleGoogleLogin = () => {
    setIsLoading(true)
    // Mock Google OAuth
    setTimeout(() => {
      showToast("Google OAuth - Chuyển hướng đến:", "success");
      setIsLoading(false)
      router.push("/choose-plan");
    }, 500)
  }

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      showToast(`Đăng nhập với email: ${email}`, "success");
      setIsLoading(false)
      router.push("/choose-plan");
    }, 500)
  }

  return (
    <div className="w-full max-w-md">
      
 {/* Nút quay về trang chính */}
          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
          >
            ← Quay về Trang chủ
          </button>

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg mb-4">
          WN
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Chào mừng đến WorkNet</h1>
        <p className="text-muted-foreground">Đăng nhập để quản lý các dự án của bạn một cách hiệu quả</p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-border p-8">

         {/* Box Header */}
  <div className="text-center mb-6">
    <h2 className="text-xl font-semibold text-foreground">Đăng nhập tài khoản của bạn</h2>
  </div>

        {/* Email Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
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

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" disabled={isLoading} className="btn-primary w-full">
            {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
          </button>
        </form>

          {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-muted-foreground">Hoặc tiếp tục bằng google</span>
          </div>
        </div> 

          {/* Google OAuth Button */}
        <button onClick={handleGoogleLogin} disabled={isLoading} className="btn-google w-full mb-6">
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
          {isLoading ? "Đang kết nối..." : "Đăng nhập bằng Google"}
        </button>

        
        {/* Footer Links */}
        <div className="mt-6 space-y-2 text-center text-sm">
          <div>
            <Link href="/forgot-password" className="text-primary hover:underline">
              Quên mật khẩu của bạn?
            </Link>
          </div>
          <div className="text-muted-foreground">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <p className="text-center text-xs text-muted-foreground mt-6">
        Dữ liệu của bạn được mã hóa và an toàn. Chúng tôi không bao giờ chia sẻ thông tin của bạn.
      </p>
    </div>
  )
}
