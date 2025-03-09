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
}

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
      email: email ?? null, // Ensure undefined becomes null
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
    const { loading, isAuthenticated } = get();
    if (loading || isAuthenticated) return;

    set({ loading: true, error: null });
    try {
      const api = ky.create({
        prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        credentials: "include",
      });
      const response = await api.get("auth/user");
      const data: UserData = await response.json();
      const { id, role, email, status, name } = data;
      // Validate role against Role type
      const validRole = ["client", "va", "admin", "superadmin"].includes(role)
        ? (role as Role)
        : null;
      set({
        role: validRole,
        userId: id,
        email: email ?? null, // Ensure undefined becomes null
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
    }
  },
}));

export const useAuthWithFetch = () => {
  const auth = useAuth();
  useEffect(() => {
    if (!auth.isAuthenticated) auth.fetchAuth();
  }, [auth]);
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