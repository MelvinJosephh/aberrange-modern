'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import steps from '@/lib/data/skills/howitWorksSteps';
import '@/styles/modal-pages/aberrange-works.module.scss';

const HowAberrangeWorks: React.FC = () => {
  const [showPage, setShowPage] = useState<boolean>(true);

  const closePage = () => {
    setShowPage(false);
  };

  if (!showPage) return null;

  return (
    <div className="how-aberrange-works-page">
      <div className="header-section">
        <h1>How Aberrange Works</h1>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowAberrangeWorks;
