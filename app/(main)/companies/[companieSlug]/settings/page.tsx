"use client";

import { useState } from "react";

export default function CompanySettingsPage() {
  const [name, setName] = useState("CMC Global");
  const [logo, setLogo] = useState("https://via.placeholder.com/80");

  return (
    <div className="p-6 max-w-lg space-y-6">
      <h1 className="text-xl font-semibold">Cài đặt Công ty</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên công ty</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Logo công ty</label>
          <input
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
