"use client";

import { useEffect, useState } from "react";
import { getWorkspacesByCompany, Workspace } from "@/app/services/workspaceService";
import { FolderKanban } from "lucide-react";

interface WorkspaceListProps {
  congTyId: number;
  onSelect: (id: number) => void;
}

export default function WorkspaceList({ congTyId, onSelect }: WorkspaceListProps) {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkspaces = async () => {
    try {
      const res = await getWorkspacesByCompany(congTyId);
      if (res.success) setWorkspaces(res.data);
    } catch (err) {
      console.error("❌ Lỗi tải workspace:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  if (loading)
    return <p className="text-sm text-muted-foreground">Đang tải danh sách...</p>;

  if (workspaces.length === 0)
    return (
      <p className="italic text-sm text-muted-foreground">
        Chưa có workspace nào trong công ty này.
      </p>
    );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {workspaces.map((ws) => (
        <div
          key={ws.idKhongGian}
          onClick={() => onSelect(ws.idKhongGian)}
          className="cursor-pointer border rounded-xl p-4 bg-white dark:bg-gray-900 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <FolderKanban className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold">{ws.tenKhongGian}</h3>
          </div>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {ws.moTa || "Không có mô tả."}
          </p>
        </div>
      ))}
    </div>
  );
}
