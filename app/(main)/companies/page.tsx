"use client";

import { useRouter } from "next/navigation";
import { Building2, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Company {
  id: number;
  name: string;
  description: string;
  members: number;
  createdAt: string;
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const router = useRouter();

  useEffect(() => {
    // 🔹 Giả lập dữ liệu công ty (có thể thay bằng API sau)
    const mock = [
      {
        id: 1,
        name: "CMC Global",
        description: "Công ty phần mềm và dịch vụ CNTT hàng đầu",
        members: 12,
        createdAt: "20/10/2024",
      },
    ];
    setCompanies(mock);
  }, []);

  const handleCreateCompany = () => {
    router.push("/companies/new");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Công ty của bạn</h1>
        <p className="text-muted-foreground">
          Quản lý thông tin và không gian làm việc của công ty bạn.
        </p>
      </div>

      {/* Nếu chưa có công ty */}
      {companies.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-border rounded-xl bg-card/50">
          <Building2 className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">
            Bạn chưa có công ty nào. Hãy tạo công ty đầu tiên!
          </p>
          <button
            onClick={handleCreateCompany}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <PlusCircle className="w-4 h-4" /> Tạo công ty mới
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition cursor-pointer"
              onClick={() => router.push(`/companies/${company.id}`)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {company.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {company.members} thành viên
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {company.description}
              </p>
              <p className="text-xs text-muted-foreground">
                Ngày tạo: {company.createdAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
