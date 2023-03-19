import React, { useState } from 'react';
import { Label, Button, TextInput } from "flowbite-react";
import { Form } from "react-router-dom";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
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
          <Button type="submit" color="primary">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
