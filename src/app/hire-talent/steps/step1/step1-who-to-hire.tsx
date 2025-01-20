'use client';

import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../components/step-template";

interface Step1WhoToHireProps {
  onNext: () => void;
}

const Step1WhoToHire: React.FC<Step1WhoToHireProps> = ({ onNext }) => {
  const { formData, updateStepData } = useStepContext();

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
      selectedOption={formData.hire}
      onSelect={(value) => updateStepData("hire", value)}
      onNext={onNext}
    />
  );
};

export default Step1WhoToHire;
