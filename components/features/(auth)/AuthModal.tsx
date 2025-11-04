"use client"

import { useState } from "react"
import { X, Mail, User, Lock } from "lucide-react"
import InputField from "./InputField"
import PasswordField from "./PasswordField"

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    newPassword: "",
    resetCode: "",
  })
  const [isCodeSent, setIsCodeSent] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      if (tab === "login") alert(`Đăng nhập thành công: ${form.email}`)
      else if (tab === "register") alert(`Tạo tài khoản: ${form.name}`)
      else if (tab === "forgot") {
        if (!isCodeSent) {
          setIsCodeSent(true)
          alert("Mã xác minh đã gửi đến email của bạn.")
        } else {
          alert("Mật khẩu mới đã được đặt lại.")
          setTab("login")
        }
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [field]: e.target.value })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all"
      >
        {/* Đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 text-gray-500"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-center py-6 px-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-blue-600 font-bold text-lg shadow">
            WN
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-3">
            {tab === "login"
              ? "Chào mừng trở lại"
              : tab === "register"
              ? "Tạo tài khoản mới"
              : "Quên mật khẩu?"}
          </h2>
          <p className="text-xs text-blue-100 mt-1">
            {tab === "login"
              ? "Đăng nhập để tiếp tục làm việc"
              : tab === "register"
              ? "Nhanh chóng & miễn phí chỉ 30s"
              : isCodeSent
              ? "Nhập mã xác minh và mật khẩu mới"
              : "Nhập email để đặt lại mật khẩu"}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white -mt-4 mx-3 rounded-xl shadow-md p-5">
          {tab !== "forgot" && (
            <div className="flex gap-2 mb-5 bg-gray-100 rounded-lg p-1">
              {["login", "register"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t as "login" | "register")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
                    tab === t
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t === "login" ? "Đăng nhập" : "Đăng ký"}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {tab === "register" && (
              <InputField
                label="Họ và tên"
                icon={<User className="w-4 h-4 text-gray-400" />}
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Nguyễn Văn A"
                required
              />
            )}

            <InputField
              label="Email"
              icon={<Mail className="w-4 h-4 text-gray-400" />}
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              required
            />

            {(tab === "login" || tab === "register") && (
              <PasswordField
                label="Mật khẩu"
                value={form.password}
                show={showPassword}
                toggle={() => setShowPassword(!showPassword)}
                onChange={handleChange("password")}
              />
            )}

            {tab === "register" && (
              <PasswordField
                label="Xác nhận mật khẩu"
                value={form.confirmPassword}
                show={showConfirm}
                toggle={() => setShowConfirm(!showConfirm)}
                onChange={handleChange("confirmPassword")}
              />
            )}

            {tab === "forgot" && (
              <>
                {isCodeSent ? (
                  <>
                    <InputField
                      label="Mã xác minh"
                      icon={<Lock className="w-4 h-4 text-gray-400" />}
                      type="text"
                      value={form.resetCode}
                      onChange={handleChange("resetCode")}
                      placeholder="Nhập mã gồm 6 ký tự"
                      required
                    />
                    <PasswordField
                      label="Mật khẩu mới"
                      value={form.newPassword}
                      show={showPassword}
                      toggle={() => setShowPassword(!showPassword)}
                      onChange={handleChange("newPassword")}
                    />
                  </>
                ) : null}
              </>
            )}

            {tab === "login" && (
              <div className="flex justify-between text-xs text-gray-500">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-500" />
                  Ghi nhớ
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setTab("forgot")
                    setIsCodeSent(false)
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Quên mật khẩu?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
            >
              {isLoading ? "Đang xử lý..." : getButtonLabel(tab, isCodeSent)}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function getButtonLabel(tab: string, codeSent: boolean) {
  switch (tab) {
    case "login":
      return "Đăng Nhập"
    case "register":
      return "Tạo Tài Khoản"
    case "forgot":
      return codeSent ? "Đặt lại mật khẩu" : "Gửi mã xác minh"
    default:
      return "Tiếp tục"
  }
}
