'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

const Step2CompanySize: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

  const options = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201+ Employees",
    "Solo Project",
  ];

  const selectedOption = formData.companySize;

  return (
    <StepTemplate
      options={options}
      selectedOption={selectedOption} // Get the companySize value from formData
      onSelect={(value: string) => updateFormData("companySize", value)} // Update the companySize field in formData
    />
  );
};

export default Step2CompanySize;
