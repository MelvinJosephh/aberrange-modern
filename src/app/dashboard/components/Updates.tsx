"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Update } from "@/types/updates";

export default function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    // Replace with real API call if available
    setUpdates([{ message: "Your quote for AI Automation is ready!", date: "Mar 11, 2025" }]);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Updates</CardTitle>
      </CardHeader>
      <CardContent>
        {updates.length === 0 ? (
          <p className="text-gray-500">No updates available.</p>
        ) : (
          updates.map((update, i) => (
            <Alert key={i} className="mb-4">
              <AlertTitle>Update</AlertTitle>
              <AlertDescription>
                {update.message} - {update.date}
              </AlertDescription>
            </Alert>
          ))
        )}
      </CardContent>
    </Card>
  );
}