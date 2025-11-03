export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "admin" | "manager" | "member" | "viewer"
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
  confirmPassword: string
}

export interface ForgotPasswordRequest {
  email: string
}
