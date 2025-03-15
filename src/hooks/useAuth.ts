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
  role: RoleName | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
  fetchAuth: () => Promise<void>;
  logout: (redirectToAdminLogin?: boolean) => Promise<void>;
  hasRole: (requiredRole: RoleName) => boolean;
}

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  credentials: "include",
});

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  userId: null,
  role: null,
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
      const response = await api.get("api/user");
      const user: User = await response.json();
      set({ user, userId: user.id, role: user.role, isAuthenticated: true, loading: false });
    } catch (error) {
      set({ loading: false, isAuthenticated: false, error: "Authentication failed" });
      throw error;
    }
  },
  logout: async (redirectToAdminLogin = false) => {
    try {
      await api.post("api/auth/logout", { credentials: "include" });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      get().clearAuth();
      // Redirect based on whether the user should go to admin login (for admin/superadmin) or client login
      const redirectPath = redirectToAdminLogin ? "/auth/admin-login" : "/auth/login";
      window.location.href = redirectPath;
    }
  },
  hasRole: (requiredRole: RoleName) => get().role === requiredRole,
}));

export const useAuthWithFetch = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    if (!auth.isAuthenticated && !auth.loading && isMounted) {
      auth.fetchAuth().catch(() => {
        if (isMounted) {
          router.push(auth.role === "admin" || auth.role === "superadmin" ? "/auth/admin-login" : "/auth/login");
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [auth.isAuthenticated, auth.loading, auth.fetchAuth, auth.role, router]);

  return auth;
};