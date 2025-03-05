'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'sonner';
import styles from '@/styles/pages/callUs.module.scss';

// Form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  helpWith: z.string().min(1, 'Please select what you need help with'),
  message: z.string().optional(),
  date: z.date({ required_error: 'A consultation date is required' }),
});

const CallUs: React.FC = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      helpWith: '',
      message: '',
      date: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const contactData = {
      name: data.name,
      email: data.email,
      helpWith: data.helpWith,
      message: data.message || '',
      consultationDate: data.date.toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit contact request');
      }

      const result = await response.json();
      toast.success('Contact Request Submitted!', {
        description: `Your consultation is scheduled for ${format(
          new Date(result.contact.consultationDate),
          'PPP'
        )}. We’ll confirm soon.`,
      });
      setIsSubmitted(true);
      form.reset();
      router.push('/contact-success');
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
    <div className={styles.callUsPage}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h1 className={styles.title}>Ready to Elevate Your Operations?</h1>
        <p className={styles.description}>
          From AI-driven automation to expert tech and admin support, Aberrange delivers premium solutions tailored to your business. Let’s talk about your goals.
        </p>
      </header>

      {/* Contact Form */}
      <section id="contact-form" className={styles.formSection}>
        <h2 className={styles.subtitle}>Contact Us & Schedule a Call</h2>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h3 className={styles.successTitle}>Thank You!</h3>
            <p>Your request has been submitted. We’ll reach out soon to confirm your consultation.</p>
            <Link href="/" className={styles.backLink}>
              Back to Home
            </Link>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={styles.contactForm}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} disabled={isLoading} className={styles.formInput} />
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
                    <FormLabel className={styles.formLabel}>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...field}
                        disabled={isLoading}
                        className={styles.formInput}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="helpWith"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>What do you need help with?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                      <FormControl>
                        <SelectTrigger className={styles.formSelect}>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ai-automation">AI Automation</SelectItem>
                        <SelectItem value="tech-support">Tech Support</SelectItem>
                        <SelectItem value="admin">Admin Assistance</SelectItem>
                        <SelectItem value="finance">Finance & Bookkeeping</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your needs"
                        {...field}
                        disabled={isLoading}
                        className={styles.formTextarea}
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Schedule Your Call</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              styles.datePickerButton,
                              !field.value && styles.mutedForeground
                            )}
                            disabled={isLoading}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Pick a Date</span>}
                            <CalendarIcon className={styles.calendarIcon} />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className={styles.datePickerContent} align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date() || isLoading}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={styles.submitButton} disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Send & Schedule'}
              </Button>
            </form>
          </Form>
        )}
        <div className={styles.contactOptions}>
          <p>Or reach us directly:</p>
          <p className={styles.contactDetail}>Phone: 1-800-ABERRANGE</p>
          <p className={styles.contactDetail}>Email: connect@aberrange.com</p>
          <Button variant="link" className={styles.chatButton}>
            Start Live Chat
          </Button>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.socialProof}>
        <h2 className={styles.subtitle}>Join the Businesses We’ve Empowered</h2>
        <p className={styles.testimonial}>
          “Aberrange automated our workflows and saved us 20 hours a week!” — Tech Startup Founder
        </p>
        <p className={styles.stat}>100+ businesses scaled with Aberrange’s solutions.</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>Let’s take your business to the next level—together.</p>
      </footer>
    </div>
  );
};

export default CallUs;