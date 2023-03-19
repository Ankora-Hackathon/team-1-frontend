import React, { useState } from 'react';
import { Label } from '../shared';
import { Input } from '../shared/form';
import { API } from '../../libs/api';

const Dyagnose = () => {
  const [data, setData] = useState({});

  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    const response = await API.post('http://localhost:5001/diagnosis/create', data);
    console.log(response);
    console.log(data);
  };

  const handleOnChange = ({ key, value }) => {
    setData((previousState) => ({ ...previousState, [key]: value }));
  };
  return (
    <>
      <h1 className='text-2xl font-bold'>Dyagnose</h1>
      <form onSubmit={(event) => handleOnSubmit({ event })} className='flex flex-col space-y-4'>
        <div className='grid items-center grid-cols-3 space-x-4'>
          <Label label='Age'>
            <Input
              placeholder='30'
              type='text'
              value={data.age || ''}
              onChange={(event) => handleOnChange({ key: 'age', value: event.target.value })}
            />
          </Label>
          <Label label='Sex'>
            <label className='flex flex-col px-4 py-2 space-y-2 border border-gray-800 rounded'>
              <div className='flex items-center space-x-4'>
                <label htmlFor='male' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) => handleOnChange({ key: 'sex', value: event.target.value })}
                    type='radio'
                    id='male'
                    name='gender'
                    value='male'
                  />
                  <h1 className='text-gray-400'>Male</h1>
                </label>
                <label htmlFor='female' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) => handleOnChange({ key: 'sex', value: event.target.value })}
                    type='radio'
                    id='female'
                    name='gender'
                    value='female'
                  />
                  <h1 className='text-gray-400'>Female</h1>
                </label>
              </div>
            </label>
          </Label>
          <Label label='Chronic disease'>
            <Input
              onChange={(event) =>
                handleOnChange({ key: 'chronicDisease', value: event.target.value })
              }
              value={data.chronicDisease || ''}
              type='text'
              placeholder='E.g. Diabetes'
            />
          </Label>
        </div>
        <div className='grid items-center grid-cols-2 space-x-4'>
          <Label label='Medication'>
            <Input
              onChange={(event) => handleOnChange({ key: 'medication', value: event.target.value })}
              value={data.medication || ''}
              type='text'
              placeholder='E.g. Aspirin'
            />
          </Label>
          <Label label='Intensity'>
            <label className='flex flex-col px-4 py-2 space-y-2 border border-gray-800 rounded'>
              <div className='flex items-center space-x-4'>
                <label htmlFor='low' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ key: 'intensity', value: event.target.value })
                    }
                    type='radio'
                    id='low'
                    name='intensity'
                    value='low'
                  />
                  <h1 className='text-gray-400'>Low</h1>
                </label>
                <label htmlFor='medium' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ key: 'intensity', value: event.target.value })
                    }
                    type='radio'
                    id='medium'
                    name='intensity'
                    value='medium'
                  />
                  <h1 className='text-gray-400'>Medium</h1>
                </label>
                <label htmlFor='high' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ key: 'intensity', value: event.target.value })
                    }
                    type='radio'
                    id='high'
                    name='intensity'
                    value='high'
                  />
                  <h1 className='text-gray-400'>High</h1>
                </label>
              </div>
            </label>
          </Label>
        </div>
        <textarea
          onChange={(event) => handleOnChange({ key: 'description', value: event.target.value })}
          cols='30'
          rows='10'
          placeholder='Description..'
          className='px-4 py-2 bg-transparent border border-gray-800 rounded outline-none resize-none'
        ></textarea>
        <button type='submit' className='px-4 py-2 rounded bg-[#6C63FF]'>
          Generate response
        </button>
      </form>
    </>
  );
};

export default Dyagnose;
