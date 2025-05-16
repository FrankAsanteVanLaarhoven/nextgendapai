import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

interface NotificationsPanelProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

export function NotificationsPanel({ notifications, onDismiss }: NotificationsPanelProps) {
  return (
    <aside aria-label="Notifications" className="fixed top-16 right-6 z-50 w-80 space-y-2">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`rounded shadow-lg p-4 flex items-center gap-2 bg-white dark:bg-gray-800 border-l-4 ${n.type === 'error' ? 'border-red-500' : n.type === 'success' ? 'border-green-500' : n.type === 'warning' ? 'border-yellow-500' : 'border-blue-500'}`}
            role="alert"
            tabIndex={0}
          >
            <span className="flex-1">{n.message}</span>
            <button onClick={() => onDismiss(n.id)} aria-label="Dismiss notification" className="ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-white focus:outline-none">✕</button>
          </motion.div>
        ))}
      </AnimatePresence>
    </aside>
  );
} 