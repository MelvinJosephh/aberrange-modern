// src/components/Hero.tsx
import styles from '@/styles/components/homes.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Left Section: Text and CTAs */}
      <div className={styles.leftSection}>
        <h1 className={styles.heroTitle}>
          Smart Virtual Assistance for Tech, Finance, Research, and Executive Operations
        </h1>
        <p className={styles.heroSubtitle}>
          Aberrange delivers cutting-edge AI-powered solutions to streamline your business, reduce costs, and boost productivity. 
          Whether you're a startup, small business, or enterprise, we’ve got you covered.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaButtonPrimary}>
            Hire a Virtual Assistant →
          </button>
          <button className={styles.ctaButtonSecondary}>
            Call Us Now
          </button>
        </div>
      </div>

      {/* Right Section: Animation */}
      <div className={styles.rightSection}>
        <div className={styles.animationContainer}>
          {/* AI Assistant Animation */}
          <div className={styles.aiAssistant}>
            <div className={styles.aiHead}></div>
            <div className={styles.aiBody}></div>
            <div className={styles.aiPulse}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;