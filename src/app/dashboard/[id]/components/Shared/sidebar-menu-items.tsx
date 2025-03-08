'use client';
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
import { useAuth } from "@/app/hooks/useAuth";
import styles from "@/styles/dashboard/sidebarmenuitems.module.scss";

export function SidebarMenuItems({ role }: { role?: string }) {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  // Define role-based menu items
  const menuSections = {
    client: [
      {
        label: "Main Navigation",
        items: [
          { title: "Dashboard", url: "/dashboard/[id]/tasks", icon: Home },
          { title: "Hiring Requests", url: "/dashboard/[id]/hiring-requests", icon: Inbox },
          { title: "Consultations", url: "/dashboard/[id]/consultations", icon: Calendar },
          { title: "Quotes", url: "/dashboard/[id]/quotes", icon: Calendar },
        ],
      },
      {
        label: "Reports & Billing",
        items: [
          { title: "Reports", url: "/dashboard/[id]/reports", icon: Search },
          { title: "Invoices", url: "/dashboard/[id]/invoices", icon: Inbox },
          { title: "Billing", url: "/dashboard/[id]/billing", icon: Calendar },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/[id]/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/[id]/profile", icon: User },
        ],
      },
    ],
    va: [
      {
        label: "Main Navigation",
        items: [
          { title: "Tasks", url: "/dashboard/[id]/tasks", icon: Home },
          { title: "Time Log", url: "/dashboard/[id]/time-log", icon: Inbox },
          { title: "Consultations", url: "/dashboard/[id]/consultations", icon: Calendar },
        ],
      },
      {
        label: "Tools",
        items: [
          { title: "Tools", url: "/dashboard/[id]/tools", icon: Search },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/[id]/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/[id]/profile", icon: User },
        ],
      },
    ],
    admin: [
      {
        label: "Management",
        items: [
          { title: "Users", url: "/dashboard/[id]/users", icon: Home },
          { title: "Hiring Requests", url: "/dashboard/[id]/hiring-requests", icon: Inbox },
          { title: "Consultations", url: "/dashboard/[id]/consultations", icon: Calendar },
          { title: "Quotes", url: "/dashboard/[id]/quotes", icon: Calendar },
        ],
      },
      {
        label: "Reports & Billing",
        items: [
          { title: "Reports", url: "/dashboard/[id]/reports", icon: Search },
          { title: "Invoices", url: "/dashboard/[id]/invoices", icon: Inbox },
          { title: "Performance", url: "/dashboard/[id]/performance", icon: Calendar },
          { title: "Support", url: "/dashboard/[id]/support", icon: Calendar },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/[id]/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/[id]/profile", icon: User },
        ],
      },
    ],
    superadmin: [
      {
        label: "Platform",
        items: [
          { title: "Overview", url: "/dashboard/[id]/overview", icon: Home },
          { title: "Invoices", url: "/dashboard/[id]/invoices", icon: Inbox },
          { title: "Reports", url: "/dashboard/[id]/reports", icon: Search },
        ],
      },
      {
        label: "Administration",
        items: [
          { title: "Roles", url: "/dashboard/[id]/roles", icon: Calendar },
          { title: "Analytics", url: "/dashboard/[id]/analytics", icon: Search },
        ],
      },
      {
        label: "User",
        items: [
          { title: "Settings", url: "/dashboard/[id]/settings", icon: Settings },
          { title: "Profile", url: "/dashboard/[id]/profile", icon: User },
        ],
      },
    ],
  }[role || "client"];

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
                      href={item.url.replace("[id]", "{id}")} // Dynamic ID placeholder
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