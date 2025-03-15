// src/app/admin/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";
import { RoleName } from "@/types/role";
import AdminSidebar from "./components/AdminSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { role, isAuthenticated, loading } = useAuthWithFetch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) {
      window.history.replaceState(null, "", "/auth/admin-login");
      router.replace("/auth/admin-login");
    } else if (role !== "admin") {
      const redirectPath = getRedirectPath(role ?? "unknown");
      window.history.replaceState(null, "", redirectPath);
      router.replace(redirectPath);
    }
  }, [isAuthenticated, role, router, loading]);

  const getRedirectPath = (role: RoleName | "unknown") => {
    switch (role) {
      case "client":
        return "/client/dashboard";
      case "va":
        return "/va/dashboard";
      case "superadmin":
        return "/superadmin/dashboard";
      default:
        return "/auth/admin-login";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || role !== "admin") {
    return null;
  }

  return (
    <>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate, private"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar Toggle Button for Mobile */}
        <Button
          variant="outline"
          size="icon"
          className="sm:hidden fixed top-4 left-4 z-20"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } sm:block w-64 fixed inset-y-0 left-0 z-10 bg-white border-r transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:static sm:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          <ScrollArea className="h-[calc(100vh-6rem)]">
            {children}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}