"use client";

import { Users } from "lucide-react";
import InviteMemberForm from "@/components/features/workspace/InviteMemberForm";

export default function WorkspaceMemberPage() {
  const congTyId = 1; // sau này truyền động qua context / store
  const workspaceId = 1;

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Users className="w-6 h-6 text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Mời thành viên vào Workspace
          </h1>
          <p className="text-sm text-muted-foreground">
            Gửi lời mời đến email thành viên để tham gia không gian làm việc.
          </p>
        </div>
      </div>

      {/* Main box */}
      <div className="bg-card rounded-xl border border-border shadow-sm p-6 max-w-lg space-y-6">
        <h2 className="text-lg font-semibold text-foreground">
          Gửi lời mời tham gia
        </h2>
        <InviteMemberForm
          congTyId={congTyId}
          workspaceId={workspaceId}
          onSuccess={() => {
            alert("🎉 Mời thành viên thành công!");
          }}
        />
      </div>
    </div>
  );
}
