import React from 'react';

import { makeServer } from '@server/mirage';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import 'reflect-metadata';
makeServer();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
