import StatsGrid from './statsGrid';
import RoleEditor from './roleEditor';
import AnalyticsGraph from './analyticsGraph';
import Invoices from './invoices';
import Reports from './reports';

export default function SuperAdminView() {
  return (
    <div className="superadmin-view">
      <h1>Super Admin Dashboard</h1>
      <StatsGrid />
      <RoleEditor />
      <AnalyticsGraph />
      <Invoices />
      <Reports />
    </div>
  );
}