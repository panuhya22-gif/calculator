// Purpose: App entry point
// Inputs: none (mounts React app)
// Outputs: Renders `<App />` into `#root`

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/calculator.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
