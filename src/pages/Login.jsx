import React from 'react';
import { Layout } from '../components/shared';

const Login = () => {
  return (
    <Layout>
      <div className='col-span-1'>
        <img src='/register.svg' alt='' />
      </div>
      <div className='flex flex-col justify-center col-span-1 space-y-4'>
        <h1 className='text-4xl font-bold'>Sign In</h1>
        <form className='flex flex-col space-y-4'>
          <label htmlFor='userName' className='flex flex-col space-y-2'>
            <h1 className='text-gray-400'>Username</h1>
            <input
              type='text'
              id='userName'
              placeholder='E.g. johnDoe'
              className='w-full px-4 py-2 bg-transparent border border-gray-800 rounded outline-none'
            />
          </label>
          <label htmlFor='userName' className='flex flex-col space-y-2'>
            <h1 className='text-gray-400'>Password</h1>
            <input
              type='password'
              id='password'
              placeholder='********'
              className='w-full px-4 py-2 bg-transparent border border-gray-800 rounded outline-none'
            />
          </label>
          <button className='px-4 py-2 rounded bg-[#6C63FF]'>Sign in</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
