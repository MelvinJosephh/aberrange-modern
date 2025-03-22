'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import styles from '@/styles/pages/hireVA.module.scss';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Laptop, DollarSign, BarChart, UserCheck } from 'lucide-react';
import { servicesData } from '@/lib/models/servicesData';

// Form schema
const formSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  subService: z.string().min(1, 'Please select a sub-service'),
  industry: z.string().min(1, 'Industry is required'),
  hub: z.string().min(1, 'Hub is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  tasks: z.string().min(1, 'Tasks are required'),
  hours: z.string().min(1, 'Hours are required'),
  budget: z.string().optional(),
});

const HireVA: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: '',
      subService: '',
      industry: '',
      hub: '',
      name: '',
      email: '',
      company: '',
      tasks: '',
      hours: '',
      budget: '',
    },
  });

  const selectedService = form.watch('service');

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Submit hiring form data
      const hiringResponse = await fetch('http://localhost:5000/api/hiring/submit-hiring-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: data.service,
          subService: data.subService,
          industry: data.industry,
          hub: data.hub,
          name: data.name,
          email: data.email,
          company: data.company,
          tasks: data.tasks,
          hours: data.hours,
          budget: data.budget,
        }),
      });

      if (!hiringResponse.ok) {
        const errorData = await hiringResponse.json();
        throw new Error(errorData.message || 'Failed to submit hiring request');
      }

      toast.success('Hiring Request Submitted!', {
        description: 'We’ll review your request and get back to you soon.',
      });

      // Redirect to shared success page with query params
      router.push(`/success?type=hiring`);
    } catch (error) {
      toast.error('Submission Failed', {
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section className={styles.hireVA}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Hire Your Smart Virtual Assistant Today</h1>
          <p className={styles.heroSubtitle}>
            Leverage AI-powered virtual assistants for a wide range of services to streamline your business, cut costs, and boost productivity—perfect for startups, SMBs, and enterprises.
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
                <Laptop className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Virtual Assistant Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  From admin support to digital marketing, our VAs handle it all.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <UserCheck className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Personal/Executive Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  Email, travel, and management support tailored to your needs.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <DollarSign className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Accounting & Bookkeeping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  Precise payroll, reports, and reconciliations.
                </p>
              </CardContent>
            </Card>
            <Card className={styles.serviceCard}>
              <CardHeader>
                <BarChart className={styles.serviceIcon} />
                <CardTitle className={styles.serviceTitle}>Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.serviceDescription}>
                  SEO, PPC, and social media strategies to grow your brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form Section */}
        <div id="hire-form" className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Let’s Get You Started</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Service Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={styles.input}>
                          <SelectValue placeholder="Select a service category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {servicesData.map((category) => (
                          <SelectItem key={category.slug} value={category.title}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Specific Service</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!selectedService}
                    >
                      <FormControl>
                        <SelectTrigger className={styles.input}>
                          <SelectValue placeholder="Select a specific service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedService &&
                          servicesData
                            .find((category) => category.title === selectedService)
                            ?.subServices.map((subService) => (
                              <SelectItem key={subService} value={subService}>
                                {subService}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Tech, Healthcare" {...field} className={styles.input} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hub"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Hub (Location/Base)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Remote, New York" {...field} className={styles.input} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} className={styles.input} />
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
                    <FormLabel className={styles.label}>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email address" {...field} className={styles.input} />
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
                    <FormLabel className={styles.label}>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} className={styles.input} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tasks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Tasks</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Data entry, scheduling, research"
                        {...field}
                        className={styles.textarea}
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.label}>Hours Needed Per Week</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={styles.input}>
                          <SelectValue placeholder="Select hours per week" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5-10">5 - 10 hours/week</SelectItem>
                        <SelectItem value="10-20">10 - 20 hours/week</SelectItem>
                        <SelectItem value="20-30">20 - 30 hours/week</SelectItem>
                        <SelectItem value="30-40">30 - 40 hours/week</SelectItem>
                        <SelectItem value="40+">Custom (40+ hours/week)</SelectItem>
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
                  <FormItem>
                    <FormLabel className={styles.label}>Monthly Budget (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={styles.input}>
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<500">Less than $500/month</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000/month</SelectItem>
                        <SelectItem value="1000-2000">$1,000 - $2,000/month</SelectItem>
                        <SelectItem value="2000-3500">$2,000 - $3,500/month</SelectItem>
                        <SelectItem value="3500+">$3,500+/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={styles.submitButton}>
                Submit Hiring Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default HireVA;