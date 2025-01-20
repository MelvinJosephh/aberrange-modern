'use client';

import { useRouter } from 'next/navigation';
import { steps } from '../utils/step-config'; // Path to your steps config
import { useHireTalent } from '../context/hire-talent-context';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import StepTemplate from '../components/step-template'; // Ensure correct import of StepTemplate

// Function to dynamically import each step's component based on the step id
const DynamicStepComponent = ({ componentName }: { componentName: string }) => {
  try {
    // Dynamically import the component from the correct path
    const StepComponent = dynamic(() => import(`../components/${componentName}`), { ssr: false });
    return <StepComponent />;
  } catch (error) {
    console.error('Error loading component:', error);
    return <p>Component not found</p>;
  }
};

const DynamicStepPage = async ({ params }: { params: { step: string } }) => {
  const router = useRouter();
  const { formData, updateFormData } = useHireTalent();

  // Await params.step to ensure it’s fully resolved
  const stepId = params.step;
  if (!stepId) {
    return <p>Loading...</p>; // Handle case where params are not resolved yet
  }

  const stepIndex = steps.findIndex((s) => s.id === stepId);

  if (stepIndex === -1) return <p>Invalid step</p>;

  const step = steps[stepIndex];

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      router.push(`/hire-talent/${steps[stepIndex + 1].id}`);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      router.push(`/hire-talent/${steps[stepIndex - 1].id}`);
    }
  };

  return (
    <div>
      <h1>{step.title}</h1>

      {/* Dynamically render the component based on the step */}
      <DynamicStepComponent componentName={step.component} />

      <StepTemplate
        title={step.title}
        options={[]} // Provide options for each step if needed
        selectedOption={formData[step.id as keyof typeof formData]}
        onSelect={(option) => updateFormData(step.id as keyof typeof formData, option)}
        onNext={handleNext}
        onBack={handleBack}
        isFirst={stepIndex === 0}
        isFinalStep={stepIndex === steps.length - 1}
      />
    </div>
  );
};

export default DynamicStepPage;
