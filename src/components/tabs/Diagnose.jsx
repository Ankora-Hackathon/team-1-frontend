import React, { useState } from 'react';
import { Label } from '../shared';
import { Input } from '../shared/form';
import { API } from '../../libs/api';

const Diagnose = () => {
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});

  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    setResponse({ status: 'fetching' });
    try {
      const response = await API.post(
        'diagnosis/create',
        { ...data, age: Number(data.age) },
        localStorage.getItem('access_token'),
      );
      setResponse({ status: 'fetched', data: response });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = ({ key, value }) => {
    setData((previousState) => ({ ...previousState, [key]: value }));
  };

  return (
    <>
      <h1 className='text-2xl font-bold'>Diagnose</h1>
      <form
        onSubmit={(event) => handleOnSubmit({ event })}
        className={`flex-col space-y-4 ${response.status === 'fetched' ? 'hidden' : 'flex'}`}
      >
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
            <label className='flex flex-col px-4 py-2 space-y-2 border border-[#a59179] rounded'>
              <div className='flex items-center space-x-4'>
                <label htmlFor='male' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) => handleOnChange({ key: 'sex', value: event.target.value })}
                    type='radio'
                    id='male'
                    name='gender'
                    value='MALE'
                  />
                  <h1 className='text-gray-400'>Male</h1>
                </label>
                <label htmlFor='female' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) => handleOnChange({ key: 'sex', value: event.target.value })}
                    type='radio'
                    id='female'
                    name='gender'
                    value='FEMALE'
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
            <label className='flex flex-col px-4 py-2 space-y-2 border border-[#a59179] rounded'>
              <div className='flex items-center space-x-4'>
                <label htmlFor='low' className='flex items-center space-x-4'>
                  <input
                    onChange={(event) =>
                      handleOnChange({ key: 'intensity', value: event.target.value })
                    }
                    type='radio'
                    id='low'
                    name='intensity'
                    value='LOW'
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
                    value='MEDIUM'
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
                    value='HIGH'
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
          className='px-4 py-2 bg-transparent border border-[#a59179] rounded outline-none resize-none'
        ></textarea>
        <button
          type='submit'
          disabled={response.status === 'fetching'}
          className='px-4 disabled:bg-opacity-50 py-2 rounded bg-[#a59179] text-white'
        >
          {response.status === 'fetching' ? 'Generating response' : 'Generate response'}
        </button>
      </form>

      {response?.data?.response.choices.map((choice) => (
        <p key={choice.index}>{choice.text}</p>
      ))}
    </>
  );
};

export default Diagnose;
