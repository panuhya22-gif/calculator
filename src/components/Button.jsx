// Purpose: Reusable Button component
// Inputs: `value`, `onClick`, optional `className`
// Outputs: A clickable button for calculator input

import React from 'react';

export default function Button({ value, onClick, className = '' }) {
  return (
    <button className={`calc-btn ${className}`.trim()} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
