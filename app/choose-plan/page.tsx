"use client";

import PremiumPlans from "@/components/ui/premium";
import { useRouter } from "next/navigation";

export default function ChoosePlanPage() {
  const router = useRouter();

  const handleSelectPlan = (plan: "free" | "premium") => {
    if (plan === "free") {
      router.push("/workspace/dashboard");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Chọn gói dịch vụ</h1>
      <PremiumPlans onSelectPlan={handleSelectPlan} />
    </div>
  );
}