'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner'; // Import toast directly from sonner
import styles from '@/styles/pages/getStarted.module.scss';

// Form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().optional(),
});

const GetStarted: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!selectedDate) {
      toast.error('Please select a consultation date.', {
        description: 'A date is required to book a consultation.',
      });
      return;
    }

    setIsLoading(true);

    const consultationData = {
      name: data.name,
      email: data.email,
      company: data.company || '',
      message: data.message || '',
      consultationDate: selectedDate.toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit consultation');
      }

      const result = await response.json();
      toast.success('Consultation Booked!', {
        description: `Your consultation is booked for ${format(
          new Date(result.consultation.consultationDate),
          'PPP'
        )}. Status: ${result.consultation.status}`,
      });
      setIsSubmitted(true);
      form.reset();
      setSelectedDate(undefined);
    } catch (error) {
  const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
  toast.error('Submission Failed', {
    description: message,
  });
} finally {
      setIsLoading(false);
    }
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
            <Card className={styles.form}>
              <CardHeader>
                <CardTitle>Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email address" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your needs" rows={4} {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className={styles.submitButton} disabled={isLoading}>
                      {isLoading ? 'Submitting...' : 'Schedule Consultation'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className={styles.calendarWrapper}>
              <CardHeader>
                <CardTitle className={styles.calendarTitle}>Select a Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || isLoading}
                  className={styles.calendar}
                />
                {selectedDate && (
                  <p className={styles.selectedDate}>Selected: {format(selectedDate, 'PPP')}</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetStarted;