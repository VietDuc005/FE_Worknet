"use client";

export default function CompanyDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Bảng điều khiển công ty</h1>
      <p className="text-muted-foreground">
        Đây là tổng quan hoạt động của công ty, các workspace và tiến độ dự án.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm text-muted-foreground">Tổng dự án</h3>
          <p className="text-3xl font-semibold mt-2">12</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm text-muted-foreground">Thành viên</h3>
          <p className="text-3xl font-semibold mt-2">24</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm text-muted-foreground">Công việc hoàn thành</h3>
          <p className="text-3xl font-semibold mt-2">156</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm text-muted-foreground">Hiệu suất</h3>
          <p className="text-3xl font-semibold mt-2 text-green-600">87%</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="font-semibold mb-4">Hoạt động gần đây</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>✅ Dự án "CRM System" đã hoàn thành.</li>
          <li>👤 Nguyễn Văn A được thêm vào workspace "Development".</li>
          <li>🗓️ Tạo dự án mới "AI Research 2025".</li>
        </ul>
      </div>
    </div>
  );
}
