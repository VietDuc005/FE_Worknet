"use client";
import InputField from "./InputField";
import { Mail } from "lucide-react";

export default function AuthFormForgot({ form, handleChange, isLoading }: any) {
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
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
      >
        {isLoading ? "Đang xử lý..." : "Gửi Email Khôi Phục"}
      </button>
    </>
  );
}
