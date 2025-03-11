import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const AdminHeader = () => {
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const fetchPending = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/requests?status=pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setPendingCount(data.length);
    };
    fetchPending();
  }, []);

  return (
    <Card>
      <CardHeader><CardTitle>Aberrange Admin Dashboard</CardTitle></CardHeader>
      <CardContent><p>Total Pending Requests: {pendingCount}</p></CardContent>
    </Card>
  );
};

export default AdminHeader;