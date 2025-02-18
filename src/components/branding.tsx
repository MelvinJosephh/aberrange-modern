// src/components/PainPoints.tsx
import styles from '@/styles/components/branding.module.scss';

const Branding: React.FC = () => {
  return (
    <section className={styles.painPoints}>
      <div className={styles.splitScreen}>
        <div className={styles.problems}>
          <h2 className={styles.sectionTitle}>What We Solve</h2>
          <ul>
            <li>Inefficient workflows</li>
            <li>High operational costs</li>
            <li>Lack of scalability</li>
          </ul>
        </div>
        <div className={styles.solutions}>
          <h2 className={styles.sectionTitle}>Our AI-Driven Solutions</h2>
          <ul>
            <li>Workflow automation</li>
            <li>Cost-effective AI tools</li>
            <li>Scalable business solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Branding;