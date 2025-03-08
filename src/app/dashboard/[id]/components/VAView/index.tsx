import TaskList from './taskList';
import TimeLogForm from './timeLogForm';
import AIToolsPanel from './aiToolsPanel';
import Consultations from './consultations';

export default function VAView() {
  return (
    <div className="va-view">
      <h1>VA Dashboard</h1>
      <TaskList />
      <TimeLogForm />
      <AIToolsPanel />
      <Consultations />
    </div>
  );
}