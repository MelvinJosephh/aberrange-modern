'use client';

// Importing necessary styles and components
import "@/styles/hire-talent/hire-talent.module.scss";
import ProgressIndicator from "../hire-talent/shared/progress-indicator";
import { StepContextProvider } from "./shared/step-context"; // Import your context provider

export default function HireTalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentStep = 1; // Default step
  const totalSteps = 8; // Total number of steps in your flow

  return (
    // Wrap everything with StepContextProvider
    <StepContextProvider>
      <div className="hire-talent-container">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <main className="hire-talent-main">{children}</main>
      </div>
    </StepContextProvider>
  );
}
