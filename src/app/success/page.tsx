"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

// Define the shape of each message entry
interface Message {
  type: string;
  message: string;
  secondaryMessage: string;
}

// Define the allowed keys as a union type
type MessageType = "hiring" | "contact" | "quote" | "request";

// Type the messages object with specific keys
const messages: Record<MessageType, Message> = {
  hiring: {
    type: "Hiring Request",
    message: "We’ve received your virtual assistant request and will get back to you within 48 hours with next steps.",
    secondaryMessage: "Want to learn more? Check out our services while you wait!",
  },
  contact: {
    type: "Message",
    message: "Thanks for reaching out! We’ll reply within 24 hours.",
    secondaryMessage: "Explore our services in the meantime!",
  },
  quote: {
    type: "Quote Request",
    message: "We’ve received your request and will get back with a quote within 24-48 hours.",
    secondaryMessage: "Check out how we can help your business grow!",
  },
  request: {
    type: "Consultation Request",
    message: "Thank you for scheduling a consultation with Aberrange. We’ll reach out soon to confirm your appointment and discuss how our AI-powered solutions can transform your business.",
    secondaryMessage: "Feel free to explore more about how Aberrange can support your goals.",
  },
};

const Success: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") || "request") as MessageType; // Cast to MessageType

  const { type: displayType, message, secondaryMessage } = messages[type] || messages.request;

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center bg-[var(--secondary-color)] p-8 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
        <h1 className="text-[var(--text-primary)] text-3xl md:text-4xl font-bold mb-6">
          Thank You for Your {displayType}!
        </h1>
        <p className="text-[var(--neutral-color)] text-lg md:text-xl mb-6">
          {message}
        </p>
        <p className="text-[var(--neutral-color)] text-base mb-8">
          {secondaryMessage}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleBackToHome}
            className="bg-[var(--interactive-color)] text-[var(--text-light)] hover:bg-[var(--interactive-hover)] rounded-[var(--border-radius-md)] py-2 px-6 text-lg font-medium"
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/services")}
            className="border-[var(--interactive-color)] text-[var(--interactive-color)] hover:bg-[var(--secondary-color-dark)] rounded-[var(--border-radius-md)] py-2 px-6 text-lg font-medium"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;