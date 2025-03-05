'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/pages/get-quote.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils'; // Utility from Shadcn for className merging
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  services: z.string().min(1, 'Please select a service.'),
  budget: z.string().optional(),
  details: z.string().optional(),
  date: z.date().optional(), // Optional date field
});

const GetQuote: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      services: '',
      budget: '',
      details: '',
      date: undefined,
    },
  });

  const handleQuoteSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log('Quote request:', data); // Placeholder for API call
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
    
      </header>

      {/* Quote Form */}
      <section id="quote-form" className={styles.formSection}>
        <h2 className={styles.subtitle}>Tell Us About Your Needs</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleQuoteSubmit)} className={styles.quoteForm}>
            <div className={styles.formGrid}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={styles.formItem}>
                    <FormLabel className={styles.formLabel}>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className={styles.formInput}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={styles.formItem}>
                    <FormLabel className={styles.formLabel}>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className={styles.formInput}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className={styles.formItem}>
                    <FormLabel className={styles.formLabel}>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Company Name"
                        className={styles.formInput}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className={styles.formItem}>
                    <FormLabel className={styles.formLabel}>Services Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={styles.formSelect}>
                          <SelectValue placeholder="Select a Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ai-automation">AI-Powered Automation</SelectItem>
                        <SelectItem value="tech-support">Tech & IT Support</SelectItem>
                        <SelectItem value="admin">Admin & Executive Assistance</SelectItem>
                        <SelectItem value="finance">Finance & Bookkeeping</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className={styles.formItem}>
                    <FormLabel className={styles.formLabel}>Estimated Budget</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={styles.formSelect}>
                          <SelectValue placeholder="Select Budget Range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className={styles.formItem}>
                  <FormLabel className={styles.formLabel}>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your needs (e.g., specific tasks, timeline, goals)"
                      className={styles.formTextarea}
                      rows={4}
                      {...field}
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
                <FormItem className={styles.formItem}>
                  <FormLabel className={styles.formLabel}>Preferred Start Date (Optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            styles.datePickerButton,
                            !field.value && styles.mutedForeground
                          )}
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
                        disabled={{ before: new Date() }} // Disables past dates
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className={styles.submitButton}>Submit Quote Request</Button>
          </form>
        </Form>
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