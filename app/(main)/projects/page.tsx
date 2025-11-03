"use client"

import { Plus, Search, Filter, Grid, List } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const projects = [
    {
      id: 1,
      name: "Thiết kế lại Ứng dụng Di động",
      description: "Thiết kế lại giao diện ứng dụng di động",
      status: "in_progress",
      progress: 75,
      members: 5,
      dueDate: "2024-12-15",
      team: "Nhóm Thiết kế",
    },
    {
      id: 2,
      name: "Di chuyển Trang web",
      description: "Di chuyển trang web sang nền tảng mới",
      status: "in_progress",
      progress: 45,
      members: 3,
      dueDate: "2025-01-10",
      team: "Phát triển",
    },
    {
      id: 3,
      name: "Phát triển API",
      description: "Xây dựng các điểm cuối REST API mới",
      status: "in_progress",
      progress: 90,
      members: 4,
      dueDate: "2024-12-05",
      team: "Backend",
    },
    {
      id: 4,
      name: "Cải tiến Bảng điều khiển",
      description: "Thêm các tính năng phân tích mới",
      status: "planning",
      progress: 30,
      members: 2,
      dueDate: "2025-01-20",
      team: "Frontend",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dự án</h1>
          <p className="text-muted-foreground">Quản lý các dự án và nhóm của bạn</p>
        </div>
        <Link
          href="/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
        >
          <Plus className="w-5 h-5" />
          Dự án Mới
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 flex-1 bg-secondary rounded-lg px-3">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            className="bg-transparent px-2 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none w-full"
          />
        </div>
        <button className="p-2 hover:bg-secondary rounded-lg transition">
          <Filter className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex gap-2 border-l border-border pl-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition overflow-hidden"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 rounded bg-secondary text-foreground text-xs">{project.team}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status === "in_progress" ? "Đang tiến hành" : "Lập kế hoạch"}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>{project.members} thành viên</span>
                  <span>Hạn: {new Date(project.dueDate).toLocaleDateString("vi-VN")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Dự án</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Nhóm</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Trạng thái</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Tiến độ</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-foreground">Ngày hạn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-secondary transition cursor-pointer">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{project.team}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status === "in_progress" ? "Đang tiến hành" : "Lập kế hoạch"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground w-8">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(project.dueDate).toLocaleDateString("vi-VN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
