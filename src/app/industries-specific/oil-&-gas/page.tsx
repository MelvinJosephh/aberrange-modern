'use client';

import React from 'react';
import styles from '@/styles/industries-specific/oil-gas.module.scss';

const OilGas: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oil & Gas</h1>
      <p className={styles.description}>
        Learn how we drive efficiency and safety in the oil and gas industry through cutting-edge technology and solutions.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default OilGas;