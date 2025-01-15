import styles from '@/styles/components/homes.module.scss';

export default function Homes() {
  return (
    <section className={styles.homes}>
      <h1>Welcome to Aberrange</h1>
      <p>Discover solutions tailored for your business needs.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
}
