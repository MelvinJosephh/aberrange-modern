"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/dashboard/components/Sidebar";


export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role"); // Assuming role is stored
    if (!token || role !== "admin") router.push("/login"); // Client-side protection
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}