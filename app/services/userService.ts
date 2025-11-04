import apiClient from "./apiClient";

// 🧩 Đổi mật khẩu người dùng đang đăng nhập
export const changePassword = async (payload: {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/users/me/change-password", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
