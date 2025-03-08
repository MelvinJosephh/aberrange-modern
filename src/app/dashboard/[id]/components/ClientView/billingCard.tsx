'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingCard() {
  return (
    <div className="billing-card">
      <h2>Billing Card (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Billing Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Amount Due: $500 (dummy)</p>
          <p>Next Bill Date: 2025-03-15 (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}