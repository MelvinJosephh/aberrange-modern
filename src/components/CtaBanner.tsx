// src/components/CtaBanner.tsx
import React from 'react';
import styles from '@/styles/components/ctaBanner.module.scss';

// Material Icon for CTA
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CtaBanner: React.FC = () => {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
        <p className={styles.ctaSubtitle}>
          Get started with Aberrange’s AI-powered solutions and expert support today.
        </p>
        <a href="/get-started" className={styles.ctaButton}>
          Book a Free Consultation
          <ArrowForwardIcon className={styles.ctaIcon} />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;