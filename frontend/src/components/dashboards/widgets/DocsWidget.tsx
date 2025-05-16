import React from 'react';

export function DocsWidget() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="font-bold mb-2">Recent Docs</h3>
      <ul className="text-sm">
        <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Product Onboarding Guide</a></li>
        <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Q2 Planning Doc</a></li>
        <li><a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Security Checklist</a></li>
      </ul>
    </div>
  );
} 