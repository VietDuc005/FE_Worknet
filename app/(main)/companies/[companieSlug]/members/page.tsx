"use client";

export default function MembersPage() {
  const members = [
    { id: 1, name: "Nguyễn Văn A", role: "Admin" },
    { id: 2, name: "Trần Thị B", role: "Member" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Thành viên công ty</h1>

      <div className="space-y-3">
        {members.map((m) => (
          <div
            key={m.id}
            className="flex justify-between items-center border border-border rounded-lg p-3 bg-card"
          >
            <span>{m.name}</span>
            <span className="text-sm text-muted-foreground">{m.role}</span>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
        + Mời thành viên mới
      </button>
    </div>
  );
}
