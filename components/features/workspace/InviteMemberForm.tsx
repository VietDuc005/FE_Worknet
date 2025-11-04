"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { inviteMemberToWorkspace } from "@/app/services/workspaceService";

interface InviteMemberFormProps {
  congTyId: number;
  workspaceId: number;
  onSuccess: () => void;
}

export default function InviteMemberForm({
  congTyId,
  workspaceId,
  onSuccess,
}: InviteMemberFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    if (!email.trim()) return alert("Vui lòng nhập email!");
    setLoading(true);
    try {
      const res = await inviteMemberToWorkspace(congTyId, workspaceId, {
        email,
        roleId: 2,
      });
      alert(res.message || "Đã gửi lời mời thành công!");
      setEmail("");
      onSuccess();
    } catch (err: any) {
      alert(err.response?.data?.message || "Không thể gửi lời mời!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="email"
        placeholder="Nhập email để mời..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
      />
      <button
        onClick={handleInvite}
        disabled={loading}
        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium disabled:opacity-60"
      >
        <UserPlus className="w-4 h-4" />
        {loading ? "Đang gửi..." : "Mời"}
      </button>
    </div>
  );
}
