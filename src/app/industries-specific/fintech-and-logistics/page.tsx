'use client';

import React from 'react';
import styles from '@/styles/industries-specific/fintech.module.scss';

const FintechLogistics: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fintech & Logistics</h1>
      <p className={styles.description}>
        Explore our fintech and logistics solutions that bring efficiency, transparency, and innovation to your operations.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default FintechLogistics;