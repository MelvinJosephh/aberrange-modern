// src/app/superadmin/dashboard/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Header from "./components/SuperHeader";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import SystemAnalytics from "./components/SystemAnalytics";

const SuperadminDashboard = () => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "dashboard"; // Default to "dashboard"

  // Render content based on the "view" query parameter
  const renderContent = () => {
    switch (view) {
      case "users":
        return <UserManagement />;
      case "roles":
        return <RoleManagement />;
      case "analytics":
        return <SystemAnalytics />;
      case "dashboard":
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <UserManagement />
              <RoleManagement />
            </div>
            <div>
              <SystemAnalytics />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <Header />
      {renderContent()}
    </div>
  );
};

export default SuperadminDashboard;