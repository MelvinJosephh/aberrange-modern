'use client';

import { HTMLAttributes, useState } from "react";
import styles from "@/styles/dashboard/dashboard-header.module.scss";
import { cn } from "@/lib/utils";
import { Menu, LogOut, User as UserIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...props }: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  const { name } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.headerContent}>
        <button
          onClick={toggleSidebar}
          className={cn("p-2 focus:outline-none md:hidden", styles.menuButton)}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className={styles.userSection}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={styles.userButton}
            aria-label="User menu"
          >
            <span className={styles.userName}>{name || "User"}</span>
            <UserIcon className={styles.userIcon} />
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <Link href="/dashboard/profile" className={styles.dropdownItem}>
                <UserIcon className={styles.dropdownIcon} />
                Profile
              </Link>
              <button onClick={handleLogout} className={styles.dropdownItem}>
                <LogOut className={styles.dropdownIcon} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}