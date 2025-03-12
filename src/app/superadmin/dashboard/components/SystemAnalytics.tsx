"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SystemAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalRequests: 0,
    activeVATasks: 0,
    pendingAdminActions: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/superadmin/analytics", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch analytics");
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) return <p>Loading analytics...</p>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Client Requests: {analytics.totalRequests}</p>
        <p>Active VA Tasks: {analytics.activeVATasks}</p>
        <p>Pending Admin Actions: {analytics.pendingAdminActions}</p>
      </CardContent>
    </Card>
  );
};

export default SystemAnalytics;