"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, FolderOpen, CheckCircle } from "lucide-react"

const data = [
  { name: "Thứ 2", tasks: 40, completed: 24 },
  { name: "Thứ 3", tasks: 30, completed: 13 },
  { name: "Thứ 4", tasks: 20, completed: 9 },
  { name: "Thứ 5", tasks: 27, completed: 15 },
  { name: "Thứ 6", tasks: 18, completed: 10 },
  { name: "Thứ 7", tasks: 23, completed: 11 },
  { name: "Chủ nhật", tasks: 34, completed: 20 },
]

const pieData = [
  { name: "Hoàn thành", value: 400 },
  { name: "Đang tiến hành", value: 300 },
  { name: "Chờ xử lý", value: 200 },
]

const COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6"]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bảng điều khiển</h1>
        <p className="text-muted-foreground">Đây là những gì đang xảy ra với các dự án của bạn hôm nay</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: FolderOpen,
            label: "Tổng Dự án",
            value: "12",
            change: "+2 tháng này",
          },
          {
            icon: Users,
            label: "Thành viên Nhóm",
            value: "24",
            change: "+3 tháng này",
          },
          {
            icon: CheckCircle,
            label: "Công việc Hoàn thành",
            value: "156",
            change: "+28 tuần này",
          },
          {
            icon: TrendingUp,
            label: "Năng suất",
            value: "87%",
            change: "+5% từ tuần trước",
          },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className="text-xs text-accent mt-2">{stat.change}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Activity */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Hoạt động Hàng tuần</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="tasks" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Công việc" />
              <Bar dataKey="completed" fill="#06b6d4" radius={[8, 8, 0, 0]} name="Hoàn thành" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Task Distribution */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Phân bổ Công việc</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Dự án Gần đây</h2>
        <div className="space-y-3">
          {[
            {
              name: "Thiết kế lại Ứng dụng Di động",
              progress: 75,
              members: 5,
              due: "15 tháng 12, 2024",
            },
            {
              name: "Di chuyển Trang web",
              progress: 45,
              members: 3,
              due: "10 tháng 1, 2025",
            },
            {
              name: "Phát triển API",
              progress: 90,
              members: 4,
              due: "5 tháng 12, 2024",
            },
            {
              name: "Cải tiến Bảng điều khiển",
              progress: 30,
              members: 2,
              due: "20 tháng 1, 2025",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary transition border border-border/50"
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{project.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{project.members} thành viên</span>
                  <span>Hạn: {project.due}</span>
                </div>
              </div>
              <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="ml-4 text-sm font-medium text-foreground">{project.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
