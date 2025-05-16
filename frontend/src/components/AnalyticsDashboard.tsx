import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnalyticsDashboard - Predictive analytics and user journey insights with toggles for funnel, heatmap, and journey suggestions.
 * @example
 * <AnalyticsDashboard />
 */
export function AnalyticsDashboard() {
  const [data, setData] = useState<any>(null);
  const [view, setView] = useState<'funnel' | 'heatmap' | 'journey'>('funnel');

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setData({
        funnel: [1000, 700, 400, 120],
        sessions: 234,
        prediction: 'Churn risk: 8% | Next best action: Show onboarding',
      });
    }, 600);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Analytics Dashboard</h2>
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition border ${view === 'funnel' ? 'bg-blue-600 text-white border-blue-700' : 'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-200 border-transparent'}`}
          onClick={() => setView('funnel')}
        >
          Funnel
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition border ${view === 'heatmap' ? 'bg-yellow-400 text-gray-900 border-yellow-500' : 'bg-yellow-100 dark:bg-gray-800 text-yellow-700 dark:text-yellow-200 border-transparent'}`}
          onClick={() => setView('heatmap')}
        >
          Heatmap
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition border ${view === 'journey' ? 'bg-green-500 text-white border-green-600' : 'bg-green-100 dark:bg-gray-800 text-green-700 dark:text-green-200 border-transparent'}`}
          onClick={() => setView('journey')}
        >
          Journey Suggestions
        </button>
      </div>
      {!data ? (
        <div className="animate-pulse h-24 bg-blue-100 dark:bg-gray-800 rounded" />
      ) : (
        <>
          {view === 'funnel' && (
            <>
              <div className="mb-4">
                <span className="font-semibold">Funnel:</span>
                <div className="flex gap-2 mt-2">
                  {data.funnel.map((n: number, i: number) => (
                    <motion.div
                      key={i}
                      className="h-8 rounded bg-blue-500/80 dark:bg-blue-400/60"
                      initial={{ width: 0 }}
                      animate={{ width: 40 + n / 10 }}
                      transition={{ duration: 0.7, type: 'spring' }}
                      style={{ minWidth: 40 }}
                    >
                      <span className="text-xs text-white px-2">{n}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Active Sessions:</span> <span>{data.sessions}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Prediction:</span> <span>{data.prediction}</span>
              </div>
            </>
          )}
          {view === 'heatmap' && (
            <div className="flex flex-col items-center justify-center h-32">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400 opacity-70 animate-pulse mb-2" />
              <div className="text-yellow-700 dark:text-yellow-200 font-semibold">Heatmap (mocked)</div>
              <div className="text-xs text-gray-500 mt-1">Shows user activity density</div>
            </div>
          )}
          {view === 'journey' && (
            <div className="flex flex-col items-center justify-center h-32">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-green-300 via-blue-200 to-blue-500 opacity-80 animate-pulse mb-2" />
              <div className="text-green-700 dark:text-green-200 font-semibold">AI Journey Suggestions (mocked)</div>
              <div className="text-xs text-gray-500 mt-1">AI-driven next steps and optimizations</div>
            </div>
          )}
        </>
      )}
    </div>
  );
} 