'use client';

import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../shared/step-template";

interface Step5CommitmentProps {
  onNext: () => void;
  onBack: () => void;
}

const Step5Commitment: React.FC<Step5CommitmentProps> = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

  const options = [
    "Full-time",
    "Part-time",
    "Contract",
    "Hourly/Project-based",
  ];

  const selectedOption = formData.commitment;

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("commitment", selectedOption);
      onNext();
    }
  };

  return (
    <StepTemplate
      title="What level of commitment will you require from the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value: string) => updateStepData("commitment", value)}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step5Commitment;
