"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Request } from "@/types/requests";

const RequestStatus = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/user/requests", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setRequests(data); // Expected format: [{ id, type, details, status }]
    };
    fetchRequests();
  }, []);

  return (
    <Card>
      <CardHeader><CardTitle>Your Requests</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((req) => (
              <TableRow key={req.id}>
                <TableCell>{req.type}</TableCell>
                <TableCell>{req.details}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell><Button variant="outline" size="sm">View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RequestStatus;