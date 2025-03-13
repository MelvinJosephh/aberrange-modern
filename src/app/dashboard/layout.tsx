// src/app/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";
import { RoleName } from "@/types/role";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { role, isAuthenticated, loading } = useAuthWithFetch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated && role !== "client") {
      router.push(getRedirectPath(role));
    }
  }, [isAuthenticated, role, router, loading]);

  const getRedirectPath = (role: RoleName) => {
    switch (role) {
      case "va": return "/va/dashboard";
      case "admin": return "/admin/dashboard";
      case "superadmin": return "/superadmin/dashboard";
      default: return "/auth/login";
    }
  };

  if (loading || !isAuthenticated) return <div>Loading...</div>;

  return (
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
        <Sidebar />
      </div>
      <div className="flex-1 p-4 sm:p-6">{children}</div>
    </div>
  );
}