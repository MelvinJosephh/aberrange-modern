// src/app/admin/dashboard/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import AdminHeader from "@/app/admin/dashboard/components/AdminHeader";
import RequestTable from "@/app/admin/dashboard/components/RequestTable";
import Analytics from "@/app/admin/dashboard/components/Analytics";
import Quotes from "@/app/admin/dashboard/components/Quotes"; 
import Consultations from "@/app/admin/dashboard/components/Consultations"; 

const AdminDashboard = () => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "dashboard"; // Default to "dashboard"

  const renderContent = () => {
    switch (view) {
      case "quotes":
        return <Quotes />;
      case "consultations":
        return <Consultations />;
      case "requestTable": // Match sidebar's "VA Requests" link
        return <RequestTable />;
      case "analytics":
        return <Analytics />;
      case "dashboard":
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <RequestTable />
            </div>
            <div>
              <Analytics />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <AdminHeader />
      {renderContent()}
    </div>
  );
};

export default AdminDashboard;