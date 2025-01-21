'use client';

import React, { useState, useEffect, use } from "react";
import HireDevelopers from "@/app/modal-pages/hire-developers";
import HireDesigners from "@/app/modal-pages/hire-designers";
import HireAcademic from "@/app/modal-pages/hire-academic";
import HireAssistants from "@/app/modal-pages/hire-assistants";
import ProductManagers from "@/app/modal-pages/product-managers";
import ProjectManagers from "@/app/modal-pages/project-managers";
import FindWork from "@/app/modal-pages/find-work";
import Overview from "@/app/modal-pages/overview";

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
      case "product-managers":
        return <ProductManagers />;
      case "project-managers":
        return <ProjectManagers />;
      case "find-work":
        return <FindWork />;
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
