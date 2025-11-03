import Link from "next/link"
import { ArrowRight, Zap, Users, TrendingUp, Lock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold">
              WN
            </div>
            <span>WorkNet</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-foreground hover:text-primary font-medium transition">
              Đăng Nhập
            </Link>
            <Link href="/register" className="btn-primary">
              Bắt Đầu
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Nền tảng toàn diện để{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              quản lý các dự án của bạn
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bộ công cụ dành cho nhóm của bạn để dừng cấu hình và bắt đầu sáng tạo. Xây dựng, triển khai và mở rộng quy
            mô các dự án tốt nhất của bạn một cách an toàn với WorkNet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
              Bắt đầu miễn phí
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary">Khám phá Sản phẩm</button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
            {[
              { value: "10K+", label: "Nhóm Hoạt động" },
              { value: "99.9%", label: "Thời gian hoạt động" },
              { value: "24/7", label: "Hỗ trợ" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Mọi thứ bạn cần</h2>
            <p className="text-muted-foreground mt-2">Các tính năng mạnh mẽ được xây dựng cho các nhóm hiện đại</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Cực nhanh",
                description: "Được xây dựng cho tốc độ với cộng tác thời gian thực",
              },
              {
                icon: Users,
                title: "Cộng tác Nhóm",
                description: "Làm việc cùng nhau liền mạch trên các dự án",
              },
              {
                icon: TrendingUp,
                title: "Phân tích & Thông tin",
                description: "Theo dõi tiến độ với các công cụ báo cáo mạnh mẽ",
              },
              {
                icon: Lock,
                title: "Bảo mật Doanh nghiệp",
                description: "Mã hóa cấp ngân hàng và tuân thủ",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng chuyển đổi quy trình làm việc của bạn?</h2>
          <p className="text-blue-100 mb-8 text-lg">Tham gia hàng ngàn nhóm đang sử dụng WorkNet</p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Bắt đầu Dùng thử Miễn phí
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-cyan-400 text-white flex items-center justify-center text-xs font-bold">
                WN
              </div>
              <span>WorkNet</span>
            </div>
            <p className="text-white/60 text-sm">Quản lý dự án hiện đại cho các nhóm</p>
          </div>
          {[
            { title: "Sản phẩm", links: ["Tính năng", "Giá cả", "Bảo mật"] },
            { title: "Công ty", links: ["Giới thiệu", "Blog", "Việc làm"] },
            { title: "Tài nguyên", links: ["Tài liệu", "API", "Hỗ trợ"] },
          ].map((col, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2025 WorkNet. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  )
}
