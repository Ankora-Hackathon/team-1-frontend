import React, { useState } from 'react';

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    sex: '',
    email: '',
    password: '',
  });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', formValues);
    // Submit form values, e.g., to an API
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <div className='mb-4'></div>

        <div className='mb-4'></div>

        <div className='mb-4'></div>

        <div className='mb-4'></div>

        <div className='mb-4'></div>

        <div className='flex justify-end'></div>
      </form>
    </div>
  );
};

export default RegisterForm;
