"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Menu, X, LayoutDashboard, FolderOpen, Users, Settings, LogOut, Bell, Search, ChevronDown } from "lucide-react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const searchParams = useSearchParams()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transition-all duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm">
                WN
              </div>
              <span className="text-foreground">WorkNet</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent rounded p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <FolderOpen className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link
              href="/teams"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <Users className="w-5 h-5" />
              <span>Teams</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-sidebar-accent transition"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold flex items-center justify-center">
                  JD
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
            </button>

            {profileOpen && (
              <div className="mt-2 space-y-1 bg-sidebar-accent rounded-lg p-1">
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-sidebar-border transition text-sidebar-foreground">
                  Profile
                </button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-sidebar-border transition text-sidebar-foreground">
                  Account
                </button>
                <hr className="my-1 border-sidebar-border" />
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-sidebar-border transition text-destructive flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-foreground hover:bg-secondary rounded p-2 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-foreground hidden sm:block">Welcome back!</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-secondary rounded-lg px-3 py-2 border border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-transparent px-2 py-1 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-foreground hover:bg-secondary rounded-lg transition">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>

            {/* User Menu */}
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center hover:opacity-90 transition">
              JD
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
