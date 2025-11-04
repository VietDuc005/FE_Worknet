"use client";

import React from "react";
import { Menu, Search, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import UserMenu from "@/components/ui/UseMenu";

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 sticky top-0 z-30 shadow-sm transition-all duration-300"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded p-2 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 hidden sm:block">
          Welcome back!
        </h1>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent px-2 py-1 text-sm text-gray-700 dark:text-gray-200 
                       placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
