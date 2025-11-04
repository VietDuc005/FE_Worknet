"use client";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className={`h-screen flex overflow-hidden transition-colors duration-300 
      ${isDark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Sidebar cố định bên trái */}
      <div className="fixed inset-y-0 left-0 z-40">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Vùng content chính */}
      <div
        className={`flex flex-col flex-1 min-h-screen transition-all duration-300 
        ${collapsed ? "pl-20" : "pl-64"}
        ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        {/* Header cố định */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Nội dung chính */}
        <main
          className={`flex-1 overflow-y-auto p-6 pt-20 transition-colors duration-300 
          ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
