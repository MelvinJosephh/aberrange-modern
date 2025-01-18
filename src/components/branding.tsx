"use client";

import React from 'react';
import brandingData from '@/lib/data/BrandingData';
import styles from '@/styles/components/branding.module.scss'; 

const Branding: React.FC = () => {
  return (
    <section className={styles.branding}>
      <div className={styles.brandingContainer}>
        {brandingData.map((value) => (
          <div className={styles.box} key={value.id}>
            <div className={styles.text}>
              <h1>{value.id}</h1>
            </div>
            <div className={styles.para}>
              <h2>{value.heading}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;
