"use client";

import { useEffect, useState } from "react";
import { getWorkspaceDetails, Workspace } from "@/app/services/workspaceService";
import { FolderKanban } from "lucide-react";

interface WorkspaceDetailCardProps {
  congTyId: number;
  workspaceId: number;
  onBack: () => void;
}

export default function WorkspaceDetailCard({
  congTyId,
  workspaceId,
  onBack,
}: WorkspaceDetailCardProps) {
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const res = await getWorkspaceDetails(congTyId, workspaceId);
      if (res.success) setWorkspace(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [workspaceId]);

  if (loading) return <p className="text-sm text-muted-foreground">Đang tải...</p>;
  if (!workspace) return <p>Không tìm thấy workspace.</p>;

  return (
    <div className="border border-border rounded-xl p-6 bg-card shadow-sm">
      <button
        onClick={onBack}
        className="text-sm text-blue-600 hover:underline mb-3"
      >
        ← Quay lại danh sách
      </button>

      <div className="flex items-center gap-3 mb-3">
        <FolderKanban className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">{workspace.tenKhongGian}</h2>
      </div>

      <p className="text-sm text-muted-foreground mb-2">
        {workspace.moTa || "Không có mô tả."}
      </p>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <strong>Màu sắc:</strong> {workspace.mauSac || "—"}
        </p>
        <p>
          <strong>Trạng thái:</strong> {workspace.trangThai || "—"}
        </p>
        <p>
          <strong>Ngày tạo:</strong>{" "}
          {workspace.ngayTao
            ? new Date(workspace.ngayTao).toLocaleDateString("vi-VN")
            : "—"}
        </p>
      </div>
    </div>
  );
}
