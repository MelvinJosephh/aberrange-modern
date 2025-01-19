'use client';

import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../shared/step-template";

interface Step2CompanySizeProps {
  onNext: () => void;
  onBack: () => void;
}

const Step2CompanySize: React.FC<Step2CompanySizeProps> = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

  const options = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201+ Employees",
    "Solo Project",
  ];

  const selectedOption = formData.companySize;

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("companySize", selectedOption);
      onNext();
    }
  };

  return (
    <StepTemplate
      title="How many people are employed at your company?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value: string) => updateStepData("companySize", value)}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step2CompanySize;
