"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  FolderKanban,
  Briefcase,
  Users,
  Settings,
  Plus,
  ChevronLeft,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  // 🧭 Menu chính
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/projects", label: "Projects", icon: <FolderKanban className="w-5 h-5" /> },
    { href: "/companies", label: "Companies", icon: <Building2 className="w-5 h-5" /> },
    { href: "/workspaces", label: "Workspaces", icon: <Briefcase className="w-5 h-5" /> },
  ];

  // ⚙️ Menu phụ
  const settingsItems = [
    { href: "/settings/profile", label: "Profile", icon: <Users className="w-5 h-5" /> },
    { href: "/settings/account", label: "Account", icon: <Settings className="w-5 h-5" /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <aside
      className={cn(
        "flex flex-col bg-sidebar border-r border-border transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        {!collapsed && <span className="font-semibold text-sm">WorkNet</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-sidebar-accent rounded transition"
        >
          <ChevronLeft
            className={cn(
              "w-4 h-4 text-sidebar-foreground transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition",
              isActive(item.href)
                ? "bg-blue-600 text-white shadow"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            )}
            title={collapsed ? item.label : ""}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}

        {!collapsed && (
          <div className="pt-4 border-t border-sidebar-border">
            <button
              onClick={() => router.push("/workspaces/new")}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium transition"
            >
              <Plus className="w-5 h-5" />
              New Workspace
            </button>
          </div>
        )}

       
      </nav>

      {/* Footer */}
     
    </aside>
  );
}
