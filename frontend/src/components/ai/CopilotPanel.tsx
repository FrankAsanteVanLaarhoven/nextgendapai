import React from 'react';
import { motion } from 'framer-motion';

export function CopilotPanel() {
  return (
    <motion.aside
      className="h-full w-full bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      aria-label="AI Copilot"
      tabIndex={0}
    >
      <h2 className="text-lg font-bold mb-2">AI Copilot</h2>
      <div className="flex-1 overflow-auto">
        <div className="text-gray-500 dark:text-gray-400">(AI chat/messages will appear here)</div>
      </div>
      <form className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none"
          placeholder="Ask the AI..."
          aria-label="Ask the AI"
        />
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">Send</button>
      </form>
    </motion.aside>
  );
} 