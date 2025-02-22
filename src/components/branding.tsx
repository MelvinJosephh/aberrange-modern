// src/components/Branding.tsx
import React from 'react';
import styles from '@/styles/components/branding.module.scss';

// Material Icons
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; // For AI Automation
import ComputerIcon from '@mui/icons-material/Computer'; // For Tech/IT
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; // For Admin
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Finance
import BarChartIcon from '@mui/icons-material/BarChart'; // For Research

const Branding: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Core Services</h2>
        <p className={styles.sectionSubtitle}>
          Discover how Aberrange empowers your business with innovative solutions.
        </p>
        <div className={styles.servicesGrid}>
          {/* Service 1: AI-Powered Business Automation */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <AutoFixHighIcon className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>AI-Powered Business Automation</h3>
            <p className={styles.serviceDescription}>
              Automate workflows with cutting-edge AI and RPA to boost efficiency.
            </p>
          </div>

          {/* Service 2: Tech & IT Virtual Assistance */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <ComputerIcon className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Tech & IT Virtual Assistance</h3>
            <p className={styles.serviceDescription}>
              Expert support for your tech stack and infrastructure.
            </p>
          </div>

          {/* Service 3: Admin & Executive Assistance */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <AssignmentIndIcon className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Admin & Executive Assistance</h3>
            <p className={styles.serviceDescription}>
              Seamless solutions to free up your time for strategic focus.
            </p>
          </div>

          {/* Service 4: Finance & Bookkeeping */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <AccountBalanceIcon className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Finance & Bookkeeping</h3>
            <p className={styles.serviceDescription}>
              Precision financial management for your business.
            </p>
          </div>

          {/* Service 5: Research & Analysis */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <BarChartIcon className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Research & Analysis</h3>
            <p className={styles.serviceDescription}>
              Data-driven insights and expert writing for smarter decisions.
            </p>
          </div>
        </div>
        <a href="/services" className={styles.exploreLink}>
          Explore All Services →
        </a>
      </div>
    </section>
  );
};

export default Branding;