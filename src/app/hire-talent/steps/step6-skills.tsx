'use client';

import React from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";

interface Step6SkillsProps {
  onNext: () => void;
  onBack: () => void;
}

const Step6Skills: React.FC<Step6SkillsProps> = ({ onNext, onBack }) => {
  const { formData, updateFormData } = useHireTalent(); // Use the hiretalent context

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

  const handleNext = () => {
    onNext();
  };

  return (
    <StepTemplate
      title="What skills would you like to see in your new hire?"
      options={skills}
      selectedOption={selectedSkills}
      onSelect={(value: string) => handleSkillToggle(value)}
      isMultiSelect={true}
      onNext={handleNext}
      onBack={onBack}
      showSkipButton={true}
    />
  );
};

export default Step6Skills;
