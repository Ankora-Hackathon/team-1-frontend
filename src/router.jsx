import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import { Demo } from './pages/Demo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);
