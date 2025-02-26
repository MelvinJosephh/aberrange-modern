'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/pages/get-quote.module.scss';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const GetQuote: React.FC = () => {
  const router = useRouter();

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Quote request:', Object.fromEntries(formData)); // Placeholder for API call
    router.push('/quote-success');
  };

  return (
    <div className={styles.getQuotePage}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h1 className={styles.title}>Get Your Custom Quote Today</h1>
        <p className={styles.description}>
          Unlock the power of AI-driven virtual assistance tailored to your business. Tell us your needs, and we’ll deliver a personalized quote to streamline, automate, and scale your operations.
        </p>
        <Button
          className={styles.ctaButton}
          onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request Your Quote Now
        </Button>
      </header>

      {/* Quote Form */}
      <section id="quote-form" className={styles.formSection}>
        <h2 className={styles.subtitle}>Tell Us About Your Needs</h2>
        <form className={styles.quoteForm} onSubmit={handleQuoteSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formItem}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="company" className={styles.formLabel}>Company (Optional)</label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company Name"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="services" className={styles.formLabel}>Services Needed</label>
              <Select name="services" required>
                <SelectTrigger className={styles.formSelect}>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-automation">AI-Powered Automation</SelectItem>
                  <SelectItem value="tech-support">Tech & IT Support</SelectItem>
                  <SelectItem value="admin">Admin & Executive Assistance</SelectItem>
                  <SelectItem value="finance">Finance & Bookkeeping</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="budget" className={styles.formLabel}>Estimated Budget</label>
              <Select name="budget">
                <SelectTrigger className={styles.formSelect}>
                  <SelectValue placeholder="Select Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-plus">$10,000+</SelectItem>
                  <SelectItem value="not-sure">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="details" className={styles.formLabel}>Project Details</label>
            <Textarea
              id="details"
              name="details"
              placeholder="Tell us more about your needs (e.g., specific tasks, timeline, goals)"
              className={styles.formTextarea}
              rows={5}
            />
          </div>
          <Button type="submit" className={styles.submitButton}>Submit Quote Request</Button>
        </form>
      </section>

      {/* Reassurance Section */}
      <section className={styles.reassuranceSection}>
        <h2 className={styles.subtitle}>Why Choose Aberrange?</h2>
        <div className={styles.reassuranceGrid}>
          <div className={styles.reassuranceItem}>
            <h3 className={styles.itemTitle}>Tailored Solutions</h3>
            <p>Get a quote customized to your unique business challenges and goals.</p>
          </div>
          <div className={styles.reassuranceItem}>
            <h3 className={styles.itemTitle}>Fast Response</h3>
            <p>Expect a detailed quote within 24-48 hours from our expert team.</p>
          </div>
          <div className={styles.reassuranceItem}>
            <h3 className={styles.itemTitle}>Proven Expertise</h3>
            <p>Leverage our experience with 100+ businesses to drive your success.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;