import React from 'react';

export function TaskWidget() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="font-bold mb-2">My Tasks</h3>
      <ul className="list-disc pl-5 text-sm">
        <li>Finish onboarding guide</li>
        <li>Review analytics dashboard</li>
        <li>Sync with team on project X</li>
      </ul>
    </div>
  );
} 