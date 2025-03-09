'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HiringRequests() {
  return (
    <div className="hiring-requests">
      <h2>Hiring Requests (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Request 1: VA needed (dummy)</p>
          <p>Request 2: Developer needed (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}