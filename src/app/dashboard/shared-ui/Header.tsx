// src/components/shared-ui/Header.tsx
"use client";
import { HTMLAttributes } from "react";
import styles from "@/styles/dashboard/dashboard-header.module.scss";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...props }: HeaderProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.headerContent}>
        <button
          onClick={toggleSidebar}
          className={cn(
            "p-2 focus:outline-none md:hidden", // Hide at 768px and above
            styles.menuButton
          )}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
        {/* <h1 className={styles.title}>Aberrange</h1> */}
        <div className={styles.userSection}>
          <span className={styles.userName}>John Doe</span>
        </div>
      </div>
    </div>
  );
}