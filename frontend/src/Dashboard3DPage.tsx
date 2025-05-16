import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useFeatureFlag } from './featureFlags';
import { analyticsArraySchema } from './schemas/analytics';

const mockAnalytics = [
  { label: 'Active Users', value: 1280, trend: '+5.2%' },
  { label: 'Completion Rate', value: '92%', trend: '+1.1%' },
  { label: 'Avg. Session', value: '3m 24s', trend: '-0.8%' },
  { label: 'Guided Flows', value: 47, trend: '+3' },
];

const parseResult = analyticsArraySchema.safeParse(mockAnalytics);
if (!parseResult.success) {
  // eslint-disable-next-line no-console
  console.error('Invalid analytics data:', parseResult.error);
}
const analyticsData = parseResult.success ? parseResult.data : [];

/**
 * Spinning 3D box for dashboard demo.
 * @example
 * <Canvas><SpinningBox /></Canvas>
 */
function SpinningBox() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
}

/**
 * 3D Analytics Dashboard page.
 * @example
 * <Dashboard3DPage />
 */
export default function Dashboard3DPage() {
  const showBetaWidget = useFeatureFlag('enableBetaWidget');
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center tracking-tight">3D Analytics Dashboard</h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">Interactive 3D analytics and real-time insights for your digital adoption platform.</p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center justify-center">
        {/* 3D Canvas */}
        <div className="w-[420px] h-[320px] rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 relative">
          <Canvas camera={{ position: [0, 0, 7] }} style={{ borderRadius: '1.5rem' }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <SpinningBox />
            <OrbitControls enablePan={false} />
            {/* Overlayed HTML analytics card in 3D */}
            <Html position={[0, -2.5, 0]} center>
              <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg px-6 py-3 text-center">
                <div className="font-bold text-lg text-blue-700">Live 3D Metric</div>
                <div className="text-2xl font-extrabold">1280</div>
                <div className="text-green-600 font-semibold">+5.2%</div>
              </div>
            </Html>
          </Canvas>
        </div>
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {analyticsData.map((a) => (
            <div key={a.label} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 min-w-[200px]">
              <div className="text-gray-500 text-sm mb-1">{a.label}</div>
              <div className="text-2xl font-bold mb-1">{a.value}</div>
              <div className={a.trend.startsWith('+') ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>{a.trend}</div>
            </div>
          ))}
          {showBetaWidget && (
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-2xl shadow-xl p-6 min-w-[200px] animate-pulse">
              <div className="text-lg font-bold mb-1">🚀 Beta Widget</div>
              <div className="text-sm">This feature is enabled by a feature flag.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 