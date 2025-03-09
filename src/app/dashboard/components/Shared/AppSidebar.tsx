"use client";

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "../../hooks/useAuth";
import { SidebarMenuItems } from "./sidebar-menu-items";
import { useRouter } from "next/navigation";
import { Role } from "../../types/auth";

type AppSidebarProps = HTMLAttributes<HTMLDivElement>;

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  const { role, loading } = useAuth();
  const { open } = useSidebar();
  const router = useRouter();

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (role === null) {
    router.push("/auth/login");
    return null;
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      className={cn(
        "transition-all duration-300 fixed inset-y-0 left-0 z-50",
        open ? "w-64" : "w-0 md:w-64",
        !open && "overflow-hidden",
        className
      )}
      {...props}
    >
      <SidebarContent>
      <SidebarMenuItems role={role as Role} />
      </SidebarContent>
    </Sidebar>
  );
}