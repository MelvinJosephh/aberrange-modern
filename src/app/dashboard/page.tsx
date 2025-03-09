'use client';

import { useAuth } from "./hooks/useAuth";
import { LoadingSpinner } from "./components/Shared/LoadingSpinner";
import ClientView from "./components/ClientView";
import VAView from "./components/VAView";
import AdminView from "./components/AdminView";
import SuperAdminView from "./components/SuperAdminView";

export default function Dashboard() {
  const { role, name, loading, error } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;
  if (!role) return <LoadingSpinner />;

  return (
    <div className="dashboard-container">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard, {name || "User"}!</h1>
      {role === "client" && <ClientView />}
      {role === "va" && <VAView />}
      {role === "admin" && <AdminView />}
      {role === "superadmin" && <SuperAdminView />}
    </div>
  );
}