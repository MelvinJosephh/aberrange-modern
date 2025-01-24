'use client';

import React from 'react';
import styles from '@/styles/industries-specific/bfsi.module.scss';

const BFSI: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BFSI - Banking, Financial Services, and Insurance</h1>
      <p className={styles.description}>
        Explore how we revolutionize the BFSI sector with innovative solutions tailored to banking, finance, and insurance companies.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default BFSI;