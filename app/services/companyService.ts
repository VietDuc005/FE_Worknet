"use client";
import apiClient from "./apiClient";

// 🧱 Interface mô tả dữ liệu trả về
export interface Company {
  idCongTy: number;
  tenCongTy: string;
  maCongTy: string;
  moTa: string;
  logo: string;
  diaChi: string;
  soDienThoai: string;
  email: string;
  website: string;
  nguoiTaoId: number;
  trangThai?: string;
  ngayTao?: string;
  ngayCapNhat?: string;
}

export interface CompanyMember {
  userId: number;
  hoTen: string;
  email: string;
  anhDaiDien: string;
  roleName: string;
  chucVu: string;
  ngayThamGia: string;
  status: string;
}

// ===============================
// 🔹 API tạo công ty mới
// ===============================
export const createCompany = async (payload: {
  tenCongTy: string;
  moTa?: string;
  logo?: string;
  diaChi?: string;
  soDienThoai?: string;
  email?: string;
  website?: string;
}) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/companies", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data as {
    success: boolean;
    message: string;
    data: Company;
  };
};

// ===============================
// 🔹 API lấy thông tin chi tiết công ty
// ===============================
export const getCompanyDetails = async (congTyId: number) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get(`/companies/${congTyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data as {
    success: boolean;
    message: string;
    data: Company;
  };
};

// ===============================
// 🔹 API cập nhật công ty
// ===============================
export const updateCompany = async (
  congTyId: number,
  payload: {
    tenCongTy?: string;
    moTa?: string;
    logo?: string;
    diaChi?: string;
    soDienThoai?: string;
    email?: string;
    website?: string;
  }
) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.put(`/companies/${congTyId}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data as {
    success: boolean;
    message: string;
    data: Company;
  };
};

// ===============================
// 🔹 API gửi lời mời thành viên
// ===============================
export const inviteMemberToCompany = async (
  congTyId: number,
  payload: {
    email: string;
    roleId: number; // chuẩn theo mẫu Swagger của bạn
  }
) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post(
    `/companies/${congTyId}/invitations`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data as {
    success: boolean;
    message: string;
    data?: null;
  };
};

// ===============================
// 🔹 API lấy danh sách thành viên công ty
// ===============================
export const getCompanyMembers = async (congTyId: number) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get(`/companies/${congTyId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data as {
    success: boolean;
    message: string;
    data: CompanyMember[];
  };
};
