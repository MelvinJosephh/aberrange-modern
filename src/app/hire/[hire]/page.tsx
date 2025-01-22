"use client";

import React, { useState, useEffect, use } from "react";
import HireDevelopers from "@/app/modal-pages/hire-developers";
import HireDesigners from "@/app/modal-pages/hire-designers";
import HireAcademic from "@/app/modal-pages/hire-academic";
import HireAssistants from "@/app/modal-pages/hire-assistants";
import FindWork from "@/app/modal-pages/find-work";
import Overview from "@/app/modal-pages/overview";
import HowAberrangeWorks from "@/app/modal-pages/how-aberrange-works";
import PricingPage from "@/app/modal-pages/pricing";
import HireProjectManagers from "@/app/modal-pages/project-managers";
import HireProductManagers from "@/app/modal-pages/product-managers";

const HirePage = (props: { params: Promise<{ hire: string }> }) => {
  const params = use(props.params);
  const [hire, setHire] = useState<string | null>(null);

  useEffect(() => {
    if (params?.hire) {
      setHire(params.hire);
    }
  }, [params]);

  const renderContent = () => {
    switch (hire) {
      case "hire-developers":
        return <HireDevelopers />;
      case "hire-designers":
        return <HireDesigners />;
      case "hire-academic":
        return <HireAcademic />;
      case "hire-assistants":
        return <HireAssistants />;
      case "hire-product-managers":
        return <HireProductManagers />;
      case "hire-project-managers":
        return <HireProjectManagers />;
      case "how-aberrange-works":
        return <HowAberrangeWorks />;
      case "find-work":
        return <FindWork />;
      case "pricing":
        return <PricingPage />;
      case "overview":
        return <Overview />;
      default:
        return <div>Service not found</div>;
    }
  };

  return (
    <div className="hire-page-container">
      {hire ? renderContent() : <div>Loading...</div>}
    </div>
  );
};

export default HirePage;
