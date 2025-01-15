import styles from '@/styles/components/industries-brief.module.scss';

export default function IndustriesBrief() {
  return (
    <section className={styles.industriesBrief}>
      <h2>Industries We Serve</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Healthcare</h3>
          <p>Streamlining processes and improving patient outcomes.</p>
        </div>
        <div className={styles.card}>
          <h3>Finance</h3>
          <p>Enhancing security and optimizing financial operations.</p>
        </div>
        <div className={styles.card}>
          <h3>Retail</h3>
          <p>Transforming the customer experience through technology.</p>
        </div>
      </div>
    </section>
  );
}
