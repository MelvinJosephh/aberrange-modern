// src/app/dashboard/page.tsx
import styles from '@/styles/dashboard/dashboard.module.scss';

export default function DashboardPage() {
  return (
    <main className={styles.mainContent}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </header>
      <div className={styles.content}>
        {/* Dashboard content sections */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Pending Requests</h3>
            <p className={styles.statNumber}>12</p>
          </div>
          <div className={styles.statCard}>
            <h3>Active Projects</h3>
            <p className={styles.statNumber}>5</p>
          </div>
          <div className={styles.statCard}>
            <h3>Team Members</h3>
            <p className={styles.statNumber}>8</p>
          </div>
        </section>

        <section className={styles.recentActivity}>
          <h2>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <p>New hiring request submitted</p>
              <span className={styles.timestamp}>2 hours ago</span>
            </div>
            <div className={styles.activityItem}>
              <p>Quote approved for Project X</p>
              <span className={styles.timestamp}>Yesterday</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}