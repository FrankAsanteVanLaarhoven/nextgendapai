import React from 'react';
import { PersonalDashboard } from './components/dashboards/PersonalDashboard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="p-4 text-xl font-bold">NextGenDAP Dashboard</header>
      <main className="p-4">
        <PersonalDashboard />
      </main>
    </div>
  );
} 