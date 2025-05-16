import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { OverlayManager, Overlay } from './components/OverlayManager';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { useDeepUI } from './hooks/useDeepUI';
import { useMotionValue, useAnimationFrame } from 'framer-motion';

export default function ProductDemoPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb"/><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">DAP</text></svg>
          NextGenDAP
        </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/app">Dashboard</Link>
          <Link to="/demo" className="font-semibold underline">Product Demo</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="font-semibold">Login</a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition font-semibold shadow">Get Started</a>
        </div>
      </nav>
      {/* Hero Section (text and button only) */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            See your software at every level.
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl">
            Full visibility, real-time analytics, and AI-powered guidance for every workflow.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => setVideoOpen(true)}
          >
            <span className="inline-block align-middle mr-2">▶️</span> Watch Product Demo
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[400px] h-[260px] rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 relative">
            <Canvas camera={{ position: [0, 0, 5] }} style={{ borderRadius: '1.5rem' }}>
              <ambientLight intensity={0.7} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#2563eb" />
              </mesh>
            </Canvas>
          </div>
        </div>
      </section>
      <div style={{color: 'green'}}>Minimal Product Demo Page</div>
    </>
  );
} 