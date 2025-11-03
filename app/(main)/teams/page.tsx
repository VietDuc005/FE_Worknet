"use client"

import { Plus, Search, Trash2, Shield } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: "Nhóm Thiết kế",
      description: "Nhóm thiết kế UI/UX",
      members: [
        { id: 1, name: "Alice Johnson", role: "Trưởng nhóm Thiết kế", avatar: "AJ" },
        { id: 2, name: "Bob Smith", role: "Nhà thiết kế", avatar: "BS" },
        { id: 3, name: "Carol White", role: "Nhà thiết kế", avatar: "CW" },
      ],
      memberCount: 3,
    },
    {
      id: 2,
      name: "Nhóm Phát triển",
      description: "Phát triển Backend & Frontend",
      members: [
        { id: 4, name: "David Brown", role: "Trưởng nhóm Công nghệ", avatar: "DB" },
        { id: 5, name: "Emma Wilson", role: "Nhà phát triển Frontend", avatar: "EW" },
        { id: 6, name: "Frank Miller", role: "Nhà phát triển Backend", avatar: "FM" },
        { id: 7, name: "Grace Lee", role: "Nhà phát triển Backend", avatar: "GL" },
      ],
      memberCount: 4,
    },
    {
      id: 3,
      name: "Nhóm Tiếp thị",
      description: "Tiếp thị & Tăng trưởng",
      members: [
        { id: 8, name: "Henry Davis", role: "Quản lý Tiếp thị", avatar: "HD" },
        { id: 9, name: "Iris Taylor", role: "Chuyên gia Nội dung", avatar: "IT" },
      ],
      memberCount: 2,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Nhóm</h1>
          <p className="text-muted-foreground">Quản lý các nhóm và thành viên của bạn</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
          <Plus className="w-5 h-5" />
          Nhóm Mới
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Tìm kiếm nhóm..."
          className="bg-transparent px-2 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none flex-1"
        />
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition">
            <div className="space-y-4">
              {/* Team Header */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{team.name}</h3>
                <p className="text-sm text-muted-foreground">{team.description}</p>
              </div>

              {/* Members */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Thành viên ({team.memberCount})</h4>
                <div className="space-y-2">
                  {team.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold flex items-center justify-center">
                          {member.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-secondary rounded transition text-muted-foreground hover:text-foreground">
                          <Shield className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-destructive/10 rounded transition text-muted-foreground hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Member Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium text-foreground">
                <Plus className="w-4 h-4" />
                Thêm Thành viên
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
