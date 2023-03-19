import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';

const Homepage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center col-span-1 space-y-4'>
        <h1 className='text-6xl font-bold'>How are you feeling today? Or not very well</h1>
        <p>AnkoraMed a day keeps the doctor away!</p>
        <Link to='/' className='flex px-4 py-2 space-x-2 bg-[#6C63FF] rounded w-fit'>
          <span>Lets start</span>
          <ArrowRightCircleIcon className='w-6 h-6' />
        </Link>
      </div>
      <div className='col-span-1'>
        <img src='/homepage.svg' alt='' />
      </div>
    </Layout>
  );
};

export default Homepage;
