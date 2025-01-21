'use client';

import { useRouter } from 'next/navigation';
import { steps } from '../utils/step-config'; // Step config file
import { useHireTalent } from '../context/hire-talent-context';
import StepTemplate from '../components/step-template';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Dynamic import for step content

const DynamicStepPage = (props: { params: Promise<{ step: string }> }) => {
  const params = props.params;
  const [stepId, setStepId] = useState<string | null>(null);
  const { formData, updateFormData } = useHireTalent();
  const router = useRouter();

  useEffect(() => {
    params.then((resolvedParams) => {
      setStepId(resolvedParams.step || null);
    });
  }, [params]);

  if (!stepId) return <p>Loading...</p>; // Handle missing stepId

  const stepIndex = steps.findIndex((s) => s.id === stepId);
  if (stepIndex === -1) return <p>Invalid step</p>;

  const step = steps[stepIndex];
  const StepContent = dynamic(() => import(`../steps/${step.component}`), { ssr: false });

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
    <StepTemplate
      title={step.title}
      options={[]} // Optional if specific options exist
      selectedOption={formData[step.id as keyof typeof formData]}
      onSelect={(option) => updateFormData(step.id as keyof typeof formData, option)}
      onNext={handleNext}
      onBack={handleBack}
      isFirst={stepIndex === 0}
      isFinalStep={stepIndex === steps.length - 1}
    >
      {/* Dynamically render the step content */}
      <StepContent />
    </StepTemplate>
  );
};

export default DynamicStepPage;
