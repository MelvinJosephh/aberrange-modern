import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../hire-talent/shared/step-template";

interface Step4ProjectLengthProps {
  onNext: () => void;
  onBack: () => void;
}

const Step4ProjectLength: React.FC<Step4ProjectLengthProps> = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

  const options = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months",
  ];

  const selectedOption = formData.projectLength;

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("projectLength", selectedOption);
      onNext();
    }
  };

  return (
    <StepTemplate
      title="How long do you need assistance with this service?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value: string) => updateStepData("projectLength", value)}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step4ProjectLength;
