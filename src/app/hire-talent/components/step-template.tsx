'use client';

import React from 'react';
import styles from '@/styles/hire-talent/steps-template.module.scss';

interface StepTemplateProps {
  title: string;
  options: string[];
  selectedOption: string | string[];  // Allow both single and multiple selections
  onSelect: (option: string | string[]) => void;  // Update to handle multiple selection
  onNext: () => void;
  onBack?: () => void;
  isFirst?: boolean;
  isFinalStep?: boolean;
  showNext?: boolean; // New prop to control visibility of Next button
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
  showNext = true, // Default to show the Next button
  children,
}) => {
  const handleOptionClick = (option: string) => {
    // For multiple selections, toggle the option
    if (Array.isArray(selectedOption)) {
      if (selectedOption.includes(option)) {
        onSelect(selectedOption.filter(item => item !== option));
      } else {
        onSelect([...selectedOption, option]);
      }
    } else {
      onSelect(option);
    }
  };

  return (
    <div className={styles['step-template']}>
      <h2 className={styles.title}>{title}</h2>
      
      {options.length > 0 && (
        <div className={styles['options-grid']}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.option} ${
                Array.isArray(selectedOption)
                  ? selectedOption.includes(option)
                    ? styles.selected
                    : ''
                  : selectedOption === option
                  ? styles.selected
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      
      <div className={styles['step-content']}>{children}</div>
      
      <div className={styles.actions}>
        {!isFirst && onBack && (
          <button className={styles.button} onClick={onBack}>
            Back
          </button>
        )}
        {showNext && (
          <button className={styles.button} onClick={onNext}>
            {isFinalStep ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default StepTemplate;