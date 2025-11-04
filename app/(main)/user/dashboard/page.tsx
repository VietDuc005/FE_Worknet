"use client";

import { Calendar, ListChecks, Kanban } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <p className="text-muted-foreground">
        Đây là không gian làm việc của bạn. Quản lý nhiệm vụ và dự án dễ dàng.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Kanban, label: "Board", description: "Xem công việc theo Kanban" },
          { icon: ListChecks, label: "Danh sách", description: "Quản lý nhiệm vụ chi tiết" },
          { icon: Calendar, label: "Lịch", description: "Theo dõi deadline và sự kiện" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-card rounded-lg border p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}