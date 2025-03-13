// src/components/Sidebar.tsx
"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white h-full p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard" className="block p-2 hover:bg-gray-100">Home</a>
        </li>
        <li>
          <Button
            variant="outline"
            onClick={() => logout()}
            className="w-full text-left"
          >
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
}