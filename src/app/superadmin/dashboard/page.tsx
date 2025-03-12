"use client";

import Header from "./components/Header";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import SystemAnalytics from "./components/SystemAnalytics";

const SuperadminDashboard = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <UserManagement />
          <RoleManagement />
        </div>
        <div>
          <SystemAnalytics />
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboard;