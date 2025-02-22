// src/components/UseCases.tsx
import React from 'react';
import styles from '@/styles/components/useCases.module.scss';

// Material Icons for Use Cases
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; // Automation
import BarChartIcon from '@mui/icons-material/BarChart'; // Research
import ComputerIcon from '@mui/icons-material/Computer'; // Tech

const UseCases: React.FC = () => {
  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <p className={styles.sectionSubtitle}>
          See how Aberrange drives results for businesses like yours.
        </p>
        <div className={styles.casesGrid}>
          {/* Use Case 1: Tech Startup */}
          <div className={styles.caseCard}>
            <div className={styles.iconWrapper}>
              <AutoFixHighIcon className={styles.caseIcon} />
            </div>
            <h3 className={styles.caseTitle}>
              Tech Startup Cuts Costs 30% with AI Automation
            </h3>
            <p className={styles.caseDescription}>
              A growing SaaS company used our AI-powered automation to streamline operations, reducing overhead by 30% in 6 months.
            </p>
            <span className={styles.caseMetric}>30% Cost Reduction</span>
          </div>

          {/* Use Case 2: Entrepreneur */}
          <div className={styles.caseCard}>
            <div className={styles.iconWrapper}>
              <BarChartIcon className={styles.caseIcon} />
            </div>
            <h3 className={styles.caseTitle}>
              Entrepreneur Boosts Strategy with Research Insights
            </h3>
            <p className={styles.caseDescription}>
              A solopreneur leveraged our research and analysis to identify market trends, doubling lead generation in 3 months.
            </p>
            <span className={styles.caseMetric}>2x Lead Growth</span>
          </div>

          {/* Use Case 3: SaaS Firm */}
          <div className={styles.caseCard}>
            <div className={styles.iconWrapper}>
              <ComputerIcon className={styles.caseIcon} />
            </div>
            <h3 className={styles.caseTitle}>
              SaaS Firm Enhances Docs with Tech Support
            </h3>
            <p className={styles.caseDescription}>
              A SaaS provider improved product documentation and uptime with our Tech & IT support, boosting customer satisfaction by 25%.
            </p>
            <span className={styles.caseMetric}>25% Satisfaction Boost</span>
          </div>
        </div>
        <a href="/case-studies" className={styles.ctaLink}>
          View All Case Studies →
        </a>
      </div>
    </section>
  );
};

export default UseCases;