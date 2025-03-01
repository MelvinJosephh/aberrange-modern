// src/app/dashboard/layout.tsx
import { SidebarProvider } from "@/components/ui/sidebar";
import styles from "@/styles/dashboard/dashboard-layout.module.scss";
import { AppSidebar } from "./shared-ui/AppSidebar";
import Header from "./shared-ui/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className={styles.dashboardLayout}>
        <div className={styles.gridContainer}>
          <AppSidebar className={styles.sidebar} />
          <div className={styles.mainContent}>
            <Header className={styles.header} />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}