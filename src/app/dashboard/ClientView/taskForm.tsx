'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskForm() {
  return (
    <div className="task-form">
      <h2>Task Form (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Placeholder for task creation form (dummy input fields).</p>
        </CardContent>
      </Card>
    </div>
  );
}