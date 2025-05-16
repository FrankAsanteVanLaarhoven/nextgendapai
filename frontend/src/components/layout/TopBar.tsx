import React from 'react';

export default function TopBar() {
  return (
    <header className="w-full h-14 bg-white dark:bg-gray-900 flex items-center px-4 shadow z-10">
      <button aria-label="Open menu" className="mr-4 text-2xl focus:outline-none">☰</button>
      <input
        type="search"
        placeholder="Search..."
        className="flex-1 max-w-md px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
        aria-label="Global search"
      />
      <button className="ml-4" aria-label="Quick Add">＋</button>
      <button className="ml-4" aria-label="Notifications">🔔</button>
      <button className="ml-4" aria-label="AI Assistant">🤖</button>
      <button className="ml-4 rounded-full w-8 h-8 bg-gray-300 dark:bg-gray-700" aria-label="User menu"></button>
    </header>
  );
} 