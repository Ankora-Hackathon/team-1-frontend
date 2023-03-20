import React, { useState } from 'react';
import { Label, Layout } from '../components/shared/';
import { API } from '../libs/api';
import { Input } from '../components/shared/form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...rest } = data;
    const response = await API.post('auth/create', { ...rest, age: Number(data.age) });
    console.log(response);
    console.log(data);
  };

  const handleOnChange = ({ key, value }) => {
    setData((previousState) => ({ ...previousState, [key]: value }));
  };

  if (localStorage.getItem('user')) return navigate('/');

  return (
    <Layout>
      <div className='col-span-1'>
        <img src='/RegistracijaLijevo.png' alt='' />
      </div>
      <div className='flex flex-col justify-center col-span-1 space-y-4'>
        <h1 className='text-4xl font-bold'>Sign Up</h1>
        <form onSubmit={(event) => handleOnSubmit({ event })} className='flex flex-col space-y-4'>
          <div className='flex items-center space-x-4'>
            <Label label='First name'>
              <Input
                type='text'
                placeholder='E.g. John'
                value={data.firstName || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'firstName', value: event.target.value })
                }
              />
            </Label>
            <Label label='Last name'>
              <Input
                type='text'
                placeholder='E.g. Doe'
                value={data.lastName || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'lastName', value: event.target.value })
                }
              />
            </Label>
          </div>
          <div className='flex items-center space-x-4'>
            <Label label='Age'>
              <Input
                type='number'
                placeholder='E.g. 30'
                value={data.age || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'age', value: event.target.value })
                }
              />
            </Label>
            <label className='flex flex-col space-y-2'>
              <h1 className='text-gray-400'>Sex</h1>
              <div className='flex items-center space-x-4'>
                <label htmlFor='male' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ event, key: 'sex', value: event.target.value })
                    }
                    type='radio'
                    id='male'
                    name='gender'
                    value='MALE'
                  />
                  <h1 className='text-gray-400'>Male</h1>
                </label>
                <label htmlFor='female' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ event, key: 'sex', value: event.target.value })
                    }
                    type='radio'
                    id='female'
                    name='gender'
                    value='FEMALE'
                  />
                  <h1 className='text-gray-400'>Female</h1>
                </label>
              </div>
            </label>
          </div>
          <div className='flex items-center space-x-4'>
            <Label label='Username'>
              <Input
                type='text'
                placeholder='E.g. johnDoe'
                value={data.userName || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'userName', value: event.target.value })
                }
              />
            </Label>
            <Label label='Email'>
              <Input
                type='email'
                placeholder='E.g. johnDoe@example.com'
                value={data.email || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'email', value: event.target.value })
                }
              />
            </Label>
          </div>
          <div className='flex items-center space-x-4'>
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
            <Label label='Confirm password'>
              <Input
                type='password'
                placeholder='********'
                value={data.confirmPassword || ''}
                onChange={(event) =>
                  handleOnChange({ event, key: 'confirmPassword', value: event.target.value })
                }
              />
            </Label>
          </div>
          <button className='px-4 py-2 rounded bg-[#a59179] text-white'>Sign in</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
