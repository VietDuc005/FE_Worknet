"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  loginUser,
  registerUser,
  verifyEmail,
} from "@/app/services/authService";

import AuthHeader from "./AuthHeader";
import AuthTabs from "./AuthTabs";
import AuthFormLogin from "./AuthFormLogin";
import AuthFormRegister from "./AuthFormRegister";
import AuthFormVerify from "./AuthFormVerify";
import AuthFormForgot from "./AuthFormForgot";
import AuthSocialButtons from "./AuthSocialButtons";

export default function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register" | "verify" | "forgot">("login");
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Thêm các field cần cho form Forgot Password
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // ✅ Hàm change chung
  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [field]: e.target.value });

  // ========================
  // 🧠 Handle Submit
  // ========================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (tab === "login") {
        const res = await loginUser({
          email: form.email.trim(),
          matKhau: form.password.trim(),
        });

        alert(res.message || "Đăng nhập thành công!");
        localStorage.setItem("accessToken", res.data?.accessToken || "");
        localStorage.setItem("refreshToken", res.data?.refreshToken || "");
        router.push("/user/dashboard");
      }

      else if (tab === "register") {
        const res = await registerUser({
          hoTen: form.name.trim(),
          email: form.email.trim(),
          matKhau: form.password.trim(),
        });

        alert(res.message || "Vui lòng kiểm tra email để lấy mã OTP!");
        setTab("verify");
      }

      else if (tab === "verify") {
        const res = await verifyEmail({
          email: form.email.trim(),
          otp: form.otp.trim(),
        });

        alert(res.message || "Xác thực thành công!");
        setTab("login");
      }

      else if (tab === "forgot") {
        // ✅ Bước 1: Gửi email xác minh
        if (!form.newPassword || !form.confirmNewPassword) {
          alert("📩 Vui lòng nhập email và xác minh trước khi đặt lại mật khẩu!");
        } else {
          // ✅ Bước 2: Đặt lại mật khẩu (sau này nối với API reset-password)
          if (form.newPassword !== form.confirmNewPassword) {
            alert("❌ Mật khẩu xác nhận không khớp!");
          } else {
            alert("✅ Mật khẩu mới đã được đặt lại thành công!");
            setTab("login");
          }
        }
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // ========================
  // 🎨 UI
  // ========================
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all"
      >
        <AuthHeader tab={tab} setTab={setTab} onClose={onClose} />

        <div className="bg-white -mt-4 mx-3 rounded-xl shadow-md p-5">
          {(tab === "login" || tab === "register") && (
            <AuthTabs tab={tab} setTab={setTab} />
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {tab === "login" && (
              <AuthFormLogin
                form={form}
                handleChange={handleChange}
                isLoading={isLoading}
                setTab={setTab}
              />
            )}

            {tab === "register" && (
              <AuthFormRegister
                form={form}
                handleChange={handleChange}
                isLoading={isLoading}
              />
            )}

            {tab === "verify" && (
              <AuthFormVerify
                form={form}
                handleChange={handleChange}
                isLoading={isLoading}
              />
            )}

            {tab === "forgot" && (
              <AuthFormForgot
                form={form}
                handleChange={handleChange}
                isLoading={isLoading}
              />
            )}
          </form>

          {(tab === "login" || tab === "register") && <AuthSocialButtons />}
        </div>
      </div>
    </div>
  );
}
