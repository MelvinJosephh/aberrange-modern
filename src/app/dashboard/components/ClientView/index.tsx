'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import TaskForm from "../ClientView/taskForm";
import HoursCard from "../ClientView/hoursCard";
import BillingCard from "../ClientView/billingCard";
import Consultations from "../ClientView/consultations";
import HiringRequests from "../ClientView/hiringRequests";
import Invoices from "../ClientView/invoices";
import Quotes from "../ClientView/quotes";
import Reports from "../ClientView/reports";
import TaskList from "../ClientView/taskList";

export default function ClientView() {
  return (
    <div className="client-view grid gap-6">
      <h1 className="text-3xl font-bold mb-4">Client Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Task</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskForm />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
        <HoursCard />
        <BillingCard />
        <Card>
          <CardHeader>
            <CardTitle>Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <Consultations />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hiring Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <HiringRequests />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <Invoices />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <Quotes />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <Reports />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}