'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      <h2>Stats Grid (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>System Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Users: 100 (dummy)</p>
          <p>Active Tasks: 50 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}