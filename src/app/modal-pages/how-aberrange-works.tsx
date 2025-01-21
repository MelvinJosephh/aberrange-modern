'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import steps from '@/lib/data/skills/howitWorksSteps';
import styles from '../../styles/modal-pages/aberrange-works.module.scss';

const HowAberrangeWorks: React.FC = () => {
  const [showPage, setShowPage] = useState<boolean>(true);

  const closePage = () => {
    setShowPage(false);
  };

  if (!showPage) return null;

  return (
    <div className={styles.howAberrangeWorksPage}>
      <div className={styles.headerSection}>
        <h1>How Aberrange Works</h1>
        <CloseIcon className={styles.closeIcon} onClick={closePage} />
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowAberrangeWorks;
