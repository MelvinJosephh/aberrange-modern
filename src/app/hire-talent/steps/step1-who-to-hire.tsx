'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

const Step1WhoToHire: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

  const options = [
    "Web Developer",
    "Academic Researcher",
    "Q/A Assistant",
    "System Architect",
    "Virtual Assistant",
    "Excel Expert",
    "Data Analyst",
    "Graphic Designer",
  ];

  return (
    <StepTemplate
      options={options}
      selectedOption={formData.hire} // Get the 'hire' value from formData
      onSelect={(value) => updateFormData("hire", value)} // Update the 'hire' field in formData
      onNext={onNext}
    />
  );
};

export default Step1WhoToHire;
