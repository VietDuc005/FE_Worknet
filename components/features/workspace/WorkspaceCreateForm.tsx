"use client";

import { useState } from "react";
import { createWorkspace } from "@/app/services/workspaceService";
import { FolderPlus, Palette, Image, FileText } from "lucide-react";
import InputField from "../(auth)/InputField";

interface WorkspaceCreateFormProps {
  congTyId: number;
  onSuccess: () => void;
}

export default function WorkspaceCreateForm({
  congTyId,
  onSuccess,
}: WorkspaceCreateFormProps) {
  const [form, setForm] = useState({
    tenKhongGian: "",
    moTa: "",
    mauSac: "",
    anhBia: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await createWorkspace(congTyId, form);
      alert(res.message || "Tạo workspace thành công!");
      onSuccess();
    } catch (err: any) {
      alert(err.response?.data?.message || "Không thể tạo workspace!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-border rounded-xl shadow-sm p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <FolderPlus className="w-5 h-5 text-blue-500" />
        Tạo workspace mới
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Tên workspace"
          icon={<FolderPlus className="w-4 h-4 text-gray-400" />}
          value={form.tenKhongGian}
          onChange={handleChange("tenKhongGian")}
          placeholder="Phòng dự án Frontend"
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
              placeholder="Mô tả không gian làm việc..."
              rows={3}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />
          </div>
        </div>

        <InputField
          label="Màu sắc"
          icon={<Palette className="w-4 h-4 text-gray-400" />}
          value={form.mauSac}
          onChange={handleChange("mauSac")}
          placeholder="#0099FF"
        />

        <InputField
          label="Ảnh bìa (URL)"
          icon={<Image className="w-4 h-4 text-gray-400" />}
          value={form.anhBia}
          onChange={handleChange("anhBia")}
          placeholder="https://example.com/banner.png"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 mt-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
        >
          {isLoading ? "Đang xử lý..." : "Tạo Workspace"}
        </button>
      </form>
    </div>
  );
}
