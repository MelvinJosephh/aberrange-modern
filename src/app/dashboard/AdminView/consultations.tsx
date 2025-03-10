'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Consultations() {
  return (
    <div className="consultations">
      <h2>Consultations (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Consultations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Consultation 1: 2025-03-10 (dummy)</p>
          <p>Consultation 2: 2025-03-12 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}