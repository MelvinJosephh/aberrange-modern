// dashboard/hooks/useAuth.ts
"use client";

import { create } from "zustand";
import ky from "ky";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { RoleName } from "@/types/role";

interface AuthState {
  user: User | null;
  userId: string | null; // Add userId
  role: RoleName | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
  fetchAuth: () => Promise<void>;
  logout: () => Promise<void>;
  hasRole: (requiredRole: RoleName) => boolean;
}

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  userId: null, // Initialize userId
  role: (localStorage.getItem("role") as RoleName) || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
  setAuth: (user: User) =>
    set({
      user,
      userId: user.id, // Set userId from user object
      role: user.role,
      isAuthenticated: true,
      loading: false,
      error: null,
    }),
  clearAuth: () =>
    set({
      user: null,
      userId: null, // Clear userId
      role: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    }),
  fetchAuth: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("auth/user");
      const user: User = await response.json();
      localStorage.setItem("role", user.role);
      set({ user, userId: user.id, role: user.role, isAuthenticated: true, loading: false });
    } catch (error) {
      localStorage.removeItem("role");
      set({ loading: false, isAuthenticated: false, error: "Authentication failed" });
      throw error;
    }
  },
  logout: async () => {
    await api.post("auth/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    get().clearAuth();
    window.location.href = "/auth/login";
  },
  hasRole: (requiredRole: RoleName) => get().role === requiredRole,
}));

export const useAuthWithFetch = () => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!auth.isAuthenticated && !auth.loading) {
      auth.fetchAuth().catch(() => {
        const role = localStorage.getItem("role");
        router.push(role === "admin" || role === "superadmin" ? "/auth/admin-login" : "/auth/login");
      });
    }
  }, [auth, router]);
  return auth;
};