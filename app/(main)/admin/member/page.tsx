"use client";

import MemberList from "@/components/features/company/MemberList";
import MemberInviteForm from "@/components/features/company/MemberInviteForm";
import { useState } from "react";
import { Users } from "lucide-react";

export default function MemberPage() {
  const [congTyId] = useState(1); // 👉 sau này có thể lấy từ context hoặc URL
  const [refreshFlag, setRefreshFlag] = useState(0);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-blue-500" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Thành viên công ty</h1>
            <p className="text-sm text-muted-foreground">
              Quản lý và mời thêm thành viên vào công ty của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MemberList congTyId={congTyId} key={refreshFlag} />
        </div>
        <div>
          <MemberInviteForm
            congTyId={congTyId}
            onSuccess={() => setRefreshFlag((p) => p + 1)}
          />
        </div>
      </div>
    </div>
  );
}
