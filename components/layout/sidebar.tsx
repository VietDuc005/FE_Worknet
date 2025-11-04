"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Users,
  CreditCard,
  ChevronLeft,
  LogOut,
} from "lucide-react";

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // 🧠 Xác định quyền hiện tại
  const currentRole = useMemo(() => {
    if (pathname.startsWith("/admin")) return "admin";
    if (pathname.startsWith("/use")) return "use";
    if (pathname.startsWith("/workspace")) return "workspace";
    return "admin";
  }, [pathname]);

  // 📁 Menu theo quyền
  const navByRole = {
    admin: [
      { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
      { href: "/admin/company", label: "Company", icon: <Building2 className="w-5 h-5" /> },
      { href: "/admin/member", label: "Member", icon: <Users className="w-5 h-5" /> },
      { href: "/admin/workspaces", label: "Workspaces", icon: <Briefcase className="w-5 h-5" /> },
      { href: "/admin/payment", label: "Payment", icon: <CreditCard className="w-5 h-5" /> },
    ],
    use: [
      { href: "/user/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
      { href: "/use/workspaces", label: "Workspaces", icon: <Briefcase className="w-5 h-5" /> },
      { href: "/use/projects", label: "Project", icon: <Building2 className="w-5 h-5" /> },
      { href: "/use/member", label: "Member", icon: <Users className="w-5 h-5" /> },
      { href: "/user/choose-plan", label: "Premium", icon: <Users className="w-5 h-5" /> },
    ],
    workspace: [
      { href: "/workspace/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
      { href: "/workspace/workspaces", label: "Workspaces", icon: <Briefcase className="w-5 h-5" /> },
      { href: "/workspace/projects", label: "Projects", icon: <Building2 className="w-5 h-5" /> },
      { href: "/workspace/member", label: "Member", icon: <Users className="w-5 h-5" /> },
    ],
  };

  const navItems = navByRole[currentRole] || [];

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen flex flex-col border-r transition-all duration-300 z-40",
        collapsed ? "w-20" : "w-64",
        // 🎨 Light & Dark Mode
        "bg-white border-gray-200 text-gray-800 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <span className="font-semibold text-base text-gray-800 dark:text-gray-100">
            WorkNet
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
        >
          <ChevronLeft
            className={cn(
              "w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform",
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
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              pathname.startsWith(item.href)
                ? "bg-blue-600 text-white shadow dark:bg-blue-500 dark:text-white"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            )}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

    </aside>
  );
}
