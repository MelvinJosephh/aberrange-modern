'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskList() {
  return (
    <div className="task-list">
      <h2>Task List (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Task 1: Complete Report (dummy)</p>
          <p>Task 2: Review Invoice (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}