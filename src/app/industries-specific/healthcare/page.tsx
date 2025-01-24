'use client';

import React from 'react';
import styles from '@/styles/industries-specific/health-care.module.scss';

const Healthcare: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Healthcare</h1>
      <p className={styles.description}>
        Innovate in healthcare with our solutions that enhance patient care, streamline operations, and improve data management.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default Healthcare;