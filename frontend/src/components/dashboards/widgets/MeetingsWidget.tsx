import React from 'react';

export function MeetingsWidget() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="font-bold mb-2">Upcoming Meetings</h3>
      <ul className="text-sm">
        <li>
          <span className="font-semibold">Team Sync</span> — Today, 2:00pm
        </li>
        <li>
          <span className="font-semibold">Customer Demo</span> — Tomorrow, 11:00am
        </li>
        <li>
          <span className="font-semibold">1:1 with Alex</span> — Friday, 9:30am
        </li>
      </ul>
    </div>
  );
} 