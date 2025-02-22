// src/components/ValueProposition.tsx
import React from 'react';
import styles from '@/styles/components/valueProposition.module.scss';

// Material Icons for Benefits
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // Innovation
import VerifiedIcon from '@mui/icons-material/Verified'; // Reliability
import SchoolIcon from '@mui/icons-material/School'; // Expertise
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Scalability

const ValueProposition: React.FC = () => {
  return (
    <section className={styles.valueProposition}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Aberrange?</h2>
        <p className={styles.sectionSubtitle}>
          We combine AI-powered solutions with expert support to transform your business.
        </p>
        <div className={styles.contentWrapper}>
          {/* Left: Benefits List */}
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <AutoAwesomeIcon className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Innovation</h3>
                <p className={styles.benefitDescription}>
                  Leverage AI automation and research to drive efficiency and stay ahead.
                </p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <VerifiedIcon className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Reliability</h3>
                <p className={styles.benefitDescription}>
                  Consistent, high-quality support tailored to your business needs.
                </p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <SchoolIcon className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Expertise</h3>
                <p className={styles.benefitDescription}>
                  Specialists in tech, finance, admin, and research at your service.
                </p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <TrendingUpIcon className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Scalability</h3>
                <p className={styles.benefitDescription}>
                  Solutions that grow with you, from startup to enterprise.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Animation/Visual */}
          <div className={styles.visualWrapper}>
            <div className={styles.animationContainer}>
              {/* Placeholder for a simple animation */}
              <div className={styles.dataFlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;