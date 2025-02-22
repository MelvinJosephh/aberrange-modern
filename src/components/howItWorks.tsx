// src/components/HowItWorks.tsx
import React from 'react';
import styles from '@/styles/components/howItWorks.module.scss';

// Material Icons for Steps
import SearchIcon from '@mui/icons-material/Search'; // Discovery
import BuildIcon from '@mui/icons-material/Build'; // Customization
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Growth

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <p className={styles.sectionSubtitle}>
          Three simple steps to transform your business with Aberrange.
        </p>
        <div className={styles.stepsGrid}>
          {/* Step 1: Discovery */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.iconWrapper}>
              <SearchIcon className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Discovery</h3>
            <p className={styles.stepDescription}>
              We assess your automation, tech, and research needs with a free consultation.
            </p>
          </div>

          {/* Step 2: Customization */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.iconWrapper}>
              <BuildIcon className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Customization</h3>
            <p className={styles.stepDescription}>
              Tailored AI, tech, and analysis solutions deployed to fit your workflow.
            </p>
          </div>

          {/* Step 3: Growth */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.iconWrapper}>
              <RocketLaunchIcon className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>Growth</h3>
            <p className={styles.stepDescription}>
              Scale effortlessly with ongoing support and actionable insights.
            </p>
          </div>
        </div>
        <a href="/get-started" className={styles.ctaLink}>
          Start Your Journey →
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;