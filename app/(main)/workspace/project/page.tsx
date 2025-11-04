"use client";

export default function ProjectPage() {
  const projects = [
    { id: 1, name: "Dự án A", status: "Đang thực hiện" },
    { id: 2, name: "Dự án B", status: "Hoàn thành" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Danh sách Dự án</h2>
      <button className="btn-primary mb-4">+ Tạo dự án mới</button>
      <table className="w-full border-collapse border border-border">
        <thead>
          <tr className="bg-secondary">
            <th className="border p-2">Tên dự án</th>
            <th className="border p-2">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}