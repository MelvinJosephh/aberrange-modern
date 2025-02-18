// src/components/SuccessMetrics.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/components/wrapper.module.scss';

const Wrapper: React.FC = () => {
  const [companiesImpacted, setCompaniesImpacted] = useState(0);
  const [projectsAutomated, setProjectsAutomated] = useState(0);
  const [responseTime, setResponseTime] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      setCompaniesImpacted(100);
      setProjectsAutomated(500);
      setResponseTime(30);
    };

    animateNumbers();
  }, []);

  return (
    <section className={styles.successMetrics}>
      <div className={styles.metric}>
        <h3>Companies Impacted</h3>
        <p>{companiesImpacted}+</p>
      </div>
      <div className={styles.metric}>
        <h3>Projects Automated</h3>
        <p>{projectsAutomated}+</p>
      </div>
      <div className={styles.metric}>
        <h3>Response Time</h3>
        <p>{responseTime} seconds</p>
      </div>
    </section>
  );
};

export default Wrapper;