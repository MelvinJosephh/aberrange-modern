import { SidebarProvider } from "@/components/ui/sidebar";
import styles from "@/styles/dashboard/layout.module.scss";
import {AppSidebar} from "./components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className={styles.dashboardLayout}>
        <AppSidebar /> 
        <main className={styles.content}>{children}</main>
      </div>
    </SidebarProvider>
  );
}
