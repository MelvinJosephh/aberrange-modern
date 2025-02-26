'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/modal-pages/industries.module.scss';
import industriesData from '@/lib/data/IndustriesData';

const Industries: React.FC = () => (
  <div className={styles.industries}>
    <h2>Industries We Serve</h2>
    <div className={styles.industriesGrid}>
      {industriesData.map((industry) => (
        <div key={industry.name} className={styles.industryCard}>
          <div className={styles.icon}>
          <Image
              src={industry.icon}
              alt={`${industry.name} icon`}
              width={50}
              height={50}
              priority={true} // Optional: Ensures these images are preloaded
            />
          </div>
          <div className={styles.content}>
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.getQuote}>
      <button
        onClick={() => (window.location.href = '/get-quote')}
        className={styles.quoteButton}
      >
        Get a Quote
      </button>
    </div>
  </div>
);

export default Industries;
