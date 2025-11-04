"use client";

import CompanyList from "@/components/features/company/CompanyList";
import CompanyEditForm from "@/components/features/company/CompanyEditForm";
import { useState } from "react";
import { Building2 } from "lucide-react";

export default function CompanyPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header section */}
      <div className="flex items-center gap-3 pb-3 border-b border-border">
        <Building2 className="w-6 h-6 text-blue-500" />
        <div>
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Quản lý Công ty
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Quản lý thông tin, chỉnh sửa và thêm mới công ty của bạn.
          </p>
        </div>
      </div>

      {/* Main content — dính sát header */}
      <div className="flex-1 bg-card border-x border-b border-border shadow-sm px-5 py-4 rounded-b-lg">
        {!selectedId ? (
          <CompanyList />
        ) : (
          <CompanyEditForm
            congTyId={selectedId}
            onSuccess={() => setSelectedId(null)}
          />
        )}
      </div>
    </div>
  );
}
