"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bảng điều khiển</h2>
      <p>Chào mừng bạn đến với Dashboard! Đây là nơi hiển thị tổng quan dự án và thành viên.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-card rounded shadow">
          <h3 className="font-semibold">Tổng số dự án</h3>
          <p className="text-primary text-xl">5</p>
        </div>
        <div className="p-4 bg-card rounded shadow">
          <h3 className="font-semibold">Tổng số thành viên</h3>
          <p className="text-primary text-xl">12</p>
        </div>
      </div>
    </div>
  );
}