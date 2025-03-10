'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HoursCard() {
  return (
    <div className="hours-card">
      <h2>Hours Card (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Logged Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Hours: 40 (dummy)</p>
          <p>This Week: 10 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}