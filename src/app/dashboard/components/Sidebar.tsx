'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/dashboard/sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/dashboard/hiring-requests">Hiring Requests</Link></li>
          <li><Link href="/dashboard/consultations">Consultations</Link></li>
          <li><Link href="/dashboard/quotes">Quotes</Link></li>
          <li><Link href="/dashboard/user-management">User Management</Link></li>
          <li><Link href="/dashboard/reports">Reports</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
