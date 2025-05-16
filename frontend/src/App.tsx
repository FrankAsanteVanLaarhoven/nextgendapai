import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import ProductDemoPage from './ProductDemoPage';
import Dashboard3DPage from './Dashboard3DPage';

const features = [
  { icon: '🧠', title: 'AI Copilot', desc: 'Smart, contextual help for every user.' },
  { icon: '🎯', title: 'Deep Guidance', desc: 'Step-by-step overlays that adapt to any UI.' },
  { icon: '🤝', title: 'Live Collaboration', desc: 'Real-time teamwork, comments, and chat.' },
  { icon: '🧪', title: 'Sandbox Simulations', desc: 'Safe, interactive environments for learning.' },
  { icon: '🌗', title: 'Dark/Light Mode', desc: 'Personalize your workspace.' },
];

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/SVG_logo.svg',
];

const testimonials = [
  {
    quote: 'NextGenDAP revolutionized our onboarding. Our users love it—and so does our bottom line.',
    name: 'Sarah K.',
    title: 'CTO, FinTechPro',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'The AI Copilot is a game changer. Our support tickets dropped by 40% in a month.',
    name: 'James L.',
    title: 'Head of Product, SaaSly',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Live collaboration and sandboxes made onboarding fun and effective for our global team.',
    name: 'Priya S.',
    title: 'VP People, HealthTech',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/demo" element={<ProductDemoPage />} />
        <Route path="/dashboard-3d" element={<Dashboard3DPage />} />
      </Routes>
    </BrowserRouter>
  );
}
