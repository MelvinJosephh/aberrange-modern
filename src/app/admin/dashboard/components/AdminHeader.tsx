// src/app/admin/dashboard/components/AdminHeader.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuthWithFetch } from "@/hooks/useAuth";

const AdminHeader = () => {
  const { logout } = useAuthWithFetch();
  const [pendingCount, setPendingCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/requests?status=pending`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies for auth if backend uses them
          }
        );
        if (!response.ok) throw new Error("Failed to fetch pending requests");
        const data = await response.json();
        setPendingCount(data.length);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchPending();
  }, []);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await logout(true); // Assuming logout accepts a redirect flag
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>Aberrange Admin Dashboard</CardTitle>
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
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>Total Pending Requests: {pendingCount}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminHeader;