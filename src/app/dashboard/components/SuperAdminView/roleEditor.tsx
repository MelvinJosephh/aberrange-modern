'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoleEditor() {
  return (
    <div className="role-editor">
      <h2>Role Editor (Dummy)</h2>
      <Card>
        <CardHeader>
          <CardTitle>Manage Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Role: Super Admin (dummy)</p>
          <p>Role: Admin (dummy)</p>
        </CardContent>
      </Card>
    </div>
  );
}