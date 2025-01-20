'use client';

import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../components/step-template";

interface Step7StartDateProps {
  onNext: () => void;
  onBack: () => void;
}

const Step7StartDate: React.FC<Step7StartDateProps> = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

  const options: string[] = [
    "Immediately",
    "In 1 to 2 weeks",
    "More than 2 weeks from now",
    "I'll decide later",
  ];

  const selectedOption: string | undefined = formData.startDate;

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("startDate", selectedOption);
      onNext();
    }
  };

  return (
    <StepTemplate
      title="When do you need the developer?"
      options={options}
      selectedOption={selectedOption || ""}
      onSelect={(value: string) => updateStepData("startDate", value)}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step7StartDate;
