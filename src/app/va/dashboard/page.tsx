"use client";

import Workload from "./components/Workload";
import TaskUpdates from "./components/TaskUpdates";
import TaskList from "./components/TaskList";
import Header from "./components/Header";



const VADashboard = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <TaskList />
        </div>
        <div className="space-y-6">
          <TaskUpdates />
          <Workload />
        </div>
      </div>
    </div>
  );
};

export default VADashboard;