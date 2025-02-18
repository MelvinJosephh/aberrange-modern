// src/components/Hero.tsx
import styles from '@/styles/components/homes.module.scss';

const Homes: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Aberrange – The Future of Virtual Assistance & AI Automation
        </h1>
        <p className={styles.heroSubtitle}>
          Streamline. Automate. Scale. — Achieve more with Aberrange.
        </p>
        <button className={styles.ctaButton}>
          Get Started with AI Assistance →
        </button>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Homes;