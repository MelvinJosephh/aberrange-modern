'use client';

import { Sidebar, SidebarContent, useSidebar  } from "@/components/ui/sidebar";
import { SidebarMenuItems } from "./sidebar-menu-items";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AppSidebarProps = HTMLAttributes<HTMLDivElement>;

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  const { open } = useSidebar(); // Get sidebar state

  return (
    <Sidebar
    collapsible="offcanvas"
      className={cn(
        "transition-all duration-300 fixed inset-y-0 left-0 z-50", 
        open ? "w-full md:w-250px" : "w-0 md:w-250px", // Full width on mobile, fixed on desktop
        !open && "overflow-hidden", // Hide content when closed
        className
      )}
      {...props}
    >
      <SidebarContent>
        <SidebarMenuItems />
      </SidebarContent>
    </Sidebar>
  );
}