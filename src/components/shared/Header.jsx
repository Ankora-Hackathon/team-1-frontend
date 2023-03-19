import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='border-b border-[#0db4aa]'>
      <div className='flex justify-between p-4'>
        <div className='flex justify-start w-full space-x-4'>
          <div className='flex'>
            <img src='/logoAI.png' width={50} alt='' />
            <img src='/logoo.png' width={300} alt='' />
          </div>
          <Link
            to='/'
            className='px-4 py-2 bg-[#0db4aa] grid place-items-center text-white rounded uppercase'
          >
            Homepage
          </Link>
          <Link
            to='/contact'
            className='px-4 py-2 bg-[#0db4aa] grid place-items-center text-white rounded uppercase'
          >
            Contact
          </Link>
        </div>
        <div className='flex justify-end w-full space-x-4'>
          {localStorage.getItem('user') ? (
            <Link
              to='/dashboard'
              className='px-4 py-2 bg-[#0db4aa] grid place-items-center text-white rounded uppercase'
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to='/login'
                className='px-4 py-2 bg-[#0db4aa] grid place-items-center text-white rounded uppercase'
              >
                Sign In
              </Link>
              <Link
                to='/register'
                className='px-4 py-2 bg-[#0db4aa] grid place-items-center text-white rounded uppercase'
              >
                Sign Up
              </Link>
            </>
          )}
          <Link
            to='/dashboard'
            className='px-4 py-2 bg-[#0e8680] grid place-items-center text-white rounded uppercase'
          >
            Lets get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
