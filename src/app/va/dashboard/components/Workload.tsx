"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Workload = () => {
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    const fetchWorkload = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/va/tasks?status=assigned", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setPendingTasks(data.length);
    };
    fetchWorkload();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workload Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pending Tasks: {pendingTasks}</p>
      </CardContent>
    </Card>
  );
};

export default Workload;