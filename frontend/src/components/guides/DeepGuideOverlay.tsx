import React from 'react';
import { motion } from 'framer-motion';

interface DeepGuideOverlayProps {
  step: { title: string; description: string };
  onNext: () => void;
  onPrev: () => void;
}

export function DeepGuideOverlay({ step, onNext, onPrev }: DeepGuideOverlayProps) {
  return (
    <motion.div
      className="fixed z-50 bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 max-w-md w-full left-1/2 top-1/4 -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      aria-live="polite"
      role="dialog"
      tabIndex={-1}
    >
      <h2 className="text-xl font-bold">{step.title}</h2>
      <p className="mt-2">{step.description}</p>
      <div className="flex gap-2 mt-4">
        <button onClick={onPrev} className="btn-secondary px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">Back</button>
        <button onClick={onNext} className="btn-primary px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">Next</button>
      </div>
    </motion.div>
  );
} 