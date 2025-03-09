import Reports from './reports';
import Quotes from './quotes';
import Invoices from './invoices';
import HiringRequests from './hiringRequests';
import Consultations from './consultations';
import SupportQueue from './supportQueue';
import MetricsChart from './metricsChart';
import UserTable from './userTable';


export default function AdminView() {
  return (
    <div className="admin-view">
      <h1>Admin Dashboard</h1>
      <UserTable />
      <MetricsChart />
      <SupportQueue />
      <Consultations />
      <HiringRequests />
      <Invoices />
      <Quotes />
      <Reports />
    </div>
  );
}