import React, { useState } from 'react';
import { TaskWidget } from './widgets/TaskWidget';
import { AnalyticsWidget } from './widgets/AnalyticsWidget';
import { DocsWidget } from './widgets/DocsWidget';
import { MeetingsWidget } from './widgets/MeetingsWidget';

const widgetList = [
  { key: 'tasks', label: 'Tasks', component: TaskWidget },
  { key: 'analytics', label: 'Analytics', component: AnalyticsWidget },
  { key: 'docs', label: 'Docs', component: DocsWidget },
  { key: 'meetings', label: 'Meetings', component: MeetingsWidget },
];

export function PersonalDashboard() {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});

  return (
    <section className="w-full max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {widgetList.map(({ key, label, component: Widget }) => (
        <div key={key} className="relative">
          <button
            className="absolute top-2 right-2 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-white focus:outline-none"
            onClick={() => setCollapsed((c) => ({ ...c, [key]: !c[key] }))}
            aria-label={collapsed[key] ? `Expand ${label}` : `Collapse ${label}`}
          >
            {collapsed[key] ? '+' : '–'}
          </button>
          {!collapsed[key] && <Widget />}
        </div>
      ))}
      {/* Add Widget button (stub) */}
      <button className="col-span-full mt-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
        + Add Widget
      </button>
    </section>
  );
} 