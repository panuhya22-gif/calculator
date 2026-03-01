// Purpose: Main calculator container
// Inputs: User interactions via Buttons
// Outputs: Renders `Display`, `Button` grid, and wires evaluation (parser integration later)

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import History from './History';

export default function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    // placeholder logic — will be expanded when parser is implemented
    if (value === 'C') return setExpression('');
    if (value === '=') return; // evaluate later
    setExpression((prev) => prev + value);
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+'
  ];

  return (
    <div className="calculator">
      <Display value={expression || '0'} />
      <div className="pad">
        {buttons.map((b) => (
          <Button key={b} value={b} onClick={() => handleClick(b)} />
        ))}
        <Button value={'C'} onClick={() => handleClick('C')} className="btn-ac" />
      </div>
      <History />
    </div>
  );
}
