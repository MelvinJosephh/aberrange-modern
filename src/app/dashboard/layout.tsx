"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";
import { RoleName } from "@/types/role";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { role, isAuthenticated, loading } = useAuthWithFetch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth/login");
    } else if (!loading && role !== "client") {
      router.push(getRedirectPath(role ?? "unknown"));
    }
  }, [isAuthenticated, role, router, loading]);

  const getRedirectPath = (role: RoleName | "unknown") => {
    switch (role) {
      case "va":
        return "/va/dashboard";
      case "admin":
        return "/admin/dashboard";
      case "superadmin":
        return "/superadmin/dashboard";
      default:
        return "/auth/login";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null; // Redirect will handle this

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-20 sm:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-white border-r shadow-sm transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative sm:translate-x-0 sm:shadow-none transition-transform duration-300 ease-in-out`}
      >
        <Sidebar onLinkClick={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}