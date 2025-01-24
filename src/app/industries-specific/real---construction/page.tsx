'use client';

import React from 'react';
import styles from '@/styles/industries-specific/real-estate.module.scss';

const RealConstruction: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Real Estate & Construction</h1>
      <p className={styles.description}>
        Discover our specialized services for the real estate and construction industries, from project management to digital transformation.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default RealConstruction;