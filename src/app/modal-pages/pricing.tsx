import React from 'react';
import styles from '@/styles/modal-pages/pricing.module.scss'; // Using CSS modules
import pricingPlans from '@/lib/data/skills/pricingPlans';

// Define types for pricing plan data
interface PricingPlan {
  title: string;
  price: string;
  frequency?: string;
  features: string[];
  buttonLink: string;
  buttonText: string;
}

const PricingPage: React.FC = () => {
  return (
    <div className={styles.pricingPage}>
      <header className={styles.pricingHeader}>
        <h1>Find the Right Plan for Your Needs</h1>
        <p>Choose a plan that suits your business. No hidden fees, just great service.</p>
      </header>

      <section className={styles.pricingContainer}>
        <div className={styles.gridLayout}>
          {pricingPlans.map((plan: PricingPlan, index: number) => (
            <div key={index} className={styles.pricingCard}>
              <h2>{plan.title}</h2>
              <div className={styles.price}>
                <span>{plan.price}</span> {plan.frequency && <span>{plan.frequency}</span>}
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href={plan.buttonLink} className={styles.ctaButton}>
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <p>Have questions about our pricing? Contact our support team for assistance.</p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
