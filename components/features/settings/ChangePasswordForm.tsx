"use client";

import { useState } from "react";
import { changePassword } from "@/app/services/userService";
import PasswordField from "../(auth)/PasswordField";

export default function ChangePasswordForm() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // 🔹 kiểm soát hiển thị mật khẩu
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await changePassword(form);
      alert(res.message || "✅ Đổi mật khẩu thành công!");
      setForm({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
    } catch (error: any) {
      alert(error.response?.data?.message || "❌ Đổi mật khẩu thất bại!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow p-6 rounded-2xl space-y-5 border"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        🔐 Đổi mật khẩu
      </h2>

      {/* Mật khẩu hiện tại */}
      <PasswordField
        label="Mật khẩu hiện tại"
        value={form.oldPassword}
        show={showOld}
        toggle={() => setShowOld(!showOld)}
        onChange={handleChange("oldPassword")}
      />

      {/* Mật khẩu mới */}
      <PasswordField
        label="Mật khẩu mới"
        value={form.newPassword}
        show={showNew}
        toggle={() => setShowNew(!showNew)}
        onChange={handleChange("newPassword")}
      />

      {/* Xác nhận mật khẩu mới */}
      <PasswordField
        label="Xác nhận mật khẩu mới"
        value={form.confirmNewPassword}
        show={showConfirm}
        toggle={() => setShowConfirm(!showConfirm)}
        onChange={handleChange("confirmNewPassword")}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
      >
        {isLoading ? "Đang xử lý..." : "Lưu thay đổi"}
      </button>
    </form>
  );
}
