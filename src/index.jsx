import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Kalvium gallery</h1>
    <App/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
