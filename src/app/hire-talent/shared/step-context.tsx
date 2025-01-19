// context/step-context.tsx

'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your form data
interface StepFormData {
  hire: string;
  // Add other fields as necessary
}

// Default context data
const defaultFormData: StepFormData = {
  hire: '',
  // Initialize other fields as necessary
};

// Create context
const StepContext = createContext<{
  formData: StepFormData;
  updateStepData: (field: keyof StepFormData, value: string) => void;
} | null>(null);

// Context provider component
export const StepContextProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<StepFormData>(defaultFormData);

  const updateStepData = (field: keyof StepFormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <StepContext.Provider value={{ formData, updateStepData }}>
      {children}
    </StepContext.Provider>
  );
};

// Custom hook to use context
export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStepContext must be used within a StepContextProvider');
  }
  return context;
};
