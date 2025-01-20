'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Form data type
interface HireTalentFormData {
  hire: string;
  companySize: string;
  projectType: string;
  commitment: string;
  skills: string[];
  startDate: string;
}

// Context value type
interface HireTalentContextValue {
  formData: HireTalentFormData;
  updateFormData: <K extends keyof HireTalentFormData>(
    field: K,
    value: HireTalentFormData[K]
  ) => void;
}

// Default values
const defaultFormData: HireTalentFormData = {
  hire: '',
  companySize: '',
  projectType: '',
  commitment: '',
  skills: [],
  startDate: '',
};

// Context initialization
const HireTalentContext = createContext<HireTalentContextValue | null>(null);

// Provider
export const HireTalentProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<HireTalentFormData>(defaultFormData);

  const updateFormData = <K extends keyof HireTalentFormData>(
    field: K,
    value: HireTalentFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <HireTalentContext.Provider value={{ formData, updateFormData }}>
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
