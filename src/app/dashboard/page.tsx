"use client";

import Header from "./components/Header";
import RequestStatus from "./components/RequestStatus";
import QuickActions from "./components/QuickActions";
import Updates from "./components/Updates";
import CtaBanner from "@/components/CtaBanner";

export default function ClientDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
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
}