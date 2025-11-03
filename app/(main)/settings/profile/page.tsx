"use client"

import { Upload, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Cài đặt Hồ sơ</h1>
        <p className="text-muted-foreground">Quản lý thông tin hồ sơ của bạn</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-3xl font-bold flex items-center justify-center">
            JD
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Ảnh Hồ sơ</p>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition">
              <Upload className="w-4 h-4" />
              Tải ảnh mới lên
            </button>
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Tên" type="text" placeholder="John" defaultValue="John" />
            <Input label="Họ" type="text" placeholder="Doe" defaultValue="Doe" />
          </div>

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            defaultValue="john@example.com"
            icon={<Mail className="w-5 h-5" />}
          />

          <Input
            label="Số điện thoại"
            type="tel"
            placeholder="+84 (555) 000-0000"
            icon={<Phone className="w-5 h-5" />}
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Chức danh công việc</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition">
              <option>Quản lý Sản phẩm</option>
              <option>Nhà thiết kế</option>
              <option>Nhà phát triển</option>
              <option>Quản lý</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tiểu sử</label>
            <textarea
              placeholder="Hãy kể cho chúng tôi về bạn..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
              rows={4}
              defaultValue="Đam mê xây dựng các sản phẩm tuyệt vời và dẫn dắt các nhóm sáng tạo."
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="secondary">Hủy</Button>
          <Button variant="primary">Lưu Thay đổi</Button>
        </div>
      </div>
    </div>
  )
}
