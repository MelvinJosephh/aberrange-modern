// src/app/client/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Sidebar from "./components/ClientSidebar"; // Renamed to match your file
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";
import { RoleName } from "@/types/role";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { role, isAuthenticated, loading } = useAuthWithFetch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    console.log("ClientLayout useEffect:", { loading, isAuthenticated, role });
    if (loading) return;
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to /auth/login");
      window.history.replaceState(null, "", "/auth/login");
      router.replace("/auth/login");
    } else if (role !== "client") {
      const redirectPath = getRedirectPath(role ?? "unknown");
      console.log("Wrong role, redirecting to:", redirectPath);
      window.history.replaceState(null, "", redirectPath);
      router.replace(redirectPath);
    }
  }, [isAuthenticated, role, router, loading]);

  const getRedirectPath = (role: RoleName | "unknown") => {
    switch (role) {
      case "va": return "/va/dashboard";
      case "admin": return "/admin/dashboard";
      case "superadmin": return "/superadmin/dashboard";
      default: return "/auth/login";
    }
  };

  if (loading) {
    console.log("ClientLayout: Rendering loading state");
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || role !== "client") {
    console.log("ClientLayout: Not rendering dashboard, conditions failed:", { isAuthenticated, role });
    return null;
  }

  console.log("ClientLayout: Rendering dashboard");
  return (
    <>
      <Head>
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, private" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>
      <div className="flex min-h-screen bg-gray-50">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-20 sm:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        <div
          className={`fixed inset-y-0 left-0 z-10 w-64 bg-white border-r shadow-sm transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:relative sm:translate-x-0 sm:shadow-none transition-transform duration-300 ease-in-out`}
        >
          <Sidebar onLinkClick={() => setSidebarOpen(false)} />
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