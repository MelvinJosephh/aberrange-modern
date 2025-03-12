"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TaskUpdates = () => {
  const [updateText, setUpdateText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/va/task-update", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: updateText, taskId: 1 }), // Example taskId
      });
      if (!response.ok) throw new Error("Failed to submit update");
      setUpdateText(""); // Clear input on success
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Updates</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Textarea
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          placeholder="Enter task update (e.g., 'Task in progress')"
          className="mb-4"
        />
        <Button onClick={handleSubmit}>Submit Update</Button>
      </CardContent>
    </Card>
  );
};

export default TaskUpdates;