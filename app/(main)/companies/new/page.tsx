"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewCompanyPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔧 API mock
    await new Promise((r) => setTimeout(r, 1000));
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    router.push(`/companies/${slug}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Tạo công ty của bạn</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tên công ty</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="VD: CMC Global"
              className="w-full rounded-lg border border-border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Logo (tùy chọn)</label>
            <input
              type="text"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              placeholder="https://example.com/logo.png"
              className="w-full rounded-lg border border-border px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
          >
            {loading ? "Đang tạo..." : "Tạo công ty"}
          </button>
        </form>
      </div>
    </div>
  );
}
