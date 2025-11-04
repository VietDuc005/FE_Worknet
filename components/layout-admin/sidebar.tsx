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
    { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    {href: "/admin/company" , label : "Company", icon: <Building2 className="w-5 h-5" />},
    { href: "/admin/member", label: "Member", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/admin/workspaces", label: "Workspaces", icon: <Briefcase className="w-5 h-5" /> },//drop down 
   {href: "/admin/payment" , label : "Payment", icon: <Building2 className="w-5 h-5" />},
    
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
       
      </nav>

      {/* Footer */}
     
    </aside>
  );
}
// ddaay la trang admin cong ty
