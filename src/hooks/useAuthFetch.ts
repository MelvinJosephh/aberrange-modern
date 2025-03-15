// src/hooks/useAuthFetch.ts
"use client";

import ky from "ky";
import { useAuth } from "./useAuth";

// Define an interface for the expected error response shape
interface ErrorResponse {
  message?: string; // Optional, since the backend might not always provide it
}

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  credentials: "include",
});

export const useAuthFetch = () => {
  const auth = useAuth();

  const fetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
      const response = await api(url, {
        method: options?.method || "GET",
        ...(options?.body && { json: JSON.parse(options.body.toString()) }),
        throwHttpErrors: false, // Handle errors manually
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          auth.clearAuth();
          const redirectPath = auth.role === "admin" || auth.role === "superadmin" ? "/auth/admin-login" : "/auth/login";
          window.location.href = redirectPath;
          throw new Error("Unauthorized");
        }

        // Type the error response
        const errorData = (await response.json()) as ErrorResponse;
        throw new Error(errorData.message || "Request failed");
      }

      return response.json() as Promise<T>;
    } catch (error) {
      throw error instanceof Error ? error : new Error("Unknown error");
    }
  };

  return { fetch, isAuthenticated: auth.isAuthenticated, loading: auth.loading };
};