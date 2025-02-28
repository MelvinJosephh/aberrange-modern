import React from 'react';
import { AppSidebar } from './components/AppSidebar';
import styles from '../../styles/dashboard/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <AppSidebar />
      <div className={styles.content}>
        <h1>Welcome to Your Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default Dashboard;
