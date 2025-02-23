// pages/hire.tsx

'use client';

import React, { useState } from 'react';
import HireHeader from '@/app/hire/hire-components/hireHeader';
import HireForm from '@/app/hire/hire-components/hireForm';
import NextSteps from '@/app/hire/hire-components/nextSteps';
import styles from '@/styles/pages/hire.module.scss';

const HirePage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: document.getElementById('next-steps')?.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className={styles.hirePage}>
      <HireHeader />
      <div className={styles.contentWrapper}>
        <HireForm onSubmit={handleFormSubmit} />
        {!isSubmitted && <NextSteps />}
      </div>
    </div>
  );
};

export default HirePage;