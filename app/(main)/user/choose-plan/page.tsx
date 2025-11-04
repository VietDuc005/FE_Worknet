"use client";

import { useState } from "react";
import PremiumPlans from "@/components/ui/premium";
import CompanyCreateForm from "@/components/features/company/CompanyCreateForm";
import { useRouter } from "next/navigation";

export default function ChoosePlanPage() {
  const router = useRouter();
  const [step, setStep] = useState<"choose" | "createCompany">("choose"); // ✅ 2 bước

  // 🧩 Khi chọn gói
  const handleSelectPlan = (plan: "free" | "premium") => {
    if (plan === "free") {
      router.push("/user/dashboard"); // free -> sang user dashboard
    } else {
      setStep("createCompany"); // ✅ Premium -> hiển thị form tạo công ty
    }
  };

  // 🧩 Khi tạo công ty thành công (backend tự đổi role ADMIN)
  const handleCompanyCreated = () => {
    alert("🎉 Tạo công ty thành công! Bạn hiện là ADMIN.");
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      {step === "choose" && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Chọn gói dịch vụ
          </h1>
          <PremiumPlans onSelectPlan={handleSelectPlan} />
        </>
      )}

      {step === "createCompany" && (
        <div className="w-full max-w-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
            Tạo công ty của bạn (Gói Premium)
          </h2>
          <CompanyCreateForm onSuccess={handleCompanyCreated} />

          <button
            onClick={() => setStep("choose")}
            className="block mx-auto mt-4 text-sm text-blue-600 hover:underline"
          >
            ← Quay lại chọn gói
          </button>
        </div>
      )}
    </div>
  );
}
