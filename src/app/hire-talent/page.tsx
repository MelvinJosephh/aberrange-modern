'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProgressIndicator from "@/app/hire-talent/shared/progress-indicator";
import "../../Styles/HireTalent/HireTalent.scss";

// Import step components dynamically
import Step1WhoToHire from "../../app/hire-talent/[step]/step1-who-to-hire";
import Step2CompanySize from "../../app/hire-talent/[step]/step2-company-size";
import Step3ProjectType from "../../app/hire-talent/[step]/step3-project-type";
import Step4ProjectLength from "../../app/hire-talent/[step]/step4-project-type";
import Step5Commitment from "../../app/hire-talent/[step]/step5-commitment";
import Step6Skills from "../../app/hire-talent/[step]/step6-skills";
import Step7StartDate from "../../app/hire-talent/[step]/step7-start-date";
import Step8Success from "../../app/hire-talent/[step]/step8-success";

interface FormState {
  [key: string]: any;
}

interface Step {
  path: string;
  component: React.ComponentType<any>;
}

const steps: Step[] = [
  { path: "step1", component: Step1WhoToHire },
  { path: "step2", component: Step2CompanySize },
  { path: "step3", component: Step3ProjectType },
  { path: "step4", component: Step4ProjectLength },
  { path: "step5", component: Step5Commitment },
  { path: "step6", component: Step6Skills },
  { path: "step7", component: Step7StartDate },
  { path: "step8", component: Step8Success },
];

const HireTalentFlow: React.FC = () => {
  const router = useRouter();
  const { step } = router.query; // Dynamically retrieve the step from URL
  const [formState, setFormState] = useState<FormState>({});
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    if (step) {
      const stepNum = parseInt(step as string, 10);
      if (!isNaN(stepNum)) setCurrentStep(stepNum);
    }
  }, [step]);

  // Navigation Handlers
  const handleNext = (data: FormState) => {
    setFormState((prevState) => ({ ...prevState, ...data }));
    router.push(`/hire-talent/step${currentStep + 1}`);
  };

  const handleBack = () => {
    router.push(`/hire-talent/step${currentStep - 1}`);
  };

  return (
    <div className="hire-talent-flow">
      <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} />
      {steps.map((step, index) => {
        if (`step${currentStep}` === step.path) {
          const StepComponent = step.component;
          return (
            <StepComponent
              key={index}
              onNext={handleNext}
              onBack={index > 0 ? handleBack : undefined}
              formState={formState}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default HireTalentFlow;
