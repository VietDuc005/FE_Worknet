"use client";

import React from "react";
import  Sidebar  from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar (menu trái) */}
      <Sidebar />

      {/* Vùng nội dung chính */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Nội dung trang */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
