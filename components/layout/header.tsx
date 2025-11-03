"use client";

import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import UserMenu from "@/components/ui/UseMenu";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden text-foreground hover:bg-secondary rounded p-2 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-foreground hidden sm:block">
          Welcome back!
        </h1>
      </div>

      {/* Right section */}
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
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
