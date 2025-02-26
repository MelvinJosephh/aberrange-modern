'use client';

import React from 'react';
import { useRouter } from 'next/navigation';  
import styles from '../../styles/modal-pages/findwork.module.scss';
import categories from '@/lib/data/skills/developersData';

const FindWork: React.FC = () => {
  const router = useRouter();

  const handleProfileCreation = () => {
    router.push('/register'); // Navigate to Freelancer Registration Form
  };

  const handleBrowseJobs = () => {
    router.push('/jobs'); // Navigate to Job Listings Page
  };

  return (
    <div className={styles.findWorkPage}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Find Freelance Jobs You Love</h1>
        <p className={styles.description}>
          Get access to exclusive freelance opportunities from top-tier companies. Create your free profile and get started today!
        </p>
        <button className={styles.ctaButton} onClick={handleProfileCreation}>Create Your Profile & Start Today</button>
      </header>

      <section className={styles.jobCategories}>
        <h2 className={styles.subtitle}>Explore Jobs by Category</h2>
        <ul className={styles.categoryList}>
          {categories.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <a href={`#${category.title.replace(/ /g, '-').toLowerCase()}`} className={styles.categoryLink}>
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.remoteJobs}>
        <h2 className={styles.subtitle}>Explore Remote Jobs</h2>
        <p className={styles.description}>
          Work from anywhere with Aberrange. Explore top-tier remote job opportunities tailored to your expertise.
        </p>
        <button className={styles.ctaButton} onClick={handleBrowseJobs}>Browse Remote Jobs</button>
      </section>
    </div>
  );
};

export default FindWork;