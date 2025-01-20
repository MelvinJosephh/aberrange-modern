'use client';

import React from 'react';
import '@/styles/hire-talent/steps-template.module.scss';

interface StepTemplateProps {
  title: string;
  options: string[];
  selectedOption: string | string[];
  onSelect: (option: string) => void;
  onNext: () => void;
  onBack?: () => void;
  isFirst?: boolean;
  isFinalStep?: boolean;
  isMultiSelect?: boolean; 
  showSkipButton?: boolean;
  children?: React.ReactNode;
}

const StepTemplate: React.FC<StepTemplateProps> = ({
  title,
  options,
  selectedOption,
  onSelect,
  onNext,
  onBack,
  isFirst = false,
  isFinalStep = false,
  isMultiSelect = false, 
  showSkipButton = false,
}) => {

  const handleOptionClick = (option: string) => {
    if (isMultiSelect) {
      // If multi-select is enabled, toggle the option in selectedOption array
      if (Array.isArray(selectedOption)) {
        if (selectedOption.includes(option)) {
          onSelect(option); // Deselect
        } else {
          onSelect(option); // Select
        }
      }
    } else {
      // For single select, just select the option
      onSelect(option);
    }
  };

  return (
    <div className="step-template">
      <h2>{title}</h2>
      <div className="options-grid">
        {options.map((option) => (
          <div
            key={option}
            className={`option ${isMultiSelect ? 
              (Array.isArray(selectedOption) && selectedOption.includes(option) ? 'selected' : '') :
              (selectedOption === option ? 'selected' : '')}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="actions">
        {!isFirst && onBack && <button onClick={onBack}>Back</button>}
        {showSkipButton && <button onClick={onNext}>Skip</button>}
        <button onClick={onNext}>{isFinalStep ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  );
};

export default StepTemplate;
