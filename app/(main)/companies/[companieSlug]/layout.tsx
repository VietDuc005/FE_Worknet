"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  FolderKanban,
  ChevronLeft,
} from "lucide-react";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🧭 Danh sách các tab trong company
  const navItems = [
    { href: "", label: "Tổng quan", icon: <LayoutDashboard className="w-4 h-4" /> },
    { href: "/workspaces", label: "Workspaces", icon: <FolderKanban className="w-4 h-4" /> },
    { href: "/members", label: "Thành viên", icon: <Users className="w-4 h-4" /> },
    { href: "/settings", label: "Cài đặt", icon: <Settings className="w-4 h-4" /> },
  ];

  // 🔍 Lấy slug công ty từ URL
  const companyBasePath = pathname.split("/").slice(0, 3).join("/");

  const isActive = (href: string) => {
    if (href === "") return pathname === companyBasePath;
    return pathname.startsWith(`${companyBasePath}${href}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link
              href="/companies"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <ChevronLeft className="w-4 h-4" />
              Quay lại danh sách công ty
            </Link>
          </div>
          <h1 className="text-2xl font-semibold">Bảng điều khiển công ty</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar công ty */}
          <aside className="md:col-span-1">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`${companyBasePath}${item.href}`}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg transition text-sm font-medium",
                    isActive(item.href)
                      ? "bg-blue-600 text-white shadow-sm"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Nội dung chính */}
          <main className="md:col-span-3 bg-card border border-border rounded-xl shadow-sm p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
