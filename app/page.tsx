"use client"

import { useState } from "react"
import { ArrowRight, Check, Users, Zap, Shield, Star, Menu, X } from "lucide-react"
import AuthModal from "@/components/features/(auth)/AuthModal"

export default function LandingPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const features = [
    { icon: Users, title: "Cộng tác nhóm", desc: "Làm việc cùng nhau hiệu quả hơn" },
    { icon: Zap, title: "Tự động hóa", desc: "Tiết kiệm thời gian với quy trình tự động" },
    { icon: Shield, title: "Bảo mật cao", desc: "Dữ liệu được mã hóa và an toàn tuyệt đối" },
  ]

  const plans = [
    {
      name: "Miễn Phí",
      price: "0",
      period: "mãi mãi",
      desc: "Hoàn hảo để bắt đầu",
      features: ["Tối đa 5 thành viên", "3 dự án", "1 GB lưu trữ", "Hỗ trợ cơ bản"],
      popular: false,
    },
    {
      name: "Pro",
      price: "199,000",
      period: "tháng",
      desc: "Cho các đội nhóm chuyên nghiệp",
      features: ["Không giới hạn thành viên", "Không giới hạn dự án", "100 GB lưu trữ", "Hỗ trợ ưu tiên 24/7"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      period: "",
      desc: "Giải pháp doanh nghiệp",
      features: ["Tùy chỉnh hoàn toàn", "Bảo mật nâng cao", "Lưu trữ không giới hạn", "Quản lý tài khoản chuyên biệt"],
      popular: false,
    },
  ]

  const testimonials = [
    { name: "Nguyễn Văn A", role: "CEO, TechCorp", text: "WorkNet đã giúp đội của tôi tăng năng suất 40%!", avatar: "🧑‍💼" },
    { name: "Trần Thị B", role: "Project Manager", text: "Công cụ tuyệt vời nhất tôi từng sử dụng.", avatar: "👩‍💼" },
    { name: "Lê Văn C", role: "Startup Founder", text: "Dễ sử dụng và cực kỳ hiệu quả!", avatar: "👨‍💻" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm shadow-lg">
                WN
              </div>
              <span className="text-gray-900">WorkNet</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button className="text-gray-600 hover:text-gray-900 font-medium transition">Tính năng</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium transition">Giá cả</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium transition">Về chúng tôi</button>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsAuthOpen(true)}
                className="px-5 py-2 text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Đăng Nhập
              </button>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Bắt Đầu Ngay
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Tính năng</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Giá cả</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Về chúng tôi</button>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                Đăng Nhập
              </button>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold"
              >
                Bắt Đầu Ngay
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Được hơn 10,000 đội nhóm tin dùng
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Quản lý dự án{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              chưa bao giờ dễ dàng đến thế
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            WorkNet giúp bạn tổ chức công việc, theo dõi tiến độ và cộng tác với đội nhóm một cách hiệu quả nhất.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Dùng thử miễn phí 14 ngày
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-gray-400 hover:shadow-lg transition-all">
              Xem demo
            </button>
          </div>

          {/* Trust Indicators */}
          <p className="text-sm text-gray-500 mt-6">
            ✓ Không cần thẻ tín dụng  •  ✓ Hủy bất cứ lúc nào  •  ✓ Hỗ trợ 24/7
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn WorkNet?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp mọi thứ bạn cần để quản lý dự án thành công
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gói dịch vụ phù hợp với mọi quy mô
            </h2>
            <p className="text-xl text-gray-600">
              Bắt đầu miễn phí, nâng cấp khi cần
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 ${
                  plan.popular ? "border-2 border-blue-500 md:-mt-4 md:mb-4" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                    Phổ biến nhất
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    {plan.price === "Liên hệ" ? (
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}₫</span>
                        <span className="text-gray-600 mb-2">/{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsAuthOpen(true)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.price === "Liên hệ" ? "Liên hệ ngay" : "Bắt đầu ngay"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hàng nghìn người dùng hài lòng trên toàn quốc
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Sẵn sàng bắt đầu chưa?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tham gia hàng nghìn đội nhóm đang sử dụng WorkNet ngay hôm nay
            </p>
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Dùng thử miễn phí 14 ngày
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-blue-100 mt-4">
              Không cần thẻ tín dụng • Hủy bất cứ lúc nào
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm">
                  WN
                </div>
                WorkNet
              </div>
              <p className="text-gray-400 text-sm">
                Nền tảng quản lý dự án hàng đầu Việt Nam
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Tính năng</button></li>
                <li><button className="hover:text-white transition">Giá cả</button></li>
                <li><button className="hover:text-white transition">Bảo mật</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Về chúng tôi</button></li>
                <li><button className="hover:text-white transition">Blog</button></li>
                <li><button className="hover:text-white transition">Tuyển dụng</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Trung tâm trợ giúp</button></li>
                <li><button className="hover:text-white transition">Liên hệ</button></li>
                <li><button className="hover:text-white transition">Điều khoản</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 WorkNet. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="text-gray-400 hover:text-white transition">Facebook</button>
              <button className="text-gray-400 hover:text-white transition">Twitter</button>
              <button className="text-gray-400 hover:text-white transition">LinkedIn</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  )
}