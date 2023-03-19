import React from 'react';
import { node } from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-900'>
      <Header />
      <main className='grid max-w-screen-xl grid-cols-2 py-16 mx-auto space-x-12'>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: node,
};

export default Layout;
