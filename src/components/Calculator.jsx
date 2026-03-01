// Purpose: Main calculator container
// Inputs: User interactions via Buttons
// Outputs: Renders `Display`, `Button` grid, evaluates expressions using parser

import React, { useState, useEffect } from 'react';
import Display from './Display';
import Button from './Button';
import History from './History';
import evaluate from '../utils/expressionParser';

const HISTORY_KEY = 'calculator_history';
const MAX_HISTORY = 5;

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  // Load history from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        // If localStorage is corrupted, start fresh
        setHistory([]);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (expr, ans) => {
    const entry = { expression: expr, result: ans, timestamp: new Date().toLocaleTimeString() };
    setHistory((prev) => [entry, ...prev.slice(0, MAX_HISTORY - 1)]);
  };

  const handleClickHistory = (expr) => {
    setExpression(expr);
    setResult('');
    setError('');
  };

  const handleClick = (value) => {
    // Clear error on any new input
    if (error) setError('');

    if (value === 'C') {
      setExpression('');
      setResult('');
      setError('');
      return;
    }

    if (value === '=') {
      // Evaluate the expression
      if (!expression) {
        setError('Empty expression');
        return;
      }
      try {
        const ans = evaluate(expression);
        setResult(ans);
        setExpression('');
        addToHistory(expression, ans);
      } catch (err) {
        setError(err.message);
        setResult('');
      }
      return;
    }

    // If there's a result and user presses a number/operator, start fresh
    if (result !== '') {
      if (value === '.' || (value >= '0' && value <= '9')) {
        setExpression(value);
        setResult('');
      } else {
        // Start a new expression with the result as operand
        setExpression(result + value);
        setResult('');
      }
      return;
    }

    // Normal append to expression
    setExpression((prev) => prev + value);
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+'
  ];

  // Display should show result if available, otherwise expression or error
  const displayValue = error ? error : (result !== '' ? result : (expression || '0'));

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="pad">
        {buttons.map((b) => (
          <Button key={b} value={b} onClick={() => handleClick(b)} />
        ))}
        <Button value={'C'} onClick={() => handleClick('C')} className="btn-ac" />
      </div>
      <History items={history} onSelect={handleClickHistory} />
    </div>
  );
}
