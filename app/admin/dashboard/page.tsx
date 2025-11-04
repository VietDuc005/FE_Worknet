"use client";

import { Users, Building, Settings } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-muted-foreground">Quản lý toàn bộ hệ thống và công ty.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Building, label: "Công ty", value: "15" },
          { icon: Users, label: "Người dùng", value: "1,245" },
          { icon: Settings, label: "Cấu hình", value: "Đang hoạt động" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-card rounded-lg border p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}