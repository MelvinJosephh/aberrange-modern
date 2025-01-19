"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Dynamically import the step components
const Step1WhoToHire = dynamic(() => import("./components/step1-who-to-hire"));
const Step2CompanySize = dynamic(() => import("./components/step2-company-size"));
const Step3ProjectType = dynamic(() => import("./components/step3-project-type"));
const Step4ProjectType = dynamic(() => import("./components/step4-project-type"));
const Step5Commitment = dynamic(() => import("./components/step5-commitment"));
const Step6Skills = dynamic(() => import("./components/step6-skills"));
const Step7StartDate = dynamic(() => import("./components/step7-start-date"));
const Step8Success = dynamic(() => import("./components/step8-success"));

// Importing StepTemplate from the shared folder
import StepTemplate from "../shared/step-template";

const StepPage = ({ params }: { params: { step: string } }) => {
  const { step } = params;
  const router = useRouter();

  // Define navigation functions
  const onNext = () => {
    const nextStep = `step${parseInt(step.replace("step", "")) + 1}`;
    router.push(`/hire-talent/${nextStep}`);
  };

  const onBack = () => {
    const prevStep = `step${parseInt(step.replace("step", "")) - 1}`;
    router.push(`/hire-talent/${prevStep}`);
  };

  // Options and selected options for steps
  const options = ["Option 1", "Option 2", "Option 3"]; // Example options
  const selectedOption = "Option 1"; // Example selected option
  const setSelectedOption = (option: string) => {
    // Handle option selection
    console.log(option);
  };

  let CurrentStepComponent;

  switch (step) {
    case "step1":
      CurrentStepComponent = Step1WhoToHire;
      break;
    case "step2":
      CurrentStepComponent = Step2CompanySize;
      break;
    case "step3":
      CurrentStepComponent = Step3ProjectType;
      break;
    case "step4":
      CurrentStepComponent = Step4ProjectType;
      break;
    case "step5":
      CurrentStepComponent = Step5Commitment;
      break;
    case "step6":
      CurrentStepComponent = Step6Skills;
      break;
    case "step7":
      CurrentStepComponent = Step7StartDate;
      break;
    case "step8":
      CurrentStepComponent = Step8Success;
      break;
    default:
      // eslint-disable-next-line react/display-name
      CurrentStepComponent = () => <div>Step not found!</div>;
  }

  return (
    <div>
      <h1>Hire Talent - Step: {step}</h1>
      {/* Render the shared StepTemplate with the dynamic step component */}
      <StepTemplate
        title={`Step ${step}`}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onNext={onNext}
        onBack={onBack}
        isFirst={step === "step1"}
        isFinalStep={step === "step8"}
      >
        {/* Pass the dynamic step content as children */}
        <CurrentStepComponent onNext={onNext} onBack={onBack} />
      </StepTemplate>
    </div>
  );
};

export default StepPage;
