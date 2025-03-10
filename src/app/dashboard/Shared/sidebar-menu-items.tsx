"use client";

import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import styles from "@/styles/dashboard/sidebarmenuitems.module.scss";
import { Role } from "../../types/auth"; // Import Role

export function SidebarMenuItems({ role }: { role?: Role }) {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const menuSections = {
    client: [
      {
        label: "Main Navigation",
        items: [
          { title: "Dashboard", url: "/dashboard", icon: Home },
          { title: "Hiring Requests", url: "/dashboard/hiringRequests", icon: Inbox },
          { title: "Consultations", url: "/dashboard/consultations", icon: Calendar },
          { title: "Quotes", url: "/dashboard/quotes", icon: Calendar },
        ],
      },
      {
        label: "Reports & Billing",
        items: [
          { title: "Reports", url: "/dashboard/reports", icon: Search },
          { title: "Invoices", url: "/dashboard/invoices", icon: Inbox },
          { title: "Billing", url: "/dashboard/billing", icon: Calendar },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/profile", icon: User },
        ],
      },
    ],
    va: [
      {
        label: "Main Navigation",
        items: [
          { title: "Dashboard", url: "/dashboard", icon: Home },
          { title: "Tasks", url: "/dashboard/tasks", icon: Home },
          { title: "Time Log", url: "/dashboard/time-log", icon: Inbox },
          { title: "Consultations", url: "/dashboard/consultations", icon: Calendar },
        ],
      },
      {
        label: "Tools",
        items: [
          { title: "Tools", url: "/dashboard/tools", icon: Search },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/profile", icon: User },
        ],
      },
    ],
    admin: [
      {
        label: "Management",
        items: [
          { title: "Dashboard", url: "/dashboard", icon: Home },
          { title: "Users", url: "/dashboard/users", icon: Home },
          { title: "Hiring Requests", url: "/dashboard/hiring-requests", icon: Inbox },
          { title: "Consultations", url: "/dashboard/consultations", icon: Calendar },
          { title: "Quotes", url: "/dashboard/quotes", icon: Calendar },
        ],
      },
      {
        label: "Reports & Billing",
        items: [
          { title: "Reports", url: "/dashboard/reports", icon: Search },
          { title: "Invoices", url: "/dashboard/invoices", icon: Inbox },
          { title: "Performance", url: "/dashboard/performance", icon: Calendar },
          { title: "Support", url: "/dashboard/support", icon: Calendar },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/profile", icon: User },
        ],
      },
    ],
    superadmin: [
      {
        label: "Platform",
        items: [
          { title: "Dashboard", url: "/dashboard", icon: Home },
          { title: "Overview", url: "/dashboard/overview", icon: Home },
          { title: "Invoices", url: "/dashboard/invoices", icon: Inbox },
          { title: "Reports", url: "/dashboard/reports", icon: Search },
        ],
      },
      {
        label: "Administration",
        items: [
          { title: "Roles", url: "/dashboard/roles", icon: Calendar },
          { title: "Analytics", url: "/dashboard/analytics", icon: Search },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/profile", icon: User },
        ],
      },
    ],
  }[role || "client"] || [];

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className={styles.logo}>Aberrange</SidebarGroupLabel>
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
                      className={`${styles.menuItem} ${pathname === item.url ? styles.active : ""}`}
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