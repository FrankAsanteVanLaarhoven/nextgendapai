import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './otel';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
