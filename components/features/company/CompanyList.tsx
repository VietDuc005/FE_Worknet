"use client";

import { useEffect, useState } from "react";
import { Building2, Users } from "lucide-react";
import { getCompanyDetails } from "@/app/services/companyService";
import CompanyCreateForm from "./CompanyCreateForm";

interface CompanyData {
  idCongTy: number;
  tenCongTy: string;
  moTa?: string;
  diaChi?: string;
  email?: string;
  soDienThoai?: string;
  website?: string;
  trangThai?: string;
  ngayTao?: string;
}

export default function CompanyList() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 🧠 Hàm lấy thông tin công ty
  const fetchCompany = async () => {
    setIsLoading(true);
    try {
      // ✅ Tạm gọi 1 ID để test (sau này dùng getMyCompanies)
      const res = await getCompanyDetails(1);
      if (res.success && res.data) {
        setCompanies([res.data]);
      }
    } catch (error) {
      console.error("❌ Lỗi khi lấy thông tin công ty:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Danh sách Công ty</h2>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          {showCreate ? "✕ Đóng" : "+ Thêm Công ty"}
        </button>
      </div>

      {/* Form tạo công ty */}
      {showCreate && (
        <div className="border rounded-xl p-4 bg-white dark:bg-gray-900 shadow-md">
          <CompanyCreateForm
            onSuccess={() => {
              setShowCreate(false);
              fetchCompany();
            }}
          />
        </div>
      )}

      {/* Danh sách công ty */}
      {isLoading ? (
        <p className="text-gray-500 text-sm italic">Đang tải dữ liệu...</p>
      ) : companies.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {companies.map((c) => (
            <div
              key={c.idCongTy}
              className="border rounded-lg p-4 bg-card hover:shadow transition cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold">{c.tenCongTy}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-1">
                {c.moTa || "Không có mô tả"}
              </p>
              <p className="text-xs text-gray-400">
                Email: {c.email || "—"} | SĐT: {c.soDienThoai || "—"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Địa chỉ: {c.diaChi || "—"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Website: {c.website || "—"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Ngày tạo:{" "}
                {c.ngayTao ? new Date(c.ngayTao).toLocaleDateString("vi-VN") : "—"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">Chưa có công ty nào.</p>
      )}
    </div>
  );
}
