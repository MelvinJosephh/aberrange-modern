"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { toast } from "sonner";
import { servicesData } from "@/lib/models/servicesData"; // Use the real services model

// Updated schema with subService
const FormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  subService: z.string().min(1, "Please select a sub-service."),
  budget: z.string().optional(),
  projectOverview: z.string().optional(),
  date: z.date().optional(),
});

const GetQuote: React.FC = () => {
  const router = useRouter();
  const { fetch: authFetch } = useAuthFetch();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      subService: "",
      budget: "",
      projectOverview: "",
      date: undefined,
    },
  });

  const selectedService = form.watch("service"); // Watch service to update subService options

  const handleQuoteSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await authFetch("api/quote", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          service: data.service,
          subService: data.subService,
          projectOverview: data.projectOverview,
          budget: data.budget,
          timeline: data.date ? format(data.date, "yyyy-MM-dd") : undefined,
        }),
      });
      toast.success("Quote submitted successfully!");
      router.push(`/success?type=quote`);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit quote"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-[var(--text-primary)] text-4xl md:text-5xl font-bold mb-4 pt-10">
          Get Your Custom Quote Today
        </h1>
        <p className="text-[var(--neutral-color)] text-lg md:text-xl max-w-2xl mx-auto">
          Unlock the power of AI-driven virtual assistance tailored to your
          business. Tell us your needs, and we’ll deliver a personalized quote
          to streamline, automate, and scale your operations.
        </p>
      </header>

      <section
        id="quote-form"
        className="max-w-3xl mx-auto bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]"
      >
        <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-6">
          Tell Us About Your Needs
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleQuoteSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Company (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Company Name"
                        className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Service Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]">
                          <SelectValue placeholder="Select a Service Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[var(--secondary-color)] border-[var(--border-color-light)] text-[var(--neutral-color)]">
                        {servicesData.map((category) => (
                          <SelectItem key={category.slug} value={category.title}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Specific Service
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!selectedService}
                    >
                      <FormControl>
                        <SelectTrigger className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]">
                          <SelectValue placeholder="Select a Specific Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[var(--secondary-color)] border-[var(--border-color-light)] text-[var(--neutral-color)]">
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
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                      Estimated Budget
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)]">
                          <SelectValue placeholder="Select Budget Range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[var(--secondary-color)] border-[var(--border-color-light)] text-[var(--neutral-color)]">
                        <SelectItem value="<500">Less than $500/month</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000/month</SelectItem>
                        <SelectItem value="1000-2000">$1,000 - $2,000/month</SelectItem>
                        <SelectItem value="2000-3500">$2,000 - $3,500/month</SelectItem>
                        <SelectItem value="3500+">$3,500+/month</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[var(--error-color)]" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="projectOverview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                    Project Details
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your needs (e.g., specific tasks, timeline, goals)"
                      className="border-[var(--border-color-light)] bg-[var(--background-color)] text-[var(--neutral-color)] focus:border-[var(--interactive-color)] rounded-[var(--border-radius-sm)] min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[var(--error-color)]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--neutral-color)] text-base font-medium">
                    Preferred Start Date (Optional)
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left border-[var(--border-color-light)] text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-[var(--secondary-color)] border-[var(--border-color-light)]"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={{ before: new Date() }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-[var(--error-color)]" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[var(--interactive-color)] text-[var(--text-light)] hover:bg-[var(--interactive-hover)] rounded-[var(--border-radius-md)] py-2 text-lg font-medium"
            >
              Submit Quote Request
            </Button>
          </form>
        </Form>
      </section>

      <section className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-8">
          Why Choose Aberrange?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[var(--secondary-color)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--neutral-color)] text-xl font-semibold mb-2">
              Tailored Solutions
            </h3>
            <p className="text-[var(--neutral-color)] text-base">
              Get a quote customized to your unique business challenges and
              goals.
            </p>
          </div>
          <div className="p-6 bg-[var(--secondary-color)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--neutral-color)] text-xl font-semibold mb-2">
              Fast Response
            </h3>
            <p className="text-[var(--neutral-color)] text-base">
              Expect a detailed quote within 24-48 hours from our expert team.
            </p>
          </div>
          <div className="p-6 bg-[var(--secondary-color)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--neutral-color)] text-xl font-semibold mb-2">
              Proven Expertise
            </h3>
            <p className="text-[var(--neutral-color)] text-base">
              Leverage our experience with 100+ businesses to drive your
              success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;