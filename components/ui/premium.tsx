"use client";

import { useRouter } from "next/navigation";
export default function PremiumPlans({ onSelectPlan }: { onSelectPlan?: (plan: 'free' | 'premium') => void }) {
  const router = useRouter();
  const plans = [
    {
      name: 'Free',
      key: 'free',
      price: '0₫',
      description: 'Dành cho cá nhân hoặc nhóm nhỏ bắt đầu sử dụng.',
      features: ['Quản lý dự án cơ bản', 'Tối đa 3 thành viên', 'Không giới hạn nhiệm vụ', 'Hỗ trợ qua email'],
      buttonText: 'Bắt đầu miễn phí',
      buttonStyle: 'btn-secondary',
      
    },
    {
      name: 'Premium',
      key: 'premium',
      price: '199.000₫ / tháng',
      description: 'Dành cho nhóm chuyên nghiệp cần tính năng nâng cao.',
      features: ['Không giới hạn thành viên', 'Tích hợp lịch & timeline', 'Báo cáo & phân tích nâng cao', 'Hỗ trợ 24/7'],
      buttonText: 'Nâng cấp ngay',
      buttonStyle: 'btn-primary',
      highlight: true,
    },
  ];

  

 const handleSelect = (plan: "free" | "premium") => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
    if (plan === "free") {
      router.push("/workspace/dashboard");
    } else {
      router.push("/admin/dashboard");
    }
  };


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground">Chọn gói phù hợp với bạn</h2>
        <p className="text-muted-foreground mt-2">Linh hoạt cho mọi quy mô nhóm, từ cá nhân đến doanh nghiệp.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border border-border bg-card hover:shadow-lg transition relative ${
              plan.highlight ? 'ring-2 ring-primary' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
            <ul className="space-y-2 text-left mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-primary">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => handleSelect(plan.key as "free" | "premium")}
              className={`${plan.buttonStyle} w-full block text-center`}
            >

              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}