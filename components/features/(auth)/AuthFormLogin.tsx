"use client";
import { useState } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { Mail } from "lucide-react";

export default function AuthFormLogin({
  form,
  handleChange,
  isLoading,
  setTab,
}: any) {
  // ✅ State riêng để bật/tắt hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputField
        label="Email"
        icon={<Mail className="w-4 h-4 text-gray-400" />}
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        placeholder="user@gmail.com"
        required
      />

      <PasswordField
        label="Mật khẩu"
        value={form.password}
        show={showPassword}
        toggle={() => setShowPassword((prev) => !prev)} // ✅ Toggle thật
        onChange={handleChange("password")}
      />

      <div className="flex justify-between text-xs text-gray-500">
        <label className="flex items-center gap-1 cursor-pointer">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-500"
          />
          Ghi nhớ
        </label>
        <button
          type="button"
          onClick={() => setTab("forgot")}
          className="text-blue-600 hover:underline"
        >
          Quên mật khẩu?
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
      >
        {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
      </button>
    </>
  );
}
