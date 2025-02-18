// src/components/Modal.tsx
import styles from '@/styles/components/modal.module.scss';

const Modal: React.FC = () => {
  return (
    <section className={styles.finalCTA}>
      <h2 className={styles.ctaTitle}>🚀 Let’s Automate Your Business</h2>
      <button className={styles.ctaButton}>Start Now</button>
    </section>
  );
};

export default Modal;