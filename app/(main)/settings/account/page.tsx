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
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Cài đặt Tài khoản</h1>
        <p className="text-muted-foreground">Quản lý bảo mật tài khoản và tùy chỉnh của bạn</p>
      </div>

      {/* Change Password */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">Đổi Mật khẩu</h2>
          <p className="text-sm text-muted-foreground">Cập nhật mật khẩu của bạn để giữ tài khoản an toàn</p>
        </div>

        <div className="relative">
          <Input
            label="Mật khẩu Hiện tại"
            type={showPasswords.current ? "text" : "password"}
            placeholder="Nhập mật khẩu hiện tại"
          />
          <button
            onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
            className="absolute right-4 top-10 text-muted-foreground hover:text-foreground"
          >
            {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative">
          <Input label="Mật khẩu Mới" type={showPasswords.new ? "text" : "password"} placeholder="Nhập mật khẩu mới" />
          <button
            onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
            className="absolute right-4 top-10 text-muted-foreground hover:text-foreground"
          >
            {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative">
          <Input
            label="Xác nhận Mật khẩu"
            type={showPasswords.confirm ? "text" : "password"}
            placeholder="Xác nhận mật khẩu mới"
          />
          <button
            onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
            className="absolute right-4 top-10 text-muted-foreground hover:text-foreground"
          >
            {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="secondary">Hủy</Button>
          <Button variant="primary">Cập nhật Mật khẩu</Button>
        </div>
      </div>

      {/* Two Factor Auth */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">Xác thực Hai yếu tố</h2>
          <p className="text-sm text-muted-foreground">Thêm một lớp bảo mật bổ sung cho tài khoản của bạn</p>
        </div>

        <div className="p-4 rounded-lg bg-secondary">
          <p className="text-sm text-foreground">
            Xác thực hai yếu tố hiện đang <strong>bị vô hiệu hóa</strong>
          </p>
        </div>

        <Button variant="primary" className="w-full">
          Bật 2FA
        </Button>
      </div>

      {/* Danger Zone */}
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-destructive mb-1">Vùng Nguy hiểm</h2>
          <p className="text-sm text-muted-foreground">Các hành động không thể đảo ngược</p>
        </div>

        <Button
          variant="outline"
          className="w-full border-destructive/20 text-destructive hover:bg-destructive/10 bg-transparent"
        >
          Xóa Tài khoản
        </Button>
      </div>
    </div>
  )
}
