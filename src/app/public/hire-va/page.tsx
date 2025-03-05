
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/pages/hireVA.module.scss';
import { Button } from '@/components/ui/button'; // Shadcn Button
import { Input } from '@/components/ui/input'; // Shadcn Input
import { Textarea } from '@/components/ui/textarea'; // Shadcn Textarea
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Shadcn Card
import { Label } from '@/components/ui/label'; // Shadcn Label
import ComputerIcon from '@mui/icons-material/Computer'; // Tech
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Finance
import BarChartIcon from '@mui/icons-material/BarChart'; // Research
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; // Executive

const HireVA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    needs: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission (replace with API call)
    console.log(formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', needs: '' });
  };

  return (
    <section className={styles.hireVA}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Hire Your Smart Virtual Assistant Today</h1>
          <p className={styles.heroSubtitle}>
            Leverage AI-powered virtual assistants for Tech, Finance, Research, and Executive Operations to streamline your business, cut costs, and boost productivity—perfect for startups, SMBs, and enterprises.
          </p>
          <Button asChild className={styles.ctaButton}>
            <Link href="#hire-form">Get Started Now</Link>
          </Button>
        </div>

        {/* Services Overview */}
        <div className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>What Your VA Can Do</h2>
          <div className={styles.servicesGrid}>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <ComputerIcon className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Tech Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  AI-driven IT assistance, software management, and documentation.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <AccountBalanceIcon className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  Bookkeeping, financial reports, and budgeting with AI precision.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <BarChartIcon className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  Market insights, data analysis, and research powered by AI tools.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <AssignmentIndIcon className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Executive Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  Scheduling, email management, and coordination with AI automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form Section */}
        <div id="hire-form" className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Let’s Get You Started</h2>
          {isSubmitted ? (
            <Card className={styles.successMessage}>
              <CardHeader>
                <CardTitle className={styles.successTitle}>Request Received!</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We’ll contact you shortly to match you with the perfect VA.</p>
                <Button asChild variant="link" className={styles.backLink}>
                  <Link href="/">Back to Home</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <Label htmlFor="name" className={styles.label}>Name</Label>
                <Input
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
                <Label htmlFor="email" className={styles.label}>Email</Label>
                <Input
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
                <Label htmlFor="company" className={styles.label}>Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Label htmlFor="needs" className={styles.label}>Your Needs</Label>
                <Textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  placeholder="Tell us what you need help with (e.g., Tech, Finance)"
                  className={styles.textarea}
                  rows={4}
                />
              </div>
              <Button type="submit" className={styles.submitButton}>
                Submit Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HireVA;