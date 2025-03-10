'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIToolsPanel() {
  return (
    <div className="ai-tools-panel">
      <h2>AI Tools Panel (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>AI Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Tool 1: Text Summarizer (dummy)</p>
          <p>Tool 2: Scheduler Assistant (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}