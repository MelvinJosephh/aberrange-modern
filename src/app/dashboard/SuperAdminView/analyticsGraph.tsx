'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsGraph() {
  return (
    <div className="analytics-graph">
      <h2>Analytics Graph (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>User Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Placeholder for graph: 75% activity (dummy data).</p>
        </CardContent>
      </Card>
    </div>
  );
}