import React from 'react';

import { makeExampleServer } from '@server';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import 'reflect-metadata';
makeExampleServer();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
