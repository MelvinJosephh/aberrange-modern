import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

interface Step4ProjectLengthProps {
  onNext: () => void;
  onBack: () => void;
}

const Step4ProjectLength: React.FC<Step4ProjectLengthProps> = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

  const options = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months",
  ];

  const selectedOption = formData.projectLength;

  const handleNext = () => {
    if (selectedOption) {
      updateFormData("projectLength", selectedOption); // Update the projectLength field in formData
      onNext();
    }
  };

  return (
    <StepTemplate
      title="How long do you need assistance with this service?"
      options={options}
      selectedOption={selectedOption} // Get the projectLength value from formData
      onSelect={(value: string) => updateFormData("projectLength", value)} // Update the projectLength field in formData
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step4ProjectLength;
