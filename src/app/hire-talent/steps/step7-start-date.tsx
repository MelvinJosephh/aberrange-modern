'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Updated context for hire talent
import StepTemplate from "../components/step-template"; // Updated path for StepTemplate

const Step7StartDate: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Use the updated hiretalent context

  const options: string[] = [
    "Immediately",
    "In 1 to 2 weeks",
    "More than 2 weeks from now",
    "I'll decide later",
  ];

  const selectedOption: string | undefined = formData.startDate;

  return (
    <StepTemplate
      options={options}
      selectedOption={selectedOption || ""}
      onSelect={(value: string) => updateFormData("startDate", value)} // Update on select
    />
  );
};

export default Step7StartDate;
