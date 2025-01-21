'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

interface Step1WhoToHireProps {
  onNext: () => void;
}

const Step1WhoToHire: React.FC<Step1WhoToHireProps> = ({ onNext }) => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

  return (
    <StepTemplate
      title="Who would you like to hire?"
      isFirst={true}
      options={[
        "Web Developer",
        "Academic Researcher",
        "Q/A Assistant",
        "System Architect",
        "Virtual Assistant",
        "Excel Expert",
        "Data Analyst",
        "Graphic Designer",
      ]}
      selectedOption={formData.hire} // Get the 'hire' value from formData
      onSelect={(value) => updateFormData("hire", value)} // Update the 'hire' field in formData
      onNext={onNext}
    />
  );
};

export default Step1WhoToHire;
