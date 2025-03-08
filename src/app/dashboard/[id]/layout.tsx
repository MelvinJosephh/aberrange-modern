'use client'; // Required for client-side hooks (useAuthWithFetch, useEffect)

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

import type { ReactNode } from 'react';
import { useAuthRedirect, useAuthWithFetch } from "../hooks/useAuth";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId, loading, error, status } = useAuthWithFetch();
  const { handleAuthRedirect } = useAuthRedirect();
  const router = useRouter();
  const params = useParams();

  // Redirect if not authenticated or account is inactive
  useEffect(() => {
    // Check authentication
    handleAuthRedirect(loading || !!error || !userId);

    // Verify the [id] matches the authenticated userId
    if (!loading && userId && params.id !== userId) {
      router.push(`/dashboard/${userId}`);
    }

    // Redirect if account is inactive
    if (!loading && status === "inactive") {
      router.push('/auth/inactive');
    }
  }, [loading, error, userId, status, params.id, router, handleAuthRedirect]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Add shared UI like a header or sidebar here */}
      <main>{children}</main>
    </div>
  );
}