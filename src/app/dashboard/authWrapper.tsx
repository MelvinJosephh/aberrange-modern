"use client";


import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./Shared/LoadingSpinner";
import { useAuthWithFetch } from "./hooks/useAuth";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading, status } = useAuthWithFetch();
  const router = useRouter();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    router.push("/auth/login");
    return null;
  }

  if (status === "inactive") {
    router.push("/auth/inactive");
    return null;
  }

  return <>{children}</>;
}