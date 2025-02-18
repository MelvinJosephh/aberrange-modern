// src/components/AIDemo.tsx
import styles from '@/styles/components/wrapper-one.module.scss';

const WrapperOne: React.FC = () => {
  return (
    <section className={styles.aiDemo}>
      <h2 className={styles.sectionTitle}>AI in Action</h2>
      <div className={styles.chatWidget}>
        <p>Ask me anything about Aberrange!</p>
        <input type="text" placeholder="Type your question..." />
      </div>
    </section>
  );
};

export default WrapperOne;