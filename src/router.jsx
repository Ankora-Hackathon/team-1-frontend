import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Contact, Dashboard, Homepage, Login, Register } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
