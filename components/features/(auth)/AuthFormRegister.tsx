"use client";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { Mail, User } from "lucide-react";

export default function AuthFormRegister({ form, handleChange, isLoading }: any) {
  return (
    <>
      <InputField
        label="Họ và tên"
        icon={<User className="w-4 h-4 text-gray-400" />}
        value={form.name}
        onChange={handleChange("name")}
        placeholder="Nguyễn Văn A"
        required
      />
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
        show={false}
        toggle={() => {}}
        onChange={handleChange("password")}
      />
      <PasswordField
        label="Xác nhận mật khẩu"
        value={form.confirmPassword}
        show={false}
        toggle={() => {}}
        onChange={handleChange("confirmPassword")}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
      >
        {isLoading ? "Đang xử lý..." : "Tạo Tài Khoản"}
      </button>
    </>
  );
}
