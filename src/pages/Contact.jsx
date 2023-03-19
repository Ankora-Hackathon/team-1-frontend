import React from 'react';
import { Label, Layout } from '../components/shared';
import { Input } from '../components/shared/form';

const Contact = () => {
  return (
    <Layout>
      <img src='/logoAI.png' alt='Logo' className='w-full col-span-1' />
      <form action='' className='flex flex-col col-span-1 space-y-4'>
        <h1 className='text-2xl font-bold'>Get In Touch</h1>
        <div className='flex space-x-2'>
          <Label label='First name'>
            <Input placeholder='John' />
          </Label>
          <Label label='Last name'>
            <Input placeholder='Doe' />
          </Label>
        </div>
        <div className='flex space-x-2'>
          <Label label='Email address'>
            <Input placeholder='johnDoe@example.com' />
          </Label>
          <Label label='Phone number'>
            <Input placeholder='00387 61 225 883' />
          </Label>
        </div>
        <textarea
          rows='10'
          placeholder='Description..'
          className='px-4 py-2 w-full bg-transparent border border-[#a59179] rounded outline-none resize-none'
        ></textarea>
        <button
          type='submit'
          className='px-4 disabled:bg-opacity-50 py-2 rounded bg-[#a59179] text-white'
        >
          Send
        </button>
      </form>
    </Layout>
  );
};

export default Contact;
