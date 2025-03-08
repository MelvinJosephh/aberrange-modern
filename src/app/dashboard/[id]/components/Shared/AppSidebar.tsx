'use client';

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/app/dashboard/hooks/useAuth";
import { SidebarMenuItems } from "./sidebar-menu-items";

type AppSidebarProps = HTMLAttributes<HTMLDivElement>;

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  const { open } = useSidebar();
  const { role } = useAuth();

  return (
    <Sidebar
      collapsible="offcanvas"
      className={cn(
        "transition-all duration-300 fixed inset-y-0 left-0 z-50",
        open ? "w-full md:w-64" : "w-0 md:w-64", // Adjusted width for consistency
        !open && "overflow-hidden",
        className
      )}
      {...props}
    >
      <SidebarContent>
        <SidebarMenuItems role={role} />
      </SidebarContent>
    </Sidebar>
  );
}