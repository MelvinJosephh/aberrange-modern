'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
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

// Form schema
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(), // Add optional phone field
  companyName: z.string().optional(), // Add optional company name
  helpWith: z.string().min(1, 'Please select what you need help with'),
  message: z.string().optional(),
  consultationDate: z.date({ required_error: 'A consultation date is required' }),
});

const CallUs: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      helpWith: '',
      message: '',
      consultationDate: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit contact request');
      }

      const result = await response.json();
      toast.success('Contact Request Submitted!', {
        description: `Your consultation is scheduled for ${format(
          new Date(result.contact.consultationDate),
          'PPP'
        )}. We’ll confirm soon.`,
      });
      router.push(`/success?type=contact`);
    } catch (error) {
      toast.error('Submission Failed', {
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className={styles.callUsPage}>
      <header className={styles.heroSection}>
        <h1 className={styles.title}>Ready to Elevate Your Operations?</h1>
        <p className={styles.description}>
          From AI-driven automation to expert tech and admin support, Aberrange delivers premium solutions tailored to your business. Let’s talk about your goals.
        </p>
      </header>

      <section id="contact-form" className={styles.formSection}>
        <h2 className={styles.subtitle}>Contact Us & Schedule a Call</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={styles.contactForm}>
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="companyName" render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="helpWith" render={({ field }) => (
              <FormItem>
                <FormLabel>What do you need help with?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your needs" {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="consultationDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Schedule Your Call</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(!field.value && styles.mutedForeground)}
                      >
                        {field.value ? format(field.value, 'PPP') : <span>Pick a Date</span>}
                        <CalendarIcon className={styles.calendarIcon} />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className={styles.submitButton}>
              Send & Schedule
            </Button>
          </form>
        </Form>
        <div className={styles.contactOptions}>
          <p>Or reach us directly:</p>
          <p className={styles.contactDetail}>Phone: 1-800-ABERRANGE</p>
          <p className={styles.contactDetail}>Email: connect@aberrange.com</p>
          <Button variant="link" className={styles.chatButton}>Start Live Chat</Button>
        </div>
      </section>

      <section className={styles.socialProof}>
        <h2 className={styles.subtitle}>Join the Businesses We’ve Empowered</h2>
        <p className={styles.testimonial}>
          “Aberrange automated our workflows and saved us 20 hours a week!” — Tech Startup Founder
        </p>
        <p className={styles.stat}>100+ businesses scaled with Aberrange’s solutions.</p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>Let’s take your business to the next level—together.</p>
      </footer>
    </div>
  );
};

export default CallUs;