// src/components/Testimonials.tsx
import React from 'react';
import styles from '@/styles/components/testimonials.module.scss';

// Material Icon for Quotes
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Hear from businesses thriving with Aberrange’s support.
        </p>
        <div className={styles.testimonialsGrid}>
          {/* Testimonial 1 */}
          <div className={styles.testimonialCard}>
            <FormatQuoteIcon className={styles.quoteIcon} />
            <p className={styles.testimonialText}>
              “Aberrange’s AI automation transformed our workflow, saving us 20 hours a week!”
            </p>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>Jane Doe</span>
              <span className={styles.clientTitle}>CEO, TechTrendz</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.testimonialCard}>
            <FormatQuoteIcon className={styles.quoteIcon} />
            <p className={styles.testimonialText}>
              “Their research gave us a competitive edge—strategy planning is now a breeze.”
            </p>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>Mark Smith</span>
              <span className={styles.clientTitle}>Founder, SoloScale</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className={styles.testimonialCard}>
            <FormatQuoteIcon className={styles.quoteIcon} />
            <p className={styles.testimonialText}>
              “Tech support from Aberrange is unmatched—our uptime improved by 99%.”
            </p>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>Sara Lee</span>
              <span className={styles.clientTitle}>CTO, SaaSBoost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;