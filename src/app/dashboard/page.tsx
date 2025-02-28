import React from 'react';
import Sidebar from './components/Sidebar';
import styles from '../../styles/dashboard/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.content}>
        <h1>Welcome to Your Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default Dashboard;
