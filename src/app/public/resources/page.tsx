'use client';

import React from 'react';
import styles from '@/styles/pages/resources.module.scss';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Resources = () => {
  return (
    <main className={styles.resources}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resources</h1>
          <p className={styles.subtitle}>
            Tools, insights, and tips to grow your business with Aberrange.
          </p>
        </header>

        <section className={styles.sections}>
          <div className={styles.section}>
            <h2>Blogs</h2>
            <p>Expert advice on virtual assistance and business efficiency.</p>
            <Link href="/resources/blogs" className={styles.link}>Explore Blogs</Link>
          </div>
          <div className={styles.section}>
            <h2>Guides</h2>
            <p>In-depth resources to scale your operations.</p>
            <Link href="/resources/guides" className={styles.link}>Download Guides</Link>
          </div>
          <div className={styles.section}>
            <h2>Case Studies</h2>
            <p>See how we’ve helped businesses like yours.</p>
            <Link href="/resources/case-studies" className={styles.link}>View Success Stories</Link>
          </div>
          <div className={styles.section}>
            <h2>Tools</h2>
            <p>Free templates to streamline your work.</p>
            <Link href="/resources/tools" className={styles.link}>Get Tools</Link>
          </div>
          <div className={styles.section}>
            <h2>FAQs</h2>
            <p>Answers to your questions about Aberrange.</p>
            <Link href="/resources/faqs" className={styles.link}>Read FAQs</Link>
          </div>
        </section>

        <footer className={styles.footer}>
          <Button asChild>
            <Link href="/get-started">Get Started with Aberrange</Link>
          </Button>
        </footer>
      </div>
    </main>
  );
};

export default Resources;