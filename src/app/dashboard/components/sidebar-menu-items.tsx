import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Hiring Requests", url: "/dashboard/hiring-requests", icon: Inbox },
  { title: "Inbox", url: "/dashboard/inbox", icon: Inbox },
  { title: "Budget Quotes", url: "/dashboard/quotes", icon: Calendar },
  { title: "Client Consulations", url: "/dashboard/consultations", icon: Calendar },
  { title: "User management", url: "/dashboard/user-management", icon: Calendar },
  { title: "Reports", url: "/dashboard/reports", icon: Search },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function SidebarMenuItems() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
