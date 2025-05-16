import React from 'react';
import { CopilotPanel } from '../ai/CopilotPanel';

export default function RightPanel() {
  return (
    <aside className="w-80 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-4 flex flex-col h-full">
      <section aria-label="AI Suggestions" className="mb-6">
        <h2 className="text-lg font-semibold mb-2">AI Suggestions</h2>
        <div className="bg-white dark:bg-gray-800 rounded p-2">(AI content here)</div>
      </section>
      <section aria-label="Activity Feed" className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Activity Feed</h2>
        <div className="bg-white dark:bg-gray-800 rounded p-2">(Activity feed here)</div>
      </section>
      <section aria-label="AI Copilot" className="mb-6">
        <CopilotPanel />
      </section>
    </aside>
  );
} 