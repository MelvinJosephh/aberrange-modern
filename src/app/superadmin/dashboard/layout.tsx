// src/app/superadmin/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import AdminSidebar from "./components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";
import { RoleName } from "@/types/role";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SuperadminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { role, isAuthenticated, loading } = useAuthWithFetch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    console.log("SuperadminLayout useEffect:", { loading, isAuthenticated, role });
    if (loading) return;
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to /auth/admin-login");
      window.history.replaceState(null, "", "/auth/admin-login");
      router.replace("/auth/admin-login");
    } else if (role !== "superadmin") {
      const redirectPath = getRedirectPath(role ?? "unknown");
      console.log("Wrong role, redirecting to:", redirectPath);
      window.history.replaceState(null, "", redirectPath);
      router.replace(redirectPath);
    }
  }, [isAuthenticated, role, router, loading]);

  const getRedirectPath = (role: RoleName | "unknown") => {
    switch (role) {
      case "client": return "/client/dashboard";
      case "va": return "/va/dashboard";
      case "admin": return "/admin/dashboard";
      default: return "/auth/admin-login";
    }
  };

  if (loading) {
    console.log("SuperadminLayout: Rendering loading state");
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || role !== "superadmin") {
    console.log("SuperadminLayout: Not rendering dashboard, conditions failed:", { isAuthenticated, role });
    return null;
  }

  console.log("SuperadminLayout: Rendering dashboard");
  return (
    <>
      <Head>
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, private" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>
      <div className="flex flex-col sm:flex-row min-h-screen bg-gray-50">
        <Button
          variant="outline"
          size="icon"
          className="sm:hidden m-4 self-start"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        <div
          className={`${sidebarOpen ? "block" : "hidden"} sm:block w-full sm:w-64 absolute sm:static top-0 left-0 z-10 bg-white sm:bg-transparent border-r sm:border-r shadow-sm sm:shadow-none`}
        >
          <AdminSidebar />
        </div>
        <div className="flex-1 p-4 sm:p-6">
          <ScrollArea className="h-[calc(100vh-6rem)]">
            {children}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}