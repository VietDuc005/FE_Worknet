// app/(auth)/login/page.tsx
"use client"
import AuthModal from "@/components/ui/AuthModal"
export default function LoginPage() {
  return <AuthModal isOpen={true} onClose={() => (window.location.href = "/")} />
}
