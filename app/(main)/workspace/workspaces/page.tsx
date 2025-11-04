"use client";

import { useState } from "react";
import { FolderKanban } from "lucide-react";
import WorkspaceList from "@/components/features/workspace/WorkspaceList";
import WorkspaceCreateForm from "@/components/features/workspace/WorkspaceCreateForm";
import WorkspaceDetailCard from "@/components/features/workspace/WorkspaceDetailCard";

export default function WorkspacesPage() {
  const congTyId = 1; // sau này sẽ lấy từ context

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <FolderKanban className="w-6 h-6 text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold text-foreground">Quản lý Workspace</h1>
          <p className="text-sm text-muted-foreground">
            Tạo, xem chi tiết và quản lý các workspace trong công ty của bạn.
          </p>
        </div>
      </div>

      {/* Content box */}
      <div className="bg-card rounded-xl border border-border shadow-sm p-5 space-y-6">
        {!selectedId ? (
          <>
            <WorkspaceCreateForm congTyId={congTyId} onSuccess={() => setRefresh((r) => r + 1)} />
            <WorkspaceList
              congTyId={congTyId}
              onSelect={(id) => setSelectedId(id)}
            />
          </>
        ) : (
          <WorkspaceDetailCard
            congTyId={congTyId}
            workspaceId={selectedId}
            onBack={() => setSelectedId(null)}
          />
        )}
      </div>
    </div>
  );
}
