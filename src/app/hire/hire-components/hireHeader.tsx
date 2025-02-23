// src/components/HireHeader.tsx
import React from 'react';
import styles from '@/styles/pages/hire-components/hireHeader.module.scss';

const HireHeader: React.FC = () => {
  return (
    <header className={styles.hireHeader}>
      <h1 className={styles.headerTitle}>Hire Your Aberrange Virtual Assistant</h1>
      <p className={styles.headerSubtitle}>
        Tailored AI-powered solutions for your industry—start now.
      </p>
    </header>
  );
};

export default HireHeader;