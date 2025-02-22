'use client';

import styles from '@/styles/components/hero.module.scss';
import Lottie from 'lottie-react'; // For Lottie animations
import animationData from '../../public/animations/ai-assistant.json'; 

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Left Section: Text and CTAs */}
      <div className={styles.leftSection}>
        <h1 className={styles.heroTitle}>
          Smart Virtual Assistance for Tech, Finance, Research, and Executive Operations
        </h1>
        <p className={styles.heroSubtitle}>
          Aberrange delivers cutting-edge AI-powered solutions to streamline 
          your business, reduce costs, and boost productivity.
          Whether you&apos;re a startup, small business, or enterprise, we&apos;ve got you covered.
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

      {/* Right Section: Lottie Animation */}
      <div className={styles.rightSection}>
        <div className={styles.animationContainer}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;