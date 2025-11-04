"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/settings/profile", label: "Profile" },
    { href: "/settings/account", label: "Account" },
  ];

  const currentNavItem = navItems.find((item) => pathname.startsWith(item.href));

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          {currentNavItem && (
            <Link
              href={currentNavItem.href}
              className={cn(
                "block px-5 py-2.5 rounded-lg font-medium text-center transition-colors",
                "bg-blue-500 text-white shadow-sm"
              )}
            >
              {currentNavItem.label}
            </Link>
          )}
        </aside>

        {/* Content */}
        <main className="md:col-span-3 bg-card border border-border rounded-2xl shadow-sm p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
