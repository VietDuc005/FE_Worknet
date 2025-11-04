"use client";

import apiClient from "./apiClient";

// ===============================
// 🔹 Interface mô tả dữ liệu workspace
// ===============================
export interface Workspace {
  idKhongGian: number;
  congTyId: number;
  tenKhongGian: string;
  moTa?: string;
  anhBia?: string;
  mauSac?: string;
  nguoiTaoId: number;
  trangThai?: string;
  ngayTao?: string;
}

export interface WorkspaceMemberInvite {
  email: string;
  roleId: number;
}

// ===============================
// 🔹 Lấy danh sách workspace của công ty
// ===============================
export const getWorkspacesByCompany = async (congTyId: number) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get(`/companies/${congTyId}/workspaces`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data as {
    success: boolean;
    message: string;
    data: Workspace[];
  };
};

// ===============================
// 🔹 Tạo workspace mới trong công ty
// ===============================
export const createWorkspace = async (
  congTyId: number,
  payload: {
    tenKhongGian: string;
    moTa?: string;
    anhBia?: string;
    mauSac?: string;
  }
) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post(`/companies/${congTyId}/workspaces`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data as {
    success: boolean;
    message: string;
    data: Workspace;
  };
};

// ===============================
// 🔹 Xem chi tiết 1 workspace
// ===============================
export const getWorkspaceDetails = async (congTyId: number, workspaceId: number) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get(`/companies/${congTyId}/workspaces/${workspaceId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data as {
    success: boolean;
    message: string;
    data: Workspace;
  };
};

// ===============================
// 🔹 Mời thành viên vào workspace
// ===============================
export const inviteMemberToWorkspace = async (
  congTyId: number,
  workspaceId: number,
  payload: WorkspaceMemberInvite
) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post(
    `/companies/${congTyId}/workspaces/${workspaceId}/members`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return res.data as {
    success: boolean;
    message: string;
    data?: null;
  };
};
