'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MetricsChart() {
  return (
    <div className="metrics-chart">
      <h2>Metrics Chart (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Placeholder for chart: Revenue is $10,000 (dummy data).</p>
        </CardContent>
      </Card>
    </div>
  );
}