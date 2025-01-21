'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

interface Step5CommitmentProps {
  onNext: () => void;
  onBack: () => void;
}

const Step5Commitment: React.FC<Step5CommitmentProps> = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

  const options = [
    "Full-time",
    "Part-time",
    "Contract",
    "Hourly/Project-based",
  ];

  const selectedOption = formData.commitment;

  const handleNext = () => {
    if (selectedOption) {
      updateFormData("commitment", selectedOption); // Update the commitment field in formData
      onNext();
    }
  };

  return (
    <StepTemplate
      title="What level of commitment will you require from the developer?"
      options={options}
      selectedOption={selectedOption} // Get the commitment value from formData
      onSelect={(value: string) => updateFormData("commitment", value)} // Update the commitment field in formData
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step5Commitment;
