'use client'; // Required for client-side hooks (useAuthWithFetch, useEffect)

import { useParams } from "next/navigation";
import { useEffect } from "react";

import type { ReactNode } from 'react';
import { useAuthRedirect, useAuthWithFetch } from "../hooks/useAuth";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";
import router from "next/router";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId, loading, status } = useAuthWithFetch();
  const { handleAuthRedirect } = useAuthRedirect();
  const params = useParams();

  useEffect(() => {
    if (!loading) {
      handleAuthRedirect();
      if (userId && params.id !== userId) {
        router.push(`/dashboard/${userId}`);
      }
    }
  }, [loading, userId, status, params.id, router, handleAuthRedirect]);

  if (loading) return <LoadingSpinner />;
  return <div className="min-h-screen bg-gray-100"><main>{children}</main></div>;
}