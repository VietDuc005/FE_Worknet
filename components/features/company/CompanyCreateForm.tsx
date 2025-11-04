"use client";

import { useState } from "react";
import { Building2, Globe, Mail, MapPin, Phone, FileText } from "lucide-react";
import { createCompany } from "@/app/services/companyService";
import InputField from "../(auth)/InputField";

interface CompanyCreateFormProps {
  onSuccess?: () => void;
}

export default function CompanyCreateForm({ onSuccess }: CompanyCreateFormProps) {
  const [form, setForm] = useState({
    tenCongTy: "",
    moTa: "",
    diaChi: "",
    soDienThoai: "",
    email: "",
    website: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await createCompany(form);

      if (res.success) {
        alert("✅ " + (res.message || "Tạo công ty thành công!"));
        if (onSuccess) onSuccess(); // ✅ gọi callback sau khi thành công
      } else {
        alert("❌ Tạo công ty thất bại!");
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Không thể tạo công ty!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-blue-500" /> Thông tin công ty
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Mô tả ngắn gọn về công ty..."
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 mt-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
        >
          {isLoading ? "Đang xử lý..." : "Tạo Công Ty"}
        </button>
      </form>
    </div>
  );
}
