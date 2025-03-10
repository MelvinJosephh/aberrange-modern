"use client";

import { create } from "zustand";
import ky from "ky";
import { useEffect } from "react";
import { Role, UserData } from "../types/auth";
import { useRouter } from "next/navigation";

interface AuthState {
  role: string | null;
  userId: string | null;
  email: string | null;
  status: string | null;
  name: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setAuth: (role: Role, userId: string, email?: string | null, status?: string | null, name?: string | null) => void;
  clearAuth: () => void;
  fetchAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  credentials: "include", // Ensure cookies are sent with requests
});

export const useAuth = create<AuthState>((set, get) => ({
  role: null,
  userId: null,
  email: null,
  status: null,
  name: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  setAuth: (role, userId, email, status, name) =>
    set({
      role,
      userId,
      email: email ?? null,
      status: status ?? null,
      name: name ?? null,
      isAuthenticated: true,
      loading: false,
      error: null,
    }),

  clearAuth: () =>
    set({
      role: null,
      userId: null,
      email: null,
      status: null,
      name: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    }),

  fetchAuth: async () => {
    const { loading } = get();
    if (loading) return; // Prevent concurrent fetches

    set({ loading: true, error: null });
    try {
      const response = await api.get("auth/user");
      const data: UserData = await response.json();
      const { id, role, email, status, name } = data;
      const validRole = ["client", "va", "admin", "superadmin"].includes(role)
        ? (role as Role)
        : null;
      set({
        role: validRole,
        userId: id,
        email: email ?? null,
        status: status ?? null,
        name: name ?? null,
        isAuthenticated: validRole !== null,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        isAuthenticated: false,
        error: error instanceof Error ? error.message : "Authentication failed",
      });
      throw error; // Re-throw to allow callers to handle redirect
    }
  },

  logout: async () => {
    try {
      await api.post("auth/logout");
      get().clearAuth();
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  },
}));

export const useAuthWithFetch = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Fetch auth state on mount if not already authenticated or loading
    if (!auth.isAuthenticated && !auth.loading) {
      auth.fetchAuth().catch(() => {
        router.push("/auth/login"); // Redirect if fetch fails (e.g., no token)
      });
    }
  }, [auth, router]);

  return auth;
};

export const useAuthRedirect = () => {
  const router = useRouter();
  const { isAuthenticated, status } = useAuth();

  const handleAuthRedirect = () => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    } else if (status === "inactive") {
      router.push("/auth/inactive");
    }
  };

  return { handleAuthRedirect };
};