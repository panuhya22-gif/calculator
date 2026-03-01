// Purpose: Top-level App component
// Inputs: none
// Outputs: Renders the Calculator component and applies global layout

import React from 'react';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="app-root">
      <Calculator />
    </div>
  );
}
