'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/pages/callUs.module.scss';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar'; 

const CallUs: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/contact-success');
  };

  const handleScheduleCall = (date: Date | undefined) => {
    setSelectedDate(date);
    // Handle the selected date here (e.g., log it, integrate with form, etc.)
    if (date) {
      console.log('Selected date:', date); // Placeholder for your logic
    }
  };

  return (
    <div className={styles.callUsPage}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h1 className={styles.title}>Ready to Elevate Your Operations?</h1>
        <p className={styles.description}>
          From AI-driven automation to expert tech and admin support, Aberrange delivers premium solutions tailored to your business. Let’s talk about your goals.
        </p>
        <Button className={styles.ctaButton} onClick={() => handleScheduleCall(selectedDate)}>
          Schedule a Free Consultation
        </Button>
      </header>

      {/* Contact Options */}
      <section className={styles.contactSection}>
        <h2 className={styles.subtitle}>How Would You Like to Connect?</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Phone</h3>
            <p className={styles.contactDetail}>1-800-ABERRANGE</p>
            <p className={styles.contactNote}>Speak to an expert today—available 24/7.</p>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Email</h3>
            <p className={styles.contactDetail}>connect@aberrange.com</p>
            <p className={styles.contactNote}>Expect a response within 1 business hour.</p>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Live Chat</h3>
            <Button variant="link" className={styles.chatButton}>
              Start Chat Now
            </Button>
            <p className={styles.contactNote}>Instant support from our team.</p>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.itemTitle}>Book a Call</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="link" className={styles.chatButton}>
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Pick a Date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleScheduleCall}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className={styles.contactNote}>No commitment, just clarity.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Send Us a Message</h3>
          <form className={styles.contactForm} onSubmit={handleContactSubmit}>
            <Input type="text" placeholder="Name" className={styles.formInput} required />
            <Input type="email" placeholder="Email" className={styles.formInput} required />
            <Select required>
              <SelectTrigger className={styles.formSelect}>
                <SelectValue placeholder="What do you need help with?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-automation">AI Automation</SelectItem>
                <SelectItem value="tech-support">Tech Support</SelectItem>
                <SelectItem value="admin">Admin Assistance</SelectItem>
                <SelectItem value="finance">Finance & Bookkeeping</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Your Message" className={styles.formTextarea} rows={4} />
            <Button type="submit" className={styles.submitButton}>Send Message</Button>
          </form>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.socialProof}>
        <h2 className={styles.subtitle}>Join the Businesses We’ve Empowered</h2>
        <p className={styles.testimonial}>
          “Aberrange automated our workflows and saved us 20 hours a week!” — Tech Startup Founder
        </p>
        <p className={styles.stat}>100+ businesses scaled with Aberrange’s solutions.</p>
        <Button className={styles.ctaButton} onClick={() => handleScheduleCall(selectedDate)}>
          Ready to Be Next? Contact Us Now
        </Button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>Let’s take your business to the next level—together.</p>
        <Button className={styles.footerButton} onClick={() => handleScheduleCall(selectedDate)}>
          Schedule a Call
        </Button>
        <div className={styles.socialLinks}>
          <Link href="https://linkedin.com" target="_blank">
            <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1 2H6v14h12V5zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
            </svg>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CallUs;