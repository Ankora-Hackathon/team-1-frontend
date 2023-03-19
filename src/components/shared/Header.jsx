import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='border-b border-gray-800'>
      <div className='flex justify-between p-4'>
        <div className='flex justify-start w-full space-x-4'>
          <img src='/logo.jpg' width={30} height={30} alt='' />
          <Link to='/' className='px-4 py-2 bg-gray-800 rounded'>
            Homepage
          </Link>
          <button className='px-4 py-2 bg-gray-800 rounded'>Contact</button>
        </div>
        <div className='flex justify-end w-full space-x-4'>
          <Link to='/login' className='px-4 py-2 bg-gray-800 rounded'>
            Sign In
          </Link>
          <Link to='/register' className='px-4 py-2 bg-gray-800 rounded'>
            Sign Up
          </Link>
          <button className='px-4 py-2 bg-[#6C63FF] rounded'>Lets get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
