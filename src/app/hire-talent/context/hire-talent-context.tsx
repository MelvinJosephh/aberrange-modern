'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the extended form data type
interface ContactInfo {
  email: string;
  companyName: string;
  contactName: string;
  phoneNumber: string;
}

interface HireTalentFormData {
  hire: string;
  companySize: string;
  projectType: string;
  commitment: string;
  skills: string[];
  startDate: string;
  contactInfo: ContactInfo;  // Add contactInfo to the form data
  projectLength: string;  // Add projectLength field to form data
}

// Context value type
interface HireTalentContextValue {
  formData: HireTalentFormData;
  updateFormData: <K extends keyof HireTalentFormData>(field: K, value: HireTalentFormData[K]) => void;
  updateContactInfo: <K extends keyof ContactInfo>(field: K, value: ContactInfo[K]) => void;  // New method to update contact info fields
}

// Default values for form data
const defaultFormData: HireTalentFormData = {
  hire: '',
  companySize: '',
  projectType: '',
  commitment: '',
  skills: [],
  startDate: '',
  contactInfo: {
    email: '',
    companyName: '',
    contactName: '',
    phoneNumber: '',
  },
  projectLength: '',  // Initialize projectLength field
};

// Context initialization
const HireTalentContext = createContext<HireTalentContextValue | null>(null);

// Provider
export const HireTalentProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<HireTalentFormData>(defaultFormData);

  const updateFormData = <K extends keyof HireTalentFormData>(field: K, value: HireTalentFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // New function to update contact info fields
  const updateContactInfo = <K extends keyof ContactInfo>(field: K, value: ContactInfo[K]) => {
    setFormData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value,
      },
    }));
  };

  return (
    <HireTalentContext.Provider value={{ formData, updateFormData, updateContactInfo }}>
      {children}
    </HireTalentContext.Provider>
  );
};

// Hook
export const useHireTalent = () => {
  const context = useContext(HireTalentContext);
  if (!context) {
    throw new Error('useHireTalent must be used within a HireTalentProvider');
  }
  return context;
};
