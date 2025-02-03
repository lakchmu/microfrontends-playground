import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

export const mount = (rootElement) => {
  const root = createRoot(rootElement);
  root.render(<App />);
};

const devRoot = document.getElementById('root');

if (devRoot) {
  mount(devRoot);
}

