"use client";

export default function WorkspacesPage() {
  const workspaces = [
    { id: 1, name: "Workspace 1", members: 5 },
    { id: 2, name: "Workspace 2", members: 8 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Danh sách Workspace</h2>
      <button className="btn-primary mb-4">+ Tạo Workspace mới</button>
      <table className="w-full border-collapse border border-border">
        <thead>
          <tr className="bg-secondary">
            <th className="border p-2">Tên Workspace</th>
            <th className="border p-2">Số thành viên</th>
          </tr>
        </thead>
        <tbody>
          {workspaces.map((ws) => (
            <tr key={ws.id}>
              <td className="border p-2">{ws.name}</td>
              <td className="border p-2">{ws.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
