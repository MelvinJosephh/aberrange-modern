'use client';

import React from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../hire-talent/shared/step-template";

interface Step6SkillsProps {
  onNext: () => void;
  onBack: () => void;
}

const Step6Skills: React.FC<Step6SkillsProps> = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

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

    updateStepData("skills", newSkills);
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <StepTemplate
      title="What skills would you like to see in your new hire?"
      options={skills}
      selectedOption={selectedSkills}
      setSelectedOption={(value: string) => handleSkillToggle(value)}
      isMultiSelect={true}
      onNext={handleNext}
      onBack={onBack}
      showSkipButton={true}
    />
  );
};

export default Step6Skills;
