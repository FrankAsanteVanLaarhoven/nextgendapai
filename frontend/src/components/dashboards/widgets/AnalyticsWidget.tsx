import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

export function AnalyticsWidget() {
  const [data, setData] = useState([1.2, 2.1, 1.7, 2.8, 1.5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(d => d.map(v => Math.max(1, Math.min(3, v + (Math.random() - 0.5) * 0.3))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h3 className="font-bold mb-2">Analytics</h3>
      <div className="flex items-center gap-4">
        <div>
          <div className="text-2xl font-bold">1,245</div>
          <div className="text-xs text-gray-500">Active Users</div>
        </div>
        <div>
          <div className="text-2xl font-bold">98%</div>
          <div className="text-xs text-gray-500">Uptime</div>
        </div>
        <div>
          <div className="text-2xl font-bold">+12%</div>
          <div className="text-xs text-green-500">Growth</div>
        </div>
      </div>
      <div className="w-full h-40 mt-4 rounded-xl overflow-hidden bg-blue-50 dark:bg-gray-900">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <OrbitControls enableZoom={false} enablePan={false} />
          {data.map((v, i) => (
            <Float key={i} speed={1.2 + i * 0.2} floatIntensity={0.2}>
              <mesh position={[-2 + i * 1.1, v - 1.5, 0]} castShadow>
                <boxGeometry args={[0.7, v, 0.7]} />
                <meshStandardMaterial color={i === 2 ? '#38bdf8' : '#2563eb'} metalness={0.3} roughness={0.6} />
              </mesh>
            </Float>
          ))}
        </Canvas>
      </div>
    </div>
  );
} 