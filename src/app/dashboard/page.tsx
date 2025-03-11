"use client";

import Header from "@/app/dashboard/components/Header";
import RequestStatus from "@/app/dashboard/components/RequestStatus";
import QuickActions from "@/app/dashboard/components/QuickActions";
import Updates from "@/app/dashboard/components/Updates";
import CtaBanner from "@/components/CtaBanner";

const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <RequestStatus />
          <QuickActions />
        </div>
        <div>
          <Updates />
        </div>
      </div>
      <CtaBanner />
    </div>
  );
};

export default ClientDashboard;