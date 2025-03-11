"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Request } from "@/types/requests";

const RequestTable = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/requests", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setRequests(data); 
    };
    fetchRequests();
  }, []);

  const filteredRequests = requests.filter((req) =>
    (filterType === "all" || req.type === filterType) &&
    (filterStatus === "all" || req.status === filterStatus)
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Requests</CardTitle>
        <div className="flex space-x-4">
          <Select onValueChange={setFilterType} defaultValue="all">
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Filter by Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Consultation">Consultation</SelectItem>
              <SelectItem value="VA Request">VA Request</SelectItem>
              <SelectItem value="Quote">Quote</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setFilterStatus} defaultValue="all">
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Filter by Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Assigned">Assigned</SelectItem>
              <SelectItem value="Sent">Sent</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((req) => (
              <TableRow key={req.id}>
                <TableCell>{req.client}</TableCell>
                <TableCell>{req.type}</TableCell>
                <TableCell>{req.details}</TableCell>
                <TableCell>{req.date}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell><Button variant="outline" size="sm">Update</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RequestTable;