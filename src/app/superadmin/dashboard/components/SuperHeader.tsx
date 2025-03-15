"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";

const SuperHeader = () => {
  const { logout } = useAuthWithFetch(); // Use the logout method from useAuth
  const [stats, setStats] = useState({ totalUsers: 0, activeVAs: 0, activeAdmins: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/superadmin/stats`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch stats");
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await logout(true); // Pass true to redirect to /auth/admin-login
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>Welcome, Superadmin!</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" disabled={logoutLoading}>
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} disabled={logoutLoading}>
              {logoutLoading ? "Logging out..." : "Logout"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading stats...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>
            Total Users: {stats.totalUsers} | Active VAs: {stats.activeVAs} | Active Admins: {stats.activeAdmins}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuperHeader;