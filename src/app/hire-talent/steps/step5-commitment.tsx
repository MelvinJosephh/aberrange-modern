'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

const Step5Commitment: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Use the hire-talent context

  const options = [
    "Full-time",
    "Part-time",
    "Contract",
    "Hourly/Project-based",
  ];

  return (
    <StepTemplate
      options={options}
      selectedOption={formData.commitment} // Get the commitment value from formData
      onSelect={(value: string) => updateFormData("commitment", value)} // Update the commitment field in formData
    />
  );
};

export default Step5Commitment;
