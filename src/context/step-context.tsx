'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

// Defining interfaces for the form data structure
interface ContactInfo {
  email: string;
  companyName: string;
  contactName: string;
  phoneNumber: string;
}

interface FormData {
  hire: string;
  companySize: string;
  projectType: string;
  projectLength: string;
  commitment: string;
  skills: string[];
  startDate: string;
  contactInfo: ContactInfo;
}

// Create a context with a default value of FormData
interface StepContextType {
  formData: FormData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStepData: (key: keyof FormData, value: any) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

// StepProvider component to provide form data to its children
export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    hire: "",
    companySize: "",
    projectType: "",
    projectLength: "",
    commitment: "",
    skills: [],
    startDate: "",
    contactInfo: {
      email: "",
      companyName: "",
      contactName: "",
      phoneNumber: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateStepData = (key: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <StepContext.Provider value={{ formData, updateStepData }}>
      {children}
    </StepContext.Provider>
  );
};

// Custom hook to use StepContext
export const useStepContext = (): StepContextType => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a StepProvider");
  }
  return context;
};
