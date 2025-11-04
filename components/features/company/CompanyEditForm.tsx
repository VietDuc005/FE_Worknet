"use client";

import { useEffect, useState } from "react";
import { Building2, FileText, Mail, MapPin, Phone, Globe } from "lucide-react";
import { getCompanyDetails, updateCompany } from "@/app/services/companyService";
import InputField from "../(auth)/InputField";

interface CompanyEditFormProps {
  congTyId: number;
  onSuccess?: () => void;
}

export default function CompanyEditForm({ congTyId, onSuccess }: CompanyEditFormProps) {
  const [form, setForm] = useState({
    tenCongTy: "",
    moTa: "",
    diaChi: "",
    soDienThoai: "",
    email: "",
    website: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // 🧠 Lấy thông tin công ty để hiển thị trước
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getCompanyDetails(congTyId);
        if (res.success && res.data) {
          setForm({
            tenCongTy: res.data.tenCongTy || "",
            moTa: res.data.moTa || "",
            diaChi: res.data.diaChi || "",
            soDienThoai: res.data.soDienThoai || "",
            email: res.data.email || "",
            website: res.data.website || "",
          });
        }
      } catch (err) {
        console.error("❌ Lỗi khi tải thông tin công ty:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [congTyId]);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  // 🧩 Gọi API cập nhật
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await updateCompany(congTyId, form);
      if (res.success) {
        alert("✅ " + (res.message || "Cập nhật thành công!"));
        if (onSuccess) onSuccess();
      } else {
        alert("❌ Cập nhật thất bại!");
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Không thể cập nhật công ty!");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading)
    return <p className="text-sm text-gray-500 italic">Đang tải dữ liệu công ty...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-blue-500" /> Cập nhật công ty
      </h2>

      <InputField
        label="Tên công ty"
        icon={<Building2 className="w-4 h-4 text-gray-400" />}
        value={form.tenCongTy}
        onChange={handleChange("tenCongTy")}
        placeholder="Công ty TNHH WorkNet"
        required
      />

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Mô tả
        </label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <textarea
            value={form.moTa}
            onChange={handleChange("moTa")}
            placeholder="Mô tả ngắn gọn..."
            rows={3}
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm resize-none"
          />
        </div>
      </div>

      <InputField
        label="Địa chỉ"
        icon={<MapPin className="w-4 h-4 text-gray-400" />}
        value={form.diaChi}
        onChange={handleChange("diaChi")}
        placeholder="Berlin, Đức"
      />

      <InputField
        label="Số điện thoại"
        icon={<Phone className="w-4 h-4 text-gray-400" />}
        value={form.soDienThoai}
        onChange={handleChange("soDienThoai")}
        placeholder="+49 123 456 789"
      />

      <InputField
        label="Email công ty"
        icon={<Mail className="w-4 h-4 text-gray-400" />}
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        placeholder="contact@worknet.de"
      />

      <InputField
        label="Website"
        icon={<Globe className="w-4 h-4 text-gray-400" />}
        value={form.website}
        onChange={handleChange("website")}
        placeholder="https://worknet.de"
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="reset"
          onClick={() => onSuccess && onSuccess()}
          className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Hủy
        </button>

        <button
          type="submit"
          disabled={isSaving}
          className="px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
        >
          {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
      </div>
    </form>
  );
}
