"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/dashboard/hooks/useAuth";

export default function Callback() {
  const router = useRouter();
  const { fetchAuth, userId, loading } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      if (loading) return;

      await fetchAuth(); // Fetch auth state
      if (userId) {
        router.push("/dashboard"); // Redirect to dashboard if authenticated
      } else {
        router.push("/auth/login"); // Redirect to login if not authenticated
      }
    };

    handleCallback();
  }, [fetchAuth, userId, loading, router]);

  return <div>Loading...</div>; // Placeholder while redirecting
}