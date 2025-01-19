import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/wrapper.module.scss';
import brandingWrapper from '@/lib/data/brandingWrapper';

const Wrapper: React.FC = () => {
  return (
    <section className={styles.brandingWrapper}>
      <div className={styles.container}>
        {brandingWrapper.map((val, index) => (
          <div key={index} className={styles.box}>
            <h3>{val.title}</h3>
            <h2>{val.heading}</h2>
            <p>{val.desc}</p>
            <Link href="/contact-us" className={styles.primaryBtn}>
              Contact Us
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;