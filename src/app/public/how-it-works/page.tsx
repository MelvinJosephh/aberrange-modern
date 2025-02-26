'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/pages/howItWorks.module.scss';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/get-started');
  };

  return (
    <main className={styles.howItWorks}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Your Virtual Team in Action</h1>
          <p className={styles.subtitle}>
            Expert assistance meets smart solutions—tailored for your business.
          </p>
        </header>

        {/* VA Blocks */}
        <section className={styles.blocks}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Organize</h2>
            <p className={styles.blockDetail}>
              We manage your schedule, emails, and admin tasks with precision.
              <span className={styles.blockHighlight}>Smart Scheduling</span>
            </p>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Support</h2>
            <p className={styles.blockDetail}>
              We handle your tech—support, websites, and cloud solutions.
              <span className={styles.blockHighlight}>Expert Troubleshooting</span>
            </p>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Track</h2>
            <p className={styles.blockDetail}>
              We keep your finances in check—bookkeeping, payroll, reports.
              <span className={styles.blockHighlight}>Automated Reporting</span>
            </p>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Scale</h2>
            <p className={styles.blockDetail}>
              We streamline your growth with custom tools and insights.
              <span className={styles.blockHighlight}>AI Optimization</span>
            </p>
          </div>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <Button className={styles.ctaButton} onClick={handleGetStarted}>
            Partner with Us
          </Button>
          <p className={styles.trust}>Supporting 50+ businesses worldwide</p>
        </footer>
      </div>
    </main>
  );
};

export default HowItWorks;