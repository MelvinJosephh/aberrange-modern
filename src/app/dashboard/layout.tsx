// layout.tsx
"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./Shared/Header";
import { AppSidebar } from "./Shared/AppSidebar";
import AuthWrapper from "./authWrapper";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthWrapper>
      <SidebarProvider>
        <div className="flex min-h-screen bg-gray-100">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </AuthWrapper>
  );
}
