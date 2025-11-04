"use client";

import { useEffect, useState } from "react";

export default function AdminPaymentPage() {
  const [purchaseDate, setPurchaseDate] = useState<string | null>(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("premiumPurchasedAt");
    if (storedDate) {
      const formattedDate = new Date(storedDate).toLocaleString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setPurchaseDate(formattedDate);
    }
  }, []);

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Thông tin thanh toán</h1>
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Gói Premium</h2>
        {purchaseDate ? (
          <p>Đã mua vào: <strong>{purchaseDate}</strong></p>
        ) : (
          <p>Chưa có thông tin mua gói Premium.</p>
        )}
      </div>
    </section>
  );
}