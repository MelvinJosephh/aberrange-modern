// Server Component (no 'use client' needed)
import { ReactNode } from "react";
import { useAuthWithFetch } from "./hooks/useAuth";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";
import Header from "./components/Shared/Header";
import { redirect } from "next/navigation";
import { AppSidebar } from "./components/Shared/AppSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId, loading, error } = useAuthWithFetch();

  if (loading) return <LoadingSpinner />;
  if (!userId || error) redirect("/auth/login");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}