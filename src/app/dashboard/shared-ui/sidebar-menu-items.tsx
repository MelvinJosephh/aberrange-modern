// src/components/shared-ui/SidebarMenuItems.tsx
'use client';
import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/dashboard/sidebarmenuitems.module.scss";

const menuSections = [
  {
    label: "Main Navigation",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: Home },
      { title: "Hiring Requests", url: "/dashboard/hiring-requests", icon: Inbox },
      { title: "Inbox", url: "/dashboard/inbox", icon: Inbox },
    ],
  },
  {
    label: "Tools",
    items: [
      { title: "Budget Quotes", url: "/dashboard/quotes", icon: Calendar },
      { title: "Client Consultations", url: "/dashboard/consultations", icon: Calendar },
      { title: "User Management", url: "/dashboard/user-management", icon: Calendar },
      { title: "Reports", url: "/dashboard/reports", icon: Search },
    ],
  },
  {
    label: "User",
    items: [
      { title: "Settings", url: "/dashboard/settings", icon: Settings },
      { title: "Profile", url: "/dashboard/profile", icon: User },
    ],
  },
];

export function SidebarMenuItems() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className={styles.logo}>
          Aberrange
        </SidebarGroupLabel>
      </SidebarGroup>

      {menuSections.map((section, index) => (
        <SidebarGroup key={index}>
          <SidebarGroupLabel className={styles.sectionLabel}>
            {section.label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`${styles.menuItem} ${pathname === item.url ? styles.active : ''}`}
                      onClick={handleItemClick}
                    >
                      <item.icon className={styles.icon} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}