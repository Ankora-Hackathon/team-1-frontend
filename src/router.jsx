import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import { Patient } from './pages/Patient';
import { AboutUs } from './pages/AboutUs';
import { LogIn } from './pages/LogIn';
import { Register } from './pages/Register';
import { AboutApp } from './pages/AboutApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/patient',
    element: <Patient/>,
  },
  {
    path: '/aboutUs',
    element: <AboutUs/>,
  },
  {
    path: '/logIn',
    element: <LogIn/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/aboutApp',
    element: <AboutApp/>,
  }
]);
