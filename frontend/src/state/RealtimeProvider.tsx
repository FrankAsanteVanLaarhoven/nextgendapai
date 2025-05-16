import React, { createContext, useContext } from 'react';

// Stub for real-time context (Yjs/Liveblocks)
const RealtimeContext = createContext<{ userId: string }>({ userId: 'demo-user' });

export function useRealtime() {
  return useContext(RealtimeContext);
}

export const RealtimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // In a real implementation, connect to Yjs/Liveblocks here
  return (
    <RealtimeContext.Provider value={{ userId: 'demo-user' }}>
      {children}
    </RealtimeContext.Provider>
  );
}; 