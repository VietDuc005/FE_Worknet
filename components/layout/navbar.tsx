"use client"

import Link from "next/link"
import { Bell, LogOut, Settings, User } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <nav className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xs font-bold">
              WN
            </div>
            <span className="hidden sm:inline">WorkNet</span>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="p-2 hover:bg-secondary rounded-lg transition relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1.5 hover:bg-secondary rounded-lg transition"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
                <div className="p-2 space-y-1">
                  <a
                    href="/settings/profile"
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded transition"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="/settings/account"
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded transition"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary rounded transition text-destructive">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
