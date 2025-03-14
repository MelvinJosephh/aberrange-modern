// src/hooks/useAuth.ts
"use client";

import { create } from "zustand";
import ky from "ky";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { RoleName } from "@/types/role";

interface AuthState {
  user: User | null;
  userId: string | null;
  role: RoleName | null; // Fix: Allow null
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
  credentials: "include",
});

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  userId: null,
  role: null, // Now compatible with RoleName | null
  isAuthenticated: false,
  loading: false,
  error: null,
  setAuth: (user: User) =>
    set({
      user,
      userId: user.id,
      role: user.role,
      isAuthenticated: true,
      loading: false,
      error: null,
    }),
  clearAuth: () =>
    set({
      user: null,
      userId: null,
      role: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    }),
  fetchAuth: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("api/auth/user");
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
    await api.post("api/auth/logout", { credentials: "include" });
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
    let isMounted = true; // Prevent updates after unmount

    if (!auth.isAuthenticated && !auth.loading && isMounted) {
      auth.fetchAuth().catch(() => {
        if (isMounted) {
          const role = localStorage.getItem("role");
          router.push(role === "admin" || role === "superadmin" ? "/auth/admin-login" : "/auth/login");
        }
      });
    }

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [auth.isAuthenticated, auth.loading, auth.fetchAuth, router, auth]); // Dependencies

  return auth;
};