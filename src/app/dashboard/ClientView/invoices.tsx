'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Invoices() {
  return (
    <div className="invoices">
      <h2>Invoices (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Outstanding Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Invoice #001: $500 (dummy)</p>
          <p>Invoice #002: $300 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}