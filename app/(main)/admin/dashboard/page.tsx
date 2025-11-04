"use client";

import { Users, Building, Settings } from "lucide-react";
import { useTheme } from "next-themes";

export default function AdminDashboard() {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 space-y-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p
        className={`${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        } transition-colors duration-300`}
      >
        Quản lý toàn bộ hệ thống và công ty.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Building, label: "Công ty", value: "15" },
          { icon: Users, label: "Người dùng", value: "1,245" },
          { icon: Settings, label: "Cấu hình", value: "Đang hoạt động" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`rounded-lg border p-6 hover:shadow-lg transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-200 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors
                  ${
                    theme === "dark"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-500/10 text-blue-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </p>
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
