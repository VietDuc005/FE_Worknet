"use client";

import { useState } from "react";
import { inviteMemberToCompany } from "@/app/services/companyService";
import { Mail, Shield } from "lucide-react";
import InputField from "../(auth)/InputField";

interface MemberInviteFormProps {
  congTyId: number;
  onSuccess?: () => void;
}

export default function MemberInviteForm({ congTyId, onSuccess }: MemberInviteFormProps) {
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState(2); // Mặc định là "member"
  const [isLoading, setIsLoading] = useState(false);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await inviteMemberToCompany(congTyId, { email, roleId });
      if (res.success) {
        alert("✅ " + (res.message || "Đã gửi lời mời thành công!"));
        setEmail("");
        if (onSuccess) onSuccess();
      } else {
        alert("❌ Gửi lời mời thất bại!");
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Không thể gửi lời mời!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleInvite}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm space-y-4"
    >
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Mail className="w-5 h-5 text-blue-500" /> Mời thành viên mới
      </h2>

      <InputField
        label="Email thành viên"
        icon={<Mail className="w-4 h-4 text-gray-400" />}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="member@worknet.com"
        required
      />

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Vai trò
        </label>
        <div className="relative">
          <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={roleId}
            onChange={(e) => setRoleId(Number(e.target.value))}
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-gray-800"
          >
            <option value={2}>Thành viên (Member)</option>
            <option value={1}>Quản trị (Admin)</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
      >
        {isLoading ? "Đang gửi..." : "Gửi lời mời"}
      </button>
    </form>
  );
}
