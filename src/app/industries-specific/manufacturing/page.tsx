'use client';

import React from 'react';
import styles from '@/styles/industries-specific/manufacturing.module.scss';

const Manufacturing: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manufacturing</h1>
      <p className={styles.description}>
        Elevate your manufacturing processes with our technology solutions focused on automation, quality control, and supply chain management.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default Manufacturing;