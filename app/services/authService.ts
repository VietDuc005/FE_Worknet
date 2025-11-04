"use client";
import apiClient from "./apiClient";

// 🧩 Đăng ký tài khoản mới
export const registerUser = async (payload: {
  hoTen: string;
  email: string;
  matKhau: string;
}) => {
  const res = await apiClient.post("/auth/register", payload);
  return res.data;
};

// 🧩 Xác thực email (sau khi nhận OTP)
export const verifyEmail = async (payload: {
  email: string;
  otp: string;
}) => {
  const res = await apiClient.post("/auth/verify-email", payload);
  return res.data;
};

// 🧩 Đăng nhập tài khoản
export const loginUser = async (payload: {
  email: string;
  matKhau: string;
}) => {
  const res = await apiClient.post("/auth/login", payload);

  // Nếu đăng nhập thành công, lưu token vào localStorage
  const { data } = res.data;
  if (data?.accessToken && data?.refreshToken) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }

  return res.data;
};

// 🧩 Đăng xuất (cần refreshToken)
export const logoutUser = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const res = await apiClient.post("/auth/logout", { refreshToken });
  localStorage.clear();
  return res.data;
};

// 🧩 Đăng ký từ lời mời
export const registerFromInvite = async (payload: {
  hoTen: string;
  matKhau: string;
  invitationToken: string;
}) => {
  const res = await apiClient.post("/auth/register-from-invite", payload);
  const { data } = res.data;
  if (data?.accessToken && data?.refreshToken) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }
  return res.data;
};
