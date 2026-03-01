// Purpose: Display and manage calculator history
// Inputs: `items` (array of {expression, result, timestamp}), `onSelect` (callback)
// Outputs: Clickable history list for re-using calculations

import React from 'react';

export default function History({ items = [], onSelect = () => {} }) {
  return (
    <div className="history">
      <h4>History (Last 5)</h4>
      {items.length === 0 ? (
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>No calculations yet</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => onSelect(item.expression)}
              style={{
                cursor: 'pointer',
                padding: '6px',
                fontSize: '12px',
                marginBottom: '4px',
                backgroundColor: '#1f2937',
                borderRadius: '4px',
                color: '#e6eef6',
              }}
            >
              <span>{item.expression}</span> = <span style={{ fontWeight: 'bold' }}>{item.result}</span>
              <br />
              <span style={{ fontSize: '10px', color: '#6b7280' }}>{item.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
