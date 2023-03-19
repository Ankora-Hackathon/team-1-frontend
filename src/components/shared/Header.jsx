import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='border-b border-[#0db4aa]'>
      <div className='flex justify-between p-4'>
        <div className='flex justify-start w-full space-x-4'>
          <div className='flex'>
            <img src='/logoAI.png' width={50} alt='' />
            <img src='/logoo.png' width={250} alt='' />
          </div>
          <Link to='/' className='px-4 py-2 bg-[#0db4aa] text-white rounded uppercase'>
            Homepage
          </Link>
          <button className='px-4 py-2 bg-[#0db4aa] text-white rounded uppercase'>Contact</button>
        </div>
        <div className='flex justify-end w-full space-x-4'>
          {localStorage.getItem('user') ? null : (
            <>
              <Link to='/login' className='px-4 py-2 bg-[#0db4aa] text-white rounded uppercase'>
                Sign In
              </Link>
              <Link to='/register' className='px-4 py-2 bg-[#0db4aa] text-white rounded uppercase'>
                Sign Up
              </Link>
            </>
          )}
          <button className='px-4 py-2 bg-[#0e8680] text-white rounded uppercase'>
            Lets get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
