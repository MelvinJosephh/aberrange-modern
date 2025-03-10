'use client';

import { useAuth } from "./hooks/useAuth";
import { LoadingSpinner } from "./Shared/LoadingSpinner";
import ClientView from "./ClientView";
import VAView from "./VAView";
import AdminView from "./AdminView";
import SuperAdminView from "./SuperAdminView";

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