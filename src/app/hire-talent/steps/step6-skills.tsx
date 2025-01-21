'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Updated context for hire talent
import StepTemplate from "../components/step-template"; // Updated path for StepTemplate

const Step6Skills: React.FC = () => {
  const { formData, updateFormData } = useHireTalent(); // Updated to use the updated context

  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "AWS",
    "Machine Learning",
    "UI/UX Design",
    "Project Management",
    "SQL",
    "Mobile Development",
    "Others",
  ];

  const selectedSkills: string[] = formData.skills;

  const handleSkillToggle = (skill: string) => {
    const newSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((item) => item !== skill)
      : [...selectedSkills, skill];

    updateFormData("skills", newSkills); // Update the skills array in formData
  };

  return (
    <StepTemplate
      options={skills}
      selectedOption={selectedSkills}
      onSelect={(value: string) => handleSkillToggle(value)}
      isMultiSelect={true}
    />
  );
};

export default Step6Skills;
