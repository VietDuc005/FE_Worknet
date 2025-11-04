"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Mail, User, Lock, ArrowLeft, Github, Chrome } from "lucide-react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import {
  loginUser,
  registerUser,
  verifyEmail,
} from "@/app/services/authService";

export default function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  const [tab, setTab] = useState<
    "login" | "register" | "verify" | "forgot"
  >("login");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [field]: e.target.value });

  if (!isOpen) return null;

  // ===============================
  // 🧠 HANDLE SUBMIT
  // ===============================
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
      } else if (tab === "register") {
        const res = await registerUser({
          hoTen: form.name.trim(),
          email: form.email.trim(),
          matKhau: form.password.trim(),
        });
        alert(res.message || "Vui lòng kiểm tra email để lấy mã OTP!");
        setTab("verify");
      } else if (tab === "verify") {
        const res = await verifyEmail({
          email: form.email.trim(),
          otp: form.otp.trim(),
        });
        alert(res.message || "Xác thực thành công, bạn có thể đăng nhập!");
        setTab("login");
      } else if (tab === "forgot") {
        alert(
          `📩 Mã đặt lại mật khẩu đã được gửi tới ${form.email}. Tính năng đang cập nhật.`
        );
        setTab("login");
      }
    } catch (error: any) {
      console.error("❌ Lỗi Auth:", error);
      alert(error.response?.data?.message || "Có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };

  // ===============================
  // 🧭 Điều hướng quay lại
  // ===============================
  const handleBack = () => {
    if (tab === "verify" || tab === "forgot") setTab("login");
    else onClose();
  };

  // ===============================
  // JSX UI
  // ===============================
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all"
      >
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 text-gray-500"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 🌈 Header */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-center py-6 px-4 relative">
          {(tab === "verify" || tab === "forgot") && (
            <button
              type="button"
              onClick={handleBack}
              className="absolute left-3 top-5 p-2 rounded-full hover:bg-white/20 transition"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          )}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-blue-600 font-bold text-lg shadow">
            WN
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-3">
            {tab === "login"
              ? "Chào mừng trở lại"
              : tab === "register"
              ? "Tạo tài khoản mới"
              : tab === "verify"
              ? "Xác thực Email"
              : "Quên mật khẩu"}
          </h2>
          <p className="text-xs text-blue-100 mt-1">
            {tab === "login"
              ? "Đăng nhập để tiếp tục làm việc"
              : tab === "register"
              ? "Đăng ký nhanh chóng & miễn phí"
              : tab === "verify"
              ? "Nhập mã OTP được gửi về email của bạn"
              : "Nhập email để nhận hướng dẫn đặt lại mật khẩu"}
          </p>
        </div>

        {/* 🧾 Form */}
        <div className="bg-white -mt-4 mx-3 rounded-xl shadow-md p-5">
          {/* Tabs login/register */}
          {(tab === "login" || tab === "register") && (
            <div className="flex gap-2 mb-5 bg-gray-100 rounded-lg p-1">
              {["login", "register"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t as "login" | "register")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
                    tab === t
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t === "login" ? "Đăng nhập" : "Đăng ký"}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Họ tên */}
            {tab === "register" && (
              <InputField
                label="Họ và tên"
                icon={<User className="w-4 h-4 text-gray-400" />}
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Nguyễn Văn A"
                required
              />
            )}

            {/* Email */}
            {(tab === "login" ||
              tab === "register" ||
              tab === "verify" ||
              tab === "forgot") && (
              <InputField
                label="Email"
                icon={<Mail className="w-4 h-4 text-gray-400" />}
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="user@gmail.com"
                required
              />
            )}

            {/* Mật khẩu */}
            {(tab === "login" || tab === "register") && (
              <PasswordField
                label="Mật khẩu"
                value={form.password}
                show={showPassword}
                toggle={() => setShowPassword(!showPassword)}
                onChange={handleChange("password")}
              />
            )}

            {/* Xác nhận mật khẩu */}
            {tab === "register" && (
              <PasswordField
                label="Xác nhận mật khẩu"
                value={form.confirmPassword}
                show={showConfirm}
                toggle={() => setShowConfirm(!showConfirm)}
                onChange={handleChange("confirmPassword")}
              />
            )}

            {/* Nhập OTP */}
            {tab === "verify" && (
              <InputField
                label="Mã OTP"
                icon={<Lock className="w-4 h-4 text-gray-400" />}
                type="text"
                value={form.otp}
                onChange={handleChange("otp")}
                placeholder="Nhập mã OTP 6 ký tự"
                required
              />
            )}

            {/* Forgot password */}
            {tab === "login" && (
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
            )}

            {/* Nút Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
            >
              {isLoading ? "Đang xử lý..." : getButtonLabel(tab)}
            </button>

            {/* Login/Register with Google */}
            {(tab === "login" || tab === "register") && (
              <div className="mt-4">
                <div className="relative my-3 text-center text-gray-400 text-xs">
                  <span className="bg-white px-2">hoặc</span>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200"></div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
                  >
                    <Chrome className="w-4 h-4 text-blue-500" />
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

// ===============================
// 🔘 Dynamic button label
// ===============================
function getButtonLabel(tab: string) {
  switch (tab) {
    case "login":
      return "Đăng Nhập";
    case "register":
      return "Tạo Tài Khoản";
    case "verify":
      return "Xác Thực OTP";
    case "forgot":
      return "Gửi Email Khôi Phục";
    default:
      return "Tiếp tục";
  }
}
