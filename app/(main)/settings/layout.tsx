"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { href: "/settings/profile", label: "Profile" },
    { href: "/settings/account", label: "Account" },
  ]

  return (
    <div className="p-6 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-lg transition",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-secondary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}
