"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ConsultationSuccess: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center bg-[var(--secondary-color)] p-8 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
        <h1 className="text-[var(--text-primary)] text-3xl md:text-4xl font-bold mb-6">
          Consultation Booked Successfully!
        </h1>
        <p className="text-[var(--neutral-color)] text-lg md:text-xl mb-6">
          Thank you for scheduling a consultation with Aberrange. 
          We’ll reach out soon to confirm your appointment and discuss how our AI-powered solutions can transform your business.
        </p>
        <p className="text-[var(--neutral-color)] text-base mb-8">
          In the meantime, explore more about what we offer or return to the homepage.
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

export default ConsultationSuccess;