// app/hiring/page.tsx
'use client';

import React, { useState } from 'react';
import HireHeader from '@/app/hire/hire-components/hireHeader';
import HireForm, { HireFormData } from '@/app/hire/hire-components/hireForm';
import NextSteps from '@/app/hire/hire-components/nextSteps';
import styles from '@/styles/pages/hire.module.scss';

const HirePage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<HireFormData | null>(null); // Store full HireFormData

  const handleFormSubmit = (data: HireFormData) => {
    console.log('Form data from HireForm:', data); // Debug log
    setFormData(data); // Store all form data
    setIsSubmitted(true);
    setTimeout(() => {
      const nextStepsElement = document.getElementById('next-steps');
      if (nextStepsElement) {
        nextStepsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure DOM updates
  };

  return (
    <div className={styles.hirePage}>
      <HireHeader />
      <div className={styles.contentWrapper}>
        <HireForm onSubmit={handleFormSubmit} />
        {isSubmitted && formData && <NextSteps formData={formData} />}
      </div>
    </div>
  );
};

export default HirePage;