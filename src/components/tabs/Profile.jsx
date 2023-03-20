import React, { useState } from 'react';
import { Label } from '../shared';
import { Input } from '../shared/form';
import { API } from '../../libs/api';

const Profile = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    // localStorage.setItem('user', JSON.stringify(data));
    const response = await API.put('user/update', data);
    console.log(response);
  };

  const handleOnChange = ({ key, value }) => {
    setData((previousState) => ({ ...previousState, [key]: value }));
  };
  return (
    <form onSubmit={(event) => handleOnSubmit({ event })} className='flex flex-col space-y-4'>
      <h1 className='text-2xl font-bold'>Welcome Aboard {data.userName}</h1>

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
            type='text'
            placeholder='E.g. 30'
            value={String(data.age) || ''}
            onChange={(event) => handleOnChange({ event, key: 'age', value: event.target.value })}
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
                value='male'
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
                value='female'
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
            onChange={(event) => handleOnChange({ event, key: 'email', value: event.target.value })}
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
      </div>
      <button className='px-4 py-2 rounded bg-[#a59179] text-white w-fit'>Update profile</button>
    </form>
  );
};

export default Profile;
