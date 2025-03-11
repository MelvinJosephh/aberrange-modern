"use client";

import AdminHeader from "@/app/admin/dashboard/components/AdminHeader";
import RequestTable from "@/app/admin/dashboard/components/RequestTable";
import Analytics from "@/app/admin/dashboard/components/Analytics";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <AdminHeader />
      <RequestTable />
      <Analytics />
    </div>
  );
};

export default AdminDashboard;