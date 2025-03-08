'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupportQueue() {
  return (
    <div className="support-queue">
      <h2>Support Queue (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Ticket #1: Issue reported (dummy)</p>
          <p>Ticket #2: Awaiting response (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}