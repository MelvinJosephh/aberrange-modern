"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useAuthFetch } from "@/hooks/useAuthFetch"; // Import the hook
import { toast } from "sonner";
import styles from "@/styles/pages/getStarted.module.scss";

// Form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().optional(),
  date: z.date({ required_error: "A consultation date is required." }),
});

const GetStarted: React.FC = () => {
  const router = useRouter();
  const { fetch: authFetch } = useAuthFetch();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      date: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const consultationData = {
      name: data.name,
      email: data.email,
      company: data.company || "",
      message: data.message || "",
      consultationDate: data.date.toISOString(),
    };

    try {
      await authFetch("api/consultations", {
        method: "POST",
        body: JSON.stringify(consultationData),
      });
      toast.success("Consultation booked successfully!");
      router.push(`/success?type=request`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error("Submission Failed", { description: message });
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

        <div className={styles.formWrapper}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your email address"
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your needs"
                        rows={4}
                        {...field}
                        disabled={isLoading}
                        className={styles.formTextarea}
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
                    <FormLabel className={styles.formLabel}>Select a Date</FormLabel>
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
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
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
                {isLoading ? "Submitting..." : "Schedule Consultation"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;