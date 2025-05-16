import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDeepUI } from '../hooks/useDeepUI';

/**
 * OverlayManager - Renders animated, modern overlays aligned to UI elements.
 * @example
 * <OverlayManager overlays={[{ targetId: 'deepui-xyz', content: 'Click here!' }]} />
 */
export type Overlay = {
  targetId: string;
  content: React.ReactNode;
  id?: string;
};

export function OverlayManager({ overlays }: { overlays: Overlay[] }) {
  const { elementMap } = useDeepUI();
  const [positions, setPositions] = useState<Record<string, DOMRect>>({});
  const [minimized, setMinimized] = useState<Record<string, boolean>>({});
  const [drag, setDrag] = useState<Record<string, { x: number; y: number }>>({});

  // Update overlay positions when DOM changes
  useEffect(() => {
    const pos: Record<string, DOMRect> = {};
    overlays.forEach(o => {
      const el = elementMap[o.targetId]?.el;
      if (el) pos[o.targetId] = el.getBoundingClientRect();
    });
    setPositions(pos);
  }, [elementMap, overlays]);

  // Glassmorphic style
  const glass =
    'backdrop-blur-md bg-white/60 dark:bg-gray-800/70 border border-blue-200 dark:border-gray-700 shadow-xl';

  return (
    <>
      {overlays.map((o, i) => {
        const rect = positions[o.targetId];
        if (!rect) return null;
        const id = o.id || o.targetId;
        const dragPos = drag[id] || { x: 0, y: 0 };
        return (
          <motion.div
            key={id}
            className={`fixed z-50 ${glass} rounded-xl p-4 min-w-[180px] max-w-xs select-none cursor-move transition-all`}
            style={{
              top: rect.top + window.scrollY + dragPos.y - 12,
              left: rect.left + window.scrollX + dragPos.x - 12,
              opacity: minimized[id] ? 0.5 : 1,
              pointerEvents: minimized[id] ? 'none' : 'auto',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            drag
            dragMomentum={false}
            onDrag={(e, info) => {
              setDrag(d => ({ ...d, [id]: { x: info.point.x - rect.left, y: info.point.y - rect.top } }));
            }}
            dragConstraints={{ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-blue-700 dark:text-blue-200">Guide</span>
              <div className="flex gap-2">
                <button
                  className="w-6 h-6 rounded hover:bg-blue-100 dark:hover:bg-gray-700 flex items-center justify-center"
                  onClick={() => setMinimized(m => ({ ...m, [id]: !m[id] }))}
                  aria-label="Minimize overlay"
                >
                  {minimized[id] ? '🔼' : '🔽'}
                </button>
              </div>
            </div>
            {!minimized[id] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {o.content}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </>
  );
} 