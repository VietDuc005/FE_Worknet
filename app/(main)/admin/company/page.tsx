"use client";

export default function CompanyPage() {
  const companies = [
    { id: 1, name: "CMC Global", members: 120 },
    { id: 2, name: "FPT Software", members: 300 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Danh sách Công ty</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Thêm Công ty
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {companies.map((c) => (
          <div key={c.id} className="border rounded-lg p-4 bg-card hover:shadow transition">
            <h3 className="font-medium">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.members} thành viên</p>
          </div>
        ))}
      </div>
    </div>
  );
}