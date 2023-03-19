import React, { useState } from 'react';
import { Label, Radio, Button, TextInput } from "flowbite-react";
import { Form } from "react-router-dom";

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    sex: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', formValues);
    // Submit form values, e.g., to an API
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <Label htmlFor="firstName">Name</Label>
          <TextInput
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="age">Age</Label>
          <TextInput
            type="number"
            name="age"
            id="age"
            min="1"
            value={formValues.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label>Sex</Label>
          <div className="flex items-center space-x-4">
            <Radio
              label="Male"
              name="sex"
              value="male"
              id="male"
              checked={formValues.sex === 'male'}
              onChange={handleChange}
            />
            <Radio
              label="Female"
              name="sex"
              value="female"
              id="female"
              checked={formValues.sex === 'female'}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <TextInput
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <TextInput
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
