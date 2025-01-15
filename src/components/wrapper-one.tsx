import styles from '@/styles/components/wrapper-one.module.scss';

export default function WrapperOne() {
  return (
    <section className={styles.wrapperOne}>
      <div className={styles.content}>
        <h2>Why Choose Aberrange?</h2>
        <p>
          Aberrange provides unparalleled solutions that drive business success. 
          Our team is committed to innovation and excellence.
        </p>
        <ul>
          <li>Customized Solutions</li>
          <li>24/7 Support</li>
          <li>Proven Track Record</li>
        </ul>
      </div>
    </section>
  );
}
