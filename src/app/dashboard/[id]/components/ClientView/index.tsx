import TaskList from './taskList';
import TaskForm from './taskForm';
import HoursCard from './hoursCard';
import BillingCard from './billingCard';
import Consultations from './consultations';
import HiringRequests from './hiringRequests';
import Invoices from './invoices';
import Quotes from './quotes';
import Reports from './reports';

export default function ClientView() {
  return (
    <div className="client-view">
      <h1>Client Dashboard</h1>
      <TaskForm />
      <TaskList />
      <HoursCard />
      <BillingCard />
      <Consultations />
      <HiringRequests />
      <Invoices />
      <Quotes />
      <Reports />
    </div>
  );
}