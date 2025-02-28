import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { SidebarMenuItems } from "./sidebar-menu-items";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenuItems />
      </SidebarContent>
    </Sidebar>
  );
}
