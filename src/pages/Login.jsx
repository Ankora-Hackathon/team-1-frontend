/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Label, Layout } from '../components/shared';
import { Input } from '../components/shared/form';
import { API } from '../libs/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    const response = await API.post('auth/login', data);
    const { user, access_token } = response;

    if (!access_token) return;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('access_token', access_token);
    navigate('/dashboard');
  };

  const handleOnChange = ({ key, value }) => {
    setData((previousState) => ({ ...previousState, [key]: value }));
  };
  return (
    <Layout>
      <div className='col-span-1'>
        <img src='/LogInLijevo.png' alt='' />
      </div>
      <div className='flex flex-col justify-center col-span-1 space-y-4'>
        <h1 className='text-4xl font-bold'>Sign In</h1>
        <form onSubmit={(event) => handleOnSubmit({ event })} className='flex flex-col space-y-4'>
          <Label label='Email'>
            <Input
              type='text'
              placeholder='E.g. johnDoe@example.com'
              value={data.email || ''}
              onChange={(event) =>
                handleOnChange({ event, key: 'email', value: event.target.value })
              }
            />
          </Label>
          <Label label='Password'>
            <Input
              type='password'
              placeholder='********'
              value={data.password || ''}
              onChange={(event) =>
                handleOnChange({ event, key: 'password', value: event.target.value })
              }
            />
          </Label>
          <button className='px-4 py-2 rounded bg-[#a59179] text-white'>Sign in</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
