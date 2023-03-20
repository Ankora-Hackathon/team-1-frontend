import React from 'react';
import { node, string } from 'prop-types';

const Label = ({ children, label }) => {
  return (
    <label htmlFor='lastName' className='flex flex-col space-y-2'>
      <h1 className='text-gray-400'>{label}</h1>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: node,
  label: string,
};

export default Label;
