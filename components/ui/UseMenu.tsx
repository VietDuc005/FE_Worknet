"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Moon, Sun, User, Lock } from "lucide-react";
import clsx from "clsx";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  //  Toggle light/dark theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  //  Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

     useEffect(() => {
    setOpen(false);
  }, [pathname]);
  
  //  Điều hướng
  const navigateTo = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  //  Đăng xuất
  const handleLogout = () => {
    setOpen(false);
    // Ở đây bạn có thể thêm logic clear token / localStorage nếu cần
    localStorage.removeItem("authToken");
    router.push("/");
  };

   const isProfilePage = pathname === "/settings/profile";
  const isAccountPage = pathname === "/settings/account";
  return (
    <div ref={menuRef} className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center hover:opacity-90 transition"
      >
        JD
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={clsx(
            "absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg z-50 animate-fadeIn"
          )}
        >
          <div className="p-2">
            {/*  Profile */}
            <button
              onClick={() => navigateTo("/settings/profile")}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-foreground hover:bg-secondary transition"
            >
              <User className="w-4 h-4 text-blue-500" />
              Chỉnh sửa thông tin
            </button>

            {/*  Account */}
            <button
              onClick={() => navigateTo("/settings/account")}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-foreground hover:bg-secondary transition"
            >
              <Lock className="w-4 h-4 text-yellow-500" />
              Đổi mật khẩu
            </button>

            {(!isProfilePage || !isAccountPage) && <hr className="my-2 border-border" />}

            {/*  Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-foreground hover:bg-secondary transition"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-orange-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-500" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <hr className="my-2 border-border" />

            {/*  Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-destructive hover:bg-secondary transition"
            >
              <LogOut className="w-4 h-4" />
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
