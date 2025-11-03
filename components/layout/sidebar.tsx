"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Briefcase, Users, Settings, Plus, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  badge?: number
}

const mainNavItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: "/companies", label: "Companies", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/workspaces", label: "Workspaces", icon: <Users className="w-5 h-5" /> },
]

const settingsNavItems: NavItem[] = [
  { href: "/settings/profile", label: "Profile", icon: <Settings className="w-5 h-5" /> },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <aside
      className={cn("border-r border-border bg-sidebar transition-all duration-300", isCollapsed ? "w-20" : "w-64")}
    >
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          {!isCollapsed && <span className="font-semibold text-sidebar-foreground text-sm">Menu</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 hover:bg-sidebar-accent rounded transition"
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            <ChevronDown
              className={cn("w-4 h-4 text-sidebar-foreground transition-transform", isCollapsed && "rotate-90")}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          <div className="space-y-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sidebar-foreground",
                  isActive(item.href)
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "hover:bg-sidebar-accent",
                )}
                title={isCollapsed ? item.label : ""}
              >
                {item.icon}
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-sm">{item.label}</span>
                    {item.badge && (
                      <span className="bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Create New */}
          {!isCollapsed && (
            <div className="pt-4 border-t border-sidebar-border">
              <button className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sidebar-primary bg-sidebar-primary/10 hover:bg-sidebar-primary/20 transition font-medium text-sm">
                <Plus className="w-5 h-5" />
                New Workspace
              </button>
            </div>
          )}
        </nav>

        {/* Settings */}
        <div className="p-3 border-t border-sidebar-border space-y-2">
          {settingsNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sidebar-foreground text-sm",
                isActive(item.href) ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent",
              )}
              title={isCollapsed ? item.label : ""}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
