'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="reports">
      <h2>Reports (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Generated Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Report 1: Monthly Summary (dummy)</p>
          <p>Report 2: Quarterly Overview (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}