"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthWithFetch } from "@/app/dashboard/hooks/useAuth";

export default function Callback() {
  const { userId, fetchAuth, loading, error } = useAuthWithFetch();
  const router = useRouter();

  useEffect(() => {
    fetchAuth(); // Fetch user data using the httpOnly cookie
  }, [fetchAuth]);

  useEffect(() => {
    if (!loading) {
      if (userId) {
        router.push(`/dashboard/${userId}`); // Redirect to dashboard if authenticated
      } else if (error) {
        router.push('/auth/login?error=auth_failed'); // Redirect to login if auth fails
      }
    }
  }, [loading, userId, error, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to your dashboard...</p>
    </div>
  );
}