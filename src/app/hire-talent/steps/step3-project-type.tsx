'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Updated context for hire talent
import StepTemplate from "../components/step-template"; // Updated path for StepTemplate

const Step3ProjectType: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Updated to use the updated context

  const options = [
    "New idea or project",
    "Existing project that needs more resources",
    "Academic Help",
    "None of the above, I'm just looking to learn more about Aberrange",
  ];

  const selectedOption = formData.projectType;

  return (
    <StepTemplate
      options={options}
      selectedOption={selectedOption} // Get the projectType value from formData
      onSelect={(value: string) => updateFormData("projectType", value)} // Update the projectType field in formData
    />
  );
};

export default Step3ProjectType;
