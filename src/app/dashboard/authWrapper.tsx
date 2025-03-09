"use client";

import { ReactNode, useEffect } from "react";
import { useAuthWithFetch } from "./hooks/useAuth";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";
import { redirect } from "next/navigation";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { userId, loading, error, fetchAuth } = useAuthWithFetch();

  useEffect(() => {
    if (!loading && (!userId || error)) {
      console.log("Retrying authentication due to:", error || "No userId");
      fetchAuth(); // Retry once if initial fetch fails
    }
  }, [loading, userId, error, fetchAuth]);

  if (loading) return <LoadingSpinner />;
  if (!userId || error) {
    console.error("Redirecting to login due to:", error || "No userId");
    redirect("/auth/login");
  }

  return <>{children}</>;
}