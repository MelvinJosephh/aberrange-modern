'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Quotes() {
  return (
    <div className="quotes">
      <h2>Quotes (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Recent Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Quote 1: $200 (dummy)</p>
          <p>Quote 2: $150 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}