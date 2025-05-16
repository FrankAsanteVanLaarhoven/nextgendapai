import React from 'react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Simulations', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Teams', href: '#' },
  { label: 'Settings', href: '#' },
];

export default function Sidebar() {
  return (
    <nav aria-label="Main navigation" className="h-full w-56 bg-gray-900 text-white flex flex-col py-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="block px-6 py-2 rounded hover:bg-gray-800 focus:bg-gray-700 focus:outline-none"
              tabIndex={0}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 