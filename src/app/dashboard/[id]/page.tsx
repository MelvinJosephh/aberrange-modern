'use client'; // Required for client-side hooks


import ClientView from "@/app/dashboard/[id]/components/ClientView";
import VAView from "@/app/dashboard/[id]/components/VAView";
import AdminView from "@/app/dashboard/[id]/components/AdminView";
import SuperAdminView from "@/app/dashboard/[id]/components/SuperAdminView";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";
import { useAuth } from "../hooks/useAuth";


export default function Dashboard() {
  const { role, name, loading, error } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;
  if (!role) return <LoadingSpinner />;

  return (
    <div className="dashboard-container p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard, {name || 'User'}!</h1>
      {role === "client" && <ClientView />}
      {role === "va" && <VAView />}
      {role === "admin" && <AdminView />}
      {role === "superadmin" && <SuperAdminView />}
    </div>
  );
}