// src/app/client/dashboard/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import ClientHeader from "./components/ClientHeader"; // Renamed to match your file
import RequestStatus from "./components/RequestStatus";
import QuickActions from "./components/QuickActions";
import Updates from "./components/Updates";
import CtaBanner from "@/components/CtaBanner";

export default function ClientDashboard() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "dashboard"; // Default to "dashboard"

  // Render content based on the "view" query parameter
  const renderContent = () => {
    switch (view) {
      case "consultations":
        return (
          <div className="space-y-6">
            <RequestStatus />
          </div>
        );
      case "va-requests":
        return (
          <div className="space-y-6">
            <QuickActions />
          </div>
        );
      case "quotes":
        return (
          <div className="space-y-6">
            <Updates />
          </div>
        );
      case "dashboard":
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <RequestStatus />
              <QuickActions />
            </div>
            <div>
              <Updates />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader />
      {renderContent()}
      <CtaBanner />
    </div>
  );
}