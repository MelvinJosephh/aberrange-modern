'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Updated context for hire talent
import StepTemplate from "../components/step-template"; // Updated path for StepTemplate

const Step4ProjectLength: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Updated to use the updated context

  const options = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months",
  ];

  const selectedOption = formData.projectLength;

  return (
    <StepTemplate
      options={options}
      selectedOption={selectedOption} // Get the projectLength value from formData
      onSelect={(value: string) => updateFormData("projectLength", value)} // Update the projectLength field in formData
    />
  );
};

export default Step4ProjectLength;
