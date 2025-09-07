import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set REACT_APP_CODESPACE_URL for API calls
if (!process.env.REACT_APP_CODESPACE_URL) {
  const codespaceName = window.location.hostname.split('-')[0];
  const url = window.location.protocol + '//' + window.location.hostname;
  process.env.REACT_APP_CODESPACE_URL = url;
  console.log('REACT_APP_CODESPACE_URL set to:', url);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
