import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='w-full px-4 py-2 bg-transparent border border-[#a59179] rounded outline-none'
    />
  );
};

Input.propTypes = {
  type: string,
  value: string,
  placeholder: string,
  onChange: func,
};

export default Input;
