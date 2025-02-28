import React from 'react';
import Sidebar from '../dashboard/components/Sidebar';
import styles from '@/styles/dashboard/layout.module.scss';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.dashboardContent}>{children}</main>
    </div>
  );
}
