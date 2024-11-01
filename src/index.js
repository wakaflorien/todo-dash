import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <App />
    </Suspense>
  </React.StrictMode>
);



