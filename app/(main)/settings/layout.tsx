"use client"

import React from "react"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mx-4">
        {children}
      </div>
    </div>
  )
}
