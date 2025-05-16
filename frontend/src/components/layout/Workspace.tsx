import React from 'react';
import { PersonalDashboard } from '../dashboards/PersonalDashboard';

export default function Workspace() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-950 p-6 overflow-auto" aria-label="Main workspace">
      <PersonalDashboard />
    </main>
  );
} 