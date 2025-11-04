"use client";

export default function MemberPage() {
  const members = [
    { id: 1, name: "Nguyễn Văn A", role: "Admin" },
    { id: 2, name: "Trần Thị B", role: "User" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Danh sách Thành viên</h2>
      <table className="w-full border-collapse border border-border">
        <thead>
          <tr className="bg-secondary">
            <th className="border p-2">Tên</th>
            <th className="border p-2">Vai trò</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td className="border p-2">{m.name}</td>
              <td className="border p-2">{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}