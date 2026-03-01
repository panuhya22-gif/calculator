// Purpose: Display current expression or result
// Inputs: `value` (string)
// Outputs: Renders formatted display

import React from 'react';

export default function Display({ value }) {
  return (
    <div className="display" role="status" aria-live="polite">
      {value}
    </div>
  );
}
