// src/components/GetStarted.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/pages/getStarted.module.scss';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css'; // Base styles for react-day-picker

const GetStarted: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a consultation date.');
      return;
    }
    // Simulate form submission (replace with your API call)
    console.log({
      ...formData,
      consultationDate: format(selectedDate, 'PPP'),
    });
    setIsSubmitted(true);
    // Reset form after submission (optional)
    setFormData({ name: '', email: '', company: '', message: '' });
    setSelectedDate(undefined);
  };

  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <h1 className={styles.title}>Book Your Free Consultation</h1>
        <p className={styles.subtitle}>
          Schedule a session with Aberrange to explore how our AI-powered solutions can transform your business.
        </p>

        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h2 className={styles.successTitle}>Thank You!</h2>
            <p>Your consultation has been scheduled. We’ll reach out soon to confirm your appointment.</p>
            <Link href="/" className={styles.backLink}>
              Back to Home
            </Link>
          </div>
        ) : (
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company" className={styles.label}>Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs"
                  className={styles.textarea}
                  rows={4}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Schedule Consultation
              </button>
            </form>

            <div className={styles.calendarWrapper}>
              <h3 className={styles.calendarTitle}>Select a Date</h3>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }} // Disables past dates
                className={styles.calendar}
                modifiersClassNames={{
                  selected: styles.selectedDay,
                  today: styles.todayDay,
                }}
              />
              {selectedDate && (
                <p className={styles.selectedDate}>
                  Selected: {format(selectedDate, 'PPP')}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetStarted;