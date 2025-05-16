import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tracer } from './otel';

const features = [
  { icon: '🔍', title: 'DeepUI™ Guidance', desc: 'AI-powered, adaptive onboarding and support overlays.' },
  { icon: '🌐', title: 'Omnichannel', desc: 'Guide users across web, mobile, and desktop.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'SOC2, GDPR, and enterprise-grade privacy.' },
  { icon: '🤝', title: 'Real-Time Collaboration', desc: 'Live teamwork, comments, and co-browsing.' },
  { icon: '🤖', title: 'AI Copilot', desc: 'Contextual help, automation, and workflow acceleration.' },
  { icon: '📊', title: 'Advanced Analytics', desc: 'Workflow, form, and adoption analytics.' },
];

const testimonials = [
  {
    quote: 'NextGenDAP made onboarding seamless and fun. Our support tickets dropped by 40% in a month.',
    name: 'Ava R.',
    title: 'Head of Product, SaaSly',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'The 3D interactive guides are a game changer. Our team loves the new experience.',
    name: 'James L.',
    title: 'CTO, FinTechPro',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'We saw a 60% increase in workflow completion and happier users across the board.',
    name: 'Priya S.',
    title: 'VP People, HealthTech',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const companies = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/SVG_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
];

export default function LandingPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, type: 'spring' },
    }),
  };

  function handleDemoClick() {
    const span = tracer.startSpan('SeeLiveDemo_Click');
    span.end();
  }

  function handleSignupClick() {
    const span = tracer.startSpan('GetStartedFree_Click');
    span.end();
  }

  function handlePlayClick() {
    const span = tracer.startSpan('PlayDemoVideo_Click');
    span.end();
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Placeholder logo SVG */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb"/><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">DAP</text></svg>
          NextGenDAP
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:underline">Product</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <Link to="/app" className="hover:underline font-semibold">Dashboard</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="font-semibold">Login</a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition font-semibold shadow">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Empower Every User. Accelerate Every Workflow.
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
        >
          The AI-powered digital adoption platform for seamless onboarding, guidance, and productivity—across web, mobile, and desktop.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
        >
          <Link to="/signup" onClick={handleSignupClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" style={{ display: 'inline-block' }}>
            Get Started Free
          </Link>
          <Link to="/dashboard-3d" onClick={handleDemoClick} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" style={{ display: 'inline-block' }}>
            See Live Demo
          </Link>
        </motion.div>
        {/* Animated 3D Device Mockup */}
        <motion.div
          className="mx-auto max-w-3xl rounded-xl shadow-2xl overflow-hidden border-4 border-blue-100 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring' }}
        >
          {/* Placeholder: Replace with your real DAP UI or Figma export */}
          <svg viewBox="0 0 800 400" width="100%" height="100%" className="bg-blue-100 dark:bg-gray-800">
            <rect x="40" y="40" width="720" height="320" rx="32" fill="#fff" stroke="#2563eb" strokeWidth="4"/>
            <rect x="80" y="80" width="640" height="60" rx="16" fill="#2563eb" opacity="0.1"/>
            <rect x="80" y="160" width="320" height="40" rx="12" fill="#2563eb" opacity="0.15"/>
            <rect x="420" y="160" width="300" height="40" rx="12" fill="#38bdf8" opacity="0.15"/>
            <rect x="80" y="220" width="640" height="40" rx="12" fill="#fbbf24" opacity="0.12"/>
            <circle cx="700" cy="100" r="18" fill="#38bdf8" opacity="0.3"/>
            <rect x="600" y="300" width="120" height="40" rx="12" fill="#2563eb" opacity="0.2"/>
            <text x="400" y="370" textAnchor="middle" fontSize="24" fill="#2563eb" fontWeight="bold">Your DAP in Action</text>
          </svg>
          {/* Animated Play Button for Video/Media */}
          <motion.button
            onClick={handlePlayClick}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 rounded-full p-4 shadow-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            whileHover={{ scale: 1.1, boxShadow: '0 0 32px #2563eb88' }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: [
              '0 0 0px #2563eb88',
              '0 0 16px #2563eb88',
              '0 0 0px #2563eb88'
            ] }}
            transition={{ repeat: Infinity, duration: 2 }}
            aria-label="Play demo video"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb"/><polygon points="13,10 24,16 13,22" fill="#fff"/></svg>
          </motion.button>
        </motion.div>
        {/* Glowing background effect */}
        <motion.div
          className="absolute -z-10 left-1/2 top-1/2 w-[120vw] h-[120vw] bg-blue-400/10 rounded-full blur-3xl"
          initial={{ scale: 0.7, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, type: 'spring' }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </section>

      {/* Features Section with 3D Animated Cards */}
      <section className="py-16" id="features">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl text-center cursor-pointer hover:shadow-2xl border border-transparent hover:border-blue-400 transition relative"
              whileHover={{ scale: 1.05, rotateY: 8, boxShadow: '0 8px 32px #2563eb33' }}
              whileTap={{ scale: 0.97, rotateY: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <div className="text-4xl mb-2">{f.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
              {/* 3D Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: '0 0 32px #2563eb22, 0 0 8px #38bdf822' }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platform Overview Section (Animated 3D Cards) */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800" id="platform">
        <h2 className="text-3xl font-bold text-center mb-10">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '🔍', title: 'Platform', items: ['DeepUI technology', 'Omnichannel', 'Integrations', 'Enterprise-grade security'] },
            { icon: '📊', title: 'Data', items: ['Application usage', 'Workflow analytics', 'Form analytics', 'License optimization'] },
            { icon: '🛠️', title: 'Action', items: ['Guidance creation', 'Workflow automation', 'Workflow accelerators'] },
            { icon: '💡', title: 'Experience', items: ['In-app guidance', 'Conversational interface', 'Workstation employee hub'] },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl text-left hover:shadow-2xl border border-transparent hover:border-blue-400 transition relative"
              whileHover={{ scale: 1.04, rotateY: 6 }}
              whileTap={{ scale: 0.97, rotateY: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <div className="flex items-center gap-2 mb-2 text-2xl font-bold">
                <span>{col.icon}</span> {col.title}
              </div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-gray-700 dark:text-gray-200">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section (Animated Grid) */}
      <section className="py-16" id="solutions">
        <h2 className="text-3xl font-bold text-center mb-10">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'By Team', items: ['IT', 'Sales', 'HR', 'Customer care', 'Public sector', 'See more'] },
            { title: 'By Application', items: ['SAP', 'Salesforce®', 'Workday®', 'Microsoft Dynamics 365™', 'ServiceNow®', 'See more'] },
            { title: 'By Use Case', items: ['AI transformation', 'Digital transformation', 'Change management', 'Onboarding & training', 'Support', 'Data integrity', 'Employee productivity'] },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-transparent hover:border-blue-400 transition"
              whileHover={{ scale: 1.04, rotateY: 6 }}
              whileTap={{ scale: 0.97, rotateY: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <h3 className="font-semibold mb-2 text-lg">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
                    {item === 'AI transformation' && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold ml-2 animate-pulse">New</span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Checklist Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Includes</h2>
        <ul className="max-w-2xl mx-auto space-y-4">
          {[
            'Intuitive content authoring and management',
            'Interactive in-app guides, tooltips, and notifications',
            'Personalized onboarding and product tours',
            'Targeted surveys with AI-powered features',
            'Advanced analytics and reporting',
            'Smart audience targeting and segmentation',
            'Enterprise-grade data privacy & security',
            'Pre-configured templates',
            'Workflow automation',
            'Real-time collaboration',
            'Branding and white-labeling',
            'Multi-language & localization support',
          ].map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-3 text-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.5, type: 'spring' }}
            >
              <span className="text-blue-500 text-2xl">✔️</span> {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Social Proof: Animated Logo Carousel & Testimonials */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
        {/* Animated logo carousel */}
        <motion.div
          className="flex gap-12 items-center justify-center overflow-x-auto pb-4"
          animate={{ x: [0, -120 * companies.length, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        >
          {companies.concat(companies).map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Company logo"
              className="h-12 grayscale hover:grayscale-0 transition drop-shadow-lg"
              style={{ minWidth: 80 }}
            />
          ))}
        </motion.div>
        {/* Testimonial carousel with animation */}
        <div className="max-w-2xl mx-auto relative mt-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonialIdx}
              className="italic text-center px-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2 mb-2">
                <img
                  src={testimonials[testimonialIdx].avatar}
                  alt={testimonials[testimonialIdx].name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400 shadow"
                />
                <span className="font-semibold">{testimonials[testimonialIdx].name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{testimonials[testimonialIdx].title}</span>
              </div>
              “{testimonials[testimonialIdx].quote}”
            </motion.blockquote>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === testimonialIdx ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} focus:outline-none`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonialIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#features">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#platform">Platform</a>
          <a href="#contact">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} NextGenDAP. All rights reserved.</div>
      </footer>
    </div>
  );
} 