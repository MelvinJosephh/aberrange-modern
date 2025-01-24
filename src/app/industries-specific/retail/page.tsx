'use client';

import React from 'react';
import styles from '@/styles/industries-specific/retail.module.scss';

const Retail: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Retail</h1>
      <p className={styles.description}>
        Transform your retail business with our solutions for omnichannel retailing, customer experience, and inventory management.
      </p>
      {/* Add more content here like services, case studies, etc. */}
    </div>
  );
};

export default Retail;