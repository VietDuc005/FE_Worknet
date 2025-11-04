"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function AccountPage() {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all duration-300">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Cài đặt Tài khoản
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Quản lý bảo mật tài khoản và tùy chỉnh của bạn
          </p>
        </div>

        {/* Change Password */}
        <div className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Đổi Mật khẩu
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cập nhật mật khẩu của bạn để giữ tài khoản an toàn
            </p>
          </div>

          {/* Inputs */}
          {[
            { key: "current", label: "Mật khẩu hiện tại" },
            { key: "new", label: "Mật khẩu mới" },
            { key: "confirm", label: "Xác nhận mật khẩu" },
          ].map((field) => (
            <div className="relative" key={field.key}>
              <Input
                placeholder={field.label}
                type={showPasswords[field.key as keyof typeof showPasswords] ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    [field.key]: !prev[field.key as keyof typeof showPasswords],
                  }))
                }
                className="absolute right-4 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPasswords[field.key as keyof typeof showPasswords] ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button variant="secondary">Hủy</Button>
            <Button variant="primary">Cập nhật Mật khẩu</Button>
          </div>
        </div>

        {/* Two Factor Auth */}
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Xác thực Hai yếu tố
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thêm một lớp bảo mật bổ sung cho tài khoản của bạn
          </p>
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200">
            Xác thực hai yếu tố hiện đang <strong>bị vô hiệu hóa</strong>
          </div>
          <Button variant="primary" className="w-full">
            Bật 2FA
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
            Vùng Nguy hiểm
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Các hành động không thể đảo ngược
          </p>
          <Button
            variant="outline"
            className="w-full border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            Xóa Tài khoản
          </Button>
        </div>
      </div>
    </div>
  )
}
