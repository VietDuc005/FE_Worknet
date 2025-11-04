"use client";

import { useRouter } from "next/navigation";

export default function WorkspacesPage() {
  const router = useRouter();

  const workspaces = [
    { id: 1, name: "Marketing", projects: 5 },
    { id: 2, name: "Development", projects: 12 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Danh sách Workspaces</h2>
        <button
          onClick={() => router.push("/workspaces/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Tạo Workspace
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workspaces.map((ws) => (
          <div
            key={ws.id}
            className="border border-border rounded-xl p-4 bg-card hover:shadow transition"
          >
            <h3 className="font-medium">{ws.name}</h3>
            <p className="text-sm text-muted-foreground">{ws.projects} dự án</p>
          </div>
        ))}
      </div>
    </div>
  );
}
