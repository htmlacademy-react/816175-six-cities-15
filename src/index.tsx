import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockGetOffer } from './mock/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App resultCount={mockGetOffer()} />
  </React.StrictMode>
);