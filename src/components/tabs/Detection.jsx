/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { API } from '../../libs/api';
import { Input } from '../shared/form';
import { Label } from '../shared';

const Detection = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState({});

  const handleOnSubmit = async ({ event }) => {
    event.preventDefault();
    setResponse({ status: 'fetching' });
    try {
      const response = await API.post(
        'image/create',
        { url },
        localStorage.getItem('access_token'),
      );
      setResponse({ status: 'fetched', data: response });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(response);

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-2xl font-bold'>Detection</h1>
      <form
        onSubmit={(event) => handleOnSubmit({ event })}
        className={`flex-col space-y-4 ${response.status === 'fetched' ? 'hidden' : 'flex'}`}
      >
        <Label label='Paste image link'>
          <Input
            placeholder='E.g. https://fortworthent.net/wp-content/uploads/2017/04/skin-allergy-contact-dermatitis.jpg'
            type='text'
            onChange={(event) => setUrl(event.target.value)}
          />
        </Label>
        {url.length > 0 && <img src={url} className='object-cover aspect-video' alt='' />}
        <button
          type='submit'
          disabled={response.status === 'fetching'}
          className='px-4 disabled:bg-opacity-50 py-2 rounded bg-[#a59179] text-white'
        >
          {response.status === 'fetching' ? 'Generating response' : 'Detect by image'}
        </button>
      </form>
      {response?.data?.answer && (
        <div className='flex flex-col space-y-4'>
          <img src={response.data.url} className='object-cover aspect-video' />
          <p>{response.data.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Detection;
