"use client";

import { useEffect, useState } from "react";
import { getCompanyMembers } from "@/app/services/companyService";
import { User, Mail, Shield, Calendar } from "lucide-react";

interface Member {
  userId: number;
  hoTen: string;
  email: string;
  anhDaiDien: string;
  roleName: string;
  chucVu: string;
  ngayThamGia: string;
  status: string;
}

export default function MemberList({ congTyId }: { congTyId: number }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await getCompanyMembers(congTyId);
      if (res.success && res.data) setMembers(res.data);
    } catch (err) {
      console.error("❌ Lỗi khi tải danh sách thành viên:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [congTyId]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Danh sách thành viên</h2>
      </div>

      {isLoading ? (
        <p className="text-gray-500 text-sm italic">Đang tải dữ liệu...</p>
      ) : members.length === 0 ? (
        <p className="text-gray-500 italic">Chưa có thành viên nào.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 text-left">Họ và tên</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Vai trò</th>
                <th className="px-4 py-2 text-left">Ngày tham gia</th>
                <th className="px-4 py-2 text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr
                  key={m.userId}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    {m.hoTen}
                  </td>
                  <td className="px-4 py-2 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Mail className="w-4 h-4 text-gray-400" /> {m.email}
                  </td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    {m.roleName}
                  </td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {new Date(m.ngayThamGia).toLocaleDateString("vi-VN")}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        m.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
